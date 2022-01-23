import './App.css';
import User from "./components/User";

function App() {
  return (
    <>
      <User 
      name="Oğuz" 
      surname="Yılmaz" 
      isLoggedIn={false} 
      age={27} 
      friends={["veli", "ali", "hüseyin", "ayşe", "fatma", "hayriye"]}/>
    </>
  );
}

export default App;