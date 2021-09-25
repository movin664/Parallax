
function sendEmail() {
    var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var fullname = document.getElementById('fullName').value;
var phone = document.getElementById('phone').value;
var message = document.getElementById('message').value;
    Email.send({
      Host: "smtp.gmail.com",
      Username: "chalkstoriesfeedback@gmail.com",
      Password: "Abcd@1234",
      To: 'andrewjeremy863@gmail.com',
      From: "chalkstoriesfeedback@gmail.com",
      Subject: subject,
      Body: "email:"+ email + " Name: " + fullname + " phone: " + phone + " message: "+ message,
    })
      .then(function (message) {
        alert("mail sent successfully")
        console.log("Worked")
      });
  }