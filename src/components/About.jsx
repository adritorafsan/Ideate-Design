import Index from '../components/Index'
import Navbar from '../components/Navbar'

const About = () => {
  return (
      <div className="h-screen w-full bg-[#FFFFFF] grid justify-center items-center md:grid-cols-[1fr_2fr]">
            <div className="p-5 sticky top-0 h-screen">
               <Navbar />
               <div className='mt-10 space-y-4.5'>
                <h1 className='text-[22px] font-normal  text-black max-w-[18rem]'>Endless was founded in 2023 by Daryl Ginn</h1>
                <p className="text-[14px]  max-w-68">Hey, I'm Daryl Ginn, I've been designing for over 20 years, and I've always wanted to put together the strongest team of designers I possibly could in the effort to have a larger impact in design.</p>
                <p className="text-[14px]  max-w-68">Since starting Endless, we've worked with some of the largest companies in the world, and helped many new and existing companies raise millions of capital.</p>
                <p className="text-[14px]  max-w-68">I'm a big believer in being humble, but I do truly believe we do some of the best work in this space. And the day I no longer do will be the day we stop.</p>
                <div className=' space-y-.5 text-[14px] max-w-68'>
                  <p>signature</p>
                  <p>Adrito Rafsan</p>
                  <p>Founder</p>
                </div>
               </div>
            </div>
        </div>
  )
}

export default About