
const Card = ({nombre, iniciales}) => {
  return (
    <div>
      <h3>Gracias por participar {nombre}!</h3>
      <h3>Las iniciales de tu nombre son : {iniciales} y son correctas !</h3>
    </div>
  )
}

export default Card
