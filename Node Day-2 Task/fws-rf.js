fs=require('fs');
fs.writeFileSync('fws-rf.txt', 'Hello World! I am in fws-rf.txt');

fs.readFile('fws-rf.txt','utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});