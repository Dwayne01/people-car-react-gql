import { gql } from 'apollo-server-express';

const people = [
  {
    id: '1',
    firstName: 'Bill',
    lastName: 'Gates'
  },
  {
    id: '2',
    firstName: 'Steve',
    lastName: 'Jobs'
  },
  {
    id: '3',
    firstName: 'Linux',
    lastName: 'Torvalds'
  }
]

const cars = [
  {
    id: '1',
    year: '2019',
    make: 'Toyota',
    model: 'Corolla',
    price: '40000',
    personId: '1'
  },
  {
    id: '2',
    year: '2018',
    make: 'Lexus',
    model: 'LX 600',
    price: '13000',
    personId: '1'
  },
  {
    id: '3',
    year: '2017',
    make: 'Honda',
    model: 'Civic',
    price: '20000',
    personId: '1'
  },
  {
    id: '4',
    year: '2019',
    make: 'Acura ',
    model: 'MDX',
    price: '60000',
    personId: '2'
  },
  {
    id: '5',
    year: '2018',
    make: 'Ford',
    model: 'Focus',
    price: '35000',
    personId: '2'
  },
  {
    id: '6',
    year: '2017',
    make: 'Honda',
    model: 'Pilot',
    price: '45000',
    personId: '2'
  },
  {
    id: '7',
    year: '2019',
    make: 'Volkswagen',
    model: 'Golf',
    price: '40000',
    personId: '3'
  },
  {
    id: '8',
    year: '2018',
    make: 'Kia',
    model: 'Sorento',
    price: '45000',
    personId: '3'
  },
  {
    id: '9',
    year: '2017',
    make: 'Volvo',
    model: 'XC40',
    price: '55000',
    personId: '3'
  }
]


const typeDefs = gql`
  type Person {
    id: ID,
    firstName: String,
    lastName: String,
  }

  type Car {
    id: ID,
    year: String,
    make: String,
    model: String,
    price: String,
    personId: String,
  }


  type Query {
    people: [Person],
    cars: [Car],
    person(id: String!): Person,
    car(id: String!): Car,
    carByPerson(personId: String!): [Car]
  }

  type Mutation {
    createPerson(firstName: String!, lastName: String!): [Person],
    createCar(year: String!, make: String!, model: String!, price: String!, personId: String!): [Car],
    updatePerson(id: String!, firstName: String!, lastName: String!): Person,
    updateCar(id: String!, year: String!, make: String!, model: String!, price: String!, personId: String!): Car,
    deletePerson(id: String!): [Person],
    deleteCar(id: String!): [Car],
  }
`;

const resolvers = {
  Query: {
    people: () => people,
    cars: () => cars,
    person: (_, { id }) => people.find(person => person.id === id),
    car: (_, { id }) => cars.find(car => car.id === id),
    carByPerson: (_, { personId }) => cars.filter(car => car.personId === personId),
  },
  Mutation: {
    createPerson: (_, { firstName, lastName }) => {
      const newPerson = {
        id: String(people.length + 1),
        firstName,
        lastName
      }
      people.push(newPerson)
      return people
    },
    createCar: (_, { year, make, model, price, personId }) => {
      const newCar = {
        id: String(cars.length + 1),
        year,
        make,
        model,
        price,
        personId
      }
      cars.push(newCar)
      return cars
    },
    updatePerson: (_, { id, firstName, lastName }) => {
      const person = people.find(person => person.id === id)

       if (!person) { 
        throw new Error('Person not found')
       }
      
      person.firstName = firstName
      person.lastName = lastName
      return person
    },
    updateCar: (_, { id, year, make, model, price, personId }) => {
      const car = cars.find(car => car.id === id)
       if (!car) { 
        throw new Error('Car not found')
      }
      car.year = year
      car.make = make
      car.model = model
      car.price = price
      car.personId = personId
      return car
    },
    deletePerson: (_, { id }) => {
      const person = people.find(person => person.id === id)
      if (!person) { 
        throw new Error('Person not found')
      }
      people.splice(people.indexOf(person), 1)
      return people
    },
    deleteCar: (_, { id }) => {
      const car = cars.find(car => car.id === id)
       if (!car) { 
        throw new Error('Car not found')
      }
      cars.splice(cars.indexOf(car), 1)
      return people
    },
  }
}

export { typeDefs, resolvers };