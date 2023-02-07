import react from 'react'

interface AlbumSectionProps {
  title: string
  description: string
}

const AlbumSection: React.FC<AlbumSectionProps> = ({title, description}) => {

  return (
    <div className='bg-white w-screen grid grid-cols-1 md:grid-cols-2 gap-5 p-4'>
      <div className='md:ml-auto sm:mx-auto'>
        1
      </div>
      <div className='mr-auto w-1/2'>
        <h1 className='text-semi-bold text-xl'>{title}</h1>
        <div className='bg-black h-2 w-16 mt-10 mb-5'></div>
        <text className=''>{description}</text>
      </div>
    </div>
  )
}

export default AlbumSection