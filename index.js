
const fetchData = async() =>{
	const tvUrl = 'https://api.tvmaze.com/show';
	const response  = await fetch(tvUrl);
	
	const result = await response.json()
	//console.log(result[0].image.original)
	return  result;
}



const display = async ()=>{
	const result =  await fetchData()
	//const src = result[0].image.original
console.log(result)


result.forEach((res, i)=>{
	const src = res.image.original
	const row  = document.querySelector('.row')
	
	row.innerHTML += `
	 <div class="col">
    <div class="card">
      <img src="${src}" alt="Image">
      <div class="card-body">
        <button class="btn btn-primary comment-btn">Comment</button>
        <button class="btn btn-secondary like-btn">Like</button>
      </div>
    </div>
  </div>
	`
})

}

display()
