import React from 'react'

import CountButton from '../components/CountButton'
import CountCard from '../components/CountCard'
import MeCard from '../components/MeCard'

type DashboardProps = {
    name: string
    count: number
    onIncrease: () => void
    onDecrease: () => void
    loading: boolean;
}

const Dashboard = ({ name, count, onDecrease, onIncrease, loading }: DashboardProps) => {
    return (
        <div className="flex justify-center align-middle">
            <div className="flex">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        {loading ? <progress className="progress w-56"></progress>:<MeCard name={name} />}
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
