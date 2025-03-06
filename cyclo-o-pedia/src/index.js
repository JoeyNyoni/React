import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import CycloOPediaClassPage from './CycloOPediaClassPage';
import CycloOPediaClassPageFunc from './CycloOPediaClassPageFunc';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <Header />
  <div className='row text-center'>
    <div className='col-6'>
      <span className='h1 text-warning text-center'>Class component</span>
      <CycloOPediaClassPage />
    </div>
    <div className='col-6'>
      <span className='h1 text-warning text-center'>Functional component</span>
      <CycloOPediaClassPageFunc />
    </div>
  </div>
</div>
);