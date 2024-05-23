let a = 5
let b = " "
for(let i=0;i<a;i++){
    for(let j=i;j<a;j++){
        if(j==i-1 || j == a-1){
            b+="*"
        }
        else{
            b+=" "
        }
       
    }
    console.log(b)
    console.log("\n")
}