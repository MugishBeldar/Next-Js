import Image from 'next/image';
import type { StaticImageData } from 'next/image'

interface ImageProps {
    imageData: StaticImageData;
    title: string;
    alt: string;
}
const ImageComp = ({ imageData, title, alt }: ImageProps) => {
    return (
        <div className="absolute -z-10 inset-0">
            <Image
                src={imageData}
                alt={alt}
                fill
                style={{ objectFit: 'cover' }}
            />
            <div className='absolute h-screen w-screen flex justify-center items-center bg-gradient-to-r from-slate-900'>
                <p className='text-9xl'>{title}</p>
            </div>
        </div>
    )
}

export default ImageComp