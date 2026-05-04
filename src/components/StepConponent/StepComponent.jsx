import React from 'react'
import { CustomStep } from './styled';

const StepComponent = ({ current = 0, items = [] }) => {
  return (
    <CustomStep 
      current={current} 
      items={items} 
    />
  )
}

export default StepComponent