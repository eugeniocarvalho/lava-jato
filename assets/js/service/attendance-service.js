const listAttendances = () => {
  return fetch(`http://localhost:3000/attendance`)
    .then(response => {
      return response.json();
    });
}

const deleteAttendence = (id) => {
  return fetch(`http://localhost:3000/attendance/${id}`, {
    method: "DELETE"
  });
}

export const attendanceService = {
  listAttendances,
  deleteAttendence,
}