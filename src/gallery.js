import { galleryImage } from "./selectors";

 const images =[
"/image/2.png",
"/image/5.png",
"/image/1.png",
"/image/4.png",
"/image/3.png",

 ];

let currentIndex = 0 ;
export const preHandler = () => {
currentIndex ++;
if (currentIndex >=images.length){
    currentIndex = 0;
}
galleryImage.src=images[currentIndex];
};
export const nextHandler = () => {
currentIndex --;
if (currentIndex < 0){
    currentIndex = images.length - 1;
}
galleryImage.src=images[currentIndex];
};