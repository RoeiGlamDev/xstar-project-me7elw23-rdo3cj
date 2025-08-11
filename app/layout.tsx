import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CleanSSR',
  description: 'CleanSSR offers innovative technology solutions with a focus on minimal design. Experience seamless cleaning services powered by technology.',
  keywords: ['technology', 'CleanSSR', 'minimal', 'cleaning services'],
  authors: [{ name: 'CleanSSR' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function