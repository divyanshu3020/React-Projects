import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BasicCard from './card.jsx'; // Your card component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicCard username="Happiness" btnText='touch me bitch'/>
    <BasicCard username="What about horny" btnText='tear me up damsel'/>
    <BasicCard username="Divyanshu" btnText='yes i m horny'/>
    
  </StrictMode>,
);
