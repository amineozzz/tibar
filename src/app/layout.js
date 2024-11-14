import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import DynamicHeader from './components/DynamicHeader'
import Footer from './components/Footer'

export const metadata = {
  title: 'Noire de Thibar',
  description: 'Promotion de la filière de la viande ovine Noire de Thibar et conservation de cette race',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body>
              {children}
        </body>
      </html>
    </ClerkProvider>
  )
}