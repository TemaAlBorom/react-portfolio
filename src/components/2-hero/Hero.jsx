import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/developer.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const lottieRef = useRef();

    return (
        <section className="hero flex">
            <div className="left-section  ">
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1.1)" }}
                        transition={{ damping: 6, type: "spring", stiffness: 100 }}
                        src="me-modified.png"
                        className="avatar"
                        alt=""
                    />
                    <div className="icon-verified"></div>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="title"
                >
                    Software engineer, designer, and full-stack developer.
                </motion.h1>

                <p className="sub-title">
                    I'm Temaa Alborom, a student passionate about software engineering.
                    I'm diving into web development to craft cool digital solutions.
                    Explore my portfolio, and let's journey through the web together!
                </p>

                <div className="all-icons flex">
                    <a href="https://twitter.com/lltemaall" className="icon icon-x"></a>
                    <a href="https://www.instagram.com/tech.temaworld/" className="icon icon-instagram"></a>
                    <a href="https://github.com/TemaAlBorom" className="icon icon-github"></a>
                    <a href="https://www.linkedin.com/feed/" className="icon icon-linkedin"></a>
                </div>

            </div>

            <div className="right-section animation ">
                <Lottie
                    lottieRef={lottieRef}
                    className=""
                    onLoadedImages={() => {
                        // @ts-ignore
                        // https://lottiereact.com/
                        lottieRef.current.setSpeed(0.5);
                    }}
                    animationData={devAnimation}
                />
            </div>
        </section>
    );
};

export default Hero;