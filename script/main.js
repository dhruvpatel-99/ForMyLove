// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.2, {
    visibility: "visible",
  })
    .from(".one", 1.1, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.6, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      1.0,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .to(
      ".two",
      1.0,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".three", 1.1, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      1.1,
      {
        opacity: 0,
        y: 10,
      },
      "+=3"
    )
    .from(".four", 1.0, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.35, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.65,
      {
        visibility: "visible",
      },
      0.075
    )
    .to(".fake-btn", 0.15, {
      backgroundColor: "rgb(127, 206, 248)",
    })
    .to(
      ".four",
      0.65,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=1.0"
    )
    .from(".idea-1", 1.0, ideaTextTrans)
    .to(".idea-1", 1.0, ideaTextTransLeave, "+=2.0")
    .from(".idea-2", 1.0, ideaTextTrans)
    .to(".idea-2", 1.0, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 1.2, ideaTextTrans)
    .to(".idea-3 strong", 0.75, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 1.1, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 1.0, ideaTextTrans)
    .to(".idea-4", 1.0, ideaTextTransLeave, "+=2.0")
    .from(
      ".idea-5",
      1.2,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.75"
    )
    .to(
      ".idea-5 span",
      1.2,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.6"
    )
    .to(
      ".idea-5",
      1.2,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=3"
    )
    .staggerFrom(
      ".idea-6 span",
      1.15,
      {
        scale: 1.5,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.3
    )
    .staggerTo(
      ".idea-6 span",
      1.15,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.3,
      "+=1.4"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.75,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.6, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      1.0,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      3.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.75
    )
    .to(".six", 0.75, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      1.0,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then((data) => data.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
