import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';

class PostPage extends Component {
	render() {
		const { list, postId } = this.props;
		const id = postId;
		const post = list.filter( (item) => {
			console.log(item.id + "  " + id)
            return item.id === id;
        }); 
		return (
            <div className = {"page-wrap"}>
            	<p>
            		<Link to={'/'} className = {"link-home"}>К списку блога</Link>
            	</p>
				<Paper zDepth={2} className = {"post-wrap"}>
                    <h2>{ post[0].title }</h2>
                    <p className = {"description"}>{ post[0].text }</p>
                </Paper>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
        postId: state.listReducer.postId
    }
};

export default connect(
    mapStateToProps
)(PostPage);
