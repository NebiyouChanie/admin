import BookingForm from "@/components/usercomponents/BookingForm"
import Header from "@/components/usercomponents/Header"
import Image from "next/image"

export default function Booking() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Header />

      <main className="flex-1  ">
        {/* About Us Hero Section */}
        <section className="pt-36 md:pt-36 xl:pt-48 mb-16">
          <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
            
              <div className="mb-16">
                <div className="flex flex-col xl:flex-row xl:gap-8 xl:items-center">
                  <h1 className="font-playfair text-4xl md:text-6xl xl:text-[90px] mb-6 xl:mb-0">Booking</h1>
                  <p className="text-gray-500 font-light text-[18px] lg:max-w-[600px] ">
                    Discover the rich flavors of Italy right here in Addis Ababa. From our signature 10 unique lasagnas
                    to mouthwatering lasagna burgers, pasta macaroni, and more, every bite is a taste of tradition with
                    a modern twist.
                  </p>
                </div>
              </div>

              <div className="relative w-full overflow-hidden">
                <div className="grid md:grid-cols-2 xl:grid-cols-[1fr_2fr] items-center gap-0">
                  <BookingForm />
                  <div className="relative border border-black w-full h-[300px] md:h-full">
                    <div className="">
                    <Image
                      src="/location.jpg"
                      alt="Restaurant interior"
                      fill
                      className="object-cover"
                      priority
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <p className="text-white text-2xl md:text-3xl lg:text-5xl font-playfair text-center px-4">
                        Book An Unforgettable Moment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
        </section>

         
      </main>
    </div>
  )
}

