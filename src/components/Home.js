import React, { Component } from 'react';
import PostData from '../data/posts.json';

class Home extends Component {
    render() {
        return ( 
            <div>        
                {PostData.map((postDetail, index) => {
                    return <div key={index}>
                        <h3>{postDetail.title}</h3>
                        <p>{postDetail.content}</p>
                    </div>
                })}
            </div>       
        );
    }
}

export default Home;