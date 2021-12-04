// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}


function unhideLightbox1() {
	unhideLightbox("janpic");
}
document.getElementById("jan").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("febpic");
}
document.getElementById("feb").onclick = unhideLightbox2;

function unhideLightbox3() {
	unhideLightbox("marpic");
}
document.getElementById("mar").onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox("aprpic");
}
document.getElementById("apr").onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox("maypic");
}
document.getElementById("may").onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox("junpic");
}
document.getElementById("jun").onclick = unhideLightbox6;

function unhideLightbox7() {
	unhideLightbox("julpic");
}
document.getElementById("jul").onclick = unhideLightbox7;

function unhideLightbox8() {
	unhideLightbox("augpic");
}
document.getElementById("aug").onclick = unhideLightbox8;

function unhideLightbox9() {
	unhideLightbox("seppic");
}
document.getElementById("sept").onclick = unhideLightbox9;

function unhideLightbox10() {
	unhideLightbox("octpic");
}
document.getElementById("oct").onclick = unhideLightbox10;

function unhideLightbox11() {
	unhideLightbox("novpic");
}
document.getElementById("nov").onclick = unhideLightbox11;

function unhideLightbox12() {
	unhideLightbox("decpic");
}
document.getElementById("dec").onclick = unhideLightbox12;






function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden');
}

function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');


	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById("lightbox-overlay").onclick = closeAllLightboxes;