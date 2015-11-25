    fs=require('fs');
	  fs.writeFile('fw-rfs.txt', 'Hello World! I am in fw-rfs.txt', function (err) {
        if (err) throw err;
        else{
          readf();
        }
    });
    function readf(){
     var data=fs.readFileSync('fw-rfs.txt','utf8');
     console.log(data);
    }
