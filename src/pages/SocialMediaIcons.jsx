import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

import { motion } from "framer-motion";


const SocialMediaIcons = () => {




  return (
    <div className="flex justify-center  md:justify-start my-10 gap-7">



      <motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 
      <a
        className="hover:-translate-y-2  transition duration-500"
        href="https://www.linkedin.com/in/selva-ganesh-g/"
        target="_blank"
        rel="noreferrer"
      >
        {/* <BsLinkedin size={28} /> */}5
      </a>
</motion.div>

{/* <motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 
      <a
        className="hover:-translate-y-2  transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter size={28} />
      </a>

</motion.div> */}

<motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 

      <a
        className="hover:-translate-y-2  transition duration-500"
        href="https://www.facebook.com/gselva.ganesh"
        target="_blank"
        rel="noreferrer"
      >
        {/* <FaFacebook size={28} /> */}3
      </a>

      </motion.div>

      <motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 


      <a
        className=" hover:-translate-y-2 transition duration-500"
        href="https://www.instagram.com/gselva.ganesh/"
        target="_blank"
        rel="noreferrer"
      >
        {/* <FaInstagramSquare size={30} /> */}2
      </a>

    
      </motion.div>
      <motion.div
  whileHover={{ scale: 1.2, rotate: 360 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}
> 


      <a
        className=" hover:-translate-y-2 transition duration-500"
        href="https://github.com/Gans19"
        target="_blank"
        rel="noreferrer"
      >
        {/* <FaGithubSquare size={30} /> */}1
      </a>

      </motion.div>

    </div>
  );
};

export default SocialMediaIcons;
