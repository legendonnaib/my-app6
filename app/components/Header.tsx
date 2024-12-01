export default function Header() {
  return (
    <header className="bg-white shadow-md">
     
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
     
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
    
      {/*justify-right absolute w-1/3 pt-[64px] pr-[24px] pl-[24px] pb-[64px]*/}

    </header>
  );
}
