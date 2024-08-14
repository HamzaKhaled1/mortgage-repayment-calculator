const mainbody = document.getElementsByClassName("main-body");
const sideBody = document.getElementsByClassName("side");
const amount = document.getElementById("Mortgage-Amount");
const term = document.getElementById("Mortgage Term");
const Interest = document.getElementById("Interest Rate");
const mainsidediv = document.getElementById("sidecontent");
const divside = document.createElement("div");
divside.id = "divsidebox"
var termvalue;
var amountvalue;
var Interestvalue;
var total;
var total2;
const divtext = document.createElement("div");
divtext.id="div1"
const divtext2 = document.createElement("div");
divtext2.id = "div2";
const text1 = document.createElement("div")
text1.id="text-1"
text1.textContent="Your results "
const text2 = document.createElement("div")
text2.id="text-2"
text2.textContent="Your results are shown below based on the information you provided. To adjust the results, edit the form and click 'calculate repayments' again."
const abovediv = document.createElement("div")
abovediv.id = "above"
const bottomdiv = document.createElement("div")
bottomdiv.id = "bottom"
const totalspan = document.createElement("div")
totalspan.id = "totalspan"
const textnode1 = document.createElement("div")
textnode1.id = "textnode1"
const total2span = document.createElement("div")
total2span.id = "total2span"
const textnode2 = document.createElement("div")
textnode2.id="textnode2"
var hr = document.createElement("hr")
hr.id="hr"
//_________________________________________________________________________________________
const validatefun = (inp) => {
    if (inp.value.length < 3) {
        document.getElementById("mortmsg").innerHTML = "must be 3 or more";
        inp.focus();
    } else {
        document.getElementById("mortmsg").innerHTML = "";
    }
};
document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    divside.innerHTML = "";
    termvalue = parseFloat(term.value);
    amountvalue = parseFloat(amount.value);
    Interestvalue = parseFloat(Interest.value);
if  (document.getElementById("Interest Only").checked) {
        total = ((amountvalue * Interestvalue) / (termvalue * 12)).toString().slice(0,7)
        total2 = (total * (termvalue * 12)).toString().slice(0,7)
        totalspan.textContent = `£ ${total}`
        total2span.textContent=`£ ${total2}`
        textnode1.textContent = "Your monthly interest "
        textnode2.textContent = " Total you'll interest over the term "
} else {
        total = (amountvalue * Interestvalue).toString().slice(0, 7);
        total2 = (total * (termvalue * 12)).toString().slice(0,7);
        totalspan.textContent = `£ ${total}`
        total2span.textContent = `£ ${total2}`
        textnode1.textContent = "Your monthly repayments "
        textnode2.textContent = " Total you'll repay over the term "
        
    }
    divtext.appendChild(textnode1)
    divtext2.appendChild(textnode2)
    divtext.appendChild(totalspan)
    divtext2.appendChild(total2span)
    abovediv.appendChild(text1);
    abovediv.appendChild(text2);
    divside.appendChild(abovediv)
    bottomdiv.appendChild(divtext)
    bottomdiv.appendChild(hr)
    bottomdiv.appendChild(divtext2)
    divside.appendChild(bottomdiv);
    document.getElementById("side").innerHTML = "";
    document.getElementById("side").appendChild(divside);
});

document.getElementById("clear-all").addEventListener("click", function (e) { 
    document.getElementById("form").reset();
    document.getElementById("side").innerHTML = "";
    document.getElementById("side").appendChild(mainsidediv);
})