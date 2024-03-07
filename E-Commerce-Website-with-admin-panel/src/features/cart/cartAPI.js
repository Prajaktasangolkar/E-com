// A mock function to mimic making an async request for data
export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
      credentials:"include"
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
      credentials:'include'
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart/" + itemId, {
      method: "DELETE",

      headers: { "content-type": "application/json" },
      credentials:"include"
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}
export function resetCart() {
  //get all items of user's and then delete
  return new Promise(async (resolve) => {
    const response = await fetchItemsByUserId();
    const items = response.data;
    for (let item of items) {
      await deleteItemFromCart(item.id);
    }
    resolve({ status: "success" });
  });
}
export function fetchItemsByUserId() {
  //TODO: we will not hard-code server URL here
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart",{
      credentials:'include'
    });
    const data = await response.json();
    resolve({ data });
  });
}
