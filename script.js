"use strict";
const displayLink = document.getElementById("link-display");
const actualLink = document.getElementById("link");
const subject = document.getElementById("subject");
let currentDate = new Date();
const day = new Map([
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
  [7, "Sunday"],
]);
const timings = [
  ["08:25", "09:30"],
  ["09:40", "10:45"],
  ["10:50", "12:00"],
  ["13:40", "14:45"],
  ["14:55", "16:00"],
];
const links = {
  DMAT: "http://meet.google.com/yay-qxbu-zjc",
  LINEAR: "https://meet.google.com/vtk-ufkq-vqe",
  JAVA: "https://meet.google.com/ugs-rcgs-ozp",
  ENV: "https://teams.microsoft.com/l/meetup-join/19%3a34e336eb10bb4d039f06be72073f7b0f%40thread.tacv2/1627880515205?context=%7b%22Tid%22%3a%22858dc6a1-05e7-48c7-8a2b-4172a00a524a%22%2c%22Oid%22%3a%226361904f-260f-4294-b5d8-d8b7cc686b2a%22%7d",
  CARCH: "https://meet.google.com/tng-nrsy-wfs",
  ECO: "https://meet.google.com/qzb-erkv-nzh",
  DSLAB1: "https://meet.google.com/ifu-rmgv-gyr",
  DSLAB2: "https://meet.google.com/usf-umje-udr",
  JAVALAB1: "https://meet.google.com/crh-qtvi-bgp",
  JAVALAB2: "https://meet.google.com/wsj-epwk-oys",
  DS: "https://meet.google.com/dcb-weuo-mwq",
};
const getSlot = function (currentDate) {
  const hours = String(currentDate.getHours());
  const minutes = String(currentDate.getMinutes());
  const currentTime = `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`;
  return (
    timings
      .map(function (element) {
        return element[0] <= currentTime && element[1] >= currentTime;
      })
      .indexOf(true) + 1
  );
};
const getDetails = function (currentDate) {
  let slot = getSlot(currentDate);
  switch (slot) {
    case 1:
      return ["DS", links["DS"]];
    case 2:
      return ["Java", links["JAVA"]];
    case 3:
      return ["Econ", links["ECO"]];
    case 4:
      return ["Algebra", links.LINEAR];
    case 5:
      return ["C-Arch", links.CARCH];
  }
};

console.log(getDetails(currentDate));

const interval = setInterval(function () {
  currentDate = new Date();
  let details = getDetails(currentDate);
  subject.textContent = details[0];
  displayLink.textContent = details[1];
  actualLink.setAttribute("href", details[1]);
}, 1000);
