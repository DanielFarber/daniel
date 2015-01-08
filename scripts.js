function getCategories() {
	$.get("/categories", categoriesGot, "html")
}

function categoriesGot(data) {
	gotten(data)
	$(".category").bind("click", getCategory)
}

function getCategory() {
	var main = $(".main-content")
	main.empty()
	main.text("Populating images...")
	$.get("/categories/" + this.textContent, gotten, "html")
}

function gotten(data) {
	var main = $(".main-content")
	main.empty()
	main.append(data)
}

function getter() {
	$.get("/" + this.className, gotten, "html")
}

function getAbout() {
	$.get("/about", gotten, "html")
}

$(function() {

	$(".categories").bind("click", getCategories)
	$(".home").bind("click", getter)
	$(".about").bind("click", getter)

})