
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';
import { EmployeeContext } from '../Context/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm=()=>{
       
    const {dispatch}=useContext(EmployeeContext);

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [phone,setPhone]=useState("");

    const handleSumbit=(event)=>{
     event.preventDefault();

    dispatch({type:'add_employee',employee:{
      name,email,address,phone
    }})
    }

    return(

    <Form onSubmit={handleSumbit}>
      <FormGroup>
        <FormControl
        type='text'
        placeholder='Name *'
        value={name}
        onChange={event=>setName(event.target.value)}
        required
        />
      </FormGroup>

      <FormGroup>
        <FormControl
        type='email'
        placeholder='Email *'
        value={email}
        onChange={event=>setEmail(event.target.value)}
        required
        />
      </FormGroup>

      <FormGroup>
        <FormControl
        as='textarea'
        placeholder='Adress *'
        value={address}
        onChange={event=>setAddress(event.target.value)}
        rows={3}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
        type='text'
        placeholder='Phone'
        value={phone}
        onChange={event=>setPhone(event.target.value)}
        />
      </FormGroup>

      <Button variant='success' type='sumbit' block>
        Add New Employee
      </Button>

    </Form>
    );
};

export default AddForm;