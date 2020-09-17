/* eslint-disable no-undef */
const url = "http://localhost:8080/users/";

// TODO feedback: 文件不只是request的逻辑

const introduce = (name, age) =>
  `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME`;

const createLi = (year, title, description) =>
  `
        <li>
        <span class="year">${year}</span>
        <div class="describe-content">
          <span class="title">${title}</span>
          <p class="describe">${description}</p>
        </div>
      </li>
      `;

const addLi = (year, title, description) => {
  // TODO feedback: 不建议用标签选择器，未来新添加的标签都会被写入html
  // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
  $("ul").append(createLi(year, title, description));
};

// TODO feedback: 请求和渲染逻辑耦合在一起
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
      // TODO feedback: 不建议用标签选择器，未来新添加的标签都会被写入src
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
      // TODO feedback: year为string类型，做减法逻辑有误
      data.sort((a, b) => a.year - b.year);
      data.forEach((element) =>
        // TODO feedback: 命名不合理，建议描述功能
        addLi(element.year, element.title, element.description)
      );
    })
    .catch((err) => console.log(err));
};

export { introduce, getUser, getEducation };
