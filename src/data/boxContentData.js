import { assets } from "../assets/assets";

const boxContentData = {
  data1: {
    tag: "Security Locks",
    heading: "A key that works everywhere",
    subheading:
      "Auto-Unlock detects when you arrive and unlocks the door. Enable Auto-Lock to lock when the door closes.",
    description:
      "Welcome home to an even smarter home. Upgrade your deadbolt with the all new August Wi-Fi Smart Lock, a lock so smart, it simplifies your daily life and the way your family lives. And with built-in WiFi, our lock requires no additional bridge to connect.",
    image: assets.smartLock.default,
    image2x: assets.smartLock.highRes,
    linkTo: "/product/security-lock",
    linkText: "Learn More",
    reverse: false,
  },
  data2: {
    tag: "Smart Lighting",
    heading: "Lighting that adapts to your lifestyle",
    subheading: "Set moods, schedules and voice control your lights.",
    description:
      "Smart lighting solutions that match your energy and routine with effortless automation.",
    image: assets.smartLight,
    image2x: assets.smartLight.highRes,
    linkTo: "/product/smart-light",
    linkText: "Shop Now",
    reverse: true,
  },
};

export default boxContentData;
