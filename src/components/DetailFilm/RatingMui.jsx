import { Rating } from '@mui/material'
import React, { useState } from 'react'

const RatingMui = ({rating}) => {
  return (
    <div>
         <Rating size="small" name="half-rating" defaultValue={rating} precision={0.5} />
    </div>
  )
}

export default RatingMui