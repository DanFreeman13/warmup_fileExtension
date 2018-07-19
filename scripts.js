
function getFileExtension (file) {

	var extension = "";
	var control = file.split(".");
  
  //console.log(control);
  
	if (control.length === 2 ){
		var last = control[1];
    
		for (var i=0; i<last.length; i++) {
			var letter = last[i];
			extension += letter;

		}

		return extension;

	} else {
		return "NOT VALID"
	}

}


console.assert(getFileExtension("logos.sketch") === "sketch")
console.assert(getFileExtension("avatar.png") === "png")
console.assert(getFileExtension("noextension") === "NOT VALID")