window.onload=function(){ 
	(function(){
  
		var list = document.querySelector('#list');
		var		form = document.querySelector('form');
		var item = document.querySelector('#item');
		
	  form.addEventListener('submit',function(e){
			e.preventDefault();
			list.innerHTML += '<li>' + item.value + '</li>';
			store();
			item.value = "";
		},false)
		
		list.addEventListener('click',function(e){
			var t = e.target;
				t.parentNode.removeChild(t);
			store();
		},false)
		
		function store() {
			window.localStorage.myitems = list.innerHTML;
		}
		
		function getValues() {
			var storedValues = window.localStorage.myitems;
			list.innerHTML = storedValues;
		}
		getValues();
	})();
}
