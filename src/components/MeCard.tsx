import React from 'react'

type MeCardProps = {
    name: string
}

const MeCard = ({ name }: MeCardProps) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    )
}

export default MeCard
