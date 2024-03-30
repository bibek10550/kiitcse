// Initialize an empty JSON object to store the data
let subjectData = {};

// Function to update the JSON object with new data
function updateSubjectData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 8) {
        let subject = entries[i];
        let year = entries[i + 1];
        let exam = entries[i + 2];
        let question = entries[i + 3];
        let questionValue = entries[i + 4];
        let solution = entries[i + 5];
        let solutionStatus = entries[i + 6];
        let solutionValue = entries[i + 7];

        // Check if the subject already exists in the JSON object
        if (!subjectData.hasOwnProperty(subject)) {
            // If not, initialize it with an empty array
            subjectData[subject] = [];
        }

        // Push new data to the array corresponding to the subject
        subjectData[subject].push({
            "year": year,
            "exam": exam,
            "question": question,
            "question-value": questionValue,
            "solution": solution,
            "solution-status": solutionStatus,
            "solution-value": solutionValue
        });
    }
}

// Clear the existing data in subjectData (assuming it's an object)
subjectData = {};

// Example usage:
updateSubjectData(
    "BD", 2022, "Mid Semester", "Spring End Semester", "BD_PYQs_2022_Spring_End_Semester", "Solution", "Available", "DMDW_PYQs_2015_Autumn_End_Semester_Soln",
    "DMDW", 2015, "End Semester", "Autumn End Semester", "DMDW_PYQs_2015_Autumn_End_Semester_Soln", "", "Not Available", "DMDW_PYQs_2015_Autumn_End_Semester_Soln",
    "BD", 2022, "Mid Semester", "Spring End Semester", "BD_PYQs_2022_Spring_End_Semester", "Solution", "Available", "BD_PYQs_2022_Spring_End_Semester",
);

// Call the function to generate table rows based on existing subject data
generateTableRows();


// // Accessing the JSON object:
// // console.log(subjectData);





// Function to generate HTML table rows based on subject data
function generateTableRows() {
    // Get the table body element where rows will be appended
    let tableBody = document.querySelector('#dataTable tbody');

    // Clear existing rows if any
    tableBody.innerHTML = '';

    // Loop through each subject in the subjectData object
    for (let subject in subjectData) {
        // Loop through each entry for the current subject
        subjectData[subject].forEach(entry => {
            // Create a new table row
            let newRow = document.createElement('tr');

            // Set data attributes for the row
            newRow.setAttribute('data-subject', subject);
            newRow.setAttribute('data-year', entry.year);
            newRow.setAttribute('data-exam', entry.exam);
            newRow.setAttribute('data-paper', entry['solution']);

            // Fill in the row with data
            newRow.innerHTML = `
                <th scope="row">${subject}</th>
                <td>${entry.year}</td>
                <td>${entry.exam}</td>
                <td class="download_section align-middle">${entry.question} 
                    <div class="btn-group" role="group" aria-label="Download Section">
                        <button type="button" class="clickLink btn btn-primary btn-sm modalToast-trigger" data-toggle="modal" href="#myModal" data-id="${entry['question-value']}">Preview</button>
                        <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" onclick="downloadFiles(['${entry['question-value']}'], this)">Download</button>
                    </div>
                </td>
                
                <td class="solution_sections">
                    <span>${entry['solution-status']}</span>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="clickLink btn btn-primary btn-sm modalToast-trigger" data-toggle="modal" href="#myModal" data-id="${entry['solution-value']}">Preview</button>
                        <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" onclick="downloadFiles(['${entry['solution-value']}'], this)">Download</button>
                    </div>
                </td>
            `;

            // Append the new row to the table body
            tableBody.appendChild(newRow);
        });
    }
}

// Call the function to generate table rows based on existing subject data
generateTableRows();

// Accessing the JSON object:
// console.log(subjectData);


















// Initialize an empty JSON object to store the data
let subjectNoteData = {};

// Function to update the JSON object with new data
function updateSubjectNoteData(...entries) {
    // Loop through each entry in the arguments
    for (let i = 0; i < entries.length; i += 3) {
        let subjectNote = entries[i];
        let topic = entries[i + 1];
        let topicValue = entries[i + 2];

        // Check if the subject already exists in the JSON object
        if (!subjectNoteData.hasOwnProperty(subjectNote)) {
            // If not, initialize it with an empty array
            subjectNoteData[subjectNote] = [];
        }

        // Push new data to the array corresponding to the subject
        subjectNoteData[subjectNote].push({
            "topic": topic,
            "topicValue": topicValue
        });
    }
}

// Example usage:
updateSubjectNoteData(
    "Cloud Computing", "Full Slides", "CC_Full_Slides",
    "Data Analysis", "Chapter II Describing the Distribution of a Variable", "DA_Chapter_II_Describing_the_Distribution_of_a_Variable",
);

// Accessing the JSON object:
// console.log(subjectData);











// Function to generate Note table rows based on subject data
function generateNoteTableRows() {
    // Get the table body element where rows will be appended
    let tableBody = document.querySelector('#dataTable tbody');

    // Clear existing rows if any
    // tableBody.innerHTML = '';

    // Loop through each subject in the subjectData object
    for (let subjectNote in subjectNoteData) {
        // Loop through each entry for the current subject
        subjectNoteData[subjectNote].forEach(entry => {
            // Create a new table row
            let newRow = document.createElement('tr');

            // Set data attributes for the row
            newRow.setAttribute('data-subject', subjectNote);

            // Fill in the row with data
            newRow.innerHTML = `
                <th scope="row">${subjectNote}</th>
                <td class="download_section align-middle">${entry.topic} 
                    <div class="btn-group" role="group" aria-label="Download Section">
                        <button type="button" class="clickLink btn btn-primary btn-sm modalToast-trigger" data-toggle="modal" href="#myModal" data-id="${entry['topicValue']}">Preview</button>
                        <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" onclick="downloadFiles(['${entry['topicValue']}'], this)">Download</button>
                    </div>
                </td>
            `;

            // Append the new row to the table body
            tableBody.appendChild(newRow);
        });
    }
}

// Call the function to generate table rows based on existing subject data
generateNoteTableRows();

// Accessing the JSON object:
// console.log(subjectData);


