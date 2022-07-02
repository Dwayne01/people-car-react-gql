import { Button, Form, Input } from 'antd';
import { GET_PEOPLE_AND_CARS } from '../../queries';

const CreatePerson = ({ updateDone, defaultValue, createPerson, updatePerson, updatePersonId }) => {
  const handleFinish = createPerson || updatePerson;


  const onFinish = (values) => {
    handleFinish({
      variables: updatePersonId ? {...values, updatePersonId} : values,
      refetchQueries: [{ query: GET_PEOPLE_AND_CARS }]
    });
    updateDone && updateDone();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
   
      initialValues={defaultValue ? defaultValue :{
        firstName: '',
        lastName: '',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please input a first name!',
          },
        ]}
      >
        <Input />
          </Form.Item>
          
          <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please input a last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

     

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePerson;