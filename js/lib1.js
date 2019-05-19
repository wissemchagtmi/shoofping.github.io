function goToNext(x,y){
  pageO=document.getElementById(x);
  pageT=document.getElementById(y);
  pageO.style="left:-100%;";
  pageT.style="left:0%;";
}
function goToPrev(x,y){
  pageO=document.getElementById(x);
  pageT=document.getElementById(y);
  pageO.style="left:0%;";
  pageT.style="left:100%;";
}
function closeBrowse(){
  b = document.getElementById("browse");
  b.style="top:-100vh;";
}
function inviteBrowse(){
  b = document.getElementById("browse");
  b.style="top:0;";
}
function goToPage(z){
  var allId = ["home","whyUs","shoofAR","support","tbis","contact"];
  var i=0;
  var n=5;
  while (i<z){
    document.getElementById(allId[i]).style="left: -100%;";
    i++;
  }
  while (n>z){
    document.getElementById(allId[n]).style="left: 100%;";
    n--;
  }
  document.getElementById(allId[z]).style="left: 0;";
  b = document.getElementById("browse");
  b.style="top: -100%;";

}
