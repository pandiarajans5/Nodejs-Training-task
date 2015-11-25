fs=require('fs');
fs.writeFileSync('fws-rfs.txt', 'Hello World! I am in fws-rfs.txt');

var data=fs.readFileSync('fws-rfs.txt','utf8');
console.log(data);