import React, {Component}from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import  {actionCreators} from './store';
import { Link } from 'react-router-dom';
import { actionCreators as loginActionCreators } from '../../pages/login/store';




class Header extends Component{
	getListArea(){
	const{focused,list,page,mouseIn,totalPage,handleMouseEnter,handleMouseLeave
		,handleChangePage}= this.props;
	const jsList=list.toJS();
	const pageList=[];
	if(jsList.length){
		for(let i =(page-1)*10;i<page*10;i++){
		pageList.push(
			<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>	
			)
	    }
    }
	if(focused||mouseIn){
		return (<SearchInfo 
			onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
			>
					      <SearchInfoTitle>
					      热门搜索
					      <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
					      <span className="iconfont">&#xe851;</span>
					      换一批</SearchInfoSwitch>
					      </SearchInfoTitle>
					      <SearchInfoList>
					      {pageList}
					      </SearchInfoList>
					    </SearchInfo>)
	}
		else{
			return null;
		}
}
	render(){
		const {  login, logout } = this.props;
		return(
		<HeaderWrapper>
		   
			<Logo href='/'/>
			
			<Nav>
			   <NavItem className='left active'>首页</NavItem>
			   <NavItem className='left'>下载app</NavItem>
			   <SearchWrapper>
			    <CSSTransition
			      in={this.props.focused}
			      timeout={500}
			      classNames='slide'
			    >
			    <NavSearch 
			      className={this.props.focused?'focused':''}
			      onFocus={this.props.handleInputFocus}
			      onBlur={this.props.handleInputBlur}/>
			    </CSSTransition>
			    <span className={this.props.focused?
			    	'focused iconfont zoom':'iconfont zoom'}>
			    &#xe60b;</span>
			    {this.getListArea()}
			   </SearchWrapper>
			   {
			   	login?<NavItem onClick={logout} className='right'>退出</NavItem>:
			   	<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
			   }
			   
			   <NavItem className='right'>
			     <span className="iconfont">&#xe636;</span>
			   </NavItem>
			<Addition>
			   <Button className='reg'>注册</Button>
			   <Link to='/write'>
			   <Button className='writing'>
			     <span className="iconfont spin">&#xe616;</span>写文章 
			   </Button>
			   </Link>
			</Addition>
			</Nav>
			</HeaderWrapper>
			)
		}
}



const mapStateToProps = (state) =>{
	return{
       focused:state.getIn(['header', 'focused']),
       list:state.getIn(['header','list']),
       page:state.getIn(['header','page']),
       mouseIn:state.getIn(['header','mouseIn']),
       totalPage:state.getIn(['header','totalPage']),
       login: state.getIn(['login', 'login'])

	}
}
const mapDispathToProps=(dispatch)=>{
	return{
        handleInputFocus(){
        	dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
        dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
    	dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
       dispatch(actionCreators.mouseLeave()) ; 
    },
    handleChangePage(page,totalPage){
    	if(page<totalPage){
           dispatch(actionCreators.changePage(page+1));
    	}else{
            dispatch(actionCreators.changePage(1));
    	}
    },
    logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}
export default connect(mapStateToProps,mapDispathToProps)(Header);