function getLaptop(make, model, year) {
    return {
       make,
       model,
       year
    }
 }
 
 let res = getLaptop("Apple", "MacBook", "2015")
 console.log(res)
 console.log(`${res.make} created ${res.model} in ${res.year}.` ); //template literals


