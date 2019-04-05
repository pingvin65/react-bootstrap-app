import React, { Component } from 'react';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li key={number.toString()}>
        {number}
    </li>
);

class Home extends Component {
    render() {
        return ( 
            <div>        
                <h2>Home</h2>
                <ul>{listItems}</ul>    
            </div>       
        );
    }
}

export default Home;