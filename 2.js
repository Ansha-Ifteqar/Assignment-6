let check =54685846
let i=2
let flag=false
while(i<check){
    if(check%i==0){
        flag=true
    }
    i++
}
if(flag == false){
    console.log(check, 'its a prime')

}else{
    console.log(check,'is not a prime')
}