//your JS code here. If required.
 document.getElementByClassName('form-group').addEventListener('Add Book', function(event) {
            event.preventDefault();

            // Get input values
            let title = document.getElementById('title').value.trim();
            let author = document.getElementById('author').value.trim();
            let isbn = document.getElementById('isbn').value.trim();

            if (name === "" || author === "" || isbn === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Create a new row
            let table = document.getElementsByClassName('table table-striped').getElementsByTagName('tbody')[0];
            let newRow = table.insertRow();

            // Insert cells
            newRow.insertCell(0).innerText = title;
            newRow.insertCell(1).innerText = author;
            newRow.insertCell(2).innerText = isbn;

            // Create and append the Clear button
            let actionCell = newRow.insertCell(3);
            let clearButton = document.createElement('button');
            clearButton.innerText = 'x';
            clearButton.className = 'delete';
            clearButton.addEventListener('click', function() {
                table.deleteRow(newRow.rowIndex - 1);
            });

            actionCell.appendChild(clearButton);

            // Clear the form inputs
            document.getElementById('form-group').reset();
        });