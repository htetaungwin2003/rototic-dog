import { mobileBtnHandler } from "./handlers";
import { mobileBtn } from "./selectors";

const listener = () => {
mobileBtn.addEventListener("click",mobileBtnHandler);
};

export default listener;