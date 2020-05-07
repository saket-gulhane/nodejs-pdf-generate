$(document).ready(function() {
  var specialElementHandler = {
    "#editor": function(element, renderer) {
      return true;
    }
  };

  $("#cmd").click(function() {
    var doc = new jsPDF();

    doc.fromHTML($("#content").html(), 15, 15, {
      width: 175,
      elementHandlers: specialElementHandler
    });

    doc.save("dwFile.pdf");
  });
});

var d = new Date();
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var n = d.getDate() + "-" + months[d.getMonth()] + "-" + d.getFullYear();
var t = d.getHours() + " hrs : " + d.getMinutes() + " min";
document.getElementById("date").innerHTML = "Date: " + n;
document.getElementById("time").innerHTML = "Time: " + t;

// doctor : {
//   name: "Dr. Mahesh Shukla  M.B.B.S(in medicine)"
//   address: "Ward No: 4, Nagpur Government Hospital, koradi road, Nagpur-440048.↵Doctor-id: KN48071"
//   number: "0712 - 2647814"
//   }

//   info:{
//   firstname: "Aamod"
//   lastname: "Shukla"
//   age: "null"
//   gender: "NA"}

//   diagnosis:{
//   diagnosis: "Cerebrovascualr"
//   symptoms: "Abdominal bloating"}

//   medicine:{ [ {name: "Accutane", duration: " day ", dosage: " twice a day"}]
//   length: 2}

//   advice: {"Aaaaaaaaaaaaaa"}
//   }
