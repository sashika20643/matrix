var num;
function show(n){
    num=n;
    for (let el of document.querySelectorAll('.show')) el.style.display = 'none';
    document.getElementById('ans1').style.display='block';
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            document.getElementById("mat1").innerHTML+='<input type="number" name="" id="'+i+j+'">'
        }
        document.getElementById("mat1").innerHTML+='<br>'
    }
}

function det(){
    
if(num==2){
    var a=document.getElementById("00").value;
    var d=document.getElementById("11").value;
    var b=document.getElementById("01").value;
    var c=document.getElementById("10").value;
    var det=det2(a,b,c,d);
    document.getElementById("answer").innerHTML+="DET ="+a+"*"+d+"-"+b+"*"+c;
    document.getElementById("answer").innerHTML+='<br>';
    document.getElementById("answer").innerHTML+=det;
}
else if(num==3){
    var a=document.getElementById("00").value;
    var b=document.getElementById("01").value;
    var c=document.getElementById("02").value;
    var p=document.getElementById("10").value;
    var q=document.getElementById("11").value;
    var r=document.getElementById("12").value;

    var x=document.getElementById("20").value;
    var y=document.getElementById("21").value;
    var z=document.getElementById("22").value;
    var det=det3(a,b,c,p,q,r,x,y,z)
    document.getElementById("answer").innerHTML+='<br>';
    document.getElementById("answer").innerHTML+="DET ="+a+'*'+'('+q+'*'+z+'-'+r+'*'+y+')'+'-'+b+'*'+'('+p+'*'+z+'-'+r+'*'+x+')'+'+'+c+'*'+'('+p+'*'+y+'-'+q+'*'+x+')';
    document.getElementById("answer").innerHTML+='<br>';
    document.getElementById("answer").innerHTML+=det;

}
else{
    var a=document.getElementById("00").value;
    var b=document.getElementById("01").value;
    var c=document.getElementById("02").value;
    var d=document.getElementById("03").value;

    var j=document.getElementById("10").value;
    var k=document.getElementById("11").value;
    var l=document.getElementById("12").value;
    var m=document.getElementById("13").value;

    var p=document.getElementById("20").value;
    var q=document.getElementById("21").value;
    var r=document.getElementById("22").value;
    var s=document.getElementById("23").value;

    var w=document.getElementById("30").value;
    var x=document.getElementById("31").value;
    var y=document.getElementById("32").value;
    var z=document.getElementById("33").value;
    
    var val1=det3(k,l,m,q,r,s,x,y,z);
    console.log(val1);
    var det=(a*det3(k,l,m,q,r,s,x,y,z))-(b*det3(j,l,m,p,r,s,w,y,z))+(c*det3(j,k,m,p,q,s,w,x,z))-(d*det3(j,k,l,p,q,r,w,x,y));
    document.getElementById("answer").innerHTML+='<br>';
    document.getElementById("answer").innerHTML+=det;


}

}

function det2(a,b,c,d){
    var det=(a*d)-(b*c);
return det;
}
function det3(a,b,c,p,q,r,x,y,z){
    var det=(a*(q*z-r*y))-(b*(p*z-r*x))+(c*(p*y-q*x));
return det;
}