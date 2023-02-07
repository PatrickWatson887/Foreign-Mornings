import Image from 'next/image'
import Link from 'next/link'
import react from 'react'

const NavBar: React.FC = () => {
  const tabs = [
    '',
    'Music',
    'Gallery',
    'About'
  ]
  return (
    <>
      <div className='w-screen bg-white'>
        <div className='w-4/6 flex mx-auto gap-2 md:gap-0 justify-around'>
          <Image height={16} width={150} src={'/logo.JPG'} alt={''}/>
          {tabs.map((tab, index) => (
            <Link href={'/' + tab} className='my-auto hover:opacity-50' key={index}>
              <label >{tab == '' ? 'Home' : tab}</label>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default NavBar