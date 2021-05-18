import React from 'react'
import PropTypes from 'prop-types'

const Load = ({onClick}) =>(
    <> 
        <button onClick={onClick}>Get Quote</button>
    </>
);

Load.proptypes = {
    onClick: PropTypes.func.isRequired,
}

export default Load;
