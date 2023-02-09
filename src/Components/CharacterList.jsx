import { useState, useEffect } from "react";
import Character from "./Character";

export function Navegacion(props) {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button
        className="btn btn-primary btn-sm"
        disabled={props.page === 1}
        onClick={() => {
          if (props.Page === 1) {
            alert("No puedes retroceder mas");
          } else {
            props.setPage(props.page - 1);
          }
        }}
      >
        Back {props.page - 1}
      </button>
      <p>PAGE:{props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        disabled={props.page === 42}
        onClick={() => {
          if (props.page === 42) {
            alert("No puedes avanzar más");
          } else {
            props.setPage(props.page + 1);
          }
        }}
      >
        Next {props.page + 1}
      </button>
    </header>
  );
}




function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setloading(false);
      setCharacters(data.results);
      console.log(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container bg-danger">
      <Navegacion page={page} setPage={setPage} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-sm-3" key={character.id}>
                <Character
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  image={character.image}
                  status={character.status}
                  location={character.location.name}
                  gender={character.gender}
                />
              </div>
            );
          })}
        </div>
      )}
      <Navegacion page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
