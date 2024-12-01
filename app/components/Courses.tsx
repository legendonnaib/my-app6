import Image from "next/image";

export default function Courses() {
  const courses = [
    { title: "UX/UI Design 201", price: "$400" },
    { title: "Introduction to Python", price: "$400" },
    { title: "Data Analysis for Beginners", price: "$400" },
  ];

  const courses1 = [
    { title: "Art Specialization", price: "$400" },
    { title: "Rule Of Law", price: "$400" },
    { title: "Introduction to Webflow", price: "$400" },
  ];

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Courses</h2>

      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Image
            src={"/images/laptopscreen.png"}
            alt="Laptop Screen"
            width={300}
            height={400}
            className="object-contain mx-auto"
          />
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Image
            src={"/images/coding.png"}
            alt="Coding"
            width={320}
            height={420}
            className="object-contain mx-auto"
          />
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Image
            src={"/images/graph.png"}
            alt="Graph"
            width={320}
            height={420}
            className="object-contain mx-auto"
          />
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {courses.map((course, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-600">{course.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Image
            src={"/images/paintbrush.png"}
            alt="Art"
            width={320}
            height={420}
            className="object-contain mx-auto"
          />
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Image
            src={"/images/library.png"}
            alt="Library"
            width={320}
            height={420}
            className="object-contain mx-auto"
          />
        </div>
        <div className="flex-shrink-0 w-full sm:w-auto">
          <Image
            src={"/images/website.png"}
            alt="Website"
            width={320}
            height={420}
            className="object-contain mx-auto"
          />
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses1.map((course, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-600">{course.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
