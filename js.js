function myImg() {
	document.getElementById('img_2').style.display='none';
}

function myImg() {
    let elem = document.getElementById('img_2'); 
    let style = getComputedStyle(elem); 
    if (style.display === 'none') {
      document.getElementById('img_2').style.display='block';
      } else if (style.display !== 'none') {
      document.getElementById('img_2').style.display='none';
    }
  }