import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Space, Input } from 'antd';
import { deleteTaskAction } from '../../redux/actions/task.action';

import * as S from './styles';

const TaskListPage = () => {
  const [keyWord, setkeyWord] = useState('');
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.task);

  const newTaskList = taskList.filter((item) => {
    return item.title.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
  });

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskAction({ id }));
  };

  const renderTaskList = () => {
    return newTaskList.map((item) => {
      return (
        <div key={item.id}>
          <S.TaskContent>
            <S.Textcontent>
              <S.ButtonSpace>
                <h1>{item.title}</h1>
                <div>
                  <S.EditButton
                    onClick={() => {
                      navigate(`/tasks/${item.id}/update`);
                    }}
                  >
                    Edit
                  </S.EditButton>
                  <S.DeleteButton onClick={() => handleDeleteTask(item.id)}>
                    Delete
                  </S.DeleteButton>
                </div>
              </S.ButtonSpace>
              <Input.TextArea
                autoSize={{ minRows: 2, maxRows: 6 }}
                value={item.content}
              />
            </S.Textcontent>
          </S.TaskContent>
        </div>
      );
    });
  };

  return (
    <S.TaskContainer>
      <Space direction="vertical">
        <h1>To do list</h1>
        <S.MyButton onClick={() => navigate(`/tasks/create`)}>
          Create Task
        </S.MyButton>
        <Input.Search
          onChange={(e) => setkeyWord(e.target.value)}
          value={keyWord}
          placeholder="search Tasks"
          allowClear
          enterButton="Search"
          size="large"
        />
        {renderTaskList()}
      </Space>
    </S.TaskContainer>
  );
};

export default TaskListPage;
