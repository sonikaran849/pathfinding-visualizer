import React, {Component} from 'react';

import './Node.css'

export default class Node extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }

    render() { 
        const {
            col,
            isFinish,
            isStart,
            isWall,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            row,
        } = this.props;
        const extraClassName = isFinish
            ? 'node-finish' 
            : isStart  
            ? 'node-start'
            : isWall
            ? 'node-wall' 
            : '';
        
            
        return (
            <div
                className={`node ${extraClassName}`}
                id={`node-${row}-${col}`}
                onMouseDown={() => onMouseDown(row,col)}
                onMouseEnter={() => onMouseEnter(row,col)}
                onMouseUp={() => onMouseUp()}
            >
            
            </div>
        );
    }
}
