function displayblock(idBlock,idButton) {
	var block = document.getElementById(idBlock);
	var button = document.getElementById(idButton);
	
	if (block.style.display=="none") {
		block.style.display = "block"; 
		button.innerText = "Hide graphics";
	} else if (block.style.display=="block") {
		block.style.display = "none";
		button.innerText = "Display graphics";
	}
	
}