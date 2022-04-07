import React, { useEffect } from 'react'

import Dashboard from '../components/Dashboard'

import { useAppDispatch, useAppSelector } from '../hooks'

import { increment, decrement } from '../features/counter'

import { requestMe } from '../features/me'

const DashboardContainer = () => {
    const dispatch = useAppDispatch()
    const count = useAppSelector((state) => state.counter.count)
    const name = useAppSelector((state) => state.me.name)
    const message = useAppSelector((state) => state.me.message)
    const loading = useAppSelector((state) => state.me.loading)

    const onIncrease = () => {
        dispatch(increment(1))
    }
    const onDecrease = () => {
        dispatch(decrement(1))
    }

    useEffect(() => {
        if (name === '') {
            dispatch(requestMe())
        }
    }, [name])

    return (
        <Dashboard
            name={name ? name : message}
            loading={loading}
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        />
    )
}

export default DashboardContainer
