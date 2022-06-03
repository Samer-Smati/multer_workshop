import { useState } from "react";

import { Button, Form } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/action'
function FileUpload() {
  const dispatch = useDispatch()

  const [fileData, setFileData] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const uploadFile =  (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("file", fileData);
    data.append("firstname", firstname);
    data.append("lastname", lastname);
    data.append("email", email);
    data.append("password", password);
    dispatch(addUser(data))
  };
  return (
    <Form onSubmit={uploadFile} className="d-flex flex-column"> 
      <input type="file" placeholder="file" onChange={(e)=>setFileData(e.target.files[0])} required />
      <input type="text" placeholder="firstname" onChange={(e)=>setFirstName(e.target.value)} required />
      <input type="text" placeholder="lastname" onChange={(e)=>setLastName(e.target.value)} required />
      <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} required />
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} required />
      <Button variant="outline-primary" type="submit"  >Upload</Button>
    </Form>
  );
}

export default FileUpload;
