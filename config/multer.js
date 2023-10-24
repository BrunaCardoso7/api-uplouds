const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { fromIni } = require('@aws-sdk/credential-provider-ini');
require('dotenv').config();

const s3Client = new S3Client({
  region: 'sa-east-1', // Substitua pela sua região
  credentials: fromIni({ configFilepath: '~/.aws/credentials' }), // Especifica o local do arquivo de configuração das credenciais
});

const myBucket = process.env.BUCKETNAME;

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: myBucket,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

module.exports = upload;