import React,{useState} from 'react'
import Products from './Products';

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  // EDAMAM API ID & KEYS
  const YOUR_APP_ID = "6564f6a7";    
  const YOUR_APP_KEY ="3fc8b032447a77f21e3341aea8be1259";
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from API:', data);
        setData(data.hits);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  
  return (
    <div>
      <center>
        <h4>Food Recipe App</h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/>
          <input type="submit" className="btn btn-primary" value="Search"/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  )
}

export default App
