import Image from 'next/image'
import Link from 'next/link'
import react from 'react'

const SocialMedia: React.FC = () => {

  return (
    <div className='flex flex-row gap-2'>
    <Image src={'/Facebook.png'} alt={''} width={48} height={48}></Image>
    <Image src={'/Instagram.png'} alt={''} width={48} height={48}></Image>
    <Image src={'/Twitter.png'} alt={''} width={48} height={48}></Image>
    <Image src={'/Soundcloud.jpeg'} alt={''} width={48} height={48}></Image>
    <Image src={'/Youtube.svg'} alt={''} width={48} height={48}></Image>
    <Image src={'/Spotify.png'} alt={''} width={48} height={48}></Image>

    </div>
  )
}

export default SocialMedia