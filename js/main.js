function startAD(){
	setTimeout(function(){
			document.getElementById("bg-image-1").style.transform='translateX(0px) rotate(-39deg)';
			document.getElementById("bg-image-1").style.transition='all 1 ease';
			document.getElementById("bg-image-2").style.transform='translateX(0px) rotate(-39deg)';
			document.getElementById("bg-image-2").style.transition='all 1 ease';
		},250)
		setTimeout(function(){
			document.getElementById("text-1").style.opacity='1';
			document.getElementById("text-1").style.transform='translateX(0px)';
			document.getElementById("text-1").style.transition='all 1 ease';
		},750);
		setTimeout(function(){
			document.getElementById("text-2").style.opacity='1';
			document.getElementById("text-2").style.transform='translateX(0px)';
			document.getElementById("text-2").style.transition='all 1 ease';
		},1250);
		setTimeout(function(){
			document.getElementById("text-3").style.opacity='1';
			document.getElementById("text-3").style.transform='translateX(0px)';
			document.getElementById("text-3").style.transition='all 1 ease';
		},1750)
		setTimeout(function(){
			document.getElementById("text-4").style.opacity='1';
			document.getElementById("text-4").style.transform='translateX(0px)';
			document.getElementById("text-4").style.transition='all 1 ease';
		},2250)
		setTimeout(function(){
			document.getElementById("btn").style.opacity='1';
			document.getElementById("btn").style.transform='translateX(0px)';
			document.getElementById("btn").style.transition='all 1 ease';
		},3250)
		setTimeout(function(){
			document.getElementById("text-5").style.opacity='1';
			document.getElementById("text-5").style.transform='translateX(0px)';
			document.getElementById("text-5").style.transition='all 1 ease';
		},3250)
		setTimeout(function(){
			document.getElementById("logo").style.opacity='1';
			document.getElementById("logo").style.transform='translateY(0px)';
			document.getElementById("logo").style.transition='all 1 ease';
		},3750)
		setTimeout(function(){	
			document.getElementById("text-6").style.opacity='1';
			document.getElementById("text-6").style.transform='translateY(0px)';
			document.getElementById("text-6").style.transition='all 1 ease';
		},4250)
		setTimeout(function(){
		
		},4750)
	

}Window.load=startAD();