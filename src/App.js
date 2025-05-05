// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;


import './App.css';
import { useState, useEffect, useRef } from "react";


function App() {
  const count =useRef(0)
  //console.log(count);

  const [userName, setUsername]=useState("")
  const [data,setData]=useState(null)

  async function handleSearch(e){
    e.preventDefault()
            
    const response= await fetch(`https://api.github.com/users/${userName}`)
    const data= await response.json()
     setData(data)
    //  console.log(data)
  }

  return (
    <div className="App">
      

      <div className='container'>
        <form>
          <input type='text' placeholder='Enter User Name' onChange={(e)=>{
            
            setUsername(e.target.value)
            // console.log(userName)
            }}></input>
          <br></br>
          <br></br>
          <button onClick={handleSearch}>Search</button>
        </form>

       {data &&  <div className='card'>
    <p>Name :{data.name}</p>
    <p>User Name: {data.login}</p>
    <p>Company Name :{data.company ? data.company :"Not Provided"}</p>
    <img src={data.avatar_url} alt='Profile Image'></img>


        </div>}
      </div>
     
    </div>
  );
}

export default App;
