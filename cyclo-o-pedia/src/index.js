import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import CycloOPediaClassPage from './CycloOPediaClassPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <Header />
  <div className='row text-center'>
    <div className='col-6'>
      <span className='h1 text-warning text-center'>Class component</span>
      <CycloOPediaClassPage />
    </div>
  </div>
</div>
);