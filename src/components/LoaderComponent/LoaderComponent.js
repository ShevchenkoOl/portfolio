import  { BallTriangle }  from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//import { accentColor, secondaryColor } from '../../assets/stylesVariables';
import { Overlay } from './LoaderComponent.style';

function LoaderComponent() {
  return (
    <Overlay>
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
    </Overlay>
  );
}

export default LoaderComponent;
