import React, { Component } from 'react';
//import { Form, Button } from 'react-bootstrap';
import axios from "axios";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {  one: '',
                        two: '',
                        ptext: '',
                        ptitle: '',
                        mptitle: '',
                        pcontent: '',
                        msuccess: '',
                        msuccessclass: '',
                    };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            msuccess:'',
            msuccessclass:''
        })
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        const ptitle = this.state.ptitle;
        const pcontent = this.state.pcontent;
        const ptext = this.state.ptext;
        //console.log(ptitle);
        //console.log(pcontent);
   
        //axios();
        let res ='';

        var self = this;

       axios.get('/add', {
            baseURL: 'http://127.0.0.1:8080/post', 
            responseType: 'text',        
            params: {
                title: ptitle,
                content: escape(pcontent) 
                //unescape()
            }
        })
            .then(function (response) {  
                var  message = '';       
                self.setState({
                    ptext: '',
                    mptitle: '',
                    msuccess: '',
                    msuccessclass: '',
                })
                
                if (response.data === "duplicates"){
                    console.log(response.data); 
                    self.setState({
                        mptitle: self.state.ptitle,
                        ptext: ' already exists, please choose a different title.'
                    });
                }else{
                    self.setState({
                        msuccess: 'The article was successfully recorded',
                        msuccessclass: 'alert alert-success',
                        mptitle: '',
                        ptitle: '',
                        pcontent: '',
                    })
                }

            })
            .catch(function (error) {
                console.log(error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div style={{marginTop: '35px'}}>
            {/*<form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="one" value={this.state.one} onChange={this.handleChange} /><br />
                    <input type="text" name="two" value={this.state.two} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>*/}
                <div className={this.state.msuccessclass} role="alert">{this.state.msuccess}</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title   </label>
                        
                        <input type="text" className="form-control" name="ptitle" value={this.state.ptitle} onChange={this.handleChange} />
                        <div className="pinvalid-feedback">&nbsp;<span className="pinvalid-feedback-first-word">{this.state.mptitle}</span> {this.state.ptext}</div>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea className="form-control" name="pcontent" value={this.state.pcontent} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}


export default Post;