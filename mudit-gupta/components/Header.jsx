import Link from "next/link";
import { Button } from "./ui/button";

//Components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            Mudit <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Nav & Hire Me Button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <button>Hire me</button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;
