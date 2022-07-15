import {gql} from '@apollo/client'

export const ADD_USER_MUTATION = gql`

    mutation addUser($first_name: String!
     $last_name: String!
     $email: String! 
     $gender: String! 
     $currency: String! 
     $card: String!) {
        addUser(first_name: 
         $first_name last_name:
         $last_name
         email: $email
         gender: $gender
         currency: $currency
         card: $card
         ) {
        id
        }
    }
`