import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md relative overflow-hidden">
      {/* Header Container */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Image
            src={"/images/Dsngr.png"}
            alt="logo-img"
            width={35}
            height={35}
            className="object-contain"
          />
          <h1 className="text-lg font-bold">Dodgxr</h1>
        </div>

       
        <nav className="hidden sm:block">
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

        
        <div className="block sm:hidden">
          <button className="text-blue-500">
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

     
      <div className="absolute right-0 top-16 sm:top-12 lg:top-0 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[40%] h-auto px-4 sm:px-0 overflow-hidden max-w-full">
        <Image
          src="/images/Header.png"
          alt="header"
          layout="responsive"
          width={428}
          height={390}
          className="object-contain"
        />
      </div>
    </header>
  );
}
