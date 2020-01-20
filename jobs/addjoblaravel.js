var bs = require('nodestalker'),
    client = bs.Client('127.0.0.1:11300');

client.use('default').onSuccess(function (data) {
    console.log(data);
    var payload = new Buffer([{
        job: 'App\\Jobs\\Node@handle',
        data: "Ubuntu"
    }]);
    client.put(payload).onSuccess(function (data) {
        console.log(data);
        client.disconnect();
    });
});