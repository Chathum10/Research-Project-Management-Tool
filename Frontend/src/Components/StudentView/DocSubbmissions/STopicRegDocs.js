import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import React from 'react'


const STopicRegDocs = () => {
    const [topicRegDoc, setTopicRegDoc] = useState([]);
    const [search, setSearch] = useState("");
    const [search2,setSearch2] = useState("")
   
    const history = useHistory();


    useEffect(() => {
        const fetchTemplates = async () => {
          const res = await fetch(`http://localhost:3000/topicRegDoc`);
          const data = await res.json();
          setTopicRegDoc(data);
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
                          {topicRegDoc.map((topicRegDoc)=>
                          <tr key={topicRegDoc.id}>
                            <td>{topicRegDoc.name}</td>
                            <td>{topicRegDoc.date}</td>
                            <td>{ <a href={topicRegDoc.pdf} download>{topicRegDoc.name}</a>}</td>
                          </tr>

                          )
                            
                          }
                        </tbody> 
          
                  </table>

                                         <br />   <br />   <br /> 
                  
            <button><a href="/UploadTRD">Upload Here!</a></button>


            </div>



            </div>


        </div>
        

    </div>
  )
}

export default STopicRegDocs;