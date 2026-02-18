import './globals.css';

export const metadata = {
  title: 'Aether Estate — premium real estate',
  description:
    'Современный сайт недвижимости с 3D-параллаксом, кастомным курсором и премиальной визуальной подачей.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
