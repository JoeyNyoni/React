import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementMultiplier, decrementMultiplier } from '../../redux/slice/CounterSlice';
import { useState } from 'react';

function Counter() {

  // useSelector is a hook that allows you to extract data from the Redux store state
  // It takes a selector function as an argument and returns the selected part of the state
  const count = useSelector((state) => state.counterStore.count); 
  // useDispatch is a hook that returns a reference to the dispatch function from the Redux store
  const dispatch = useDispatch();

  const [multiplier, setMultiplier] = useState(10);
  
  return (
    <div className='mt-2 pt-3 pl-2 text-center' style={{borderTop: "1px solid #999"}}>
      <div className='pb-2 h4'>
        Counter: {count}
      </div>
      <div className='row'>
        <div className='p-4 col-12 col-md-6'>
          <div className='border p-4'>
            <h4 className='text-success pb-2'>Basic Counter</h4>
            <button className='btn btn-primary' onClick={() =>dispatch(increment())}>
              Increment
            </button>
            &nbsp;
            <button className='btn btn-danger' onClick={() => dispatch(decrement())}>
              Decrement
            </button>
          </div>
        </div>
        <div className='p-4 col-12 col-md-6'>
          <div className='border p-4'>
            <h4 className='text-success pb-2'>Mulitplier Counter</h4>

            <div className='row'>
              <div className='col-4 p-1'>
                <input 
                  type="text" 
                  className='form-control' 
                  placeholder='Multiplier'
                  value={multiplier}
                  onChange={(e) => setMultiplier(e.target.value)} 
                />
              </div>
              <div className='col-4 p-1'>
                <button className='btn btn-primary form-control' onClick={() =>dispatch(incrementMultiplier(multiplier))}>
                  Increment
                </button>
              </div>
              <div className='col-4 p-1'>
                <button className='btn btn-danger form-control' onClick={() => dispatch(decrementMultiplier(multiplier))}>
                  Decrement
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Counter