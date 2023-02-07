import Image from 'next/image'
import Link from 'next/link'
import react from 'react'

const SocialMedia: React.FC = () => {
  const icons = [
    require('./../../../public/Facebook.png'),
    require('./../../../public/Instagram.png'),
    require('./../../../public/Twitter.png'),
    require('./../../../public/Soundcloud.jpeg'),
    require('./../../../public/Youtube.svg'),
    require('./../../../public/Spotify.png'),
  ]

  return (
    <div className='flex flex-row flex-wrap gap-2'>
      {
        icons.map((icon) => (
          <Image src={icon} alt={''} width={48} height={48}></Image>
        ))
      }
    </div>
  )
}

export default SocialMedia