import React , {useState} from 'react';

function Pagination({ data, RenderComponent,dataLimit }) {
      const [pages] = useState(Math.round(data.length / dataLimit));
      const [currentPage, setCurrentPage] = useState(1);

      function goToNextPage() {
            setCurrentPage((page) => page + 1);
      }

      function goToPreviousPage() {
            setCurrentPage((page) => page - 1);
      }

      const getPaginatedData = () => {
            const startIndex = currentPage * dataLimit - dataLimit;
            const endIndex = startIndex + dataLimit;
            return data.slice(startIndex, endIndex);
      };

      return (
            <div>
                        {
                        getPaginatedData().map((data,idx) => (
                        <RenderComponent 
                              key={idx}

                              name={data.name}
                              html_url={data.html_url}/>
                        ))
                        }

                  <div className="my-4 flex justify-end"> 
                        {/* previous button */}
                        <button 
                              className={`prev ${currentPage === 1 ?
                              'disabled border-4 border-black bg-gray-400 hover:bg-gray-600 text-black hover:text-white font-bold text-2xl py-1 px-4 rounded-xl mr-2' :
                              'border-4 border-black bg-gray-400 hover:bg-gray-600 text-black hover:text-white font-bold text-2xl py-1 px-4 rounded-xl mr-2'}`}
                              onClick={goToPreviousPage}
                        >Prev</button> 

                         {/* next button */}
                        <button
                              className={`next ${currentPage === pages ?
                                    'disabled border-4 border-black bg-gray-400  hover:bg-gray-600 hover:text-white text-black font-bold text-2xl py-1 px-4 rounded-xl' :
                                    'border-4 border-black bg-gray-400  hover:bg-gray-600 hover:text-white text-black font-bold text-2xl py-1 px-4 rounded-xl'}`}
                              onClick={goToNextPage}
                        >Next</button> 
                  </div>
            </div>
      );
}

export default Pagination;