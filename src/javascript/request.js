/* eslint-disable no-undef */
const url = "http://localhost:3000/users/";

const introduce = (name, age) =>
  `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME`;

const createLi = (year, title, description) =>
  `
        <li>
        <span className="year">${year}</span>
        <div className="describe-content">
          <span className="title">${title}</span>
          <p className="describe">${description}</p>
        </div>
      </li>
      `;

const addLi = (year, title, description) => {
  $("ul").append(createLi(year, title, description));
};

const getUser = async (userId) => {
  return fetch(`${url}${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      $("#self-introduce").html(introduce(data.name, data.age));
      $("img").attr("src", data.avatar);
      $("#about-me__describe").html(data.description);
    })
    .catch((err) => console.log(err));
};

const getEducation = async (userId) => {
  return fetch(`${url}${userId}/educations`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => a.year - b.year);
      data.forEach((element) =>
        addLi(element.year, element.title, element.description)
      );
    })
    .catch((err) => console.log(err));
};

export { getUser, getEducation };
