import React from 'react'
import {FaGithub} from 'react-icons/fa';
const Header = () => {
      return (
            <div className=" bg-gray-800 border-gray-800 text-white border-2 text-center font-extrabold">
                  <FaGithub className="text-7xl  mt-2 mx-auto"/>
                  <p className="text-5xl  my-14">My Github Portfolio</p>                  
            </div>
      )
}

export default Header;
