// Store the theme
let darkTheme = localStorage.getItem("darkTheme");
const themeToggle = document.querySelector("#themeButton");

// Apply Dark theme
const enableDark = () => {
  document.body.classList.add("darktheme");
  localStorage.setItem("darkTheme", "enabled");
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="sun"></i>`;
  feather.replace();
};

// Remove Dark theme
const disableDark = () => {
  document.body.classList.remove("darktheme");
  localStorage.setItem("darkTheme", null);
  themeToggle.innerHTML = `<i id="themeButton__icon" data-feather="moon"></i>`;
  feather.replace();
};

//Toggle theme
if (darkTheme === "enabled") {
  enableDark();
} else {
  disableDark();
}

themeToggle.addEventListener("click", () => {
  darkTheme = localStorage.getItem("darkTheme");
  if (darkTheme !== "enabled") {
    enableDark();
  } else {
    disableDark();
  }
});

// Theme accordint the hour


var sunrise, sunset;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const splitted = this.response.split(" ");
        sunrise = splitted[0];
        sunset = splitted[1];
    }
}
xhttp.open("GET", "https://wttr.in/rzeszow?format=%S%20%s", false);
xhttp.send();

let [sunrise_h, sunrise_m, ...rest] = sunrise.split(":");
let [sunset_h, sunset_m, ...restt] = sunset.split(":");

let todayy = new Date();
let hourr = todayy.getHours();
let minutee = todayy.getMinutes();

if ((hourr >= parseInt(sunset_h) && minutee >= parseInt(sunset_m)) || (hourr < parseInt(sunrise_h) && minutee < parseInt(sunrise_m))) {
    enableDark();
} else {
    disableDark();
}

