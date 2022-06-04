import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import React from 'react'


const VivaMarking = () => {
    const [marksPannel, setMarksPannel] = useState([]);
    const [search, setSearch] = useState("");
    const [search2,setSearch2] = useState("")
   
    const history = useHistory();


    useEffect(() => {
        const fetchMarksPannel = async () => {
          const res = await fetch(`http://localhost:3000/marksPannel`);
          const data = await res.json();
          setMarksPannel(data);
          console.log("test", data);
        };
        fetchMarksPannel();
      }, []);

    //   const deleteUpload =(pdfId) =>{
        
    //     pfdService.deleteFile(pdfId).then((response)=>{
    //       history('/')
    //     })
      
    //   }

  return (
    <div><br /><br /><br /><br /><br />
     
             <div className="row">
   
     </div>

            <div style={{marginTop: 20,}} className='container'>
            <div className='row'>
            <div className='card col-md-10 offset-md-1 offset-md-2'>

                  <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">description</th>
                          <th scope="col">Document</th>
                        </tr>
                        </thead>
                        <tbody>
                          {marksPannel.map((marksPannel)=>
                          <tr key={marksPannel.id}>
                            <td>{marksPannel.name}</td>
                            <td>{marksPannel.description}</td>
                            <td>{ <a href={marksPannel.pdf} download>{marksPannel.name}</a>}</td>
                            
                          </tr>

                          )
                            
                          }
                        </tbody>           
                  </table>

            </div>

            </div>

        </div>
        

    </div>
  )
}

export default VivaMarking;