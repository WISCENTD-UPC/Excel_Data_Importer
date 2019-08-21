function handleZipFiles() {
    var fileInput = document.getElementById("file-input");
    var unzipProgress = document.createElement("progress");
    var fileList = document.getElementById("file-list");
    var creationMethodInput = document.getElementById("creation-method-input");

    if (typeof requestFileSystem == "undefined")
        creationMethodInput.options.length = 1;
    fileInput.addEventListener(
        "change",
        function() {
            fileInput.disabled = true;
            model.getEntries(fileInput.files[0], function(entries) {
                fileList.innerHTML = "";
                entries.forEach(function(entry) {
                    var li = document.createElement("li");
                    var a = document.createElement("a");
                    a.textContent = entry.filename;
                    a.href = "#";
                    a.addEventListener(
                        "click",
                        function(event) {
                            if (!a.download) {
                                download(entry, li, a);
                                event.preventDefault();
                                return false;
                            }
                        },
                        false
                    );
                    li.appendChild(a);
                    fileList.appendChild(li);
                });
            });
        },
        false
    );
}

function download(entry, li, a) {
    model.getEntryFile(
        entry,
        creationMethodInput.value,
        function(blobURL) {
            var clickEvent = document.createEvent("MouseEvent");
            if (unzipProgress.parentNode)
                unzipProgress.parentNode.removeChild(unzipProgress);
            unzipProgress.value = 0;
            unzipProgress.max = 0;
            clickEvent.initMouseEvent(
                "click",
                true,
                true,
                window,
                0,
                0,
                0,
                0,
                0,
                false,
                false,
                false,
                false,
                0,
                null
            );
            a.href = blobURL;
            a.download = entry.filename;
            a.dispatchEvent(clickEvent);
        },
        function(current, total) {
            unzipProgress.value = current;
            unzipProgress.max = total;
            li.appendChild(unzipProgress);
        }
    );
}
