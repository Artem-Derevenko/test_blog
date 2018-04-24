import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

class BlogItem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         authorText: '',
    //         bookText: ''
    //     };
    // }

    render() {
        const { blogItem } = this.props;
        return (
            <Link to={`/blog/${ blogItem.id }`} className='blog-item'>
                <Paper zDepth={2}>
                    <h2>{ blogItem.title }</h2>
                    <p className={"description"}>{ blogItem.description }</p>
                    <p className={"info"}>
                        { blogItem.date }
                        <span className={"views"}>
                            <i className="material-icons">person</i>
                            { blogItem.views }
                        </span>
                    </p>
                </Paper>
            </Link>
        )
    }
}

export default BlogItem;
