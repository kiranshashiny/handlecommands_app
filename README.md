Node.js code to turn a Led On/off on a Raspberry Pi
===================================================

This has to be used in conjunction with the **'handlecommands_device'** found in this repository.

Run this code on the laptop.

Run the corresponding **handlecommands_device** on the Raspberry Pi to turn Led On/Off.


Prerequisites:
=============

Apache Http web server running on the laptop.

Bluemix IoTF service running on Bluemix  http://console.ng.bluemix.net

An IBM email id to create the application and services in Bluemix.


Here is how I ran this on my Linux environment.

- Start the web server on my laptop.
- Put the get.html in /var/www/html  folder 

- Open the browser  http://127.0.0.1/get.html
  ( dont click on Led On / off yet ! )

- On a separate window, run the node get.js.


Snapshot of code:
-----------------

`node get.js`
`
[user@oc0650888602 nodetest]$ node get.js
 The device Type is iotdevice Device id = b827eb984666
Example app listening at http:0.0.0.0:8081
[2015-10-10 16:11:41.660] [INFO] [default] - Connected to IoTF successfully
`

- In the browser click on Led On/off.

  The node.js sits and waits for the incoming Get request from the browser.
  Sends the publish request to turn LED on/off to Bluemix IoTF.
  The Bluemix IoTF sends it to the device at the other end.
  which should turn the LED on / off.
