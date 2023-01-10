import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ResidentInfo from './components/ResidentInfo';
import Header from './components/Header';
import Location from './components/Location'
import SearchBar from './components/SearchBar';

function App() {
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;

    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => {setLocation(res.data)
                    setResidents(res.data.residents)
      });
  },[])

  const searchLocation = () => {

    if (searchId < 1 || searchId > 126){
      alert("ID cannot be greater than 126");
    } else{
        axios
        .get(`https://rickandmortyapi.com/api/location/${searchId}`)
        .then(res => {setLocation(res.data)
                      setResidents(res.data.residents)
        });
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Location location={location}/>
        <input
          type="text"
          placeholder="type a location id"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={searchLocation}>Search location</button>
        <div className='residents-body'>
          {
            residents.map(resident =>(
              <ResidentInfo resident={resident} key={resident.id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App