var MutationObserver = window.WebKitMutationObserver;
	
var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
	console.log("blocked")
	  	mutation.target.style.display = 'none';
	});    
});

var config = { attributes: true}

function Hide(name){
	try{
		var div = document.getElementsByClassName(name);
		div[0].style.display = 'none';
		observer.observe(div[0], config);	
	}catch(error){console.log(error)}
}

window.onload=function(){
	Hide("_5hn6");
}
Hide("_5hn6");
