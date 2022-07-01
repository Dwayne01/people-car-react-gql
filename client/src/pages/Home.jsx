import { useMutation, useQuery } from "@apollo/client";
import PersonCardItem from "../components/CardItem/PersonCardItem";
import CreateCar from "../components/forms/CreateCar";
import CreatePerson from "../components/forms/CreatePerson";
import { DELETE_PERSON, DELETE_CAR, ADD_CAR, ADD_PERSON, UPDATE_CAR, UPDATE_PERSON } from "../mutation";
import { GET_PEOPLE_AND_CARS } from "../queries";

const Home = () => { 
    const { loading, error, data } = useQuery(GET_PEOPLE_AND_CARS);
    const [deletePerson] = useMutation(DELETE_PERSON);
    const [deleteCar] = useMutation(DELETE_CAR);
    const [createCar] = useMutation(ADD_CAR);
    const [createPerson] = useMutation(ADD_PERSON);
    const [updateCar] = useMutation(UPDATE_CAR);
    const [updatePerson] = useMutation(UPDATE_PERSON);


    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :{error.message}</p>;

    const { people, cars } = data;
    return (
        <div>
            <div style={{ display: 'flex'}}>
                <CreatePerson  createPerson={createPerson} />
                <CreateCar  createCar={createCar} people={people} />
            </div>
    
          
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', overflow: 'scroll', padding: 10}}>
                {people.map(person => (
                    <PersonCardItem updatePerson={updatePerson} updateCar={updateCar} deleteCar={deleteCar} deletePerson={deletePerson} people={people} key={person.id} person={person} cars={cars} />
                ))}
            </div>
        </div>
    );
}
 

export default Home;