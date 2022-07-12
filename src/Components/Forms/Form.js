import React, { useState, } from 'react'
import { ADD_USER_MUTATION } from '../GraphQL/Mutations'
import {useMutation } from '@apollo/client'
import classes from './Forms.module.css'
// import {users} from  '../GetUsers'



const Form = () => {

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [currency, setCurrency] = useState("");
    const [card, setCard] = useState("");

    const [addUser, {error,}] = useMutation(ADD_USER_MUTATION )
   
    

    const createUser = ( ) => {
        addUser({
            variables: {
                first_name: first_name,
                last_name: last_name,
                email: email,
                gender: gender,
                currency: currency,
                card: card
            },
        });

      
        // if (data) {
        //     console.log("error");  
        //     console.log(data)  
        // } 
    };

  return (
    <div className={classes.header}>
        <input type="text" placeholder="First Name" onChange={(e) => {
            setFirstName(e.target.value)
        }}/>
         <input type="text" placeholder="Last Name" onChange={(e) => {
            setLastName(e.target.value)
        }}/>
         <input type="text" placeholder="Email" onChange={(e) => {
            setEmail(e.target.value)
        }}/>
         <input type="text" placeholder="Gender" onChange={(e) => {
            setGender(e.target.value)
        }}/>
         <input type="text" placeholder="Currency" onChange={(e) => {
            setCurrency(e.target.value)
        }}/>
         <input type="text" placeholder="Card" onChange={(e) => {
            setCard(e.target.value)
        }}/>
        <button onClick={createUser.bind(this)}>Add User </button> 
        
    </div>
  )
}

export default Form;


