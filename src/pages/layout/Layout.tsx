import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="relative min-h-screen w-full bg-[#0f172a]">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      {/* Your Content/Components */}
      <div className="font-inter font-valera-round relative z-10 m-auto flex min-h-screen max-w-2xl flex-col justify-start overflow-hidden pt-5 tracking-tight text-white">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </main>
  );
};
export default Layout;
