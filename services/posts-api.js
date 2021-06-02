const API_URL = "https://jsonplaceholder.typicode.com/posts/";

export async function getPost() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}
