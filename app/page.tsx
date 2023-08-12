import { HeroSection } from '@/components/landing/herosection'
import { Ribbon } from '@/components/landing/ribbon'
import { QuoteSection } from '@/components/landing/quotesection'
import { ProjectShowcase } from '@/components/landing/projectshowcase'
import NavBar from '@/components/navbar'

export default function Home() {
  return (
    <main className='font-mono group/main'>
      <div className={`fixed w-full ease-in-out duration-500 opacity-0 -top-full group-hover/main:top-0 group-hover/main:opacity-100`}>
        <NavBar />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <HeroSection />
        <Ribbon />
        <QuoteSection />
        <ProjectShowcase />
      </div>
    </main>
  )
}
