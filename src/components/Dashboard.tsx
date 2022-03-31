import React from 'react'

import CountButton from '../components/CountButton'
import CountCard from '../components/CountCard'

type DashboardProps = {
    count: number
    onIncrease: () => void
    onDecrease: () => void
}

const Dashboard = ({ count, onDecrease, onIncrease }: DashboardProps) => {
    return (
        <div className="flex justify-center align-middle">
            <div className='flex'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <CountCard count={count} />
                        <div className="card-actions">
                            <CountButton
                                name={'Increase'}
                                onClick={onIncrease}
                            />
                            <CountButton
                                name={'Decrease'}
                                onClick={onDecrease}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
