function raices(){
    var a = parseInt( document.getElementById("a").value);
    c=Math.pow(a,2)
    b=0
    d=c
    while(d>0){
        e=d%10
        d=Math.trunc(d/10)
        b=b+e
    }
    f=Math.pow(b,2)
    r=0
    while(f>0){
        q=f%10
        f=Math.trunc(f/10)
        r=r+q
    }
    if (a==r){
        document.getElementById('raiz').innerHTML="sunumero amigo es: "+b
    }
    else{
      document.getElementById('raiz').innerHTML=a+" notiene numero amigo"
}}

/*function raices(){
    var a = parseInt( document.getElementById("a").value);
    var b = parseInt( document.getElementById("b").value);
    var c = parseInt( document.getElementById("c").value);
    var d=Math.pow(b,2)-(4*a*c);
    if (d==0){
        document.getElementById('raiz').innerHTML="discriminante d="+d+" la ecuacion tiene 1 raiz"
    }
    else if(d>0)
    {
        document.getElementById('raiz').innerHTML="discriminante d="+d+" la ecuacion tiene 2 raices"
    }
    else{
        document.getElementById('raiz').innerHTML="discriminante d="+d+" la ecuacion no tiene raices reales"  
    }
}
*/