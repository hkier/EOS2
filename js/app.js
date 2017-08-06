var iptc = require('node-iptc')
var fs = require('fs')
var chalk =require('chalk');

fs.readFile('0098pp.jpg', function(err,data){
    if (err) {throw err}
    console.log (chalk.red('\nFile: 0098pp.jpg'));
    // console.log(chalk.green('data: ', data.length));
    const aaa =iptc(data)
    console.log('headline:', aaa.headline);
    console.log('special_instructions: ', aaa.special_instructions)

});

fs.readFile('0015.jpg', function(err,data){
    if (err) {throw err}
        console.log (chalk.red('\nFile: 0015.jpg'));

const bbb =iptc(data)
    console.log('headline:', bbb.headline);
    console.log('special_instructions: ', bbb.special_instructions)


});
