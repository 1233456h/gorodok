window.onload = function(){//Когда все компоненты на странице загружены//
    var socket = io.connect('http://localhost:8008'); //Подключаемся к нашему соккету//
    
    socket.on('connect', function(){ //При успешном соединении с сервером//
    
    console.info("Connected to server");
    
    });
    
    socket.on('message', function(data){ //Когда с сервера приходит сообщение//
    
    console.info(data);
    
    });
    }