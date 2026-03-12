import Index from '../components/Index'
import Navbar from '../components/Navbar'

const Process = () => {
  const process = [
    { title: "001 Align", des: "We dig into your goals, users, and constraints. We create moodboards, map user flows and design wireframes so everyone's on the same page." },
    { title: "002 Direct", des: "We design the key screens and establish a clear visual direction. You sign off before we build out the rest." },
    { title: "003 Build", des: "We design every screen, state, and edge case. Internal reviews keep everything consistent and ship-ready." },
    { title: "004 Polish", des: "We refine details, define interactions, and hand over organised files your developers can build from." },
  ]
  return (
    <div className="h-screen w-full bg-[#FFFFFF] grid grid-cols-[1fr_2fr]">
      <div className="p-5 sticky top-0 h-screen">
        <Navbar />
        <div className=' mt-10 space-y-5'>
          <div className=" space-y-5">
            <h1 className="text-[22px] font-normal leading-6.75 text-black max-w-[18rem]">From kickoff to handoff, how we get through it</h1>
            <p className="text-[14px]  max-w-68">Once you subscribe, we set up a shared Slack or Telegram channel and we get started that very day. You'll hear from us 2-3 times a week with progress updates, questions, and work to review.</p>
          </div>

          {process.map((item,index)=>(
            <div className=' space-y-2' key={index}>
              <p className='text-[#737373] text-[14px] '>{item.title}</p>
            <p className="text-[14px]  max-w-68">{item.des}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Process