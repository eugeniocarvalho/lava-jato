const listAttendances = () => {
  return fetch(`https://box3-lava-jato.herokuapp.com/attendance`)
    .then(response => {
      return response.json();
    });
}

const createAttendance = (attendance) =>  {
  return fetch(`https://box3-lava-jato.herokuapp.com/attendance`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "dateRegister": attendance.dateRegister,
      "dateFinal": attendance.dateFinal,
      "clientName": attendance.clientName,
      "phone": attendance.phone,
      "status": attendance.status,
      "brand": attendance.brand,
      "model": attendance.model,
      "plate": attendance.plate,
      "zipCode": attendance.zipCode,
      "street": attendance.street,
      "number": attendance.number,
      "complement": attendance.complement,
      "district": attendance.district,
      "city": attendance.city,
      "state": attendance.state,
      "services": attendance.services
    })
  }).then(response => {
    return response.body;
  })
}

const updateAttendance = (id, attendance) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/attendance/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      "dateRegister": attendance.dateRegister,
      "dateFinal": attendance.dateFinal,
      "clientName": attendance.clientName,
      "phone": attendance.phone,
      "status": attendance.status,
      "brand": attendance.brand,
      "model": attendance.model,
      "plate": attendance.plate,
      "zipCode": attendance.zipCode,
      "street": attendance.street,
      "number": attendance.number,
      "complement": attendance.complement,
      "district": attendance.district,
      "city": attendance.city,
      "state": attendance.state,
      "services": attendance.services
    })
  })
    .then(response => {
      return response.json();
    });
}

const detailsAttendance = (id) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/attendance/${id}`)
    .then(response => {
      return response.json();
    })
}


const deleteAttendance = (id) => {
  return fetch(`https://box3-lava-jato.herokuapp.com/attendance/${id}`, {
    method: "DELETE"
  });
}

export const attendanceService = {
  listAttendances,
  createAttendance,
  updateAttendance,
  detailsAttendance,
  deleteAttendance,
}