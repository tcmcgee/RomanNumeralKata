function convertNumber()
{
        var number = document.getElementById("number").value
        var romaned = document.getElementById("roman").value

        if (romaned === "")
        {
    		romaned = numberToRoman(parseInt(number));
    		var lblRoman = romaned
    		document.getElementById("roman").value = romaned
       		document.getElementById('romanlbl').value = lblRoman;
    	}
    	else if (number === "")
    	{
    		number = romanToNumber(romaned)
    		document.getElementById("number").value = number
    		
    	}
    	else
    	{
    		return false;
    	}
        return false;

}

function numberToRoman(number)
{
	var hash = new Object();
	hash[1] = 'I'
	hash[4] = "IV"
	hash[5] = 'V'
	hash[9] = "IX"
	hash[10] = 'X'
	hash[40] = 'XL'
	hash[50] = 'L'
	hash[90] = 'XC'
	hash[100] = 'C'
	hash[400] = "CD";
    hash[500] = "D";
    hash[900] = "CM";
    hash[1000] = "M";

	keys = Object.keys(hash)
	roman = ""
	for (var i = keys.length - 1; i > -1; i--) 
	{
		c = keys[i]
			while (number >= c) {
				if (number >= c)
				{
					roman = roman + hash[c]
					number = number - c
				}
				else{
					roman = roman + hash[c]
					number = number - c
				}
	    	}
	}
	return roman
}


function romanToNumber(roman)
{
	var hash = new Object();
	for (var i = 0; i < 5000; i++)
	{
		hash[numberToRoman(i)] = i
	}
	number = hash[roman]
	if (number != null || number != undefined)
	{ 
		return hash[roman]
	}
	else
	{
		return "NOT A REAL NUMERAL!"
	}
}

