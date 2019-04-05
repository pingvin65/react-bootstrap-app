import React, { Component } from 'react';
import PostData from '../data/posts.json';

class Home extends Component {
    render() {
        return ( 
            <div>        
                {PostData.map((postDetail, index) => {
                    return <div className="card cardBottom" key={index}>
                        <div className="card-body">
                        <h3>{postDetail.title}</h3>
                        <p>{postDetail.content}</p>
                        </div>
                        <div className="card-footer text-muted text-right">
                            {postDetail.datecreate}
                 
                        </div>
                    </div>
                })}
            </div>       
        );
    }
}

export default Home;