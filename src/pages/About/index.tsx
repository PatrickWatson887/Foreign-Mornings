import Layout from '../../components/layout'

const About: React.FC = () => {

  return (
    <Layout>
      <div className='' style={{backgroundImage: 'url("/all.JPG")', backgroundSize: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="flex flex-col w-1/2 mx-auto justify-around">
          <div className="flex flex-col ml-auto bg-white p-4">
          <h1 className='text-semi-bold text-xl'>Who the hell are Foreign Mornings</h1>
          <div className='bg-black h-2 w-16 mt-10 mb-5'></div>
          <text className='w-96'>Fast-paced alt. Rock N Roll rooted in the 90's. Hailing from Belfast, they combine loud guitars, crashing drums and a strong sense of melody into one package, taking their inspirations from the likes of Nirvana, Foo Fighters, The Cure and Pixies. <br/><br/>Formed in 2019 by Michael Wilkinson, the band took to the stage for the first time later that year in Michael’s hometown of Bangor. They picked up a few more gigs in Belfast before the Coronavirus Pandemic brought the world to a halt. During that time, they saw the arrival of Reece McGuinness on lead guitar in mid 2020 before releasing their debut EP, ‘Springhill Avenue’ in late 2020. The band then welcomed Colm Mulholland on bass in 2021 shortly before returning to the stage in October 2021 following the Coronavirus Pandemic. They released their hit single, ‘Sleepwalking’, in early 2022 followed by a string of live shows all across Northern Ireland throughout 2022. In late 2022, the band welcomed the arrival of Jack Mckenna on drums and now look to take to the stage again in 2023 with new music and a host of live shows.</text>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About