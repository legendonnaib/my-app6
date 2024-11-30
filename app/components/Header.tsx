import Image from "next/image";

export default function Header() {
  return (
<header className="bg-white shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">Logo</span>
            </div>
            
            <div className="hidden md:flex md:space-x-8">
              {['Home', 'Courses', 'About', 'Contact'].map((item) => (
                <button key={item} className="text-gray-600 hover:text-gray-900">
                  {item}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {isOpen && (
            <div className="md:hidden py-2">
              <div className="flex flex-col space-y-2 pb-3">
                {['Home', 'Courses', 'About', 'Contact'].map((item) => (
                  <button key={item} className="text-gray-600 hover:text-gray-900 px-2 py-1">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
  );
}
