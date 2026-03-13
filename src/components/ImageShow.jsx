import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.png'
import img8 from '../assets/img8.png'
import img9 from '../assets/img9.png'
import img10 from '../assets/img10.png'
import img11 from '../assets/img11.png'
import img12 from '../assets/img12.png'
import img13 from '../assets/img13.png'
import img14 from '../assets/img14.png'
import img15 from '../assets/img15.png'
import img16 from '../assets/img16.png'
import img17 from '../assets/img17.png'
import img18 from '../assets/img18.png'
import img19 from '../assets/img19.png'
import img20 from '../assets/img20.png'
import img21 from '../assets/img21.png'
import img22 from '../assets/img22.png'
import img23 from '../assets/img23.png'
import img24 from '../assets/img24.png'
import img25 from '../assets/img25.png'

const ImageShow = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25]
    return (

        <div className=' space-y-1 w-full flex flex-col items-end'>
            {images.map((image, index) => (
                <div className=' space-y-1 py-20 w-full md:w-[97%] max-h-full bg-[#F5F5F5] flex flex-col justify-center items-center'>
                    <img className='size-2/3' key={index} src={image} alt="loading..." />
                </div>

            ))}
        </div>

    )
}

export default ImageShow