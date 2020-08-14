const sidebar = require('./sidebar.js');

module.exports = {
    title: 'DKU-STUDY',
    description: '단국대학교 알고리즘 스터디',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],
        sidebar,
    },
};