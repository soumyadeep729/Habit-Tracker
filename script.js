let habitList = document.getElementById("habitList");

function addHabit() {
    let input = document.getElementById("habitInput");
    let habitText = input.value.trim();

    if (habitText === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = habitText;

    let checkBtn = document.createElement("button");
    checkBtn.innerText = "✔️";
    checkBtn.onclick = () => span.classList.toggle("completed");

    let delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(checkBtn);
    li.appendChild(delBtn);
    habitList.appendChild(li);

    input.value = "";
}
