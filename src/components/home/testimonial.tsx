"use client";
import Image from "next/image";



export default function Testimonial() {
    return (
        <div>
             {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
                <p className="inline-block text-xl font-medium mb-2 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded">
  Testimonials
</p>
            <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>

            <p className="w-[80%] mx-auto text-gray-600"> I absolutely love Fresh Harvest! Everything always arrives fresh and perfectly ripe.
                 I absolutely love Fresh Harvest! Everything always arrives fresh and perfectly ripe
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  src=""
                  alt="Image"
                  width={120}
                  height={120}
                  className="rounded-full object-cover object-center"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  I absolutely love Fresh Harvest! Everything always arrives fresh and perfectly ripe
                </p>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Jane Doe</p>
                  <p className="text-sm text-gray-500">Professional Chef</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            <div className="w-3 h-3 bg-green-600 rounded-full" />
            <div className="w-3 h-3 bg-gray-300 rounded-full" />
            <div className="w-3 h-3 bg-gray-300 rounded-full" />
          </div>
        </div>
      </section>

        </div>
    )
}
