var txtInput=document.querySelector("#txt-area")
var txtOutput=document.querySelector("#output")
var btnTranslate=document.querySelector("#btn-translate")

var serverURL="https://api.funtranslations.com/translate/yoda.json"

btnTranslate.addEventListener("click",clickEventHandler)

function constructURL(text)
{
    return serverURL + "?"+"text=" + text;

}

function doFetch(error)
{
    alert("Something went wrong with the server!")
}

function clickEventHandler()
{
    var textInput= txtInput.value;

    fetch(constructURL(textInput))
    .then (response => response.json())
    .then (json =>{
        var translatedText=json.contents.translated;
        txtOutput.innerText=translatedText;
    })
    .catch(doFetch)
};



