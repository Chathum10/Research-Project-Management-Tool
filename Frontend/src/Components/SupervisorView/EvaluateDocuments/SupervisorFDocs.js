import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import React from 'react'


const SupervisorFDocs = () => {
    const [finalDoc, setFinalDoc] = useState([]);
    const [search, setSearch] = useState("");
    const [search2,setSearch2] = useState("")
   
    const history = useHistory();


    useEffect(() => {
        const fetchTemplates = async () => {
          const res = await fetch(`http://localhost:3000/finalDoc`);
          const data = await res.json();
          setFinalDoc(data);
          console.log("test", data);
        };
        fetchTemplates();
      }, []);

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
                          <th scope="col">Date</th>
                          <th scope="col">Document</th>
                        </tr>
                        </thead>
                        <tbody>
                          {finalDoc.map((finalDoc)=>
                          <tr key={finalDoc.id}>
                            <td>{finalDoc.name}</td>
                            <td>{finalDoc.date}</td>
                            <td>{ <a href={finalDoc.pdf} download>{finalDoc.name}</a>}</td>
                          </tr>

                          )
                            
                          }
                        </tbody> 
          
                  </table>

                                         <br />   <br />   <br /> 
                  


            </div>



            </div>


        </div>
        

    </div>
  )
}

export default SupervisorFDocs;