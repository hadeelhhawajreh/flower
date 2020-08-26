var faveFlowe=prompt('what is your Favorite flower ?');
var favColor=prompt('what is your Favorite color ?');
var name=prompt('what is your name ?');
alert( ' Hello  '+ name + " I glad about you thank you  to vist my  page , gratting  :)) ")  ;
function any(folwer) {
  
    validation(folwer);

    if(folwer=="lilac"){
    document.write("Your Favorite flower is here !!!");}
    else if(folwer=="orchid"){
        document.write("Your Favorite flower is here !!!");
    }
    else{
       document.getElementById('ppp').innerHTML=' Hello  '+ name + " we are glad about you and we hope to help you to find your Favorite flower as you loved " +' that your Favorite color is '+ favColor + 'your Favorite falower is a  '+ faveFlowe   + " And we'll save you your wish soon.";

    }
    
}
any(faveFlowe);
console.log(typeof(favColor));



function validation(p) {
    return typeof(p)=="string" || typeof(p) !=NaN||  typeof(p) !=" ";
    
    
}