const registerService = (name, value) => {
  return fetch(`http://localhost:3000/service`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      value: value
    })
  }).then(response => {
    return response.body;
  });
}

export const menuService = {
  registerService
}