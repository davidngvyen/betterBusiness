document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('customerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values from the form
        const fName = document.getElementById('fName').value;
        const lName = document.getElementById('lName').value;
        const pNum = document.getElementById('pNum').value;
        const price = document.getElementById('price').value;
        const style = document.getElementById('style').value;

        // Create a new result element
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `<p>Full Name: ${fName} ${lName}</p>
                               <p>First Name: ${fName}</p>
                               <p>Last Name: ${lName}</p>
                               <p>Phone Number: ${pNum}</p>
                               <p>Price: ${price}</p>
                               <p>Style: ${style}</p>`;

        // Append the new result to the form container
        document.getElementById('form-container').appendChild(resultDiv);
    });
});
