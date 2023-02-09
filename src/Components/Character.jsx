function Character(character) {
  return (
    <div className="card pt-2 mt-3">
      <img
        src={character.image}
        className="card-img-top img-fluid rounded-pill "
        />
      <h5 className="card-title text-black text-center">{character.name}</h5>
      <span className="card-text text-dark text-center">
        <h6 className="">{character.status}</h6>
      </span>
      <div className="card-footer">
        <h4 className=" text-danger text-center">{character.species}</h4>
        <br />
        <h4 className="  text-danger text-center">{character.gender}</h4>
      </div>
    </div>
  );
}

export default Character;
