export const deleteTransaction = (id, jwt) =>
  fetch(`/api/transactions/${id}`, {
    method: "DELETE",
    headers: {
      "x-auth-token": `bearer ${jwt}`,
    },
  }).catch((e) => console.log(e));

export const addTransaction = (transaction, jwt) =>
  fetch(`/api/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `bearer ${jwt}`,
    },
    body: JSON.stringify(transaction),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(new Error("Unexpected error ocurred"));
      } else return res.json();
    })
    .catch((e) => console.log(e));

export const editTransaction = (transaction, jwt) =>
  fetch(`/api/transactions/${transaction.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `bearer ${jwt}`,
    },
    body: JSON.stringify(transaction),
  }).catch((e) => console.log(e));

export const getAllTransaction = (type = "", jwt) =>
  fetch(`/api/transactions/${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": `bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => {
      console.log(e);
      return [];
    });

export const getAllTransactionByCategory = (id, jwt) =>
  fetch(`/api/transactions/category/${id}`, {
    headers: {
      "x-auth-token": `bearer ${jwt}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
