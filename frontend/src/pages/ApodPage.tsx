import { motion } from "framer-motion";
import ApodContainer from "../features/apod/containers/ApodContainer";

/**
 * ApodPage
 * Displays the APOD (Astronomy Picture of the Day) page with animated title, description, and content.
 */
const ApodPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 -mx-4 md:mx-0">
      <div className="max-w-7xl mx-auto w-full py-4 sm:py-8 md:py-12 px-4 sm:px-4 md:px-6 lg:px-8">
        {/* Animated heading + description */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 sm:mb-10 md:mb-12 px-0"
        >
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-snug">
            NASA Astronomy Picture of the Day
          </h1>
          <motion.p
            className="text-xs sm:text-sm md:text-base text-cyan-200 max-w-xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Discover the cosmos through NASA's daily celestial
            showcase
          </motion.p>
        </motion.div>

        {/* APOD content container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full"
        >
          <ApodContainer />
        </motion.div>
      </div>
    </div>
  );
};

export default ApodPage;
