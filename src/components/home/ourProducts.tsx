import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string; // e.g., "$5.64/kg"
}

export default function OurProducts() {
  const products: Product[] = [
    { id: 1, name: "Mushroom", image: "/placeholder.svg", price: "$4.99/kg" },
    { id: 2, name: "Broccoli", image: "/placeholder.svg", price: "$3.49/kg" },
    { id: 3, name: "Orange", image: "/placeholder.svg", price: "$2.79/kg" },
    { id: 4, name: "Pomegranate", image: "/placeholder.svg", price: "$6.89/kg" },
    { id: 5, name: "Kiwi", image: "/placeholder.svg", price: "$5.25/kg" },
    { id: 6, name: "Coconut", image: "/placeholder.svg", price: "$3.99/kg" },
    { id: 7, name: "Guava", image: "/placeholder.svg", price: "$4.35/kg" },
    { id: 8, name: "Eggplant", image: "/placeholder.svg", price: "$2.55/kg" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">


        {/* header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block text-xl font-medium mb-2 text-[#759c40] bg-[#f2f5eb] px-4 py-1 rounded">
  Our Products
</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Fresh Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
          </p>
        </div>



        {/* Tab  */}
 <div className="flex gap-6 justify-center items-center mb-8">
  {["All", "Fruits", "Vegetables", "Salad"].map((label) => (
    <button
      key={label}
      className="border-2 text-md border-gray-300 text-gray-500 hover:bg-[#759c40] hover:border-[#759c40]  hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
    >
      {label}
    </button>
  ))}
</div>

     


{/* cards */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow bg-white p-6 text-center"
            >
              <div className="mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={120}
                  height={100}
                  className="mx-auto object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className=" font-medium mb-4">{product.price}</p>
             <button
  className="w-full border-2 text-md border-gray-300 text-gray-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
>
  Add to cart
</button>


            </div>
          ))}
        </div>




        {/* see all products button */}
         <div className="pt-8 flex flex-col justify-center items-center">
                    <button
  className="border-2 text-xl border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 "
>
  See All Products
</button>
         </div>




      </div>
    </section>
  );
}
