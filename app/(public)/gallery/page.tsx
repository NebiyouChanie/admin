import GridGallery from "@/components/usercomponents/FoodGrid"
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

              <div className="relative w-full overflow-hidden">
                  <GridGallery />
                  <GridGallery />
                  <GridGallery />
                  <GridGallery />
              </div>
            </div>
        </section>
       </main>
    </div>
  )
}

