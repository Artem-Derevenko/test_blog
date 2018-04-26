import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

class BlogItem extends Component {
    render() {
        const { blogItem, getId } = this.props;
        const date = new Date(blogItem.date);
        return (
            <Link to={`/post/${ blogItem.id }`} className = { 'blog-item' } onClick = { getId.bind(this, blogItem.id) } >
                <Paper zDepth = {2}>
                    <h2>{ blogItem.title }</h2>
                    <p className = {"description"}>{ blogItem.description }</p>
                    <p className = {"info"}>
                        { date.toLocaleDateString('en-US') }
                        <span className = {"views"}>
                            <i className = {"material-icons"}>person</i>
                            { blogItem.views }
                        </span>
                    </p>
                </Paper>
            </Link>
        )
    }
}

export default BlogItem;
