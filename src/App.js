import Card from "./Components/Card.js"
import Modal from "./Components/Modal.js"
import { useState } from 'react';
import "./App.scss"

const products = [
  {
    title: 'Coombes',
    type: "Lounge",
    price: 2600,
    rating: 4,
    img: 'https://i.imgur.com/ZAxMGG5.png',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Keeve Set',
    type: "Table & Chairs",
    price: 590,
    rating: 4,
    img: 'https://i.imgur.com/tT8sFIs.jpeg',
    isAvailable: false,
    onSale: false,
  },
  {
    title: 'Nillè', 
    type: "Armchair",
    price: 950,
    rating: 5,
    img: 'https://i.imgur.com/Vx1cZY0.png', 
    isAvailable: false,
    onSale: true,
  },
  {
    title: 'Blanko', 
    type: "Side table",
    price: 90,
    rating: 4,
    img: 'https://i.imgur.com/N1Bf4ox.jpg',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Momo', 
    type: "Shelves",
    price: 890,
    rating: 4,
    img: 'https://i.imgur.com/AlKxDE4.jpeg', 
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Penemillè', 
    type: "Chair",
    price: 120,
    rating: 4,
    img: 'https://i.imgur.com/pmANPjN.jpeg',
    isAvailable: true,
    onSale: false,
  },
  {
    title: 'Kappu', 
    type: "Shelves",
    price: 420,
    rating: 4,
    img: 'https://i.imgur.com/s2rsPa1.jpg',
    isAvailable: true,
    onSale: false,
  },
];



const App = () => {

  const [ modalCarrito, setModalCarrito ] = useState(false)

    const abrirModal = () => {
      setModalCarrito(true)
    }

    const cerrarModal = () => {
      setModalCarrito(false)
    }


  return(
    <div>
      <div className="contenedor-tarjetas">
        {products.map(elemento => <Card 
        isAvailable={elemento.isAvailable}
        onSale={elemento.onSale}
        imagen={elemento.img}
        titulo={elemento.title}
        tipo={elemento.type}
        precio={elemento.price}
        controlModal={abrirModal}
       />)}
      </div>  

      { modalCarrito && 
        <div className="modal-compra">
        <div> <button onClick={cerrarModal}>X</button> </div>
        <h1>Usted va a comprar</h1>
        <p>Desea seguir?</p>
        </div>
      }
    </div> 
  )
}

export default App 