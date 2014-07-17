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

/*****************************************************************************/
/************************* Related Methods: Accounts **************************/
/*****************************************************************************/

	/**
	 * Creates a new account.  This is the same call that is used when a user registers from webhooks.io.
	 * 
	 * POST - /v1/register
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#account-registration
	 * 
	 * @method account-registration
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.account_registration = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/register', []);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Creates a sub account.
	 * 
	 * POST - /v1/accounts/:account_id/subaccounts
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-sub-account
	 * 
	 * @method create-sub-account
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_sub_account = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/subaccounts', [account_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Lists all sub accounts user an account.
	 * 
	 * GET - /v1/accounts/:account_id/subaccounts
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-sub-accounts
	 * 
	 * @method list-sub-accounts
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_sub_accounts = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/subaccounts', [account_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Lists all accounts.
	 * 
	 * GET - /v1/accounts
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-accounts
	 * 
	 * @method list-accounts
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_accounts = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the details of a specfic account.
	 * 
	 * GET - /v1/accounts/:account_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-account
	 * 
	 * @method get-account
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_account = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id', [account_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Updates the details on an account.
	 * 
	 * PUT - /v1/accounts/:account_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-account
	 * 
	 * @method update-account
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_account = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id', [account_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Deletes an account or sub account.
	 * 
	 * DELETE - /v1/accounts/:account_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-account
	 * 
	 * @method delete-account
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_account = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id', [account_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Applications **************************/
/*****************************************************************************/

	/**
	 * Adds an application to an account
	 * 
	 * POST - /v1/accounts/:account_id/applications
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-application
	 * 
	 * @method create-application
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_application = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications', [account_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates an Application.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-application
	 * 
	 * @method update-application
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_application = function(account_id,application_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id', [account_id, application_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-application
	 * 
	 * @method get-application
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_application = function(account_id,application_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id', [account_id, application_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of applications for an account.
	 * 
	 * GET - /v1/accounts/:account_id/applications
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-applications
	 * 
	 * @method list-applications
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_applications = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications', [account_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes an application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-application
	 * 
	 * @method delete-application
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_application = function(account_id,application_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id', [account_id, application_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Adds a version to an application.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/versions
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-application-version
	 * 
	 * @method create-application-version
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_application_version = function(account_id,application_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions', [account_id, application_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates an application version.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id/versions/:application_version_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-application-version
	 * 
	 * @method update-application-version
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} application_version_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_application_version = function(account_id,application_id,application_version_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions/:application_version_id', [account_id, application_id, application_version_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic application version.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/versions/:application_version_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-application-version
	 * 
	 * @method get-application-version
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} application_version_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_application_version = function(account_id,application_id,application_version_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions/:application_version_id', [account_id, application_id, application_version_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of versions for an application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/versions
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-application-versions
	 * 
	 * @method list-application-versions
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_application_versions = function(account_id,application_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions', [account_id, application_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes a version for an application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id/versions/:application_version_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-application-version
	 * 
	 * @method delete-application-version
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} application_version_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_application_version = function(account_id,application_id,application_version_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions/:application_version_id', [account_id, application_id, application_version_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Buckets **************************/
/*****************************************************************************/

	/**
	 * Adds a bucket to an account
	 * 
	 * POST - /v1/accounts/:account_id/buckets
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-bucket
	 * 
	 * @method create-bucket
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_bucket = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets', [account_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates a bucket.
	 * 
	 * PUT - /v1/accounts/:account_id/buckets/:bucket_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-bucket
	 * 
	 * @method update-bucket
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_bucket = function(account_id,bucket_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id', [account_id, bucket_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic bucket.
	 * 
	 * GET - /v1/accounts/:account_id/buckets/:bucket_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-bucket
	 * 
	 * @method get-bucket
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_bucket = function(account_id,bucket_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id', [account_id, bucket_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of buckets for an account.
	 * 
	 * GET - /v1/accounts/:account_id/buckets
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-buckets
	 * 
	 * @method list-buckets
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_buckets = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets', [account_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes a bucket.
	 * 
	 * DELETE - /v1/accounts/:account_id/buckets/:bucket_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-bucket
	 * 
	 * @method delete-bucket
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_bucket = function(account_id,bucket_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id', [account_id, bucket_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Inputs **************************/
/*****************************************************************************/

	/**
	 * Adds an input to an account
	 * 
	 * POST - /v1/accounts/:account_id/inputs
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-input
	 * 
	 * @method create-input
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_input = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs', [account_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates the details for an input.
	 * 
	 * PUT - /v1/accounts/:account_id/inputs/:input_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-input
	 * 
	 * @method update-input
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_input = function(account_id,input_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id', [account_id, input_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic input.
	 * 
	 * GET - /v1/accounts/:account_id/inputs/:input_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-input
	 * 
	 * @method get-input
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_input = function(account_id,input_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id', [account_id, input_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of inputs for an account.
	 * 
	 * GET - /v1/accounts/:account_id/buckets/:bucket_id/inputs
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-inputs
	 * 
	 * @method list-inputs
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_inputs = function(account_id,bucket_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id/inputs', [account_id, bucket_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes an input.
	 * 
	 * DELETE - /v1/accounts/:account_id/inputs/:input_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-input
	 * 
	 * @method delete-input
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_input = function(account_id,input_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id', [account_id, input_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Outputs **************************/
/*****************************************************************************/

	/**
	 * Adds an output for an input.
	 * 
	 * POST - /v1/accounts/:account_id/inputs/:input_id/outputs
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-output
	 * 
	 * @method create-output
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_output = function(account_id,input_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id/outputs', [account_id, input_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates the details of an output.
	 * 
	 * PUT - /v1/accounts/:account_id/outputs/:output_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-output
	 * 
	 * @method update-output
	 * @param {String} account_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_output = function(account_id,output_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/outputs/:output_id', [account_id, output_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic output.
	 * 
	 * GET - /v1/accounts/:account_id/outputs/:output_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-output
	 * 
	 * @method get-output
	 * @param {String} account_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_output = function(account_id,output_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/outputs/:output_id', [account_id, output_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of outputs.
	 * 
	 * GET - /v1/accounts/:account_id/inputs/:input_id/outputs
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-output
	 * 
	 * @method list-output
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_output = function(account_id,input_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id/outputs', [account_id, input_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes an output.
	 * 
	 * DELETE - /v1/accounts/:account_id/outputs/:output_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-output
	 * 
	 * @method delete-output
	 * @param {String} account_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_output = function(account_id,output_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/outputs/:output_id', [account_id, output_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Providers **************************/
/*****************************************************************************/

	/**
	 * Creates a consumer for an application
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#provision-consumer
	 * 
	 * @method provision-consumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.provision_consumer = function(account_id,application_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers', [account_id, application_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns a list of all the consumers for a particular application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-application-consumers
	 * 
	 * @method get-application-consumers
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_application_consumers = function(account_id,application_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers', [account_id, application_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Updates the details for a particular consumer.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-consumer
	 * 
	 * @method update-consumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_consumer = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Get the details for a particular consumer.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-consumer
	 * 
	 * @method get-consumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_consumer = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Removes a consumer from a particular application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-consumer
	 * 
	 * @method delete-consumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_consumer = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Returns all the outputs for the consumer of a given application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-consumer-outputs
	 * 
	 * @method list-consumer-outputs
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_consumer_outputs = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Adds an output for the consumer of a given application.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-consumer-output
	 * 
	 * @method create-consumer-output
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_consumer_output = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates an output for the consumer of a given application.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-consumer-output
	 * 
	 * @method update-consumer-output
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_consumer_output = function(account_id,application_id,consumer_id,output_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id', [account_id, application_id, consumer_id, output_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Deletes an output for the consumer of a given application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-consumer-output
	 * 
	 * @method delete-consumer-output
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_consumer_output = function(account_id,application_id,consumer_id,output_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id', [account_id, application_id, consumer_id, output_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Returns all the buckets for the consumer of a given application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/buckets
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-consumer-buckets
	 * 
	 * @method list-consumer-buckets
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_consumer_buckets = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/buckets', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Sends a webhook to a particular consumer of an application for the given bucket_key.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/send/:bucket_key
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#send-webhook-to-consumer
	 * 
	 * @method send-webhook-to-consumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {String} bucket_key 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.send_webhook_to_consumer = function(account_id,application_id,consumer_id,bucket_key,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/send/:bucket_key', [account_id, application_id, consumer_id, bucket_key, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Checks to see if the consumer is subscribed to a given event or set of events.  If the event query param is not passed the complete list of events will be returned.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/check
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#check-consumer-subscription
	 * 
	 * @method check-consumer-subscription
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.check_consumer_subscription = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/check', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns a log of all messages for a given consumer.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/log
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#consumer-request-log
	 * 
	 * @method consumer-request-log
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.consumer_request_log = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/log', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Generates a client token to be used with the embedded views.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/client-token
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-client-token
	 * 
	 * @method create-client-token
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_client_token = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/client-token', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns the HTML for the embedded view.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/embedded-view-html
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-embedded-view-html
	 * 
	 * @method get-embedded-view-html
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_embedded_view_html = function(account_id,application_id,consumer_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/embedded-view-html', [account_id, application_id, consumer_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Reporting **************************/
/*****************************************************************************/

	/**
	 * Returns a general overview.
	 * 
	 * GET - /v1/accounts/:account_id/stats/overview
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#overview-report
	 * 
	 * @method overview-report
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.overview_report = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/stats/overview', [account_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a general summary report.
	 * 
	 * GET - /v1/accounts/:account_id/stats/summary
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#summary-report
	 * 
	 * @method summary-report
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.summary_report = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/stats/summary', [account_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the statistics for the bucket.
	 * 
	 * POST - /v1/accounts/:account_id/buckets/:bucket_id/stats
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#bucket-statistics
	 * 
	 * @method bucket-statistics
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.bucket_statistics = function(account_id,bucket_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id/stats', [account_id, bucket_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns the statistics for the bucket.
	 * 
	 * POST - /v1/accounts/:account_id/inputs/:input_id/stats
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#input-statistics
	 * 
	 * @method input-statistics
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.input_statistics = function(account_id,input_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id/stats', [account_id, input_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns a log of input requests.
	 * 
	 * POST - /v1/accounts/:account_id/inputs/:input_id/log
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#input-log
	 * 
	 * @method input-log
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.input_log = function(account_id,input_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id/log', [account_id, input_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns a log of all messages.
	 * 
	 * GET - /v1/accounts/:account_id/log
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#request-log
	 * 
	 * @method request-log
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.request_log = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/log', [account_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the statistics for the bucket.
	 * 
	 * POST - /v1/accounts/:account_id/outputs/:output_id/stats
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#output-statistics
	 * 
	 * @method output-statistics
	 * @param {String} account_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.output_statistics = function(account_id,output_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/outputs/:output_id/stats', [account_id, output_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Users **************************/
/*****************************************************************************/

	/**
	 * Authenticates the users login credentials
	 * 
	 * PUT - /v1/authenticate
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#login
	 * 
	 * @method login
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.login = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/authenticate', []);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Allows a user to change their password.  Either the existing password or change key must be passed...and must match in order for this call to be successful.
	 * 
	 * PUT - /v1/accounts/:account_id/users/:user_id/change_password
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#change-password
	 * 
	 * @method change-password
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.change_password = function(account_id,user_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id/change_password', [account_id, user_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Allows the user to request their password to be emailed to them.  Really this provides them a link to the change password form.
	 * 
	 * POST - /v1/reset_password
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#reset-password
	 * 
	 * @method reset-password
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.reset_password = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/reset_password', []);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Looks up the meta data for the password change key.
	 * 
	 * GET - /v1/password_change_key/:password_change_key
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#lookup-password-change-key
	 * 
	 * @method lookup-password-change-key
	 * @param {String} password_change_key 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.lookup_password_change_key = function(password_change_key,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/password_change_key/:password_change_key', [password_change_key, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Adds a user to an account.
	 * 
	 * POST - /v1/accounts/:account_id/users
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#create-user
	 * 
	 * @method create-user
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.create_user = function(account_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users', [account_id, ]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates a users account information.
	 * 
	 * PUT - /v1/accounts/:account_id/users/:user_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#update-user
	 * 
	 * @method update-user
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.update_user = function(account_id,user_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id', [account_id, user_id, ]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic user.
	 * 
	 * GET - /v1/accounts/:account_id/users/:user_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-user
	 * 
	 * @method get-user
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_user = function(account_id,user_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id', [account_id, user_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of users.
	 * 
	 * GET - /v1/accounts/:account_id/users
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#list-users
	 * 
	 * @method list-users
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.list_users = function(account_id,user_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users', [account_id, user_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes a user.
	 * 
	 * DELETE - /v1/accounts/:account_id/users/:user_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#delete-user
	 * 
	 * @method delete-user
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.delete_user = function(account_id,user_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id', [account_id, user_id, ]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Handles validating the email address once the user has clicked the validation link in an email.
	 * 
	 * GET - /v1/verify/:email_verification_key
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#verify-email-address
	 * 
	 * @method verify-email-address
	 * @param {String} email_verification_key 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.verify_email_address = function(email_verification_key,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/verify/:email_verification_key', [email_verification_key, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Resends a verification email for a user.
	 * 
	 * GET - /v1/accounts/:account_id/users/:user_id/resend_verification
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#resend-verification-email
	 * 
	 * @method resend-verification-email
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.resend_verification_email = function(account_id,user_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id/resend_verification', [account_id, user_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Utils **************************/
/*****************************************************************************/

	/**
	 * System health check
	 * 
	 * GET - /v1/health
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#health-check
	 * 
	 * @method health-check
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.health_check = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/health', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns all the possible public plans.
	 * 
	 * GET - /v1/plans
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#gets-plans
	 * 
	 * @method gets-plans
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.gets_plans = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/plans', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the details of a specific plan.
	 * 
	 * GET - /v1/plans/:plan_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-plan
	 * 
	 * @method get-plan
	 * @param {String} plan_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_plan = function(plan_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/plans/:plan_id', [plan_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns all valid timezones.
	 * 
	 * GET - /v1/util/timezones
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#get-timezones
	 * 
	 * @method get-timezones
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.get_timezones = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/util/timezones', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the possible retry policies along with the system default policy.
	 * 
	 * GET - /v1/retry_policies
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#gets-retry-policies
	 * 
	 * @method gets-retry-policies
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.gets_retry_policies = function(	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/retry_policies', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the details of a specific retry policy.
	 * 
	 * GET - /v1/retry_policies/:policy_id
	 * 
	 * Full documention ca be found at http://webhooks.io/docs/api/#gets-retry-policy
	 * 
	 * @method gets-retry-policy
	 * @param {String} policy_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.gets_retry_policy = function(policy_id,	params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/retry_policies/:policy_id', [policy_id, ]);

		this.execute(endpoint, 'GET', params, callback);
	}

