function slove(){
    var r1=[document.getElementById("r10").value,document.getElementById("r11").value,document.getElementById("r12").value,document.getElementById("r13").value]
    var r2=[document.getElementById("r20").value,document.getElementById("r21").value,document.getElementById("r22").value,document.getElementById("r23").value]
    var r3=[document.getElementById("r30").value,document.getElementById("r31").value,document.getElementById("r32").value,document.getElementById("r33").value]
    console.log(r1[3])
        if(r1[0]%r3[0]==0){
        var x=r1[0]/r3[0];
        var str="R3=R1-3R3<br>";
        for(let i=0;i<4;i++){
            r3[i]=r1[i]-x*r3[i]; 
        }

    }
    else if(r3[0]%r1[0]==0){
        var x=r3[0]/r1[0];
        var str="R3="+x+"R1-R3<br>";
        for(let i=0;i<4;i++){
            r3[i]=x*r1[i]-r3[i]; 
        }
    }
    else{
        var x=r3[0];
        var y=r1[0];
        var str="R3="+x+"R1-"+y+"R3<br>"; 
        for(let i=0;i<4;i++){
            r3[i]=x*r1[i]-y*r3[i]; 
        } 
    }
    document.getElementById("answer").innerHTML+="<h3>"+str+"</h3>";
    for(let i=0;i<4;i++){
        document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r1[i]+'">'  
    }
    document.getElementById("answer").innerHTML+="<br>";
    for(let i=0;i<4;i++){
        document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r2[i]+'">'  
    }
    document.getElementById("answer").innerHTML+="<br>";
    for(let i=0;i<4;i++){
        document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r3[i]+'">'  
    }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx

    if(r1[0]%r2[0]==0){
        var x=r1[0]/r2[0];
        var str="R2=R1-3R2<br>";
        for(let i=0;i<4;i++){
            r2[i]=r1[i]-x*r2[i]; 
        }

    }
    else if(r2[0]%r1[0]==0){
        var x=r2[0]/r1[0];
        var str="R2="+x+"R1-R2<br>";
        for(let i=0;i<4;i++){
            r2[i]=x*r1[i]-r2[i]; 
        }
    }
    else{
        var x=r2[0];
        var y=r1[0];
        var str="R2="+x+"R1-"+y+"R2<br>"; 
        for(let i=0;i<4;i++){
            r2[i]=x*r1[i]-y*r2[i]; 
        } 
    }
    document.getElementById("answer").innerHTML+="<h3>"+str+"</h3>";
    for(let i=0;i<4;i++){
        document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r1[i]+'">'  
    }
    document.getElementById("answer").innerHTML+="<br>";
    for(let i=0;i<4;i++){
        document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r2[i]+'">'  
    }
    document.getElementById("answer").innerHTML+="<br>";
    for(let i=0;i<4;i++){
        document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r3[i]+'">'  
    }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx

    //        if(r1[0]%r3[0]==0){
    //     var x=r1[0]/r3[0];
    //     var str="R3=R1-3R3<br>";
    //     for(let i=0;i<4;i++){
    //         r3[i]=r1[i]-x*r3[i]; 
    //     }

    // }
    // else if(r3[0]%r1[0]==0){
    //     var x=r3[0]/r1[0];
    //     var str="R3="+x+"R1-R3<br>";
    //     for(let i=0;i<4;i++){
    //         r3[i]=x*r1[i]-r3[i]; 
    //     }
    // }
    // else{
    //     var x=r3[0];
    //     var y=r1[0];
    //     var str="R3="+x+"R1-"+y+"R3<br>"; 
    //     for(let i=0;i<4;i++){
    //         r3[i]=x*r1[i]-y*r3[i]; 
    //     } 
    // }
    // document.getElementById("answer").innerHTML+="<h3>"+str+"</h3>";
    // for(let i=0;i<4;i++){
    //     document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r1[i]+'">'  
    // }
    // document.getElementById("answer").innerHTML+="<br>";
    // for(let i=0;i<4;i++){
    //     document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r2[i]+'">'  
    // }
    // document.getElementById("answer").innerHTML+="<br>";
    // for(let i=0;i<4;i++){
    //     document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r3[i]+'">'  
    // }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx

if(r2[1]%r3[1]==0){
    var x=r2[1]/r3[1];
    var str="R3=R2-3R3<br>";
    for(let i=0;i<4;i++){
        r3[i]=r2[i]-x*r3[i]; 
    }

}
else if(r3[1]%r2[1]==0){
    var x=r3[1]/r2[1];
    var str="R3="+x+"R2-R3<br>";
    for(let i=0;i<4;i++){
        r3[i]=x*r2[i]-r3[i]; 
    }
}
else{
    var x=r3[1];
    var y=r2[1];
    var str="R3="+x+"R2-"+y+"R3<br>"; 
    for(let i=0;i<4;i++){
        r3[i]=x*r2[i]-y*r3[i]; 
    } 
}
document.getElementById("answer").innerHTML+="<h3>"+str+"</h3>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r1[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r2[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r3[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>"
document.getElementById("answer").innerHTML+="<hr>"
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx
if(r3[2]!=0){
    var n=r3[2];
    var str="R3=R3/"+n+"<br>";
    for(let i=0;i<4;i++){
        
        r3[i]=r3[i]/n; 
    }
    document.getElementById("answer").innerHTML+="<h3>"+str+"</h3>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r1[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r2[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r3[i]+'">'  
}
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx

if(r2[1]!=0){
    var n=r2[1];
    var str="R2=R2/"+n+"<br>";
    for(let i=0;i<4;i++){
        r2[i]=r2[i]/n; 
    }
    document.getElementById("answer").innerHTML+="<h3>"+str+"</h3>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r1[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r2[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r3[i]+'">'  
}
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxxx
if(r1[0]!=0){
    var n=r1[0];
    var str="R1=R1/"+n+"<br>";
    for(let i=0;i<4;i++){
        r1[i]=r1[i]/n; 
    }
    document.getElementById("answer").innerHTML+="<h3>"+str+"</h3>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r1[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r2[i]+'">'  
}
document.getElementById("answer").innerHTML+="<br>";
for(let i=0;i<4;i++){
    document.getElementById("answer").innerHTML+='<input type="number" name="" placeholder="'+r3[i]+'">'  
}
}


}