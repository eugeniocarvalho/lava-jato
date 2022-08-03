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

const listServices = () => {
  return fetch(`http://localhost:3000/service`)
  .then( response => {
    return response.json();
  });
}

const updateService = (id, name, value) => {
  return fetch(`http://localhost:3000/service/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      value: value,
    })
  })
  .then(resposta => {
    return resposta.json();
  });
}

const detailsService = (id) => {
  return fetch(`http://localhost:3000/service/${id}`)
  .then( response => {
    return response.json();
  })
}

const deleteService = (id) => {
  return fetch(`http://localhost:3000/service/${id}`, {
    method: "DELETE"
  });
}


export const menuService = {
  registerService,
  listServices,
  updateService,
  detailsService,
  deleteService
}