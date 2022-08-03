const listAttendances = () => {
  return fetch(`http://localhost:3000/attendance`)
    .then(response => {
      return response.json();
    });
}

const createAttendance = (attendance) =>  {
  return fetch(`http://localhost:3000/attendance`, {
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

const deleteAttendence = (id) => {
  return fetch(`http://localhost:3000/attendance/${id}`, {
    method: "DELETE"
  });
}

export const attendanceService = {
  listAttendances,
  createAttendance,
  deleteAttendence,
}