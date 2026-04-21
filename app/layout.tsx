import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Holistic Healing Salon - Adonai ere -',
  description: '食・身体・心・環境を整え直し、自分を取り戻すための実践サポート',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
