import React from 'react'

import Dashboard from '../components/Dashboard'

import { useAppDispatch, useAppSelector } from '../hooks'

import { increment, decrement } from '../features/counter'

const DashboardContainer = () => {
    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.counter.count)

    const onIncrease = () => {
        dispatch(increment(1))
    }
    const onDecrease = () => {
        dispatch(decrement(1))
    }

    return (
        <Dashboard
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}

export default DashboardContainer
