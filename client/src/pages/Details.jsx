import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import PersonCardItem from "../components/CardItem/PersonCardItem";
import { GET_PERSON_AND_CARS } from "../queries";

const Details = () => { 

    const params = useParams();
    const { id } = params;

    const { loading, error, data } = useQuery(GET_PERSON_AND_CARS, {variables: {personId: id}});
    

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :{error.message}</p>;

    const { person, carByPerson } = data;
    
    return (
        <div style={{padding: 40}}>
            <a href="/">GO BACK TO HOME</a>
         <PersonCardItem  person={person} cars={carByPerson} />
        </div>
    );
}
 

export default Details;