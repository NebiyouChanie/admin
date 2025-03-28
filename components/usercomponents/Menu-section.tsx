import * as motion from "motion/react-client";
import Link from 'next/link';
import Image from "next/image";

function MenuSection() {
  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image Section with Motion */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}  // Image moves to normal position
            initial={{ opacity: 0, x: -100 }}  // Image starts from the left
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative h-[320px] md:h-[500px] overflow-hidden order-2 md:order-1"
          >
            <Image
              src="/menu-section.jpg"
              alt="Signature pasta dish"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text Section with Motion */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}  // Text moves to normal position
            initial={{ opacity: 0, x: 100 }}  // Text starts from the right
            transition={{ duration: 1.3, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}  // Trigger when 50% of the element is visible
            className="order-1 md:order-2 text-center md:text-start"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-6">Our Menu</h2>
            <p className="text-gray-500 font-light text-[18px] mb-4">
              Our menu features 10 distinct lasagna recipes, each crafted with authentic Italian ingredients and
              traditional techniques. From the rich and hearty Bolognese to our vegetarian options, there's
              something for everyone.
            </p>
            <p className="text-gray-500 font-light text-[18px] mb-4">
              Beyond our signature lasagnas, we also offer a selection of appetizers, salads, and desserts to
              complete your dining experience. All our dishes are made fresh daily using locally sourced ingredients
              whenever possible.
            </p>
            <Link href="/menu">
              <button
                className="bg-white font-medium hover:bg-black hover:text-white text-black py-2 px-6 text-sm transition-all ease-in-out duration-300 border border-black w-fit mt-6"
              >
                View Menu
              </button>
            </Link>  
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
