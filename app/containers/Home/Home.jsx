import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogItem from './components/BlogItem/BlogItem.jsx';
import { changeSorting } from './actions.js';

class Home extends Component {
	constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    changeSorting = (value) => {
        this.props.onChangeSorting(value);
    }

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
        		<p className={ "sorting" }>
        			Cортировка: 
        			<span onClick={ () => this.changeSorting('date') }>по дате</span> 
        			<span onClick={ () => this.changeSorting('views') }>по популярности</span>
        		</p>
	            <div className={"blog-list"}>
	        		{
	                    (searchList.length > 0)
	                        ? ( searchList.map(
	                            (item, i) => (<BlogItem key={i} blogItem={item} />) ))
	                        : (<div className='block-item'>По данному запросу ничего не найдено!</div>)
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
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
