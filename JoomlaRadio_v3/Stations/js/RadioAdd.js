function RightClickIE4()
{
	if (event.button == 2)
	{
		return false;
	}
}

function RightClickNS4(e)
{
	if (document.layers || document.getElementById && !document.all)
	{
		if (e.which == 2 || e.which == 3)
		{
			return false;
		}
	}
}

if (document.layers)
{
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown = RightClickNS4;
}

else if (document.all && !document.getElementById)
{
	document.onmousedown = RightClickIE4;
}

document.oncontextmenu = new Function("return false")

