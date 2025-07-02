import smartLock from "../assets/images/smartLock.jpg";
import smartLock_2x from "../assets/images/smartLock@2x.jpg";
import smartLight from "../assets/images/smartLight.jpg";
import smartLight_2x from "../assets/images/smartLight@2x.jpg";

const boxContentData = {
  data1: {
    tag: "Security Locks",
    heading: "A key that works everywhere",
    subheading:
      "Auto-Unlock detects when you arrive and unlocks the door. Enable Auto-Lock to lock when the door closes.",
    description:
      "Welcome home to an even smarter home. Upgrade your deadbolt with the all new August Wi-Fi Smart Lock, a lock so smart, it simplifies your daily life and the way your family lives. And with built-in WiFi, our lock requires no additional bridge to connect.",
    image: smartLock,
    image2x: smartLock_2x,
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
    image: smartLight,
    image2x: smartLight_2x,
    linkTo: "/product/smart-light",
    linkText: "Shop Now",
    reverse: true,
  },
};

export default boxContentData;
