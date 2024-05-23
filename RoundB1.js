let a = 4
let st1 = " "
let st2 = " "
pr = "*"

console.log("*")
for(let i=1;i<a+1;i++){
    for(let j=1;j<a+1;j++){
        st1 = j
        pr += String(st1)
        if(j==i){
            break
        }
    }
    for(let k=i-1;k>0;k--){
       st2 = k
       pr += String(st2)
       if(k==1){
        pr += "*"
       }
    }
    console.log(" ")
    console.log(pr)

}




