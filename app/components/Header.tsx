import Image from "next/image";

export default function Header() {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-left py-4 px-6">
        <Image
          src={"/images/Dsngr.png"}
          alt="logo-img"
          width={35}
          height={10}
        />
      <h1 className="text-lg font-bold">Dodgxr</h1>
          <div className="container mx-auto flex items-center justify-between py-4 px-6"></div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Courses</a></li>
              <li><a href="#" className="hover:text-blue-500">About</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </nav>
          </div>

          <div  className="w-[320px] h-[220px] absolute top-[90px] left-[1000px]">
         <Image
          src={"/images/Header.png"}
          alt="head-img"
          width={700}
          height={400}
        
        />
        </div>
        

      

      </header>
    );
  }