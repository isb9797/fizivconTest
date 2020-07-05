const callApi = () => {
  //!Reset
  document.querySelectorAll("select, input").forEach((el) => {
    el.value = "";
  });

  const url = "http://krapipl.imumk.ru:8082/api/mobilev1/update";
  //!Request
  fetch(url, {
    method: "post",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "Access-Control-Allow-Origin": "*", //Пока нет посточнного домена использую *
    },
    body: "foo=bar&lorem=ipsum",
  })
    .then((response) => {
      response.json().then((data) => {
        generate(data);
      });
    })
    .catch(function (error) {
      console.log("Request failed", error);
    });

  const generate = (data) => {
    const items = data.items;
    const length = items.length;

    items.forEach((el) => {
      const cards = document.querySelector(".cards");
      const card = document.createElement("DIV");
      card.classList.add("card");

      //Замена ; на ,
      el.grade = el.grade.replace(/;/g, ", ");

      const cardInfo = `<div class="card-figure">
                    <img src="images/image.bmp" width="100%" alt="${el.title}">
                  </div>
                  <div class="card-info">
                    <p class="card-title">${el.subject}</p>
                    <p class="card-grade">${el.grade} классы</p>
                    <p class="card-genre">${el.genre}</p>
                    <p class="card-meta"><a href="#">Подробнее</a></p>
                    <p class="card-controls">
                      <a href="#" class="btn btn-primary price">${el.price} р.</a>
                      <a href="#" class="btn btn-primary bonus hidden">${el.priceBonus} бон.</a>
                    </p>`;
      card.innerHTML = cardInfo;

      cards.insertAdjacentElement("beforeend", card);
    });
  };
};

export default callApi;
