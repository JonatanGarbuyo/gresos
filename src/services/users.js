export const registerUser = (user) =>
  fetch(`/api/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(async (res) => {
      const response = await res.json();
      if (res.status === 409) {
        return new Error(response.message);
      } else return response;
    })
    .catch((error) => {
      alert(error);
      console.error("-- error: ", error);
    });

export const loginUser = (user) =>
  fetch(`/api/auth/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then(async (res) => {
      const response = await res.json();
      if (!res.ok) {
        return Promise.reject(new Error(response.message));
      } else return response;
    })
    .catch((error) => {
      alert(error);
      console.error("-- error: ", error);
    });
