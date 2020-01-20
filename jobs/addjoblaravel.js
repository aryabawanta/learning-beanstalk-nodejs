var bs = require('nodestalker'),
    client = bs.Client('127.0.0.1:11300');

client.use('default').onSuccess(function (data) {
    console.log(data);
    var payload = JSON.stringify({
        job: 'App\\Jobs\\Node@handle',
        data: "Ubuntu"
    });
    var laraveljob = '{"displayName":"App\\\\Jobs\\\\FindFavoriteOS","job":"Illuminate\\\\Queue\\\\CallQueuedHandler@call","maxTries":null,"delay":null,"timeout":null,"timeoutAt":null,"data":{"commandName":"App\\\\Jobs\\\\FindFavoriteOS","command":"O:23:\\"App\\\\Jobs\\\\FindFavoriteOS\\":8:{s:6:\\"\\u0000*\\u0000job\\";N;s:10:\\"connection\\";N;s:5:\\"queue\\";N;s:15:\\"chainConnection\\";N;s:10:\\"chainQueue\\";N;s:5:\\"delay\\";N;s:10:\\"middleware\\";a:0:{}s:7:\\"chained\\";a:0:{}}"}}';
    client.put(laraveljob).onSuccess(function (data) {
        console.log(data);
        client.disconnect();
    });
});