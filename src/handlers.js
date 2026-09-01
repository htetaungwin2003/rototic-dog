import { heroVideo  } from "./selectors";

const videos = [
"/videos/forward.mp4",
"/videos/left.mp4",
"/videos/right.mp4"
];

let currentVideo = 0 ;

const playvideo = () => {

    heroVideo.src = videos[currentVideo];
    heroVideo.play();
};


export const heroVideoHandler = () => {

    currentVideo ++ ;

    if(currentVideo >= videos.length){
        currentVideo = 0 ;
    }
    playvideo();
};



