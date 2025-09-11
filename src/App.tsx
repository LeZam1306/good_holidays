import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/layout/Layout";
import Login from "./pages/Login";
//import { useAppStore } from "./stores/useStore";

const queryClient = new QueryClient();

function App() {
  //const { connected } = useAppStore();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
