/* Base URL of the web-service for the current user and access token */
const backend = "https://backend-tp-ensimag.herokuapp.com" // replace by the backend to use
const token = "eyJhbGciOiJIUzI1NiJ9.a2FyaW0.cfiQPFkXOYlPGFOwWC0rCm1c5wCSiYveOSbXhMnLGqg" //replace by your token : go to BACKEND/getjwsDeleg/caw to obtain it
const wsBase = `${backend}/api/users/1/` // replace USER by your login used to obtain TOKEN

/* Shows the identity of the current user */
function setIdentity() {
	fetch(`${backend}/whoami`,
        {  method:'GET', 
           headers: {"x-access-token": token},
        }).then(result=>
			result.json()).then(
        function(resultJson){
            const login = resultJson["data"]
            let identity = document.createTextNode(login)
            let identityNode = document.getElementsByClassName("identity")
            identityNode[0].appendChild(identity)
        })
}

/* Sets the height of <div id="#contents"> to benefit from all the remaining place on the page */
function setContentHeight() {
	let availableHeight = window.innerHeight
	availableHeight -= document.getElementById("contents").offsetTop
	availableHeight -= 2 * document.querySelector('h1').offsetTop
	availableHeight -= 4 * 1
	document.getElementById("contents").style.height = availableHeight + "px"
}


/* Selects a new object type : either "bookmarks" or "tags" */
function selectObjectType(type) {
	let menu = document.getElementById("menu")
	let currentlySelected = menu.getElementsByClassName("selected")
	let add = document.getElementById("add")
	let tagClass = (add.getElementsByClassName("tag"))[0]
	if (currentlySelected.length === 0){
		menu.getElementsByClassName(type)[0].classList.add("selected")
		if(type === "tags"){
			listTags()
			tagClass.classList.add("selected")
		}
		else{
			listBookmarks()
		}
	}
	else{
		currentlySelected = currentlySelected[0]
		if(currentlySelected.classList.contains(type)){
			return
		}
		currentlySelected.classList.remove("selected")
		menu.getElementsByClassName(type)[0].classList.add("selected")
		if(type === "tags"){
			listTags()
			console.log(tagClass)
			tagClass.classList.add("selected")
		}
		else{
			listBookmarks()
			tagClass.classList.remove("selected")
		}
	}

}

/* Loads the list of all bookmarks and displays them */
function listBookmarks() {
	console.log("listBookmarks called")
	//TODO
}

/* Loads the list of all tags and displays them */
function listTags() {
	console.log("listTags called")
	let items = document.getElementById("items")
	while(items.firstChild){
		items.removeChild(items.firstChild)
	}
	fetch(`${wsBase}tags`,
        {  method:'GET', 
           headers: {"x-access-token": token},
        }).then(result=>result.json()).then(resultJson=>resultJson['data']).then(
			data=>{
				console.log(data)
				for(let tag of data){
					let id = tag['id']
					let name = tag['name']
					let nodeToClone = document.querySelector(".model.tag")
					let clone = nodeToClone.cloneNode(true)
					clone.setAttribute("class","item tag")
					clone.setAttribute("num", `${id}`)
					let header = clone.querySelector('h2')
					header.textContent = name
					items.appendChild(clone)
				}
			}
		).catch(error=>console.log(error))

}

/* Adds a new tag */
function addTag() {
	let input = ((document.getElementById('add')).getElementsByClassName('tag')[0]).querySelector("[type = text]")
	if(input.value == ''){
		alert("Erreur, aucun tag spécifié")
		return
	}
	let body = new URLSearchParams()
	body.append("name", `${input.value}`)
	fetch(`${wsBase}tags`,
        {  method:'POST', 
           headers: {"x-access-token": token, "Content-Type": "application/x-www-form-urlencoded"},
		   body : body
        }).then(()=>listTags()).catch(error=>console.log(error))
	input.value = ''

}

/* Handles the click on a tag */
function clickTag(tag) {
	let selectedTag = document.getElementById("items").getElementsByClassName("selected")
	if(selectedTag.length != 0){
		selectedTag = selectedTag[0]
		if(tag == selectedTag){
			return
		}
		selectedTag.querySelector("h2").style.display = 'block'
		selectedTag.classList.remove("selected")
		let listModification = selectedTag.querySelectorAll("[type = text], [type = button]")
		for (let elementToDelete of listModification){
			selectedTag.removeChild(elementToDelete)
		}
	}
	let header = tag.querySelector("h2")
		header.style.display = 'none'
		tag.classList.add("selected")
		let buttonInput = document.createElement("input")
		let buttonModify = document.createElement("input")
		let buttonDelete = document.createElement("input")
		buttonInput.setAttribute("type", "text")
		buttonInput.setAttribute("value", header.textContent)
		buttonModify.setAttribute("type", "button")
		buttonModify.setAttribute("value", "Modify Name")
		buttonModify.addEventListener('click',modifyTag,false)
		buttonDelete.setAttribute("type", "button")
		buttonDelete.setAttribute("value", "Remove Tag")
		buttonDelete.addEventListener('click',removeTag,false)
		tag.appendChild(buttonInput)
		tag.appendChild(buttonModify)
		tag.appendChild(buttonDelete)
}

/* Performs the modification of a tag */
function modifyTag() {
	let elementToModify = document.getElementById("items").getElementsByClassName("selected")[0]
	let numTag = elementToModify.getAttribute('num')
	let newTag = elementToModify.querySelector("[type = text]").value
	if(newTag === ""){
		alert("error please enter a tag value")
		return
	}
	let body = new URLSearchParams()
	body.append("name", `${newTag}`)
	fetch(`${wsBase}tags/${numTag}`,
        {  method:'PUT', 
           headers: {"x-access-token": token, "Content-Type": "application/x-www-form-urlencoded"},
		   body: body
        }).then(()=>listTags()).catch(error=>console.log(error))

}

/* Removes a tag */
function removeTag() {
	let elementToModify = document.getElementById("items").getElementsByClassName("selected")[0]
	let numTag = elementToModify.getAttribute('num')
	fetch(`${wsBase}tags/${numTag}`,
        {  method:'DELETE', 
           headers: {"x-access-token": token},
        }).then(()=>listTags()).catch(error=>console.log(error))
}
/* On document loading */
function miseEnPlace() {

	/* Give access token for future ajax requests */
	// Put the name of the current user into <h1>
	let body = new URLSearchParams()
	body.append("name", "karim")
	fetch(`${backend}/api/users`,
        {  method:'POST', 
           headers: {"Content-Type": "application/x-www-form-urlencoded"},
		   body : body
        }).then(setIdentity())
	// Adapt the height of <div id="contents"> to the navigator window
	setContentHeight()
	window.addEventListener("resize",setContentHeight)
	// Listen to the clicks on menu items
	for (let element of document.querySelectorAll('#menu li')){
		element.addEventListener('click',function() {
			const isTags = this.classList.contains('tags')
			selectObjectType(isTags ? "tags" : "bookmarks")
		},false)
	}
	// Initialize the object type to "tags"
	selectObjectType("tags")
	// Listen to clicks on the "add tag" button

	document.getElementById("addTag").addEventListener("click",addTag,false)
	document.getElementById("items").addEventListener("click",(e)=>{
			// Listen to clicks on the tag items
			const tag = e.target.closest(".tag.item")
			if (tag !== null) {clickTag(tag);return}
			// Questions 10 & 12 - Listen to clicks on bookmark items
			const bookmark = e.target.closest(".bookmark.item")
			if (bookmark !== null) {clickBookmark(bookmark)}
		}
		,false)
}
window.addEventListener('load',miseEnPlace,false)
