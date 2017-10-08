import React from 'react'
export const Header = (name) => {

    const titleStyle = {
        padding:'5px 20px',
        color:'#5C6B77',
        background:'#ecf6fd',
        marginTop: 20,
        marginBottom: 10,
        letterSpacing:4,
        borderRadius:3,
        overflow:'hidden',
    }

    return (
        <div style={titleStyle}>
            <h2>{name}</h2>
        </div>
    )

}