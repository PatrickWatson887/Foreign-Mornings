import SocialMedia from '../socialMedia'

const Footer: React.FC = () => {

  return (
    <>
      <div className='w-screen flex mx-auto py-16 justify-around bg-[#1f1f1f]'>
        <div className=''>
          <SocialMedia />
        </div>
      </div>
    </>
  )
}

export default Footer