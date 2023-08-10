function outest(){
    var c=1000;
    function outer(b){
        
        function inner(){
            console.log(a,b,c);
        }
        let a=10;
        return inner;
        
    }
    return outer;
}    
//z();
window.outest();
var z = outest()(100)();
console.log(this.z);
//close();
