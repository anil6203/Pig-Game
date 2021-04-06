//coding challenge 4
var john={
    FullName:'john',
    Bills:[124,48,268,180,42],
    CalcTip:function(){
    var ptg;
    this.tips=[];
    this.FinalBills=[];
    for(var i=0;i<this.Bills.length;i++){
    var bill=this.Bills[i];
    if(bill<=50)
    {   
    ptg=.2;
    }else if(bill>50 && bill<=200)
    {
    ptg=.15;
    }else
    {
    ptg=.10;
    }
        this.tips[i]=bill*ptg;
        this.FinalBills[i]=bill+bill*ptg;
     }
       }
};
john.CalcTip();


function avg(tips){
     var sum=0;
     var count=0;
     for(var i=0;i<tips.length;i++)
         {
             sum=sum+tips[i];
             count++;
         }
     var ag=(sum/count);
     return ag;
 }

john.aveg=avg(john.tips);
console.log(john);
 




//coding challenge 5 A






//coding challenge 5 B






//coding challenge 3

//function and array
/*var Bill=[124,48,268];
function calculateTip(bill){
    if(bill<=50){
        return (bill*0.2);
    }else if(bill>50 && bill<=200){
        return(bill*0.15);
    }else{
        return (bill*0.10);
    }
    
}
var Tips=[calculateTip(Bill[0]),calculateTip(Bill[1]),calculateTip(Bill[2])];
console.log(Tips);
var FinalBill=[Bill[0]+Tips[0],Bill[1]+Tips[1],Bill[2]+Tips[2]];
console.log(FinalBill);

*/


//coding challenge 1
/*var m1,m2,h1,h2,bmi1,bmi2,check;
m1=67;
m2=68;
h1=5;
h2=10;
bmi1=m1/(h1*h1);
console.log(bmi1);
bmi2=m2/(h2*h2);
console.log(bmi2);
check=bmi1>=bmi2;
console.log(check);
console.log('is mark bmi greayer than jhon?'+' '+check);

//coding challenge 2

var jhonA,mikeA,maryA;
jhonA=(300+120+103)/3;
mikeA=(116+94+123)/3;
maryA=(300+134+105/3);
if(jhonA>mikeA && jhonA>maryA){
    console.log('jhon is winner having point '+jhonA);
}else if(jhonA<maryA && maryA>mikeA){
    console.log('mary is winner having point '+maryA );
}else if(jhonA===mikeA===maryA){
    console.log('match is draw');
}else{
    console.log('mikeA is winner '+mikeA);
}*/
    
