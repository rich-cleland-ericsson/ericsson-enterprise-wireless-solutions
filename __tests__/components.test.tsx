import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

// Mock the contentstack SDK
vi.mock('../contentstack-sdk', () => ({
  onEntryChange: vi.fn((callback) => callback()),
}))

// Mock the helper functions
vi.mock('../helper', () => ({
  getPageRes: vi.fn(),
}))

// Mock the render components
vi.mock('../components/render-components', () => ({
  default: ({ pageComponents }: { pageComponents: any }) => (
    <div data-testid="render-components">
      {pageComponents ? 'Components rendered' : 'No components'}
    </div>
  ),
}))

describe('Home Component', () => {
  it('should render "No Content Found" when no page data', () => {
    const mockProps = {
        page: undefined as any,
        entryUrl: '/',
        Component: null,
        entries: [{}] as any,
        pageProps: {
            page: null,
            posts: [],
            archivePost: [],
            blogPost: null,
        } as any,
        header: null as any,
        footer: null as any,
      }

    render(<Home {...mockProps} />)

    expect(screen.getByText('No Content Found')).toBeInTheDocument()
    expect(screen.getByText("This page doesn't have any content components yet.")).toBeInTheDocument()
  })

  it('should render components when page data exists', () => {
    const mockProps = {
        page: {
          uid: 'test-page',
          title: 'Test Page',
          page_components: [{ type: 'hero' }],
          locale: 'en-us',
          seo: {},
        } as any,
        entryUrl: '/',
        Component: null,
        entries: [{}] as any,
        pageProps: {
            page: null,
            posts: [],
            archivePost: [],
            blogPost: null,
        } as any,
        header: null as any,
        footer: null as any,
      }

    render(<Home {...mockProps} />)

    expect(screen.getByTestId('render-components')).toBeInTheDocument()
    expect(screen.getByText('Components rendered')).toBeInTheDocument()
  })
})