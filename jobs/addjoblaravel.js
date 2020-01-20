var bs = require('nodestalker'),
    client = bs.Client('127.0.0.1:11300');

client.use('default').onSuccess(function (data) {
    console.log(data);

    var serialize, Class, command;

    serialize = require('php-serialization').serialize;
    Class = require('php-serialization').Class;

    command = new Class("App\\Jobs\\FindFavoriteOS");

    command.__addAttr__("job", "string", null, "null");
    command.__addAttr__("queue", "string", null, "null");
    command.__addAttr__("chainConnection", "string", null, "null");
    command.__addAttr__("chainQueue", "string", null, "null");
    command.__addAttr__("delay", "string", null, "null");
    command.__addAttr__("middleware", "string", new Class(), "array");
    command.__addAttr__("chained", "string", new Class(), "array");

    command = serialize(command, "object");

    var payload = JSON.stringify({
        displayName: "App\\Jobs\\FindFavoriteOS",
        job: "Illuminate\\Queue\\CallQueuedHandler@call",
        maxTries: null,
        delay: null,
        timeout: null,
        timeoutAt: null,
        data: {
            commandName: "App\\Jobs\\FindFavoriteOS",
            command
        }
    });
    console.log(payload);
    client.put(payload).onSuccess(function (data) {
        console.log(data);
        client.disconnect();
    });
});