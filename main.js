// IMAGE SLIDER ANIMATION
let tl = gsap.timeline({ repeat: -1 });
tl.from(".imageSlider__text--1", 2, {
  y: "-50px",
  opacity: 0,
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
// LEFT EMPTY
bookTableBorder.to(".sideBookBut__border--left", 1, {
  height: 0,
  background: "rgb(48, 48, 48)"
});

// BOTTOM EMPTY
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

// SHOW MENU
showMenuAnimation = (tableName, lineName) => {
  gsap.fromTo(
    tableName,
    1,
    {
      y: 300,
      opacity: 0
    },
    {
      opacity: 1,
      stagger: 0.1,
      y: 0
    }
  );
  gsap.fromTo(
    lineName,
    1,
    {
      width: 0
    },
    {
      width: "100%"
    }
  );
};

// SHOW OPEN IN GOOGLE MAP BORDER ANIMATION
mapButBorderShow = () => {
  // gsap.fromTo(
  //   ".openInMap__border--topLeft",
  //   1,
  //   {
  //     width: 0,
  //     immediateRender: false,
  //     autoRound: false
  //   },
  //   {
  //     width: 95,
  //     background: "rgb(48, 48, 48)"
  //   }
  // );
  // gsap.fromTo(
  //   ".openInMap__border--topRight",
  //   1,
  //   {
  //     width: 0,
  //     immediateRender: false,
  //     autoRound: false
  //   },
  //   {
  //     width: 95,
  //     background: "rgb(48, 48, 48)"
  //   }
  // );
  gsap.fromTo(
    ".openInMap__border--right",
    1,
    {
      heigth: 0,
      immediateRender: false,
      autoRound: false,
      background: "rgb(48, 48, 48)"
    },
    {
      height: 57,
      background: "rgb(48, 48, 48)"
    }
  );
  gsap.fromTo(
    ".openInMap__border--left",
    1,
    {
      heigth: 0,
      immediateRender: false,
      autoRound: false
    },
    {
      height: 57,
      background: "rgb(48, 48, 48)"
    }
  );
  // gsap.fromTo(
  //   ".openInMap__border--bottom",
  //   1,
  //   {
  //     width: 0,
  //     immediateRender: false,
  //     autoRound: false
  //   },
  //   {
  //     width: 238,
  //     background: "rgb(48, 48, 48)"
  //   }
  // );
};
mapButBorderShow();
//HIDE MENU
hideMenuAnimation = (tableName, lineName) => {
  gsap.to(tableName, 1, {
    opacity: 0
  });
  gsap.to(lineName, 1, {
    width: 0
  });
};

let isVisible = [false, false, false, false, false];
let tables = document.querySelectorAll(".table");
let mapBorderIsVisible = false;
tables.forEach((_, index) => {
  hideMenuAnimation(
    `.tableAnimate${index + 1}`,
    `.tableHeader__line${index + 1}`
  );
});

// SCROLL TRIGGER ANIMATIONS
window.addEventListener("scroll", function(e) {
  // SHOW AND HIDING MENU FOODS
  tables.forEach((element, index) => {
    let bounding = element.getBoundingClientRect();
    if (window.innerHeight - bounding.top > 210 && !isVisible[index]) {
      isVisible[index] = true;
      showMenuAnimation(
        `.tableAnimate${index + 1}`,
        `.tableHeader__line${index + 1}`
      );
    } else if (window.innerHeight - bounding.top < 100 && isVisible[index]) {
      isVisible[index] = false;
      hideMenuAnimation(
        `.tableAnimate${index + 1}`,
        `.tableHeader__line${index + 1}`
      );
    }
  });
  let mapBound = document.querySelector(".openInMap").getBoundingClientRect();
  if (window.innerHeight - mapBound.top > 210 && !mapBorderIsVisible) {
    mapBorderIsVisible = true;
    mapButBorderShow();
  } else if (window.innerHeight - mapBound.top < 100 && mapBorderIsVisible) {
    mapBorderIsVisible = false;
    mapButBorderHide();
  }
});
