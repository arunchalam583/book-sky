
var adddash1=document.querySelector(".bg-shadow")
var adddash2=document.querySelector(".add-dash")
var addbutton=document.getElementById("script-add-button")
var cancel=document.getElementById("can")

addbutton.addEventListener("click",function(){
	adddash1.style.display="block"
	adddash2.style.display="block"
})

cancel.addEventListener("click",function ()
{
	adddash1.style.display="none"
	adddash2.style.display="none"
})


var container=document.querySelector(".container")

var input1=document.getElementById("script-book-title")
var input2=document.getElementById("script-book-author")
var input3=document.getElementById("script-description")

var button1=document.getElementById("script-add-button-dash")
var button2=document.getElementById("script-delete-button")

button1.addEventListener("click",function(event){

	if(!input1.value)
	{
		alert("Please Enetr Title")
		return
	}

	else if(!input2.value)
	{
		alert("Please Enetr Name")
		return
	}

	else if(!input3.value)
	{
		alert("Please Write Your Thoughts")
		return
	}



	event.preventDefault()
	div=document.createElement("div")
	div.setAttribute("class","dashboard")
	div.innerHTML=`<h2 class="dashboard-heading" >${input1.value}</h2> <h5 class="dashboard-author">${input2.value}</h5> <p class="dashboard-para">${input3.value}</p> 		<button class="dashboard-button" style="cursor: pointer"; onclick="delbut(event)">Delete</button>`
	container.append(div)

	adddash1.style.display="none"
	adddash2.style.display="none"

	document.getElementById("script-book-title").value=""
	document.getElementById("script-book-author").value=""
	document.getElementById("script-description").value=""
})


function delbut(event)
{
	event.target.parentElement.remove();
}

function clearbox()
{
	document.getElementById("script-book-title").value=""
	document.getElementById("script-book-author").value=""
	document.getElementById("script-description").value=""
}





