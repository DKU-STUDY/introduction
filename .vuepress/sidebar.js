const utils = require('./utils');

module.exports = {
    '/':
        [
            { title: '스터디 개요', path: '/' },
            { title: '그룹 입과 절차', path: './Beginner' },
            { title: '디스코드 사용 방법', path: './Discord' },
            { title: '스터디 활동', path: './Activity' },
            { title: 'Algorithm 스터디', path: './Algorithm' },
            { title: 'JavaScript 스터디', path: './JavaScript' },
            { title: '이달의 책 읽기', path: './BookOfThisMonth' },
            utils.getSideBar({ title: '프로젝트', folder: '/Project' }) ,

        ],
}
;
