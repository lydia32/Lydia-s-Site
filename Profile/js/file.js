function upDate1(previewPic){
	document.getElementById('disPlay').innerHTML = ".";
   disPlay.style.color="#434343"
   disPlay.style.backgroundImage = "url('img/Bobby Case.png')";
   disPlay.style.backgroundSize="484px 300px";
}
function upDate2(previewPic){
   document.getElementById('disPlay').innerHTML = ".";
   disPlay.style.color="#434343"
   disPlay.style.backgroundImage = "url('img/Falendar.png')";
   disPlay.style.backgroundSize="484px 300px";

}
function upDate3(previewPic){
   document.getElementById('disPlay').innerHTML = ".";
   disPlay.style.color="#434343"
   disPlay.style.backgroundImage = "url('img/ERP system optimization.png')";
   disPlay.style.backgroundSize="484px 300px";

}

function unDo(){
/* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
   document.getElementById('disPlay').innerHTML = "Hover over an image above to display here.";
   disPlay.style.backgroundImage="url('img/noisebg.png')";
}