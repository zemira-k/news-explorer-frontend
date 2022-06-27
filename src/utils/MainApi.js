const BaseUrl = "https://api.myNews.students.nomoreparties.sbs";
// const BaseUrl = "http://localhost:3000";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}: ${res.statusText}`);
}

export const register = (email, password, name) => {
  return fetch(`${BaseUrl}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then((res) => checkResponse(res));
};

export const login = (email, password) => {
  return fetch(`${BaseUrl}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => checkResponse(res))
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export const getUserInfo = (token) => {
  return fetch(`${BaseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const getAllArticles = (token) => {
  return fetch(`${BaseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

export const addArticle = (token, data, keyword) => {
  return fetch(`${BaseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: keyword,
      title: data.title,
      text: data.description,
      date: data.publishedAt,
      source: data.source.name,
      link: data.url,
      image: data.urlToImage,
    }),
  }).then((res) => checkResponse(res));
};

export const deleteArticle = (articleId, token) => {
  return fetch(`${BaseUrl}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};
