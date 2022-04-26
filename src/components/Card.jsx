const Card = ({ pokemon }) => {
  return (
    <>
      <div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div>
        <h3>#{pokemon.id}</h3>
        <h2> {pokemon.name}</h2>
      </div>
      <div>
        {pokemon.types.map((type, index) => {
          return <h4 key={index}>Type:{type.type.name} </h4>;
        })}
      </div>
    </>
  );
};

export default Card;
