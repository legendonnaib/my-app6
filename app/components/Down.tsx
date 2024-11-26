import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-gray-50">
     
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-4">Our Team</h2>
        <p className="text-center text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "James Nielson", role: "Marketing Coordinator", img: "/images/James.png" },
            { name: "Joseph Ngumbau", role: "Nursing Assistant", img: "/images/Joseph Ngumbau.png" },
            { name: "Joseph Munyambu", role: "Product Assistant", img: "/images/Joseph Munyambu.png"},
            { name: "Erick Kipkemboi", role: "Marketing Manager", img: "/images/Erick Kipkemboi.png" },
            { name: "Stephen Kanza", role: "Frontend Developer", img: "/images/Stephen Kanza.png" },
            { name: "John Lekou", role: "Data Analyst", img: "/images/John Lekou.png" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.img}
                alt={`${member.name} photo`}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
              <div className="flex justify-center mt-3 space-x-2 text-gray-600">
              <Image
          src={"/images/Social Icons.png"}
          alt="logo-img"
          width={50}
          height={10}
        />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
  <div className="container mx-auto">
    <h2 className="text-4xl font-bold text-center mb-4">Customer Testimonials</h2>
    <p className="text-center text-gray-600 mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut metus.",
          name: "Jessica Jones",
          role: "Software Developer",
          img: "/images/James.png",
        },
        {
          quote: "Aenean auctor, ligula a malesuada auctor, lectus urna laoreet metus.",
          name: "Robert Williams",
          role: "Project Manager",
          img: "/images/Erick Kipkemboi.png",
        },
        {
          quote: "Curabitur dictum eget tortor eu varius. Quisque in lorem non nisi convallis fringilla.",
          name: "Linda Brown",
          role: "UX Designer",
          img: "/images/John Lekou.png",
        },
      ].map((testimonial, index) => (
        <div
          key={index}
          className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-lg"
        >
          {/* Star Ratings */}
          <div className="flex justify-start mb-4">
            <Image
              src="/images/Stars.png"
              alt="Rating Stars"
              width={70}
              height={50}
              className="mx-auto"
            />
          </div>
          {/* Quote */}
          <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
          {/* User Info */}
          <div className="flex items-center space-x-4">
            <Image
              src={testimonial.img}
              alt={`${testimonial.name} photo`}
              width={50}
              height={50}
              className="rounded-full border border-gray-300"
            />
            <div>
              <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<div className="flex items-center justify-between">
  <div className="w-1/2 pr-8">
    <h3 className="font-bold text-lg mb-4">Subscribe to our newsletter</h3>
    <p className="text-gray-600 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>


  <div className="w-1/3">
    <form
      className="flex space-x-2"
      action="/subscribe"
      method="POST"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Subscribe
      </button>
    </form>
  </div>
</div>



    
<footer className="bg-gray-100 py-12">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
  
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-4">
          <Image
            src="/images/Dsngr.png"
            alt="logo-img"
            width={35}
            height={10}
          />
          <h1 className="text-lg font-bold ml-2">Dodgxr</h1>
        </div>
      
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">Courses</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Business</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Development</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Technology</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Design</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Programming</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">Resources</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Career</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Resume</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Learning</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Interview Preparation</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Jobs</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg mb-4">About Us</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Help/Support</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms and Conditions</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600">Partners</a></li>
        </ul>
      </div>

      
      <div>
        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-600 mt-12">
    <p>&copy; 2023 Dodgxr. All rights reserved. <span className="text-blue-600 hover:text-blue-700">Privacy Policy</span> | <span className="text-blue-600 hover:text-blue-700">Terms of Service</span> | <span className="text-blue-600 hover:text-blue-700">Cookie Settings</span></p>
  </div>
</footer>

    </div>
  );
}
