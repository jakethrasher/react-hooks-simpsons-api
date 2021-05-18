import React from 'react'
import PropTypes from 'prop-types'

const Load = ({handleClick}) =>(
    <> 
        <button onClick={handleClick}>Get Quote</button>
    </>
);

Load.proptypes = {
    onClick: PropTypes.func.isRequired,
}

export default Load;
