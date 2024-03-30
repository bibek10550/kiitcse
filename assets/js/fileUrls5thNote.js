const fileUrls5thNote = {
    // https://raw.githubusercontent.com/bibek10550
    // "dbms_solution_spring_end_semester_2023": ['https://raw.githubusercontent.com/bibek10550/files/main/trash/bin/download/KIIT%202022/B.Tech%204th%20semester/DBMS/PYQS/DBMS%20Solution%20(Spring%20End%20sem%202023).doc'],

    // CN = Computer Network
    "CN_Computer_Network": ['https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/CN/Complete%20CN.pdf'],

    // Cryptography
    "Cryptography_Cryptography": ['https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/Cryptography/Cryptography%20Full%20Slides.pdf'],

    // DMDW =DataMining Data Warehousing
    "DMDW_DataMining_DataWarehousing": ['https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/DM%26DW/DMDW%20Full%20notes%20.pdf'],

    // HPC = High Performance Computer
    "HPC_High_Performance_Computer": ['https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/HPC/HPC%20Slides.pdf'],

    // SE = Software Engineering
    "SE_Software_Engineering": ['https://github.com/bibek10550/files/blob/main/trash/bin/download/KIIT%202022/B.Tech%205th%20semester/SE/SE%20Slides.pdf'],




    // Add more file URLs here
};


const folderUrls5thNote = {
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
            if (fileUrls5thNote[linkKey]) {
                link = fileUrls5thNote[linkKey][0];
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









// Note Data:
updateSubjectNoteData(
    // Computer Network
    "Computer Network", "Complete Pdf", "CN_Computer_Network",

    // Cryptography
    "Cryptography", "Full Slides", "Cryptography_Cryptography",

    // Data Mining Data Warehousing
    "Data Mining Data Warehousing", "Full notes", "DMDW_DataMining_DataWarehousing",

    // High Performance Computer
    "High Performance Computer", "Slides", "HPC_High_Performance_Computer",

    // Software Engineering
    "Software Engineering", "Slides", "SE_Software_Engineering",

    // Artificial Intelligence


    // Design & Analysis of Algorithm

    // Computational Intelligence

    // Big Data

);

// Call the function to generate table rows based on existing data
generateNoteTableRows();

// Accessing the object:
// console.log(subjectNoteData);