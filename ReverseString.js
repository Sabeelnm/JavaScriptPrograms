
		var str="hi how are you";
		var splitString = str.split(" ");
		var res="";
		for(var i=0;i<splitString.length;i++){
		var rev=splitString[i];
		var reverseArray = rev.split("").reverse().join("");
		res=res+reverseArray;
		if(i!=splitString-1){
		    res=res+" ";
		}
		}
		console.log(res);

	}
