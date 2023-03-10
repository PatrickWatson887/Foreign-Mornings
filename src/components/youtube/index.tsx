import YouTube, { YouTubeProps } from 'react-youtube';
interface YoutubeSectionProps {
  videoId: string
}

const YoutubeSection: React.FC<YoutubeSectionProps> = ({videoId}) => {
  const onPlayerReady = (event: { target: { pauseVideo: () => void; }; }) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  return (
    <div className="flex mx-auto justify-around my-10">
      <YouTube videoId={videoId} opts={{
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        }} 
        className=''
        onReady={onPlayerReady} 
      />
    </div>
  )
}

export default YoutubeSection