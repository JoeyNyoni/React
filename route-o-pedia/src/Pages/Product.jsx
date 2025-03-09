import React, { useState } from 'react'
import { Link, useNavigate, Navigate } from 'react-router-dom';

function Product() {
  const navigate = useNavigate();
  const [goToProductDetails, setGoToProductDetails] = useState(() => {return false});

  // different ways to use Navigate
  return (
    <div>
      Product
      <button onClick={() => navigate('/product/create')}>Add Product</button>

      <Link to={"/product/details/5"}>
        <button>Navigate to Product details - 5</button>
      </Link>

      {goToProductDetails && <Navigate to={"/product/details/3"} />}
      <button onClick={() => setGoToProductDetails({goToProductDetails: true})}>
        Navigate to Product - 3
      </button>

    </div>
  )
}

export default Product;