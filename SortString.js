//sotred the string
let str="ecdab";
let s=str.split("");
for(let i=0;i<s.length;i++){
  for(let j=i+1;j<s.length;j++){
  if(s[i]<s[j]){
  let temp=s[i];
    s[i]=s[j];
    s[j]=temp;
    }
  }
  }
let st=s.join("");
console.log(st);