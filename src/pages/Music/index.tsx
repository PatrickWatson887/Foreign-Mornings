import Image from 'next/image'
import Link from 'next/link'
import react from 'react'
import AlbumSection from '../../components/albumSection'
import Layout from '../../components/layout'
import YoutubeSection from '../../components/youtube'

const Music: React.FC = () => {

  return (
    <Layout>
      <div  className='' style={{backgroundImage: 'url("/wilky.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        <div className='flex mx-auto justify-around py-56'>
          <text className='text-white font-bold' style={{fontSize: 72}}><span className='p-3'>M</span><span className='p-3'>u</span><span className='p-3'>s</span><span className='p-3'>i</span><span className='p-3'>c</span></text>
        </div>
        <AlbumSection title="I won't mind" description=''/>
        <YoutubeSection videoId='ciLjX8QMV0g'/>
        <AlbumSection title='Sleepwalking' description={`Sleepwalking is a lockdown inspired track. It tell's the story of a relationship falling apart due to the separation we all felt during this time. However it takes a more positive outlook on this otherwise depressing turn of events, "wherever I wake up, I'll be on my way". It's basically saying that yes this has happened, but it's alright, I'm going to get on with my life and I'm not gonna let it drag me down. Michael - "The track was originally written in April of 2020, just acoustic guitar and vocals. I think we got to jam about with it a bit that summer but we weren't all properly together until half way through 2021. It came together quickly though and we headed into the studio in September 2021 to do the drums, we then did the majority of the rest of it ourselves then went back into the studio to add a few extra bits before ending up where we did with the finished product."`}/>
        <YoutubeSection videoId='rACWVyoryJ4'/>
        <AlbumSection title="Springhill Avenue" description={`Springhill Avenue is a collection of tracks from the first few months of Foreign Mornings. They basically all follow a theme of being eighteen/nineteen years old and having absolutely no idea what is going on but dreaming of just what might be possible All the tracks on this EP were written in 2018 and 2019 but were only recorded in the summer of 2020 and finally released a few months later. The drums were recorded by Neal Calderwood in manor park studios and the rest was recorded by the band themselves at home before being sent back to Neal for the mixing process.`}/>

      </div>
    </Layout>
  )
}

export default Music