import * as S from './styles';
import { Input, Space, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { updateTaskAction } from '../../redux/actions/task.action';

const UpdateTaskPage = () => {
  const { taskList } = useSelector((state) => state.task);
  const [updateForm] = Form.useForm();
  const params = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const getInitialValues = () => {
    const task = taskList.find((item) => {
      return item.id === params.id || [];
    });
    return {
      title: task.title,
      content: task.content,
    };
  };

  const handleUpdateTask = (values, id) => {
    dispatch(updateTaskAction({ values, id }));
  };
  return (
    <S.TaskContainer>
      <S.MySpace direction="horizontal">
        <h1>Update Task</h1>
        <S.CancelButton
          block
          onClick={() => {
            navigate('/tasks');
          }}
        >
          Back
        </S.CancelButton>
      </S.MySpace>
      <Form
        name="updateTask"
        initialValues={getInitialValues()}
        layout="vertical"
        label="toDoForm"
        onFinish={(values) => {
          handleUpdateTask(values, params.id);
          navigate('/tasks');
        }}
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
          <S.MyButton block type="primary" htmlType="submit">
            Change
          </S.MyButton>
        </Form.Item>
      </Form>
    </S.TaskContainer>
  );
};

export default UpdateTaskPage;
