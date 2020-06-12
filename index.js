function myFunction() {
         var myNumber;
   myNumber = document.getElementById("para").value;
         myNumber = +myNumber;
          if (myNumber < 4) {
    alert ("not correct");
  }
  else if (myNumber == 4 ) {
    alert("correct");
  }
  else {
      alert("not correct");
  }
}    