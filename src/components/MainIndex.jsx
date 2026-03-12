import Index from '../components/Index'
import Navbar from '../components/Navbar'
import ImageShow from '../components/ImageShow'

const MainIndex = () => {
    return (
        <div className="h-screen w-full bg-[#FFFFFF] grid grid-cols-[1fr_2fr]">
            <div className="p-5 sticky top-0 h-screen">
                <Navbar />
                <Index />
            </div>
            <div className=" h-screen overflow-y-auto ">
                <ImageShow />
            </div>

        </div>
    )
}

export default MainIndex