import axios from 'axios';
export const onFocus=()=>({
	type:'onfocus'
})

export const onBlur=()=>({
	type:'onblur'
})
export const getList=(data)=>({
	type:'getList',
	data:data,
	totlePage:Math.ceil(data.length/12)
})

export const showSlideCard=()=>({
	type:'showSlideCard'
})
export const hideSlideCard=()=>({
	type:'hideSlideCard'
})
export const exChange=()=>({
	type:'exChange'
})

export const getListAxios=()=>{
	return (dispatch)=>{
		axios.get('api/list.json')
			.then((res)=>{
				dispatch(getList(res.data.data))
			})
			.catch((err)=>{
				console.log(err);
			})
	}
}



