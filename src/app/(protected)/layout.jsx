import './globals.css'
import DynamicHeader from './components/DynamicHeader'
import Footer from './components/Footer'


export default function Layout({ children }) {
  return (
          <div className="flex flex-col min-h-screen">
            <DynamicHeader />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
  )
}