var fortunes=["1","2","3","4"];
exports.getFortune=function(){
    var _index=Math.floor(Math.random()*fortunes.length);
    return fortunes[_index];
}