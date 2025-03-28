import * as motion from "motion/react-client";
import Link from "next/link";
import Image from "next/image";

function AboutusSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Section with Motion */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.3, ease: "easeInOut" }} // Same duration and easing as the image
            viewport={{ once: true, amount: 0.5 }}
            className="text-center md:text-start"
          >
            <h2
              className="text-4xl md:text-5xl font-medium mb-6"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              About Us
            </h2>
            <p className="text-gray-500 font-light mb-4 text-[18px]">
              At Sapore Restaurant, we're the House of Italy's 10 best lasagna dishes. We've perfected our recipes
              over decades and are proud to bring you authentic Italian flavors.
            </p>
            <p className="text-gray-500 font-light mb-4 text-[18px]">
              Our chef's passion for Italian cuisine has led to creating a unique selection of lasagna recipes, each
              with its own story and distinctive taste that will transport you straight to Italy.
            </p>
            <p className="text-gray-500 font-light text-[18px]">
              We believe in using only the finest ingredients, preparing everything from scratch daily, and serving
              our dishes with love. Our commitment to quality ensures an exceptional dining experience every time
              you visit.
              <Link href="/about-us" className="text-black underline">
                Read More
              </Link>
            </p>
          </motion.div>

          {/* Image Section with Motion */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.3, ease: "easeInOut" }} // Same duration and easing as the text
            viewport={{ once: true }}
            className="relative h-[450px] md:h-[650px] overflow-hidden"
          >
            <Image
              src="/aboutus-section.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutusSection;
