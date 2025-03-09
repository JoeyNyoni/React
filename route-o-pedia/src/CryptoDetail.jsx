import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
  const { cryptoSymbol } = useParams();

  return (
    <div>
      CryptoDetail
    </div>
  )
}

export default CryptoDetail