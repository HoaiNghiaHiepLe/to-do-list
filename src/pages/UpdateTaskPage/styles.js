import styled from 'styled-components';

import { Button, Space } from 'antd';

export const TaskContainer = styled.div``;

export const MyButton = styled(Button)`
  & {
    border: #1890ff 1px solid;
  }
  &:hover {
    background-color: #a0d911;
    color: #000;
    border: #a0d911 1px solid;
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

export const MySpace = styled(Space)`
  display: flex;
  justify-content: space-between;
`;
