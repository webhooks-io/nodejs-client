Webhooks.io Node.js Client (beta)
=======

The full documention can be found here and this client mirrors each of the corresponding API calls as much as possible.  If you see an option in the API it can be passed as a parameter in the API call.

Getting Started
-----

1. Install the node module:

```
npm install webhooks-io-client
```

2. Obtain your Webhooks.io API credentials

3. Create a Webhooks.io Client Object:

```
var WebhooksioAPI = require('webhooks-io-client');
var wh_api = new WebhooksioAPI('MY_API_KEY', {});
```

Usage
-----

###Accounts

####Account Registration

Creates a new account.  This is the same call that is used when a user registers from webhooks.io.

```
wh_api.account_registration(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name``` - Account/Company name (example: Sample Company, LLC)
* ```first_name```(required) - First name of the primary user on the account. (example: Bob)
* ```last_name```(required) - Last name of the primary user on the account. (example: Smith)
* ```email_address```(required) - The primary email address for the user on the account. (example: bob.smith@example.com)
* ```password```(required) - The password for the user on the account
* ```password_confirm```(required) - The confirmation entry for the password. (example: Bob)
* ```plan_id```(required) - The plan id selected for the account.  Use /plans resource for a list of all plans.
* ```card_number``` - The credit card number to be used for billing.
* ```card_month``` - The expiration month for the credit card.
* ```card_year``` - The expiration year for the credit card.
* ```card_cvc``` - The CVC on the credit card.
* ```coupon``` - A coupon code to be used.
* ```referrer``` - The location the user came from.
* ```email_verification_callback_url``` - The URL for where the user should be directed to upon verification of the email address.  A query param of ?status=[success,failure] will be appended to this URL.
* ```invite_code```(required) - The invite code used to create account.

####Create Sub Account

Creates a sub account.

```
wh_api.create_sub_account(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - First name of the primary user on the account. (example: Bob)
* ```account_key``` - Identifier from another system. (example: acct123456789)

####List Sub Accounts

Lists all sub accounts user an account.

```
wh_api.list_sub_accounts(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```account_key``` - Identifier from another system. (example: acct123456789)

####List Accounts

Lists all accounts.

```
wh_api.list_accounts(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```account_key``` - Identifier from another system. (example: acct123456789)

####Get Account

Returns the details of a specfic account.

```
wh_api.get_account(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Update Account

Updates the details on an account.

```
wh_api.update_account(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Friendly name for the account. (example: Bob)
* ```account_key``` - Identifier from another system. (example: acct123456789)

####Delete Account

Deletes an account or sub account.

```
wh_api.delete_account(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

###Applications

####Create Application

Adds an application to an account

```
wh_api.create_application(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Name for the bucket. (example: My Awesome Application)
* ```categories```(required) - The categories the application belongs to. (example: ecommerce,payment)
* ```overview```(required) - A short description of the application - 255 characters or less. (example: This is the details of my awesome application.)
* ```description```(required) - A full description of the application. (example: This is the details of my awesome application.)
* ```homepage_url```(required) - The url of the application homepage. (example: http://mywebsite.com)
* ```api_url```(required) - The url to the API documention for the application. (example: http://api.mywebsite.com)
* ```logo_url```(required) - The url to the logo. (example: http://mywebsite.com/webhooksio/logo.jpg)
* ```active```(required) - If the application should be active (viewable) or not.

####Update Application

Updates an Application.

```
wh_api.update_application(account_id, application_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Name for the bucket. (example: My Awesome Application)
* ```categories```(required) - The categories the application belongs to. (example: ecommerce,payment)
* ```overview```(required) - A short description of the application - 255 characters or less. (example: This is the details of my awesome application.)
* ```description```(required) - A full description of the application. (example: This is the details of my awesome application.)
* ```homepage_url```(required) - The url of the application homepage. (example: http://mywebsite.com)
* ```api_url```(required) - The url to the API documention for the application. (example: http://api.mywebsite.com)
* ```logo_url```(required) - The url to the logo. (example: http://mywebsite.com/webhooksio/logo.jpg)
* ```active```(required) - If the application should be active (viewable) or not.

####Get Application

Returns the details for a specfic application.

```
wh_api.get_application(account_id, application_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Applications

Returns a collection of applications for an account.

```
wh_api.list_applications(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Delete Application

Deletes an application.

```
wh_api.delete_application(account_id, application_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Create Application Version

Adds a version to an application.

```
wh_api.create_application_version(account_id, application_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```key```(required) - The key/id for this version. (example: 1.1)
* ```release_date```(required) - The date this version was released.
* ```version_json```(required) - The complete JSON definition for the version.
* ```examples_json```(required) - The complete JSON definition for the version examples/recipies
* ```active```(required) - If the version should be active (viewable) or not.

####Update Application Version

Updates an application version.

```
wh_api.update_application_version(account_id, application_id, application_version_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```application_version_id``` -  (example: AVe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```key```(required) - The key/id for this version. (example: 1.1)
* ```release_date```(required) - The date this version was released.
* ```version_json```(required) - The complete JSON definition for the version.
* ```examples_json```(required) - The complete JSON definition for the version examples/recipies
* ```active```(required) - If the version should be active (viewable) or not.

####Get Application Version

Returns the details for a specfic application version.

```
wh_api.get_application_version(account_id, application_id, application_version_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```application_version_id``` -  (example: AVe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Application Versions

Returns a collection of versions for an application.

```
wh_api.list_application_versions(account_id, application_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Delete Application Version

Deletes a version for an application.

```
wh_api.delete_application_version(account_id, application_id, application_version_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```application_version_id``` -  (example: AVe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

###Buckets

####Create Bucket

Adds a bucket to an account

```
wh_api.create_bucket(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Name for the bucket. (example: My Bucket)
* ```key``` - The key for the bucket. (example: my-bucket)

####Update Bucket

Updates a bucket.

```
wh_api.update_bucket(account_id, bucket_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```bucket_id``` -  (example: BUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Name for the bucket. (example: My Bucket)
* ```key``` - The key for the bucket. (example: my-bucket)

####Get Bucket

Returns the details for a specfic bucket.

```
wh_api.get_bucket(account_id, bucket_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```bucket_id``` -  (example: BUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Buckets

Returns a collection of buckets for an account.

```
wh_api.list_buckets(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Delete Bucket

Deletes a bucket.

```
wh_api.delete_bucket(account_id, bucket_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```bucket_id``` -  (example: BUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

###Inputs

####Create Input

Adds an input to an account

```
wh_api.create_input(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```bucket_id```(required) - The bucket the input belongs to (example: BUe987d754d82a419e8c54c2185ed0ef29)
* ```name```(required) - Name for the input. (example: My Bucket)
* ```status``` - The status of the bucket, defaults to active.
* ```event_location``` - The location of the event, header, payload, query param, etc (example: payload)
* ```event_path``` - The path to the value that specifies what type of event is coming in.  This starts with the value msg. (example: msg.event)
* ```event_filters``` - The events that this input should be triggerd for.  This can be a comma delimited list of events. (example: account.created,message.sent)
* ```delivery_mode``` - The mode the request should be made in.  Valid options include sync and async.
* ```response_code``` - HTTP Response code to provide upon hook receipt - defaults to 200
* ```response_content``` - Any content that should be provided upon hook receipt.
* ```response_content_type``` - The content type that should be returned upon hook receipt, this should mirror the data in the response_content variable. (example: application/json)
* ```authentication_failures``` - How to handle authentication failures.
* ```authentication_type``` - The type of authentication to apply to incoming requests.

####Update Input

Updates the details for an input.

```
wh_api.update_input(account_id, input_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```input_id``` -  (example: INe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Name for the input. (example: My Bucket)
* ```status``` - The status of the bucket, defaults to active.
* ```event_location``` - The location of the event, header, payload, query param, etc (example: payload)
* ```event_path``` - The path to the value that specifies what type of event is coming in.  This starts with the value msg. (example: msg.event)
* ```event_filters``` - The events that this input should be triggerd for.  This can be a comma delimited list of events. (example: account.created,message.sent)
* ```delivery_mode``` - The mode the request should be made in.  Valid options include sync and async.
* ```response_code``` - HTTP Response code to provide upon hook receipt - defaults to 200
* ```response_content``` - Any content that should be provided upon hook receipt.
* ```response_content_type``` - The content type that should be returned upon hook receipt, this should mirror the data in the response_content variable. (example: application/json)
* ```authentication_failures``` - How to handle authentication failures.
* ```authentication_type``` - The type of authentication to apply to incoming requests.

####Get Input

Returns the details for a specfic input.

```
wh_api.get_input(account_id, input_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```input_id``` -  (example: INe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Inputs

Returns a collection of inputs for an account.

```
wh_api.list_inputs(account_id, bucket_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```bucket_id``` -  (example: BUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```key``` - Name for the bucket.
* ```event_filter``` - The event that should be filtered on.

####Delete Input

Deletes an input.

```
wh_api.delete_input(account_id, input_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```input_id``` -  (example: INe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

###Outputs

####Create Output

Adds an output for an input.

```
wh_api.create_output(account_id, input_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```input_id``` -  (example: INe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Name for the input. (example: My Bucket)
* ```endpoint_url```(required) - The status of the bucket, defaults to active.
* ```delivery_order``` - How the deliveries should operate.  Valid options are random or fifo.  The default is random (example: random)
* ```status``` - The status of the bucket, defaults to active.
* ```message_method``` - The HTTP method the message will be sent with.  If null the method will pass through. (example: GET)
* ```event_filters``` - The events that this input should be triggerd for.  This can be a comma delimited list of events. (example: account.created,message.sent)
* ```authentication_type``` - The type of authentication to apply to incoming requests.
* ```retry_policy_id``` - The retry algorithm that will be used for failed attempts.
* ```retry_count``` - The number of times the hook will be retried.
* ```retry_interval``` - The interval for which the retries will be set.
* ```verify_ssl``` - Ensure the SSL certificate is trusted and valid.  If false, this will bypass this protection.
* ```headers_to_include``` - A comma delimited list of custom headers to include.
* ```header_prefix``` - The prefix of the custom headers that will be included.  The default is Webhooks (example: Webhooks)
* ```alert_on_failure``` - A comma delimited list of email addresses to alert when a webhook enters the failed status. (example: bob@mail.com,john@email.com)

####Update Output

Updates the details of an output.

```
wh_api.update_output(account_id, output_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```output_id``` -  (example: OUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - Name for the input. (example: My Bucket)
* ```endpoint_url```(required) - The status of the bucket, defaults to active.
* ```delivery_order``` - How the deliveries should operate.  Valid options are random or fifo.  The default is random (example: random)
* ```status``` - The status of the bucket, defaults to active.
* ```message_method``` - The HTTP method the message will be sent with.  If null the method will pass through. (example: GET)
* ```event_filters``` - The events that this input should be triggerd for.  This can be a comma delimited list of events. (example: account.created,message.sent)
* ```authentication_type``` - The type of authentication to apply to incoming requests.
* ```retry_policy_id``` - The retry algorithm that will be used for failed attempts.
* ```retry_count``` - The number of times the hook will be retried.
* ```retry_interval``` - The interval for which the retries will be set.
* ```verify_ssl``` - Ensure the SSL certificate is trusted and valid.  If false, this will bypass this protection.
* ```headers_to_include``` - A comma delimited list of custom headers to include.
* ```header_prefix``` - The prefix of the custom headers that will be included.  The default is Webhooks (example: Webhooks)
* ```alert_on_failure``` - A comma delimited list of email addresses to alert when a webhook enters the failed status. (example: bob@mail.com,john@email.com)

####Get Output

Returns the details for a specfic output.

```
wh_api.get_output(account_id, output_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```output_id``` -  (example: OUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Output

Returns a collection of outputs.

```
wh_api.list_output(account_id, input_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```input_id``` -  (example: INe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```output_key``` - Name for the bucket.

####Delete Output

Deletes an output.

```
wh_api.delete_output(account_id, output_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```output_id``` -  (example: OUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

###Providers

####Provision Consumer

Creates a consumer for an application

```
wh_api.provision_consumer(account_id, application_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```consumer_id```(required) - The id for the consumer of the application.  This id should be the unique id from the application provider that identifies this customer/consumer of the application.
* ```bucket_key```(required) - The bucket key that identifies the container for this consumer, if this does not exist it will be created. Default is default. (example: default)
* ```name```(required) - The name of the consumer.  This could be the account name within the provider application for example. (example: ACME Corp, Inc.)

####Get Application Consumers

Returns a list of all the consumers for a particular application.

```
wh_api.get_application_consumers(account_id, application_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Update Consumer

Updates the details for a particular consumer.

```
wh_api.update_consumer(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```name```(required) - The name of the consumer.  This could be the account name within the provider application for example. (example: ACME Corp, Inc.)

####Get Consumer

Get the details for a particular consumer.

```
wh_api.get_consumer(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Delete Consumer

Removes a consumer from a particular application.

```
wh_api.delete_consumer(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Consumer outputs

Returns all the outputs for the consumer of a given application.

```
wh_api.list_consumer_outputs(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```bucket_key```(required) - The bucket key the output shoud be created for. (example: default)
* ```output_key``` - Name for the bucket.

####Create Consumer output

Adds an output for the consumer of a given application.

```
wh_api.create_consumer_output(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```application_version_id```(required) - The version of the application the output should respond to. (example: Webhooks)
* ```name```(required) - Name for the input. (example: My Bucket)
* ```bucket_key```(required) - The bucket key the output shoud be created for. (example: default)
* ```endpoint_url```(required) - The status of the bucket, defaults to active.
* ```delivery_order``` - How the deliveries should operate.  Valid options are random or fifo.  The default is random (example: random)
* ```status``` - The status of the bucket, defaults to active.
* ```message_method``` - The HTTP method the message will be sent with.  If null the method will pass through. (example: GET)
* ```event_filters``` - The events that this input should be triggerd for.  This can be a comma delimited list of events. (example: account.created,message.sent)
* ```authentication_type``` - The type of authentication to apply to incoming requests.
* ```retry_policy_id``` - The retry algorithm that will be used for failed attempts.
* ```retry_count``` - The number of times the hook will be retried.
* ```retry_interval``` - The interval for which the retries will be set.
* ```verify_ssl``` - Ensure the SSL certificate is trusted and valid.  If false, this will bypass this protection.
* ```headers_to_include``` - A comma delimited list of custom headers to include.
* ```header_prefix``` - The prefix of the custom headers that will be included.  The default is Webhooks (example: Webhooks)
* ```alert_on_failure``` - A comma delimited list of email addresses to alert when a webhook enters the failed status. (example: bob@mail.com,john@email.com)

####Update Consumer output

Updates an output for the consumer of a given application.

```
wh_api.update_consumer_output(account_id, application_id, consumer_id, output_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```output_id``` -  (example: OUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```application_version_id```(required) - The version of the application the output should respond to. (example: Webhooks)
* ```name```(required) - Name for the input. (example: My Bucket)
* ```endpoint_url```(required) - The status of the bucket, defaults to active.
* ```delivery_order``` - How the deliveries should operate.  Valid options are random or fifo.  The default is random (example: random)
* ```status``` - The status of the bucket, defaults to active.
* ```message_method``` - The HTTP method the message will be sent with.  If null the method will pass through. (example: GET)
* ```event_filters``` - The events that this input should be triggerd for.  This can be a comma delimited list of events. (example: account.created,message.sent)
* ```authentication_type``` - The type of authentication to apply to incoming requests.
* ```retry_policy_id``` - The retry algorithm that will be used for failed attempts.
* ```retry_count``` - The number of times the hook will be retried.
* ```retry_interval``` - The interval for which the retries will be set.
* ```verify_ssl``` - Ensure the SSL certificate is trusted and valid.  If false, this will bypass this protection.
* ```headers_to_include``` - A comma delimited list of custom headers to include.
* ```header_prefix``` - The prefix of the custom headers that will be included.  The default is Webhooks (example: Webhooks)
* ```alert_on_failure``` - A comma delimited list of email addresses to alert when a webhook enters the failed status. (example: bob@mail.com,john@email.com)

####Delete Consumer output

Deletes an output for the consumer of a given application.

```
wh_api.delete_consumer_output(account_id, application_id, consumer_id, output_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```output_id``` -  (example: OUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Consumer Buckets

Returns all the buckets for the consumer of a given application.

```
wh_api.list_consumer_buckets(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Send webhook to consumer

Sends a webhook to a particular consumer of an application for the given bucket_key.

```
wh_api.send_webhook_to_consumer(account_id, application_id, consumer_id, bucket_key, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```bucket_key``` -  (example: development)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Check consumer subscription

Checks to see if the consumer is subscribed to a given event or set of events.  If the event query param is not passed the complete list of events will be returned.

```
wh_api.check_consumer_subscription(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```bucket_key```(required) - The bucket key the subscription should be checked for. (example: development)
* ```event_name```(required) - The name of the event to check.
* ```include_output_detail``` - If the details of each subscribed output should be returned.

####Consumer Request Log

Returns a log of all messages for a given consumer.

```
wh_api.consumer_request_log(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date``` - The start date for the data.  This can be an exact UTC date or a texted based time period.  Valid text time periods can be found at: http://sugarjs.com/date_formats#text_formats
* ```end_date``` - The end date for the data.  This can be an exact UTC date or a texted based time period.  Valid text time periods can be found at: http://sugarjs.com/date_formats#text_formats
* ```output_id``` - 
* ```http_status``` - 

####Create Client Token

Generates a client token to be used with the embedded views.

```
wh_api.create_client_token(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```bucket_key``` - The bucket key the client token should be generated for.  This can be an arbitrary value that maps back to your system. (example: development)
* ```paths``` - The permitted paths.

####Get Embedded View HTML

Returns the HTML for the embedded view.

```
wh_api.get_embedded_view_html(account_id, application_id, consumer_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```application_id``` -  (example: APe987d754d82a419e8c54c2185ed0ef29)
* ```consumer_id``` -  (example: my_customer_id)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```bucket_key``` - The bucket key the client token should be generated for.  This can be an arbitrary value that maps back to your system. (example: development)
* ```paths``` - The permitted paths.
* ```css_url``` - URL to a css file that will be applied to the application styles.

###Reporting

####Overview Report

Returns a general overview.

```
wh_api.overview_report(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date```(required) - The start date for the data.
* ```end_date```(required) - The end date for the data.
* ```precision```(required) - The end date for the data.
* ```bucket_id``` - The end date for the data.
* ```output_id``` - The end date for the data.
* ```input_id``` - The end date for the data.
* ```include_sub_accounts``` - If sub account data should be included.

####Summary Report

Returns a general summary report.

```
wh_api.summary_report(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date``` - The start date for the data.
* ```end_date``` - The end date for the data.
* ```bucket_id``` - The end date for the data.
* ```output_id``` - The end date for the data.
* ```input_id``` - The end date for the data.

####Bucket Statistics

Returns the statistics for the bucket.

```
wh_api.bucket_statistics(account_id, bucket_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```bucket_id``` -  (example: BUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date```(required) - The start date for the data.
* ```end_date```(required) - The end date for the data.

####Input Statistics

Returns the statistics for the bucket.

```
wh_api.input_statistics(account_id, input_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```input_id``` -  (example: INe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date```(required) - The start date for the data.
* ```end_date```(required) - The end date for the data.

####Input Log

Returns a log of input requests.

```
wh_api.input_log(account_id, input_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```input_id``` -  (example: INe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date``` - The start date for the data.
* ```end_date``` - The end date for the data.
* ```bucket_id``` - 
* ```http_status``` - 

####Request Log

Returns a log of all messages.

```
wh_api.request_log(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date``` - The start date for the data.  This can be an exact UTC date or a texted based time period.  Valid text time periods can be found at: http://sugarjs.com/date_formats#text_formats
* ```end_date``` - The end date for the data. This can be an exact UTC date or a texted based time period.  Valid text time periods can be found at: http://sugarjs.com/date_formats#text_formats
* ```input_id``` - 
* ```bucket_id``` - 
* ```http_status``` - 

####Output Statistics

Returns the statistics for the bucket.

```
wh_api.output_statistics(account_id, output_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```output_id``` -  (example: OUe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```start_date```(required) - The start date for the data.
* ```end_date```(required) - The end date for the data.

###Users

####Login

Authenticates the users login credentials

```
wh_api.login(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```email_address```(required) - The user's email address.
* ```password```(required) - The password supplied for login.

####Change Password

Allows a user to change their password.  Either the existing password or change key must be passed...and must match in order for this call to be successful.

```
wh_api.change_password(account_id, user_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```user_id``` -  (example: USe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```new_password```(required) - The new password for the account.
* ```new_confirm_password```(required) - A confirmation of the new password for their account.
* ```change_key``` - The code that was supplied in the password change email to allow them to change their email.
* ```existing_password``` - The current password on the user account.

####Reset Password

Allows the user to request their password to be emailed to them.  Really this provides them a link to the change password form.

```
wh_api.reset_password(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```email_address```(required) - The primary email address for the user on the account. (example: bob.smith@example.com)

####Lookup Password Change Key

Looks up the meta data for the password change key.

```
wh_api.lookup_password_change_key(password_change_key, options, function(error, body){});
```
#####Parameters

* ```password_change_key``` -  (example: CKe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Create User

Adds a user to an account.

```
wh_api.create_user(account_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```first_name```(required) - First name of the primary user on the account. (example: Bob)
* ```last_name```(required) - Last name of the primary user on the account. (example: Smith)
* ```email_address```(required) - The primary email address for the user on the account. (example: bob.smith@example.com)
* ```password```(required) - The password for the user on the account
* ```permission_level```(required) - The permission level for the user account.
* ```timezone```(required) - The timezone the user is located in.  Default is Etc/GTM
* ```notify```(required) - If the user should be notified that an account has been created for them.

####Update User

Updates a users account information.

```
wh_api.update_user(account_id, user_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```user_id``` -  (example: USe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

#####Options

* ```first_name```(required) - First name of the primary user on the account. (example: Bob)
* ```last_name```(required) - Last name of the primary user on the account. (example: Smith)
* ```email_address```(required) - The primary email address for the user on the account. (example: bob.smith@example.com)
* ```password``` - The password for the user on the account
* ```timezone```(required) - The timezone the user is located in.  Default is Etc/GMT
* ```permission_level``` - The permission level for the user account.

####Get User

Returns the details for a specfic user.

```
wh_api.get_user(account_id, user_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```user_id``` -  (example: USe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####List Users

Returns a collection of users.

```
wh_api.list_users(account_id, user_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```user_id``` -  (example: USe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Delete User

Deletes a user.

```
wh_api.delete_user(account_id, user_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```user_id``` -  (example: USe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Verify Email Address

Handles validating the email address once the user has clicked the validation link in an email.

```
wh_api.verify_email_address(email_verification_key, options, function(error, body){});
```
#####Parameters

* ```email_verification_key``` -  (example: EV4d3dc5927f304df08ad36c5a3a893c52)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Resend Verification Email

Resends a verification email for a user.

```
wh_api.resend_verification_email(account_id, user_id, options, function(error, body){});
```
#####Parameters

* ```account_id``` -  (example: ACe987d754d82a419e8c54c2185ed0ef29)
* ```user_id``` -  (example: USe987d754d82a419e8c54c2185ed0ef29)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

###Utils

####Health Check

System health check

```
wh_api.health_check(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Gets Plans

Returns all the possible public plans.

```
wh_api.gets_plans(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Get Plan

Returns the details of a specific plan.

```
wh_api.get_plan(plan_id, options, function(error, body){});
```
#####Parameters

* ```plan_id``` -  (example: starter)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Get Timezones

Returns all valid timezones.

```
wh_api.get_timezones(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Gets Retry Policies

Returns the possible retry policies along with the system default policy.

```
wh_api.gets_retry_policies(options, function(error, body){});
```
#####Parameters

* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

####Gets Retry Policy

Returns the details of a specific retry policy.

```
wh_api.gets_retry_policy(policy_id, options, function(error, body){});
```
#####Parameters

* ```policy_id``` -  (example: linear)
* ```options``` - Structure of the possible options.
* ```callback``` (required) - Function to be called after api call completes. (example: function(error, body){})

