document.addEventListener("DOMContentLoaded", () => {

    function clearFields() {
        document.querySelector('input[name="fname"]').value = "";
        document.querySelector('input[name="lname"]').value = "";
        document.querySelector('input[name="email"]').value = "";
    }
    
    document.querySelector("#user-btn").addEventListener("click", (e) => {
        // Prevent default behavior of form submission
        e.preventDefault();
       
        // Get form field values
        const fname = document.querySelector('input[name="fname"]').value;
        const lname = document.querySelector('input[name="lname"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const hiddenField = document.querySelector('input[name="mysecret"]').value;

        // Display form field values
        console.log(`fname: ${fname}`);
        console.log(`lname: ${lname}`);
        console.log(`email: ${email}`);
        console.log(`mysecret: ${hiddenField}`);

        // Clear form field values after form submission
        clearFields()
    });

    console.log("DOM Content Loaded");
})