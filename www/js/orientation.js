//ORIENTATION

function doOrientationChange {
	switch(window.orientation) {
		case -90:
			document.getElementById("app").style.display="none";
			break;
		case 90:
			document.getElementById("app").style.display="none";
			break;
		default:
			document.getElementById("app").style.display="block";
			break;
		}
	}
	window.addEventListener('orientationchange', doOrientationChange);

