class Game {
    public getInitData():any {
        return {
            teams: {
                '0': {
                    name: '雄鹿',
                    gameNum: 0,
                    winNum: 0,
                },
                '1': {
                    name: '猛龙',
                    gameNum: 0,
                    winNum: 0,
                },
                '2': {
                    name: '步行者',
                    gameNum: 0,
                    winNum: 0,
                },
                '3': {
                    name: '76人',
                    gameNum: 0,
                    winNum: 0,
                },
                '4': {
                    name: '凯尔特人',
                    gameNum: 0,
                    winNum: 0,
                },
                '5': {
                    name: '热火',
                    gameNum: 0,
                    winNum: 0,
                },
                '6': {
                    name: '篮网',
                    gameNum: 0,
                    winNum: 0,
                },
                '7': {
                    name: '黄蜂',
                    gameNum: 0,
                    winNum: 0,
                },
                '8': {
                    name: '活塞',
                    gameNum: 0,
                    winNum: 0,
                },
                '9': {
                    name: '魔术',
                    gameNum: 0,
                    winNum: 0,
                },
                '10': {
                    name: '奇才',
                    gameNum: 0,
                    winNum: 0,
                },
                '11': {
                    name: '老鹰',
                    gameNum: 0,
                    winNum: 0,
                },
                '12': {
                    name: '尼克斯',
                    gameNum: 0,
                    winNum: 0,
                },
                '13': {
                    name: '公牛',
                    gameNum: 0,
                    winNum: 0,
                },
                '14': {
                    name: '骑士',
                    gameNum: 0,
                    winNum: 0,
                },
                '15': {
                    name: '勇士',
                    gameNum: 0,
                    winNum: 0,
                },
                '16': {
                    name: '掘金',
                    gameNum: 0,
                    winNum: 0,
                },
                '17': {
                    name: '雷霆',
                    gameNum: 0,
                    winNum: 0,
                },
                '18': {
                    name: '开拓者',
                    gameNum: 0,
                    winNum: 0,
                },
                '19': {
                    name: '火箭',
                    gameNum: 0,
                    winNum: 0,
                },
                '20': {
                    name: '马刺',
                    gameNum: 0,
                    winNum: 0,
                },
                '21': {
                    name: '快船',
                    gameNum: 0,
                    winNum: 0,
                },
                '22': {
                    name: '爵士',
                    gameNum: 0,
                    winNum: 0,
                },
                '23': {
                    name: '湖人',
                    gameNum: 0,
                    winNum: 0,
                },
                '24': {
                    name: '国王',
                    gameNum: 0,
                    winNum: 0,
                },
                '25': {
                    name: '森林狼',
                    gameNum: 0,
                    winNum: 0,
                },
                '26': {
                    name: '鹈鹕',
                    gameNum: 0,
                    winNum: 0,
                },
                '27': {
                    name: '独行侠',
                    gameNum: 0,
                    winNum: 0,
                },
                '28': {
                    name: '灰熊',
                    gameNum: 0,
                    winNum: 0,
                },
                '29': {
                    name: '太阳',
                    gameNum: 0,
                    winNum: 0,
                },
            },
            userTeam: '太阳',
            currentSeason: 1,
            currentDay: 1,
        }
    };

    public nextDay(gameData :any):any {
        gameData.currentDay += 1;
    }
}

class TimeUtil {
    public getTimeString(): any {
        let datetime = new Date();
        return datetime.getFullYear() + '-'
            + (datetime.getMonth() + 1) + '-'
            + datetime.getDate() + 'T'
            + datetime.getHours() + '-'
            + datetime.getMinutes() + '-'
            + datetime.getSeconds();
    }
}