import * as motion from "motion/react-client";
import Link from 'next/link'
import Image from "next/image"

function TestimonialSection() {
  return (
    <section className="py-20 md:py-24 bg-gray-800 text-white relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: "url(/location.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center bottom 20%",
          backgroundRepeat: "no-repeat",
          zIndex: 0 
        }}
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div> 

      {/* Content Container */}
      <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto text-center relative z-20">
        <h2 className="font-playfair text-4xl md:text-5xl mb-12">
          Words From Happy Customers
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8 relative z-20">
          {/* Testimonial 1 */}
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}  // Start animation when 50% of the element is in view
          >
            <div className="mr-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/sapore-logo.svg"
                  alt="Customer 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-start">
              <p className="italic mb-4">
                "The best lasagna I've ever had! The flavors were incredible and the service was outstanding. Will
                definitely be coming back again."
              </p>
              <p className="font-medium">- Happy Customer 1</p>
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay:0.2 }}
            viewport={{ once: true, amount: 0.5 }}  // Start animation when 50% of the element is in view
          >
            <div className="mr-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/sapore-logo.svg"
                  alt="Customer 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-start">
              <p className="italic mb-4">
                "A delightful experience! The lasagna was superb, and the ambiance made it a perfect evening. Highly recommend!"
              </p>
              <p className="font-medium">- Happy Customer 2</p>
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay:0.3 }}
            viewport={{ once: true, amount: 0.5 }}   
          >
            <div className="mr-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/sapore-logo.svg"
                  alt="Customer 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-start">
              <p className="italic mb-4">
                "An unforgettable meal. The flavors were rich and full of depth. A must-visit for anyone who loves great Italian food!"
              </p>
              <p className="font-medium">- Happy Customer 3</p>
            </div>
          </motion.div>
        </div>

         
          <Link
            href="#booking"
            className="bg-white font-medium hover:bg-transparent hover:text-white hover:border-white border border-transparent text-black px-6 py-2 transition-colors relative z-20"
          >
            Rate Us
          </Link>
        
      </div>
    </section>
  )
}

export default TestimonialSection
