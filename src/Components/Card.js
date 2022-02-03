import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';
import { useState } from 'react';
import Rating from '@mui/material/Rating';

const Card = ({ imagen, titulo, tipo, precio, isAvailable, onSale, controlModal, estrellas }) => {


const [ animacionTarjeta, setAnimacionTarjeta ] = useState(false)
const [value, setValue] = useState(0);



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
      <Rating name="read-only" value={estrellas} readOnly />

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






