import Header from "./components/Header"
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Achievements from "./components/Achievements";
import Courses from "./components/Courses";
import Footer "./components/Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Categories />
      <Achievements/>
      <Courses/>
      <Footer />
      
     
    </div>
    
    
  );
}
