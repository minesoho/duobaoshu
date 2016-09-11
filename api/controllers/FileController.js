'use strict';
/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var path = require('path');

module.exports = {
	uploadImage: function(req,res){
		var targetId = req.param('targetId');
		req.file('uploadFile').upload({
			dirname: path.join(sails.config.appPath, 'static')
		},function(err,uploadedFiles){
			if (err) {
		      return res.negotiate(err);
		    }

	    // If no files were uploaded, respond with an error.
	    if (uploadedFiles.length === 0){
	      return res.badRequest('No file was uploaded');
	    }

			let _fd = 'http://'+sails.config.static.domain + uploadedFiles[0].fd.split('/static')[1];

			return res.send('<script type="text/javascript">'+req.param('callback')+'('+JSON.stringify({
				targetId: targetId,
				fd: _fd
			})+')</script> ');
		});
    }
};
