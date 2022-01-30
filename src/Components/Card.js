const Card =  ({imagen, titulo, tipo, precio, isAvailable, onSale}) => {
   return(
     <div className={isAvailable !== false ? "tarjeta-enstock" : "tarjeta-sinstock" }>
        <img src={imagen}/>
         <h1>{titulo}</h1>
         {onSale === true && (
            <span className="sale">
               On Sale!
            </span>
         )}
        <div className="handle-precio">
            <h3>{tipo}</h3>
            <h2>{precio}</h2>
        </div>
     </div>
   ) 
}

export default Card


