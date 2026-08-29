import { heroVideo } from "./selectors";

const videos = [
"/videos/videoplayback.mp4",
"/videos/vd2.mp4",
"/videos/htet.mp4"
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