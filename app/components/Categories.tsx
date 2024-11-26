import Image from "next/image";

export default function Categories() {
  const categories = [
    { title: "Design & Development", count: "50 Courses", image: "/images/D&D.png" },
    { title: "Marketing", count: "50 Courses", image: "/images/D&M.png" },
    { title: "Development", count: "50 Courses", image: "/images/Development.png" },
    { title: "Communication", count: "50 Courses", image: "/images/communication.png" },
    { title: "Digital Marketing", count: "50 Courses", image: "/images/marketing.png" },
    { title: "Self Development", count: "50 Courses", image: "/images/self-development.png" },
     { title: "Business", count: "50 Courses", image: "/images/business.png" },
      { title: "Finance", count: "50 Courses", image: "/images/book.png" },
       { title: "Consulting", count: "50 Courses", image: "/images/consult.png" },
  ];

  return (
    <section className="container mx-auto mt-16 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Explore Courses by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-2xl p-6 text-center rounded-lg border border-gray-200 transform transition duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <Image
                src={category.image}
                alt={`${category.title} logo`}
                width={50}
                height={50}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">{category.title}</h3>
              <p className="text-gray-600">{category.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
