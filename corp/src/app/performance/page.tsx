import { ImageComp } from "@/components"
import performanceImg from '../../../public/performance.jpg';

const Performance = () => {
  return (
    <div className='text-white'>
      <ImageComp imageData={performanceImg} alt='performance image' title='Performance Page' />
    </div>
  )
}

export default Performance