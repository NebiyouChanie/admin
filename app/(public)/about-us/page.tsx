import Header from "@/components/usercomponents/Header"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <main className="flex-1  ">
        {/* About Us Hero Section */}
        <section className="pt-36 md:pt-36 xl:pt-48">
          <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
            
              <div className="mb-16">
                <div className="flex flex-col xl:flex-row xl:gap-8 xl:items-center">
                  <h1 className="font-playfair text-4xl md:text-6xl xl:text-[90px] mb-6 xl:mb-0">About Us</h1>
                  <p className="text-gray-500 font-light text-[18px] lg:max-w-[600px] ">
                    Discover the rich flavors of Italy right here in Addis Ababa. From our signature 10 unique lasagnas
                    to mouthwatering lasagna burgers, pasta macaroni, and more, every bite is a taste of tradition with
                    a modern twist.
                  </p>
                </div>
              </div>

              <div className="relative w-full h-[300px] md:h-[400px]  overflow-hidden">
                <Image
                  src="/location.jpg"
                  alt="Restaurant interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
         
        </section>

        {/* Our Chefs Section */}
        <section className="py-16 md:py-24 xl:py-48">
          <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="text-center md:text-start">
                  <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-6">Our Chefs</h2>
                  <p className="text-gray-500 font-light mb-4 text-[18px]">
                    At Sapore Restaurant, we bring the heart of Italy to Addis Ababa with our passion for authentic
                    flavors and handcrafted dishes. Known as "The House of 10 Lasagnas", we take pride in offering a
                    unique selection of lasagna alongside a variety of Italian classics, from fresh pasta to wood-fired
                    pizzas.
                  </p>
                  <p className="text-gray-500 font-light mb-4 text-[18px]">
                    Our team of experienced chefs, trained in traditional Italian cooking techniques, pour their
                    expertise and creativity into every dish. They carefully select the finest ingredients, combining
                    imported Italian specialties with fresh local produce to create an authentic yet innovative dining
                    experience.
                  </p>
                </div>
                <div className="relative w-full h-[320px] md:h-[500px] overflow-hidden">
                  <Image
                    src="/location.jpg"
                    alt="Restaurant interior"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our time Section */}
        <section className="pb-16 md:pb-24">
          <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Text Section */}
                <div className="text-center md:text-start order-1 md:order-2">
                  <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-6">
                    Opening Hours
                  </h2>
                  <p className="text-gray-500 font-light mb-6 text-[18px]">
                    Our restaurant operates from 7:30 AM to 10 PM on weekdays and
                    Saturdays, and from 11 AM to 10 PM on Sundays.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-light text-[18px]">Monday - Friday</span>
                      <span className="text-gray-500 font-light text-[18px]">7:30 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-light text-[18px]">Saturday</span>
                      <span className="text-gray-500 font-light text-[18px]">7:30 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-light text-[18px]">Sunday</span>
                      <span className="text-gray-500 font-light text-[18px]">11:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative w-full h-[320px] md:h-[500px] overflow-hidden order-2 md:order-1">
                  <Image
                    src="/location.jpg"
                    alt="Restaurant interior"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

