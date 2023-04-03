import React from 'react'

const BottomBtn = (props) => {
    const { name } = props;
    return (
        <>
            <button>
                {name}
            </button>
        </>
    )
}

export default BottomBtn