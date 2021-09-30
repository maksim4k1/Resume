import Header from "./components/Header";
import AppRouters from "./components/AppRouters";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container" style={{padding: "75px 10px"}}>
        <AppRouters/>
      </div>
    </div>
  );
}

export default App;
