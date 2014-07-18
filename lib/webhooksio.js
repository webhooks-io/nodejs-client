var WebhooksAPI_v1_0 = require('./base');
module.exports = WebhooksAPI_v1_0;

/*****************************************************************************/
/************************* Related Methods: Accounts **************************/
/*****************************************************************************/

	/**
	 * Creates a new account.  This is the same call that is used when a user registers from webhooks.io.
	 * 
	 * POST - /v1/register
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#account-registration
	 * 
	 * @method registerAccount
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.registerAccount = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/register', []);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Creates a sub account.
	 * 
	 * POST - /v1/accounts/:account_id/subaccounts
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#create-sub-account
	 * 
	 * @method createSubAccount
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createSubAccount = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/subaccounts', [account_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Lists all sub accounts user an account.
	 * 
	 * GET - /v1/accounts/:account_id/subaccounts
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-sub-accounts
	 * 
	 * @method getSubAccounts
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getSubAccounts = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/subaccounts', [account_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Lists all accounts.
	 * 
	 * GET - /v1/accounts
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-accounts
	 * 
	 * @method getAccounts
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getAccounts = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the details of a specfic account.
	 * 
	 * GET - /v1/accounts/:account_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-account
	 * 
	 * @method getAccount
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getAccount = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id', [account_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Updates the details on an account.
	 * 
	 * PUT - /v1/accounts/:account_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-account
	 * 
	 * @method updateAccount
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateAccount = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id', [account_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Deletes an account or sub account.
	 * 
	 * DELETE - /v1/accounts/:account_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-account
	 * 
	 * @method deleteAccount
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteAccount = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id', [account_id]);

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
	 * Full details can be found at http://webhooks.io/docs/api/#create-application
	 * 
	 * @method createApplication
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createApplication = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications', [account_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates an Application.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-application
	 * 
	 * @method updateApplication
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateApplication = function(account_id, application_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id', [account_id, application_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-application
	 * 
	 * @method getApplication
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getApplication = function(account_id, application_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id', [account_id, application_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of applications for an account.
	 * 
	 * GET - /v1/accounts/:account_id/applications
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-applications
	 * 
	 * @method getApplications
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getApplications = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications', [account_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes an application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-application
	 * 
	 * @method deleteApplication
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteApplication = function(account_id, application_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id', [account_id, application_id]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Adds a version to an application.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/versions
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#create-application-version
	 * 
	 * @method createApplicationVersion
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createApplicationVersion = function(account_id, application_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions', [account_id, application_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates an application version.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id/versions/:application_version_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-application-version
	 * 
	 * @method updateApplicationVersion
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} application_version_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateApplicationVersion = function(account_id, application_id, application_version_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions/:application_version_id', [account_id, application_id, application_version_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic application version.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/versions/:application_version_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-application-version
	 * 
	 * @method getApplicationVersion
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} application_version_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getApplicationVersion = function(account_id, application_id, application_version_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions/:application_version_id', [account_id, application_id, application_version_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of versions for an application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/versions
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-application-versions
	 * 
	 * @method getApplicationVersions
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getApplicationVersions = function(account_id, application_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions', [account_id, application_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes a version for an application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id/versions/:application_version_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-application-version
	 * 
	 * @method deleteApplicationVersion
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} application_version_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteApplicationVersion = function(account_id, application_id, application_version_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/versions/:application_version_id', [account_id, application_id, application_version_id]);

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
	 * Full details can be found at http://webhooks.io/docs/api/#create-bucket
	 * 
	 * @method createBucket
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createBucket = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets', [account_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates a bucket.
	 * 
	 * PUT - /v1/accounts/:account_id/buckets/:bucket_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-bucket
	 * 
	 * @method updateBucket
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateBucket = function(account_id, bucket_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id', [account_id, bucket_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic bucket.
	 * 
	 * GET - /v1/accounts/:account_id/buckets/:bucket_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-bucket
	 * 
	 * @method getBucket
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getBucket = function(account_id, bucket_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id', [account_id, bucket_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of buckets for an account.
	 * 
	 * GET - /v1/accounts/:account_id/buckets
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-buckets
	 * 
	 * @method getBuckets
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getBuckets = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets', [account_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes a bucket.
	 * 
	 * DELETE - /v1/accounts/:account_id/buckets/:bucket_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-bucket
	 * 
	 * @method deleteBucket
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteBucket = function(account_id, bucket_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id', [account_id, bucket_id]);

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
	 * Full details can be found at http://webhooks.io/docs/api/#create-input
	 * 
	 * @method createInput
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createInput = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs', [account_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates the details for an input.
	 * 
	 * PUT - /v1/accounts/:account_id/inputs/:input_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-input
	 * 
	 * @method updateInput
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateInput = function(account_id, input_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id', [account_id, input_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic input.
	 * 
	 * GET - /v1/accounts/:account_id/inputs/:input_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-input
	 * 
	 * @method getInput
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getInput = function(account_id, input_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id', [account_id, input_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of inputs for an account.
	 * 
	 * GET - /v1/accounts/:account_id/buckets/:bucket_id/inputs
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-inputs
	 * 
	 * @method getInputs
	 * @param {String} account_id 
	 * @param {String} bucket_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getInputs = function(account_id, bucket_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/buckets/:bucket_id/inputs', [account_id, bucket_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes an input.
	 * 
	 * DELETE - /v1/accounts/:account_id/inputs/:input_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-input
	 * 
	 * @method deleteInput
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteInput = function(account_id, input_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id', [account_id, input_id]);

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
	 * Full details can be found at http://webhooks.io/docs/api/#create-output
	 * 
	 * @method createOutput
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createOutput = function(account_id, input_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id/outputs', [account_id, input_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates the details of an output.
	 * 
	 * PUT - /v1/accounts/:account_id/outputs/:output_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-output
	 * 
	 * @method updateOutput
	 * @param {String} account_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateOutput = function(account_id, output_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/outputs/:output_id', [account_id, output_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic output.
	 * 
	 * GET - /v1/accounts/:account_id/outputs/:output_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-output
	 * 
	 * @method getOutput
	 * @param {String} account_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getOutput = function(account_id, output_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/outputs/:output_id', [account_id, output_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of outputs.
	 * 
	 * GET - /v1/accounts/:account_id/inputs/:input_id/outputs
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-output
	 * 
	 * @method getOutputs
	 * @param {String} account_id 
	 * @param {String} input_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getOutputs = function(account_id, input_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/inputs/:input_id/outputs', [account_id, input_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes an output.
	 * 
	 * DELETE - /v1/accounts/:account_id/outputs/:output_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-output
	 * 
	 * @method deleteOutput
	 * @param {String} account_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteOutput = function(account_id, output_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/outputs/:output_id', [account_id, output_id]);

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
	 * Full details can be found at http://webhooks.io/docs/api/#create-consumer
	 * 
	 * @method createConsumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createConsumer = function(account_id, application_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers', [account_id, application_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns a list of all the consumers for a particular application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-consumers
	 * 
	 * @method getConsumers
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getConsumers = function(account_id, application_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers', [account_id, application_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Updates the details for a particular consumer.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-consumer
	 * 
	 * @method updateConsumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateConsumer = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Get the details for a particular consumer.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-consumer
	 * 
	 * @method getConsumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getConsumer = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Removes a consumer from a particular application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-consumer
	 * 
	 * @method deleteConsumer
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteConsumer = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Returns all the outputs for the consumer of a given application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-consumer-outputs
	 * 
	 * @method getConsumerOutputs
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getConsumerOutputs = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Adds an output for the consumer of a given application.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#create-consumer-output
	 * 
	 * @method createConsumerOutput
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createConsumerOutput = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates an output for the consumer of a given application.
	 * 
	 * PUT - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-consumer-output
	 * 
	 * @method updateConsumerOutput
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateConsumerOutput = function(account_id, application_id, consumer_id, output_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id', [account_id, application_id, consumer_id, output_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Deletes an output for the consumer of a given application.
	 * 
	 * DELETE - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-consumer-output
	 * 
	 * @method deleteConsumerOutput
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {String} output_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteConsumerOutput = function(account_id, application_id, consumer_id, output_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/outputs/:output_id', [account_id, application_id, consumer_id, output_id]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Returns all the buckets for the consumer of a given application.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/buckets
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-consumer-buckets
	 * 
	 * @method getConsumerBuckets
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getConsumerBuckets = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/buckets', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Sends a webhook to a particular consumer of an application for the given bucket_key.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/send/:bucket_key
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#send-webhook-to-consumer
	 * 
	 * @method sendConsumerWebhookRequest
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {String} bucket_key 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.sendConsumerWebhookRequest = function(account_id, application_id, consumer_id, bucket_key, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/send/:bucket_key', [account_id, application_id, consumer_id, bucket_key]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Checks to see if the consumer is subscribed to a given event or set of events.  If the event query param is not passed the complete list of events will be returned.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/check
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#check-consumer-subscription
	 * 
	 * @method getConsumerSubscription
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getConsumerSubscription = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/check', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns a log of all messages for a given consumer.
	 * 
	 * GET - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/log
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#consumer-request-log
	 * 
	 * @method getConsumerRequestLog
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getConsumerRequestLog = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/log', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Generates a client token to be used with the embedded views.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/client-token
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#create-client-token
	 * 
	 * @method createClientToken
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createClientToken = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/client-token', [account_id, application_id, consumer_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Returns the HTML for the embedded view.
	 * 
	 * POST - /v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/embedded-view-html
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-embedded-view-html
	 * 
	 * @method getEmbeddedViewHtml
	 * @param {String} account_id 
	 * @param {String} application_id 
	 * @param {String} consumer_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getEmbeddedViewHtml = function(account_id, application_id, consumer_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/applications/:application_id/consumers/:consumer_id/embedded-view-html', [account_id, application_id, consumer_id]);

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
	 * Full details can be found at http://webhooks.io/docs/api/#overview-report
	 * 
	 * @method getOverviewReport
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getOverviewReport = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/stats/overview', [account_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a general summary report.
	 * 
	 * GET - /v1/accounts/:account_id/stats/summary
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#summary-report
	 * 
	 * @method getSummaryReport
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getSummaryReport = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/stats/summary', [account_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a log of all messages.
	 * 
	 * GET - /v1/accounts/:account_id/log
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#request-log
	 * 
	 * @method getRequestLog
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getRequestLog = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/log', [account_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

/*****************************************************************************/
/************************* Related Methods: Users **************************/
/*****************************************************************************/

	/**
	 * Authenticates the users login credentials
	 * 
	 * PUT - /v1/authenticate
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#login
	 * 
	 * @method login
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.login = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/authenticate', []);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Allows a user to change their password.  Either the existing password or change key must be passed...and must match in order for this call to be successful.
	 * 
	 * PUT - /v1/accounts/:account_id/users/:user_id/change_password
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#change-password
	 * 
	 * @method changePassword
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.changePassword = function(account_id, user_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id/change_password', [account_id, user_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Allows the user to request their password to be emailed to them.  Really this provides them a link to the change password form.
	 * 
	 * POST - /v1/reset_password
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#reset-password
	 * 
	 * @method resetPassword
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.resetPassword = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/reset_password', []);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Looks up the meta data for the password change key.
	 * 
	 * GET - /v1/password_change_key/:password_change_key
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#lookup-password-change-key
	 * 
	 * @method lookupPasswordChangeKey
	 * @param {String} password_change_key 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.lookupPasswordChangeKey = function(password_change_key, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/password_change_key/:password_change_key', [password_change_key]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Adds a user to an account.
	 * 
	 * POST - /v1/accounts/:account_id/users
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#create-user
	 * 
	 * @method createUser
	 * @param {String} account_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.createUser = function(account_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users', [account_id]);

		this.execute(endpoint, 'POST', params, callback);
	}

	/**
	 * Updates a users account information.
	 * 
	 * PUT - /v1/accounts/:account_id/users/:user_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#update-user
	 * 
	 * @method updateUser
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.updateUser = function(account_id, user_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id', [account_id, user_id]);

		this.execute(endpoint, 'PUT', params, callback);
	}

	/**
	 * Returns the details for a specfic user.
	 * 
	 * GET - /v1/accounts/:account_id/users/:user_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-user
	 * 
	 * @method getUser
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getUser = function(account_id, user_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id', [account_id, user_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns a collection of users.
	 * 
	 * GET - /v1/accounts/:account_id/users
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#list-users
	 * 
	 * @method getUsers
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getUsers = function(account_id, user_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users', [account_id, user_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Deletes a user.
	 * 
	 * DELETE - /v1/accounts/:account_id/users/:user_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#delete-user
	 * 
	 * @method deleteUser
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.deleteUser = function(account_id, user_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id', [account_id, user_id]);

		this.execute(endpoint, 'DELETE', params, callback);
	}

	/**
	 * Handles validating the email address once the user has clicked the validation link in an email.
	 * 
	 * GET - /v1/verify/:email_verification_key
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#verify-email-address
	 * 
	 * @method verifyEmailAddress
	 * @param {String} email_verification_key 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.verifyEmailAddress = function(email_verification_key, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/verify/:email_verification_key', [email_verification_key]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Resends a verification email for a user.
	 * 
	 * GET - /v1/accounts/:account_id/users/:user_id/resend_verification
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#resend-verification-email
	 * 
	 * @method resendVerificationEmail
	 * @param {String} account_id 
	 * @param {String} user_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.resendVerificationEmail = function(account_id, user_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/accounts/:account_id/users/:user_id/resend_verification', [account_id, user_id]);

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
	 * Full details can be found at http://webhooks.io/docs/api/#health-check
	 * 
	 * @method healthCheck
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.healthCheck = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/health', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns all the possible public plans.
	 * 
	 * GET - /v1/plans
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#gets-plans
	 * 
	 * @method getPlans
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getPlans = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/plans', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the details of a specific plan.
	 * 
	 * GET - /v1/plans/:plan_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-plan
	 * 
	 * @method getPlan
	 * @param {String} plan_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getPlan = function(plan_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/plans/:plan_id', [plan_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns all valid timezones.
	 * 
	 * GET - /v1/util/timezones
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#get-timezones
	 * 
	 * @method getTimezones
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getTimezones = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/util/timezones', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the possible retry policies along with the system default policy.
	 * 
	 * GET - /v1/retry_policies
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#gets-retry-policies
	 * 
	 * @method getRetryPolicies
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getRetryPolicies = function(params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/retry_policies', []);

		this.execute(endpoint, 'GET', params, callback);
	}

	/**
	 * Returns the details of a specific retry policy.
	 * 
	 * GET - /v1/retry_policies/:policy_id
	 * 
	 * Full details can be found at http://webhooks.io/docs/api/#gets-retry-policy
	 * 
	 * @method getRetryPolicy
	 * @param {String} policy_id 
	 * @param {Object} params
	 * @param {Function} callback
	*/
	WebhooksAPI_v1_0.prototype.getRetryPolicy = function(policy_id, params, callback){
	if (typeof params == 'function') callback = params, params = {};
		var endpoint = this.expandEndpoint('/v1/retry_policies/:policy_id', [policy_id]);

		this.execute(endpoint, 'GET', params, callback);
	}

