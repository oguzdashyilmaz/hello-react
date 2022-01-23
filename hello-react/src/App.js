import './App.css';
import User from "./components/User";

function App() {
  return (
    <>
      <User name="Oğuz" surname="Yılmaz" isLoggedIn={true} age={27}/>
    </>
  );
}

export default App;