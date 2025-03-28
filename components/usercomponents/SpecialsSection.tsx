import * as motion from "motion/react-client";
import Image from "next/image";

function SpecialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-medium mb-4">Our Specials</h2>
        <p className="text-gray-500 font-light text-[18px] max-w-2xl mx-auto mb-12">
          Four of our 10 signature lasagnas, each representing the diverse culinary traditions of Italy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item, index) => (
            <SpecialItem key={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SpecialItem = ({ index }: { index: number }) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, x: -50, rotate: -20 }} // Initial state with a slight rotation
      whileInView={{
        opacity: 1,
        x: 0,
        rotate: 0,  
      }}
      viewport={{ once: true, amount: 0.5 }} 
      transition={{
        duration: 0.7,
        delay: index * 0.2, 
        ease: "easeInOut",
      }}
    >
      <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden mb-2">
        <Image
          src="/special.jpg"
          alt={`Sicilia Lasagna ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-playfair font-medium text-lg">Sicilia Lasagna</h3>
    </motion.div>
  );
};

export default SpecialsSection;
