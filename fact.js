let a = 5;
function fact(n){
    let f=1;
    for( i=1;i<=n;i++){
        f=f*i
    }
    return f;
}
console.log("fact is ",fact(a))