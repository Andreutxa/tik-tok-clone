import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className='video'>
        
           <video 
                onClick={handleVideoPress}
                className="video-player"
                loop
                ref={videoRef}
                src={url}
                // src="https://v77.tiktokcdn.com/2b74213f326e1193fd4c722dec133609/60527cf1/video/tos/alisg/tos-alisg-pve-0037c001/1d2f3854755245109c784b8b8d9695de/?a=1233&br=3790&bt=1895&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103171604200101902192074E236EBA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdxajl2OzVpNDMzOjczM0ApZWk5Zzk7aTszN2kzZGVpZ2dqXzJfM21lNDVgLS0yMTRzcy4wNWMvMS81Ni9jYzQvMDE6Yw%3D%3D&vl=&vr="
           >
           </video>
           
            <VideoFooter 
                channel={channel} 
                description={description} 
                song={song}
            />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />

        </div>
    )
}

export default Video
