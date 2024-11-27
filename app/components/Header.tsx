export default function Header() {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-4">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <Image src="/images/Dsngr.png" alt="logo" width={35} height={35} className="w-8 h-8" />
          <h1 className="text-xl font-bold">Ddgnr</h1>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            {["Home", "Courses", "About", "Contact"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-500">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:hidden w-full">
          <nav className="flex flex-col space-y-2">
            {["Home", "Courses", "About", "Contact"].map((item) => (
              <a key={item} href="#" className="text-center py-2 hover:bg-gray-100 rounded">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative mt-4 px-4">
        <Image
          src="/images/Header.png"
          alt="header"
          width={700}
          height={400}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
