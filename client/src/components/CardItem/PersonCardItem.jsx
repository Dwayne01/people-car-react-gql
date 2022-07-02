import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useState } from 'react';
import { GET_PEOPLE_AND_CARS } from '../../queries';
import CreatePerson from '../forms/CreatePerson';
import CarCardItem from './CarCardItem';

const { Meta } = Card;

const PersonCardItem = ({ person, updateCar, updatePerson, deletePerson, deleteCar, people, cars }) => {
  const [edit, setEdit] = useState(false);
 


  const handleDelete = () => {
    deletePerson({
      variables: {
        deletePersonId: person.id
      },
      refetchQueries: [{ query: GET_PEOPLE_AND_CARS }]
    })
  }

  return(
  <Card
    style={{ width: 400, margin: 10 }}
    extra={deletePerson && <a href={`/details/${person.id}`}>Learn More</a>} 
    actions={deletePerson && [
      <EditOutlined onClick={() => setEdit(!edit)} key="edit" />,
      <DeleteOutlined onClick={handleDelete} key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={person.firstName + " " + person.lastName}
    />

      {
        edit &&
          <CreatePerson updatePersonId={person.id} updateDone={() => setEdit(!edit)}  updatePerson={updatePerson} defaultValue={{firstName: person.firstName, lastName: person.lastName}} />
    }
      
        {cars.map(car => {
          if (car.personId !== person.id) return null;
          return (
            <CarCardItem updateCar={updateCar} deleteCar={deleteCar} people={people} key={car.id} car={car} />
          )
        })}
      
  
  </Card>
);}

export default PersonCardItem;