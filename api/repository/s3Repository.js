const AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

exports.s3aws = (params) => {
    return s3.getSignedUrl('getObject', params)
}