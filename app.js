var userInput = document.querySelector("#input");
var btnTranslate = document.querySelector("#translate");
var outputMessage = document.querySelector("#output");


var translationURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslation(textInput) {
    return translationURL + "?text=" + textInput;
}

function errorHandle(error) {
    console.log("error message", error);
    //alert("Please try after Some time");
}

btnTranslate.addEventListener("click", function translateText() {
    var text = userInput.value;

    fetch(getTranslation(text)).then(response => response.json()).then(json => {
        var translatedText = json.contents.translated;
        outputMessage.innerText = translatedText;
    }).
    catch(errorHandle)
});