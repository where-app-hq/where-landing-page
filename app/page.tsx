import AnnouncementBar from '@/components/AnnouncementBar'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Features from '@/components/Features'
import WhereBot from '@/components/WhereBot'
import Testimonials from '@/components/Testimonials'
import SignUp from '@/components/SignUp'
import Footer from '@/components/Footer'
import { WAITLIST_CURRENT } from '@/lib/waitlist'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Nav />
      <Hero />
      <TrustBar />
      <Features />
      <WhereBot />
      <Testimonials />
      <SignUp current={WAITLIST_CURRENT} />
      <Footer />
    </main>
  )
}
