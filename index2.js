let j = 1;

let arrHead = new Array(); // array for header.
arrHead = ["Semester", "Number of Credits", "SGPA", ""];
// first create TABLE structure with the headers.
function createTable() {
  let empTable = document.createElement("table");
  empTable.setAttribute("id", "empTable"); // table id.
  empTable.setAttribute(
    "class",
    "table table-striped mt-4 table-bordered table-sm",
  ); // table class.

  let tr = empTable.insertRow(-1);
  for (let h = 0; h < arrHead.length; h++) {
    let th = document.createElement("th"); // create table headers
    th.innerHTML = arrHead[h];
    tr.appendChild(th);
  }

  let div = document.getElementById("cont");
  div.appendChild(empTable); // add the TABLE to the container.
}

// now, add a new to the TABLE.
function addRow() {
  let empTab = document.getElementById("empTable");

  let rowCnt = empTab.rows.length; // table row count.
  let tr = empTab.insertRow(rowCnt); // the table row.
  tr = empTab.insertRow(rowCnt);

  for (let c = 0; c < arrHead.length; c++) {
    let td = document.createElement("td"); // table definition.
    td = tr.insertCell(c);

    if (c == arrHead.length - 1) {
      // the first column.
      // add a button in every new row in the first column.
      let button = document.createElement("input");

      // set input attributes.
      button.setAttribute("type", "button");
      button.setAttribute("class", "btn btn-danger");
      button.setAttribute("value", "X");

      // add button's 'onclick' event.
      button.setAttribute("onclick", "removeRow(this)");

      td.appendChild(button);
    } else if (c == 0) {
      let valSem = String(j);
      let ele = document.createElement("input");
      ele.setAttribute("type", "button");
      ele.setAttribute("class", "btn btn-primary");
      ele.setAttribute("value", valSem);
      td.appendChild(ele);
    } else {
      // 2nd, 3rd  will have textbox.
      let ele = document.createElement("input");
      ele.setAttribute("type", "number");
      ele.setAttribute("class", "btn btn-success btn-block");
      ele.setAttribute("min", "0");
      ele.setAttribute("max", "100");
      if (c == 1) {
        ele.setAttribute("id", "cg-noc" + String(j));
      } else {
        ele.setAttribute("id", "cg-sg" + String(j));
      }
      ele.setAttribute("value", "");
      ele.setAttribute("style", "max-width:200px");
      td.appendChild(ele);
    }
  }
  j++;
}

// delete TABLE row function.
function removeRow(oButton) {
  let empTab = document.getElementById("empTable");
  empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
  j--;
}

function getCgpa() {
  let empTab = document.getElementById("empTable");
  // Validation.validate($("cg-noc1"));
  const rowCnt = empTab.rows.length; // table row count.
  let totCred = 0;
  let tot = 0;
  for (let k = 1; k < j; k++) {
    let cred = document.getElementById("cg-noc" + String(k)).value;
    let sgpa = document.getElementById("cg-sg" + String(k)).value;
    totCred += Number(cred);
    tot += Number(cred) * Number(sgpa);
  }
  //   console.log(totCred);
  //   console.log(tot);
  let myCGPA = tot / totCred;
  let cgpaResults = document.getElementById("cgpa-results");
  cgpaResults.style.display = "block";
  document.getElementById("cg-totcreds").innerHTML = totCred;
  document.getElementById("cg-totcgpa").innerHTML = myCGPA;
  let cgProgressbar = document.getElementById("cg-progress-bar");
  cgProgressbar.style.width = String(myCGPA.toFixed(2) * 10) + "%";
  if (myCGPA < 6.5) {
    cgProgressbar.setAttribute("class", "progress-bar bg-danger");
  } else if (myCGPA < 7) {
    cgProgressbar.setAttribute("class", "progress-bar bg-warning");
  } else if (myCGPA < 8) {
    cgProgressbar.setAttribute("class", "progress-bar  bg-primary");
  } else if (myCGPA < 9) {
    cgProgressbar.setAttribute("class", "progress-bar bg-success");
  } else {
    cgProgressbar.setAttribute(
      "class",
      "progress-bar progress-bar-striped progress-bar-animated bg-success",
    );
  }
  cgProgressbar.innerHTML = myCGPA.toFixed(2);
}

function validateNumbers() {
  let run = true;
  for (k = 1; k <= j; k++) {
    let noc = document.getElementById("cg-noc" + String(k));
    let sg = document.getElementById("cg-sg" + String(k));

    if (Number(noc.value) < 0) {
      run = false;
      alert("Number of Credits must be non-negative");
      noc.value = "";
    } else if (!Number.isInteger(Number(noc.value))) {
      run = false;
      alert("Number of Credits must be an Integer");
      noc.value = "";
    }
    if (Number(sg.value) < 0 || Number(sg.value) > 10) {
      run = false;
      alert("SGPA must be in 0 and 10");
      sg.value = "";
    }
  }
  return run;
}
