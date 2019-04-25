const defaultState={
	focused:false,
	list:[],
	Page:1,
	totlePage:1,
	mouseIn:false
}
export default (state=defaultState,action)=>{
	if (action.type === 'onfocus') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.focused=true;
			  return newState
	};
	if (action.type === 'onblur') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.focused=false;
			  return newState
	};
	if (action.type === 'getList') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.list=action.data;
			  newState.totlePage=action.totlePage;
			  return newState
	};
	if (action.type === 'showSlideCard') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.mouseIn=true;
			  return newState
	};
	if (action.type === 'hideSlideCard') {
		const newState=JSON.parse(JSON.stringify(state));
			  newState.mouseIn=false;
			  return newState
	};
	if (action.type === 'exChange') {
		const newState=JSON.parse(JSON.stringify(state));
		if (newState.Page<state.totlePage) {
			newState.Page=state.Page+1;
		}else{
			newState.Page=1
		}
		return newState
	};
	
  return state;
}