import React from 'react';
import './legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div style={{ "--color": '#FF5E54' }}>&gt;0.3</div>
            <div style={{ "--color": '#FFD054' }}>&gt;0.2</div>
            <div style={{ "--color": '#D5F4A3' }}>&gt;0.1</div>
            <div style={{ "--color": '#A3F4CA' }}>&gt;0</div>
            <div style={{ "--color": '#5CFF54'}}>0</div>
        </div>
    );
}
export default Legend;
