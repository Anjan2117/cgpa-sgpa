function displaySgpa() {
  document.getElementById("userguide-block").style.display = "none";
  document.getElementById("cgpa-block").style.display = "block";
  document.getElementById("sgpa-block").style.display = "block";

  let ele1 = document.getElementById("nav-link-1");
  ele1.setAttribute("class", "nav-link");
  let ele2 = document.getElementById("nav-link-2");
  ele2.setAttribute("class", "nav-link");
  let ele3 = document.getElementById("nav-link-3");
  ele3.setAttribute("class", "nav-link active");

  ele1.innerHTML = " Usage Guide";
  ele2.innerHTML = "Calculate CGPA";
  ele3.innerHTML = "Estimate SGPA&nbsp;<i class='fas fa-map-pin'></i>";

  document.getElementById("result-cg-sg").innerHTML = "SGPA: ";
  let buttonValue = document.getElementById("get-cgpa-sgpa");
  buttonValue.value = "Get SGPA";
}
