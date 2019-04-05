import React from 'react';
export function Blog(props) {
    console.log(props.posts);
    const content2 = "222f";
    const posts = props.posts;
    const mylist = content.map((post) =>
        <h2>{post.title}</h2>);
    return (<div>{content2}</div>);
}
