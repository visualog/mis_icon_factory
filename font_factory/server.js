const express = require('express');
const path = require('path');
const fs = require('fs-extra');
const { buildFont } = require('./build-engine');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// 원본 아이콘 서빙 (미리보기용)
app.use('/line-icons', express.static(path.join(__dirname, '../line')));

// 아이콘 목록 가져오기 API
app.get('/api/icons', async (req, res) => {
    try {
        const lineDir = path.join(__dirname, '../line');
        const files = await fs.readdir(lineDir);
        const icons = files.filter(f => f.endsWith('.svg'));
        res.json(icons);
    } catch (err) {
        res.status(500).json({ error: 'Failed to list icons' });
    }
});

// 빌드 실행 API
app.post('/api/build', async (req, res) => {
    const { strokeWidth } = req.body;
    if (!strokeWidth) return res.status(400).json({ error: 'Stroke width is required' });

    try {
        await buildFont(strokeWidth);
        res.json({ success: true, message: '웹폰트 빌드가 성공적으로 완료되었습니다!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: '빌드 중 오류가 발생했습니다: ' + err.message });
    }
});

app.listen(PORT, () => {
    console.log(`================================================`);
    console.log(`🚀 아이콘 팩토리 서버가 시작되었습니다!`);
    console.log(`🔗 접속 주소: http://localhost:${PORT}`);
    console.log(`================================================`);
});
