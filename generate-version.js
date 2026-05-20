const fs = require("fs");

const birth = new Date("2001-02-17");
const now = new Date();

let years = now.getFullYear() - birth.getFullYear();
let months = now.getMonth() - birth.getMonth();
let days = now.getDate() - birth.getDate();

if (days < 0) {
  months--;
  const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
  days += prevMonth.getDate();
}

if (months < 0) {
  years--;
  months += 12;
}

const version = `v${years}.${months}.${days}`;

const readme = fs.readFileSync("README.md", "utf8");

const updated = readme.replace(
  /<!--VERSION_START-->.*<!--VERSION_END-->/s,
  `<!--VERSION_START-->${version}<!--VERSION_END-->`
);

fs.writeFileSync("README.md", updated);

console.log(version);
