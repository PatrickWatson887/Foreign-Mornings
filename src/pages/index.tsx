import { type NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";
import SocialMedia from "../components/socialMedia";
import YoutubeSection from "../components/youtube";

const Home: NextPage = () => {


  return (
    <Layout>
      <div className='w-screen h-screen' style={{backgroundImage: 'url("/all.JPG")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="flex flex-col h-screen w-1/2 mx-auto justify-around">
          <div className="flex flex-col gap-8">
            <text className="font-bol text-white" style={{fontSize: 56}}><span className="bg-black">New Single</span></text>
            <text className="font-bol text-white" style={{fontSize: 56}}><span className="bg-black"> Lets Go Home</span></text>
            <text className="font-bol text-white" style={{fontSize: 56}}><span className="bg-black"> 17/02/23</span></text>
            <SocialMedia />
          </div>
        </div>
      </div>
      <YoutubeSection videoId="ciLjX8QMV0g"/>
    </Layout>
  );
};

export default Home;
