#500px grids
- By using the the 500px API - https://github.com/500px/api-documentation I have created a Photo Portfolio Page.
- The website is devided into static content and category pages that are being generated through API calls to 500px.
- The static content is saved in a content.json file. ex:
```
{pages: 
    { title:"About", content:"This is my about page"}, 
    { title:"Contact", content:"<h1> Contact Page</h1><font>Email : andrew@andrewrowat.com <br> Tel: +1 (718) 576.1770 (USA)<br>Tel: +86 1381.726.8869 (China)</font>"}
}
```   

- The Category Pages are comprised of a grid of images which you can click on to view them at 500px.
  - The Images are queried by searching for a specific tag
