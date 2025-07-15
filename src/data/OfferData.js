import { assets } from "../assets/assets"; // OfferData.js (optional: you can also inline this array)

const offerData = [
  {
    id: 1,
    title: "Up to 50% off on smart speakers",
    link: "/categories",
    image: {
      src: assets.offer.img1,
      srcSet: `${assets.offer.img1} 1x, ${assets.offer.img1_2x} 2x`,
    },
  },
  {
    id: 2,
    title: "Noise-cancelling power for your focus and flow",
    link: "/categories",
    image: {
      src: assets.offer.img2,
      srcSet: `${assets.offer.img2} 1x, ${assets.offer.img2_2x} 2x`,
    },
  },
  {
    id: 3,
    title: "Reliable backup power for all your devices",
    link: "/categories",
    image: {
      src: assets.offer.img3,
      srcSet: `${assets.offer.img3} 1x, ${assets.offer.img3_2x} 2x`,
    },
    spanCols: true, // for layout flexibility
  },
];

export default offerData;
