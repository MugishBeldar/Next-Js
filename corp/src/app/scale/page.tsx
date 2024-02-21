import { ImageComp } from "@/components"
import scaleImg from '../../../public/scale.jpg'

const Scale = () => {
    return (
        <div className='text-white'>
            <ImageComp imageData={scaleImg} alt='scale image' title='Scale Page' />
        </div>
    )
}

export default Scale