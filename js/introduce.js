function submitGuestBook() {
    // TODO 이름이 비어있는 경우 alert
    let $name = document.getElementById("name");
    let $checkboxs = document.getElementsByName("movie");
    let checkboxsLength = $checkboxs.length;
    let checkedCount = 0;
    for (i = 0; i < checkboxsLength; i++) {
        let checkbox = $checkboxs[i];
        if (checkbox.checked) {
            checkedCount++;
        }
    }
    alert($name.value + "님, 저와 " + checkedCount + "개의 취향이 같으시네요!");
}