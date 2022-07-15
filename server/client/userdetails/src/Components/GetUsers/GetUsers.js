import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import { LOAD_USERS } from '../GraaphQl/Queries';
import classes from '././GetUsers.module.css'


const GetUsers = () => {

  const {error, loading, data} = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const keys = ['first_name', 'last_name', 'email', 'gender', 'currency', 'card']
  console.log(users[0] )

  // const search = (data)=>{
  //   return data.filter(item=>item.first_name)
  // }
  
  useEffect(() => {
    // console.log(data);
    if(data) {
      setUsers(data.getUsers); 
    }
  }, [data]);
  
  // console.log(users.filter(user=>user.first_name.toLowerCase().includes("fe")));

  return(
       <div>
          <div className={classes.search}>
            <input type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
          </div>
        <div className={classes.topcontent}>
          <h3 className={classes.day}>Today</h3>
        </div>
         <table>
         <thead className={classes.start}>
           <tr>
               <th>Firstname</th>
               <th>Lastname</th>
               <th>email</th>
               <th>Gender</th>
               <th>Currency</th>
               <th>Card</th>
          </tr>
        </thead> 
              {users.filter(user=>
              user.first_name.toLowerCase().includes(query) ||
              user.last_name.toLowerCase().includes(query) ||
              user.email.toLowerCase().includes(query) ||
              user.gender.toLowerCase().includes(query) ||
              user.currency.toLowerCase().includes(query) ||
              user.card.toLowerCase().includes(query) 
              ).map((val, index) => {
          return (
            <>
              <tbody key={index}  className={classes.data}>
                <tr>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td>{val.gender}</td>
                  <td>{val.currency}</td>
                  <td>{val.card}</td>
                </tr>
              </tbody>
            </>
          )
         })} 
        </table>     
     </div>
  );
}
export default GetUsers;