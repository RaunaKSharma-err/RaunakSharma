const Navbar = () => {
  return (
    <div className="inset-x-0 z-10 w-full sticky -mb-10">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0 ">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white mt-3 ml-5 md:ml-15"
          >
            Raunak Sharma
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
