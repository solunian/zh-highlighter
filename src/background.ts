export { };

console.log("works on this page")
document.addEventListener("selectionchange", (event) => {
    let selection: Selection = document.getSelection()
    console.log(selection.toString());
});