
// Create chat server

var server =require('net').createServer();
server.listen('3000');

var users = [],
    myUsers = new Map()

server.on('connection',function(socket){
	
	socket.setEncoding('utf8');
	

	var flag=false,	
	    clientName;
	

	socket.write("Enter Nicek Name ex : /nick <nick-name>  ");

	socket.on('data',function(chunk){
	
		// To Check New client. flag value is false assume new User. Once enter this if block falg value changed true
		if(flag==false)
		{
			var regex = new RegExp(/^[\/]{1}nick [a-zA-Z0-9]+/);
		
			var nameCheck=regex.test(chunk);
		
			// Click nick name check by the regular expression
				if(nameCheck)
				{
					 clientName = chunk.substring(5).replace(/\n$/, '');
						
						// Dublicate user checking 
						if (users.indexOf(clientName)==-1){

							users.push(clientName);
							myUsers.set(clientName, socket);
							socket.write("Hi "+ clientName);
							this.nickname=clientName;
							flag=myUsers.has(clientName);
							socket.write(" Already " + users.length + " in chat room \n");
							
							// print group members if group member greater then one
							if(users.length>1){

								var myKeys=myUsers.keys();
								var len=myUsers.size;
								socket.write("\n Group Members \n");

								// Print list of Users
								
								for(var i=0;i<len;i++) {
   									 socket.write(myKeys.next().value + "\n");
								}	
							}
							socket.write("\n You have successfully added chat group Please type your message \n");

				
						} else {

							socket.write("Nickname already exists \n");
						}
			} else {

				socket.write("Please check your nick name format \n");
	    	}

		} else {
		
		myUsers.forEach(msg);
			
		}
			// Broatcast Message Printing
			function msg(value,key){
				if(value.nickname!==clientName){
					value.write(clientName + '>' + chunk);
				}
			}
	});

	//socket close action
	socket.on('close', function()
    {
    	//delete user from chat
        myUsers.delete(clientName);

        // if any client close to inform another active client
        myUsers.forEach(exitGroup);
        	function exitGroup(value,key){
					value.write("\n" + clientName + " exit from group \n");
			}
    });

});

server.on('listening',function(){
console.log("server listening on port 3000");
});
