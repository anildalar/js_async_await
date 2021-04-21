async function outside() { //

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 2000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  outside();