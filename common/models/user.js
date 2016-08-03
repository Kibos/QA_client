module.exports = function(User) {
	User.listUser = function(cb) {
    	User.find({}, cb);
 	};
	User.remoteMethod('listUser', {
    returns: {arg: 'user', type: 'array'},
    http: {path:'/list-user', verb: 'get'}
  });

};
