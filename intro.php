<html>
<head>
<meta http-equiv="expires" content="31 Dec 1990">
<title>Iran-Infos Chat</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script language="JavaScript">
<!--
function check_the_form() { 
  var the_error='';
  var the_error_name='';
  var the_error_password='';
  var the_person=document.the_form.person.value;
  var the_password=document.the_form.password.value;
  var validperson=" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var validpassword=" 0123456789.";
if (the_person.length < 4){
the_error = "-Ihr Name muss mindestens aus 4 Zeichen bestehen\n";
}
   
for (var i=0; i<the_person.length; i++) {
   if (validperson.indexOf(the_person.charAt(i)) < 0) {
         the_error_name = "-Sonderzeichen sind nicht erlaubt\n";
        }
    }  
for (var i=0; i<the_password.length; i++) {
   if (validpassword.indexOf(the_password.charAt(i)) < 0) {
    the_error_password = "-Sorry, aber  Sie benötigen Ihre aktuelle IP für den Zugang\n";
        }
    }  
the_error = the_error + the_error_name + the_error_password ;  
if (the_error!=''){alert('Please:\t\t\t\t\t\n\n'+the_error)}
  document.return_the_value = (the_error=='');
}
//-->
</script>
</head>
<body bgcolor="#DFE9EB">
 <OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
 codebase="http://active.macromedia.com/flash2/cabs/swflash.cab#version=4,0,0,0"
 ID="counter" WIDTH=475 HEIGHT=20>
 <PARAM NAME=movie VALUE="chat/count_users.swf?browser="><PARAM NAME=menu VALUE=false><PARAM NAME=quality VALUE=best><PARAM NAME=wmode VALUE=transparent><EMBED name="counter" src="chat/count_users.swf?browser=" menu=false quality=best wmode=transparent WIDTH=475 HEIGHT=20 TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" swLiveConnect="true"></EMBED>
</OBJECT>
<br>
<form name="the_form" action="chat/index.php" method="POST" onSubmit="check_the_form();return document.return_the_value">
  <font face="Verdana, Arial, Helvetica, sans-serif" size="1">
  Geben Sie Ihren Namen ein, um den Chat zu betreten  und klicken Sie auf den Button</font> 
  <table width="475" border="0" cellspacing="0" cellpadding="0">
    <tr align="left" valign="top"> 
      <td colspan="5"><font face="Verdana, Arial, Helvetica, sans-serif" size="1"><br>
        </font></td>
    </tr>
    <tr>
    <td bgcolor="#FFFFFF" width="10"><img src="chat/graphics/left.gif" width="10" heigth="30"></td>
      <td align="right" bgcolor="#CECECE"><font face="Verdana, Arial, Helvetica, sans-serif" size="1">Name  </font></td>
      <td align="left" bgcolor="#CECECE"> 
        <input type="text" name="person" maxlength="12" size="8" style="background:#CCCCCC; width:50">
                <input type="hidden" name="password" value="209.237.238.175">
      </td>
      <td align="right" bgcolor="#CECECE"> 
        <input type="submit" name="Submit" value=" Enter" style="background:#CCCCCC; width:75">
      </td>
      <td bgcolor="#DFE9EB" width="10"><img src="chat/graphics/right.gif" width="10" heigth="30"></td>
    </tr>
    <tr align="left" valign="top"> 
<td colspan="5">
       
<hr noshade size="1">
        <font face="Verdana, Arial, Helvetica, sans-serif" size="1">Dieser Chat ben&ouml;tigt Flash 4.- </font><font face="Verdana, Arial, Helvetica, sans-serif" size="1"><b><font color="#990000"></font></b></font>
      </td>
    </tr>
  </table>
        </form>
</body>
</html>
