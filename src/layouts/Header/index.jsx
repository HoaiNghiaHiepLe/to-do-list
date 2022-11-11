import * as S from './styles';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <S.HeaderContainer>
      <S.HeaderNavBar>
        <ul className="nav">
          <li>
            <Link to="/tasks">Show Tasks</Link>
          </li>
          <li>
            <Link to="/tasks/create">New Task</Link>
          </li>
        </ul>
      </S.HeaderNavBar>
    </S.HeaderContainer>
  );
};

export default Header;
