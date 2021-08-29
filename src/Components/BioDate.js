import React from 'react'

const BioDate = () => {
      return (
            <div className=" border-b-4 pb-4 border-gray-500 border-dotted">
                  <img className="h-80 mx-auto mt-2" 
                  src={"https://avatars.githubusercontent.com/u/47078596?v=2"}
                  alt={"Profile"}/>

                  <div className="mt-2 text-xl">
                        <p className="text-center text-5xl font-extrabold"> Profile</p>
                        <div className="flex justify-between">
                              <p>Profile link:</p>
                              <a href="https://github.com/immortal328?tab=repositories"
                              className="text-green-400 hover:text-green-500"
                              target={"_blank"}
                              rel={"noreferrer"}>Github_URL</a>
                        </div>
                        <div className="flex justify-between">
                              <p>Repos_api:</p>
                              <p>https://api.github.com/users/immortal328/repos</p>
                        </div>
                        <div className="flex justify-between">
                              <p>Name:</p>
                              <p>Amar Pujari</p>
                        </div>
                        <div className="flex justify-between">
                              <p>Github Username:</p>
                              <p>immortal328</p>
                        </div>
                        <div className="flex justify-between">
                              <p>Company:</p>
                              <p>GitHub</p>
                        </div>
                        <div className="flex justify-between">
                              <p>Location:</p>
                              <p>Karjat, Raigad</p>
                        </div>
                        <div className="flex justify-between">
                              <p>Bio:</p>
                              <p>Java Full Stack Developer</p>
                        </div>
                        
                  </div>                  
            </div>
      )
}

export default BioDate;
