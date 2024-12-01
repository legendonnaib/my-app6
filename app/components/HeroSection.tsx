export default function HeroSection() {
  return (

      <main className="flex-grow">
       
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                  Learn new skills online with ease
                </h1>
                <p className="text-lg sm:text-xl text-gray-600">
                 Enroll in a variety of courses to learn and grow, anywhere, anytime.
                </p>
              </div>
             <div className="grid gap-10 md:grid-cols-2 md:items-center">
                  <img
                    src="/images/Header.png"
                    alt="Student with folder"
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
            </div>
          </div>
        </section>
  );
}
