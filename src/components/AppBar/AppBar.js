import Navigation from '../Navigation';
import { Header } from './AppBar.style';
import logo from '../../assets/images/logo1.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Appbar() {
  return (
    <Header>
      <Link to="/" aria-label="Logo">
        <img src={logo} alt="Logo" width="80" height="80" />
      </Link>
      <Navigation />
    </Header>
  );
}
