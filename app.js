//导入express模块
const express = require('express');

//实例化app
let app = express();

//托管静态资源
app.use(express.static('static'));

//开启监听
app.listen(8080, () => {
    console.log('success');
})