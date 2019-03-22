import React,{Component} from 'react';
import {TopicWrapper,TopicItem,TopicMore} from '../style.js';
import {connect} from 'react-redux';

class Topic extends Component{
	render(){
		return(
			<TopicWrapper>
			{
			this.props.list.map((item)=>{
			return (
			 <TopicItem key={item.get('id')}>
			   {item.get('title')}
			   <img alt='' className='topic-pic' src={item.get('imgUrl')}/>
			 </TopicItem>
					)
				})
			}
            <TopicMore>更多热门专题 ></TopicMore>
			</TopicWrapper>
			)
	}
}
const mapState=(state)=>({
    list: state.getIn(['home', 'topicList'])
});

export default connect(mapState,null)(Topic);