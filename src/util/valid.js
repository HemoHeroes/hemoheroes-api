function valid(param, method){
    return new Promise(
        (resolve, reject) => {
            resolve({
                message: "Ocorreu algum erro . . . : " + param + " no metodo: " +method
            });
        }
    )
};

module.exports = valid;