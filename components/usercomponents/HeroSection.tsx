import * as motion from "motion/react-client";
import Link from "next/link";

function HeroSection() {
  return (
    <section
      className="relative h-[100svh] overflow-hidden"
      style={{
        backgroundImage: "url(/hero-section.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center bottom 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        
        {/* Motion-wrapped text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          Welcome to Sapore!
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          The House of 10 Lasagnas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-4 max-w-xl font-light lg:text-[18px]"
        >
          Discover the rich flavors of Italy right here in Addis Ababa. From our signature 10 unique lasagnas to mouthwatering lasagna burgers, pasta macaroni.
        </motion.p>

        {/* Motion-wrapped buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="mt-8 flex gap-4"
        >
          <Link href="/booking">
            <button className="bg-white font-semibold hover:bg-transparent hover:text-white text-black py-2 px-6 text-sm transition-all ease-in-out duration-300 border border-white w-fit">
              Book Table
            </button>
          </Link>
          <Link href="/menu">
            <button className="bg-transparent font-semibold hover:bg-white hover:text-black text-white py-2 px-6 text-sm transition-all ease-in-out duration-300 border border-white w-fit">
              View Menu
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
