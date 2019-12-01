import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props)
	}
	componentWillUnmount(){
		console.log('Item componentWillUnmount')
	}
	render(){
		//console.log('Item render')
		const { handleDel,task } = this.props;
		return (
			<li onClick={handleDel}>{task}</li>
		)
	}
}

Item.propTypes = {
	handleDel:PropTypes.func.isRequired,
	task:PropTypes.string
}
Item.defaultProps = {
	task:'learn react'
}

export default Item