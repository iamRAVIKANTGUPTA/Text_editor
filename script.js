const editor = document.getElementById("editor");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underlineButton = document.getElementById("underline");
const clearButton = document.getElementById("clear");
const saveButton = document.getElementById("save");
const openInput = document.getElementById("open");
const copyButton = document.getElementById("copy");

boldButton.addEventListener("click", () => {
    document.execCommand("bold", false, null);
});

italicButton.addEventListener("click", () => {
    document.execCommand("italic", false, null);
});

underlineButton.addEventListener("click", () => {
    document.execCommand("underline", false, null);
});

clearButton.addEventListener("click", () => {
    editor.innerHTML = "";
});

saveButton.addEventListener("click", () => {
    const textToSave = editor.innerHTML;
    const blob = new Blob([textToSave], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "document.txt";
    a.click();
    URL.revokeObjectURL(url);
});

copyButton.addEventListener("click", () => {
    const textToCopy = editor.innerHTML;
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
});

openInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        editor.innerHTML = e.target.result;
    };
    reader.readAsText(file);
});
