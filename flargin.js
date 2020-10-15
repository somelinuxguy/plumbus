var AWS = require('aws-sdk');
var crypto = require('crypto');
var ses = new AWS.SES();

 exports.handler = async (event) => {
    let checksum = "";

    AWS.config.update({ region: "us-east-1" });
    // log full request for historical purposes in CloudWatch
    console.log("request: " + JSON.stringify(event));
   
    if (event.body) {
        let body = JSON.parse(event.body);
        // Checksum
        checksum = "sha512=" + crypto.createHmac("sha512", secret_token)
          .update(event.body)
          .digest("hex");
        console.log("Checksum: " + checksum)
        // if (checksum.length !== RPSignature.length || !crypto.timingSafeEqual(Buffer.from(RPSignature), Buffer.from(checksum))) {
        //     validTransaction = false;
        //    } else {
        //     validTransaction = true;
        //    

    if (validTransaction === true) {
        await ses.sendEmail(params).promise();
        // now return HTTP
        let response = {
            statusCode: 200,
            headers: {
                "x-processing" : "success"
            },
            body: "transaction received"
        }; 
        return response;
    } else if (validTransaction === false) {
        let response = {
            statusCode: 400,
            headers: {
                "x-artis-response" : "failure"
            },
            body: "Transaction failed due to bad payload or signature"
        }; 
        return response;
        }
    }
 }
