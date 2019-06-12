function sendMail(contactForm) {
    emailjs.send("gmail", "template_7cZkQhPw", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_subject": contactForm.subject.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS. EMAIL SENT", response);
        },
        function(error) {
            console.log("FAILED. COULD NOT SEND", error);
        }
    );
    return false;
}