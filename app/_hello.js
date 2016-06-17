var exportThis = function (name) {
    const greet = document.getElementById('greet');
    greet.innerHTML = 'Hello' + name;
};

module.exports = exportThis;