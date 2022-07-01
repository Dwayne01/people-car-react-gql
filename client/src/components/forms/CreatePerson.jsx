import { Button, Form, Input } from 'antd';
import { GET_PEOPLE_AND_CARS } from '../../queries';

const CreatePerson = ({ defaultValue, createPerson, updatePerson }) => {
  const handleFinish = createPerson || updatePerson;


  const onFinish = (values) => {
    handleFinish({
      variables: values,
      refetchQueries: [{ query: GET_PEOPLE_AND_CARS }]
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      // name="basic"
      labelCol={{
        span: 8,
      }}
   
      defaultValue={defaultValue ? defaultValue :{
        firstName: 'minte',
        lastName: 'temple',
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