


const myalert = document.querySelector("#alertclose")

const toshowup = document.querySelector("#showup")

toshowup.addEventListener("click", (e)=>{
	e.preventDefault()
	window.location.reload()
})


const goup = document.querySelectorAll(".goup")


goup.forEach((i)=>{
	i.addEventListener("click", whenclickedgoto)
})


function whenclickedgoto (e) {
	e.preventDefault()
	window.scrollTo(0,0)
}

