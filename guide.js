function displayGuide() {
  // console.log("Here to guide you through website");
  document.getElementById("userguide-block").style.display = "block";
  document.getElementById("cgpa-block").style.display = "none";
  document.getElementById("sgpa-block").style.display = "none";

  let ele1 = document.getElementById("nav-link-1");
  ele1.setAttribute("class", "nav-link active");
  let ele2 = document.getElementById("nav-link-2");
  ele2.setAttribute("class", "nav-link");
  let ele3 = document.getElementById("nav-link-3");
  ele3.setAttribute("class", "nav-link");

  ele1.innerHTML = " Usage Guide&nbsp;<i class='fas fa-map-pin'></i>";
  ele2.innerHTML = "Calculate CGPA";
  ele3.innerHTML = "Estimate SGPA";
}
