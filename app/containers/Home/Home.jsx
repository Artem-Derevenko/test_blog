import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogItem from './components/BlogItem/BlogItem.jsx';
import { changeSorting, searchItem, getPostId } from './actions.js';
import TextField from 'material-ui/TextField';

class Home extends Component {
    changeSorting = (value) => {
        this.props.onChangeSorting(value);
    }

    handleChangeInput = (event) => {
        const value = event.target.value
        this.props.onSearchItem(value);
    }

    getId = (id) => {
        this.props.onGetPostId(id);
    }

    // _handleKeyPressSearch = (e) => {
    //     if ( e.keyCode === 13 ) {
    //         this.props.onSearchItem(this.state.searchValue);
    //     }
    // }

    render() {
    	const { list, search, sorting } = this.props;

        const searchList = list.filter(function(item) {
            return ( (item.title.indexOf(search) + 1) || (item.description.indexOf(search) + 1));
        });

        if ( sorting === "date" ) {
	        const sortList = searchList.sort(function(a, b) {
	            var aTime = new Date(a.date);
	            var bTime = new Date(b.date);
	            return (bTime - aTime);
	        });
	    }

	    if ( sorting === "views" ) {
	    	const arr = searchList;
	        var n = arr.length;
	        for (var i = 0; i < n-1; i++)
	            { for (var j = 0; j < n-1-i; j++)
	                { if (Number(arr[j+1].views) > Number(arr[j].views))
	                   { var t = arr[j+1]; arr[j+1] = arr[j]; arr[j] = t; }
	                }
	            }  
	        const sortList = arr;                   
	    }

        return (
        	<div>
                <p className = { "search" }> 
                <TextField
                    floatingLabelText = "Введите текст поиска"
                    fullWidth = {true}
                    value = {search}
                    //onKeyDown = { (e) => this._handleKeyPressSearch(e)}
                    onChange = { (event) => this.handleChangeInput(event)}
                />
                </p>
                {
                    (searchList.length > 0) && (
                        <p className = { "sorting" }>
                            Cортировка: 
                            <span className = { ( sorting === "date" ) ? "active" : "" } onClick={ () => this.changeSorting('date') }>по дате</span> 
                            <span className = { ( sorting === "views" ) ? "active" : "" } onClick={ () => this.changeSorting('views') }>по популярности</span>
                        </p>
                    )
                }
	            <div className = {"blog-list"}>
	        		{
	                    (searchList.length > 0)
	                        ? ( searchList.map(
	                            (item, i) => (<BlogItem key={i} blogItem={item} getId = {this.getId} />) ))
	                        : (<div className='block-error'>По данному запросу ничего не найдено!</div>)
	                }
	            </div>
	        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.listReducer.list,
        search: state.listReducer.search,
        sorting: state.listReducer.sorting
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSorting: (value) => {
            dispatch(changeSorting(value));
        },
        onSearchItem: (str) => {
            dispatch(searchItem(str));
        },
        onGetPostId : (id) => {
            dispatch(getPostId(id));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
