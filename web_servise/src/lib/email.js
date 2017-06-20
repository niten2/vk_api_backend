export default function(options = {}) {
  let { name, phone} = options
  console.log(`send email with ${name}, ${phone}`)
  emailjs.send("mailgun","test", { name: name, phone: phone })
}
