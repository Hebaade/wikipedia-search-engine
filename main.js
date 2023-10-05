let container = document.getElementById("container");
let input = document.getElementById("input");
if (input.value === "") {
    container.innerHTML = "<p>search about any thing</p>.";
}

input.onkeyup = () => {
        container.innerHTML = "";
        fetch(
            "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=" +
            input.value
        )
            .then((res) => res.json())
            .then((data) => {
                let result = data.query.search;
                let resultLength = result.length;
                for (let i = 0; i < resultLength; i++) {
                    let div = document.createElement("div");
                    div.className = "result";
                    div.innerHTML = `
                 <div>
                 <h3>${result[i].title}</h3>
                 <p>${result[i].snippet}</p>
                 </div>
                <a href="https://en.wikipedia.org/?curid=${result[i].pageid}" target="_blank">Read More</a>`;

                    container.appendChild(div);
                }
            });
    };
