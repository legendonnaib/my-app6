import Image from "next/image";

export default function Courses() {
  const courses = [
    { title: "UX/UI Design 201", price: "$49.99" },
    { title: "Introduction to Python", price: "$39.99" },
    { title: "Data Analysis for Beginners", price: "$29.99" },
  ];

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>


      <div className="flex justify-left gap-24 mb-12">
       

        <div className="flex-shrink-0">
          <Image
            src={"/images/laptopscreen.png"}
            alt="Laptop Screen"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 justify-center">
          <Image
            src={"/images/coding.png"}
            alt="Coding"
            width={320}
            height={420}
            className="object-contain"
          />
        </div>

        <div className="flex-shrink-0">
          <Image
            src={"/images/graph.png"}
            alt="Coding"
            width={320}
            height={420}
            className="object-contain"
          />
        </div>

      
    
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-600">{course.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">View Details</button>
          </div>
        ))}
      </div>
    </section>
  );
}
