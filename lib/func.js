function findId(arr, key, value)
{
		var i,js,k,v,found=-1;
	  if(arr)
	  {
	    if(arr.length > 0)
	    {
	      for (i=0; i<arr.length; i++){
	        js = arr[i];
	        if(js.hasOwnProperty(key)){
	          if(js[key].equals(value)){
	            found = i;
	            break;
	          } 
	        } else {
	          continue;
	        }
	      }
	    } else {
	      // empty cart. return index = -1;
	    }
	  } else {
	    throw new Meteor.Error("Invalid Array source as argument in findId()");
	  }
	  return found;
}