const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const operator = urlParams.get('operator')
console.log(operator);

function generate(){
    var val1=document.getElementById("col").value;
    var val2=document.getElementById("row").value;
    if(val1&& val2){
        
        document.getElementById("gen").style.display="none";
        for(let j=0;j<parseInt(val2);j++){
        for(let i=0;i<parseInt(val1);i++){
        document.getElementById("mat1").innerHTML+='<input type="number" name="" id="a'+j+i+'">'
        document.getElementById("mat2").innerHTML+='<input type="number" name="" id="b'+j+i+'">'
    }
    document.getElementById("mat1").innerHTML+='<br>'
    document.getElementById("mat2").innerHTML+='<br>'
}
if(operator=="min"){
    document.getElementById("plus").innerHTML="-";
}
if(operator=="product"){
    document.getElementById("plus").innerHTML="*";
}
document.getElementById("plus").style.display="block";

document.getElementById("show").style.display="block";
    }
}

function sum (){
    
    var val1=document.getElementById("col").value;
    var val2=document.getElementById("row").value; 
    
    var ans=0; 
    if(operator!="product"){
        for(let j=0;j<parseInt(val2);j++){
        for(let i=0;i<parseInt(val1);i++){
        let n1=document.getElementById("a"+j+i).value;
        let n2=document.getElementById("b"+j+i).value;
        if(operator=="plus"){
         ans=parseInt(n1)+parseInt(n2);
    }
    else if(operator=="min"){
         ans=parseInt(n1)-parseInt(n2);
    }

        document.getElementById("ans").innerHTML+='<input type="number" name="" value="'+ans+'">'
        ans=0;
        
    }
    
    document.getElementById("ans").innerHTML+='<br>'
   

}}
else{
    var x=0;
    for(let j=0;j<parseInt(val2);j++){
        for(let i=0;i<parseInt(val1);i++){
     
    for(let k=0;k<val1;k++){
        ans+=document.getElementById("a"+x+k).value*document.getElementById("b"+k+i).value;
    }
    document.getElementById("ans").innerHTML+='<input type="number" name="" value="'+ans+'">'
    ans=0;
}
x++;
document.getElementById("ans").innerHTML+='<br>'

}

}
}