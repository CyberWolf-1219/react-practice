import logo_primary from "./../../assets/brand_logos/primary_logo1.png";

function Navigation() {
  return (
    <nav className="w-[60%] max-w-screen-xl mx-auto flex flex-row items-center justify-between">
      <img
        src={logo_primary.src}
        alt=""
        className="aspect-[3/2] object-contain w-[150px]"
      />
      <ul className="flex flex-row gap-8 items-center justify-center">
        <li className="cursor-pointer hover:text-white">About</li>
        <li className="cursor-pointer hover:text-white">Our Work</li>
        <li className="cursor-pointer hover:text-white">Our Portfolio</li>
        <li className="cursor-pointer hover:text-white">Our Services</li>
      </ul>
      <button className="px-3 py-2 bg-black text-white rounded-full font-semibold">
        Book a Call
      </button>
    </nav>
  );
}

export default Navigation;
