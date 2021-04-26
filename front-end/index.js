const submit = document.getElementById("shorten-button");




submit.addEventListener('click',()=>{
	const userUrl = document.getElementById("link-input").value;
	let shortUrl = "";
	fetch('http://localhost:3001/api/url/shorten', {
	    method: 'POST',
	    headers: {
	        'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
	    	"longUrl":userUrl
	    })
	}).then(resp=>resp.json()).then(data=>{
		shortUrl += data.shortUrl;
		alert("The shortened url is",shortUrl);
		const list  = document.getElementById("links");

		const newItem = document.createElement("li");

		const longUrl = document.createElement('p');
		longUrl.appendChild(document.createTextNode(userUrl));

		const res = document.createElement('h3');
		longUrl.appendChild(document.createTextNode(shortUrl));


		newItem.appendChild(longUrl);
		newItem.appendChild(res);


	links.appendChild(newItem)
	});

})