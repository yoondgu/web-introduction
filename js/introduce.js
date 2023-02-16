function submitGuestBook() {
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("이름을 입력해주세요.");
        return;
    }

    let $checkboxs = document.getElementsByName("movie");
    let checkedCount = 0;
    let checkedMovieNames = [];
    for (i = 0; i < $checkboxs.length; i++) {
        let checkbox = $checkboxs[i];
        if (checkbox.checked) {
            checkedMovieNames.push("<" + checkbox.value + ">");
            checkedCount++;
        }
    }
    alert(name + "님, 저와 " + checkedCount + "개의 취향이 같으시네요!");
    addGuestBookHistory(name, checkedMovieNames);
 }

function addGuestBookHistory(name, checkedMovieNames) {
   let guestBookHistoryTable = document.getElementById("guestbook-history-table");
    guestBookHistoryTable.innerHTML = guestBookHistoryTable.innerHTML + generateGuestBookMessage(name, checkedMovieNames);
}

function generateGuestBookMessage(name, checkedMovieNames) {
    let likedMoviesSentence = checkedMovieNames.join(",") +"를 좋아해요.";
    if (checkedMovieNames.length == 0) {
        likedMoviesSentence = "취향이 같은 영화가 없어요.";
    }
    let newGuestElement = "<tr>"
        + "<td>"+ name + "</td>"
        + "<td>"+ likedMoviesSentence + "</td>"
        + "</tr>";
    return newGuestElement;
}