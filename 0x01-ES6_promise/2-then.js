export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        resolve({
          status: 200,
          body: 'success',
        });
      })
      .catch((error) => {
        reject(error);
      });
    console.log('Got a response from the API');
  });
}
