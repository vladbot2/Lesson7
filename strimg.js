const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    result.textContent = "Введи назву міста";
    return;
  }

  const apiKey = "e85387c9af02d2c632c836f5671b9173";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=uk&appid=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const temp = data.main.temp.toFixed(1);
      const desc = data.weather[0].description;
      const icon = data.weather[0].icon;
      result.innerHTML = `
        <h3>${data.name}</h3>
        <p><img src="https://openweathermap.org/img/wn/${icon}@2x.png">
           ${temp} °C, ${desc}</p>
      `;
    });
});
