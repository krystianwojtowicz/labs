const gender = "female";
let text = "";

function changeText(gender) {
  if (gender === "male") {
    text = "Dear Sir Anderson";
  } else if (gender === "female") {
    text = "Dear Madam Anderson";
  } else if (gender === "other" || gender === "") {
    text = "Dear Mx. Anderson";
  } else {
    alert("wrong value");
  }

  document.getElementById("main__heading").innerHTML = text;
}

changeText(gender);
