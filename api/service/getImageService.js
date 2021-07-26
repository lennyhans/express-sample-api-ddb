const s3Repository = require('../repository/s3Repository')

exports.get = (bucket, key) => {
    const params = {
        Bucket: bucket,
        Key: key
    };
    return s3Repository.s3aws(params);
}