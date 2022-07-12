import {gql} from '@apollo/client'

export const LOAD_USERS = gql`
     query{
      getUsers{
        id
        first_name
        last_name
        email
        gender
        currency
        card
    }
 }
`