const utils = require('./utils');

module.exports = {
    '/':
        [
            { title: '스터디 개요', path: '/' },
            { title: '스터디 입과 절차', path: './Beginner' },
            { title: '디스코드 사용 방법', path: './Discord' },
            utils.getSideBar({ title: '스터디 활동', folder: '/Activity' }) ,
        ],
}
;
