function route(pathname, handle, response, productId){
    console.log('pathname : ' + pathname);

    if( typeof handle[pathname] == 'function'){
        handle[pathname](response, productId);
    }
    else{
        response.writeHead(200, {'Content-Type' : 'text/html'}); // 내가 즐 response 타입은 html
        response.write('not found'); // 화면에 뿌려줄 데이터 담음
        response.end(); // 담기 끝
    }
    
}

exports.route = route;

