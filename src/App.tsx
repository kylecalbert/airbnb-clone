import React from "react";
import "./App.css";
import { Header } from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import ExploreFeed from "./Components/ExploreFeed/ExploreFeed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Components/Footer/Footer";
function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Header />
        <Banner />
        <ExploreFeed />
        <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
