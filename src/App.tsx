import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/layout/Layout";
import Login from "./pages/Login";
import Messaging from "./pages/Messaging";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/messaging" element={<Messaging />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
