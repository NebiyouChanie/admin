import Header from "@/components/usercomponents/Header"
import Image from "next/image"
import Link from "next/link"

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
        
      <Header />

      <main className="flex-1  ">
         {/*Menu Hero Section */}
        <section className="pt-36 md:pt-36 xl:pt-48">
          <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
              <div className="mb-16">
                <div className="flex flex-col xl:flex-row xl:gap-8 xl:items-center">
                  <h1 className="font-playfair text-4xl md:text-6xl xl:text-[90px] mb-6 xl:mb-0">Menu</h1>
                  <p className="text-gray-500 font-light text-[18px] lg:max-w-[600px] ">
                    Discover the rich flavors of Italy right here in Addis Ababa. From our signature 10 unique lasagnas
                    to mouthwatering lasagna burgers, pasta macaroni, and more, every bite is a taste of tradition with
                    a modern twist.
                  </p>
                </div>
              </div>



            <div className="mb-10">
              <h2 className="font-medium mb-4">Quick Links:</h2>
              <div className="flex flex-wrap gap-4">
                <a href="#pasta" className="px-4 py-2 bg-gray-100 hover:bg-amber-100  transition-colors">
                  Pasta
                </a>
                <a href="#salad" className="px-4 py-2 bg-gray-100 hover:bg-amber-100  transition-colors">
                  Salad
                </a>
                <a href="#lasagna" className="px-4 py-2 bg-gray-100 hover:bg-amber-100  transition-colors">
                  Lasagna
                </a>
                <a
                  href="#traditional"
                  className="px-4 py-2 bg-gray-100 hover:bg-amber-100  transition-colors"
                >
                  Traditional
                </a>
                <a href="#pizza" className="px-4 py-2 bg-gray-100 hover:bg-amber-100  transition-colors">
                  Pizza
                </a>
                <a href="#fast-foods" className="px-4 py-2 bg-gray-100 hover:bg-amber-100  transition-colors">
                  Fast Foods
                </a>
                <a href="#combo" className="px-4 py-2 bg-gray-100 hover:bg-amber-100  transition-colors">
                  Combo
                </a>
              </div>
            </div>
            </div>
            </section>

            {/* Lasagna Section */}
            <section id="lasagna" className="mb-20">
              <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[400px]  overflow-hidden">
                  <Image src="/location.jpg?height=400&width=300" alt="Lasagna" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h2 className="font-playfair text-3xl font-bold text-white">Lasagna</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Sapore Lasagna"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Sapore Lasagna</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Rich beef, pork mince, mozzarella, parmesan, tomato sauce, herbs and spices
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Classic Lasagna"
                          fill
                          className="object-cover"
                          />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Classic Lasagna</h3>
                          <span className="font-medium">$20</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Traditional Italian style with layers of pasta, beef ragù, béchamel sauce
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Cheese Lasagna"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Cheese Lasagna</h3>
                          <span className="font-medium">$18</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Four cheese blend, béchamel, mozzarella, ricotta, parmesan, tomato sauce, fresh herbs
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Beef Lasagna"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Beef Lasagna</h3>
                          <span className="font-medium">$20</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Angus beef sauce, caramelized onions, mushrooms, mozzarella, parmesan, fresh herbs
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Lasagna Bianca"
                          fill
                          className="object-cover"
                          />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Lasagna Bianca</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          White sauce, chicken, mushrooms, spinach, mozzarella, parmesan, fresh herbs
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Lasagna Verde"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Lasagna Verde</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Spinach pasta, ricotta, zucchini, pesto, mozzarella, parmesan, pine nuts
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Vegan Lasagna"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Vegan Lasagna</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Plant-based bolognese, vegan cheese, roasted vegetables, spinach & basil, tomato sauce,
                          nutritional yeast
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Fish Lasagna"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Fish Lasagna</h3>
                          <span className="font-medium">$22</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Sea bass, salmon, caramelized onions, white wine sauce, mozzarella, dill, lemon zest, spring
                          greens
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* Pizza Section */}
            <section id="pizza" className="mb-20">
              <div className="container px-4 md:px-10 xl:px-32 2xl:px-40 mx-auto">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[400px]  overflow-hidden">
                  <Image src="/location.jpg?height=400&width=300" alt="Pizza" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h2 className="font-playfair text-3xl font-bold text-white">Pizza</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/location.jpg?height=80&width=80"
                          alt="Quattro Formaggi"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Quattro Formaggi</h3>
                          <span className="font-medium">$17</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Mozzarella, gorgonzola, fontina, parmigiano, olive oil & parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Quattro Stagioni"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Quattro Stagioni</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Artichokes, ham, mushrooms, olives & tomato sauce, mozzarella, basil
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Margherita"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Margherita</h3>
                          <span className="font-medium">$16</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Italian pizza sauce topped with mozzarella, fresh basil leaves & parmesan cheese
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Beef" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Beef</h3>
                          <span className="font-medium">$18</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Italian pizza sauce topped with mozzarella, beef, onions, bell peppers & mushrooms
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Pepperoni"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Pepperoni</h3>
                          <span className="font-medium">$17</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Italian pizza sauce topped with mozzarella, pepperoni, oregano & parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Tuna" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Tuna</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Italian pizza sauce topped with mozzarella, tuna, onions, olives & capers
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Veggie" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Veggie</h3>
                          <span className="font-medium">$17</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Italian pizza sauce topped with mozzarella, bell peppers, onions & mushrooms
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Chicken" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Chicken</h3>
                          <span className="font-medium">$18</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Italian pizza sauce topped with mozzarella, grilled chicken, bell peppers, onions & homemade
                          sauce
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* Pasta Section */}
            <section id="pasta" className="mb-20">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[400px]  overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Pasta" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h2 className="font-playfair text-3xl font-bold text-white">Pasta</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Arrabbiata"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Arrabbiata</h3>
                          <span className="font-medium">$16</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Penne pasta with spicy tomato sauce, garlic, chili flakes & parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Al Pomodoro"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Al Pomodoro</h3>
                          <span className="font-medium">$15</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Spaghetti with rich homemade tomato sauce, basil & parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Mushroom Pasta"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Mushroom Pasta</h3>
                          <span className="font-medium">$17</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Fettuccine with creamy mushroom sauce, garlic, herbs & parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Pappardelle"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Pappardelle</h3>
                          <span className="font-medium">$18</span>
                        </div>
                        <p className="text-sm text-gray-500">Wide ribbon pasta with beef ragù, herbs & parmesan</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Pesto Pasta with Fish"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Pesto Pasta with Fish</h3>
                          <span className="font-medium">$20</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Linguine served with homemade pesto, grilled fish fillet, cherry tomatoes, pine nuts
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Chicken Alfredo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Chicken Alfredo</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Fettuccine with creamy homemade alfredo sauce, grilled chicken & grated parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Ragù" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Ragù</h3>
                          <span className="font-medium">$18</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Tagliatelle with homemade beef ragù, carrots, celery, onions & parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Creamy Ragù"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Creamy Ragù</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">Tagliatelle with homemade ragù, cream, herbs & parmesan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fast Foods Section */}
            <section id="fast-foods" className="mb-20">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[400px]  overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Fast Foods" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h2 className="font-playfair text-3xl font-bold text-white">Fast Foods</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Mozzarella Burger"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Mozzarella Burger</h3>
                          <span className="font-medium">$15</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Grilled patty with beef, lettuce, tomato, mozzarella, caramelized onions & mayo
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Burger" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Burger</h3>
                          <span className="font-medium">$16</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Beef patty, fresh beef, lettuce, tomato, onions, pickles & special sauce
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Cheese Burger"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Cheese Burger</h3>
                          <span className="font-medium">$16</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Beef patty, cheddar cheese, beef bacon, lettuce, tomato, onions & special sauce
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Beef Lasagna"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Beef Lasagna</h3>
                          <span className="font-medium">$18</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Layers of pasta, minced beef, tomato sauce, béchamel sauce, mozzarella & parmesan
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Tuna Sandwich"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Tuna Sandwich</h3>
                          <span className="font-medium">$13</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Tuna mayo, fresh lettuce, tomato, cucumber, onions & special sauce
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Lasagna Verde"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Lasagna Verde</h3>
                          <span className="font-medium">$17</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Spinach pasta, ricotta, zucchini, pesto, mozzarella, parmesan, pine nuts
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Crispy Fish Burger"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Crispy Fish Burger</h3>
                          <span className="font-medium">$14</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Crispy fish fillet, lettuce, tomato, onions, tartar sauce & lemon wedge
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Club Sandwich"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Club Sandwich</h3>
                          <span className="font-medium">$15</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Chicken, bacon/beef, lettuce, tomato, cheese, egg, mayo & special sauce
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Traditional Section */}
            <section id="traditional" className="mb-20">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[400px]  overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Traditional" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h2 className="font-playfair text-3xl font-bold text-white">Traditional</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Chicken Tikka"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Chicken Tikka</h3>
                          <span className="font-medium">$17</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Flavorful traditional dish served with rice, salad & mint sauce
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Tuna Fillet"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Tuna Fillet</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Grilled tuna steak topped with lemon butter sauce, served with vegetables, herbs & rice
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Grilled Fillet"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Grilled Fillet</h3>
                          <span className="font-medium">$18</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Grilled fish fillet with garlic butter sauce, vegetables, herbs & rice
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image src="/placeholder.svg?height=80&width=80" alt="Shrimp" fill className="object-cover" />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Shrimp</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">Grilled jumbo shrimp served with garlic butter sauce</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Foating Fillet"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Foating Fillet</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Steamed fish fillet topped with ginger, scallions, soy sauce & served with rice
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Tibs Fillet"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Tibs Fillet</h3>
                          <span className="font-medium">$19</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Sautéed fish fillet with onions, tomatoes, jalapeños, herbs & rice
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Salad Section */}
            <section id="salad" className="mb-20">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[400px]  overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Salad" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h2 className="font-playfair text-3xl font-bold text-white">Salad</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Single Salad"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Single Salad</h3>
                          <span className="font-medium">$10</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Fresh mixed salad, lettuce, tomato, cucumber & carrots with vinaigrette dressing
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Tuna Salad"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Tuna Salad</h3>
                          <span className="font-medium">$12</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Fresh mixed salad, lettuce, tomato, cucumber, onions, sweet corn, tuna with vinaigrette
                          dressing
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Side Salad"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Side Salad</h3>
                          <span className="font-medium">$7</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Fresh mixed salad, lettuce, tomato, cucumber & carrots with vinaigrette dressing
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Chicken Salad"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Chicken Salad</h3>
                          <span className="font-medium">$12</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Fresh mixed salad, lettuce, tomato, cucumber, onions, sweet corn, chicken with vinaigrette
                          dressing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Combo Section */}
            <section id="combo" className="mb-20">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[400px]  overflow-hidden">
                  <Image src="/placeholder.svg?height=400&width=300" alt="Combo" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-6">
                    <h2 className="font-playfair text-3xl font-bold text-white">Combo</h2>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Grilled Chicken Combo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Grilled Chicken Combo</h3>
                          <span className="font-medium">$22</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Grilled chicken breast served with rice, vegetables, salad & sauce of your choice
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Grilled Combo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Grilled Combo</h3>
                          <span className="font-medium">$22</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Grilled chicken breast, beef & shrimp served with rice, vegetables, salad & a sauce of your
                          choice
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Grilled Fish Combo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Grilled Fish Combo</h3>
                          <span className="font-medium">$24</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Grilled fish fillet served with rice, vegetables, salad & sauce of your choice
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20  overflow-hidden shrink-0">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt="Steak Combo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-playfair font-bold">Steak Combo</h3>
                          <span className="font-medium">$26</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Beef steak cooked medium well, served with mashed potatoes, vegetables & sauce of your choice
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

