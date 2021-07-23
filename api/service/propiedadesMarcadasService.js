const propiedadesMarcadasRepository = require('../repository/DynamoDBRepository')

exports.get = () => {
    
    const params = {
        TableName: "qa-propiedadesMarcadas"
   };
    return propiedadesMarcadasRepository.query( params ).promise() ;
}