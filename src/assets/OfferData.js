import img1 from "../assets/images/img1.jpg";
import img1_2x from "../assets/images/img1@2x.jpg";
import img2 from "../assets/images/img2.jpg";
import img2_2x from "../assets/images/img2@2x.jpg";
import img3 from "../assets/images/img3.jpg";
import img3_2x from "../assets/images/img3@2x.jpg";
// OfferData.js (optional: you can also inline this array)
const offerData = [
  {
    id: 1,
    title: "Up to 50% off on smart speakers",
    link: "/categories/speakers",
    image: {
      src: img1,
      srcSet: `${img1} 1x, ${img1_2x} 2x`,
    },
  },
  {
    id: 2,
    title: "Noise-cancelling power for your focus and flow",
    link: "/categories/headphones",
    image: {
      src: img2,
      srcSet: `${img2} 1x, ${img2_2x} 2x`,
    },
  },
  {
    id: 3,
    title: "Reliable backup power for all your devices",
    link: "/categories/powerbanks",
    image: {
      src: img3,
      srcSet: `${img3} 1x, ${img3_2x} 2x`,
    },
    spanCols: true, // for layout flexibility
  },
];

export default offerData;
