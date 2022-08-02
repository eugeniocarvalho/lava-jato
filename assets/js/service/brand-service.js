const listBrands = () => {
  return fetch(`http://localhost:3000/brand`)
  .then( response => {
    return response.json();
  });
}

const registerBrand = (name) => {
  return fetch(`http://localhost:3000/brand`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: name
    })
  }).then(response => {
    response.body;
  });
}

export const brandService = {
  listBrands,
  registerBrand
}