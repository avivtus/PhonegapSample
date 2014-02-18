var SAMPLE = (function(module) {

	module.DoIt = function(resultObject){
		resultObject.prepend(Date() + '<br/>');
	};

	return module;
}(SAMPLE||{}));