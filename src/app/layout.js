export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>Site de Arquitetura</p>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}