import NavbarRoutes from "@/components/navbar-routes";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex h-full flex-row items-center border-b bg-white p-4 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
