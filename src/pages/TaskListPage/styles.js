import styled from 'styled-components';

import { Button } from 'antd';

export const TaskContainer = styled.div`
  width: 100%;
`;

export const TaskContent = styled.div`
  margin-top: 10px;
  border: 1px solid #888888;
  display: flex;
  flex-direction: column;
  flex: 1;
  &:hover {
    box-shadow: 5px 10px #888888;
  }
`;

export const Textcontent = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  & h1 {
    margin: 10px;
  }
`;

export const ButtonSpace = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & Button {
    margin-left: 5px;
  }
`;

export const MyButton = styled(Button)`
  & {
    border: #1890ff 1px solid;
  }
  &:hover {
    background-color: #a0d911;
    color: #fff;
    border: #a0d911 1px solid;
  }
`;

export const EditButton = styled(Button)`
  & {
    border: #531dab 1px solid;
  }
  &:hover {
    background-color: #531dab;
    color: #fff;
    border: #531dab 1px solid;
  }
`;

export const DeleteButton = styled(Button)`
  & {
    border: #f44336 1px solid;
  }
  &:hover {
    background-color: #f44336;
    color: #fff;
    border: #f44336 1px solid;
  }
`;

export const CancelButton = styled(Button)`
  & {
    margin-top: 5px;
    border: #f44336 1px solid;
  }
  &:hover {
    background-color: #f44336;
    color: #fff;
    border: #f44336 1px solid;
  }
`;
