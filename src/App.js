import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Pagination from './Components/Pagination';
import BioDate from './Components/BioDate';
import Project from './Components/Project';
import ProjectRow from './Components/ProjectRow';


const App = () => {

  const [repos, setRepos] = useState([]);
      useEffect(() => {
      axios.get("https://api.github.com/users/immortal328/repos")
      .then((resp) => {
            //console.log(resp);
            setRepos(resp.data);
      })
      .catch((err) => {
            console.log(err);
      });
      }, []);
  
  return (
    <div className="mx-32 my-10 border-8 border-gray-800 rounded-xl bg-gray-100">
        <Header/>
        <div  className="px-16">
            <BioDate/>
            <Project/>
            <div className="mt-3">
              {repos.length > 0 ? (
                <div>
                  <Pagination
                    data={repos}
                    RenderComponent={ProjectRow}
                    dataLimit={8}
                  />
                </div>
              ) : (
                <h1>No Posts to display</h1>
              )}
          </div>
        </div>
    </div>
  )
}

export default App;
