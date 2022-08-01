const listBrands = () => {
  return fetch(`http://localhost:3000/brand`)
  .then( response => {
    return response.json();
  });
}

export const brandService = {
  listBrands
}