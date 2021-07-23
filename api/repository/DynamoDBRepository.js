const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    convertEmptyValues: true,
});

exports.query = ( params ) => {
    return ddb.scan( params, (err, data) => {
        return err ?? data;        
    });    
}