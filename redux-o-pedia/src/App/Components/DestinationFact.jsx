import React from 'react'
import { useSelector } from 'react-redux';

function DestinationFact() {
  const selectedDestination = useSelector((state) => state.destinationStore.selectedDestination);

  if (selectedDestination == undefined) {
    return (
      <div className='text-center pt-4 text-warning'>
        <h4>Select a destination to see the details</h4>
      </div>
    )
  } else {
    return (
      <div className='text-center border p-3 m-3'>
        <h4 className='text-success'>{selectedDestination.name}</h4>
        Days Recommended: {selectedDestination.days} <br />
        Fun Fact: {selectedDestination.fact} <br />
      </div>
    )
  }
}

export default DestinationFact