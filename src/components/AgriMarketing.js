import bgimg from "../images/bg.png"
import img from '../images/img.png'
import img1 from '../images/img1.png'
import video from '../images/video.mp4'
const AgriMarketing = () => {
    return (
        <div>
            <img src={bgimg} className='h-[100vh] w-[100vw] pt-16' />
            <div className='h-[56vh] w-[56vw] flex flex-col items-center gap-y-6 ml-80 mt-32'>
                <h1 className='text-4xl uppercase text-gray-600'>Our  <span className='text-emerald-900'>value</span> proposition</h1>
                <p className='text-gray-600 font-semibold text-center'>Sampann krishi accommodates direct transactions between buyers and
                    sellers. All intermediate supply chain stages are covered by Agri MP
                    and our partnership network. See our premium partners for more
                    information.</p>
                <video width="80%" playsinline="true" autoplay="autoplay" muted="muted" loop="loop" type="video/mp4" src={video}></video>
            </div>
            <img src={img} className='mt-44' />
            <div className='h-[56vh] w-[56vw] flex flex-col items-center gap-y-6 ml-80 mt-24'>
                <h1 className='text-4xl uppercase text-gray-600'>Our <span className='text-emerald-900'>Services</span></h1>
                <p className='text-gray-600 font-semibold text-center'>Sampann krishi provides all of the following services through internal operations
                    in combination with our specialised partnership network.</p>
                <img src={img1} />
            </div>
        </div>
    )
}
export default AgriMarketing