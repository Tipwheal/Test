class Game {
    public getInitData():any {
        return {
            teams: [
                '雄鹿',
                '猛龙',
                '步行者',
                '76人',
                '凯尔特人',
                '热火',
                '篮网',
                '黄蜂',
                '活塞',
                '魔术',
                '奇才',
                '老鹰',
                '尼克斯',
                '公牛',
                '骑士',
                '勇士',
                '掘金',
                '雷霆',
                '开拓者',
                '火箭',
                '马刺',
                '快船',
                '爵士',
                '湖人',
                '国王',
                '森林狼',
                '鹈鹕',
                '独行侠',
                '灰熊',
                '太阳',
            ],
            currentDay: 2,
        }
    };
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