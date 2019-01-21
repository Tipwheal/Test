"use strict";
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.getInitData = function () {
        return {
            teams: {
                '0': {
                    name: '雄鹿',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['46', '81', '124', '139', '148'],
                },
                '1': {
                    name: '猛龙',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['11', '58', '65', '123', '140'],
                },
                '2': {
                    name: '步行者',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['4', '26', '44', '122', '141'],
                },
                '3': {
                    name: '76人',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['31', '63', '64', '83', '121'],
                },
                '4': {
                    name: '凯尔特人',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['36', '77', '82', '90', '92'],
                },
                '5': {
                    name: '热火',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['13', '105', '125', '142', '149'],
                },
                '6': {
                    name: '篮网',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['34', '6', '104', '126', '143'],
                },
                '7': {
                    name: '黄蜂',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['7', '39', '91', '127', '144'],
                },
                '8': {
                    name: '活塞',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['8', '15', '23', '40', '67'],
                },
                '9': {
                    name: '魔术',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['17', '57', '60', '74', '128'],
                },
                '10': {
                    name: '奇才',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['50', '75', '99', '117', '119'],
                },
                '11': {
                    name: '老鹰',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['11', '98', '107', '118', '129'],
                },
                '12': {
                    name: '尼克斯',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['21', '22', '59', '66', '68'],
                },
                '13': {
                    name: '公牛',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['3', '30', '13', '53', '103'],
                },
                '14': {
                    name: '骑士',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['16', '76', '80', '97', '102'],
                },
                '15': {
                    name: '勇士',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['61', '85', '109', '130', '145'],
                },
                '16': {
                    name: '掘金',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['47', '48', '69', '84', '108'],
                },
                '17': {
                    name: '雷霆',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['12', '25', '41', '70', '131'],
                },
                '18': {
                    name: '开拓者',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['5', '28', '0', '73', '93'],
                },
                '19': {
                    name: '火箭',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['19', '20', '88', '115', '120'],
                },
                '20': {
                    name: '马刺',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['72', '87', '94', '114', '132'],
                },
                '21': {
                    name: '快船',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['52', '55', '56', '106', '133'],
                },
                '22': {
                    name: '爵士',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['18', '54', '86', '134', '146'],
                },
                '23': {
                    name: '湖人',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['29', '89', '95', '112', '135'],
                },
                '24': {
                    name: '国王',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['27', '32', '35', '113', '136'],
                },
                '25': {
                    name: '森林狼',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['7', '10', '49', '62', '100'],
                },
                '26': {
                    name: '鹈鹕',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['24', '96', '111', '116', '137'],
                },
                '27': {
                    name: '独行侠',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['51', '71', '78', '101', '110'],
                },
                '28': {
                    name: '灰熊',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['14', '37', '79', '138', '147'],
                },
                '29': {
                    name: '太阳',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    players: ['1', '2', '6', '33', '45'],
                },
            },
            players: {
                '0': {
                    name: '测试',
                    ability: 1,
                    maxPoints: 0,
                },
                '1': {
                    name: '测试球员',
                    ability: 1,
                    maxPoints: 0,
                },
                '2': {
                    name: '詹姆斯',
                    ability: 7,
                    maxPoints: 0,
                },
                '3': {
                    name: '科比',
                    ability: 7,
                    maxPoints: 0,
                },
                '4': {
                    name: '丁老头',
                    ability: 5,
                    maxPoints: 0,
                },
                '5': {
                    name: '王尼玛',
                    ability: 3,
                    maxPoints: 0,
                },
                '6': {
                    name: '奥尼尔',
                    ability: 7,
                    maxPoints: 0,
                },
                '7': {
                    name: '马大哈',
                    ability: 5,
                    maxPoints: 0,
                },
                '8': {
                    name: '马大头',
                    ability: 3,
                    maxPoints: 0,
                },
                '9': {
                    name: '黑人问号',
                    ability: 3,
                    maxPoints: 0,
                },
                '10': {
                    name: '巴克利',
                    ability: 5,
                    maxPoints: 0,
                },
                '11': {
                    name: '佩奇',
                    ability: 2,
                    maxPoints: 0,
                },
                '12': {
                    name: '喜羊羊',
                    ability: 3,
                    maxPoints: 0,
                },
                '13': {
                    name: '灰太狼',
                    ability: 4,
                    maxPoints: 0,
                },
                '14': {
                    name: '小猪猪',
                    ability: 2,
                    maxPoints: 0,
                },
                '15': {
                    name: '小菜鸡',
                    ability: 1,
                    maxPoints: 0,
                },
                '16': {
                    name: '乔丹',
                    ability: 8,
                    maxPoints: 0,
                },
                '17': {
                    name: '哈登',
                    ability: 6,
                    maxPoints: 0,
                },
                '18': {
                    name: '欧文',
                    ability: 5,
                    maxPoints: 0,
                },
                '19': {
                    name: '邓肯',
                    ability: 7,
                    maxPoints: 0,
                },
                '20': {
                    name: '奥拉朱旺',
                    ability: 7,
                    maxPoints: 0,
                },
                '21': {
                    name: '巴拉拉小魔仙',
                    ability: 4,
                    maxPoints: 0,
                },
                '22': {
                    name: '丁威迪',
                    ability: 4,
                    maxPoints: 0,
                },
                '23': {
                    name: '安东尼',
                    ability: 6,
                    maxPoints: 0,
                },
                '24': {
                    name: '韦德',
                    ability: 6,
                    maxPoints: 0,
                },
                '25': {
                    name: '字母哥',
                    ability: 6,
                    maxPoints: 0,
                },
                '26': {
                    name: '中文哥',
                    ability: 3,
                    maxPoints: 0,
                },
                '27': {
                    name: '周琦',
                    ability: 3,
                    maxPoints: 0,
                },
                '28': {
                    name: '姚明',
                    ability: 6,
                    maxPoints: 0,
                },
                '29': {
                    name: '路飞',
                    ability: 5,
                    maxPoints: 0,
                },
                '30': {
                    name: '孙悟空',
                    ability: 4,
                    maxPoints: 0,
                },
                '31': {
                    name: '牛魔王',
                    ability: 1,
                    maxPoints: 0,
                },
                '32': {
                    name: '电鳗',
                    ability: 1,
                    maxPoints: 0,
                },
                '33': {
                    name: '抖音哥',
                    ability: 6,
                    maxPoints: 0,
                },
                '34': {
                    name: '字母弟',
                    ability: 2,
                    maxPoints: 0,
                },
                '35': {
                    name: '哈哈哈登',
                    ability: 4,
                    maxPoints: 0,
                },
                '36': {
                    name: '辣个男人',
                    ability: 6,
                    maxPoints: 0,
                },
                '37': {
                    name: '麦迪',
                    ability: 6,
                    maxPoints: 0,
                },
                '38': {
                    name: '取名很难',
                    ability: 2,
                    maxPoints: 0,
                },
                '39': {
                    name: '小明',
                    ability: 2,
                    maxPoints: 0,
                },
                '40': {
                    name: '小红',
                    ability: 5,
                    maxPoints: 0,
                },
                '41': {
                    name: '路人甲',
                    ability: 1,
                    maxPoints: 0,
                },
                '42': {
                    name: '路人乙',
                    ability: 2,
                    maxPoints: 0,
                },
                '43': {
                    name: '路人丙',
                    ability: 3,
                    maxPoints: 0,
                },
                '44': {
                    name: '路人丁',
                    ability: 4,
                    maxPoints: 0,
                },
                '45': {
                    name: '路人戊',
                    ability: 5,
                    maxPoints: 0,
                },
                '46': {
                    name: '路人己',
                    ability: 6,
                    maxPoints: 0,
                },
                '47': {
                    name: '孔乙己',
                    ability: 7,
                    maxPoints: 0,
                },
                '48': {
                    name: '五五开',
                    ability: 4,
                    maxPoints: 0,
                },
                '49': {
                    name: '六六开',
                    ability: 4,
                    maxPoints: 0,
                },
                '50': {
                    name: '三七开',
                    ability: 3,
                    maxPoints: 0,
                },
                '51': {
                    name: '91唐',
                    ability: 4,
                    maxPoints: 0,
                },
                '52': {
                    name: '哈登',
                    ability: 6,
                    maxPoints: 0,
                },
                '53': {
                    name: '戈登',
                    ability: 3,
                    maxPoints: 0,
                },
                '54': {
                    name: '保罗',
                    ability: 5,
                    maxPoints: 0,
                },
                '55': {
                    name: '会涨的',
                    ability: 1,
                    maxPoints: 0,
                },
                '56': {
                    name: '阿珍',
                    ability: 5,
                    maxPoints: 0,
                },
                '57': {
                    name: '阿强',
                    ability: 3,
                    maxPoints: 0,
                },
                '58': {
                    name: '光头强',
                    ability: 1,
                    maxPoints: 0,
                },
                '59': {
                    name: '熊大',
                    ability: 5,
                    maxPoints: 0,
                },
                '60': {
                    name: '熊二',
                    ability: 6,
                    maxPoints: 0,
                },
                '61': {
                    name: '哦',
                    ability: 2,
                    maxPoints: 0,
                },
                '62': {
                    name: '莱恩俺的森',
                    ability: 2,
                    maxPoints: 0,
                },
                '63': {
                    name: '凑人数的',
                    ability: 1,
                    maxPoints: 0,
                },
                '64': {
                    name: '记不住名字的',
                    ability: 4,
                    maxPoints: 0,
                },
                '65': {
                    name: '叫不出名字的',
                    ability: 2,
                    maxPoints: 0,
                },
                '66': {
                    name: '西米露奶茶',
                    ability: 2,
                    maxPoints: 0,
                },
                '67': {
                    name: '利文斯顿',
                    ability: 3,
                    maxPoints: 0,
                },
                '68': {
                    name: '渣渣',
                    ability: 0,
                    maxPoints: 0,
                },
                '69': {
                    name: '音响',
                    ability: 4,
                    maxPoints: 0,
                },
                '70': {
                    name: '小白',
                    ability: 4,
                    maxPoints: 0,
                },
                '71': {
                    name: '三条',
                    ability: 4,
                    maxPoints: 0,
                },
                '72': {
                    name: '五条',
                    ability: 4,
                    maxPoints: 0,
                },
                '73': {
                    name: '某个布鲁克斯',
                    ability: 4,
                    maxPoints: 0,
                },
                '74': {
                    name: '肖华',
                    ability: 4,
                    maxPoints: 0,
                },
                '75': {
                    name: '小托马斯',
                    ability: 4,
                    maxPoints: 0,
                },
                '76': {
                    name: '波蒂斯',
                    ability: 4,
                    maxPoints: 0,
                },
                '77': {
                    name: '布克',
                    ability: 6,
                    maxPoints: 0,
                },
                '78': {
                    name: '恩比德',
                    ability: 4,
                    maxPoints: 0,
                },
                '79': {
                    name: '罗斯',
                    ability: 5,
                    maxPoints: 0,
                },
                '80': {
                    name: '林书豪',
                    ability: 5,
                    maxPoints: 0,
                },
                '81': {
                    name: '拉塞尔',
                    ability: 4,
                    maxPoints: 0,
                },
                '82': {
                    name: '球哥',
                    ability: 4,
                    maxPoints: 0,
                },
                '83': {
                    name: '球爹',
                    ability: 4,
                    maxPoints: 0,
                },
                '84': {
                    name: '二球',
                    ability: 4,
                    maxPoints: 0,
                },
                '85': {
                    name: '三球',
                    ability: 4,
                    maxPoints: 0,
                },
                '86': {
                    name: '海沃德',
                    ability: 4,
                    maxPoints: 0,
                },
                '87': {
                    name: '霍福德',
                    ability: 4,
                    maxPoints: 0,
                },
                '88': {
                    name: '特雷杨',
                    ability: 4,
                    maxPoints: 0,
                },
                '89': {
                    name: '贝兹摩尔',
                    ability: 4,
                    maxPoints: 0,
                },
                '90': {
                    name: '科林斯',
                    ability: 4,
                    maxPoints: 0,
                },
                '91': {
                    name: '呆的萌',
                    ability: 4,
                    maxPoints: 0,
                },
                '92': {
                    name: '卡特',
                    ability: 4,
                    maxPoints: 0,
                },
                '93': {
                    name: '迈尔斯-普拉姆利',
                    ability: 4,
                    maxPoints: 0,
                },
                '94': {
                    name: '维金斯',
                    ability: 4,
                    maxPoints: 0,
                },
                '95': {
                    name: '的哥',
                    ability: 4,
                    maxPoints: 0,
                },
                '96': {
                    name: '巴特勒',
                    ability: 5,
                    maxPoints: 0,
                },
                '97': {
                    name: '沙里奇',
                    ability: 4,
                    maxPoints: 0,
                },
                '98': {
                    name: '考文顿',
                    ability: 4,
                    maxPoints: 0,
                },
                '99': {
                    name: '吉布森',
                    ability: 4,
                    maxPoints: 0,
                },
                '100': {
                    name: '娜娜利',
                    ability: 4,
                    maxPoints: 0,
                },
                '101': {
                    name: '洛尔邓',
                    ability: 4,
                    maxPoints: 0,
                },
                '102': {
                    name: '南斯',
                    ability: 4,
                    maxPoints: 0,
                },
                '103': {
                    name: '乐福',
                    ability: 4,
                    maxPoints: 0,
                },
                '104': {
                    name: '克拉克森',
                    ability: 4,
                    maxPoints: 0,
                },
                '105': {
                    name: '科沃尔',
                    ability: 4,
                    maxPoints: 0,
                },
                '106': {
                    name: '奥斯曼',
                    ability: 4,
                    maxPoints: 0,
                },
                '107': {
                    name: '塞克斯顿',
                    ability: 4,
                    maxPoints: 0,
                },
                '108': {
                    name: '焦志喜',
                    ability: 4,
                    maxPoints: 0,
                },
                '109': {
                    name: '胡德',
                    ability: 4,
                    maxPoints: 0,
                },
                '110': {
                    name: '弗莱',
                    ability: 4,
                    maxPoints: 0,
                },
                '111': {
                    name: '米罗蒂奇',
                    ability: 4,
                    maxPoints: 0,
                },
                '112': {
                    name: '冰箱',
                    ability: 4,
                    maxPoints: 0,
                },
                '113': {
                    name: '海尔哥哥',
                    ability: 3,
                    maxPoints: 0,
                },
                '114': {
                    name: '海尔弟弟',
                    ability: 6,
                    maxPoints: 0,
                },
                '115': {
                    name: '小猫咪',
                    ability: 4,
                    maxPoints: 0,
                },
                '116': {
                    name: '挂逼',
                    ability: 8,
                    maxPoints: 0,
                },
                '117': {
                    name: '克拉克',
                    ability: 4,
                    maxPoints: 0,
                },
                '118': {
                    name: '阿金萨',
                    ability: 4,
                    maxPoints: 0,
                },
                '119': {
                    name: '库里',
                    ability: 6,
                    maxPoints: 0,
                },
                '120': {
                    name: '杜小帅',
                    ability: 6,
                    maxPoints: 0,
                },
                '121': {
                    name: '米尔萨普',
                    ability: 4,
                    maxPoints: 0,
                },
                '122': {
                    name: '马里克-比斯利',
                    ability: 4,
                    maxPoints: 0,
                },
                '123': {
                    name: '巴顿',
                    ability: 4,
                    maxPoints: 0,
                },
                '124': {
                    name: '埃尔南戈麦斯',
                    ability: 4,
                    maxPoints: 0,
                },
                '125': {
                    name: '二五仔',
                    ability: 4,
                    maxPoints: 0,
                },
                '126': {
                    name: '贾马尔-穆雷',
                    ability: 4,
                    maxPoints: 0,
                },
                '127': {
                    name: '历史老师',
                    ability: 4,
                    maxPoints: 0,
                },
                '128': {
                    name: '生物老师',
                    ability: 4,
                    maxPoints: 0,
                },
                '129': {
                    name: '体育老师',
                    ability: 6,
                    maxPoints: 0,
                },
                '130': {
                    name: '大天狗',
                    ability: 4,
                    maxPoints: 0,
                },
                '131': {
                    name: '小田狗',
                    ability: 4,
                    maxPoints: 0,
                },
                '132': {
                    name: '哈士奇',
                    ability: 4,
                    maxPoints: 0,
                },
                '133': {
                    name: '萝卜丝',
                    ability: 4,
                    maxPoints: 0,
                },
                '134': {
                    name: '放假啦',
                    ability: 4,
                    maxPoints: 0,
                },
                '135': {
                    name: '放牛娃',
                    ability: 4,
                    maxPoints: 0,
                },
                '136': {
                    name: '吕小布',
                    ability: 4,
                    maxPoints: 0,
                },
                '137': {
                    name: '尼克杨',
                    ability: 4,
                    maxPoints: 0,
                },
                '138': {
                    name: '后羿',
                    ability: 4,
                    maxPoints: 0,
                },
                '139': {
                    name: '巨神兵',
                    ability: 4,
                    maxPoints: 0,
                },
                '140': {
                    name: '外国人',
                    ability: 4,
                    maxPoints: 0,
                },
                '141': {
                    name: '歪果仁',
                    ability: 4,
                    maxPoints: 0,
                },
                '142': {
                    name: '雷公',
                    ability: 4,
                    maxPoints: 0,
                },
                '143': {
                    name: '电母',
                    ability: 4,
                    maxPoints: 0,
                },
                '144': {
                    name: '飞天螳螂',
                    ability: 4,
                    maxPoints: 0,
                },
                '145': {
                    name: '第六人',
                    ability: 4,
                    maxPoints: 0,
                },
                '146': {
                    name: '耶稣',
                    ability: 4,
                    maxPoints: 0,
                },
                '147': {
                    name: '他大舅',
                    ability: 4,
                    maxPoints: 0,
                },
                '148': {
                    name: '他二舅',
                    ability: 4,
                    maxPoints: 0,
                },
                '149': {
                    name: '高桌子',
                    ability: 4,
                    maxPoints: 0,
                },
            },
            news: [
                {
                    season: 1,
                    day: 1,
                    content: '欢迎进入游戏，你的球队是 太阳'
                }
            ],
            userTeam: '太阳',
            userTeamId: '29',
            currentSeason: 1,
            currentDay: 1,
            showState: ShowState.MyTeam,
        };
    };
    ;
    Game.playerGrow = function (id, gameData) {
        var value = Math.random() * 6;
        if (value < 1) {
            gameData.players[id].ability -= 1;
        }
        else if (value < 2) {
            gameData.players[id].ability += 1;
        }
        if (gameData.players[id].ability < 0) {
            gameData.players[id].ability = 0;
        }
    };
    Game.setRegularChampion = function (gameData) {
        var rank = this.getTeamRank(gameData);
        var championId = rank[0].id;
        gameData.teams[championId].regularChampionNum += 1;
        return gameData.teams[championId].name;
    };
    Game.nextDay = function (gameData) {
        gameData.showState = ShowState.News;
        if (gameData.currentDay <= Game.regularEndDay) {
            var games = GameSchedule.gamesOfDay(gameData.currentDay);
            for (var i = 0; i < games.length; i++) {
                var homeTeamId = games[i][0];
                var visitorId = games[i][1];
                this.nextGame(homeTeamId, visitorId, gameData);
            }
            gameData.currentDay += 1;
        }
        else if (gameData.currentDay === Game.regularEndDay + 1) {
            var chamName = this.setRegularChampion(gameData);
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: '常规赛冠军是' + chamName + '!, 恭喜!新的一年也要努力哦，点击模拟进入下一个赛季。',
            });
            gameData.currentDay += 1;
        }
        else if (gameData.currentDay === Game.regularEndDay + 2) {
            gameData.currentDay = 1;
            gameData.currentSeason += 1;
            for (var i = 0; i < 30; i++) {
                gameData.teams[i].winNum = 0;
                gameData.teams[i].gameNum = 0;
            }
            gameData.news = [];
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: '第' + gameData.currentSeason + '赛季开始了',
            });
        }
    };
    Game.nextGame = function (homeTeamId, visitorId, gameData) {
        var homeTeam = gameData.teams[homeTeamId];
        var visitor = gameData.teams[visitorId];
        var homeTeamName = homeTeam.name;
        var visitorName = visitor.name;
        var homeScore = 0;
        var visitorScore = 0;
        var homePlayers = homeTeam.players;
        var visitorPlayers = visitor.players;
        for (var i = 0; i < homePlayers.length; i++) {
            var player = gameData.players[homePlayers[i]];
            var score = Math.floor((Math.random() * player.ability * 6) + Math.random() * 6);
            homeScore += score;
            this.playerGrow(homePlayers[i], gameData);
        }
        do {
            for (var i = 0; i < visitorPlayers.length; i++) {
                var player = gameData.players[visitorPlayers[i]];
                var score = Math.floor((Math.random() * player.ability * 6) + Math.random() * 6);
                visitorScore += score;
            }
        } while (homeScore === visitorScore);
        for (var i = 0; i < visitorPlayers.length; i++) {
            this.playerGrow(visitorPlayers[i], gameData);
        }
        gameData.teams[homeTeamId].gameNum += 1;
        gameData.teams[visitorId].gameNum += 1;
        if (homeScore > visitorScore) {
            gameData.teams[homeTeamId].winNum += 1;
        }
        else {
            gameData.teams[visitorId].winNum += 1;
        }
        gameData.news.push({
            season: gameData.currentSeason,
            day: gameData.currentDay,
            content: homeTeamName + '(主)' + homeScore + ':' + visitorScore + '(客)' + visitorName,
        });
    };
    Game.getTeamRank = function (gameData) {
        var teams = gameData.teams;
        var result = [];
        for (var i = 0; i < 30; i++) {
            result.push(teams[i]);
            result[i].id = i;
        }
        result = result.sort(function (a, b) {
            var aRate = 0;
            if (a.gameNum !== 0) {
                aRate = a.winNum / a.gameNum;
            }
            var bRate = 0;
            if (b.gameNum !== 0) {
                bRate = b.winNum / b.gameNum;
            }
            return bRate - aRate;
        });
        return result;
    };
    Game.getAbilityRank = function (gameData) {
        var players = gameData.players;
        var result = [];
        for (var i in players) {
            result.push(players[i + '']);
            result[i].id = i;
        }
        result = result.sort(function (a, b) {
            return b.ability - a.ability;
        });
        console.log(result);
        return result;
    };
    Game.getPlayerInfo = function (id, gameData) {
        return gameData.players[id];
    };
    Game.regularEndDay = 164;
    return Game;
}());
var ShowState;
(function (ShowState) {
    ShowState[ShowState["MyTeam"] = 0] = "MyTeam";
    ShowState[ShowState["TeamRank"] = 1] = "TeamRank";
    ShowState[ShowState["News"] = 2] = "News";
    ShowState[ShowState["Statistics"] = 3] = "Statistics";
    ShowState[ShowState["AttrRank"] = 4] = "AttrRank";
})(ShowState || (ShowState = {}));
var GameSchedule = /** @class */ (function () {
    function GameSchedule() {
    }
    GameSchedule.gamesOfDay = function (day) {
        return GameSchedule.games[day - 1];
    };
    GameSchedule.games = [
        //0    1    2     3    4       5    6    7   8    9    10  11   12    13   14
        //雄鹿 猛龙 步行者 76人 凯尔特人 热火 篮网 黄蜂 活塞 魔术 奇才 老鹰 尼克斯 公牛 骑士
        //15   16   17  18     19   20  21   22   23  24   25    26   27    28   29
        //勇士 掘金 雷霆 开拓者 火箭 马刺 快船 爵士 湖人 国王 森林狼 鹈鹕 独行侠 灰熊 太阳
        [[2, 9], [5, 13], [23, 21]],
        [[14, 6], [3, 5], [1, 4], [8, 10], [12, 0], [19, 7], [25, 9], [26, 2], [27, 11], [20, 28], [22, 17], [29, 18], [24, 16], [15, 23]],
        [[13, 12], [21, 15]],
        [[7, 14], [9, 26], [10, 3], [11, 1], [4, 0], [19, 27], [28, 8], [25, 17], [6, 5], [16, 18], [29, 22], [24, 21], [23, 20]],
        [[2, 14], [3, 13], [26, 7], [27, 28], [0, 1], [22, 19], [18, 20], [15, 24]],
        [[8, 4], [5, 10], [9, 6], [17, 29], [12, 25], [23, 11]],
        [[14, 25], [3, 15], [28, 4], [21, 19]],
        [[1, 5], [6, 22], [8, 2], [12, 7], [26, 29], [27, 23], [16, 20], [18, 19], [24, 11]],
        [[7, 1], [2, 13], [9, 21], [3, 10], [4, 22], [28, 26], [0, 14], [25, 15], [20, 29], [17, 27]],
        [[5, 21], [16, 11], [19, 23]],
        [[7, 12], [2, 1], [9, 4], [3, 14], [10, 6], [8, 17], [13, 22], [25, 27], [26, 23], [20, 15], [29, 16], [18, 24]],
        [[1, 22], [11, 9], [6, 2], [14, 3], [5, 4], [19, 21], [28, 15], [0, 27], [24, 18]],
        [[12, 20], [17, 10], [29, 26], [23, 25]],
        [[7, 11], [2, 28], [3, 20], [4, 9], [13, 14], [19, 1], [22, 16], [18, 8], [21, 25]],
        [[5, 0], [27, 10], [15, 8], [23, 26]],
        [[9, 0], [3, 19], [4, 7], [28, 1], [25, 14], [11, 12], [20, 10], [16, 23], [22, 26], [18, 29], [24, 6], [21, 17]],
        [[12, 19], [15, 17]],
        [[2, 0], [1, 13], [11, 3], [4, 18], [14, 7], [5, 27], [16, 25], [29, 6], [22, 20], [23, 28], [24, 8]],
        [[7, 5], [9, 27], [10, 14], [12, 11], [13, 2], [19, 16], [25, 4], [26, 3], [0, 17], [15, 22], [21, 6]],
        [[1, 18], [24, 28], [23, 8]],
        [[6, 18], [13, 7], [17, 16], [27, 3], [22, 15], [21, 28]],
        [[10, 25], [8, 12], [5, 11], [19, 4], [24, 29]],
        [[7, 6], [14, 10], [12, 2], [9, 5], [3, 1], [11, 8], [0, 18], [25, 21], [26, 22], [20, 4], [29, 24], [27, 19], [15, 28]],
        [[17, 21], [16, 13]],
        [[7, 29], [3, 0], [1, 10], [4, 2], [8, 11], [28, 20], [25, 6], [26, 14], [27, 22], [18, 13], [23, 15]],
        [[21, 24], [2, 3], [10, 12], [11, 4], [5, 9], [19, 25], [0, 7], [20, 14], [16, 27], [15, 18]],
        [[6, 8], [21, 13], [9, 29], [17, 22], [23, 24]],
        [[7, 4], [2, 25], [8, 0], [5, 29], [28, 19], [27, 16], [20, 26], [22, 13], [18, 12]],
        [[1, 6], [10, 23], [11, 9], [26, 15]],
        [[7, 2], [9, 3], [4, 28], [6, 23], [14, 5], [8, 13], [19, 11], [0, 10], [25, 16], [17, 20], [27, 15], [29, 18], [21, 12]],
        [[7, 0], [9, 20], [1, 5], [11, 27], [4, 14], [8, 23], [19, 6], [17, 15], [2, 10], [3, 26], [16, 12], [22, 29], [24, 21]],
        [[10, 11], [14, 13], [28, 6], [27, 25], [20, 19], [29, 22], [0, 4]],
        [[1, 16], [21, 2], [8, 3], [24, 15], [5, 7], [17, 25], [12, 26], [23, 18]],
        [[10, 9], [13, 26], [20, 11], [22, 19], [18, 2]],
        [[3, 9], [4, 0], [6, 16], [5, 8], [28, 29], [27, 7], [24, 17], [15, 1]],
        [[14, 16], [11, 21], [19, 29], [0, 8], [26, 27], [22, 2], [25, 20], [18, 17]],
        [[6, 12], [28, 21], [13, 5]],
        [[7, 3], [10, 0], [11, 14], [4, 16], [12, 9], [19, 15], [26, 17], [29, 1], [18, 22], [24, 23]],
        [[3, 16], [14, 21], [13, 8], [28, 15], [25, 5], [0, 6], [20, 2], [22, 24], [18, 27]],
        [[12, 4], [8, 5], [19, 9], [17, 2], [23, 1]],
        [[7, 15], [3, 21], [10, 16], [28, 9], [22, 18], [24, 27]],
        [[14, 12], [2, 5], [1, 20], [11, 17], [6, 4], [8, 25], [13, 0], [23, 29]],
        [[7, 9], [4, 21], [28, 17], [0, 20], [25, 3], [26, 8], [12, 13], [24, 22], [15, 27]],
        [[6, 21], [18, 19]],
        [[2, 7], [9, 14], [1, 3], [11, 10], [4, 12], [8, 6], [26, 28], [17, 23], [0, 13], [20, 25], [16, 22], [29, 24], [15, 19]],
        [[7, 23], [10, 21], [5, 14], [12, 11], [13, 1], [3, 18], [27, 0], [22, 20]],
        [[24, 19], [28, 25], [8, 18], [17, 9], [16, 26], [29, 15]],
        [[2, 8], [11, 23], [4, 25], [6, 3], [5, 22], [12, 10], [13, 9], [21, 20]],
        [[7, 24], [14, 18], [28, 23], [16, 17], [15, 26]],
        [[5, 2], [9, 22], [1, 7], [11, 24], [4, 8], [6, 10], [0, 12], [25, 18], [27, 28], [29, 20], [19, 13], [21, 26]],
        [[17, 13], [15, 20]],
        [[3, 6], [11, 22], [14, 0], [8, 7], [5, 24], [2, 19], [27, 1], [16, 29], [23, 25]],
        [[12, 28], [4, 10], [7, 22], [9, 24], [8, 19], [13, 14], [0, 3], [20, 17], [29, 27], [18, 26], [15, 23], [21, 16]],
        [[2, 4], [17, 1], [21, 25]],
        [[7, 0], [14, 8], [9, 12], [6, 2], [5, 11], [19, 27], [28, 22], [20, 1], [16, 15], [29, 23], [24, 26]],
        [[6, 13], [12, 17], [23, 5], [20, 19], [15, 21]],
        [[14, 11], [19, 28], [27, 20], [18, 21]],
        [[7, 17], [9, 8], [6, 0], [12, 1], [25, 10], [26, 16], [22, 23], [24, 5], [15, 29]],
        [[4, 14], [2, 6], [1, 12], [10, 8], [11, 7], [13, 27], [19, 26], [28, 16], [0, 25], [29, 3], [18, 5], [21, 22]],
        [[14, 15], [9, 11], [17, 19], [20, 24], [23, 3]],
        [[8, 10], [28, 13], [25, 27], [26, 18], [16, 5], [22, 7], [21, 29]],
        [[4, 11], [2, 14], [9, 15], [13, 1], [19, 24], [20, 6], [17, 18], [23, 0]],
        [[10, 27], [1, 2], [25, 26], [16, 3], [21, 7]],
        [[14, 9], [5, 15], [13, 4], [17, 6], [20, 12], [29, 28], [22, 0], [18, 7], [24, 3]],
        [[10, 1], [11, 15], [4, 26], [19, 12], [27, 21], [16, 28], [23, 22]],
        [[2, 26], [9, 5], [6, 14], [13, 11], [25, 17], [20, 21], [29, 0], [18, 3], [24, 7]],
        [[8, 28], [14, 2], [5, 1], [10, 15], [17, 4], [27, 12], [23, 16]],
        [[3, 25], [6, 11], [21, 9]],
        [[7, 10], [14, 3], [2, 1], [5, 26], [12, 8], [13, 29], [28, 20], [0, 15], [27, 23], [16, 4], [22, 17], [24, 18]],
        [[20, 27], [1, 8], [11, 2], [6, 15], [25, 29], [26, 10], [19, 23], [18, 9], [21, 4]],
        [[12, 5], [16, 17]],
        [[2, 10], [3, 8], [11, 19], [28, 29], [25, 7], [26, 27], [6, 5], [0, 13], [22, 14], [24, 9], [15, 4], [21, 23]],
        [[1, 6], [10, 19], [8, 29], [3, 12], [13, 7], [17, 0], [27, 26], [16, 9], [18, 4]],
        [[24, 14], [28, 11], [20, 25]],
        [[1, 0], [4, 19], [12, 29], [13, 10], [26, 20], [27, 9], [22, 16]],
        [[7, 12], [2, 24], [28, 17], [23, 14]],
        [[9, 13], [3, 7], [10, 5], [4, 1], [0, 28], [25, 24], [26, 19], [20, 22], [29, 23], [18, 14], [15, 16], [21, 27]],
        [[2, 12], [11, 6], [19, 17]],
        [[12, 21], [9, 7], [3, 5], [1, 25], [10, 13], [4, 23], [8, 22], [28, 24], [20, 18], [16, 14], [29, 27], [17, 15]],
        [[7, 5], [2, 21], [10, 8], [13, 3], [19, 0], [25, 22], [26, 15], [27, 18]],
        [[1, 23], [9, 4], [17, 24], [20, 0], [29, 16]],
        [[14, 27], [8, 21], [7, 1], [10, 3], [12, 6], [28, 26], [11, 5], [13, 23], [19, 18], [15, 2]],
        [[6, 9], [5, 4], [26, 24], [17, 18], [22, 25]],
        [[7, 21], [14, 13], [9, 11], [1, 27], [10, 4], [12, 3], [19, 24], [0, 8], [29, 2], [20, 17]],
        [[5, 23], [18, 16]],
        [[9, 23], [3, 1], [11, 20], [4, 17], [6, 27], [14, 0], [8, 26], [12, 7], [13, 21], [19, 28], [29, 10], [24, 2], [15, 25]],
        [[7, 13], [1, 21], [3, 17], [28, 19], [0, 11], [16, 2], [22, 10], [18, 25]],
        [[5, 20], [12, 23], [26, 9], [14, 29], [4, 6], [27, 8], [15, 18], [24, 16]],
        [[3, 29], [6, 1], [13, 25], [0, 21], [17, 11], [22, 24]],
        [[14, 26], [8, 9], [12, 4], [19, 20], [18, 28], [15, 10], [23, 2]],
        [],
        [[6, 12], [21, 16]],
        [[28, 27], [0, 11], [25, 22], [26, 19], [17, 8], [20, 23], [4, 10], [7, 13], [14, 6], [5, 3], [12, 1], [9, 2], [18, 21], [24, 29], [16, 15]],
        [[5, 17], [1, 9], [11, 8], [4, 3], [0, 29], [25, 26], [27, 19], [16, 7], [20, 13], [24, 28], [21, 10]],
        [[2, 29], [12, 14], [15, 21]],
        [[9, 0], [3, 11], [25, 28], [6, 17], [27, 24], [16, 1], [23, 7], [22, 15]],
        [[2, 6], [10, 17], [11, 25], [8, 3], [19, 14], [28, 0], [26, 13], [20, 24], [12, 5], [29, 7], [18, 1], [21, 22]],
        [[4, 9]],
        [[2, 9], [10, 18], [6, 3], [5, 8], [0, 12], [26, 20], [17, 28], [27, 14], [16, 21], [22, 1], [24, 13]],
        [[11, 2], [25, 23], [29, 13], [15, 7]],
        [[14, 23], [3, 4], [10, 20], [12, 18], [19, 29], [28, 27], [26, 11], [17, 25], [9, 8], [16, 0], [24, 1], [21, 5]],
        [[6, 20], [15, 13]],
        [[2, 18], [9, 17], [3, 23], [10, 14], [4, 24], [8, 6], [12, 16], [27, 22], [26, 25], [21, 1]],
        [[7, 20], [11, 28], [8, 16], [25, 18], [0, 19], [29, 15], [22, 5]],
        [[17, 12], [23, 13], [4, 27], [6, 26], [14, 28], [9, 2], [10, 24], [21, 3]],
        [[2, 16], [1, 26], [8, 20], [0, 4], [25, 19], [15, 3]],
        [[7, 27], [14, 24], [13, 11], [28, 10], [29, 5], [18, 17], [23, 22]],
        [[2, 27], [9, 28], [1, 11], [4, 20], [6, 7], [8, 14], [12, 24], [19, 10], [0, 26], [25, 16], [22, 3], [15, 5], [21, 18]],
        [[13, 6], [23, 17]],
        [[2, 11], [3, 14], [10, 1], [8, 7], [28, 12], [0, 9], [27, 5], [16, 29], [21, 20]],
        [[7, 8], [14, 9], [1, 13], [11, 10], [25, 2], [26, 12], [29, 4], [22, 6], [18, 20], [24, 15], [23, 19]],
        [[0, 16], [17, 5], [15, 19]],
        [[7, 26], [9, 12], [3, 27], [1, 14], [8, 11], [13, 16], [28, 21], [29, 20], [18, 22], [23, 4]],
        [[7, 28], [10, 26], [11, 12], [8, 27], [0, 2], [22, 25], [24, 4], [15, 6]],
        [[17, 21], [5, 13], [14, 10], [1, 9], [16, 24], [29, 19], [23, 6], [18, 25]],
        [[3, 0], [8, 15], [12, 27], [26, 21], [22, 4]],
        [[14, 1], [2, 23], [10, 9], [11, 13], [16, 18], [29, 25], [24, 19]],
        [[3, 9], [4, 11], [13, 15], [27, 26], [28, 23], [17, 14], [20, 8], [22, 29], [18, 6], [21, 19]],
        [[2, 0], [1, 10], [5, 12], [16, 6]],
        [[14, 22], [17, 28], [12, 15], [27, 13], [20, 7], [23, 24], [29, 26]],
        [[5, 9], [3, 10], [19, 8], [4, 2], [0, 6], [28, 14], [18, 16], [24, 25], [21, 26]],
        [[13, 12], [1, 15], [2, 22], [9, 3], [17, 7], [20, 27], [29, 11]],
        [[10, 28], [6, 13], [8, 12], [5, 7], [0, 22], [16, 25], [18, 23], [24, 26]],
        [[14, 20], [2, 15], [19, 5], [17, 3], [29, 21], [23, 26]],
        [[7, 2], [9, 19], [10, 22], [4, 15], [6, 28], [8, 13], [0, 24], [25, 12], [16, 27], [18, 11]],
        [[20, 5], [29, 17], [23, 21]],
        [[13, 28], [7, 14], [1, 24], [4, 6], [12, 22], [25, 8], [26, 0], [27, 18], [16, 23], [19, 2], [15, 11]],
        [[14, 12], [3, 22], [28, 7], [0, 10], [20, 9], [21, 11]],
        [[13, 5], [23, 17], [26, 16], [4, 8], [6, 24], [19, 18], [25, 1], [27, 2], [15, 29]],
        [[7, 16], [6, 1], [5, 10], [12, 3], [0, 9], [22, 11], [21, 29]],
        [[2, 4], [8, 24], [13, 20], [28, 18], [25, 0], [17, 19], [15, 27]],
        [[5, 6], [9, 16], [3, 24], [1, 8], [10, 7], [4, 12], [26, 28], [22, 27], [20, 18], [29, 14], [21, 15]],
        [[13, 19], [11, 0], [17, 23]],
        [[7, 25], [9, 10], [3, 2], [1, 28], [4, 29], [5, 16], [26, 18], [20, 23], [22, 21], [15, 14]],
        [[12, 0], [10, 6], [11, 16], [8, 2], [3, 28], [13, 24]],
        [[0, 7], [1, 29], [5, 19], [26, 4], [25, 24], [17, 27], [20, 22], [18, 15], [21, 14]],
        [[7, 11], [2, 3], [6, 29], [13, 17], [19, 22], [27, 4], [16, 21]],
        [[14, 5], [11, 1], [18, 0], [24, 10], [15, 9]],
        [[3, 13], [4, 5], [6, 7], [28, 22], [26, 1], [12, 2], [27, 25], [16, 8], [29, 9], [23, 20]],
        [[14, 17], [19, 25], [18, 10], [15, 0]],
        [[2, 13], [3, 12], [1, 17], [11, 26], [6, 4], [5, 28], [27, 16], [29, 8], [24, 20], [23, 10]],
        [[7, 18], [14, 19], [13, 3], [28, 2], [26, 5], [22, 9], [15, 20], [21, 8]],
        [[1, 11], [25, 29], [16, 10], [24, 0], [27, 6], [12, 14], [23, 9]],
        [[7, 19], [11, 29], [5, 18], [13, 2], [28, 25], [26, 6], [17, 16], [20, 3], [22, 8], [21, 0]],
        [[14, 1], [9, 18], [27, 17], [23, 12]],
        [[7, 6], [10, 29], [4, 1], [8, 14], [25, 11], [26, 21], [2, 5], [20, 16], [24, 12], [22, 28]],
        [[11, 18], [19, 3], [0, 23], [27, 21]],
        [[9, 7], [1, 4], [10, 2], [6, 14], [8, 5], [13, 18], [25, 23], [26, 22], [17, 24], [16, 20], [29, 12], [15, 28]],
        [[3, 8], [19, 21], [10, 11], [27, 24], [0, 5], [20, 26]],
        [[17, 22], [14, 2], [6, 25], [9, 1], [4, 13], [15, 12], [18, 28], [23, 29]],
        [[7, 10], [2, 20], [11, 3], [8, 0], [5, 1], [13, 4], [25, 21], [26, 24], [16, 28], [22, 12]],
        [[6, 19], [27, 15], [23, 18]],
        [[2, 8], [12, 6], [9, 14], [3, 7], [1, 19], [10, 4], [11, 13], [5, 0], [25, 28], [20, 15], [16, 26], [29, 21], [24, 23]],
        [[17, 20], [21, 27]],
        [[28, 16], [7, 9], [1, 2], [11, 14], [4, 3], [6, 8], [5, 25], [12, 10], [13, 0], [22, 26], [19, 17], [18, 29], [15, 24], [23, 27]],
        [[9, 25], [10, 13], [14, 7], [8, 4], [3, 6], [0, 1]],
        [[5, 12], [21, 23], [24, 27], [2, 11], [19, 16], [20, 28], [15, 22], [29, 17], [18, 26]],
        [[5, 6], [22, 27], [24, 17], [23, 19]],
        [[14, 8], [9, 6], [1, 3], [10, 7], [11, 4], [28, 5], [0, 2], [25, 13], [26, 29], [16, 19], [18, 24], [21, 17]],
        [[27, 20], [15, 16]],
        [[9, 10], [1, 12], [4, 7], [6, 11], [5, 2], [13, 8], [28, 3], [25, 19], [17, 26], [0, 14], [20, 29], [22, 18], [23, 15]],
        [[21, 24], [7, 3], [10, 0], [11, 5], [14, 4], [19, 26], [27, 29], [16, 22]],
        [[12, 13], [8, 1], [6, 9], [2, 17], [18, 15], [24, 25], [23, 28]],
        [[3, 4], [1, 0], [10, 5], [11, 7], [13, 9], [19, 20], [26, 17], [22, 23], [29, 28], [15, 25]],
    ];
    return GameSchedule;
}());
var TimeUtil = /** @class */ (function () {
    function TimeUtil() {
    }
    TimeUtil.getTimeString = function () {
        var datetime = new Date();
        return datetime.getFullYear() + '-'
            + (datetime.getMonth() + 1) + '-'
            + datetime.getDate() + 'T'
            + datetime.getHours() + '-'
            + datetime.getMinutes() + '-'
            + datetime.getSeconds();
    };
    return TimeUtil;
}());
var FileUtil = /** @class */ (function () {
    function FileUtil() {
    }
    FileUtil.createBlob = function (content) {
        var blob;
        try {
            blob = new Blob([content], {
                type: "text/plain;charset=utf-8"
            });
        }
        catch (e) {
            window.BlobBuilder = window.BlobBuilder ||
                window.WebkitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder;
            if (e.name == 'TypeError' && window.BlobBuilder) {
                var bb = new BlobBuilder();
                bb.append([content]);
                blob = bb.getBlob("text/plain;charset=utf-8");
            }
            else if (e.name == 'InvalidStateError') {
                blob = new Blob([content.buffer], { type: "text/plain;charset=utf-8" });
            }
        }
        return blob;
    };
    return FileUtil;
}());
var TemplateUtil = /** @class */ (function () {
    function TemplateUtil() {
    }
    TemplateUtil.createPlayerLine = function (player) {
        var lineTemplate = "\n        <div class='gameLine'>\n            <span>" + player.name + "&nbsp;\u80FD\u529B&nbsp;" + player.ability + "</span>\n        </div>\n        ";
        var newNode = new DOMParser().parseFromString(lineTemplate, 'text/html').querySelector('.gameLine');
        return newNode;
    };
    TemplateUtil.createNewsLine = function (day, season, content) {
        var template = "\n        <div class='leftLine'>\n            <span>\n                <span>\u7B2C" + season + "\u8D5B\u5B63</span><span>\u7B2C" + day + "\u5929&nbsp;</span>\n                <br />\n                " + content + "\n            </span>\n        </div>\n        ";
        var newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.leftLine');
        return newNode;
    };
    TemplateUtil.createLine = function (text) {
        var lineTemplate = "\n        <div class='gameLine'>\n            <span>" + text + "</span>\n        </div>\n        ";
        var newNode = new DOMParser().parseFromString(lineTemplate, 'text/html').querySelector('.gameLine');
        return newNode;
    };
    TemplateUtil.createTeamLine = function (rank, teamId, gameData) {
        var teamName = gameData.teams[teamId].name;
        var win = gameData.teams[teamId].winNum;
        var lost = gameData.teams[teamId].gameNum - win;
        var lineTemplate = "\n        <div class='gameLine' onclick='showTeamInfo(" + teamId + ")'>\n            <span class='rankSpan'>" + rank + "</span><span class='growSpan'>" + teamName + "</span><span>&nbsp;" + win + "&nbsp;\u80DC&nbsp;" + lost + "&nbsp;\u8D1F</span>\n        </div>\n        ";
        var newNode = new DOMParser().parseFromString(lineTemplate, 'text/html').querySelector('.gameLine');
        return newNode;
    };
    return TemplateUtil;
}());
