const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('歡迎來到我的 Express 專案！');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`伺服器正在監聽端口 ${PORT}...`);
});