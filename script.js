//your JS code here. If required.
let fields=document.querySelectorAll(".code");
fields.forEach((field,index)=>{
	field.addEventListener("input",()=>{
		if(field.value.length===1 && index <fields.length-1){
		fields[index+1].focus();
	}
	})
	field.addEventListener("keydown",(e)=>{
		if(e.key==="Backspace" && field.value.length===0 && index>0){
			fields[index-1].focus();
		}
	})
	
})
