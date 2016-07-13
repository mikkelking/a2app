import {Pipe} from '@angular/core';

// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'NamePipe'
})

export class NamePipe {

  transform(value, srch, isRegex) {
    // ES6 array destructuring
   	console.log(srch);
   	console.log(isRegex);
    if (isRegex){
	   	let searchFor = '.*';				// Provide a default search regex, which will return everything
	    if (srch)
	    	searchFor = srch;
	    let re = new RegExp(searchFor,"i");
	    console.log("Regex Search for "+searchFor);
	    return value.filter(person => {
	    		return re.exec(person.name);
	    });
    } else {
	   	let searchFor = '';				// Provide a default search string, which will return everything
	    if (srch)
	    	searchFor = srch;
	    console.log("Searching for "+searchFor);
	    return value.filter(person => {
	    		return ((searchFor === '') ? true : person.name.indexOf(searchFor) > -1);
	    });
    }
  }

}
