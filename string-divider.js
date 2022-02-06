let str = "aasddbbbnn" 

function stringDivider(s){

  let res = []

  for (var i = 0; i < s.length; i++) {
    console.log(s[i])
    
    if(s[i+2]==undefined) break
    
    res.push(s[i]+s[i+1]+s[i+2])
  }
  
  return res
}


console.log("divided string \n"+str, "---->", stringDivider(str))