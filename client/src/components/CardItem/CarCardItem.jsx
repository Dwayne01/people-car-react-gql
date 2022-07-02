import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useState } from 'react';
import { GET_PEOPLE_AND_CARS } from '../../queries';
import CreateCar from '../forms/CreateCar';


const CarCardItem = ({ car, people, updateCar, deleteCar}) => {
const [edit, setEdit] = useState(false);

  
    const handleDelete = () => {
    deleteCar({
      variables: {
        deleteCarId: car.id
      },
      refetchQueries: [{ query: GET_PEOPLE_AND_CARS }]
    })
    }
  
  
  return(
  <Card
    style={{ width: 300, margin: 10 }}
    actions={deleteCar && [
      <EditOutlined onClick={() => setEdit(!edit)} key="edit" />,
      <DeleteOutlined onClick={handleDelete} key="ellipsis" />,
    ]}
    >
      
      {edit ? <CreateCar updateDone={() => setEdit(!edit)}  updateCarId={car.id} updateCar={updateCar} defaultValue={car} people={people} /> :

        <>
          <p>car: {car.year}</p>
          <p>make: {car.make}</p>
          <p>model: {car.model}</p>
          <p>price: {car.price}</p>
        </>
      }
  </Card>
  );
}

export default CarCardItem;