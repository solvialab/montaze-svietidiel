import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const title = 'Flash of Light | Profesionálna montáž svietidiel';
const description =
  'Profesionálna montáž, servis a návrh interiérového aj exteriérového osvetlenia. Bratislava, Slovensko a realizácie v zahraničí.';

export const metadata: Metadata = {
  metadataBase: new URL('https://montaze-svietidiel.eu'),
  title,
  description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.png' },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Flash of Light',
    locale: 'sk_SK',
    type: 'website',
    images: [{ url: '/og.png', width: 1729, height: 910, alt: 'Flash of Light – profesionálna montáž svietidiel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: 'FLASH of LIGHT, s. r. o.',
  url: 'https://montaze-svietidiel.eu',
  image: 'https://montaze-svietidiel.eu/og.png',
  telephone: '+421902842055',
  email: 'info@montaze-svietidiel.eu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kríková 4',
    postalCode: '821 07',
    addressLocality: 'Bratislava',
    addressCountry: 'SK',
  },
  sameAs: ['https://www.facebook.com/FoLmontazesvietidiel/'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        {children}
      </body>
    </html>
  );
}
