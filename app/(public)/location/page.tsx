import Header from "@/components/usercomponents/Header"
import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
 
const locationImages = [
  '/location.jpg',
  '/location.jpg',
  '/location.jpg',
  '/location.jpg',
  '/location.jpg',
]

export default function Location() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Location Us Hero Section */}
        <section className="pt-36 md:pt-36 xl:pt-48  pb-16 md:pb-24">
          <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
            <div className="mb-16">
              <div className="flex flex-col xl:flex-row xl:gap-8 xl:items-center">
                <h1 className="font-playfair text-4xl md:text-6xl xl:text-[90px] mb-6 xl:mb-0">Location</h1>
                <p className="text-gray-500 font-light text-[18px] lg:max-w-[600px]">
                  Discover the rich flavors of Italy right here in Addis Ababa. From our signature 10 unique lasagnas
                  to mouthwatering lasagna burgers, pasta macaroni, and more, every bite is a taste of tradition with
                  a modern twist.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1217.3897886496147!2d38.78252046166136!3d8.990327096942769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b857383d8db3b%3A0x71c62f42ce8ff2db!2sSapore%20Restaurant!5e1!3m2!1sen!2set!4v1743149221724!5m2!1sen!2set" 
                  width="100%" 
                  height='100%' 
                  loading="lazy" 
                  >
                </iframe>
                
            </div>
            <div className="flex gap-4 justify-center">
                <Link href='https://maps.app.goo.gl/4wmhy7Mi6CVzAwXk6'>
                  <button
                    className="bg-black font-medium hover:bg-transparent hover:text-black border border-black text-white py-2 px-6 text-sm transition-colors w-fit mt-6"
                    >
                    Get Direction
                  </button>
                </Link>
                <Link href="tel:+251911439712" >
                  <button
                    className="bg-white text-black font-medium hover:bg-black hover:text-white border border-black py-2 px-6 text-sm transition-colors w-fit mt-6"
                    >
                    Call Us
                  </button>
                </Link>
              </div>
          </div>
        </section>

 
        {/* location carousel Section */}
        <section className="pb-16 md:pb-24">
          <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto ">
            <div className="relative xl:max-w-[50%] mx-auto">
              <Carousel className="relative">
                <CarouselContent>
                  {locationImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="relative w-full h-[300px] md:h-[400px]">
                        <Image
                          src={img}
                          alt={`Sapore Restaurant ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black" />
                <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black" />
              </Carousel>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}