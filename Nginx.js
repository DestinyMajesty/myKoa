
server {
    listen  80;
    server_name test.mykoa.com ;

    location ^~ /mykoav1/ {
        proxy_pass http://127.0.0.1:8090$request_uri;
    }
}


