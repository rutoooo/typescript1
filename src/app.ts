import * as http from "http";
const port = 8000;
const server = http.createServer(
    (_, response) => {
        // 応答する関数
        response.setHeader("Content-Type", "text/plain; charset=utf8");
        response.end("こんにちは！");
    }
);
server.listen(port);
console.log(`http://localhost:${port}`);