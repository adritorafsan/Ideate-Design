import Index from '../components/Index'
import Navbar from '../components/Navbar'
import ImageShow from '../components/ImageShow'

const MainIndex = () => {
    return (
        <div className=" w-full bg-[#FFFFFF] grid  gap-y-5 md:gap-y-0 md:grid-cols-[1fr_2fr]">
            <div className="p-5 md:sticky md:h-screen md:top-0  mx-auto mb-20 md:mx-0">
                <Navbar />
                <Index />
            </div>
            <div className="  mt-10 md:mt-0  md:mx-auto">
                <ImageShow />
            </div>

        </div>
    )
}

export default MainIndex