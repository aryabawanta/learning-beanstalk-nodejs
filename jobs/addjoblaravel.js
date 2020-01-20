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
    var serialize, Class, command, command_detail, serialized;

    serialize = require('php-serialization').serialize;
    Class = require('php-serialization').Class;

    command = new Class("App\\Jobs\\Node");

    command_detail = new Class();
    // command_detail.__addAttr__("testkey", "string", "testval", "string");
    // command_detail.__addAttr__("timestamp", "string", "2017-02-24 11:07:48", "string");
    // command_detail.__addAttr__("event", "string", "notification", "string");
    // command_detail.__addAttr__("class", "string", "App\\Events\\NotificationEvent", "string");

    command.__addAttr__("data", "string", command_detail, "array", "public");

    serialized = serialize(command, "object");

    var payload = JSON.stringify({
        displayName: "App\\\\Jobs\\\\Node",
        job: "Illuminate\\\\Queue\\\\CallQueuedHandler@call",
        data: {
            commandName: "App\\\\Jobs\\\\Node",
            command: serialized
        }
    });
    client.put(payload).onSuccess(function (data) {
        console.log(data);
        client.disconnect();
    });
});