import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './App/Layout/Header';
import { store } from './redux/store'; // Import the store
import { Provider } from 'react-redux'; // Import the Provider
import Counter from './App/Components/Counter';
import DestinationList from './App/Components/DestinationList';
import DestinationFact from './App/Components/DestinationFact';
import ResetApp from './App/Components/ResetApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
// All components wrapped inside the Provider will have access to the store
root.render(
  <div className='text-white'>
    <Provider store={store}>
      <Header />
      <ResetApp />
      <Counter />
      <div className='p-4 border text-center'>
        <h4 className='text-success pb-4'>Destination List</h4>
        <DestinationList />
        <DestinationFact />
      </div>
    </Provider>
  </div>
);
