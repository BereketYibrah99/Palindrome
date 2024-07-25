var texInput = document.getElementById("text-input");
var checkBtn = document.getElementById("check-btn");
var result = document.getElementById("result");
var input;
var index;
var lastInd;
var firstInd=0;
var checker=0;
checkBtn.onclick = function(){
    input = texInput.value;
    lastInd = input.length-1;
    if(input.length%2==0)
        {
        index = input.length/2;
    }
    else{
        index = input.length/2-0.5;
    }
    while(firstInd<index){
        if(input.charAt(firstInd)==input.charAt(lastInd)){
            checker++;
        }
        if(input.charAt(firstInd)!=input.charAt(lastInd)){
        checker=0;
        }
        lastInd--;
        firstInd++;
    }
    if(checker==index){
        result.textContent="yes";
        firstInd=0;
        checker=0;
    }
    else if(checker!=index){
        result.textContent="No";
        firstInd=0;
        checker=0;
    }   
}