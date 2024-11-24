

export default function HeroSection() {
  return (
    <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: 'url(/path-to-your-image.png)' }}>
     
      <div className="container mx-auto text-left text-black relative z-10">
        <h1 className="text-5xl font-bold mb-4">Learn new skills online with ease</h1>
        <p className="text-lg mb-6">Enroll in a variety of courses to learn and grow, anywhere, anytime.</p>

   
        <div className="flex justify- space-x-6 mt-8">
          <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
            Start Free Trial
          </button>
          <button className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}
