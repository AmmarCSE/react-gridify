let utils = (function(){
    function generateReactKey(){
        let reactKey = 0;
        return function(){
            return reactKey++;
        }
    }

    return {
        generateReactKey : generateReactKey()
    }
})();
