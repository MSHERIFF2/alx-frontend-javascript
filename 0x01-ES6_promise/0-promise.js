export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = { data: 'Hello From API' };
      resolve(response);
    }, 2000);
  });
}
