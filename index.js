import http from 'http';
import date from './date';
import getURL from './getURL';
var a = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    res.write(date()+"br");
    res.write(getURL.getPath(req)+ "<br>");
    res.write(getURL.getParamsURL(req)+ "<br>");
    res.write('Hello KTPM0121, Chúc bạn thành công với Nodejs');
    res.end();
})
a.listen(8080)