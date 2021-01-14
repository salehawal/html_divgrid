function arrangeblocks()
{
	var blocks 	  = document.getElementsByClassName("contentDiv");
	var r 		  = 0;
	var direction = "";
	var blen	  = blocks.length;
	for(var i = 0; i < blen; i++)
	{
		blocks[i].style.border="solid #000 1px";
		if(i > 1)
		{
			r = i-2;
			var calcdiff = blocks[i].offsetTop - blocks[r].offsetTop - blocks[r].offsetHeight;
			if(calcdiff > 50)
			{
				calcdiff -= 14;
				blocks[i].style.marginTop = "-"+calcdiff.toString()+"px";
			}
		}
		if((i+1) == blen && (i%2 == 0)) { blocks[i].style.cssFloat = "left"; blocks[i].style.marginLeft = "27px"; }
	}
}