		window.onload
		function toBig(){
			var oDiv = document.getElementById('box');
			oDiv.style.width='400px';
			oDiv.style.height='400px';
			oDiv.style.backgroundColor='blue';
		}
		function toSmall(){
			var oDiv = document.getElementById('box');
			oDiv.style.width='200px';
			oDiv.style.height='200px';
			oDiv.style.backgroundColor='red';
		}

		var oDiv = document.getElementById('box');
		// oDiv.onmouseover=toBig;
		// oDiv.onmouseout=toSmall;
		oDiv.onmouseover = function(){
			toBig();
		}
		oDiv.onmouseout = function(){
			toSmall();
		}