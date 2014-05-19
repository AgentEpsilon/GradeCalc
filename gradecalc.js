function handleS1(box) {
		var s1 = document.getElementsByClassName("s1");
		var sg1 = document.getElementsByClassName("sg1")[0];
		if(box.checked) {
			for(var i = 0; i < s1.length; i++){
				s1[i].style.display = "none";
			}
			sg1.style.display = "table-row";
		}else{
			for(var i = 0; i < s1.length; i++){
				s1[i].style.display = "table-row"
			}
			sg1.style.display = "none";
		}
	}
	
	function submit() {

		//Get Semester 1 Grade
		var s1grade;
		if(document.getElementById("cb").checked){
			s1grade = Number(document.getElementById("s1").value);
		}else{
			var mp1 = Number(document.getElementById("mp1").value);
			var mp2 = Number(document.getElementById("mp2").value);
			var sx1 = Number(document.getElementById("sx1").value);
			var s1avg = (mp1+mp2)/2;
			s1grade = 0.75*s1avg + 0.25*sx1;
		}

		//Get Desired Grade Value
		var desGrade;
		var desLet = document.getElementById("desired").value;
		if(desLet==="a")
			{desGrade=84.5}
		else if(desLet==='b')
			{desGrade=74.5}
		else if(desLet==='c')
			{desGrade=64.5}

		var mp3 = Number(document.getElementById("mp3").value);
		var mp4 = Number(document.getElementById("mp4").value);
		var s2mpavg = (mp3+mp4)/2;

		var sx2 = (2*desGrade - s1grade - s2mpavg*.75)*4;

		if(sx2>100){
			alert("Sorry, you can't get a(n) "+desLet.toUpperCase());
		}else{
			alert("To get a(n) "+desLet.toUpperCase()+", you need to score at least a "+sx2+" on your final exam!");
		}
	}

	function clearFields() {
		var objects = document.querySelectorAll("input[type=text");
		for(var i = 0; i < objects.length; i++) {
			objects[i].value = "";
		}
	}