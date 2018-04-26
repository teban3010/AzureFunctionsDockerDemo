module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        let message = "Hello " + (req.query.name || req.body.name);
        let splitString = message.split("");
        let reverseArray = splitString.reverse();

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: message + ' | ' + reverseArray.join("")
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};