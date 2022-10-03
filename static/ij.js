
let sum123=0;
let n=document.getElementById("sumconatiner");
let a = document.getElementsByName("sen11[]");
function def(){   
    var keys = Object.keys(a);
    
    var len = keys.length;
    console.log(a)
    sum12=0;
    for(let i=0;i<len;i++){
       sum12=sum12+Number(document.getElementsByName("sen11[]")[i].value);  
   }
   console.log(sum12);    
   //let n=document.getElementById("sumconatiner");
   n.value=sum12;
   console.log(sum12); 

   let abc=document.getElementById("overall");

   b = document.getElementsByName("sen12[]");
    var keys = Object.keys(b);

    var len = keys.length;
    console.log(b)
    
    for(let i=0;i<len;i++){
       sum123=sum123+Number(document.getElementsByName("sen12[]")[i].value);  
   }
   console.log(sum123); 
   sum123=sum123/len;   
  
   abc.value=sum123;
   console.log(sum123);    

}
let sp=document.getElementById("storedper");
function myfunction(){
let sum12=document.getElementById("sumconatiner").value;
sum12=Number(sum12);

//et sp=document.getElementById("storedper");
let gp=document.getElementById("givenper").value;
gp=Number(gp);

let asp=((gp/100)*sum12);
sp.value=asp;
}
s = document.getElementsByClassName("newColumn");
function addRows() {
    let r;
    r=prompt("how many rows:", );
    r=Number(r);
    console.log(r);
    for (let i = 0 ; i < r; i++){
    obj = document.createElement("div");
    obj.innerHTML = '<input name="sen1[]" class="inputbox"><input name = "sen2[]" class="inputbox"><input name="sen3[]" class="inputbox"><input name="sen4[]" class="inputbox"><input name="sen5[]" class="inputbox"><input name="sen6[]" class="inputbox"><input name="sen7[]" class="inputbox"><input name="sen8[]" class="inputbox"><input name="sen9[]" class="inputbox"><input name="sen10[]"class="inputbox"><input name="sen11[]" class="inputbox"><input name="sen12[]" class="inputbox">';
    s[0].appendChild(obj)}
}

function doff(){
    sessionStorage.setItem('dataaverageestimated',sum123);  
    sessionStorage.setItem("existingdatasize",sum12);
    sessionStorage.setItem("additionaldatasize",sp.value);
    return;
}