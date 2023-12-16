import './App.css';
import {Parallax} from 'react-parallax'
import parallax1 from './images/parallax1.jpg'
import parallax2 from './images/parallax2.jpg'
import parallax3 from './images/parallax3.jpg'
import parallax4 from './images/parallax4.jpg'
function App() {
  return (
    <div className="App">
      <Parallax strength={300} bgImage={parallax1}>
        <div className='content'>
          <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={parallax2}>
        <div className='content'>
          <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={parallax3}>
        <div className='content'>
          <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={parallax4}>
        <div className='content'>
          <div className='text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
