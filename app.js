var express = require("express")
	, less = require("less")
	, fs = require("fs")
	, jade = require("jade")
	, request = require("request");

var app = express();
var json = fs.readFileSync("content.json").toString()
var all = JSON.parse(json)

app.get("/", function(req, resp) {
	// var fn = jade.compile(all.index.content, {filename: "layout.jade"})
	// resp.end(fn({content : all.index.content}))
	var html = jade.render(all.index.first + all.index.text, {filename: "layout.jade"})
	resp.end(html)
})

app.get("/style.css", function(req, resp) {
	resp.end(all.stylesheets.reset + all.stylesheets.style)
})

app.get("/scripts.js", function(req, resp) {
	var scripts = fs.readFileSync("./scripts.js").toString()
	resp.end(scripts)
})

app.get("/home", function(req, resp) {
	var html = jade.render(all.index.refresh + all.index.text)
	resp.end(html)
})

app.get("/about", function(req, resp) {
	var html = jade.render(all.about.el)
	resp.end(html)
})

app.get("/categories", function(req, resp) {
	var html = jade.render(all.categories.listItemEl, {items: all.categories.list})
	resp.end(html)
})

app.get("/categories/:category", function(req, resp) {
	request(all.api.url + req.path.split("/")[2], function(err, apiResp, json) {
		var body = JSON.parse(json)
		var fn = jade.compile(all.category.imageEl)
		var photos = body.photos
		var out = ""
		photos.forEach(function(object) {
			if (!object.nsfw) {
				out += fn({imgLink: object.url, thumbnailLink: object.image_url})
			}
		})
		resp.end(out)
	})
})

app.listen(3000)