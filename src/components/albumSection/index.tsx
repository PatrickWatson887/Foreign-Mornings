import react from 'react'
import AlbumPlayer from '../albumPlayer'

interface AlbumSectionProps {
  title: string
  description: string
}

const AlbumSection: React.FC<AlbumSectionProps> = ({title, description}) => {

  return (
    <div className='bg-white w-screen grid grid-cols-1 md:grid-cols-2 gap-5 p-4'>
      <div className='md:ml-auto md:mx-0 mx-auto'>
        <AlbumPlayer />
      </div>
      <div className='md:mr-auto md:mx-0 mx-auto md:w-1/2 px-3'>
        <h1 className='text-semi-bold text-xl'>{title}</h1>
        <div className='bg-black h-2 w-16 mt-10 mb-5'></div>
        <text className=''>{description}</text>
      </div>
    </div>
  )
}

export default AlbumSection