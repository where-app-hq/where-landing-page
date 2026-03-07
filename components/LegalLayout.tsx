import Nav from './Nav'
import Footer from './Footer'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
