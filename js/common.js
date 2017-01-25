/**
 * Created by keshav on 24/01/2017.
 */
//function Add(a,b){
//    return a+b;
//}
//console.log(Add(5,10));

function PrintStuff(myDocuments){this.documents = myDocuments;}
PrintStuff.prototype.print = function () {
    console.log(this.documents);
}
PrintStuff.prototype.xx = function () {
    console.log('success..i am manu :-)')
}
var newobj = new PrintStuff('hi i am new');
console.log(newobj.xx());

