import YouTube from 'react-youtube';
import { css } from '../../../styled-system/css';

const videoContainerStyle = css({
  maxWidth: '100%',
  margin: '0 auto',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'flex-start',
});

const ResponsiveYouTube = css({
  width: '100%',
  height: '100%',
});

const YouTubeVideo = () => {
  const videoId = 'dQw4w9WgXcQ';

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={videoContainerStyle}>
      <YouTube className={ResponsiveYouTube} videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
