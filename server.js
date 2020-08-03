var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('usuarios'); // Create a table for 'usuarios' with default settings
mobileApp.tables.add('ListAlarmDateTime'); // Create a table for 'alarmDateTime' with default settings

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
