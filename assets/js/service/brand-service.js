const listBrands = () => {
  return fetch(`https://box3-lava-jato.herokuapp.com/brand`)
  .then( response => {
    return response.json();
  });
}

const registerBrand = (name) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/brand`, {
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