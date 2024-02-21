import homeImg from '../../public/home.jpg';
import { ImageComp } from '@/components';

export default function Home() {
  return (
    <div className='text-white'>
      <ImageComp imageData={homeImg} alt='home image' title='Home Page'/>
    </div>
  );
}