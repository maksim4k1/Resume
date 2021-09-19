import Header from "./components/Header";
import AppRouters from "./components/AppRouters";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container" style={{margin: "75px auto"}}>
        <AppRouters/>
      </div>
    </div>
  );
}

export default App;
