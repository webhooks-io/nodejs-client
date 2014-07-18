var request = require('request');

/**
 * Webhooks.io API wrapper for the API version 1.0. 
 * 
 * @param apiKey The API key to access the Webhooks.io API with
 * @param options Configuration options
 * @return Instance of WebhooksAPI_v1_0
 */
function WebhooksAPI_v1_0 (apiKey, options) {
	
	if (!options) 
		var options = {};
	
	this.version     = 'v1';
	this.apiKey      = apiKey;
	this.packageInfo = options.packageInfo;
	//this.datacenter  = this.datacenter[1];
	this.httpHost    = 'api.dev.webhooks.io';
	this.httpUri     = 'http://'+this.httpHost; 
	this.userAgent   = options.userAgent+' ' || '';
}

module.exports = WebhooksAPI_v1_0;

/**
 * Sends a given request as a HTTP POST (application/jason) to 
 * the Webhooks.io API and finally calls the given callback function with the 
 * resulting JSON object. This method should not be called directly but will be 
 * used internally by all API methods defined.
 * 
 * @param endpoint Webhooks.io resource/endpoint to call.
 * @param method HTTP Method to be used in the call.
 * @param params Parameters to call the API with.
 * @param callback Callback function to call on success 
 */
WebhooksAPI_v1_0.prototype.execute = function (endpoint, method, params, callback) {

	var finalParams = { apikey : this.apiKey };
	var currentParam;
	request({
		uri : this.httpUri + '/' + endpoint,
		method: method,
		headers : { 
			'User-Agent' : this.userAgent+'node-mailchimp/',
			'Content-Type' : 'application/json',
			'Authorization' : 'Bearer ' + this.apiKey
		}
	}, function (error, response, body) {
		var parsedResponse;
		if (error) {
			callback(new Error('Unable to connect to the Webhooks.io API endpoint.'));
		} else {

			try {
				parsedResponse = JSON.parse(body); 
			} catch (error) {
				callback(new Error('Error parsing JSON answer from Webhooks.io API.'));
				return;
			}
			/*
			if (response.statusCode != 200 || parsedResponse.status == 'error') {
				callback(helpers.createMailChimpError(parsedResponse.error, parsedResponse.code));
				return;
			}
			*/
			
			callback(null, parsedResponse);
			
		}

	});

}

WebhooksAPI_v1_0.prototype.expandEndpoint = function (endpoint, params) {

	var arrEndpoint = endpoint.split("/");
	var placeholder = "";
	var finalEndpoint = "";
	var replacementCount = 0;
	for (var i = 0; i < arrEndpoint.length; i++) {
	    placeholder = arrEndpoint[i];
	    if(placeholder.search(":") == 0){
	      placeholder = placeholder.substr(1, placeholder.length - 1);
	      if(params.length-1 <= i){
	        finalEndpoint = finalEndpoint +  "/" + params[replacementCount];
	        replacementCount++;
	      }else{
	        finalEndpoint = finalEndpoint +  "/" + arrEndpoint[i];
	      }
	    }else{
	      finalEndpoint = finalEndpoint +  "/" + arrEndpoint[i];  
	    }
	}
	return finalEndpoint;

}