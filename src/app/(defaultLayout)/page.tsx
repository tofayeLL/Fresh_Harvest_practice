"use client";

import OurProducts from "@/components/home/ourProducts";
import Image from "next/image";
import { useState, useEffect } from "react";

/* interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
} */

export default function FreshHarvestWebsite() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 16,
    minutes: 54,
    seconds: 21,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

/*   const products: Product[] = [
    { id: 1, name: "Mushroom", image: "/placeholder.svg", price: "Add to cart" },
    { id: 2, name: "Broccoli", image: "/placeholder.svg", price: "Add to cart" },
    { id: 3, name: "Orange", image: "/placeholder.svg", price: "Add to cart" },
    { id: 4, name: "Pomegranate", image: "/placeholder.svg", price: "Add to cart" },
    { id: 5, name: "Kiwi", image: "/placeholder.svg", price: "Add to cart" },
    { id: 6, name: "Coconut", image: "/placeholder.svg", price: "Add to cart" },
    { id: 7, name: "Guava", image: "/placeholder.svg", price: "Add to cart" },
    { id: 8, name: "Eggplant", image: "/placeholder.svg", price: "Add to cart" },
  ]; */

  return (
    <div className="min-h-screen bg-white">
      {/* Our Fresh Products Section */}
     {/*  <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-600 text-sm font-medium mb-2">Our Products</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fresh Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {products.map((product, index) => (
              <div key={product.id} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white p-6 text-center">
                <div className="mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="mx-auto object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{product.name}</h3>
                <button
                  className={`w-full ${
                    index === 3 ? "bg-orange-500 hover:bg-orange-600" : "bg-green-600 hover:bg-green-700"
                  } text-white font-medium py-2 px-4 rounded-lg`}
                >
                  {product.price}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <OurProducts></OurProducts>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg"
              alt="Fresh Harvest Team Member"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Fresh Guaranteed</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <Image src="/placeholder.svg" alt="Leaf icon" width={30} height={30} />
                <span className="text-sm font-medium">100% Organic</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-green-600 text-sm font-medium mb-2">About Fresh Harvest</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Fresh Harvest</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Welcome to Fresh Harvest, your premier destination for the finest, farm-fresh produce!
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to freshness, quality, and sustainability drives everything we do.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Timer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seasonal Fruit Bundle</h2>
            <p className="text-2xl font-bold text-orange-500 mb-8">
              Discount up to <span className="text-3xl">80% OFF</span>
            </p>
            <div className="flex space-x-4 mb-8">
              {Object.entries(timeLeft).map(([unit, val]) => (
                <div key={unit} className="text-center">
                  <div className="bg-white rounded-lg p-4 shadow-lg min-w-[60px]">
                    <div className="text-2xl font-bold text-gray-900">{val.toString().padStart(2, "0")}</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2 capitalize">{unit}</p>
                </div>
              ))}
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg">
              CODE: FRESH25
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {["Orange", "Apple", "Strawberry", "Kiwi"].map((fruit) => (
              <Image
                key={fruit}
                src="/placeholder.svg"
                alt={fruit}
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-green-600 text-sm font-medium mb-2">Testimonial</p>
            <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/placeholder.svg"
                  alt="Customer"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
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
  );
}
