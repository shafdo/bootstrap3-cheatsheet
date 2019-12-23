


const myalert = document.querySelector("#alertclose")

const toshowup = document.querySelector("#showup")

toshowup.addEventListener("click", (e)=>{
	e.preventDefault()
	window.location.reload()
})


const goup = document.querySelectorAll(".goup")


for (let i=0;i<goup.length;i++){
	goup[i].addEventListener("click",(e)=>{
		e.preventDefault();
		window.scrollTo(0,0)
	})
}
