module.exports = function(Product) {
	Product.listProduct = function(cb) {
    Product.find({}, cb);
  };
Product.remoteMethod('listProduct', {
    returns: {arg: 'product', type: 'array'},
    http: {path:'/list-product', verb: 'get'}
  });

Product.findProductByUserID = function(id,cb) {
    Product.find({where:{ownerId:id}}, cb);
  };
Product.remoteMethod('findProductByUserID', {
	accepts: [{arg: 'id',type: 'string',required: true}],
    returns: {arg: 'product', type: 'array'},
    http: {path:'/findProductByUserID', verb: 'get'}
  });




};
