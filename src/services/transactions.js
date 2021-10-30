export const deleteTransaction = (id) =>
  fetch(`/api/transactions/${id}`, {
    method: "DELETE",
  }).catch((e) => console.log(e));

export const addTransaction = (transaction) =>
  fetch(`/api/transactions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(new Error("Unexpected error ocurred"));
      } else return res.json();
    })
    .catch((e) => console.log(e));

export const editTransaction = (transaction) =>
  fetch(`/api/transactions/${transaction.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(transaction),
  }).catch((e) => console.log(e));

export const getAllTransaction = (type = "") =>
  fetch(`/api/transactions/${type}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));

export const getAllTransactionByCategory = (id) =>
  fetch(`/api/transactions/category/${id}`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
