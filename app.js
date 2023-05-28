
const app = async ()=>{
	const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/'
	const data= {
		name: 'myApp'
	}
	const request = new Request (url, {
		method: 'POST',
		headers:{
			'content-Type':'application/json'
		},
		body: JSON.stringify(data)
	})	
	const response =  await fetch(request)
	const resData  = await  response.json()
	console.log(resData)
}