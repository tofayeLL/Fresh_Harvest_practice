import Image from 'next/image';

export default function AboutUs() {
    return (
         <section className="py-16 px-4 sm:px-6 lg:px-8 ">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg"
                      alt="image"
                      width={500}
                      height={500}
                      className="rounded-lg object-cover"
                    />
                   
                    
                 
                  </div>

                  <div>
                    <p className="inline-block text-xl font-medium mb-2 text-[#759c40] bg-[#f2f5eb] px-4 py-1 mb-3rounded">About Us</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Fresh Harvest</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Welcome to Fresh Harvest, your premier destination for the finest, farm-fresh produce!
                       Our commitment to freshness, quality, and sustainability drives everything we do.
                    </p>
                    
                     
                    
                    <button className="border-2 text-xl border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              </section>
    )
}
