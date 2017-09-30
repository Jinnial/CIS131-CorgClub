// Developer: Jordan Gilmore
// Date:      9/15/17
// FileName:  adoptee.js

var topCorgs = ["images/topCorg0.jpg", "images/topCorg1.jpg",
                "images/topCorg2.jpg","images/topCorg3.jpg"];
var midCorgs = ["images/midCorg0.jpg", "images/midCorg1.jpg",
                "images/midCorg2.jpg","images/midCorg3.jpg"];
var bottomCorgs = ["images/bottomCorg0.jpg", "images/bottomCorg1.jpg",
                "images/bottomCorg2.jpg","images/bottomCorg3.jpg"];

var theTopSwitcher = 1;
var theMidSwitcher = 1;
var theBottomSwitcher = 1;

function festCorg()
{
  var newSrc;
  newSrc = "images/christCorg.gif";
  document.getElementById('festGif').src = newSrc;
}
function toggleTopCorgi()
{
  switch (theTopSwitcher)
  {
    case 0:
      document.getElementById('corgLeft1').src = topCorgs[theTopSwitcher];
      theTopSwitcher = 1;
      break;
    case 1:
      document.getElementById('corgLeft1').src = topCorgs[theTopSwitcher];
      theTopSwitcher = 2;
      break;
    case 2:
      document.getElementById('corgLeft1').src = topCorgs[theTopSwitcher];
      theTopSwitcher = 3;
      break;
    default:
      document.getElementById('corgLeft1').src = topCorgs[theTopSwitcher];
      theTopSwitcher = 0;
  }
}

function toggleMidCorgi()
{
  switch (theMidSwitcher)
  {
    case 0:
      document.getElementById('corgRight1').src = midCorgs[theMidSwitcher];
      theMidSwitcher = 1;
      break;
    case 1:
      document.getElementById('corgRight1').src = midCorgs[theMidSwitcher];
      theMidSwitcher = 2;
      break;
    case 2:
      document.getElementById('corgRight1').src = midCorgs[theMidSwitcher];
      theMidSwitcher = 3;
      break;
    default:
      document.getElementById('corgRight1').src = midCorgs[theMidSwitcher];
      theMidSwitcher = 0;
  }
}

function toggleBottomCorgi()
{
  switch (theBottomSwitcher)
  {
    case 0:
      document.getElementById('corgLeft2').src = bottomCorgs[theBottomSwitcher];
      theBottomSwitcher = 1;
      break;
    case 1:
      document.getElementById('corgLeft2').src = bottomCorgs[theBottomSwitcher];
      theBottomSwitcher = 2;
      break;
    case 2:
      document.getElementById('corgLeft2').src = bottomCorgs[theBottomSwitcher];
      theBottomSwitcher = 3;
      break;
    default:
      document.getElementById('corgLeft2').src = bottomCorgs[theBottomSwitcher];
      theBottomSwitcher = 0;
  }
}
