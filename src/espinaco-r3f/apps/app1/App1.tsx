import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls, Stars } from '@react-three/drei';


type ConfigurationApp1 = {
    url: string,
    style: CSSStyleSheet
}

const BASE_URL_HEROKU_VIDEO_YT_DL = 'https://video-dl-esp.herokuapp.com/video/video?url=';
const BASE_URL_LOCAL_VIDEO_YT_DL = 'http://localhost:4000/video/video?url=';


export default function App1({ configuration = {} }) {
    const { url, style } = configuration as ConfigurationApp1;
    console.log("url en app1: url");

    let firstUrl = url ? BASE_URL_HEROKU_VIDEO_YT_DL + url : "https://www.youtube.com/watch?v=ZelTFpXStE8";
    const [link, setLink] = useState<string>(firstUrl);

    return (
        <div className="App1">
            <h1>HELLOWORLD APP 1</h1>
            <Canvas style={{...style, backgroundColor:'black'}} camera={{position:[0,0,400], far: 99999 }}>
            {/* <Suspense fallback={<Box material-color='red' material-wireframe='true'/>}>
                <Scene1/>
                <Box/>
            </Suspense> */}

            <Stars />

            <OrbitControls />

            {/* <Suspense fallback={<Box material-color='green' material-wireframe='true'/>}>
                <MemoryCardGame />
            </Suspense> */}


            {/* <GodCameraControls />  */}
            </Canvas>
        </div>
    );
}
