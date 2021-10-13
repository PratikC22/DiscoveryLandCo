let dropDownIcon = document.getElementById('dropDownIcon');
let hide = document.getElementById('hide');

dropDownIcon.addEventListener('onclick', dropDownMenu());

function dropDownMenu() {
    console.log(hide);
    const html = `<div class="main-container" data-aos="fade-down" data-aos-duration="2000">
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
        <div class="hamLinks">
                <div class="hamitem"><a class="navlink-anchor" href="./aboutDLC.html"> About DLC </a></div>
                <div class="hamitem"><a class="navlink-anchor" href="./ourWorlds.html"> Our Worlds </a> </div>
                <div class="hamitem"><a class="navlink-anchor" href="./experiences.html"> Experiences </a> </div>
                <div class="hamitem"><a class="navlink-anchor" href="./gallery.html"> Gallery </a> </div>
                <div class="hamitem"><a class="navlink-anchor" href="./press.html"> Press </a></div>
            </div>
    </div>`
    const div = document.getElementById("hambergMenu");
    div.innerHTML = html;
}