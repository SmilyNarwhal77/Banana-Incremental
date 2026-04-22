var stats = {
    "banana": 0,
    "bananaPerClick": 1
}

function defineVariables () {
    const bananaDisplay = document.getElementById("bananaDisplay")
    const bananaPerClickDisplay = document.getElementById("bananaPerClickDisplay")
    //banana is a placeholder name
}

function addbanana() {
    stats["banana"] += stats["bananaPerClick"]
}

function updateDisplay(displayElement, displayValue) {
    displayElement.innerHTML = displayValue
}

var intervals = {}

function setDisplayUpdateInterval(displayElement, value) {
    return setInterval(function() {
        updateDisplay(displayElement, stats[value])
    , 10000})
}

function setIntervals() {
    intervals["banana"] = setDisplayUpdateInterval(bananaDisplay, "banana")
    intervals["bananaPerClick"] = setDisplayUpdateInterval(bananaPerClickDisplay, "bananaPerClick")
}
window.onload = function() {
    //This runs when the window loads
    defineVariables()
    setIntervals()
}