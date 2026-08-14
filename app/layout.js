import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { QuoteCartProvider } from '@/hooks/useQuoteCart';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-body',
  display: 'swap'
});

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  display: 'swap'
});

export const metadata = {
  title: 'Innova Camionetas — Repuestos Premium para Camionetas | Valdivia, Chile',
  description: 'Innova Camionetas SpA. Somos especialistas en repuestos premium para camionetas en Valdivia. Stock permanente y envíos a todo Chile.',
  keywords: ['repuestos', 'camionetas', 'valdivia', 'chile', 'autopartes', 'innova camionetas', 'repuestos automotrices'],
  openGraph: {
    title: 'Innova Camionetas — Repuestos Premium',
    description: 'Especialistas en repuestos para camionetas que exigen más. Valdivia, Chile.',
    url: 'https://innovacamionetas.cl',
    siteName: 'Innova Camionetas',
    images: [
      {
        url: 'https://innovacamionetas.cl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Innova Camionetas',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Innova Camionetas — Repuestos Premium',
    description: 'Especialistas en repuestos para camionetas en Valdivia.',
    images: ['https://innovacamionetas.cl/twitter-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Innova Camionetas SpA',
    image: 'https://innovacamionetas.cl/logo.png',
    '@id': 'https://innovacamionetas.cl',
    url: 'https://innovacamionetas.cl',
    telephone: '+56961546709',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Valdivia',
      addressLocality: 'Valdivia',
      addressRegion: 'Los Ríos',
      postalCode: '5090000',
      addressCountry: 'CL'
    },
    description: 'Especialistas en repuestos premium para camionetas.'
  };

  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} style={{ '--font-heading': 'var(--font-heading)' }}>
        <QuoteCartProvider>
          {children}
        </QuoteCartProvider>
      </body>
    </html>
  );
}
