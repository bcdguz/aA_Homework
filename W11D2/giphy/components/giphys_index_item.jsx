import React from 'react';

const GiphysIndexItem = (props) => {
    // debugger
    return (
        <li>
            <img src={props.giph.images.fixed_height.url} alt=""/>
        </li>
    )
}

export default GiphysIndexItem;