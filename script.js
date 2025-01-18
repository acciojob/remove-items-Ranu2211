//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const item = document.getElementById('colorSelect');
const Button = document.querySelector('input[type="button"]');
		
	Button.addEventListener('click',function(){
	const index =item.selectedIndex;
		if(index !== -1){
			item.remove(index);
		}
});
});

