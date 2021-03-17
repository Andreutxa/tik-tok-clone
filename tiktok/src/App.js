import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">

      <div className="app-videos">
        
        <Video 
          url='https://v77.tiktokcdn.com/2b74213f326e1193fd4c722dec133609/60527cf1/video/tos/alisg/tos-alisg-pve-0037c001/1d2f3854755245109c784b8b8d9695de/?a=1233&br=3790&bt=1895&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103171604200101902192074E236EBA&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdxajl2OzVpNDMzOjczM0ApZWk5Zzk7aTszN2kzZGVpZ2dqXzJfM21lNDVgLS0yMTRzcy4wNWMvMS81Ni9jYzQvMDE6Yw%3D%3D&vl=&vr=' 
          channel='thekiryalife'
          description='YOOO THIS WORKS'
          song='99 problems but REACT aint one'
          likes={123}
          shares={456}
          messages={789}
        />
        <Video 
          url='https://v77.tiktokcdn.com/ead8431bd781e10f78cefa80278522a8/60527c3a/video/tos/alisg/tos-alisg-pve-0037c001/5ee8dc9dc9074039ad9a6f75be84bbd4/?a=1233&br=2178&bt=1089&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=2&er=&l=2021031716011601019018615454224E40&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dwbTk7Z2U7NDMzNjczM0ApN2ZnNGZpZjtnNzZoOGk2ZWc0MGcvbHNxXjJgLS1hMTRzc180MF5jXjJgNS1fM2I0LWI6Yw%3D%3D&vl=&vr=' 
          channel='thekiryalife'
          description='YOOO THIS WORKS'
          song='99 problems but REACT aint one'
          likes={999}
          shares={276}
          messages={124}
        />
      </div>

     {/* app container */}
        {/* videos */}
          {/* <Video/> */}
          {/* <Video/> */}
          {/* <Video/> */}
          {/* <Video/> */}

    </div>
  );
}

export default App;
