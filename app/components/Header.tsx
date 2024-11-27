import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/Dsngr.png"
            alt="logo-img"
            width={35}
            height={35}
            className="object-contain w-8 h-8 md:w-10 md:h-10"
          />
          <h1 className="text-base md:text-lg font-bold">Dodgxr</h1>
        </div>

        {/* Navigation for Larger Screens */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button className="text-blue-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full mt-4 px-4">
        <Image
          src="/images/Header.png"
          alt="head-img"
          width={700}
          height={400}
          className="w-full h-auto md:max-w-screen-md mx-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base"
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
