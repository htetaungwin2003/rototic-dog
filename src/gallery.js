import { galleryImage } from "./selectors";

 const images =[
"/image/Km.jpg",
"/image/htwe.jpg",
"/image/dog.jpg",

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