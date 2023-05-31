import React from 'react'
import { Typography } from '@mui/material'

function NotFound() {
  return (
    <div>
        <Typography className='text-center mt-5' variant='h2'>404</Typography>
        <Typography className='text-center' variant="h3">Aradığınız sayfa bulunamadı..</Typography>
    </div>
  )
}

export default NotFound