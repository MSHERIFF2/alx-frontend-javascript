export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const myObject = { status: 200, body: 'Success' };
      resolve(myObject);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
