import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="flex-grow">
      <section className="grid gap-10 md:grid-cols-2 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Learn new skills online with ease
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Enroll in a variety of courses to learn and grow, anywhere, anytime.
          </p>
        </div>
        <div>
          <Image
            src="/images/Header.png"
            alt="Student with folder"
            width={800} // Adjust the width to your actual image dimensions
            height={600} // Adjust the height to your actual image dimensions
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}
