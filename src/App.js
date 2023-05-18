import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const personName = "Doe, Jane";
  const personName2 = "Smith, John"
  const personName3 = "Fillmore, Millard"
  const personName4 = "Smith, Maria"

  return (
    <div>
      <PersonCard personName={personName} personAge={45} personHairColor={"Black"}/>
      <PersonCard personName={personName2} personAge={88} personHairColor={"Brown"}/>
      <PersonCard personName={personName3} personAge={50} personHairColor={"Brown"}/>
      <PersonCard personName={personName4} personAge={62} personHairColor={"Brown"}/>
    </div>
  );
}

export default App;
