import React from 'react'
import product from './product'

function Image() {
  return (
    <div>
      <img src={product.Image} alt='pic' style={{ width: '25rem'}} />
    </div>
  )
}

export default Image
