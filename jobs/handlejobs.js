var bs = require('nodestalker'),
    client = bs.Client('127.0.0.1:11300'),
    tube = 'test_tube';

client.watch(tube).onSuccess(function (data) {
    function resJob() {
        client.reserve().onSuccess(function (job) {
            console.log('reserved', job);

            client.deleteJob(job.id).onSuccess(function (del_msg) {
                console.log('deleted', job);
                console.log('message', del_msg);
                resJob();
            });
        });
    }

    resJob();
});