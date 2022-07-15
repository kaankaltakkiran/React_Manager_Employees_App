import {Button, Form, FormControl, FormGroup} from 'react-bootstrap';
import { EmployeeContext } from '../Context/EmployeeContext';
import { useContext, useState} from 'react';
const EditForm=({theEmployee})=>{
        
    const {dispatch}=useContext(EmployeeContext);

    const employee=theEmployee;
    const id =employee.id;

    const [name,SetName]=useState(employee.name);
    const [email,SetEmail]=useState(employee.email);
    const [address,SetAddress]=useState(employee.address);
    const [phone,SetPhone]=useState(employee.phone);

    const updatedEmployee={id,name,email,address,phone};

    const handleSubmit= (event)=>{
      event.preventDefault();

      dispatch({type:'update_employee',id,updatedEmployee})
    }

    return(
    
    <Form onSubmit={handleSubmit} >
      <FormGroup>
        <FormControl
        type='text'
        placeholder='Name *'
        value={name}
        onChange={(event)=>SetName(event.target.value)}
        required
        />
      </FormGroup>

      <FormGroup>
        <FormControl
        type='email'
        placeholder='Email *'
        value={email}
        onChange={(event)=>SetEmail(event.target.value)}
        required
        />
      </FormGroup>

      <FormGroup>
        <FormControl
        as='textarea'
        placeholder='Adress *'
        value={address}
        onChange={(event)=>SetAddress(event.target.value)}
        rows={3}
        />
      </FormGroup>

      <FormGroup>
        <FormControl
        type='text'
        placeholder='Phone'
        value={phone}
        onChange={(event)=>SetPhone(event.target.value)}
        />
      </FormGroup>

      <Button variant='success' type='sumbit' block>
       Update Employee
      </Button>

    </Form>
    );
};

export default EditForm;