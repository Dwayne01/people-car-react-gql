import {Button, Form, Input, Select} from 'antd';
import { GET_PEOPLE_AND_CARS } from '../../queries';


const CreateCar = ({ people, createCar, updateCar, defaultValue, updateDone, updateCarId }) => {
    
    const handleFinish = createCar || updateCar;
    

    const onFinish = (values) => {
        handleFinish({
        variables: !updateCarId ? values : {...values, updateCarId},
        refetchQueries: [{ query: GET_PEOPLE_AND_CARS }]
        });
        updateDone && updateDone();
        console.log('Successes:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log('defaultValue', defaultValue);

    return (
        <Form name="basic"
            labelCol={
                {span: 8}
            }
           
            initialValues={
            defaultValue ? defaultValue :
                {
                    year: '',
                    model: '',
                    price: '',
                    make: ''
                }
            }
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Form.Item label="Year" name="year"
                rules={
                    [{
                            required: true,
                            message: 'Please input a year!'
                        },]
            }>
                <Input/>
            </Form.Item>

            <Form.Item label="Model" name="model"
                rules={
                    [{
                            required: true,
                            message: 'Please input a model!'
                        },]
            }>
                <Input/>
            </Form.Item>

            <Form.Item label="Price" name="price"
                rules={
                    [{
                            required: true,
                            message: 'Please input a price!'
                        },]
            }>
                <Input/>
            </Form.Item>

            <Form.Item label="Make" name="make"
                rules={
                    [{
                            required: true,
                            message: 'Please input a make!'
                        },]
            }>
                <Input/>
            </Form.Item>


            <Form.Item name="personId" label="Person"
                rules={
                    [{
                            required: true
                        }]
            }>
                <Select
                    placeholder="Select a person">
                    {
                        people.map(person => {
                            return <Select.Option key={person.id} value={person.id}>{person.firstName} {person.lastName}</Select.Option>
                        })
                    }
            
                </Select>
            </Form.Item>


            <Form.Item wrapperCol={
                {
                    offset: 8,
                    span: 16
                }
            }>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CreateCar;
