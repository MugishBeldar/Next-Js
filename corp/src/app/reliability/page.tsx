import { ImageComp } from "@/components"
import reliabilityImg from '../../../public/reliability.jpg'
const Reliability = () => {
    return (
        <div className='text-white'>
            <ImageComp imageData={reliabilityImg} alt='reliability image' title='Reliability Page' />
        </div>
    )
}

export default Reliability