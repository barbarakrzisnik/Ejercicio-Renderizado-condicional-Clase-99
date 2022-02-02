import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { useState } from 'react';

const Card = ({ imagen, titulo, tipo, precio, isAvailable, onSale, controlModal }) => {


const [ animacionTarjeta, setAnimacionTarjeta ] = useState(false)



const handleOnMouseEnter = () => {
  setAnimacionTarjeta(true)
}

const handleOnMouseLeave = () => {
  setAnimacionTarjeta(false)
}

   return (
    <div className={animacionTarjeta ? "tarjeta-mouse" : "tarjeta"} 
    onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>

      <img src={imagen} />
      <h1 className={isAvailable !== true && "sin-stock"}>{titulo}</h1>
      {onSale === true && <span className="sale">On Sale!</span>}

      <div className="handle-precio">
        <h3>{tipo}</h3>
        <h2>{precio}</h2>
      </div>

      <div className="contenedor-iconos">
        <div>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>

        <div>
          <button className='boton-carrito' onClick={controlModal}>
            <FaCartPlus />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card






