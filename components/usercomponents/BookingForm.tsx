import React from 'react'

function BookingForm() {
  return (
    <div className="border-1 border-black pt-12 px-6 pb-16">
                <h2 className="font-playfair text-3xl md:text-4xl font-medium mb-12 text-center">Book a table</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full p-3  border border-gray-500   "
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3  border border-gray-500  "
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      className="w-full p-3  border border-gray-500  "
                    />
                    <input
                      type="time"
                      className="w-full p-3  border border-gray-500  "
                    />
                  </div>
                  <input
                    type="number"
                    placeholder="Number of guests"
                    className="w-full p-3  border border-gray-500  "
                  />
                  <textarea
                    placeholder="Special requests"
                    rows={4}
                    className="w-full p-3  border border-gray-500  "
                  ></textarea>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-black font-medium hover:bg-gray-800 text-white py-2 px-6 text-sm transition-colors w-fit "
                      >
                      BOOK NOW
                    </button>
                  </div>
                </form>
              </div>
  )
}

export default BookingForm