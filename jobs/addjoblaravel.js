var bs = require('nodestalker'),
    client = bs.Client('127.0.0.1:11300');

client.use('default').onSuccess(function (data) {
    console.log(data);
    var payload = new Buffer({
        job: 'App\\Jobs\\MyTestJob@handle',
        data: { user: 'Arya Bawanta', email: 'arya.bawanta@gmail.com' }
    });
    client.put(payload).onSuccess(function (data) {
        console.log(data);
        client.disconnect();
    });
});