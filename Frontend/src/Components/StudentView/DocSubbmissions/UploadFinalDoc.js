import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import React from 'react'

const UploadFinalDoc = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    //const [date,setDate] = useState("");
    const [pdf, setPdf] = useState([]);

    const upload = async (e) => {
        try {
          e.preventDefault();
    
          const data = new FormData();
    
          data.append("name", name);
          //data.append("date",date);
          for (var x = 0; x < pdf.length; x++) {
            data.append("uploaded_Image", pdf[x]);
          }

          const res = await fetch(`http://localhost:3000/finalDoc`, {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        alert("File Upload Successfully")
        setName("");
        //setDate("");;
        setPdf(null);
        history("/UploadFinalDoc");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div><br /><br /><br /><br /><br />

     
         <div style={{ maxWidth: 500, margin: "auto" }}>
         <h1>Upload Final Document</h1>
      <form onSubmit={upload} encType="multipart/form-data" >

          <div className="form-group">  
          <input type="text"  placeholder="Name" value={name} required
                  onChange={e=>{setName(e.target.value)}}
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

export default UploadFinalDoc;