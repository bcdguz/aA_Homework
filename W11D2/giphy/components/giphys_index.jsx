import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = (props) => {
    
    return(
        <ul>
            {props.giphys.map((giph) => {
                return (
                    <GiphysIndexItem giph={giph}/>
                )
            })}
        </ul>
    )
}

export default GiphysIndex;