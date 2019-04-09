<script>
	var positivos=0;
  	var negativos=0;
  	var ceros=0;
  	var array=[-9,-8,0,98,0,5, -9589889, 9];
  	var fracciones=[];

  	for (var i=0 ; i<array.length ; i++)
		if (array[i]<0)
      		negativos = negativos +1;
      	else if (array[i]==0)
        	ceros=ceros+1;
      	else
        	positivos = positivos +1;
            
  	fracciones=[positivos,ceros,negativos];
  	document.write(fracciones);
</script>
