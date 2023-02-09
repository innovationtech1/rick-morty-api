import CharacterList from "./Components/CharacterList";
import Character from "./Components/Character";






function App() {
  return (
    <div className=" bg-dark text-white">
      <h1 className="text-center display-1 py-4">RICK AND MORTY API</h1>
    
      <CharacterList />
      <Character />
    
    </div>
  );
}

export default App;
