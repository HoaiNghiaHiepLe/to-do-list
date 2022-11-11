import * as S from './styles';
import { Input, Space, Form } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTaskAction } from '../../redux/actions/task.action';

const CreateTaskPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateTask = (values) => {
    dispatch(createTaskAction({ values }));
    navigate('/tasks');
  };

  return (
    <S.TaskContainer>
      <Space direction="vertical">
        <h1>New Task</h1>
      </Space>
      <Form
        name="createTask"
        onFinish={(values) => {
          handleCreateTask(values);
        }}
        layout="vertical"
        label="toDoForm"
      >
        <Form.Item
          validateFirst
          label="Task Title"
          name="title"
          hasFeedback
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter your task title',
            },
            {
              type: 'string',
              min: 4,
              message: 'minimum character is 4',
            },
          ]}
        >
          <Input size="middle" placeholder="Enter task title" />
        </Form.Item>
        <Form.Item
          label="Task Content"
          name="content"
          hasFeedback
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please enter your task content',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Enter task content..."
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </Form.Item>
        <Form.Item>
          <S.MyButton block htmlType="submit">
            Submit
          </S.MyButton>
        </Form.Item>
      </Form>
    </S.TaskContainer>
  );
};

export default CreateTaskPage;
