# added refresh button in heading of modal

                    <button type="button" class="pdfRefresh"><i class="bi bi-arrow-clockwise"></i></button>


added refresh function in open modal function
modified google url in open modal function


            // Clear the iframe content before setting the new source
            var iframe = document.getElementById("myframe");
            iframe.src = ''; // Clear iframe content to avoid showing old content
            iframe.src = googleDocsURL; // Set the new content



            // Set modal title
            var modalTitle = this.getAttribute('data-id');
            document.getElementById("modalTitle").innerText = modalTitle;

            // Update download button text
            var downloadButton = document.getElementById("modalDownload");
            downloadButton.textContent = "Download";
            downloadButton.setAttribute("onclick", "downloadFiles(['" + linkKey + "'], this)");

            // Store the current link for refresh purpose
            var refreshButton = document.querySelector(".pdfRefresh");
            refreshButton.setAttribute("data-link", googleDocsURL); // Set data-link to the refresh button
        });
    });

    // Handle the .pdfRefresh button click
    var refreshButton = document.querySelector(".pdfRefresh");
    refreshButton.addEventListener("click", function () {
        var googleDocsURL = this.getAttribute("data-link");
        if (googleDocsURL) {
            document.getElementById("myframe").src = googleDocsURL;
        } else {
            console.error("No URL found to refresh.");
        }
    });
});





previous modal
<div class="modal" id="myModal">
        <div class="modal-dialog pdfModalDialog" role="document">
            <div class="modal-content" style="height: 95vh;">
                <!-- Modal Header -->
                <div class="modal-header">
                    <span class="modal-title text-center" id="modalTitle">Modal Heading</span>
                    <button type="button" class="pdfRefresh"><i class="bi bi-arrow-clockwise"></i></button>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <!-- <p class="text-center">If you don't see your preferred content then you can close this popup and click the preview button again.</p> -->
                    <!-- badges -->
                    <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
                        <a href="https://bibekchandsah.github.io/bibek"><img class="rounded-circle me-1 logoImage" width="26" height="26" src="#" alt="logo">😜</a></span>
                    <iframe src="" width="100%" height="100%" id="myframe"></iframe>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" id="modalDownload" onclick="downloadFiles(['try'], this)">Download</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal" id="myModal">
        <div class="modal-dialog pdfModalDialog" role="document">
            <div class="modal-content" style="height: 95vh;">
                <!-- Modal Header -->
                <div class="modal-header">
                    <span class="modal-title text-center" id="modalTitle">Modal Heading</span>
                    <button type="button" class="pdfRefresh"><i class="bi bi-arrow-clockwise"></i></button>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <!-- <p class="text-center">If you don't see your preferred content then you can close this popup and click the preview button again.</p> -->
                    <!-- badges -->
                    <span class="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill">
                        <a href="https://bibekchandsah.github.io/bibek"><img class="rounded-circle me-1 logoImage" width="26" height="26" src="#" alt="logo">😜</a></span>
                    <iframe src="" width="100%" height="100%" id="myframe"></iframe>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm download-file toast-trigger" id="modalDownload" onclick="downloadFiles(['try'], this)">Download</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>