function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your API call or logic here
    const response = { /* your response data */ };
    if (response) {
      resolve(response);
    } else {
      reject("Error: No response from API");
    }
  });
}

getResponseFromAPI()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
