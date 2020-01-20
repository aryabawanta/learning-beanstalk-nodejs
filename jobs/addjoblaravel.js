var bs = require('nodestalker'),
    client = bs.Client('127.0.0.1:11300');

client.use('default').onSuccess(function (data) {
    console.log(data);
    //     var laraveljob = {
    //         "displayName": "App\\\\Jobs\\\\FindFavoriteOS",
    //         "job": "Illuminate\\\\Queue\\\\CallQueuedHandler@call",
    //         "maxTries": null,
    //         "delay": null,
    //         "timeout": null,
    //         "timeoutAt": null,
    //         "data": {
    //             "commandName": "App\\\\Jobs\\\\FindFavoriteOS",
    //             "command": "O:23:\\"App\\\\Jobs\\\\FindFavoriteOS\\":8:{
    //                 s: 6: \\"\\u0000*\\u0000job\\"; N;
    //             s: 10: \\"connection\\"; N;
    //             s: 5: \\"queue\\"; N;
    //             s: 15: \\"chainConnection\\"; N;
    //             s: 10: \\"chainQueue\\"; N;
    //             s: 5: \\"delay\\"; N;
    //             s: 10: \\"middleware\\"; a: 0:{ }
    //     s: 7: \\"chained\\"; a: 0: { }
    // }"
    //         }
    //     };
    var serialize, Class, command, serialized;

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