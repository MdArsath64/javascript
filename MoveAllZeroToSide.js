let ar=[6,0,1,0,8,0,2];
let br=[];
for(let i=0;i<ar.length;i++){
if(ar[i]=='0'){
let b=ar[i];
for(let j=i;j<ar.length;j++){
ar[j]=ar[j+1];
}
ar[ar.length-1] =b;
}
}
console.log(ar);