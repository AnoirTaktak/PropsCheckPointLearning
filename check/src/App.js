//import logo from './logo.svg';
import './App.css';
import Prof from './profile/Prof';
import ph from './photo.jpg';
function App() {
  const pers = {
    fullName : 'Anoir Taktak',
    bio : 'My bio',
    adresse : 'route Tunis km 2,5 Sfax',
  };

  const handleName = (y) => {
   
    alert(y+' hello ');
  };

  return (
    <div className="App">
      <Prof x={pers} z={handleName} >
      <img  height='250px' width='250px' src={ph} />
      </Prof>
    </div>
  );
}


export default App;
