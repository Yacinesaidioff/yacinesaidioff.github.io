
// form 

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.modal-content').style.display= 'none'

});
document.querySelector('.close1').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.modal-content1').style.display= 'none'
});

function toform1() {
	document.querySelector('.bg-modal').style.display = 'flex';
	document.querySelector('.modal-content').style.display= 'flex';

}
function toform2() {
	document.querySelector('.bg-modal').style.display = 'flex';
	document.querySelector('.modal-content1').style.display= 'flex';
}