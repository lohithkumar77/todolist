//jshint esversion:6

 // var today=new Date();//here we are creating the date object which is used to say current time based on the browsers time zone
 // var day="";
 // var currentday = today.getDay();//getDay() returns the number in the week

   // res.sendFile(__dirname+"/index.html"); to send file to the browser by server
   // res.write("its weekend   go to work");
   // res.write("<h1>yay</h1>"); write() is used when we want to send more number of lines to the browser by server
   //   res.send();

   // res.write("work day");
   // res.send();
   // switch(currentday)
   // {
   //   case 0:
   //   day="sunday";
   //   break;
   //   case 1:
   //   day="monday";
   //   break;
   //   case 2:
   //   day="tuesday";
   //   break;
   //   case 3:
   //   day="wednesday";
   //   break;
   //   case 4:
   //   day="thursday";
   //   break;
   //   case 5:
   //   day="friday";
   //   break;
   //   case 6:
   //   day="saturday";
   //   break;
   //   default:
   //   console.log("error");
   // }
   //we can initialize function as below by javascript expression
// module.exports.getDate = getDate
// var getDate= function getDate()
// {
// var today = new Date();
// var options={weekday:"long",day:"numeric",month:"long"};
//
// return today.toLocaleDateString("en-US",options);;
// }
exports.getDate=function getDate() //instead of module.exports we can use exports as shortcut
{
var today = new Date();
var options={weekday:"long",day:"numeric",month:"long"};

return today.toLocaleDateString("en-US",options);;
}

exports.getDay = function getDay()
{
var today = new Date();
var options={weekday:"long"};

return today.toLocaleDateString("en-US",options);;
}
