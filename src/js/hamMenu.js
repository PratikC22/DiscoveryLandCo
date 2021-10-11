let dropDownIcon = document.getElementById('dropDownIcon');
let hide = document.getElementById('hide');

dropDownIcon.addEventListener('onclick', dropDownMenu());

function dropDownMenu() {
    console.log(hide);
    const html = `<div class="main-container">
        <div class="nav-container">
            <div class="hamlogo">
                <img class="hamlogo" id="hlogo" src="../assets/logo1.svg" alt="">
            </div>
            <div class="cross-img">
                <input type="image" src="../assets/hamMenu.jpg" alt="" id="closeButton" onclick="getElementById('hambergMenu').innerHTML =''">
            </div>
        </div>
        <div class="contents">
            <a class="menulinks" id="l1" href="#">Magazine</a>
            <a class="menulinks" id="l2" href="#">Company</a>
            <a class="menulinks" id="l3" href="#">Foundation</a>
            <a class="menulinks" id="l4" href="#">Careers</a>
            <a class="menulinks" id="l5" href="#">Contact</a>
        </div>
    </div>`
    const div = document.getElementById("hambergMenu");
    div.innerHTML = html;
}