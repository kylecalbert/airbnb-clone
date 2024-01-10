import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import Explore from "./Components/Explore/Explore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Header />
        <Banner />
        <Explore />
      </QueryClientProvider>
    </div>
  );
}

export default App;
