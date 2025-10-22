"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Replace this with your actual data
const portfolioData = {
  socials: [
    { name: "GitHub", url: "https://github.com/Ali-Aftab503" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aliaftabch/" },
    { name: "Medium", url: "https://medium.com/@talhabinaftabch6" },
    { name: "Dev.to", url: "https://dev.to/aliaftabch3503" },
    { name: "Instagram", url: "https://www.instagram.com/aliaftabahmad503?igsh=bjc0Nm5hbmNsbjlv" },
  ],
  email: "aliaftab3503@gmail.com"
};

export default function SocialSidebar() {
  const [showMobileSocial, setShowMobileSocial] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero and footer sections
      const heroSection = document.querySelector('section:first-of-type');
      const footerSection = document.querySelector('footer');
      
      if (!heroSection) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const footerTop = footerSection ? footerSection.getBoundingClientRect().top : Infinity;
      const windowHeight = window.innerHeight;

      // Show mobile social when scrolled past hero (hero is off screen)
      // and hide when footer is approaching (leaving 100px gap)
      const isPastHero = heroBottom < 0;
      const isBeforeFooter = footerTop > (windowHeight - 100);

      setShowMobileSocial(isPastHero && isBeforeFooter);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      x: 5,
      color: "#0ea5e9",
      transition: { duration: 0.3 },
    },
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.555.636-1.911-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.195 22 16.44 22 12.017 22 6.484 17.523 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "medium":
        return (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
        );
      case "dev.to":
        return (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Left Sidebar - Desktop */}
      <div className="hidden lg:flex fixed left-0 top-0 h-screen flex-col justify-center items-center gap-8 pl-8 pointer-events-auto z-50">
        <div className="flex flex-col gap-6">
          {portfolioData.socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={index}
              variants={socialIconVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label={social.name}
            >
              {getSocialIcon(social.name)}
            </motion.a>
          ))}
        </div>

        {/* Vertical Line */}
        <div className="w-px h-24 bg-gradient-to-b from-gray-600 to-transparent "></div>
      </div>

      {/* Right Sidebar - Email and vertical line */}
      <motion.div
        className="hidden lg:flex fixed right-0 top-0 h-screen flex-col justify-center items-center gap-8 pr-8 pointer-events-auto z-50"
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href={`mailto:${portfolioData.email}`}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.6,
                duration: 0.5,
              },
            },
            hover: {
              x: -5,
              transition: { duration: 0.3 },
            },
          }}
          whileHover="hover"
          className="text-gray-400 hover:text-blue-400 transition-colors text-sm font-mono tracking-widest vertical-writing"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {portfolioData.email}
        </motion.a>

        {/* Vertical Line */}
        <div className="w-px h-24 bg-gradient-to-b from-gray-600 to-transparent "></div>
      </motion.div>

      {/* Mobile Social Links - Sticky Bottom with Smart Visibility */}
      <motion.div
        className="lg:hidden fixed bottom-8 left-0 right-0 flex justify-center gap-6 pointer-events-auto z-40 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showMobileSocial ? 1 : 0,
          y: showMobileSocial ? 0 : 20,
        }}
        style={{ 
          pointerEvents: showMobileSocial ? 'auto' : 'none',
          transition: 'opacity 0.3s ease, transform 0.3s ease'
        }}
      >
        <div className="flex gap-4 bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
          {portfolioData.socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label={social.name}
            >
              {getSocialIcon(social.name)}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}