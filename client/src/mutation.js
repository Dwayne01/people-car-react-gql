import {gql} from '@apollo/client'

export const DELETE_PERSON = gql`
    mutation  DeletePerson($deletePersonId: String!) {
        deletePerson(id: $deletePersonId) {
            id
            firstName
            lastName
        }
    }
`;


export const DELETE_CAR = gql`
    mutation Mutation($deleteCarId: String!) {
        deleteCar(id: $deleteCarId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`; 


export const ADD_PERSON = gql`
    mutation CreatePerson($firstName: String!, $lastName: String!) {
        createPerson(firstName: $firstName, lastName: $lastName) {
            id
            firstName
            lastName
        }
    }
`;

export const ADD_CAR = gql`
    mutation CreateCar($year: String!, $make: String!, $model: String!, $price: String!, $personId: String!) {
        createCar(year: $year, make: $make, model: $model, price: $price, personId: $personId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`;

export const UPDATE_PERSON = gql`
    mutation UpdatePerson($updatePersonId: String!, $firstName: String!, $lastName: String!) {
        updatePerson(id: $updatePersonId, firstName: $firstName, lastName: $lastName) {
            firstName
            id
            lastName
        }
    }
`;

export const UPDATE_CAR = gql`
    mutation UpdateCar($updateCarId: String!, $year: String!, $make: String!, $model: String!, $price: String!, $personId: String!) {
        updateCar(id: $updateCarId, year: $year, make: $make, model: $model, price: $price, personId: $personId) {
            id
            year
            make
            model
            price
            personId
        }
    }
`;
