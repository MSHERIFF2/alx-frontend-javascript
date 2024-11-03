export default function getFullResponseFromAPI(success) {
  return new Promise((resolve) => {
    if (success === true) {
      const myObject = { status: 200, body: 'Success' };
      resolve(myObject);
    } else {
      console.log('<rejected> Error: The fake API is not working currently');
    }
  });
}
