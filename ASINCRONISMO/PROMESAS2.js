const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
      resolve();
    } else {
      reject();
    }
  });
  
  promise
    .then(function () {
      console.log("Promise resolved successfully");
    })
    .catch(function () {
      console.log("Promise is rejected");
    });


    const helperPromise = function () {
        const promise = new Promise(function (resolve, reject) {
          const x = "geeksforgeeks";
          const y = "geeksforgeeks";
          if (x === y) {
            resolve("Strings are same");
          } else {
            reject("Strings are not same");
          }
        });
      
        return promise;
      };
      
      async function demoPromise() {
        try {
          let message = await helperPromise();
          console.log(message);
        } catch (error) {
          console.log("Error: " + error);
        }
      }
      
      demoPromise();


        

//---- 

      function getJson(){
        return new Promise((reslove,reject) => {
          setTimeout(function(){
            console.log(2)
            reslove(2)
          },2000)
        })
       }
      async function testAsync() {
         await getJson()
         console.log(3)
      }
  
      testAsync()

      //--- 


      function resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 2000);
        });
      }
      
      async function asyncCall() {
        console.log('calling');
        const result = await resolveAfter2Seconds();
        console.log(result);
        // expected output: "resolved"
      }
      
      asyncCall();



      //-----------------------

      function resolveAfter2Seconds(x) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(x);
          }, 2000);
        });
      }
      
      
      async function add1(x) {
        const a = await resolveAfter2Seconds(20);
        const b = await resolveAfter2Seconds(30);
        return x + a + b;
      }
      
      add1(10).then(v => {
        console.log(v);  // prints 60 after 4 seconds.
      });
      
    