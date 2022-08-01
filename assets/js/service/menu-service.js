const registerService = (name, value) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/service`, {
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