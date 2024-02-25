const form = document.querySelector("#form")
const generateCodeCopy = (e) => {
  e.preventDefault()

  const api_key = document.querySelector("#api_key").value
  
  const amount = document.querySelector("#amount").value
  
  const form_id = document.querySelector("#form_id").value
  
  const email_id = document.querySelector("#email_id").value
  
 const fullname_id = document.querySelector("#fullname_id").value

  const the_code = `
<script src="https://js.paystack.co/v1/inline.js"><\/script>
<script>
const elementor_paystack_form = document.querySelector("#${form_id}")
const elementor_paystack_amount = parseInt(${amount})*100 // Converts amount to kobo  

const elementor_paystack_api_key = "${api_key}" 

const elementor_pay_with_paystack = (e) =>{ 
e.preventDefault() 
 
const elementor_paystack_email = document.querySelector("#form-field-${email_id}").value 
const elementor_paystack_fullname = document.querySelector("#form-field-${fullname_id}").value 
const elementor_paystack_full_name = elementor_paystack_fullname.split(" ") 
const elementor_paystack_firstname = elementor_paystack_full_name[0]  
const elementor_paystack_lastname = elementor_paystack_full_name[1] 

let handler = PaystackPop.setup({ 
     key: elementor_paystack_api_key, 
     email: elementor_paystack_email, 
     amount: elementor_paystack_amount, 
     firstname: elementor_paystack_firstname, 
     lastname: elementor_paystack_lastname, 
     ref: ''+Math.floor((Math.random() * 1000000000) + 1), 
     // label: "Optional string that replaces customer email"  
     onClose: function(){ 
       alert('Window closed.') 
     }, 
     callback: function(response){ 
       let message = 'Payment complete! Reference: ' + response.reference 
       alert(message) 
     } 
   }) 
   handler.openIframe() 
} 

elementor_paystack_form.addEventListener("submit", elementor_pay_with_paystack, false) 


<\/script>
`
  

  const output = document.createElement("textarea")
  
  document.body.appendChild(output)
// const output = document.querySelector("#code_output")
  output.value = the_code
  
  output.select()
  document.execCommand("copy")
  
  const copy_button = document.querySelector("#copy_button")
  copy_button.innerHTML = "Code Copied"
  
  document.body.removeChild(output)
  
  setTimeout(()=>{
    copy_button.innerHTML = "Generate and Copy Code"
  }, 3000)
  
}

form.addEventListener("submit", generateCodeCopy, false)