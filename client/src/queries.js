import {gql} from '@apollo/client'

export const GET_PEOPLE_AND_CARS = gql`
{
    people {
        id
        firstName
        lastName
    },
    cars {
        id
        year
        make
        model
        price
        personId
    }
}
`;




export const GET_PERSON_AND_CARS = gql`
    query ExampleQuery($personId: String!) {
        person(id: $personId) {
            id
            firstName
            lastName
        }
        carByPerson(personId: $personId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`;