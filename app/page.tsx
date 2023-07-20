import { HeroSection } from '@/components/landing/herosection'
import NavBar from '@/components/navbar'

export default function Home() {
  return (
    <main className='font-mono group/main'>
      <div className='fixed w-full ease-in-out duration-500 opacity-0 -top-full group-hover/main:top-0 group-hover/main:opacity-100'>
        <NavBar />
      </div>
      <div className='flex items-center justify-center'>
        <HeroSection />
      </div>
    </main>
  )
}
