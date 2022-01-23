import './App.css';

const name = "Oğuz";
const surname = "Yılmaz";
const isLoggedIn = true;

function App() {
  return (
    <>
      <h3>
        {
          isLoggedIn
          ? `Benim adım ${name} ve soyadım ${surname}`
          : `Giriş yapamadınız...`
        }
      </h3>
    </>
  );
}

export default App;