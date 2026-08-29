import { nextHandler, preHandler } from "./gallery";
import { heroVideoHandler } from "./handlers";

import { heroVideo, nextBtn, preBtn } from "./selectors";

const listener = () => {

preBtn.addEventListener("click",preHandler);
nextBtn.addEventListener("click",nextHandler);
heroVideo.addEventListener("ended",heroVideoHandler)

};

export default listener;