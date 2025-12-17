import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#0f0f0f] pt-2.5  text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-around ">
        <div className="flex p-3 font-bold px-5 ">
            <h1 className="font-extrabold text-xl font">Portfolio</h1>
        </div>
        <div className=" flex p-3 font-medium  justify-between gap-10">
            <a className="hover:text-pink-400 transition" href="#home">Home</a>
            <a className="hover:text-pink-400 transition" href="#about">About</a>
            <a className="hover:text-pink-400 transition" href="#skills">Skills</a>
            <a className="hover:text-pink-400 transition" href="#projects">Projects</a>
            <a className="hover:text-pink-400 transition" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
