/*var timer=document.getElementById('buttons');
var time_details=document.getElementById('timer');

var time=document.getElementById('input-taking');
var finish_time=time.innerText;
console.log(finish_time);
timer.addEventListener('click',timerfunction);

var sec=1;
function timerfunction()
{
    
    var interval=setInterval(function()
    {
        if(sec>10)
        {

            alert('time up!!');
            clearInterval(interval);
            sec=0;
            return;
        }
        console.log(sec);
        var content=document.getElementById('timer-content');
        content.innerText=sec;
        sec++;
    },1000);

}*/

var timer=document.getElementById('buttons');
var time_details=document.getElementById('timer');
var time=document.getElementById('input-taking');
var finish_time=10;
console.log(finish_time);
finish_time=time.textContent;
timer.addEventListener('click',timerfunction);

var sec=1;

function timerfunction()
{
    finish_time=time.value;
    console.log(finish_time,2);
    var interval=setInterval(function()
    {
        if(sec>finish_time)
        {

            alert('time up!!');
            clearInterval(interval);
            sec=0;
            return;
        }
        console.log(sec);
        var content=document.getElementById('timer-content');
        content.innerText=sec;
        sec++;
    },1000);

}