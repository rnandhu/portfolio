import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import "@/styles/styles.scss";
import Logo from "./../assets/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import EntranceAnimation from "@/components/enter/EnterAnimation";
import About from "./about";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export default function App({ Component, pageProps, router }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 10000); // Animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main">
      <AnimatePresence mode="wait">
        {showAnimation ? (
          <EntranceAnimation
            key="entrance"
            onAnimationComplete={() => setShowAnimation(false)}
          />
        ) : (
          <>
            <Header />
            {/* 
      <div className="header px-16">
        <div className="logo">
          <Link href="/">
            <Image src={Logo} height={100} width={100} alt="logo" />
          </Link>
        </div>
        <div className="links text-white">
          <motion.div whileTap={{ scale: 0.8 }}>
            <Link href="/">Home</Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }}>
            <Link href="/about">About</Link>
          </motion.div>
          <motion.div whileTap={{ scale: 0.8 }}>
            <Link href="/contact">Contact</Link>
          </motion.div>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div> */}

            {/* <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </motion.div>
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </motion.div>
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
            >
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
            <AnimatePresence mode="wait">
              <Component key={router.route} {...pageProps} />
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
