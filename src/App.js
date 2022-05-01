import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layouts/Navbar';
import Input from './components/body/InputPanel';
import Output from './components/body/OutputPanel';
import './style.css';
import {useState} from 'react';
import { Toaster } from 'react-hot-toast';

//Component Toaster,InputPanel,OutputPanel
//API used https://jsonplaceholder.typicode.com/${table_name}
//for more deatils goto Readme.md


function App() {
  const [val, toggleVal] = useState();
  const [query, setQuery] = useState("");
  const [value, setValue] = useState("select * from posts");
  return (
    <div>
      <Toaster  position="top-center" reverseOrder={false}/>
      <Navbar/>
      <div className='container'>
        <Input value={value} setQuery={setQuery} setValue={setValue} toggleVal={toggleVal} val={val}/>
        <Output query={query} val={val}/>
      </div>
    </div>
  );
}

export default App;
