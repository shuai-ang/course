;(function(win,doc){
	var oRoot = doc.getElementsByTagName('html')[0];
	function refresh(){
		var oWidth = doc.body.clientWidth || doc.documentElement.clientWidth;
		var fontSize = oWidth / 10;
		oRoot.style.fontSize = fontSize + 'px';
	}
	win.addEventListener('DOMContentLoaded',refresh,false);
	win.addEventListener('load',refresh,false);
	win.addEventListener('resize',refresh,false);
})(window,document)