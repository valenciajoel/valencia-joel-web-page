import './globals.css';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { LenisProvider } from '@/lib/motion/lenis-provider';
import { InteractiveGrid } from '@/features/hero/_components/interactive-grid';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Joel Valencia - Software Architect Portfolio',
  description: 'Arquitectura escalable antes que código. Priorizando el dominio.',
  icons: {
    icon: '/computer_13900295.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased min-h-screen">
        <LenisProvider>
          <InteractiveGrid />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
