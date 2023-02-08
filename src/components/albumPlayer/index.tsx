import Image from 'next/image'

const AlbumPlayer: React.FC = () => {
  const singles = [
    {title: 'Dreams', length:'4:17'},
    {title: 'These Nights', length:'5:02'},
    {title: 'Appetence On Fire', length:'3:49'},
    {title: 'Life in Chains', length:'4:24'},
  ]

  return (
    <div className='flex flex-col'>
      <Image width={400} height={400} src='/album.png' alt='' />
      <text className='text-center mt-8'>I won't mind</text>
      <text className='text-center mt-4'>Foreign Mornings / I won't mind</text>
      <div className='flex flex-row mx-auto gap-3 my-8'>
        <div className='w-4 h-4 rounded-full mt-1 bg-black'></div>
        <div className='w-5 h-5 rounded-full mt-1 bg-black'></div>
        <div className='w-7 h-7 rounded-full bg-black'></div>
        <div className='w-5 h-5 rounded-full mt-1 bg-black'></div>
        <div className='w-4 h-4 rounded-full mt-1 bg-black'></div>
      </div>
      {
        singles.map((single, index) => (
          <div className='flex flex-row border-y p-3 hover:bg-gray-200' key={index}>
            <div className='flex-none'>
              {index}
            </div>
            <div className='flex-1 ml-8'>
              {single.title}
            </div>
            <div>
              {single.length}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AlbumPlayer