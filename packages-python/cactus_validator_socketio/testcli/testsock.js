const fs = require("fs");
const jwt = require("jsonwebtoken");
const JSONbig = require('json-bigint');

// NOTE: Run pip install socket.io-client.
const io = require('socket.io-client');
const url = "http://172.16.0.4:8000";
// const url = "http://localhost:8000";
const socket = io(url, {
    //transports: [ 'websocket', 'polling']
});

const crtPath = "3PfTJw8g.crt";
const paramAlgorithm = "ES256";

socket.on('connect', () => {
    console.log('connect');
    console.log(socket.id);
    const transport = socket.io.engine.transport.name;
    console.log(transport);
    //socket.emit('mymessage', 'hoge');
});

socket.on('mymessage', () => {
    console.log('received mymessage');
});

socket.on("response", (result) => {
    console.log(`#[recv]response, res: ${result}`);
    responseFlag = true;
    decodeFunc(result.resObj.data);
});

const verify = (signature) => new Promise(resolve => {
    const publicKey = fs.readFileSync(crtPath);

    const option = {
      algorithms: paramAlgorithm,
    };

    jwt.verify(signature, publicKey, option, (err, decoded) => {
        return new Promise((resolve, reject) => {
            if (err) {
                // Authentication NG
                console.log(`Authentication NG : error = ${err}`);
                reject(err);
            } else {
                // Authentication OK
                console.log(`Authentication OK`);

                resolve(decoded);
            }
        });
    });
});

const decodeFunc = async (signsignature) => {
    try {
      console.log("call verify()");
      console.log(`##signsignature: ${signsignature}`);
      const decoded = await verify(signsignature);
      console.log(`##decoded: ${decoded}`);

    } catch (err) {
      console.log(`err: ${err}`);
    }
};

// socket.emit('nop');
socket.emit('startMonitor');

socket.emit('test-event');

setTimeout(() => {
    console.log('call nop!');
    socket.emit('nop');
},  1000);




setTimeout(() => {
    console.log('call request2. get schema request.');

    let proofRequestJson;
    let proofJson;
    try {
        let input_obj = JSON.parse(fs.readFileSync('myproof.json'));
        proofRequestJson = JSON.parse(input_obj['proof_request']);
        proofJson = JSON.parse(input_obj['proof']);
    }
    catch (err) {
        console.error('Error while reading proof and proof request. returning false.');
        return false;
    }

    did = null;

    let count = 0;

    let identifiers = proofJson['identifiers']
    for(let referent of Object.keys(identifiers)) {
        let item = identifiers[referent];
        let args_request_getSchema = {"did": did, "schemaId": item['schema_id']};

        // Call Validator
        const requestData = {
            contract: {"channelName": "mychannel", "contractName": "indysomething"},
            method: {type: "evaluateTransaction", command: "get_schema"},
            args: {args: args_request_getSchema},
            reqID: "reqID_test"
        };

        socket.emit('request2', requestData);
    }

},  2000);


/*
setTimeout(() => {
    console.log('call request2. args_schema request.');

    args_schema = "{\"reqId\":1625126127546406478,\"identifier\":\"FVb5jZqvKmr15RgWrNpvjb\",\"operation\":{\"type\":\"107\",\"dest\":\"LXipD5CTqVsZDwm5xieomb\",\"data\":{\"name\":\"Job-Certificate\",\"version\":\"0.2\"}},\"protocolVersion\":2}";
    
    // Call Validator
    const requestData = {
        contract: {"channelName": "mychannel", "contractName": "indysomething"},
        method: {type: "evaluateTransaction", command: "indy_ledger_submit_request"},
        args: {args: args_schema},
        reqID: "reqID_test"
    };

    socket.emit('request2', requestData);

},  2000);


setTimeout(() => {
    console.log('call request2. args_credential_definition request.');

    args_credential_definition = "{\"reqId\":1625472309372025483,\"identifier\":\"D4NcMEBjGsSEKvoasMBbnj\",\"operation\":{\"type\":\"108\",\"ref\":14,\"signature_type\":\"CL\",\"origin\":\"WV4juMpjLxSroxy2tNuQ5g\",\"tag\":\"TAG1\"},\"protocolVersion\":2}";

    // Call Validator
    const requestData = {
        contract: {"channelName": "mychannel", "contractName": "indysomething"},
        method: {type: "evaluateTransaction", command: "indy_ledger_submit_request"},
        args: {args: args_credential_definition},
        reqID: "reqID_test"
    };

    socket.emit('request2', requestData);

},  3000);
*/
