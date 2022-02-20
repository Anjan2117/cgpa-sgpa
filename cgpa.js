function displayCgpa() {
  document.getElementById("userguide-block").style.display = "none";
  document.getElementById("cgpa-block").style.display = "block";
  document.getElementById("sgpa-block").style.display = "none";

  let ele1 = document.getElementById("nav-link-1");
  ele1.setAttribute("class", "nav-link");
  let ele2 = document.getElementById("nav-link-2");
  ele2.setAttribute("class", "nav-link active");
  let ele3 = document.getElementById("nav-link-3");
  ele3.setAttribute("class", "nav-link");

  ele1.innerHTML = " Usage Guide";
  ele2.innerHTML = "Calculate CGPA&nbsp;<i class='fas fa-map-pin'></i>";
  ele3.innerHTML = "Estimate SGPA";

  document.getElementById("result-cg-sg").innerHTML = "CGPA: ";

  document.getElementById("get-cgpa-sgpa").value = "Get CGPA";
}
