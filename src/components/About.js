import React, { Component } from 'react';
import axios from "axios";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectpost:'',
            posts: []
            }
                this.componentDidMount = this.componentDidMount.bind(this);
            };
    componentDidMount() {
        axios.get('/all', {
            baseURL: 'http://127.0.0.1:8080/post', 
            responseType: 'json',  
        })
            .then(res => {
                const posts = res.data;
          
                this.setState({ posts: posts  });

            })
    };

    render() {
    //this.componentDidMount;
        //const myposts = this.state;
        //console.log(this.state.posts);
        return (
            <div>
             
              
                {this.state.posts.map((postDetail, index) => {
                    return <div key={index}>
                        <h3>{postDetail.title}</h3>
                        <div className="pcontent" dangerouslySetInnerHTML={{ __html: unescape(postDetail.content) }} />  
                    </div>
                })}
            </div>
        );
    }
}
function postone(props){
    return(
        <div>
           {unescape(props)} 
        </div>
    );

}
export default About;