export const animateObserver = () => {
  
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");

          entry.target.classList.add("animate__animated", "animate__fadeInUp");
        } else {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInUp",
          );
          entry.target.classList.add("opacity-0");
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
    },
  );
  
  const boxElList = document.querySelectorAll(".box");
  boxElList.forEach((el) => {
    io.observe(el);
  });
};

export const componentObserver = () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        const delay = entry.target.dataset.delay;
        entry.target.style.animationDelay = delay;
        
        entry.target.classList.remove("opacity-0");
        entry.target.classList.add("animate__animated",
            "animate__fadeIn");

       
      } else {
       
        entry.target.classList.remove("animate__animated",
            "animate__fadeIn");
        entry.target.classList.add("opacity-0");

      }
    });

  },{
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
  }
);

 
  const boxElList = document.querySelectorAll(".component-card");
  boxElList.forEach((el) => {
    io.observe(el);
  });
};
