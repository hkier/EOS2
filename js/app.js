var iptc = require('node-iptc')
var fs = require('fs')
var chalk =require('chalk');

fs.readFile('0098pp.jpg', function(err,data){
    if (err) {throw err}
    console.log (chalk.red('\nFile: 0098pp.jpg'));
         console.log('Data:', iptc(data));
    console.log('Data[245]: ',data[245]);
    console.log(chalk.blue('Keys:', data.keys   ,'\n'));

});

// fs.readFile('0015.jpg', function(err,data){
//     if (err) {throw err}
//         console.log (chalk.red('0015.jpg'));
//         console.log(iptc(data));


// });
