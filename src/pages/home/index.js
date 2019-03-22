import React,{Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style.js';
import Recommend from './components/Recommend.js';
import List from './components/List.js';
import Writer from './components/Writer.js';
import Topic from './components/Topic.js';
import { BackTop } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';



class Home extends Component{
	handleScrollTop() {
		window.scrollTo(0, 0);
	}
	render(){
		return(
			<HomeWrapper>
			  <HomeLeft>
			    <img alt='' className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4619/667c4f9446720ed3a12690580eb534cef8b58192.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
			   <Topic/>
			   <List/>
			  </HomeLeft>
			  <HomeRight>
			     <Recommend/>
			     <Writer/>
			  </HomeRight>
			  {this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
			 
			</HomeWrapper>
			)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
		}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
	bindEvents(){
			window.addEventListener('scroll', this.props.changeScrollTopShow);
		}
	}
const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
	changeHomeData() {
		const action = actionCreators.getHomeInfo();
		dispatch(action);
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});
export default connect(mapState, mapDispatch)(Home);