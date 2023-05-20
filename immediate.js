
// //Self invoking function or immediately invoking function(iiif)Immediately invoked function execution

(function() {
    var foo = 4;
    console.log(foo,"hello");
  })();
  
 

(()=> {
    var foo = 3;
    console.log(foo);
  })();

  