export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {data: "Hello From API"}
        resolve(response)
    }, 2000)
  });
}
