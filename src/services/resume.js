export const getResume = (jwt) =>
  fetch("/api/resume", {
    method: "GET",
    headers: {
      "x-auth-token": `bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));

export const getLastOperations = (jwt) =>
  fetch("/api/transactions/?limit=10", {
    method: "GET",
    headers: {
      "x-auth-token": `bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
