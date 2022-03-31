import React from 'react'

type CountCardProps = {
    count: number
}

const CountCard = ({ count }: CountCardProps) => {
    return <div className="stats">
  
    <div className="stat">
      <div className="stat-title">Total Counts</div>
      <div className="stat-value">{count}</div>
      <div className="stat-desc">you clicked</div>
    </div>
    
  </div>
}

export default CountCard
