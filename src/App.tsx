
import { Header, 
  Hero, 
  Features, 
  MoreInformation, 
  Testimonials,
  Form,
  Footer
} from './components'

function App() {
  

  return (
    <>
    <main className=' w-89.25 m-auto'>

      <section className='bg-Navy-850 p-6 h-105 relative'>
        <Header />
        <img 
        src="/images/illustration-intro.png" 
        alt="intro illustration" 
        className='relative z-10 mt-12 '/>
        
        <img 
        className='absolute bottom-0 left-0 '
        src="/images/bg-curvy-mobile.svg" alt="bg 
        curvy mobile" />

      </section>
      
      <section className='bg-Navy-900 p-6  pb-75'>
      <Hero />
      <Features />
      <MoreInformation />
      <Testimonials />
      <Form />
      </section>

      <section className='bg-Navy-950 h-25px relative'>
      <Form />
      <Footer />
      </section>
      
      
    </main>
      
    
    </>
  )
}

export default App
