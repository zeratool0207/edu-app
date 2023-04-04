import React from 'react'

const BottomBtn = (props) => {
    const { name, varient, onClick } = props;
    const primary = {
        background:'#1d80e2',
        color: '#fff'
    }

    const secondary = {
        background:'#898989',
        color: '#fff'
    }
    return (
        <>
            <button
                style={varient === 'primary' ? primary: secondary }
                onClick={onClick}
            >{name}
            </button>
        </>
    )
}

export default BottomBtn