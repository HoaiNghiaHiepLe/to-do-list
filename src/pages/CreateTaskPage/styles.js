import styled from 'styled-components';

import { Button } from 'antd';

export const TaskContainer = styled.div`
  & button {
    border: #1890ff 1px solid;
  }
  & button:hover {
    background-color: #a0d911;
    color: #000;
    border: #a0d911 1px solid;
  }
`;

export const TaskContent = styled.div``;

export const MyButton = styled(Button)`
  & {
    color: #fff;
    background-color: #1890ff;
    width: 100%;
    border: #1890ff 1px solid;
  }
  &:hover {
    background-color: #a0d911;
    color: #000;
    border: #a0d911 1px solid;
  }
`;
