import React, { Component } from 'react';
import PostData from '../data/posts.json';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Contact</h2>
                {PostData.map((postDetail, index)=>{
                    return <div key={index}>
                    <h3>{postDetail.title}</h3>
                        <p>{postDetail.content}</p>
                    </div>
                })}
            </div>
        );
    }
}

export default Contact;