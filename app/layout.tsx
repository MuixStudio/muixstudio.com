import '@/styles/globals.css'

import type { Metadata } from 'next'
// import { fontSans } from '@/styles/fonts'
// import { fontMono } from '@/styles/fonts'
import { siteConfig } from '@/config/site'
import clsx from 'clsx'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body
            className={clsx('antialiased overflow-hidden',
                // fontSans.variable,
                // fontMono.variable,
            )}
        >
        <div className="h-screen overflow-y-auto">
            {children}
        </div>
        </body>
        </html>
    )
}
