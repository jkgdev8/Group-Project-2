//Date method
function dates(tags)
{

		if(tags == '')
		//If the dates('') paramenter is empty, add no tags
		{
			var dates = "";
			var i;
			for (i = 1; i < 32;  i++ )
			{
				dates += i;
			}
		}
		else
		//If the dates('option') has paramenter, add the tags to it
		{
			var dates = "";
			var i;
			for (i = 1; i < 32;  i++ )
			{
				dates += "<" + tags +">" + i +"</" + tags +">";
			}	
		}
		
	//You can call the class multiple times						
    var multiple_list = document.getElementsByClassName("dates");
    for (i = 0; i < multiple_list.length; i++)
	{
    	multiple_list[i].innerHTML = dates;
    }	
}




