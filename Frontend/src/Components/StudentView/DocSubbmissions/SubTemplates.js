import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect} from "react";

import React from 'react'


const SubTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [search, setSearch] = useState("");
    const [search2,setSearch2] = useState("")
   
    const history = useHistory();


    useEffect(() => {
        const fetchTemplates = async () => {
          const res = await fetch(`http://localhost:3000/templates`);
          const data = await res.json();
          setTemplates(data);
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
                          <th scope="col">description</th>
                          <th scope="col">Document</th>
                        </tr>
                        </thead>
                        <tbody>
                          {templates.map((templates)=>
                          <tr key={templates.id}>
                            <td>{templates.name}</td>
                            <td>{templates.description}</td>
                            <td>{ <a href={templates.pdf} download>{templates.name}</a>}</td>
                          </tr>

                          )
                            
                          }
                        </tbody> 
          
                  </table>

                                         <br />   <br />   <br /> 
                  
            <button><a href="/SFinalDocs">Upload Final Document</a></button>  <br />   <br /> 
            <button><a href="/STopicRegDocs">Upload Topic Registration Document</a></button>


            </div>



            </div>


        </div>
        

    </div>
  )
}

export default SubTemplates;