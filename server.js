let http = require('http'); //http가 제공하는것 나도 줘
let url = require('url');


function start(route, handle){
    function onRequest(request, response){ //웹서버에 요청, 웹서버에서 응답(onRequset : 클라이언트한테 요청이 오면)
        let pathname = url.parse(request.url).pathname;
        let queryData = url.parse(request.url, true).query;

        route(pathname, handle, response, queryData.productId);
    }
    http.createServer(onRequest).listen(8888); 
    //우리가 만느는 함수로 서버가 일을 대신 해주고 클라이언트가 이 일을 받으려면 8888로 접속해야함
    // localhost:8888    
}

exports.start = start; //밖에서도 사용가능케 함