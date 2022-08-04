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

const listServices = () => {
  return fetch(`https://box3-lava-jato.herokuapp.com/service`)
  .then( response => {
    return response.json();
  });
}

const updateService = (id, name, value) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/service/${id}`, {
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
  return fetch(`https://box3-lava-jato.herokuapp.com/service/${id}`)
  .then( response => {
    return response.json();
  })
}

const deleteService = (id) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/service/${id}`, {
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