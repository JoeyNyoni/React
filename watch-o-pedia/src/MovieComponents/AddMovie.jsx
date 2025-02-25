import { useState } from 'react';

// This component is used to add a new movie to the list of movies.
const AddMovie = (props) => {

  const [name, setName] = useState("");

  function submitAddMovie(e, props) {
    e.preventDefault();
    props.handleAddMovie(name);
    setName("");
  }

  return (
    <form onSubmit={(e) => submitAddMovie(e, props)}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>

        <div className="col-8 offset-1">
          <input 
            type="text" 
            className="form-control my-2" 
            placeholder="Movie Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form> 
  );
}

export default AddMovie;