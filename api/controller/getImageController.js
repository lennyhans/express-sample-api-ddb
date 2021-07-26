const express = require('express');
const router = express.Router();
const getImageService = require("../service/getImageService");

/* GET home page. */
router.get('/:Bucket/:Key', async (req, res, next) => {
    const { Bucket, Key } = req.params
    const { raw } = req.query
    const response = await getImageService.get(Bucket, Key)

    if(raw !== undefined){
        console.log(response);
        return next();
    }
    res.status(200).send({ url: response });
});

module.exports = router;
