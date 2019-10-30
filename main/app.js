function distance(first, second){
	
	if(Array.isArray(first) && Array.isArray(second))
	{
		
		var array1=[], array2=[], ok=0, nr=0;
	
		//se creeaza un vector in care sa adaugam toate elem din first a.i. ele sa nu se repete
		for(var i=0;i<first.length;i++)
		{
			ok=0;
			for(var j=0;j<array1.length;j++){
				if(first[i]===array1[j]){
					ok=1;
				}
			}
			if(ok==0){
				array1.push(first[i]);
			}
		}
		
		//se creeaza al doilea vector in care sa adaugam toate elem din second a.i. ele sa nu se repete
		for(var i=0;i<second.length;i++)
		{
			ok=0;
			for(var j=0;j<array2.length;j++){
				if(second[i]===array2[j]){
					ok=1;
				}
			}
			if(ok==0){
				array2.push(second[i]);
			}
		}
		
		//se verifica daca elementele din primul vector se gasesc si in al doilea; daca nu, atunci nr++
		
		for(var i=0;i<array1.length;i++)
		{
			ok=0;
			for(var j=0;j<array2.length;j++)
			{
				if(array1[i]===array2[j])
				{
					ok=1;
					break;
				}
				
			}
			if(ok==0)
			{
				nr++;
				}
				
		}

		//se verifica daca elementele din al doilea vector se gasesc si in primul; daca nu, atunci nr++
		for(var i=0;i<array2.length;i++)
		{
			ok=0;
			for(var j=0;j<array1.length;j++)
			{
				if(array2[i]===array1[j])
				{
					ok=1;
					break;
				}
			}
			
			if(ok==0)
			{
				nr++;
			}
		}
		
		
		return nr;
	}
	else{
		throw new Error('InvalidType');
	}
}

module.exports.distance=distance

