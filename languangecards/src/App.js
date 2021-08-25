import './App.css';
import Card from './component/card/Card';
import { categories } from './helper/data'
function App() {
  return (
    <div className="App">
      <p>Learn React</p> 
      <div>
        {categories.map((cardd) => (
          <Card crd = {cardd}/>
        ) )}
      </div>                
    </div>
  );
}

export default App;
