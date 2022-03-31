import React from 'react'

type CountButtonProps = {
    name: string,
    onClick: () => void
}

const CountButton = ({ name, onClick }: CountButtonProps) => {
    return <button className='btn' onClick={onClick}>{name}</button>
}

export default CountButton