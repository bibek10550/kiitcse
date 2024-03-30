const fileUrls5thPYQs = {
    // sample
    // "dbms_solution_spring_end_semester_2023": ['https://raw.githubusercontent.com/bibek10550/files/main/trash/bin/download/KIIT%202022/B.Tech%204th%20semester/DBMS/PYQS/DBMS%20Solution%20(Spring%20End%20sem%202023).doc'],



    // BD = Big Data
    "BD_PYQs_2022_Spring_End_Semester": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/BD/PYQs/2022%20Spring%20%20End%20%20Semester.pdf"],

    "BD_PYQs_2023_Autumn_Mid_Semester": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/BD/PYQs/2023%20Autumn%20%20Mid%20Semester.pdf"],

    "BD_PYQs_2023_Spring_End_Semester": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/BD/PYQs/2023%20Spring%20End%20Semester.pdf"],

    "BD_PYQs_2023_Sring_Mid_Semester": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/BD/PYQs/2023%20Sring%20Mid%20Semester.pdf"],

    // DataMIning Data Warehousing
    "DMDW_PYQs_2015_Autumn_End_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2015%20Autumn%20End%20Sem.PDF"],

    "DMDW_PYQs_2015_Autumn_Mid_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2015%20Autumn%20Mid%20Sem.pdf"],

    "DMDW_PYQs_2015_Spring_End_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2015%20Spring%20End%20Sem.PDF"],

    "DMDW_PYQs_2016_Autumn_End_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2016%20Autumn%20End%20Sem.pdf"],

    "DMDW_PYQs_2016_Spring_End_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2016%20Spring%20End%20Sem.pdf"],

    "DMDW_PYQs_2016_Spring_Mid_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2016%20Spring%20Mid%20Sem.pdf"],

    "DMDW_PYQs_2018_Autumn_Mid_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2018%20Autumn%20Mid%20Sem.pdf"],

    "DMDW_PYQs_2018_Spring_End_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2018%20Spring%20End%20Sem.pdf"],

    "DMDW_PYQs_2019_Spring_Mid_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/2019%20Spring%20Mid%20Sem.pdf"],

    "DMDW_PYQs_DMDW_Ques_Bank": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/PYQs/DMDW%20Ques%20Bank.pdf"],


    // HPC = High Performance Computer
    "HPC_PYQs_2020_Online_Autumn_End_Sem_Soln": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/HPC/PYQs/2020%20(Online)%20Autumn%20End%20Sem%20Soln.pdf"],

    "HPC_PYQs_2021_Online_Autumn_End_Sem": ["https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/HPC/PYQs/2021%20(Online)%20Autumn%20End%20Sem.pdf"],



    // Add more file URLs here
};


const folderUrls5thPYQs = {
    // https://api.github.com/repos/bibek10550/
    // dbms: 'https://api.github.com/repos/bibek10550/files/contents/trash/bin/download/KIIT%202022/B.Tech%204th%20semester/DBMS/PYQS',


    // Add more folder URLs here
};




// pdf preview
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".clickLink");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var linkKey = this.getAttribute('data-id');
            let link;
            // if (fileUrls[linkKey]) {
            //     link = fileUrls[linkKey][0];}
            if (fileUrls5thPYQs[linkKey]) {
                link = fileUrls5thPYQs[linkKey][0];
            } else {
                console.error("URL not found for key: " + linkKey);
                return;
            }

            // Check if the URL is from GitHub and contains "blob"
            if (link.includes("github.com") && link.includes("blob")) {
                // Replace "blob" with "raw"
                link = link.replace("blob", "raw");
            }

            // var googleDocsURL = "https://docs.google.com/gview?url=" + encodeURIComponent(link) + "&embedded=true";
            // document.getElementById("myframe").src = googleDocsURL;

            // If the URL is not from GitHub, keep it unchanged
            var googleDocsURL;
            if (link.includes("github.com")) {
                googleDocsURL = "https://docs.google.com/gview?url=" + encodeURIComponent(link) + "&embedded=true";
            } else {
                googleDocsURL = link;
            }
            document.getElementById("myframe").src = googleDocsURL;

            // Set modal title
            var modalTitle = this.getAttribute('data-id');
            document.getElementById("modalTitle").innerText = modalTitle;

            // Update download button text
            var downloadButton = document.getElementById("modalDownload");
            downloadButton.textContent = "Download";
            downloadButton.setAttribute("onclick", "downloadFiles(['" + linkKey + "'], this)");
        });
    });
});









// store the subject data
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
    // BD = Big Data 
    "BD", 2022, "Mid Semester", "Spring End Semester", "BD_PYQs_2022_Spring_End_Semester", "", "Not Available", "BD_PYQs_2022_Spring_End_Semester",
    "BD", 2023, "Mid Semester", "Autumn Mid Semester", "BD_PYQs_2023_Autumn_Mid_Semester", "", "Not Available", "BD_PYQs_2023_Autumn_Mid_Semester",
    "BD", 2023, "End Semester", "Spring End Semester", "BD_PYQs_2023_Spring_End_Semester", "", "Not Available", "BD_PYQs_2023_Spring_End_Semester",
    "BD", 2023, "Mid Semester", "Spring Mid Semester", "BD_PYQs_2023_Sring_Mid_Semester", "", "Not Available", "BD_PYQs_2023_Sring_Mid_Semester",

    // DMDW = Data Mining & Data Warehousing
    "DMDW", 2015, "End Semester", "Autumn End Semester", "DMDW_PYQs_2015_Autumn_End_Sem", "", "Not Available", "DMDW_PYQs_2015_Autumn_End_Sem",
    "DMDW", 2015, "Mid Semester", "Autumn Mid Semester", "DMDW_PYQs_2015_Autumn_Mid_Sem", "", "Not Available", "DMDW_PYQs_2015_Autumn_Mid_Sem",
    "DMDW", 2015, "End Semester", "Spring End Semester", "DMDW_PYQs_2015_Spring_End_Sem", "", "Not Available", "DMDW_PYQs_2015_Spring_End_Sem",
    "DMDW", 2016, "End Semester", "Autumn End Semester", "DMDW_PYQs_2016_Autumn_End_Sem", "", "Not Available", "DMDW_PYQs_2016_Autumn_End_Sem",
    "DMDW", 2016, "End Semester", "Spring End Semester", "DMDW_PYQs_2016_Spring_End_Sem", "", "Not Available", "DMDW_PYQs_2016_Spring_End_Sem",
    "DMDW", 2016, "Mid Semester", "Spring Mid Semester", "DMDW_PYQs_2016_Spring_Mid_Sem", "", "Not Available", "DMDW_PYQs_2016_Spring_Mid_Sem",
    "DMDW", 2018, "Mid Semester", "Autumn Mid Semester", "DMDW_PYQs_2018_Autumn_Mid_Sem", "", "Not Available", "DMDW_PYQs_2018_Autumn_Mid_Sem",
    "DMDW", 2018, "End Semester", "Spring End Semester", "DMDW_PYQs_2018_Spring_End_Sem", "", "Not Available", "DMDW_PYQs_2018_Spring_End_Sem",
    "DMDW", 2019, "Mid Semester", "Spring Mid Semester", "DMDW_PYQs_2019_Spring_Mid_Sem", "", "Not Available", "DMDW_PYQs_2019_Spring_Mid_Sem",
    "DMDW", "", "End Semester", "Question bank", "DMDW_PYQs_DMDW_Ques_Bank", "Other", "Available", "DMDW_PYQs_DMDW_Ques_Bank",

    // HPC = High Performance Computer
    "HPC", 2020, "End Semester", "Autumn End Semester", "HPC_PYQs_2020_Online_Autumn_End_Sem_Soln", "Solution", "Available", "HPC_PYQs_2020_Online_Autumn_End_Sem_Soln",
    "HPC", 2021, "End Semester", "Autumn End Semester", "HPC_PYQs_2021_Online_Autumn_End_Sem", "", "Not Available", "HPC_PYQs_2021_Online_Autumn_End_Sem",



);
// Call the function to generate table rows based on existing subject data
generateTableRows();
// Accessing the JSON object:
// // console.log(subjectData);