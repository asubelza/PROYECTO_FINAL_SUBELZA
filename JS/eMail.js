
// Generando envio de mail para los formularios de consulta

const form = document.getElementById("contact_form");

const userName = document.getElementById("user_name");
const userEmail = document.getElementById("user_email");
const message = document.getElementById("message");

const sendEmail = async (body) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", config);
  const data = await response.json();
  console.log(response);
  return data;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const body = {
    service_id: 'aws182',
    template_id: 'template_yd1tdwp',
    user_id: 'YM-6wFblOItqcTcOr',
    template_params: {
        'to_name': userName.value,
        'from_name': userEmail.value,
        'message': message.value
    }
  };

  sendEmail(body)
    .then((response) => console.log(response.text()))
    .catch((error) => {
      console.log(error);
    })
});
  

  