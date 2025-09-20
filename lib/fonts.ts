import localFont from 'next/font/local';

export const ericssonHilda = localFont({
    src: [
        {
            path: '../public/fonts/EricssonHilda-ExtraLight.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/EricssonHilda-Light.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/EricssonHilda-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/EricssonHilda-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/EricssonHilda-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/EricssonHilda-ExtraBold.woff2',
            weight: '800',
            style: 'normal',
        },
    ],
    variable: '--font-ericsson-hilda',
    display: 'swap',
})