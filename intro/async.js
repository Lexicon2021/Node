
// *** async await practice (låtsas om API call)

async function someFunction(items) {
    items.forEach( async(i) => {
       const res = await someAPICall(i);
       console.log('--->', res);
    });
  }
  function someAPICall(param) {
      return new Promise((resolve)=>{
        setTimeout(() => {
          resolve("Klar " + param);
        },param); // param är sekunderna i arrayn
      });
  }

  someFunction(['3000','8000','1000','4000']); // *** Hur kan ni göra koden köra snabbare? arrayn innehåller / är sekunder.