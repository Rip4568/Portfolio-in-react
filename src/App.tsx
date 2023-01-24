import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import myContext from "./contexts/myContext.ts";
import Hero from "./components/Hero/Hero.tsx";
import Footer from "./components/Footer/Footer.tsx";

interface ItemInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartInterface {
  items: ItemInterface[];
  totalPrice: () => number;
}

function App() {
  const [nome, setNome] = React.useState<String>("");
  const [cart, setCart] = React.useState<CartInterface>(null)

  return (
    <myContext.Provider value={{ nome, setNome, cart, setCart }}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
      <Navbar />
      <Hero />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>TESTANDO 1 2 3</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>TESTANDO 1 2 3</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>TESTANDO 1 2 3</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 id="projetos">TESTANDO 1 2 3</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
    </myContext.Provider>
  );
}

export default App;