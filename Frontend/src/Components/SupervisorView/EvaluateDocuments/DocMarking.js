import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import React from 'react'


const DocMarking = () => {
    const [marksSupervisor, setMarksSupervisor] = useState([]);
    const [search, setSearch] = useState("");
    const [search2,setSearch2] = useState("")
   
    const history = useHistory();


    useEffect(() => {
        const fetchMarksSupervisor = async () => {
          const res = await fetch(`http://localhost:3000/marksSupervisor`);
          const data = await res.json();
          setMarksSupervisor(data);
          console.log("test", data);
        };
        fetchMarksSupervisor();
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
                          {marksSupervisor.map((marksSupervisor)=>
                          <tr key={marksSupervisor.id}>
                            <td>{marksSupervisor.name}</td>
                            <td>{marksSupervisor.description}</td>
                            <td>{ <a href={marksSupervisor.pdf} download>{marksSupervisor.name}</a>}</td>
                            
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

export default DocMarking;