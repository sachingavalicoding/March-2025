const promise = new Promise((resolve , reject) => {
    console.log("Promise is excuted");
    resolve("Done");
});

promise.then(() => {
    console.log("Promise is resolved");
})
promise.catch(() => {
    console.log("Promise is rejected");
})
