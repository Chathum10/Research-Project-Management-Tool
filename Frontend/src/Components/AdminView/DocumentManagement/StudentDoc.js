import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import React from 'react'

const StudntDoc = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [description,setDescription] = useState("");
    const [pdf, setPdf] = useState([]);

    const upload = async (e) => {
        try {
          e.preventDefault();
    
          const data = new FormData();
    
          data.append("name", name);
          data.append("description",description);
          for (var x = 0; x < pdf.length; x++) {
            data.append("uploaded_Image", pdf[x]);
          }

          const res = await fetch(`http://localhost:3000/templates`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setName("");
        setDescription("");
        setPdf(null);
        history("/StudentDoc");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div><br /><br /><br /><br /><br />

     
         <div style={{ maxWidth: 500, margin: "auto" }}>
         <h1>Upload Documentation Templates For Students</h1>
      <form onSubmit={upload} encType="multipart/form-data" >

          <div className="form-group">  
          <input type="text"  placeholder="Name" value={name} required
                  onChange={e=>{setName(e.target.value)}}
                    className="form-control"/>
          </div>

           <div className="form-group">  
          <textarea type="text"  placeholder="description" value={description} required
                  onChange={e=>{setDescription(e.target.value)}}
                    className="form-control"/>
          </div> 

Upload Pdf
<div className="form-group">
    <input type="file" multiple required filename="uploaded_Image"
     className="form-control-file" 
    onChange={e => {setPdf(e.target.files)}}/>
</div>

  <button className="mt-2" 
  type="submit" 
  variant="primary"
   size="lg">
   Upload
   </button>      
  </form>
  </div>

    </div>
  )
}

export default StudntDoc;