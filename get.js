var express = require('express');
var app = express();

var Client = require("ibmiotf").IotfApplication;
var config = Client.parseConfigFile("iotf.cfg");
var applicaton = new Client(config);

var deviceType  = "iotdevice";
var deviceId = "b827eb984666";
console.log (" The device Type is " + deviceType + " Device id = "+ deviceId );
applicaton.connect();
app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', function (req, res) {

//    Prepare output in JSON format
    response = {
         first_name:req.query.first_name,
         last_name:req.query.last_name,
         on:req.query.on,
         off:req.query.off
         };
         console.log(response);
         res.end(JSON.stringify(response));

	if ( req.query.on == "On_Led" ) {
       	   console.log ( "ON was pressed and the value is  " + req.query.on );
	   payload ="critical";
           console.log ("sending payload " + payload );
           applicaton.publishDeviceCommand(deviceType, deviceId, "blink", "string",payload);
           res.end(JSON.stringify(response));
           
	}

	if ( req.query.off == "Off_Led" ) {
	   console.log ( "Off was pressed and the value is  " + req.query.off );
	   payload ="safe";
           console.log ("sending payload " + payload );
           applicaton.publishDeviceCommand(deviceType, deviceId, "blink", "string",payload);
           res.end(JSON.stringify(response));
	}

     })
   
     var server = app.listen(8081, function () {
   
     var host = server.address().address
     var port = server.address().port
   
     console.log("Example app listening at http:%s:%s", host, port)
})
