import Benefits from '@/components/benefits'
import Carousel from '@/components/carousel'
import Companies from '@/components/companies'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Team from '@/components/team'

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main>
        <Carousel />
        <Benefits />
        <Companies />
        <Team />
        <Footer />
      </main>
    </div>
  )
}
