import { useEffect } from 'react';
import './App.css';
import Image from './components/Image';
import ImageTransition from './lib/ImageTransition';


function App() {

  useEffect(() => {
    new ImageTransition('.canvas');
  },[]);

  return (
    <main className="App">
      <Image src="/images/melbourne.jpg" alt="Melboune CBD skyline" heading="Melbourne CBD Skyline" />
      <Image src="/images/osaka-castle.jpg" alt="Osaka Castle" heading="Oaska Castle" />
      <Image src="/images/japan-eki.jpg" alt="Train Station" heading="Train Station" />
      <Image src="/images/crossing.jpg" alt="Road Crossing" heading="Road Crossing" />
      <Image src="/images/jp-taxi.jpg" alt="Japan's Taxi - Shutter drag" heading="Taxi" />

      <canvas className="canvas"></canvas>
      <div className="fullscreen"></div>
    </main>
  )
}

export default App
