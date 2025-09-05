import { describe, it, expect, vi, beforeEach } from 'vitest'
import { getHeaderRes, getFooterRes, getAllEntries } from '../helper'

// Mock the contentstack SDK
vi.mock('../contentstack-sdk', () => ({
  getEntry: vi.fn(),
  getEntryByUrl: vi.fn(),
}))

// Mock next/config
vi.mock('next/config', () => ({
  default: () => ({
    publicRuntimeConfig: {
      CONTENTSTACK_API_KEY: 'test-key',
      CONTENTSTACK_DELIVERY_TOKEN: 'test-token',
      CONTENTSTACK_BRANCH: 'main',
      CONTENTSTACK_REGION: 'us',
      CONTENTSTACK_ENVIRONMENT: 'test',
      CONTENTSTACK_LIVE_EDIT_TAGS: 'false',
    },
  }),
}))

describe('Helper Functions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getHeaderRes', () => {
    it('should return mock header when API fails', async () => {
      const { getEntry } = await import('../contentstack-sdk')
      vi.mocked(getEntry).mockRejectedValue(new Error('API Error'))

      const result = await getHeaderRes()

      expect(result).toHaveProperty('title', 'Contentstack Next.js Starter')
      expect(result).toHaveProperty('uid', 'mock-header')
      expect(result).toHaveProperty('locale', 'en-us')
    })

    it('should return API data when successful', async () => {
      const { getEntry } = await import('../contentstack-sdk')
      const mockApiResponse = {
        title: 'Test Header',
        uid: 'test-header',
        locale: 'en-us',
        logo: { url: '/test-logo.png', title: 'Test Logo' },
        navigation_menu: [],
        notification_bar: {
          show_announcement: false,
          announcement_text: '',
          $: { title: {}, url: '', copyright: '', announcement_text: '', label: {} }
        },
        social: { social_links: [], social_share: [] },
        navigation: { link: [] },
        copyright: '© 2024 Test',
        $: { title: {}, url: '', copyright: '© 2024 Test', announcement_text: '', label: {} }
      }

      vi.mocked(getEntry).mockResolvedValue([[mockApiResponse]])

      const result = await getHeaderRes()

      expect(result).toEqual(mockApiResponse)
    })
  })

  describe('getFooterRes', () => {
    it('should return mock footer when API fails', async () => {
      const { getEntry } = await import('../contentstack-sdk')
      vi.mocked(getEntry).mockRejectedValue(new Error('API Error'))

      const result = await getFooterRes()

      expect(result).toHaveProperty('title', 'Contentstack Next.js Starter')
      expect(result).toHaveProperty('uid', 'mock-footer')
      expect(result).toHaveProperty('copyright', '© 2024 Contentstack. All rights reserved.')
    })
  })

  describe('getAllEntries', () => {
    it('should return empty array when API fails', async () => {
      const { getEntry } = await import('../contentstack-sdk')
      vi.mocked(getEntry).mockRejectedValue(new Error('API Error'))

      const result = await getAllEntries()

      expect(result).toEqual([])
    })

    it('should return pages when API succeeds', async () => {
      const { getEntry } = await import('../contentstack-sdk')
      const mockPages = [
        { uid: 'page1', title: 'Page 1', url: '/page1' },
        { uid: 'page2', title: 'Page 2', url: '/page2' }
      ]

      vi.mocked(getEntry).mockResolvedValue([mockPages])

      const result = await getAllEntries()

      expect(result).toEqual(mockPages)
    })
  })
})