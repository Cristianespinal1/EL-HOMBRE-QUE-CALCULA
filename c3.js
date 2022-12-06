function raices(){
    var a = parseInt( document.getElementById("a").value);
    while(a%2!=0 || a%9!=0){
        a=a+1
    }
    var d=a/2
    var e=a/3
    var r=a/9
    document.getElementById('raiz').innerHTML="el primero tiene"+d+" camellos, el segundo tiene"+e+" camellos y el tercer tiene"+r;
} 
    //var d=Math.pow(b,2)-(4*a*c);
   // if (d==0){
    //    document.getElementById('raiz').innerHTML="discriminante d="+d+" la ecuacion tiene 1 raiz"
   // }
   // else if(d>0)
   // {
   //     document.getElementById('raiz').innerHTML="discriminante d="+d+" la ecuacion tiene 2 raices"
   // }
   // else{
       // document.getElementById('raiz').innerHTML="discriminante d="+d+" la ecuacion no tiene raices reales"  
   // }

