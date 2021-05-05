'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	//set on click listeners here!
	// $("a.anagram-name").click(clickedName);
}



// function clickedName(e) {
// 	e.preventDefault();
// 	let name = $(this).text();
// 	$(this).hide()
// 	console.log( "Name: " + name)
// 	let anagram = anagrammedName($(this).text());
// 	console.log(anagram)
// 	$(this).text(anagram);
// }
