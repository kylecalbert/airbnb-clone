import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import ExploreFeed from "./Components/ExploreFeed/ExploreFeed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Header />
        <Banner />
        <ExploreFeed />
      </QueryClientProvider>
    </div>
  );
}

export default App;
