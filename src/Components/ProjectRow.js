import React from 'react';
import {FaCode} from 'react-icons/fa';

const  ProjectRow = (props) => {
      return (
            <div className="mt-3 text-3xl font-bold">
                  <div key={props.no}
                        className="border-b-2 mb-1 py-2 flex justify-between" >
                              <p>{props.name}</p>

                              <a href={props.html_url} target={"_blank"} rel={"noreferrer"}>
                                    <abbr title="project code">
                                          <FaCode className="hover:text-blue-500"/>
                                    </abbr>
                              </a>                        
                  </div>                
            </div>
            );
      }

export default ProjectRow;