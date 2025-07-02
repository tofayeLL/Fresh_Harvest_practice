const Banner = () => {
  return (
    <section className="my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* banner left */}
      <div className="max-w-lg">
        <h4 className="text-xl font-bold text-[#b1d484]  mb-2 ">Welcome To Fresh Harvest</h4>
        <h1 className="text-4xl font-extrabold text-gray-900 leading-snug mb-4">
          Fresh Fruits and Vegetables
        </h1>

        <p className="text-gray-600 mb-4">
          At Fresh Harvest we are providing with the freshest and healthiest fruits and vegetables
        
        </p>


        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition">
          Shop Now
        </button>
      </div>

      
    </section>
  );
};

export default Banner;
