function generate(){
    var val1=document.getElementById("col1").value;
    var val2=document.getElementById("row1").value;
    var val21=document.getElementById("col2").value;
    var val22=document.getElementById("row2").value;

    if(val1&& val2){
        
        document.getElementById("gen").style.display="none";
        for(let j=0;j<parseInt(val1);j++){
        for(let i=0;i<parseInt(val2);i++){
        document.getElementById("mat1").innerHTML+='<input type="number" name="" id="a'+j+i+'">'
       
    }
    document.getElementById("mat1").innerHTML+='<br>'
   
}
for(let j=0;j<parseInt(val21);j++){
    for(let i=0;i<parseInt(val22);i++){
        document.getElementById("mat2").innerHTML+='<input type="number" name="" id="b'+j+i+'">'
   
}
document.getElementById("mat2").innerHTML+='<br>'

}

document.getElementById("plus").style.display="block";

document.getElementById("show").style.display="block";
    }
}

function product(){
    var val1=document.getElementById("col1").value;
    var val2=document.getElementById("row1").value;
    var val21=document.getElementById("col2").value;
    var val22=document.getElementById("row2").value;
    var x=0;
    var ans=0;
    for(let j=0;j<parseInt(val1);j++){
        for(let i=0;i<parseInt(val22);i++){
 var str='<input type="text" name="" placeholder="';
    for(let k=0;k<val2;k++){
        ans+=document.getElementById("a"+x+k).value*document.getElementById("b"+k+i).value;
        str=str+'+'+document.getElementById("a"+x+k).value +'*' +document.getElementById("b"+k+i).value;
    }
    str+='">';
    document.getElementById("preans").innerHTML+=str;
    document.getElementById("ans").innerHTML+='<input type="number" name="" value="'+ans+'">'
    ans=0;
}
x++;
document.getElementById("preans").innerHTML+='<br>'
document.getElementById("ans").innerHTML+='<br>'

}

}
