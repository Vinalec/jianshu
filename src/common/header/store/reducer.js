import * as constants from './constants.js';
import {fromJS} from 'immutable';

const defaultState = fromJS({
	focused:false,
	list:[],
	page:1,
	totalPage:1,
	mouseIn:false

});
export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}

// export default(state=defaultState, action) =>{
// 	if(action.type===constants.SEARCH_FOCUS){
// 		return state.set('focused',true);
// 		//immutable对象的set方法，结和之前immutable对象的值
// 		//和设置的值，返回一个全新的对象，并未修改数据
// 	}
// 	if(action.type===constants.SEARCH_BLUR){
// 		return state.set('focused',false);
// 	}
// 	if(action.type===constants.CHANGE_LIST){
// 		return state.set('list',action.data).set('totalPage',action.totalPage);
// 	}
// 	if(action.type===constants.MOUSE_ENTER){
// 		return state.set('mouseIn',true);
// 	}
// 	if(action.type===constants.MOUSE_LEAVE){
// 		return state.set('mouseIn',false);
// 	}
// 	if(action.type===constants.CHANGE_PAGE){
// 		return state.set('page',action.page);
// 	}
//     return state; 
	
// }