import './globals.css'

export const metadata = {
  title: 'Yamil Velez - Political Science Professor',
  description: 'Portfolio of Yamil Ricardo Velez, Assistant Professor of Political Science at Columbia University',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
} 