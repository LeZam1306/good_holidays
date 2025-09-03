import { Outlet } from "react-router-dom";

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
      <div className="font-inter relative z-10 m-auto max-w-2xl px-5 py-4 tracking-tight h-[100dvh] overflow-hidden">
        <Outlet />
      </div>
    </main>
  );
};
export default Layout;
