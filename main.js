const gender = "male";
let text;

function changeText(gender) {
  if (gender === "male") {
    text = "Dear Sir Anderson";
  } else if (gender === "female") {
    text = "Dear Madam Anderson";
  } else {
    text = "Dear Mx. Anderson";
  }

  document.getElementById("heading-main").innerHTML = text;
}

changeText(gender);
