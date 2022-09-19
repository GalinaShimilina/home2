const getMaximum = (a, b, c) =>{
    if(a>=b && a>=c){
        return a;
    } else if(b>=a && b>= c){
        return b;
    } else {
        return c;
    }
}

console.log (getMaximum(30,40,50));
console.log (getMaximum(10,20,5));
console.log (getMaximum(30,20,10));


function sotrTrio (a,b,c){
    if(a>b && a>c){
        if(b>c){
            console.log(a+ "," +b+ "," +c);
        }else{
            console.log(a+ "," +c+ "," +b);
        }
    }else if(b>a && b>c){
        if(a>c){
            console.log(b+ "," +a+ "," +c);
        }else{
            console.log(b+ "," +c+ "," +a);
        }
    }else if(c>a && c>b){
        if(a>b){
            console.log(c+ "," +a+ "," +b);
        }else {
            console.log(c+ "," +b+ "," +a);
    }
    }
}

sotrTrio(1,2,3);
sotrTrio(2,1,3);
sotrTrio(3,2,1);

const statistic = (a, b, c)=>{
    if(a==b && b==c){return -1;}
    
        
        else if(a==b || a==c || c==b) {
            if(a==b){return 1;}
            if(a==c){return 2;}
            if(a==b){return 3;}  
        }
        return 0;
    }
  


console.log (statistic(1,2,3))
console.log (statistic(3,2,1))
console.log (statistic(3,2,2))
console.log (statistic(1,1,1))


function PosOneg(...num){
    let pos=0;
    let neg=0;
    for(const i of num){
        if(i>0){pos++}
        if(i<0){neg++}
    }
    console.log("positive: "+pos+ "\n" + "negative: " + neg);
}
PosOneg(1,-1,0)
PosOneg(23,-3,1,3)
PosOneg(25,0,0,0)