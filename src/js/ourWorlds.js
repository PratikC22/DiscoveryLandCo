window.addEventListener('DOMContentLoaded', function () {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status === 200) {
            try {
                const resObj = JSON.parse(this.responseText);
                let html = "";
                resObj.map((element) => {
                    console.log(element.imageUrl);
                    html += `<div class="card">
                                <img class="card-img" id="imgId" src=${element.imageUrl} alt=""/>
                                <div>
                                    <p class="titleText" id="text-id1">${element.name}</p>
                                    <p class="descriptionText">${element.location}</p>
                                </div>
                            </div>`
                });
                const div = document.getElementById('container-id');
                div.innerHTML = html;
                console.log("type of html ", typeof html);
            } catch (err) {
                console.warn('There was an error in the json');
            }
        } else {
            console.warn('Did not receive 200 OK from response');
        }
    };

    xhr.open('get', '../../mockapi.json');
    xhr.send();
});

