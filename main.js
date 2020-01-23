let tl = gsap.timeline({ repeat: -1 });
tl.from(".imageSlider__text--1", 2, {
  y: "-50px",
  opacity: 0,
  stagger: 1,
  ease: "expo.inOut"
})
  .to(".imageSlider__image--img1", 6, {
    backgroundSize: "100%",
    ease: "sine.out"
  })
  .to(".imageSlider__ImagesContainer", 2, {
    left: "-100%",
    ease: "power3.inOut"
  })
  .from(".imageSlider__text--2", 2, {
    y: "-50px",
    opacity: 0,
    stagger: 1,
    ease: "expo.inOut"
  })
  .to(".imageSlider__image--img2", 6, {
    backgroundSize: "100%",
    ease: "sine.out"
  })
  .to(".imageSlider__ImagesContainer", 2, {
    left: "-200%",
    ease: "power3.inOut"
  })
  .from(".imageSlider__text--3", 2, {
    y: "-50px",
    opacity: 0,
    stagger: 1,
    ease: "expo.inOut"
  })
  .to(".imageSlider__image--img3", 6, {
    backgroundSize: "100%",
    ease: "sine.out"
  })
  .to(".imageSlider__ImagesContainer", 2, {
    left: "-300%",
    ease: "power3.inOut"
  })
  .from(".imageSlider__text--4", 2, {
    y: "-50px",
    opacity: 0,
    stagger: 1,
    ease: "expo.inOut"
  })
  .to(".imageSlider__image--img4", 6, {
    backgroundSize: "100%",
    ease: "sine.out"
  })
  .to(".imageSlider__ImagesContainer", 2, {
    left: "-400%",
    ease: "power3.inOut"
  })
  .from(".imageSlider__text--5", 2, {
    y: "-50px",
    opacity: 0,
    stagger: 1,
    ease: "expo.inOut"
  })
  .to(".imageSlider__image--img5", 6, {
    backgroundSize: "100%",
    ease: "sine.out"
  })
  .to(".imageSlider__ImagesContainer", 2, {
    left: "-500%",
    ease: "power3.inOut"
  })
  .from(".imageSlider__text--6", 2, {
    y: "-50px",
    opacity: 0,
    stagger: 1,
    ease: "expo.inOut"
  })
  .to(".imageSlider__image--img6", 6, {
    backgroundSize: "100%",
    ease: "sine.out"
  })
  .to(".imageSlider__ImagesContainer", 2, {
    left: "-600%",
    ease: "power3.inOut"
  })
  .to(".imageSlider__ImagesContainer", 0, { left: "0%", ease: "sine.out" });

// SHOW BORDER ANIMATION
menueBorderShow = (top, bottom, borderWidth) => {
  topName = top;
  bottomName = bottom;

  gsap.fromTo(
    topName,
    1,
    {
      width: 0,
      background: "rgb(227, 221, 205)",
      immediateRender: false,
      autoRound: false
    },
    {
      width: borderWidth,
      background: "rgb(227, 221, 205)"
    }
  );
  gsap.fromTo(
    bottomName,
    1,
    {
      width: 0,
      background: "rgb(227, 221, 205)",
      immediateRender: false,
      autoRound: false
    },
    {
      width: borderWidth,
      background: "rgb(227, 221, 205)"
    }
  );
};
//HIDE BORDER ANIMATION
menueBorderHide = (top, bottom, borderWidth) => {
  topName = top;
  bottomName = bottom;
  gsap.fromTo(
    topName,
    1,
    {
      width: borderWidth,
      background: "rgb(227, 221, 205)",
      immediateRender: false,
      autoRound: false
    },
    {
      width: 0,
      background: "rgb(227, 221, 205)"
    }
  );
  gsap.fromTo(
    bottomName,
    1,
    {
      width: borderWidth,
      background: "rgb(227, 221, 205)",
      immediateRender: false,
      autoRound: false
    },
    {
      width: 0,
      background: "rgb(227, 221, 205)"
    }
  );
};

// BOOK A TABLE BORDER ANIMATION
let bookTableBorder = new TimelineMax({
  repeat: -1,
  yoyo: true
});

// TOP FILL
bookTableBorder.fromTo(
  ".sideBookBut__border--top",
  1,
  {
    width: 0,
    background: "rgb(48, 48, 48)",
    immediateRender: false,
    autoRound: false
  },
  {
    width: 277,
    background: "rgb(48, 48, 48)"
  }
);

// BOTTOM FILL
bookTableBorder.fromTo(
  ".sideBookBut__border--bottom",
  1,
  {
    width: 0,
    background: "rgb(48, 48, 48)",
    immediateRender: false,
    autoRound: false
  },
  {
    width: 277,
    background: "rgb(48, 48, 48)"
  },
  "-=1"
);

// RIGHT FILL
bookTableBorder.fromTo(
  ".sideBookBut__border--right",
  1,
  {
    height: 0,
    background: "rgb(48, 48, 48)",
    immediateRender: false,
    autoRound: false
  },
  {
    height: 78,
    background: "rgb(48, 48, 48)"
  }
);

// LEFT FILL
bookTableBorder.fromTo(
  ".sideBookBut__border--left",
  1,
  {
    height: 0,
    background: "rgb(48, 48, 48)",
    immediateRender: false,
    autoRound: false
  },
  {
    height: 78,
    background: "rgb(48, 48, 48)"
  },
  "-=1"
);
// // LEFT EMPTY
bookTableBorder.to(".sideBookBut__border--left", 1, {
  height: 0,
  background: "rgb(48, 48, 48)"
});

// // BOTTOM EMPTY
bookTableBorder.to(".sideBookBut__border--bottom", 1, {
  width: 0,
  background: "rgb(48, 48, 48)"
});

// RIGHT EMPTY
bookTableBorder.to(".sideBookBut__border--right", 1, {
  height: 0,
  background: "rgb(48, 48, 48)"
});

// TOP EMPTY
bookTableBorder.to(".sideBookBut__border--top", 1, {
  width: 0,
  background: "rgb(48, 48, 48)"
});
