function myFunction()
{
    nextSignaly3();
    setTimeout(function(){
    document.getElementById("greenleft").style.backgroundColor="green";
    document.getElementById("redright").style.backgroundColor="red";
    document.getElementById("greendown").style.backgroundColor="#d6d6c2";
    document.getElementById("redup").style.backgroundColor="red";
    document.getElementById("reddown").style.backgroundColor="red";
    document.getElementById("redleft").style.backgroundColor="#d6d6c2";
    document.getElementById("yellowleft").style.backgroundColor="#d6d6c2";
    nextSignal()
    }, 10000);
}
function nextSignal()
{
    nextSignaly4();
    setTimeout(function(){
    document.getElementById("greenright").style.backgroundColor="green";
    document.getElementById("redleft").style.backgroundColor="red";
    document.getElementById("greenleft").style.backgroundColor="#d6d6c2";
    document.getElementById("redup").style.backgroundColor="red";
    document.getElementById("reddown").style.backgroundColor="red";
    document.getElementById("redright").style.backgroundColor="#d6d6c2";
    document.getElementById("yellowright").style.backgroundColor="#d6d6c2";
    nextSignal1();
    }, 10000);
}
function nextSignal1()
{
    nextSignaly5();
    setTimeout(function(){
    document.getElementById("greenup").style.backgroundColor="green";
    document.getElementById("redleft").style.backgroundColor="red";
    document.getElementById("redright").style.backgroundColor="red";
    document.getElementById("reddown").style.backgroundColor="red";
    document.getElementById("greenright").style.backgroundColor="#d6d6c2";
    document.getElementById("redup").style.backgroundColor="#d6d6c2";
    document.getElementById("yellowup").style.backgroundColor="#d6d6c2";
    nextSignal2();
    }, 10000);
}
function nextSignal2()
{
    nextSignaly6();
    setTimeout(function(){
    document.getElementById("greendown").style.backgroundColor="green";
    document.getElementById("redup").style.backgroundColor="red";
    document.getElementById("redleft").style.backgroundColor="red";
    document.getElementById("redright").style.backgroundColor="red";
    document.getElementById("greenup").style.backgroundColor="#d6d6c2";
    document.getElementById("reddown").style.backgroundColor="#d6d6c2";
    document.getElementById("yellowdown").style.backgroundColor="#d6d6c2";
    myFunction();
    }, 10000);
}
function nextSignaly3()
{
    setTimeout(function(){
        document.getElementById("yellowleft").style.backgroundColor="yellow";
     }, 7000);
}
function nextSignaly4()
{
    setTimeout(function(){
        document.getElementById("yellowright").style.backgroundColor="yellow";
     }, 7000);
}
function nextSignaly5()
{
    setTimeout(function(){
        document.getElementById("yellowup").style.backgroundColor="yellow";
     }, 7000);
}
function nextSignaly6()
{
    setTimeout(function(){
        document.getElementById("yellowdown").style.backgroundColor="yellow";
     }, 7000);
}