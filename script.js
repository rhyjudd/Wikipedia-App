
/*this is the boilerplate  GET request function for javascript*/



function sendRequest(){    
            
    var xhr = new XMLHttpRequest();
    xhr.open('GET',/* This is the url location int the code*/, true);

    xhr.onload = function(){
        if(this.status == 200){
            var output = JSON.parse(this.responseText);         
            } 
        }
    xhr.send();
}