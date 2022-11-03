function median(ar){
    if(ar.length%2==0){
        return ar[ar.length/2-1] 
    }else{
       return (ar[ar.length/2-1]+ ar[ar.length/2])/2 
    }
}
const arr=[1,3,5,4,11,7]

arr.pop(3)
console.log(median(arr));

function alertMeessage() {
    alert("You have clicked the button");
 }

