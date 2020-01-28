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
mapButBorderShow = arr => {
  gsap.fromTo(
    arr[0],
    1,
    {
      width: 0,
      immediateRender: false,
      autoRound: false
    },
    {
      width: 95,
      background: "rgb(48, 48, 48)"
    }
  );
  gsap.fromTo(
    arr[1],
    1,
    {
      width: 0,
      immediateRender: false,
      autoRound: false
    },
    {
      width: 95,
      background: "rgb(48, 48, 48)"
    }
  );
  gsap.fromTo(
    arr[2],
    1,
    {
      height: 0,
      immediateRender: false,
      autoRound: false
    },
    {
      height: 57,
      background: "rgb(48, 48, 48)"
    }
  );
  gsap.fromTo(
    arr[3],
    1,
    {
      height: 0,
      immediateRender: false,
      autoRound: false
    },
    {
      height: 57,
      background: "rgb(48, 48, 48)"
    }
  );
  gsap.fromTo(
    arr[4],
    1,
    {
      width: 0,
      immediateRender: false,
      autoRound: false
    },
    {
      width: 238,
      background: "rgb(48, 48, 48)"
    }
  );
  if (arr[5]) {
    gsap.fromTo(
      ".openInMap__blackLeaf",
      2,
      {
        y: -20,
        opacity: 0,
        immediateRender: false,
        autoRound: false
      },
      {
        opacity: 1,
        y: 0
      }
    );
  }
};
// HIDE OPEN IN GOOGLE MAP BORDER ANIMATION
mapButBorderHide = arr => {
  gsap.fromTo(
    arr[0],
    1,
    {
      width: 95,
      immediateRender: false,
      autoRound: false
    },
    {
      width: 0
    }
  );
  gsap.fromTo(
    arr[1],
    1,
    {
      width: 95,
      immediateRender: false,
      autoRound: false
    },
    {
      width: 0
    }
  );
  gsap.fromTo(
    arr[2],
    1,
    {
      height: 57,
      immediateRender: false,
      autoRound: false
    },
    {
      height: 0
    }
  );
  gsap.fromTo(
    arr[3],
    1,
    {
      height: 57,
      immediateRender: false,
      autoRound: false
    },
    {
      height: 0
    }
  );
  gsap.fromTo(
    arr[4],
    1,
    {
      width: 238,
      immediateRender: false,
      autoRound: false
    },
    {
      width: 0
    }
  );
  if (arr[5]) {
    gsap.fromTo(
      ".openInMap__blackLeaf",
      1,
      {
        y: 0,
        opacity: 0,
        immediateRender: false,
        autoRound: false
      },
      {
        opacity: 0,
        y: -20
      }
    );
  }
};
//HIDE MENU
hideMenuAnimation = (tableName, lineName) => {
  gsap.to(tableName, 1, {
    opacity: 0
  });
  gsap.to(lineName, 1, {
    width: 0
  });
};

// SHOW ADDRESS SECTION BORDERS
showAddBorders = borderName => {
  gsap.fromTo(
    borderName,
    1,
    {
      width: "0%",
      immediateRender: false,
      autoRound: false
    },
    {
      width: "100%"
    }
  );
};

// HIDE ADDRESS SECTION BORDERS
hideAddBorders = borderName => {
  gsap.fromTo(
    borderName,
    1,
    {
      width: "100%",
      immediateRender: false,
      autoRound: false
    },
    {
      width: "0%"
    }
  );
};

// SHOWING PARAGRAPH TEXTS ANIMATION
showParaTextAnimation = (textName, hasLeaf = "") => {
  gsap.fromTo(
    textName,
    1,
    {
      y: 200,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1
    }
  );
  if (hasLeaf) {
    gsap.fromTo(
      hasLeaf,
      1,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1
      }
    );
  }
};

// HIDING PARAGRAPH TEXTS ANIMATION
hideParaTextAnimation = (textName, hasLeaf = "") => {
  gsap.fromTo(
    textName,
    1,
    {
      y: 0,
      opacity: 1
    },
    {
      y: 200,
      opacity: 0
    }
  );
  if (hasLeaf) {
    gsap.fromTo(
      hasLeaf,
      1,
      {
        y: 0,
        opacity: 1
      },
      {
        y: 100,
        opacity: 0
      }
    );
  }
};

breakBone = () => {
  gsap.to(".boneImg", 0.1, { x: "+=20", yoyo: true, repeat: 5 });
  gsap.to(".boneImg", 0.1, { x: "-=20", yoyo: true, repeat: 5 });
  gsap.set(".boneImg", {
    attr: { src: "./images/brokenBone.png" },
    delay: 0.5
  });
  // boneText
  gsap.fromTo(
    ".boneText",
    1,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 0.85
    }
  );
};

// SHOW HAMBURGER TEXT
showHamburgerText = () => {
  gsap.fromTo(
    ".hamburgerText",
    1,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 0.85
    }
  );
};

hideHamburgerText = () => {
  gsap.fromTo(
    ".hamburgerText",
    1,
    {
      y: 0,
      opacity: 0.85
    },
    {
      y: 100,
      opacity: 0
    }
  );
};

let isVisible = [false, false, false, false, false];
let tables = document.querySelectorAll(".table");
let addBorders = document.querySelectorAll(".addInfoContainer__border");
let animateParaText = document.querySelectorAll(".animateParaText");
let animateParaTextIsVisible = [];
let shouldBreakBone = true;
// HAMBURGER TEXT FLAG
let hamburgerTextHidden = true;
animateParaText.forEach((_, index) => {
  animateParaTextIsVisible[index] = false;
});
tables.forEach((_, index) => {
  switch (index + 1) {
    case 1:
      hideParaTextAnimation(
        `.animateParaText--${index + 1}`,
        ".firstRow__leaf"
      );
      break;
    case 3:
      hideParaTextAnimation(
        `.animateParaText--${index + 1}`,
        ".thirdRow__leaf"
      );
      break;
    case 4:
      hideParaTextAnimation(
        `.animateParaText--${index + 1}`,
        ".fifthRow__leaf"
      );
      break;

    default:
      hideParaTextAnimation(`.animateParaText--${index + 1}`, "");
      break;
  }
});
let mapBorderIsVisible = false;
let addBorderIsVisible = [false, false];
tables.forEach((_, index) => {
  hideMenuAnimation(
    `.tableAnimate${index + 1}`,
    `.tableHeader__line${index + 1}`
  );
});

// BOLD MAP TEXT BORDERS FOR HOVER
let boldBorders = [
  ".openInMap__border--boldTopLeft",
  ".openInMap__border--boldTopRight",
  ".openInMap__border--boldRight",
  ".openInMap__border--boldLeft",
  ".openInMap__border--boldBottom",
  false
];
// MAP TEXT BORDERS
let mainBorders = [
  ".openInMap__border--topLeft",
  ".openInMap__border--topRight",
  ".openInMap__border--right",
  ".openInMap__border--left",
  ".openInMap__border--bottom",
  true
];

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
  // OPEN IN MAP BUTTON SHOW ANIMATION
  let mapBound = document.querySelector(".openInMap").getBoundingClientRect();
  if (window.innerHeight - mapBound.top > 20 && !mapBorderIsVisible) {
    mapBorderIsVisible = true;
    mapButBorderShow(mainBorders);
  } else if (window.innerHeight - mapBound.top < -100 && mapBorderIsVisible) {
    mapBorderIsVisible = false;
    mapButBorderHide(mainBorders);
  }
  // ADDRESS SECTION BORDERS
  addBorders.forEach((elem, index) => {
    let addBoundRects = elem.getBoundingClientRect();
    if (
      window.innerHeight - addBoundRects.top > 20 &&
      !addBorderIsVisible[index]
    ) {
      addBorderIsVisible[index] = true;
      showAddBorders(`.addInfoContainer__border--${index + 1}`);
    } else if (
      window.innerHeight - addBoundRects.top < -300 &&
      addBorderIsVisible[index]
    ) {
      addBorderIsVisible[index] = false;
      hideAddBorders(`.addInfoContainer__border--${index + 1}`);
    }
  });
  // SHOWING AND HIDING PARATEXT
  animateParaText.forEach((element, index) => {
    let paraTextBounding = element.getBoundingClientRect();
    if (
      window.innerHeight - paraTextBounding.top > -100 &&
      !animateParaTextIsVisible[index]
    ) {
      animateParaTextIsVisible[index] = true;
      switch (index + 1) {
        case 1:
          showParaTextAnimation(
            `.animateParaText--${index + 1}`,
            ".firstRow__leaf"
          );
          break;
        case 3:
          showParaTextAnimation(
            `.animateParaText--${index + 1}`,
            ".thirdRow__leaf"
          );
          break;
        case 4:
          showParaTextAnimation(
            `.animateParaText--${index + 1}`,
            ".fifthRow__leaf"
          );
          break;

        default:
          showParaTextAnimation(`.animateParaText--${index + 1}`, "");
          break;
      }
    } else if (
      window.innerHeight - paraTextBounding.top < -300 &&
      animateParaTextIsVisible[index]
    ) {
      animateParaTextIsVisible[index] = false;
      switch (index + 1) {
        case 1:
          hideParaTextAnimation(
            `.animateParaText--${index + 1}`,
            ".firstRow__leaf"
          );
          break;
        case 3:
          hideParaTextAnimation(
            `.animateParaText--${index + 1}`,
            ".thirdRow__leaf"
          );
          break;
        case 4:
          hideParaTextAnimation(
            `.animateParaText--${index + 1}`,
            ".fifthRow__leaf"
          );
          break;

        default:
          hideParaTextAnimation(`.animateParaText--${index + 1}`, "");
          break;
      }
    }
    let botBreadMargTop = document.querySelector(".bottomBread").style.marginTop;
    if (
      botBreadMargTop == "-30px" &&
      hamburgerTextHidden
    ) {
      showHamburgerText();
      hamburgerTextHidden = false;
    } else if (botBreadMargTop != "-30px" && !hamburgerTextHidden) {
      hideHamburgerText();
      hamburgerTextHidden = true;
    }
  });
  // BREAK THE BONE
  let boneBound = document
    .querySelector(".secondRow__bone")
    .getBoundingClientRect();
  if (shouldBreakBone) {
    if (window.innerHeight - boneBound.top > 400) {
      breakBone();
      shouldBreakBone = false;
    }
  }
});
// OPEN IN MAP BUTTON HOVER SHOW ANIMATION
let openInMapElem = document.querySelector(".openInMap");
openInMapElem.addEventListener("mouseenter", () => {
  mapButBorderShow(boldBorders);
});
openInMapElem.addEventListener("mouseleave", () => {
  mapButBorderHide(boldBorders);
});

// GOOGLE MAP
let map;
function initMap() {
  let restaurant = { lat: 45.500744, lng: -73.557908 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: restaurant,
    zoom: 14
  });
  let marker = new google.maps.Marker({
    position: restaurant,
    map: map,
    icon: "./images/mapMarker.png",
    title: "Vallier Bistro"
  });
}
