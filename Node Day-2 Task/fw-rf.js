    fs=require('fs');
    fs.writeFile('fw-rf.txt', 'Hello World! I am in fw-rf.txt', function (err) {
        if (err) throw err;
    });

    fs.readFile('fw-rf.txt','utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
    });