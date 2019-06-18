module.exports = (dados, config) => {
    
    let novaArr = JSON.parse(JSON.stringify(dados));

    if (config === null || config === undefined) return 'OrderingException';
    if (config === "" || config === []) return [];

    novaArr.sort((a, b) => {
        for (let i = 0; i < config.length; i++) {
            if (config[i][1] === 'asc') {
                if (a[config[i][0]] > b[config[i][0]]) return 1;
                if (a[config[i][0]] < b[config[i][0]]) return -1;
            }
            if (config[i][1] === 'des') {
                if (a[config[i][0]] < b[config[i][0]]) return 1;
                if (a[config[i][0]] > b[config[i][0]]) return -1;
            }
        }
        return 0;
    });

    return novaArr;
}
