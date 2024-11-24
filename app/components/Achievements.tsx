export default function Achievements() {
    const stats = [
      { label: "Courses", value: "200+" },
      { label: "Students", value: "50K" },
      { label: "Instructors", value: "370K" },
      { label: "Reviews", value: "100+" },
    ];
  
    return (
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 shadow rounded-lg">
                <h3 className="text-2xl font-bold text-blue-500">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }