// Player class for storing different parameters related directly with player
class player {
    constructor(score,att){
        this.score = score;
        this.attempt = att;
        this.playerMode;
    }
}

let quesArr; // Stores the 4 options to be displayed during a question
let rightAnswer; // Stores the right answer to current question
let p1 = new player(0,0); // New player initialisation

// Data with country name and their image URL
let dataArray = [
{
    name: "Afghanistan",
    src: "assets/data/afghanistan.png"
},
{
    name: "Albania",
    src: "assets/data/albania.png"
},
{
    name: "Algeria",
    src: "assets/data/algeria.png"
},
{
    name: "Andorra",
    src: "assets/data/andorra.png"
},
{
    name: "Angola",
    src: "assets/data/angola.png"
},
{
    name: "Antigua And Barbuda",
    src: "assets/data/antigua_and_barbuda.png"
},
{
    name: "Argentina",
    src: "assets/data/argentina.png"
},
{
    name: "Armenia",
    src: "assets/data/armenia.png"
},
{
    name: "Australia",
    src: "assets/data/australia.png"
},
{
    name: "Austria",
    src: "assets/data/austria.png"
},
{
    name: "Azerbaijan",
    src: "assets/data/azerbaijan.png"
},
{
    name: "Bahamas",
    src: "assets/data/bahamas.png"
},
{
    name: "Bahrain",
    src: "assets/data/bahrain.png"
},
{
    name: "Bangladesh",
    src: "assets/data/bangladesh.png"
},
{
    name: "Barbados",
    src: "assets/data/barbados.png"
},
{
    name: "Belarus",
    src: "assets/data/belarus.png"
},
{
    name: "Belgium",
    src: "assets/data/belgium.png"
},
{
    name: "Belize",
    src: "assets/data/belize.png"
},
{
    name: "Benin",
    src: "assets/data/benin.png"
},
{
    name: "Bhutan",
    src: "assets/data/bhutan.png"
},
{
    name: "Bolivia",
    src: "assets/data/bolivia.png"
},
{
    name: "Bosnia And Herzegovina",
    src: "assets/data/bosnia_and_herzegovina.png"
},
{
    name: "Botswana",
    src: "assets/data/botswana.png"
},
{
    name: "Brazil",
    src: "assets/data/brazil.png"
},
{
    name: "Brunei",
    src: "assets/data/brunei.png"
},
{
    name: "Bulgaria",
    src: "assets/data/bulgaria.png"
},
{
    name: "Burkina Faso",
    src: "assets/data/burkina_faso.png"
},
{
    name: "Burundi",
    src: "assets/data/burundi.png"
},
{
    name: "Cambodia",
    src: "assets/data/cambodia.png"
},
{
    name: "Cameroon",
    src: "assets/data/cameroon.png"
},
{
    name: "Canada",
    src: "assets/data/canada.png"
},
{
    name: "Cape Verde",
    src: "assets/data/cape_verde.png"
},
{
    name: "Central African Republic",
    src: "assets/data/central_african_republic.png"
},
{
    name: "Chad",
    src: "assets/data/chad.png"
},
{
    name: "Chile",
    src: "assets/data/chile.png"
},
{
    name: "Colombia",
    src: "assets/data/colombia.png"
},
{
    name: "Cook Islands",
    src: "assets/data/cook_islands.png"
},
{
    name: "Costa Rica",
    src: "assets/data/costa_rica.png"
},
{
    name: "Cote D'ivoire",
    src: "assets/data/Cote_divoire.png"
},
{
    name: "Croatia",
    src: "assets/data/croatia.png"
},
{
    name: "Cuba",
    src: "assets/data/cuba.png"
},
{
    name: "Cyprus",
    src: "assets/data/cyprus.png"
},
{
    name: "Czech Republic",
    src: "assets/data/czech_republic.png"
},
{
    name: "Democratic Republic of The Congo",
    src: "assets/data/democratic_republic_of_the_congo.png"
},
{
    name: "Denmark",
    src: "assets/data/denmark.png"
},
{
    name: "Djibouti",
    src: "assets/data/djibouti.png"
},
{
    name: "Dominica",
    src: "assets/data/dominica.png"
},
{
    name: "Dominican Republic",
    src: "assets/data/dominican_republic.png"
},
{
    name: "East Timor",
    src: "assets/data/east_timor.png"
},
{
    name: "Ecuador",
    src: "assets/data/ecuador.png"
},
{
    name: "Egypt",
    src: "assets/data/egypt.png"
},
{
    name: "El Salvador",
    src: "assets/data/el_salvador.png"
},
{
    name: "Equatorial Guinea",
    src: "assets/data/equatorial_guinea.png"
},
{
    name: "Eritrea",
    src: "assets/data/eritrea.png"
},
{
    name: "Estonia",
    src: "assets/data/estonia.png"
},
{
    name: "Ethiopia",
    src: "assets/data/ethiopia.png"
},
{
    name: "Fiji",
    src: "assets/data/fiji.png"
},
{
    name: "Finland",
    src: "assets/data/finland.png"
},
{
    name: "France",
    src: "assets/data/france.png"
},
{
    name: "Gabon",
    src: "assets/data/gabon.png"
},
{
    name: "Gambia",
    src: "assets/data/gambia.png"
},
{
    name: "Georgia",
    src: "assets/data/georgia.png"
},
{
    name: "Germany",
    src: "assets/data/germany.png"
},
{
    name: "Ghana",
    src: "assets/data/ghana.png"
},
{
    name: "Greece",
    src: "assets/data/greece.png"
},
{
    name: "Grenada",
    src: "assets/data/grenada.png"
},
{
    name: "Guatemala",
    src: "assets/data/guatemala.png"
},
{
    name: "Guinea",
    src: "assets/data/guinea.png"
},
{
    name: "Guinea Bissau",
    src: "assets/data/guinea_bissau.png"
},
{
    name: "Guyana",
    src: "assets/data/guyana.png"
},
{
    name: "Haiti",
    src: "assets/data/haiti.png"
},
{
    name: "Honduras",
    src: "assets/data/honduras.png"
},
{
    name: "Hungary",
    src: "assets/data/hungary.png"
},
{
    name: "Iceland",
    src: "assets/data/iceland.png"
},
{
    name: "India",
    src: "assets/data/india.png"
},
{
    name: "Indonesia",
    src: "assets/data/indonesia.png"
},
{
    name: "Iran",
    src: "assets/data/iran.png"
},
{
    name: "Iraq",
    src: "assets/data/iraq.png"
},
{
    name: "Ireland",
    src: "assets/data/ireland.png"
},
{
    name: "Israel",
    src: "assets/data/israel.png"
},
{
    name: "Italy",
    src: "assets/data/italy.png"
},
{
    name: "Jamaica",
    src: "assets/data/jamaica.png"
},
{
    name: "Japan",
    src: "assets/data/japan.png"
},
{
    name: "Jordan",
    src: "assets/data/jordan.png"
},
{
    name: "Kazakhstan",
    src: "assets/data/kazakhstan.png"
},
{
    name: "Kenya",
    src: "assets/data/kenya.png"
},
{
    name: "Kirbati",
    src: "assets/data/kirbati.png"
},
{
    name: "Kosovo",
    src: "assets/data/kosovo.png"
},
{
    name: "Kuwait",
    src: "assets/data/kuwait.png"
},
{
    name: "Kyrgyzstan",
    src: "assets/data/kyrgyzstan.png"
},
{
    name: "Laos",
    src: "assets/data/laos.png"
},
{
    name: "Latvia",
    src: "assets/data/latvia.png"
},
{
    name: "Lebanon",
    src: "assets/data/lebanon.png"
},
{
    name: "Lesotho",
    src: "assets/data/lesotho.png"
},
{
    name: "Liberia",
    src: "assets/data/liberia.png"
},
{
    name: "Libya",
    src: "assets/data/libya.png"
},
{
    name: "Liechtenstein",
    src: "assets/data/liechtenstein.png"
},
{
    name: "Lithuania",
    src: "assets/data/lithuania.png"
},
{
    name: "Luxemborg",
    src: "assets/data/luxemborg.png"
},
{
    name: "Macedonia",
    src: "assets/data/macedonia.png"
},
{
    name: "Madagascar",
    src: "assets/data/madagascar.png"
},
{
    name: "Malawi",
    src: "assets/data/malawi.png"
},
{
    name: "Malaysia",
    src: "assets/data/malaysia.png"
},
{
    name: "Maldives",
    src: "assets/data/maldives.png"
},
{
    name: "Mali",
    src: "assets/data/mali.png"
},
{
    name: "Malta",
    src: "assets/data/malta.png"
},
{
    name: "Marshall Islands",
    src: "assets/data/marshall_islands.png"
},
{
    name: "Mauritania",
    src: "assets/data/mauritania.png"
},
{
    name: "Mauritius",
    src: "assets/data/mauritius.png"
},
{
    name: "Mexico",
    src: "assets/data/mexico.png"
},
{
    name: "Micronesia",
    src: "assets/data/micronesia.png"
},
{
    name: "Moldova",
    src: "assets/data/moldova.png"
},
{
    name: "Monaco",
    src: "assets/data/monaco.png"
},
{
    name: "Mongolia",
    src: "assets/data/mongolia.png"
},
{
    name: "Montenegro",
    src: "assets/data/montenegro.png"
},
{
    name: "Morocco",
    src: "assets/data/morocco.png"
},
{
    name: "Mozambique",
    src: "assets/data/mozambique.png"
},
{
    name: "Myanmar",
    src: "assets/data/myanmar.png"
},
{
    name: "Namibia",
    src: "assets/data/namibia.png"
},
{
    name: "Nauru",
    src: "assets/data/nauru.png"
},
{
    name: "Nepal",
    src: "assets/data/nepal.png"
},
{
    name: "Netherlands",
    src: "assets/data/netherlands.png"
},
{
    name: "New Zealand",
    src: "assets/data/new_zealand.png"
},
{
    name: "Nicaragua",
    src: "assets/data/nicaragua.png"
},
{
    name: "Niger",
    src: "assets/data/Niger.png"
},
{
    name: "Nigeria",
    src: "assets/data/nigeria.png"
},
{
    name: "Niue",
    src: "assets/data/niue.png"
},
{
    name: "North Korea",
    src: "assets/data/north_korea.png"
},
{
    name: "Norway",
    src: "assets/data/norway.png"
},
{
    name: "Oman",
    src: "assets/data/oman.png"
},
{
    name: "Pakistan",
    src: "assets/data/pakistan.png"
},
{
    name: "Palau",
    src: "assets/data/palau.png"
},
{
    name: "Panama",
    src: "assets/data/panama.png"
},
{
    name: "Papua New Guinea",
    src: "assets/data/papua_new_guinea.png"
},
{
    name: "Paraguay",
    src: "assets/data/paraguay.png"
},
{
    name: "People's Republic Of China",
    src: "assets/data/peoples_republic_of_china.png"
},
{
    name: "Peru",
    src: "assets/data/peru.png"
},
{
    name: "Philippines",
    src: "assets/data/philippines.png"
},
{
    name: "Poland",
    src: "assets/data/poland.png"
},
{
    name: "Portugal",
    src: "assets/data/portugal.png"
},
{
    name: "Qatar",
    src: "assets/data/qatar.png"
},
{
    name: "Republic Of China",
    src: "assets/data/republic_of_china.png"
},
{
    name: "Republic Of Congo",
    src: "assets/data/republic_of_congo.png"
},
{
    name: "Romania",
    src: "assets/data/romania.png"
},
{
    name: "Russia",
    src: "assets/data/russia.png"
},
{
    name: "Rwanda",
    src: "assets/data/rwanda.png"
},
{
    name: "Saint Kitts and Nevis",
    src: "assets/data/saint_kitts_and_nevis.png"
},
{
    name: "Saint Lucia",
    src: "assets/data/saint_lucia.png"
},
{
    name: "Saint Vincent and the Grenadines",
    src: "assets/data/saint_vincent_and_the_grenadines.png"
},
{
    name: "Samoa",
    src: "assets/data/samoa.png"
},
{
    name: "San Marino",
    src: "assets/data/san_marino.png"
},
{
    name: "Sao Tome and Principe",
    src: "assets/data/sao_tome_and_principe.png"
},
{
    name: "Saudi Arabia",
    src: "assets/data/saudi_arabia.png"
},
{
    name: "Senegal",
    src: "assets/data/senegal.png"
},
{
    name: "Serbia",
    src: "assets/data/serbia.png"
},
{
    name: "Seychelles",
    src: "assets/data/seychelles.png"
},
{
    name: "Sierra Leone",
    src: "assets/data/sierra_leone.png"
},
{
    name: "Singapore",
    src: "assets/data/singapore.png"
},
{
    name: "Slovakia",
    src: "assets/data/slovakia.png"
},
{
    name: "Slovenia",
    src: "assets/data/slovenia.png"
},
{
    name: "Solomon Islands",
    src: "assets/data/solomon_islands.png"
},
{
    name: "Somalia",
    src: "assets/data/somalia.png"
},
{
    name: "South Africa",
    src: "assets/data/south_africa.png"
},
{
    name: "South Korea",
    src: "assets/data/south_korea.png"
},
{
    name: "South Sudan",
    src: "assets/data/south_sudan.png"
},
{
    name: "Spain",
    src: "assets/data/spain.png"
},
{
    name: "Sri Lanka",
    src: "assets/data/srilanka.png"
},
{
    name: "Sudan",
    src: "assets/data/sudan.png"
},
{
    name: "Suriname",
    src: "assets/data/suriname.png"
},
{
    name: "Swaziland",
    src: "assets/data/swaziland.png"
},
{
    name: "Sweden",
    src: "assets/data/sweden.png"
},
{
    name: "Switzerland",
    src: "assets/data/switzerland.png"
},
{
    name: "Syria",
    src: "assets/data/syria.png"
},
{
    name: "Tajikistan",
    src: "assets/data/tajikistan.png"
},
{
    name: "Tanzania",
    src: "assets/data/tanzania.png"
},
{
    name: "Thailand",
    src: "assets/data/thailand.png"
},
{
    name: "The Comoros",
    src: "assets/data/the_comoros.png"
},
{
    name: "Togo",
    src: "assets/data/togo.png"
},
{
    name: "Tonga",
    src: "assets/data/tonga.png"
},
{
    name: "Trinidad And Tobago",
    src: "assets/data/trinidad_and_tobago.png"
},
{
    name: "Tunisia",
    src: "assets/data/tunisia.png"
},
{
    name: "Turkey",
    src: "assets/data/turkey.png"
},
{
    name: "Turkmenistan",
    src: "assets/data/turkmenistan.png"
},
{
    name: "Tuvalu",
    src: "assets/data/tuvalu.png"
},
{
    name: "Uganda",
    src: "assets/data/uganda.png"
},
{
    name: "Ukraine",
    src: "assets/data/ukraine.png"
},
{
    name: "United Arab Emirates",
    src: "assets/data/united_arab_emirates.png"
},
{
    name: "United Kingdom",
    src: "assets/data/united_kingdom.png"
},
{
    name: "United States",
    src: "assets/data/united_states.png"
},
{
    name: "Uruguay",
    src: "assets/data/uruguay.png"
},
{
    name: "Uzbekistan",
    src: "assets/data/uzbekistan.png"
},
{
    name: "Vanuatu",
    src: "assets/data/vanuatu.png"
},
{
    name: "Vatican City",
    src: "assets/data/vatican_city.png"
},
{
    name: "Venezuela",
    src: "assets/data/venezuela.png"
},
{
    name: "Vietnam",
    src: "assets/data/vietnam.png"
},
{
    name: "Western Sahara",
    src: "assets/data/western_sahara.png"
},
{
    name: "Yemen",
    src: "assets/data/yemen.png"
},
{
    name: "Zambia",
    src: "assets/data/zambia.png"
},
{
    name: "Zimbabwe",
    src: "assets/data/zimbabwe.png"
}
];

// A class that contains all the functions related to UI updation
class UiUpdate {
    constructor() {
    }
    // Function to hide the main menu (game selection page)
    hideMenu() {
        document.querySelector(".menu").style.display = "none";
    }
    // Function to display the game, when a user selects the game mode.
    viewGame() {
        document.querySelector(".game").style.display = "block";
    }
    // Function to hide the game when game is over
    hideGame() {
        document.querySelector(".game").style.display = "none";
    }
    // Function to display the content to be displayed when game is over
    viewEnd() {
        document.querySelector(".end").style.display = "block";
    }
    // Function to increment and update attempts for game mode "Spray and prey"
    updateAttempts() {
        p1.attempt+=1;
        document.querySelector(".attempts").innerText = p1.attempt;
    }
    // Function to update the game mode in game window when player selects a specific game mode
    updateGameMode(arg) {
        document.querySelector(".game-mode").innerText = arg;
    }
    // Function to remove attempts section for One shot One kill game mode
    removeAttempts() {
        document.querySelectorAll(".score-bar span")[3].innerHTML = "";
    }
    // Function to update the flag in game question
    updateFlag(src){
        document.querySelector(".flag").src = src;
    }
    // Function to update 4 available options in question
    updateOptions(quesArr){ 
        let optionArr = document.querySelectorAll(".answer");
        for(let i=0;i<=3;i++){
            optionArr[i].innerText = quesArr[i].name;
        }
    }
    // Function to increment score and update it in HTML.
    updateScore(){
        p1.score+=1;
        document.querySelector(".score").innerText = p1.score;
    }
    // Function to Update score and game mode on end page
    updateEndPage(){
        document.querySelector(".fscore").innerText = p1.score;
        document.querySelector(".fgame-mode").innerText = p1.playerMode;
    }
}
// UI update object
let uiUpdate = new UiUpdate();


// Function which shuffles the array it receives. doesn't return the array
let shuffleArray = function(arr){
    let n = arr.length-1,shuffleIndex,temp;
    while(n>=1){
        shuffleIndex = Math.floor(Math.random() * n);
        temp = arr[n];
        arr[n] = arr[shuffleIndex];
        arr[shuffleIndex] = temp;
        n-=1;
    }
    
} 

// Function which generates a question and their 4 options
let questionArrayGenerator = function(arr,correctIndex){
    let quesArr = [], count = 0, tempIndex;
    while(count<=2){
        tempIndex = Math.floor(Math.random()*arr.length);
        
        if(correctIndex!=tempIndex){
            quesArr.push(arr[tempIndex]);
            count+=1;
        }
    }
    
    quesArr.push(arr[correctIndex]);
    shuffleArray(quesArr);
    return quesArr;
}

// Function that handles what happens when game ends
let endGame = function(){
    uiUpdate.hideGame();
    uiUpdate.viewEnd();
    uiUpdate.updateEndPage();
}

// Function which sets next question 
let questionSetter = function(n){
    for(obj of document.querySelectorAll(".answer")){
        obj.style.border = "none";
    }
    if(n<0){
            removeEventListener();        
        endGame();
    }
    else{
        quesArr = questionArrayGenerator(dataArray,n);
        rightAnswer = dataArray[n];
        uiUpdate.updateFlag(rightAnswer.src);
        uiUpdate.updateOptions(quesArr);
        setEventListener();
    } 
    

}

let questionN = dataArray.length-1;// to keep track of last element, questions start from last element

// function to check the answer selected by user.
let checkAnswer = function(){
    removeEventListener();
    let option = this.innerText;
            if(option === rightAnswer.name){
                this.style.border = "4px solid #29EE3C";
                uiUpdate.updateScore();
                if(p1.playerMode==="One Shot. One Kill."){
                    setTimeout(function(){
                        questionN -=1;
                        questionSetter(questionN);
                    },1000);
                }
            }
            else if(option!=rightAnswer.name){
                this.style.border = "4px solid #FF2727";
                for(right of document.querySelectorAll(".answer")){
                    if(right.innerText === rightAnswer.name){
                        right.style.border = "4px solid #29EE3C";
                    }
                }
                if(p1.playerMode==="Spray and Prey"){
                    uiUpdate.updateAttempts();
                }
                else{
                    setTimeout(function(){
                        endGame();
                    },1000);
                }
                
            }
            
            if(p1.playerMode==="Spray and Prey"){
                setTimeout(function(){
                    questionN -=1;
                    questionSetter(questionN);
                },1000);
            }
            
}

// function to set click events on options
let setEventListener = function(){
    for(btn of document.querySelectorAll(".answer")){
        btn.addEventListener("click",checkAnswer); 
    }
}

// function to remove events on options
let removeEventListener = function(){
    for(btn of document.querySelectorAll(".answer")){
        btn.removeEventListener("click",checkAnswer); 
    }
}



// initiate spray and prey game mode
let sprayAndPrey = function(){
    questionSetter(dataArray.length-1);
}

// inititate one shot game mode
let oneShot = function(){
    uiUpdate.removeAttempts();
    questionSetter(dataArray.length-1);

}

// game initialiser and Game mode selector according to users feedback
let gameSelection = function(arg){ 
    let targetText = arg.currentTarget.querySelector("h2").innerText;
    p1.playerMode = targetText;
    uiUpdate.viewGame();
    uiUpdate.updateGameMode(targetText);
    uiUpdate.hideMenu();
    shuffleArray(dataArray);
    if(targetText==="Spray and Prey"){
        sprayAndPrey();
    }
    else{
        oneShot();
    }
}





var gameMode =  document.querySelectorAll(".game-select"); // stores the instance of both the game modes to set a click event on both of them.

for(game of gameMode){
    game.addEventListener("click",function(arg){
        gameSelection(arg); // adding an event to initiate the game when mode is selected.
    });
}


