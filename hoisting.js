function outerFunction(){
    let x = 10;


    function innerFunction(){
        console.log(x);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();