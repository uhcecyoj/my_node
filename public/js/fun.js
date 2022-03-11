let fun = {}

fun.dealPrefix =  function(callback) {
    var prefix = 'prefix from dealPrefix:';
    return callback(prefix);
}

export {
    fun
}