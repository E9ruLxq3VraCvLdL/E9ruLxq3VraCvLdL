var efa_default = 70; // Default Fontsize in %
var efa_increment = 6; // Stepping value for increment in %
var efa_bigger = ['<p style="padding: 0; margin: 0;">',
'<img src="textzoomin_button.gif" border="0" />',
'Schrift gr&ouml;sser stellen',
'',
'',
'',
'',
'',
'',
'',
''
]

var efa_smaller = ['',
'<img src="textzoomout_button.gif" border="0" />',
'Schrift kleiner stellen',
'',
'',
'',
'',
'',
'',
'',
'<' + '/p>'
]

function Efa_Fontsize(increment,bigger,smaller,def) {
this.w3c = (document.getElementById);
this.ms = (document.all);
this.userAgent = navigator.userAgent.toLowerCase();
this.isMacIE = ((this.userAgent.indexOf('msie') != -1) && (this.userAgent.indexOf('mac') != -1) && (this.userAgent.indexOf('opera') == -1));
this.isOldOp = ((this.userAgent.indexOf('opera') != -1)&&(parseFloat(this.userAgent.substr(this.userAgent.indexOf('opera')+5)) <= 8));

if ((this.w3c || this.ms) && !this.isOldOp && !this.isMacIE) {
this.name = "efa_fontSize";
this.cookieName = 'efaSize';
this.increment = increment;
this.def = def;
this.defPx = Math.round(16*(def/100))
this.base = 1;
this.pref = this.getPref();
this.testHTML = '<div id="efaTest" style="position:absolute;visibility:hidden;line-height:1em;">&nbsp;</div>';
this.biggerLink = this.getLinkHtml(1,bigger);
this.smallerLink = this.getLinkHtml(-1,smaller);
} else {
this.biggerLink = '';
this.smallerLink = '';
this.efaInit = new Function('return true;');
}

this.allLinks = this.biggerLink + this.smallerLink;
}

Efa_Fontsize.prototype.efaInit = function() {
document.writeln(this.testHTML);
this.body = (this.w3c)?document.getElementsByTagName('body')[0].style:document.all.tags('body')[0].style;
this.efaTest = (this.w3c)?document.getElementById('efaTest'):document.all['efaTest'];
var h = (this.efaTest.clientHeight)?parseInt(this.efaTest.clientHeight):(this.efaTest.offsetHeight)?parseInt(this.efaTest.offsetHeight):999;
if (h < this.defPx) this.base = this.defPx/h;
this.body.fontSize = Math.round(this.pref*this.base) + '%';
}

Efa_Fontsize.prototype.getLinkHtml = function(direction,properties) {
var html = properties[0] + '<a href="#" onclick="efa_fontSize.setSize(' + direction + '); return false;"';
html += (properties[2])?'title="' + properties[2] + '"':'';
html += (properties[3])?'class="' + properties[3] + '"':'';
html += (properties[4])?'id="' + properties[4] + '"':'';
html += (properties[5])?'name="' + properties[5] + '"':'';
html += (properties[6])?'accesskey="' + properties[6] + '"':'';
html += (properties[7])?'onmouseover="' + properties[7] + '"':'';
html += (properties[8])?'onmouseout="' + properties[8] + '"':'';
html += (properties[9])?'onfocus="' + properties[9] + '"':'';
return html += '>'+ properties[1] + '<' + '/a>' + properties[10];
}

Efa_Fontsize.prototype.getPref = function() {
var pref = this.getCookie(this.cookieName);
if (pref) return parseInt(pref);
else return this.def;
}

Efa_Fontsize.prototype.setSize = function(direction) {
this.pref = (direction)?this.pref+(direction*this.increment):this.def;
// 10. Sep. 2005 grishan - max and min value dedection added 
// max value in % is --> efa_default + ( X * efa_incerement)
if ( this.pref >= "88" ) {
this.pref = 88;
this.setCookie(this.cookieName,this.pref);
this.body.fontSize = Math.round(this.pref*this.base) + '%';
}
// min value in % is --> efa_default - ( X * efa_incerement)
if ( this.pref <= "58" ) {
this.pref = 58;
this.setCookie(this.cookieName,this.pref);
this.body.fontSize = Math.round(this.pref*this.base) + '%';
}

else {
this.setCookie(this.cookieName,this.pref);
this.body.fontSize = Math.round(this.pref*this.base) + '%';
}
}

Efa_Fontsize.prototype.getCookie = function(cookieName) {
var cookie = cookieManager.getCookie(cookieName);
return (cookie)?cookie:false;
}

Efa_Fontsize.prototype.setCookie = function(cookieName,cookieValue) {
return cookieManager.setCookie(cookieName,cookieValue);
}

var efa_fontSize = new Efa_Fontsize(efa_increment,efa_bigger,efa_smaller,efa_default);