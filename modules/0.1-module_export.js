function closure(){
    const num1=10;
    const num2=5;

    let sum = () => {return num1+num2};
    return console.log(sum());
}
module.exports = closure

/* NOTE:there's no need to export module if you invoke the function here

    if closure(); exists in this file then
    NO need to use module.exports = closure   */