
import Profile from './components/prof';

function App() {

  const pro = { name : "Mondher Bouazzi", age:"31",
profession:"Ingénieur en Mécatronique", mail: "bouazzi.mondher@gmail.com",
bio : "Développeur Web JavaScript Full Stack"}

const handleName=()=>{
   alert(pro.name);
}
  return (
    <div className="App">
    <Profile name={pro.name} age={pro.age} prof={pro.profession} mail={pro.mail} bio={pro.bio} fun={handleName}></Profile>
    </div>
  );
}

export default App;
