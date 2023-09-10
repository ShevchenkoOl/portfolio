import Navigation from '../Navigation';
import { Header } from './AppBar.style';
import logo from '../../assets/images/logo1.png';

export default function Appbar() {
  return (
    <Header>
      <a href="/" aria-label="Logo">
        <img src={logo} alt="Logo" width="80" height="80" />
      </a>
      <Navigation />
    </Header>
  );
}
