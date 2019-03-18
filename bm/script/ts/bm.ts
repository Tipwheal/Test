class Game {
    static regularEndDay = 164;
    static round1EndDay = 15;
    static offSeasonGames = [
        [{round: 'round1', pair: 0, home: 'up'}, {round: 'round1', pair: 2, home: 'up'}, {round: 'round1', pair: 5, home: 'up'}, {round: 'round1', pair: 7, home: 'up'}],
        [{round: 'round1', pair: 1, home: 'up'}, {round: 'round1', pair: 3, home: 'up'}, {round: 'round1', pair: 4, home: 'up'}, {round: 'round1', pair: 6, home: 'up'}],
        [{round: 'round1', pair: 0, home: 'up'}, {round: 'round1', pair: 2, home: 'up'}, {round: 'round1', pair: 5, home: 'up'}, {round: 'round1', pair: 7, home: 'up'}],
        [{round: 'round1', pair: 1, home: 'up'}, {round: 'round1', pair: 3, home: 'up'}, {round: 'round1', pair: 4, home: 'up'}, {round: 'round1', pair: 6, home: 'up'}],
        [{round: 'round1', pair: 0, home: 'down'}, {round: 'round1', pair: 2, home: 'down'}, {round: 'round1', pair: 5, home: 'down'}, {round: 'round1', pair: 7, home: 'down'}],
        [{round: 'round1', pair: 1, home: 'down'}, {round: 'round1', pair: 3, home: 'down'}, {round: 'round1', pair: 4, home: 'down'}, {round: 'round1', pair: 6, home: 'down'}],
        [{round: 'round1', pair: 0, home: 'down'}, {round: 'round1', pair: 2, home: 'down'}, {round: 'round1', pair: 5, home: 'down'}, {round: 'round1', pair: 7, home: 'down'}],
        [{round: 'round1', pair: 1, home: 'down'}, {round: 'round1', pair: 3, home: 'down'}, {round: 'round1', pair: 4, home: 'down'}, {round: 'round1', pair: 6, home: 'down'}],
        [{round: 'round1', pair: 0, home: 'up'}, {round: 'round1', pair: 2, home: 'up'}, {round: 'round1', pair: 5, home: 'up'}, {round: 'round1', pair: 7, home: 'up'}],
        [{round: 'round1', pair: 1, home: 'up'}, {round: 'round1', pair: 3, home: 'up'}, {round: 'round1', pair: 4, home: 'up'}, {round: 'round1', pair: 6, home: 'up'}],
        [{round: 'round1', pair: 0, home: 'down'}, {round: 'round1', pair: 2, home: 'down'}, {round: 'round1', pair: 5, home: 'down'}, {round: 'round1', pair: 7, home: 'down'}],
        [{round: 'round1', pair: 1, home: 'down'}, {round: 'round1', pair: 3, home: 'down'}, {round: 'round1', pair: 4, home: 'down'}, {round: 'round1', pair: 6, home: 'down'}],
        [{round: 'round1', pair: 0, home: 'up'}, {round: 'round1', pair: 2, home: 'up'}, {round: 'round1', pair: 5, home: 'up'}, {round: 'round1', pair: 7, home: 'up'}],
        [{round: 'round1', pair: 1, home: 'up'}, {round: 'round1', pair: 3, home: 'up'}, {round: 'round1', pair: 4, home: 'up'}, {round: 'round1', pair: 6, home: 'up'}],
        [{round: 'round2', pair: 0, home: 'up'}, {round: 'round2', pair: 3, home: 'up'}],
        [{round: 'round2', pair: 1, home: 'up'}, {round: 'round2', pair: 2, home: 'up'}],
        [{round: 'round2', pair: 0, home: 'up'}, {round: 'round2', pair: 3, home: 'up'}],
        [{round: 'round2', pair: 1, home: 'up'}, {round: 'round2', pair: 2, home: 'up'}],
        [{round: 'round2', pair: 0, home: 'down'}, {round: 'round2', pair: 3, home: 'down'}],
        [{round: 'round2', pair: 1, home: 'down'}, {round: 'round2', pair: 2, home: 'down'}],
        [{round: 'round2', pair: 0, home: 'down'}, {round: 'round2', pair: 3, home: 'down'}],
        [{round: 'round2', pair: 1, home: 'down'}, {round: 'round2', pair: 2, home: 'down'}],
        [{round: 'round2', pair: 0, home: 'up'}, {round: 'round2', pair: 3, home: 'up'}],
        [{round: 'round2', pair: 1, home: 'up'}, {round: 'round2', pair: 2, home: 'up'}],
        [{round: 'round2', pair: 0, home: 'down'}, {round: 'round2', pair: 3, home: 'down'}],
        [{round: 'round2', pair: 1, home: 'down'}, {round: 'round2', pair: 2, home: 'down'}],
        [{round: 'round2', pair: 0, home: 'up'}, {round: 'round2', pair: 3, home: 'up'}],
        [{round: 'round2', pair: 1, home: 'up'}, {round: 'round2', pair: 2, home: 'up'}],
        [{round: 'semi', pair: 0, home: 'up'}],
        [{round: 'semi', pair: 1, home: 'up'}],
        [{round: 'semi', pair: 0, home: 'up'}],
        [{round: 'semi', pair: 1, home: 'up'}],
        [{round: 'semi', pair: 0, home: 'down'}],
        [{round: 'semi', pair: 1, home: 'down'}],
        [{round: 'semi', pair: 0, home: 'down'}],
        [{round: 'semi', pair: 1, home: 'down'}],
        [{round: 'semi', pair: 0, home: 'up'}],
        [{round: 'semi', pair: 1, home: 'up'}],
        [{round: 'semi', pair: 0, home: 'down'}],
        [{round: 'semi', pair: 1, home: 'down'}],
        [{round: 'semi', pair: 0, home: 'up'}],
        [{round: 'semi', pair: 1, home: 'up'}],
        [{round: 'final', pair: 0, home: 'up'}],
        [],
        [{round: 'final', pair: 0, home: 'up'}],
        [],
        [{round: 'final', pair: 0, home: 'down'}],
        [],
        [{round: 'final', pair: 0, home: 'down'}],
        [],
        [{round: 'final', pair: 0, home: 'up'}],
        [],
        [{round: 'final', pair: 0, home: 'down'}],
        [],
        [{round: 'final', pair: 0, home: 'up'}],
    ];

    public static getInitData():any {
        let result =  {
            teams: {
                '0': {
                    name: '雄鹿',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '1': {
                    name: '猛龙',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '2': {
                    name: '步行者',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '3': {
                    name: '76人',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '4': {
                    name: '凯尔特人',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '5': {
                    name: '热火',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '6': {
                    name: '篮网',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '7': {
                    name: '黄蜂',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '8': {
                    name: '活塞',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '9': {
                    name: '魔术',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '10': {
                    name: '奇才',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '11': {
                    name: '老鹰',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '12': {
                    name: '尼克斯',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '13': {
                    name: '公牛',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '14': {
                    name: '骑士',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '15': {
                    name: '勇士',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '16': {
                    name: '掘金',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '17': {
                    name: '雷霆',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '18': {
                    name: '开拓者',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '19': {
                    name: '火箭',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '20': {
                    name: '马刺',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '21': {
                    name: '快船',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '22': {
                    name: '爵士',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '23': {
                    name: '湖人',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '24': {
                    name: '国王',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '25': {
                    name: '森林狼',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '26': {
                    name: '鹈鹕',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '27': {
                    name: '独行侠',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '28': {
                    name: '灰熊',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
                '29': {
                    name: '太阳',
                    gameNum: 0,
                    winNum: 0,
                    regularChampionNum: 0,
                    seasonScore: 0,
                    seasonOppScore: 0,
                    players: [],
                },
            },
            news: [
            ],
            matches: [
            ],
            players: {
                '1': {
                    age: 31,
                    draft: 200907,
                    experience: 0,
                    id: 1,
                    loyalty: 4,
                    name: '斯蒂芬-库里',
                    numsChampion: 3,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 11,
                    salary: 41620000,
                    skillAverage: 91,
                    skillBlock: 68,
                    skillPass: 85,
                    skillPhysique: 92,
                    skillRebound: 71,
                    skillShotExterior: 96,
                    skillShotFree: 76,
                    skillShotInterior: 85,
                    skillSteal: 76,
                    stateEnergy: 73,
                    stateInjury: 10,
                    team: 15,
                    yearsContract: 4,
                    yearsLeague: 9,
                },
                '2': {
                    age: 25,
                    draft: 201403,
                    experience: 0,
                    id: 2,
                    loyalty: 2,
                    name: '乔尔-恩比德',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 10,
                    salary: 29334000,
                    skillAverage: 96,
                    skillBlock: 86,
                    skillPass: 69,
                    skillPhysique: 95,
                    skillRebound: 92,
                    skillShotExterior: 76,
                    skillShotFree: 95,
                    skillShotInterior: 96,
                    skillSteal: 60,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 5,
                    yearsLeague: 2,
                },
                '3': {
                    age: 34,
                    draft: 200301,
                    experience: 0,
                    id: 3,
                    loyalty: 3,
                    name: '勒布朗-詹姆斯',
                    numsChampion: 3,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 11,
                    salary: 38327500,
                    skillAverage: 96,
                    skillBlock: 81,
                    skillPass: 82,
                    skillPhysique: 94,
                    skillRebound: 81,
                    skillShotExterior: 85,
                    skillShotFree: 86,
                    skillShotInterior: 99,
                    skillSteal: 75,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 4,
                    yearsLeague: 15,
                },
                '4': {
                    age: 29,
                    draft: 200903,
                    experience: 0,
                    id: 4,
                    loyalty: 5,
                    name: '詹姆斯-哈登',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 10,
                    salary: 39954000,
                    skillAverage: 96,
                    skillBlock: 70,
                    skillPass: 85,
                    skillPhysique: 94,
                    skillRebound: 73,
                    skillShotExterior: 94,
                    skillShotFree: 99,
                    skillShotInterior: 80,
                    skillSteal: 84,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 5,
                    yearsLeague: 9,
                },
                '5': {
                    age: 30,
                    draft: 200702,
                    experience: 0,
                    id: 5,
                    loyalty: 5,
                    name: '凯文-杜兰特',
                    numsChampion: 2,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 11,
                    salary: 30750000,
                    skillAverage: 91,
                    skillBlock: 73,
                    skillPass: 80,
                    skillPhysique: 92,
                    skillRebound: 78,
                    skillShotExterior: 82,
                    skillShotFree: 82,
                    skillShotInterior: 97,
                    skillSteal: 73,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 2,
                    yearsLeague: 11,
                },
                '6': {
                    age: 29,
                    draft: 201109,
                    experience: 0,
                    id: 6,
                    loyalty: 4,
                    name: '肯巴-沃克',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 12000000,
                    skillAverage: 88,
                    skillBlock: 65,
                    skillPass: 84,
                    skillPhysique: 91,
                    skillRebound: 70,
                    skillShotExterior: 89,
                    skillShotFree: 77,
                    skillShotInterior: 86,
                    skillSteal: 74,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '7': {
                    age: 29,
                    draft: 201206,
                    experience: 0,
                    id: 7,
                    loyalty: 5,
                    name: '达米安-利拉德',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 29803333,
                    skillAverage: 87,
                    skillBlock: 65,
                    skillPass: 79,
                    skillPhysique: 90,
                    skillRebound: 71,
                    skillShotExterior: 89,
                    skillShotFree: 82,
                    skillShotInterior: 88,
                    skillSteal: 70,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 3,
                    yearsLeague: 6,
                },
                '8': {
                    age: 24,
                    draft: 201413,
                    experience: 0,
                    id: 8,
                    loyalty: 2,
                    name: '扎克-拉文',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 19500000,
                    skillAverage: 87,
                    skillBlock: 68,
                    skillPass: 75,
                    skillPhysique: 92,
                    skillRebound: 73,
                    skillShotExterior: 83,
                    skillShotFree: 84,
                    skillShotInterior: 89,
                    skillSteal: 75,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 4,
                    yearsLeague: 4,
                },
                '9': {
                    age: 24,
                    draft: 201315,
                    experience: 0,
                    id: 9,
                    loyalty: 4,
                    name: '扬尼斯-阿德托昆博',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 10,
                    salary: 25843333,
                    skillAverage: 93,
                    skillBlock: 78,
                    skillPass: 76,
                    skillPhysique: 94,
                    skillRebound: 89,
                    skillShotExterior: 70,
                    skillShotFree: 86,
                    skillShotInterior: 97,
                    skillSteal: 73,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '10': {
                    age: 29,
                    draft: 200909,
                    experience: 0,
                    id: 10,
                    loyalty: 1,
                    name: '德玛尔-德罗赞',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 10,
                    salary: 27740000,
                    skillAverage: 86,
                    skillBlock: 65,
                    skillPass: 82,
                    skillPhysique: 93,
                    skillRebound: 75,
                    skillShotExterior: 68,
                    skillShotFree: 81,
                    skillShotInterior: 97,
                    skillSteal: 74,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 3,
                    yearsLeague: 9,
                },
                '11': {
                    age: 26,
                    draft: 201201,
                    experience: 0,
                    id: 11,
                    loyalty: 2,
                    name: '安东尼-戴维斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 10,
                    salary: 27090000,
                    skillAverage: 95,
                    skillBlock: 85,
                    skillPass: 73,
                    skillPhysique: 92,
                    skillRebound: 89,
                    skillShotExterior: 79,
                    skillShotFree: 88,
                    skillShotInterior: 96,
                    skillSteal: 69,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 3,
                    yearsLeague: 6,
                },
                '12': {
                    age: 30,
                    draft: 200901,
                    experience: 0,
                    id: 12,
                    loyalty: 4,
                    name: '布雷克-格里芬',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 10,
                    salary: 35470000,
                    skillAverage: 89,
                    skillBlock: 70,
                    skillPass: 73,
                    skillPhysique: 93,
                    skillRebound: 85,
                    skillShotExterior: 79,
                    skillShotFree: 83,
                    skillShotInterior: 91,
                    skillSteal: 68,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 4,
                    yearsLeague: 8,
                },
                '13': {
                    age: 28,
                    draft: 201115,
                    experience: 0,
                    id: 13,
                    loyalty: 3,
                    name: '科怀-伦纳德',
                    numsChampion: 1,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 10,
                    salary: 22220000,
                    skillAverage: 90,
                    skillBlock: 68,
                    skillPass: 71,
                    skillPhysique: 91,
                    skillRebound: 79,
                    skillShotExterior: 82,
                    skillShotFree: 83,
                    skillShotInterior: 96,
                    skillSteal: 78,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '14': {
                    age: 30,
                    draft: 200804,
                    experience: 0,
                    id: 14,
                    loyalty: 1,
                    name: '拉塞尔-威斯布鲁克',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 41070000,
                    skillAverage: 93,
                    skillBlock: 71,
                    skillPass: 91,
                    skillPhysique: 92,
                    skillRebound: 78,
                    skillShotExterior: 77,
                    skillShotFree: 82,
                    skillShotInterior: 94,
                    skillSteal: 82,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 5,
                    yearsLeague: 10,
                },
                '15': {
                    age: 27,
                    draft: 201302,
                    experience: 0,
                    id: 15,
                    loyalty: 2,
                    name: '维克多-奥拉迪波',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 10,
                    salary: 21000000,
                    skillAverage: 89,
                    skillBlock: 67,
                    skillPass: 78,
                    skillPhysique: 92,
                    skillRebound: 81,
                    skillShotExterior: 84,
                    skillShotFree: 76,
                    skillShotInterior: 89,
                    skillSteal: 81,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '16': {
                    age: 29,
                    draft: 201010,
                    experience: 0,
                    id: 16,
                    loyalty: 5,
                    name: '保罗-乔治',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 10,
                    salary: 34230000,
                    skillAverage: 90,
                    skillBlock: 69,
                    skillPass: 75,
                    skillPhysique: 93,
                    skillRebound: 78,
                    skillShotExterior: 85,
                    skillShotFree: 81,
                    skillShotInterior: 84,
                    skillSteal: 85,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 4,
                    yearsLeague: 8,
                },
                '17': {
                    age: 22,
                    draft: 201513,
                    experience: 0,
                    id: 17,
                    loyalty: 1,
                    name: '德文-布克',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 26885000,
                    skillAverage: 86,
                    skillBlock: 63,
                    skillPass: 84,
                    skillPhysique: 87,
                    skillRebound: 70,
                    skillShotExterior: 83,
                    skillShotFree: 78,
                    skillShotInterior: 83,
                    skillSteal: 74,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 6,
                    yearsLeague: 3,
                },
                '18': {
                    age: 27,
                    draft: 201324,
                    experience: 0,
                    id: 18,
                    loyalty: 5,
                    name: '蒂姆-哈达威二世',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 18153333,
                    skillAverage: 83,
                    skillBlock: 63,
                    skillPass: 72,
                    skillPhysique: 88,
                    skillRebound: 69,
                    skillShotExterior: 85,
                    skillShotFree: 79,
                    skillShotInterior: 83,
                    skillSteal: 72,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '19': {
                    age: 26,
                    draft: 201203,
                    experience: 0,
                    id: 19,
                    loyalty: 4,
                    name: '布拉德利-比尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 10,
                    salary: 27090000,
                    skillAverage: 85,
                    skillBlock: 73,
                    skillPass: 74,
                    skillPhysique: 91,
                    skillRebound: 71,
                    skillShotExterior: 84,
                    skillShotFree: 74,
                    skillShotInterior: 83,
                    skillSteal: 75,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 3,
                    yearsLeague: 6,
                },
                '20': {
                    age: 28,
                    draft: 201001,
                    experience: 0,
                    id: 20,
                    loyalty: 4,
                    name: '约翰-沃尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 37702000,
                    skillAverage: 90,
                    skillBlock: 70,
                    skillPass: 90,
                    skillPhysique: 92,
                    skillRebound: 68,
                    skillShotExterior: 74,
                    skillShotFree: 78,
                    skillShotInterior: 87,
                    skillSteal: 87,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 5,
                    yearsLeague: 8,
                },
                '21': {
                    age: 29,
                    draft: 201111,
                    experience: 0,
                    id: 21,
                    loyalty: 3,
                    name: '克莱-汤普森',
                    numsChampion: 3,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 18990000,
                    skillAverage: 80,
                    skillBlock: 69,
                    skillPass: 68,
                    skillPhysique: 89,
                    skillRebound: 69,
                    skillShotExterior: 85,
                    skillShotFree: 68,
                    skillShotInterior: 80,
                    skillSteal: 72,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '22': {
                    age: 27,
                    draft: 201101,
                    experience: 0,
                    id: 22,
                    loyalty: 1,
                    name: '凯里-欧文',
                    numsChampion: 1,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 20715000,
                    skillAverage: 86,
                    skillBlock: 67,
                    skillPass: 82,
                    skillPhysique: 90,
                    skillRebound: 71,
                    skillShotExterior: 81,
                    skillShotFree: 71,
                    skillShotInterior: 81,
                    skillSteal: 80,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '23': {
                    age: 27,
                    draft: 201310,
                    experience: 0,
                    id: 23,
                    loyalty: 1,
                    name: 'C.J.迈克鲁姆',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 27556667,
                    skillAverage: 80,
                    skillBlock: 65,
                    skillPass: 71,
                    skillPhysique: 88,
                    skillRebound: 70,
                    skillShotExterior: 79,
                    skillShotFree: 71,
                    skillShotInterior: 85,
                    skillSteal: 71,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '24': {
                    age: 23,
                    draft: 201501,
                    experience: 0,
                    id: 24,
                    loyalty: 2,
                    name: '卡尔-安东尼-唐斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 10,
                    salary: 27598333,
                    skillAverage: 89,
                    skillBlock: 86,
                    skillPass: 64,
                    skillPhysique: 92,
                    skillRebound: 89,
                    skillShotExterior: 75,
                    skillShotFree: 79,
                    skillShotInterior: 83,
                    skillSteal: 66,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 6,
                    yearsLeague: 3,
                },
                '25': {
                    age: 22,
                    draft: 201713,
                    experience: 0,
                    id: 25,
                    loyalty: 1,
                    name: '多诺万-米切尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 3983333,
                    skillAverage: 84,
                    skillBlock: 65,
                    skillPass: 76,
                    skillPhysique: 89,
                    skillRebound: 68,
                    skillShotExterior: 81,
                    skillShotFree: 75,
                    skillShotInterior: 85,
                    skillSteal: 79,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '26': {
                    age: 28,
                    draft: 201123,
                    experience: 0,
                    id: 26,
                    loyalty: 2,
                    name: '尼古拉-米罗蒂奇',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 9,
                    salary: 12500000,
                    skillAverage: 81,
                    skillBlock: 68,
                    skillPass: 65,
                    skillPhysique: 84,
                    skillRebound: 86,
                    skillShotExterior: 78,
                    skillShotFree: 72,
                    skillShotInterior: 77,
                    skillSteal: 69,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '27': {
                    age: 27,
                    draft: 201119,
                    experience: 0,
                    id: 27,
                    loyalty: 4,
                    name: '托比亚斯-哈里斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 9,
                    salary: 14800000,
                    skillAverage: 84,
                    skillBlock: 69,
                    skillPass: 68,
                    skillPhysique: 90,
                    skillRebound: 80,
                    skillShotExterior: 78,
                    skillShotFree: 78,
                    skillShotInterior: 89,
                    skillSteal: 66,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '28': {
                    age: 25,
                    draft: 201540,
                    experience: 0,
                    id: 28,
                    loyalty: 4,
                    name: '约什-理查德森',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 10467500,
                    skillAverage: 82,
                    skillBlock: 70,
                    skillPass: 73,
                    skillPhysique: 90,
                    skillRebound: 70,
                    skillShotExterior: 81,
                    skillShotFree: 73,
                    skillShotInterior: 81,
                    skillSteal: 74,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 4,
                    yearsLeague: 3,
                },
                '29': {
                    age: 32,
                    draft: 200545,
                    experience: 0,
                    id: 29,
                    loyalty: 5,
                    name: '路易斯-威廉姆斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 5833333,
                    skillAverage: 81,
                    skillBlock: 63,
                    skillPass: 75,
                    skillPhysique: 84,
                    skillRebound: 67,
                    skillShotExterior: 78,
                    skillShotFree: 81,
                    skillShotInterior: 83,
                    skillSteal: 69,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 3,
                    yearsLeague: 13,
                },
                '30': {
                    age: 27,
                    draft: 201239,
                    experience: 0,
                    id: 30,
                    loyalty: 1,
                    name: '克里斯-米德尔顿',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 9,
                    salary: 13000000,
                    skillAverage: 82,
                    skillBlock: 64,
                    skillPass: 75,
                    skillPhysique: 88,
                    skillRebound: 72,
                    skillShotExterior: 83,
                    skillShotFree: 72,
                    skillShotInterior: 77,
                    skillSteal: 75,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '31': {
                    age: 31,
                    draft: 200704,
                    experience: 0,
                    id: 31,
                    loyalty: 2,
                    name: '迈克-康利',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 32510000,
                    skillAverage: 85,
                    skillBlock: 63,
                    skillPass: 82,
                    skillPhysique: 89,
                    skillRebound: 67,
                    skillShotExterior: 81,
                    skillShotFree: 79,
                    skillShotInterior: 82,
                    skillSteal: 75,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 3,
                    yearsLeague: 11,
                },
                '32': {
                    age: 30,
                    draft: 200801,
                    experience: 0,
                    id: 32,
                    loyalty: 1,
                    name: '德里克-罗斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 2180000,
                    skillAverage: 81,
                    skillBlock: 63,
                    skillPass: 79,
                    skillPhysique: 87,
                    skillRebound: 68,
                    skillShotExterior: 73,
                    skillShotFree: 72,
                    skillShotInterior: 84,
                    skillSteal: 72,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '33': {
                    age: 29,
                    draft: 200917,
                    experience: 0,
                    id: 33,
                    loyalty: 4,
                    name: '朱-霍勒迪',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 26315000,
                    skillAverage: 85,
                    skillBlock: 69,
                    skillPass: 91,
                    skillPhysique: 86,
                    skillRebound: 71,
                    skillShotExterior: 71,
                    skillShotFree: 75,
                    skillShotInterior: 78,
                    skillSteal: 78,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 4,
                    yearsLeague: 9,
                },
                '34': {
                    age: 20,
                    draft: 201903,
                    experience: 0,
                    id: 34,
                    loyalty: 4,
                    name: '卢卡-东契奇',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 9,
                    salary: 8115000,
                    skillAverage: 83,
                    skillBlock: 66,
                    skillPass: 74,
                    skillPhysique: 89,
                    skillRebound: 76,
                    skillShotExterior: 79,
                    skillShotFree: 74,
                    skillShotInterior: 80,
                    skillSteal: 70,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '35': {
                    age: 30,
                    draft: 200806,
                    experience: 0,
                    id: 35,
                    loyalty: 5,
                    name: '达尼罗-加里纳利',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 22105000,
                    skillAverage: 81,
                    skillBlock: 66,
                    skillPass: 66,
                    skillPhysique: 87,
                    skillRebound: 75,
                    skillShotExterior: 79,
                    skillShotFree: 82,
                    skillShotInterior: 81,
                    skillSteal: 65,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 2,
                    yearsLeague: 10,
                },
                '36': {
                    age: 30,
                    draft: 200805,
                    experience: 0,
                    id: 36,
                    loyalty: 3,
                    name: '凯文-乐福',
                    numsChampion: 1,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 28904000,
                    skillAverage: 87,
                    skillBlock: 70,
                    skillPass: 68,
                    skillPhysique: 91,
                    skillRebound: 92,
                    skillShotExterior: 77,
                    skillShotFree: 88,
                    skillShotInterior: 81,
                    skillSteal: 60,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 5,
                    yearsLeague: 10,
                },
                '37': {
                    age: 25,
                    draft: 201209,
                    experience: 0,
                    id: 37,
                    loyalty: 1,
                    name: '安德烈-德拉蒙德',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 5,
                    potential: 10,
                    salary: 27090000,
                    skillAverage: 91,
                    skillBlock: 80,
                    skillPass: 62,
                    skillPhysique: 92,
                    skillRebound: 98,
                    skillShotExterior: 63,
                    skillShotFree: 78,
                    skillShotInterior: 92,
                    skillSteal: 68,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 3,
                    yearsLeague: 6,
                },
                '38': {
                    age: 28,
                    draft: 201116,
                    experience: 0,
                    id: 38,
                    loyalty: 3,
                    name: '尼古拉-武切维奇',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 12750000,
                    skillAverage: 86,
                    skillBlock: 76,
                    skillPass: 68,
                    skillPhysique: 89,
                    skillRebound: 86,
                    skillShotExterior: 68,
                    skillShotFree: 72,
                    skillShotInterior: 87,
                    skillSteal: 68,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '39': {
                    age: 25,
                    draft: 201606,
                    experience: 0,
                    id: 39,
                    loyalty: 3,
                    name: '巴迪-希尔德',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 4345000,
                    skillAverage: 81,
                    skillBlock: 66,
                    skillPass: 71,
                    skillPhysique: 87,
                    skillRebound: 73,
                    skillShotExterior: 81,
                    skillShotFree: 71,
                    skillShotInterior: 85,
                    skillSteal: 69,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '40': {
                    age: 21,
                    draft: 201705,
                    experience: 0,
                    id: 40,
                    loyalty: 3,
                    name: '德阿龙-福克斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 6653333,
                    skillAverage: 86,
                    skillBlock: 68,
                    skillPass: 84,
                    skillPhysique: 90,
                    skillRebound: 71,
                    skillShotExterior: 78,
                    skillShotFree: 79,
                    skillShotInterior: 82,
                    skillSteal: 76,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '41': {
                    age: 24,
                    draft: 201620,
                    experience: 0,
                    id: 41,
                    loyalty: 3,
                    name: '卡里斯-勒夫特',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 2165000,
                    skillAverage: 82,
                    skillBlock: 66,
                    skillPass: 74,
                    skillPhysique: 87,
                    skillRebound: 71,
                    skillShotExterior: 76,
                    skillShotFree: 78,
                    skillShotInterior: 83,
                    skillSteal: 75,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '42': {
                    age: 35,
                    draft: 200611,
                    experience: 0,
                    id: 42,
                    loyalty: 2,
                    name: 'J.J.雷迪克',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 12250000,
                    skillAverage: 79,
                    skillBlock: 63,
                    skillPass: 74,
                    skillPhysique: 86,
                    skillRebound: 67,
                    skillShotExterior: 84,
                    skillShotFree: 71,
                    skillShotInterior: 76,
                    skillSteal: 66,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 12,
                },
                '43': {
                    age: 23,
                    draft: 201727,
                    experience: 0,
                    id: 43,
                    loyalty: 1,
                    name: '凯尔-库兹马',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 2406667,
                    skillAverage: 79,
                    skillBlock: 69,
                    skillPass: 64,
                    skillPhysique: 87,
                    skillRebound: 74,
                    skillShotExterior: 75,
                    skillShotFree: 71,
                    skillShotInterior: 79,
                    skillSteal: 65,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '44': {
                    age: 22,
                    draft: 201607,
                    experience: 0,
                    id: 44,
                    loyalty: 4,
                    name: '贾马尔-穆雷',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 3970000,
                    skillAverage: 83,
                    skillBlock: 69,
                    skillPass: 75,
                    skillPhysique: 88,
                    skillRebound: 75,
                    skillShotExterior: 75,
                    skillShotFree: 75,
                    skillShotInterior: 85,
                    skillSteal: 73,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '45': {
                    age: 34,
                    draft: 200602,
                    experience: 0,
                    id: 45,
                    loyalty: 5,
                    name: '拉玛库斯-阿尔德里奇',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 10,
                    salary: 24116667,
                    skillAverage: 85,
                    skillBlock: 76,
                    skillPass: 66,
                    skillPhysique: 91,
                    skillRebound: 86,
                    skillShotExterior: 62,
                    skillShotFree: 77,
                    skillShotInterior: 90,
                    skillSteal: 63,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 3,
                    yearsLeague: 12,
                },
                '46': {
                    age: 29,
                    draft: 200824,
                    experience: 0,
                    id: 46,
                    loyalty: 1,
                    name: '赛尔吉-伊巴卡',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 22470000,
                    skillAverage: 82,
                    skillBlock: 77,
                    skillPass: 60,
                    skillPhysique: 86,
                    skillRebound: 82,
                    skillShotExterior: 68,
                    skillShotFree: 73,
                    skillShotInterior: 84,
                    skillSteal: 63,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 9,
                },
                '47': {
                    age: 24,
                    draft: 201401,
                    experience: 0,
                    id: 47,
                    loyalty: 4,
                    name: '安德鲁-威金斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 29334000,
                    skillAverage: 81,
                    skillBlock: 68,
                    skillPass: 70,
                    skillPhysique: 89,
                    skillRebound: 70,
                    skillShotExterior: 76,
                    skillShotFree: 70,
                    skillShotInterior: 81,
                    skillSteal: 81,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 5,
                    yearsLeague: 4,
                },
                '48': {
                    age: 25,
                    draft: 201414,
                    experience: 0,
                    id: 48,
                    loyalty: 1,
                    name: 'TJ-沃伦',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 9,
                    salary: 11750000,
                    skillAverage: 78,
                    skillBlock: 71,
                    skillPass: 65,
                    skillPhysique: 81,
                    skillRebound: 71,
                    skillShotExterior: 72,
                    skillShotFree: 70,
                    skillShotInterior: 80,
                    skillSteal: 70,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 4,
                    yearsLeague: 4,
                },
                '49': {
                    age: 24,
                    draft: 201441,
                    experience: 0,
                    id: 49,
                    loyalty: 5,
                    name: '尼科拉-约季奇',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 10,
                    salary: 28307500,
                    skillAverage: 90,
                    skillBlock: 75,
                    skillPass: 82,
                    skillPhysique: 89,
                    skillRebound: 89,
                    skillShotExterior: 74,
                    skillShotFree: 79,
                    skillShotInterior: 83,
                    skillSteal: 76,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 4,
                    yearsLeague: 3,
                },
                '50': {
                    age: 33,
                    draft: 200845,
                    experience: 0,
                    id: 50,
                    loyalty: 5,
                    name: '戈兰-德拉季奇',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 18665000,
                    skillAverage: 80,
                    skillBlock: 65,
                    skillPass: 79,
                    skillPhysique: 86,
                    skillRebound: 68,
                    skillShotExterior: 75,
                    skillShotFree: 73,
                    skillShotInterior: 80,
                    skillSteal: 70,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 2,
                    yearsLeague: 10,
                },
                '51': {
                    age: 34,
                    draft: 200504,
                    experience: 0,
                    id: 51,
                    loyalty: 3,
                    name: '克里斯-保罗',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 39932500,
                    skillAverage: 85,
                    skillBlock: 65,
                    skillPass: 85,
                    skillPhysique: 81,
                    skillRebound: 71,
                    skillShotExterior: 74,
                    skillShotFree: 72,
                    skillShotInterior: 76,
                    skillSteal: 89,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 4,
                    yearsLeague: 13,
                },
                '52': {
                    age: 24,
                    draft: 201419,
                    experience: 0,
                    id: 52,
                    loyalty: 3,
                    name: '加里-哈里斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 18500000,
                    skillAverage: 83,
                    skillBlock: 70,
                    skillPass: 72,
                    skillPhysique: 88,
                    skillRebound: 74,
                    skillShotExterior: 78,
                    skillShotFree: 75,
                    skillShotInterior: 83,
                    skillSteal: 76,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 4,
                    yearsLeague: 4,
                },
                '53': {
                    age: 24,
                    draft: 201407,
                    experience: 0,
                    id: 53,
                    loyalty: 4,
                    name: '朱利叶斯-兰德尔',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 8855000,
                    skillAverage: 79,
                    skillBlock: 71,
                    skillPass: 64,
                    skillPhysique: 81,
                    skillRebound: 81,
                    skillShotExterior: 66,
                    skillShotFree: 80,
                    skillShotInterior: 79,
                    skillSteal: 63,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '54': {
                    age: 25,
                    draft: 201317,
                    experience: 0,
                    id: 54,
                    loyalty: 3,
                    name: '丹尼斯-施罗德',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 9,
                    salary: 15500000,
                    skillAverage: 82,
                    skillBlock: 63,
                    skillPass: 82,
                    skillPhysique: 87,
                    skillRebound: 70,
                    skillShotExterior: 70,
                    skillShotFree: 72,
                    skillShotInterior: 83,
                    skillSteal: 78,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '55': {
                    age: 20,
                    draft: 201805,
                    experience: 0,
                    id: 55,
                    loyalty: 3,
                    name: '特雷-杨',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 9,
                    salary: 6632500,
                    skillAverage: 83,
                    skillBlock: 64,
                    skillPass: 89,
                    skillPhysique: 87,
                    skillRebound: 68,
                    skillShotExterior: 76,
                    skillShotFree: 72,
                    skillShotInterior: 80,
                    skillSteal: 71,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '56': {
                    age: 25,
                    draft: 201506,
                    experience: 0,
                    id: 56,
                    loyalty: 2,
                    name: '威利-考利-斯坦恩',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 4700000,
                    skillAverage: 83,
                    skillBlock: 70,
                    skillPass: 63,
                    skillPhysique: 87,
                    skillRebound: 82,
                    skillShotExterior: 72,
                    skillShotFree: 75,
                    skillShotInterior: 89,
                    skillSteal: 68,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '57': {
                    age: 28,
                    draft: 201240,
                    experience: 0,
                    id: 57,
                    loyalty: 3,
                    name: '威尔-巴顿',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 13397500,
                    skillAverage: 79,
                    skillBlock: 75,
                    skillPass: 72,
                    skillPhysique: 85,
                    skillRebound: 75,
                    skillShotExterior: 77,
                    skillShotFree: 70,
                    skillShotInterior: 78,
                    skillSteal: 68,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 4,
                    yearsLeague: 6,
                },
                '58': {
                    age: 23,
                    draft: 201502,
                    experience: 0,
                    id: 58,
                    loyalty: 1,
                    name: '德安吉洛-拉塞尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 7020000,
                    skillAverage: 82,
                    skillBlock: 64,
                    skillPass: 80,
                    skillPhysique: 85,
                    skillRebound: 68,
                    skillShotExterior: 80,
                    skillShotFree: 70,
                    skillShotInterior: 81,
                    skillSteal: 76,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '59': {
                    age: 23,
                    draft: 201404,
                    experience: 0,
                    id: 59,
                    loyalty: 5,
                    name: '阿隆-戈登',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 9,
                    salary: 19000000,
                    skillAverage: 82,
                    skillBlock: 73,
                    skillPass: 67,
                    skillPhysique: 89,
                    skillRebound: 80,
                    skillShotExterior: 73,
                    skillShotFree: 73,
                    skillShotInterior: 80,
                    skillSteal: 68,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 4,
                    yearsLeague: 4,
                },
                '60': {
                    age: 32,
                    draft: 0,
                    experience: 0,
                    id: 60,
                    loyalty: 5,
                    name: '韦斯利-马修斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 18620000,
                    skillAverage: 80,
                    skillBlock: 63,
                    skillPass: 70,
                    skillPhysique: 87,
                    skillRebound: 67,
                    skillShotExterior: 81,
                    skillShotFree: 72,
                    skillShotInterior: 84,
                    skillSteal: 72,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '61': {
                    age: 33,
                    draft: 200624,
                    experience: 0,
                    id: 61,
                    loyalty: 1,
                    name: '凯尔-洛瑞',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 9,
                    salary: 32250000,
                    skillAverage: 87,
                    skillBlock: 66,
                    skillPass: 93,
                    skillPhysique: 90,
                    skillRebound: 69,
                    skillShotExterior: 77,
                    skillShotFree: 73,
                    skillShotInterior: 80,
                    skillSteal: 78,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 12,
                },
                '62': {
                    age: 20,
                    draft: 201901,
                    experience: 0,
                    id: 62,
                    loyalty: 5,
                    name: '德安德烈-艾顿',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 10095000,
                    skillAverage: 82,
                    skillBlock: 72,
                    skillPass: 66,
                    skillPhysique: 85,
                    skillRebound: 86,
                    skillShotExterior: 61,
                    skillShotFree: 70,
                    skillShotInterior: 85,
                    skillSteal: 63,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '63': {
                    age: 30,
                    draft: 201155,
                    experience: 0,
                    id: 63,
                    loyalty: 3,
                    name: '伊托万-摩尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 4,
                    potential: 8,
                    salary: 8735000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 72,
                    skillPhysique: 83,
                    skillRebound: 65,
                    skillShotExterior: 71,
                    skillShotFree: 66,
                    skillShotInterior: 74,
                    skillSteal: 71,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '64': {
                    age: 34,
                    draft: 200748,
                    experience: 0,
                    id: 64,
                    loyalty: 1,
                    name: '马克-加索尔',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 24860000,
                    skillAverage: 85,
                    skillBlock: 73,
                    skillPass: 69,
                    skillPhysique: 91,
                    skillRebound: 84,
                    skillShotExterior: 75,
                    skillShotFree: 79,
                    skillShotInterior: 81,
                    skillSteal: 72,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 2,
                    yearsLeague: 10,
                },
                '65': {
                    age: 27,
                    draft: 201327,
                    experience: 0,
                    id: 65,
                    loyalty: 2,
                    name: '鲁迪-戈波特',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 24926667,
                    skillAverage: 88,
                    skillBlock: 87,
                    skillPass: 61,
                    skillPhysique: 92,
                    skillRebound: 91,
                    skillShotExterior: 60,
                    skillShotFree: 82,
                    skillShotInterior: 81,
                    skillSteal: 68,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '66': {
                    age: 21,
                    draft: 201703,
                    experience: 0,
                    id: 66,
                    loyalty: 3,
                    name: '杰森-塔特姆',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 9,
                    salary: 8143333,
                    skillAverage: 81,
                    skillBlock: 68,
                    skillPass: 70,
                    skillPhysique: 88,
                    skillRebound: 76,
                    skillShotExterior: 78,
                    skillShotFree: 75,
                    skillShotInterior: 79,
                    skillSteal: 72,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '67': {
                    age: 26,
                    draft: 201220,
                    experience: 0,
                    id: 67,
                    loyalty: 1,
                    name: '埃文-富尼耶',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 1,
                    potential: 8,
                    salary: 17000000,
                    skillAverage: 80,
                    skillBlock: 65,
                    skillPass: 73,
                    skillPhysique: 86,
                    skillRebound: 68,
                    skillShotExterior: 78,
                    skillShotFree: 69,
                    skillShotInterior: 79,
                    skillSteal: 74,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 3,
                    yearsLeague: 6,
                },
                '68': {
                    age: 25,
                    draft: 201425,
                    experience: 0,
                    id: 68,
                    loyalty: 4,
                    name: '克林特-卡佩拉',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 10,
                    salary: 17476000,
                    skillAverage: 85,
                    skillBlock: 80,
                    skillPass: 62,
                    skillPhysique: 90,
                    skillRebound: 87,
                    skillShotExterior: 60,
                    skillShotFree: 75,
                    skillShotInterior: 84,
                    skillSteal: 61,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 5,
                    yearsLeague: 4,
                },
                '69': {
                    age: 25,
                    draft: 201612,
                    experience: 0,
                    id: 69,
                    loyalty: 3,
                    name: '陶林-普林斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 3005000,
                    skillAverage: 80,
                    skillBlock: 65,
                    skillPass: 69,
                    skillPhysique: 86,
                    skillRebound: 73,
                    skillShotExterior: 79,
                    skillShotFree: 70,
                    skillShotInterior: 75,
                    skillSteal: 73,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '70': {
                    age: 27,
                    draft: 201207,
                    experience: 0,
                    id: 70,
                    loyalty: 3,
                    name: '哈里森-巴恩斯',
                    numsChampion: 1,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 24605000,
                    skillAverage: 80,
                    skillBlock: 65,
                    skillPass: 65,
                    skillPhysique: 86,
                    skillRebound: 73,
                    skillShotExterior: 75,
                    skillShotFree: 75,
                    skillShotInterior: 81,
                    skillSteal: 71,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '71': {
                    age: 29,
                    draft: 201124,
                    experience: 0,
                    id: 71,
                    loyalty: 4,
                    name: '雷吉-杰克逊',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 17565000,
                    skillAverage: 79,
                    skillBlock: 62,
                    skillPass: 77,
                    skillPhysique: 85,
                    skillRebound: 66,
                    skillShotExterior: 77,
                    skillShotFree: 73,
                    skillShotInterior: 78,
                    skillSteal: 68,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '72': {
                    age: 24,
                    draft: 201416,
                    experience: 0,
                    id: 72,
                    loyalty: 3,
                    name: '尤素夫-努尔基奇',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 11777500,
                    skillAverage: 83,
                    skillBlock: 77,
                    skillPass: 63,
                    skillPhysique: 86,
                    skillRebound: 86,
                    skillShotExterior: 63,
                    skillShotFree: 77,
                    skillShotInterior: 83,
                    skillSteal: 65,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 4,
                    yearsLeague: 4,
                },
                '73': {
                    age: 27,
                    draft: 201103,
                    experience: 0,
                    id: 73,
                    loyalty: 3,
                    name: '埃内斯-坎特',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 18620000,
                    skillAverage: 81,
                    skillBlock: 69,
                    skillPass: 63,
                    skillPhysique: 85,
                    skillRebound: 88,
                    skillShotExterior: 61,
                    skillShotFree: 75,
                    skillShotInterior: 84,
                    skillSteal: 61,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '74': {
                    age: 27,
                    draft: 201446,
                    experience: 0,
                    id: 74,
                    loyalty: 1,
                    name: '乔丹-克拉克森',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 12970000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 68,
                    skillPhysique: 82,
                    skillRebound: 68,
                    skillShotExterior: 71,
                    skillShotFree: 67,
                    skillShotInterior: 81,
                    skillSteal: 70,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '75': {
                    age: 21,
                    draft: 201602,
                    experience: 0,
                    id: 75,
                    loyalty: 3,
                    name: '布兰顿-英格拉姆',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 9,
                    salary: 6515000,
                    skillAverage: 78,
                    skillBlock: 73,
                    skillPass: 67,
                    skillPhysique: 86,
                    skillRebound: 71,
                    skillShotExterior: 65,
                    skillShotFree: 73,
                    skillShotInterior: 80,
                    skillSteal: 68,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '76': {
                    age: 25,
                    draft: 201312,
                    experience: 0,
                    id: 76,
                    loyalty: 2,
                    name: '史蒂文-亚当斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 25843333,
                    skillAverage: 85,
                    skillBlock: 77,
                    skillPass: 62,
                    skillPhysique: 91,
                    skillRebound: 85,
                    skillShotExterior: 60,
                    skillShotFree: 77,
                    skillShotInterior: 83,
                    skillSteal: 74,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '77': {
                    age: 30,
                    draft: 200807,
                    experience: 0,
                    id: 77,
                    loyalty: 1,
                    name: '埃里克-戈登',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 9,
                    salary: 13780000,
                    skillAverage: 78,
                    skillBlock: 69,
                    skillPass: 66,
                    skillPhysique: 86,
                    skillRebound: 69,
                    skillShotExterior: 79,
                    skillShotFree: 72,
                    skillShotInterior: 75,
                    skillSteal: 66,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 2,
                    yearsLeague: 10,
                },
                '78': {
                    age: 29,
                    draft: 201114,
                    experience: 0,
                    id: 78,
                    loyalty: 2,
                    name: '马库斯-莫里斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 8,
                    salary: 5380000,
                    skillAverage: 79,
                    skillBlock: 66,
                    skillPass: 63,
                    skillPhysique: 84,
                    skillRebound: 78,
                    skillShotExterior: 79,
                    skillShotFree: 73,
                    skillShotInterior: 78,
                    skillSteal: 65,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '79': {
                    age: 30,
                    draft: 0,
                    experience: 0,
                    id: 79,
                    loyalty: 5,
                    name: '肯特-贝兹莫尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 18680000,
                    skillAverage: 79,
                    skillBlock: 70,
                    skillPass: 69,
                    skillPhysique: 86,
                    skillRebound: 70,
                    skillShotExterior: 72,
                    skillShotFree: 72,
                    skillShotInterior: 76,
                    skillSteal: 80,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '80': {
                    age: 24,
                    draft: 201402,
                    experience: 0,
                    id: 80,
                    loyalty: 4,
                    name: '贾巴里-帕克',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 20000000,
                    skillAverage: 78,
                    skillBlock: 69,
                    skillPass: 65,
                    skillPhysique: 86,
                    skillRebound: 77,
                    skillShotExterior: 68,
                    skillShotFree: 71,
                    skillShotInterior: 81,
                    skillSteal: 63,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '81': {
                    age: 23,
                    draft: 201601,
                    experience: 0,
                    id: 81,
                    loyalty: 5,
                    name: '本-西蒙斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 7270000,
                    skillAverage: 84,
                    skillBlock: 69,
                    skillPass: 88,
                    skillPhysique: 90,
                    skillRebound: 79,
                    skillShotExterior: 60,
                    skillShotFree: 74,
                    skillShotInterior: 82,
                    skillSteal: 78,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '82': {
                    age: 25,
                    draft: 201532,
                    experience: 0,
                    id: 82,
                    loyalty: 1,
                    name: '蒙特雷斯-哈雷尔',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 6000000,
                    skillAverage: 82,
                    skillBlock: 83,
                    skillPass: 64,
                    skillPhysique: 84,
                    skillRebound: 77,
                    skillShotExterior: 65,
                    skillShotFree: 78,
                    skillShotInterior: 81,
                    skillSteal: 68,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 2,
                    yearsLeague: 3,
                },
                '83': {
                    age: 21,
                    draft: 201709,
                    experience: 0,
                    id: 83,
                    loyalty: 3,
                    name: '小丹尼斯-史密斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 4656667,
                    skillAverage: 78,
                    skillBlock: 66,
                    skillPass: 74,
                    skillPhysique: 85,
                    skillRebound: 68,
                    skillShotExterior: 70,
                    skillShotFree: 69,
                    skillShotInterior: 82,
                    skillSteal: 72,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '84': {
                    age: 37,
                    draft: 200305,
                    experience: 0,
                    id: 84,
                    loyalty: 3,
                    name: '德维恩-韦德',
                    numsChampion: 3,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 11,
                    salary: 2390000,
                    skillAverage: 76,
                    skillBlock: 66,
                    skillPass: 72,
                    skillPhysique: 83,
                    skillRebound: 70,
                    skillShotExterior: 71,
                    skillShotFree: 70,
                    skillShotInterior: 77,
                    skillSteal: 67,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 1,
                    yearsLeague: 15,
                },
                '85': {
                    age: 26,
                    draft: 201438,
                    experience: 0,
                    id: 85,
                    loyalty: 3,
                    name: '斯宾瑟-丁维迪',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 1660000,
                    skillAverage: 78,
                    skillBlock: 66,
                    skillPass: 76,
                    skillPhysique: 84,
                    skillRebound: 67,
                    skillShotExterior: 76,
                    skillShotFree: 70,
                    skillShotInterior: 76,
                    skillSteal: 68,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '86': {
                    age: 23,
                    draft: 201611,
                    experience: 0,
                    id: 86,
                    loyalty: 1,
                    name: '多曼塔斯-萨博尼斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 3095000,
                    skillAverage: 79,
                    skillBlock: 71,
                    skillPass: 67,
                    skillPhysique: 84,
                    skillRebound: 82,
                    skillShotExterior: 60,
                    skillShotFree: 75,
                    skillShotInterior: 80,
                    skillSteal: 64,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '87': {
                    age: 30,
                    draft: 201131,
                    experience: 0,
                    id: 87,
                    loyalty: 2,
                    name: '博扬-博格达诺维奇',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 10500000,
                    skillAverage: 77,
                    skillBlock: 62,
                    skillPass: 67,
                    skillPhysique: 85,
                    skillRebound: 69,
                    skillShotExterior: 75,
                    skillShotFree: 72,
                    skillShotInterior: 75,
                    skillSteal: 72,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '88': {
                    age: 31,
                    draft: 200818,
                    experience: 0,
                    id: 88,
                    loyalty: 1,
                    name: '贾维尔-麦基',
                    numsChampion: 2,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 84,
                    skillBlock: 94,
                    skillPass: 60,
                    skillPhysique: 86,
                    skillRebound: 79,
                    skillShotExterior: 60,
                    skillShotFree: 72,
                    skillShotInterior: 78,
                    skillSteal: 66,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '89': {
                    age: 25,
                    draft: 201627,
                    experience: 0,
                    id: 89,
                    loyalty: 1,
                    name: '帕斯卡尔-西亚卡姆',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 1945000,
                    skillAverage: 78,
                    skillBlock: 70,
                    skillPass: 65,
                    skillPhysique: 86,
                    skillRebound: 77,
                    skillShotExterior: 65,
                    skillShotFree: 71,
                    skillShotInterior: 77,
                    skillSteal: 70,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '90': {
                    age: 31,
                    draft: 200919,
                    experience: 0,
                    id: 90,
                    loyalty: 3,
                    name: '杰夫-蒂格',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 9,
                    salary: 19000000,
                    skillAverage: 83,
                    skillBlock: 63,
                    skillPass: 89,
                    skillPhysique: 87,
                    skillRebound: 65,
                    skillShotExterior: 68,
                    skillShotFree: 75,
                    skillShotInterior: 77,
                    skillSteal: 76,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 2,
                    yearsLeague: 9,
                },
                '91': {
                    age: 29,
                    draft: 201130,
                    experience: 0,
                    id: 91,
                    loyalty: 1,
                    name: '吉米-巴特勒',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 10,
                    salary: 20145000,
                    skillAverage: 78,
                    skillBlock: 63,
                    skillPass: 67,
                    skillPhysique: 86,
                    skillRebound: 71,
                    skillShotExterior: 81,
                    skillShotFree: 70,
                    skillShotInterior: 83,
                    skillSteal: 61,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '92': {
                    age: 32,
                    draft: 200608,
                    experience: 0,
                    id: 92,
                    loyalty: 2,
                    name: '鲁迪-盖伊',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 10090000,
                    skillAverage: 78,
                    skillBlock: 68,
                    skillPass: 66,
                    skillPhysique: 85,
                    skillRebound: 79,
                    skillShotExterior: 67,
                    skillShotFree: 67,
                    skillShotInterior: 79,
                    skillSteal: 70,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 1,
                    yearsLeague: 12,
                },
                '93': {
                    age: 28,
                    draft: 201208,
                    experience: 0,
                    id: 93,
                    loyalty: 3,
                    name: '泰伦斯-罗斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 10500000,
                    skillAverage: 76,
                    skillBlock: 68,
                    skillPass: 69,
                    skillPhysique: 83,
                    skillRebound: 68,
                    skillShotExterior: 76,
                    skillShotFree: 65,
                    skillShotInterior: 74,
                    skillSteal: 73,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '94': {
                    age: 30,
                    draft: 201033,
                    experience: 0,
                    id: 94,
                    loyalty: 3,
                    name: '哈桑-怀特塞德',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 26260000,
                    skillAverage: 90,
                    skillBlock: 97,
                    skillPass: 59,
                    skillPhysique: 89,
                    skillRebound: 95,
                    skillShotExterior: 62,
                    skillShotFree: 79,
                    skillShotInterior: 80,
                    skillSteal: 62,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 2,
                    yearsLeague: 8,
                },
                '95': {
                    age: 26,
                    draft: 201636,
                    experience: 0,
                    id: 95,
                    loyalty: 4,
                    name: '马尔科姆-布罗格登',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 1540000,
                    skillAverage: 76,
                    skillBlock: 64,
                    skillPass: 73,
                    skillPhysique: 85,
                    skillRebound: 70,
                    skillShotExterior: 69,
                    skillShotFree: 67,
                    skillShotInterior: 77,
                    skillSteal: 69,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '96': {
                    age: 29,
                    draft: 201018,
                    experience: 0,
                    id: 96,
                    loyalty: 4,
                    name: '埃里克-布莱索',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 9,
                    salary: 15000000,
                    skillAverage: 81,
                    skillBlock: 68,
                    skillPass: 83,
                    skillPhysique: 86,
                    skillRebound: 70,
                    skillShotExterior: 71,
                    skillShotFree: 69,
                    skillShotInterior: 76,
                    skillSteal: 76,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '97': {
                    age: 31,
                    draft: 0,
                    experience: 0,
                    id: 97,
                    loyalty: 5,
                    name: '乔-英格尔斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 8,
                    salary: 11953333,
                    skillAverage: 81,
                    skillBlock: 65,
                    skillPass: 74,
                    skillPhysique: 88,
                    skillRebound: 72,
                    skillShotExterior: 79,
                    skillShotFree: 68,
                    skillShotInterior: 75,
                    skillSteal: 76,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 3,
                    yearsLeague: 4,
                },
                '98': {
                    age: 35,
                    draft: 200303,
                    experience: 0,
                    id: 98,
                    loyalty: 1,
                    name: '卡梅罗-安东尼',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 8,
                    salary: 25530000,
                    skillAverage: 77,
                    skillBlock: 71,
                    skillPass: 61,
                    skillPhysique: 85,
                    skillRebound: 75,
                    skillShotExterior: 76,
                    skillShotFree: 70,
                    skillShotInterior: 74,
                    skillSteal: 63,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 1,
                    yearsLeague: 15,
                },
                '99': {
                    age: 29,
                    draft: 201234,
                    experience: 0,
                    id: 99,
                    loyalty: 5,
                    name: '杰-克劳德',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 7565000,
                    skillAverage: 78,
                    skillBlock: 68,
                    skillPass: 64,
                    skillPhysique: 85,
                    skillRebound: 74,
                    skillShotExterior: 78,
                    skillShotFree: 73,
                    skillShotInterior: 75,
                    skillSteal: 66,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '100': {
                    age: 27,
                    draft: 201433,
                    experience: 0,
                    id: 100,
                    loyalty: 3,
                    name: '乔-哈里斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 8000000,
                    skillAverage: 79,
                    skillBlock: 63,
                    skillPass: 70,
                    skillPhysique: 84,
                    skillRebound: 69,
                    skillShotExterior: 75,
                    skillShotFree: 89,
                    skillShotInterior: 74,
                    skillSteal: 68,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '101': {
                    age: 34,
                    draft: 200647,
                    experience: 0,
                    id: 101,
                    loyalty: 3,
                    name: '保罗-米尔萨普',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 9,
                    salary: 30115000,
                    skillAverage: 82,
                    skillBlock: 78,
                    skillPass: 64,
                    skillPhysique: 85,
                    skillRebound: 80,
                    skillShotExterior: 68,
                    skillShotFree: 78,
                    skillShotInterior: 78,
                    skillSteal: 71,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 2,
                    yearsLeague: 12,
                },
                '102': {
                    age: 27,
                    draft: 201105,
                    experience: 0,
                    id: 102,
                    loyalty: 3,
                    name: '约纳斯-瓦兰丘纳斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 17080000,
                    skillAverage: 79,
                    skillBlock: 76,
                    skillPass: 60,
                    skillPhysique: 81,
                    skillRebound: 80,
                    skillShotExterior: 63,
                    skillShotFree: 75,
                    skillShotInterior: 78,
                    skillSteal: 62,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '103': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 103,
                    loyalty: 2,
                    name: '罗波特-考文顿',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 9,
                    salary: 11720000,
                    skillAverage: 83,
                    skillBlock: 73,
                    skillPass: 67,
                    skillPhysique: 93,
                    skillRebound: 77,
                    skillShotExterior: 79,
                    skillShotFree: 69,
                    skillShotInterior: 70,
                    skillSteal: 81,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 4,
                    yearsLeague: 5,
                },
                '104': {
                    age: 27,
                    draft: 201212,
                    experience: 0,
                    id: 104,
                    loyalty: 3,
                    name: '杰里米-兰姆',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 8,
                    salary: 7490000,
                    skillAverage: 77,
                    skillBlock: 66,
                    skillPass: 68,
                    skillPhysique: 83,
                    skillRebound: 71,
                    skillShotExterior: 69,
                    skillShotFree: 70,
                    skillShotInterior: 78,
                    skillSteal: 77,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '105': {
                    age: 26,
                    draft: 201423,
                    experience: 0,
                    id: 105,
                    loyalty: 4,
                    name: '罗德尼-胡德',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 3470000,
                    skillAverage: 75,
                    skillBlock: 64,
                    skillPass: 68,
                    skillPhysique: 83,
                    skillRebound: 68,
                    skillShotExterior: 66,
                    skillShotFree: 71,
                    skillShotInterior: 77,
                    skillSteal: 68,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '106': {
                    age: 20,
                    draft: 201808,
                    experience: 0,
                    id: 106,
                    loyalty: 4,
                    name: '科林-塞克斯顿',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 5042500,
                    skillAverage: 74,
                    skillBlock: 62,
                    skillPass: 72,
                    skillPhysique: 83,
                    skillRebound: 66,
                    skillShotExterior: 64,
                    skillShotFree: 70,
                    skillShotInterior: 78,
                    skillSteal: 69,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '107': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 107,
                    loyalty: 5,
                    name: '布林-福布斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 3005000,
                    skillAverage: 75,
                    skillBlock: 62,
                    skillPass: 70,
                    skillPhysique: 84,
                    skillRebound: 65,
                    skillShotExterior: 74,
                    skillShotFree: 66,
                    skillShotInterior: 73,
                    skillSteal: 72,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '108': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 108,
                    loyalty: 5,
                    name: '兰德尼-麦格鲁德',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 77,
                    skillBlock: 64,
                    skillPass: 74,
                    skillPhysique: 87,
                    skillRebound: 72,
                    skillShotExterior: 72,
                    skillShotFree: 68,
                    skillShotInterior: 73,
                    skillSteal: 72,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '109': {
                    age: 33,
                    draft: 200401,
                    experience: 0,
                    id: 109,
                    loyalty: 4,
                    name: '德怀特-霍华德',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 18920000,
                    skillAverage: 79,
                    skillBlock: 69,
                    skillPass: 58,
                    skillPhysique: 85,
                    skillRebound: 83,
                    skillShotExterior: 59,
                    skillShotFree: 78,
                    skillShotInterior: 78,
                    skillSteal: 66,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 14,
                },
                '110': {
                    age: 33,
                    draft: 200826,
                    experience: 0,
                    id: 110,
                    loyalty: 5,
                    name: '乔治-希尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 18500000,
                    skillAverage: 75,
                    skillBlock: 62,
                    skillPass: 74,
                    skillPhysique: 83,
                    skillRebound: 65,
                    skillShotExterior: 67,
                    skillShotFree: 66,
                    skillShotInterior: 75,
                    skillSteal: 75,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 2,
                    yearsLeague: 10,
                },
                '111': {
                    age: 31,
                    draft: 200810,
                    experience: 0,
                    id: 111,
                    loyalty: 2,
                    name: '布鲁克-洛佩斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 3380000,
                    skillAverage: 77,
                    skillBlock: 82,
                    skillPass: 61,
                    skillPhysique: 84,
                    skillRebound: 71,
                    skillShotExterior: 79,
                    skillShotFree: 68,
                    skillShotInterior: 68,
                    skillSteal: 61,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '112': {
                    age: 31,
                    draft: 201035,
                    experience: 0,
                    id: 112,
                    loyalty: 5,
                    name: '内曼加-别利卡',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 6826667,
                    skillAverage: 78,
                    skillBlock: 71,
                    skillPass: 66,
                    skillPhysique: 84,
                    skillRebound: 75,
                    skillShotExterior: 75,
                    skillShotFree: 68,
                    skillShotInterior: 75,
                    skillSteal: 73,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 3,
                    yearsLeague: 3,
                },
                '113': {
                    age: 33,
                    draft: 0,
                    experience: 0,
                    id: 113,
                    loyalty: 4,
                    name: '加内特-坦普尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 8000000,
                    skillAverage: 78,
                    skillBlock: 64,
                    skillPass: 66,
                    skillPhysique: 86,
                    skillRebound: 72,
                    skillShotExterior: 76,
                    skillShotFree: 75,
                    skillShotInterior: 78,
                    skillSteal: 70,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '114': {
                    age: 21,
                    draft: 201711,
                    experience: 0,
                    id: 114,
                    loyalty: 2,
                    name: '马利克-蒙克',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 4276667,
                    skillAverage: 76,
                    skillBlock: 65,
                    skillPass: 71,
                    skillPhysique: 81,
                    skillRebound: 66,
                    skillShotExterior: 76,
                    skillShotFree: 69,
                    skillShotInterior: 75,
                    skillSteal: 68,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '115': {
                    age: 20,
                    draft: 201902,
                    experience: 0,
                    id: 115,
                    loyalty: 4,
                    name: '马文-巴格利',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 9035000,
                    skillAverage: 79,
                    skillBlock: 76,
                    skillPass: 61,
                    skillPhysique: 82,
                    skillRebound: 76,
                    skillShotExterior: 68,
                    skillShotFree: 74,
                    skillShotInterior: 79,
                    skillSteal: 65,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '116': {
                    age: 22,
                    draft: 201603,
                    experience: 0,
                    id: 116,
                    loyalty: 1,
                    name: '杰伦-布朗',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 9,
                    salary: 5850000,
                    skillAverage: 76,
                    skillBlock: 67,
                    skillPass: 67,
                    skillPhysique: 85,
                    skillRebound: 71,
                    skillShotExterior: 72,
                    skillShotFree: 70,
                    skillShotInterior: 78,
                    skillSteal: 68,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '117': {
                    age: 23,
                    draft: 201515,
                    experience: 0,
                    id: 117,
                    loyalty: 4,
                    name: '凯利-奥伯尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 8,
                    salary: 3210000,
                    skillAverage: 76,
                    skillBlock: 69,
                    skillPass: 63,
                    skillPhysique: 83,
                    skillRebound: 72,
                    skillShotExterior: 71,
                    skillShotFree: 72,
                    skillShotInterior: 72,
                    skillSteal: 69,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '118': {
                    age: 26,
                    draft: 201427,
                    experience: 0,
                    id: 118,
                    loyalty: 2,
                    name: '博格丹-博格达诺维奇',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 8765000,
                    skillAverage: 74,
                    skillBlock: 62,
                    skillPass: 69,
                    skillPhysique: 79,
                    skillRebound: 67,
                    skillShotExterior: 75,
                    skillShotFree: 68,
                    skillShotInterior: 75,
                    skillSteal: 66,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '119': {
                    age: 33,
                    draft: 200703,
                    experience: 0,
                    id: 119,
                    loyalty: 3,
                    name: '艾尔-霍福德',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 29525000,
                    skillAverage: 82,
                    skillBlock: 81,
                    skillPass: 68,
                    skillPhysique: 87,
                    skillRebound: 78,
                    skillShotExterior: 72,
                    skillShotFree: 71,
                    skillShotInterior: 76,
                    skillSteal: 65,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 2,
                    yearsLeague: 11,
                },
                '120': {
                    age: 19,
                    draft: 201804,
                    experience: 0,
                    id: 120,
                    loyalty: 1,
                    name: '杰伦-杰克逊',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 7322500,
                    skillAverage: 81,
                    skillBlock: 81,
                    skillPass: 63,
                    skillPhysique: 84,
                    skillRebound: 75,
                    skillShotExterior: 68,
                    skillShotFree: 76,
                    skillShotInterior: 79,
                    skillSteal: 68,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '121': {
                    age: 25,
                    draft: 201410,
                    experience: 0,
                    id: 121,
                    loyalty: 5,
                    name: '埃尔弗里德-佩顿',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 3000000,
                    skillAverage: 77,
                    skillBlock: 63,
                    skillPass: 84,
                    skillPhysique: 81,
                    skillRebound: 73,
                    skillShotExterior: 63,
                    skillShotFree: 67,
                    skillShotInterior: 72,
                    skillSteal: 73,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '122': {
                    age: 20,
                    draft: 201807,
                    experience: 0,
                    id: 122,
                    loyalty: 5,
                    name: '温德尔-卡特',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 5502500,
                    skillAverage: 82,
                    skillBlock: 85,
                    skillPass: 63,
                    skillPhysique: 85,
                    skillRebound: 81,
                    skillShotExterior: 62,
                    skillShotFree: 73,
                    skillShotInterior: 77,
                    skillSteal: 63,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '123': {
                    age: 30,
                    draft: 201134,
                    experience: 0,
                    id: 123,
                    loyalty: 1,
                    name: '谢尔文-马克',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 6,
                    salary: 2030000,
                    skillAverage: 78,
                    skillBlock: 63,
                    skillPass: 76,
                    skillPhysique: 83,
                    skillRebound: 66,
                    skillShotExterior: 70,
                    skillShotFree: 70,
                    skillShotInterior: 76,
                    skillSteal: 75,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '124': {
                    age: 30,
                    draft: 0,
                    experience: 0,
                    id: 124,
                    loyalty: 1,
                    name: '贾斯汀-霍勒迪',
                    numsChampion: 1,
                    positionFirst: 1,
                    positionSecond: 3,
                    potential: 8,
                    salary: 4380000,
                    skillAverage: 79,
                    skillBlock: 66,
                    skillPass: 72,
                    skillPhysique: 89,
                    skillRebound: 68,
                    skillShotExterior: 79,
                    skillShotFree: 63,
                    skillShotInterior: 68,
                    skillSteal: 81,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '125': {
                    age: 24,
                    draft: 201730,
                    experience: 0,
                    id: 125,
                    loyalty: 3,
                    name: '约什-哈特',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 2360000,
                    skillAverage: 76,
                    skillBlock: 66,
                    skillPass: 67,
                    skillPhysique: 84,
                    skillRebound: 70,
                    skillShotExterior: 74,
                    skillShotFree: 68,
                    skillShotInterior: 69,
                    skillSteal: 79,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '126': {
                    age: 21,
                    draft: 201722,
                    experience: 0,
                    id: 126,
                    loyalty: 1,
                    name: '贾莱特-阿伦',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2773333,
                    skillAverage: 82,
                    skillBlock: 84,
                    skillPass: 62,
                    skillPhysique: 85,
                    skillRebound: 81,
                    skillShotExterior: 61,
                    skillShotFree: 75,
                    skillShotInterior: 78,
                    skillSteal: 64,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '127': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 127,
                    loyalty: 3,
                    name: '杰拉米-格兰特',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 9116667,
                    skillAverage: 77,
                    skillBlock: 73,
                    skillPass: 65,
                    skillPhysique: 86,
                    skillRebound: 73,
                    skillShotExterior: 67,
                    skillShotFree: 72,
                    skillShotInterior: 73,
                    skillSteal: 70,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 3,
                    yearsLeague: 4,
                },
                '128': {
                    age: 22,
                    draft: 0,
                    experience: 0,
                    id: 128,
                    loyalty: 5,
                    name: 'AllonzoTrier',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 200000,
                    skillAverage: 74,
                    skillBlock: 66,
                    skillPass: 69,
                    skillPhysique: 82,
                    skillRebound: 67,
                    skillShotExterior: 64,
                    skillShotFree: 71,
                    skillShotInterior: 74,
                    skillSteal: 72,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '129': {
                    age: 34,
                    draft: 200926,
                    experience: 0,
                    id: 129,
                    loyalty: 2,
                    name: '泰-吉布森',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 14000000,
                    skillAverage: 78,
                    skillBlock: 72,
                    skillPass: 63,
                    skillPhysique: 85,
                    skillRebound: 78,
                    skillShotExterior: 62,
                    skillShotFree: 71,
                    skillShotInterior: 76,
                    skillSteal: 70,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '130': {
                    age: 28,
                    draft: 201003,
                    experience: 0,
                    id: 130,
                    loyalty: 4,
                    name: '德里克-费弗斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 8,
                    salary: 16900000,
                    skillAverage: 79,
                    skillBlock: 78,
                    skillPass: 61,
                    skillPhysique: 83,
                    skillRebound: 78,
                    skillShotExterior: 65,
                    skillShotFree: 72,
                    skillShotInterior: 78,
                    skillSteal: 67,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 2,
                    yearsLeague: 8,
                },
                '131': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 131,
                    loyalty: 5,
                    name: '泰勒-约翰逊',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 19250000,
                    skillAverage: 75,
                    skillBlock: 68,
                    skillPass: 70,
                    skillPhysique: 83,
                    skillRebound: 68,
                    skillShotExterior: 70,
                    skillShotFree: 68,
                    skillShotInterior: 72,
                    skillSteal: 73,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '132': {
                    age: 23,
                    draft: 201511,
                    experience: 0,
                    id: 132,
                    loyalty: 1,
                    name: '迈尔斯-特纳',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 15082000,
                    skillAverage: 82,
                    skillBlock: 89,
                    skillPass: 60,
                    skillPhysique: 85,
                    skillRebound: 75,
                    skillShotExterior: 68,
                    skillShotFree: 74,
                    skillShotInterior: 79,
                    skillSteal: 61,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 5,
                    yearsLeague: 3,
                },
                '133': {
                    age: 23,
                    draft: 201512,
                    experience: 0,
                    id: 133,
                    loyalty: 4,
                    name: '特雷-莱尔斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 3360000,
                    skillAverage: 76,
                    skillBlock: 69,
                    skillPass: 64,
                    skillPhysique: 81,
                    skillRebound: 76,
                    skillShotExterior: 66,
                    skillShotFree: 76,
                    skillShotInterior: 75,
                    skillSteal: 66,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '134': {
                    age: 24,
                    draft: 201744,
                    experience: 0,
                    id: 134,
                    loyalty: 4,
                    name: '丹伊恩-多特森',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1500000,
                    skillAverage: 74,
                    skillBlock: 64,
                    skillPass: 67,
                    skillPhysique: 84,
                    skillRebound: 72,
                    skillShotExterior: 71,
                    skillShotFree: 64,
                    skillShotInterior: 73,
                    skillSteal: 71,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '135': {
                    age: 32,
                    draft: 200705,
                    experience: 0,
                    id: 135,
                    loyalty: 2,
                    name: '杰夫-格林',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 75,
                    skillBlock: 71,
                    skillPass: 64,
                    skillPhysique: 82,
                    skillRebound: 73,
                    skillShotExterior: 66,
                    skillShotFree: 70,
                    skillShotInterior: 72,
                    skillSteal: 67,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 11,
                },
                '136': {
                    age: 23,
                    draft: 0,
                    experience: 0,
                    id: 136,
                    loyalty: 1,
                    name: '安东尼奥-布莱克尼',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1470000,
                    skillAverage: 70,
                    skillBlock: 65,
                    skillPass: 65,
                    skillPhysique: 77,
                    skillRebound: 66,
                    skillShotExterior: 67,
                    skillShotFree: 67,
                    skillShotInterior: 73,
                    skillSteal: 66,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '137': {
                    age: 23,
                    draft: 201531,
                    experience: 0,
                    id: 137,
                    loyalty: 3,
                    name: '赛迪-奥斯曼',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2845000,
                    skillAverage: 76,
                    skillBlock: 66,
                    skillPass: 69,
                    skillPhysique: 85,
                    skillRebound: 73,
                    skillShotExterior: 70,
                    skillShotFree: 68,
                    skillShotInterior: 73,
                    skillSteal: 68,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '138': {
                    age: 37,
                    draft: 200128,
                    experience: 0,
                    id: 138,
                    loyalty: 3,
                    name: '托尼-帕克',
                    numsChampion: 4,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 10,
                    salary: 5000000,
                    skillAverage: 75,
                    skillBlock: 63,
                    skillPass: 78,
                    skillPhysique: 78,
                    skillRebound: 65,
                    skillShotExterior: 67,
                    skillShotFree: 69,
                    skillShotInterior: 78,
                    skillSteal: 67,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 2,
                    yearsLeague: 17,
                },
                '139': {
                    age: 28,
                    draft: 200905,
                    experience: 0,
                    id: 139,
                    loyalty: 5,
                    name: '里基-卢比奥',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 14980000,
                    skillAverage: 82,
                    skillBlock: 62,
                    skillPass: 86,
                    skillPhysique: 86,
                    skillRebound: 68,
                    skillShotExterior: 70,
                    skillShotFree: 69,
                    skillShotInterior: 74,
                    skillSteal: 81,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '140': {
                    age: 26,
                    draft: 201303,
                    experience: 0,
                    id: 140,
                    loyalty: 5,
                    name: '奥托-波特',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 9,
                    salary: 27250000,
                    skillAverage: 77,
                    skillBlock: 70,
                    skillPass: 66,
                    skillPhysique: 85,
                    skillRebound: 72,
                    skillShotExterior: 69,
                    skillShotFree: 65,
                    skillShotInterior: 72,
                    skillSteal: 75,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '141': {
                    age: 29,
                    draft: 201113,
                    experience: 0,
                    id: 141,
                    loyalty: 5,
                    name: '马基夫-莫里斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 8600000,
                    skillAverage: 75,
                    skillBlock: 72,
                    skillPass: 65,
                    skillPhysique: 83,
                    skillRebound: 73,
                    skillShotExterior: 69,
                    skillShotFree: 70,
                    skillShotInterior: 71,
                    skillSteal: 64,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '142': {
                    age: 31,
                    draft: 200835,
                    experience: 0,
                    id: 142,
                    loyalty: 1,
                    name: '德安德鲁-乔丹',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 22900000,
                    skillAverage: 84,
                    skillBlock: 77,
                    skillPass: 65,
                    skillPhysique: 89,
                    skillRebound: 92,
                    skillShotExterior: 59,
                    skillShotFree: 75,
                    skillShotInterior: 81,
                    skillSteal: 63,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '143': {
                    age: 24,
                    draft: 201522,
                    experience: 0,
                    id: 143,
                    loyalty: 3,
                    name: '鲍比-波蒂斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 8,
                    salary: 2490000,
                    skillAverage: 79,
                    skillBlock: 74,
                    skillPass: 65,
                    skillPhysique: 86,
                    skillRebound: 84,
                    skillShotExterior: 66,
                    skillShotFree: 70,
                    skillShotInterior: 75,
                    skillSteal: 64,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '144': {
                    age: 29,
                    draft: 200904,
                    experience: 0,
                    id: 144,
                    loyalty: 1,
                    name: '泰瑞克-埃文斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 1,
                    potential: 9,
                    salary: 12400000,
                    skillAverage: 76,
                    skillBlock: 68,
                    skillPass: 68,
                    skillPhysique: 80,
                    skillRebound: 68,
                    skillShotExterior: 71,
                    skillShotFree: 70,
                    skillShotInterior: 76,
                    skillSteal: 71,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '145': {
                    age: 26,
                    draft: 201305,
                    experience: 0,
                    id: 145,
                    loyalty: 1,
                    name: '艾利克斯-伦',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 4255000,
                    skillAverage: 76,
                    skillBlock: 76,
                    skillPass: 60,
                    skillPhysique: 81,
                    skillRebound: 76,
                    skillShotExterior: 63,
                    skillShotFree: 72,
                    skillShotInterior: 74,
                    skillSteal: 61,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 2,
                    yearsLeague: 5,
                },
                '146': {
                    age: 28,
                    draft: 201325,
                    experience: 0,
                    id: 146,
                    loyalty: 4,
                    name: '雷吉-巴洛克',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 7,
                    salary: 2500000,
                    skillAverage: 74,
                    skillBlock: 64,
                    skillPass: 69,
                    skillPhysique: 83,
                    skillRebound: 67,
                    skillShotExterior: 72,
                    skillShotFree: 68,
                    skillShotInterior: 75,
                    skillSteal: 68,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '147': {
                    age: 33,
                    draft: 200718,
                    experience: 0,
                    id: 147,
                    loyalty: 2,
                    name: '马科-贝里内利',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 6000000,
                    skillAverage: 73,
                    skillBlock: 64,
                    skillPass: 68,
                    skillPhysique: 80,
                    skillRebound: 66,
                    skillShotExterior: 70,
                    skillShotFree: 68,
                    skillShotInterior: 71,
                    skillSteal: 71,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 2,
                    yearsLeague: 11,
                },
                '148': {
                    age: 31,
                    draft: 200809,
                    experience: 0,
                    id: 148,
                    loyalty: 4,
                    name: 'DJ-奥古斯丁',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 7250000,
                    skillAverage: 76,
                    skillBlock: 61,
                    skillPass: 80,
                    skillPhysique: 83,
                    skillRebound: 65,
                    skillShotExterior: 70,
                    skillShotFree: 68,
                    skillShotInterior: 69,
                    skillSteal: 71,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 2,
                    yearsLeague: 10,
                },
                '149': {
                    age: 34,
                    draft: 200443,
                    experience: 0,
                    id: 149,
                    loyalty: 4,
                    name: '特雷沃-阿里扎',
                    numsChampion: 1,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 15000000,
                    skillAverage: 79,
                    skillBlock: 67,
                    skillPass: 71,
                    skillPhysique: 87,
                    skillRebound: 74,
                    skillShotExterior: 73,
                    skillShotFree: 69,
                    skillShotInterior: 76,
                    skillSteal: 69,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 14,
                },
                '150': {
                    age: 20,
                    draft: 201811,
                    experience: 0,
                    id: 150,
                    loyalty: 4,
                    name: '谢伊-吉尔杰斯-亚历山大',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 4242500,
                    skillAverage: 78,
                    skillBlock: 68,
                    skillPass: 74,
                    skillPhysique: 84,
                    skillRebound: 68,
                    skillShotExterior: 65,
                    skillShotFree: 78,
                    skillShotInterior: 78,
                    skillSteal: 74,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '151': {
                    age: 28,
                    draft: 201104,
                    experience: 0,
                    id: 151,
                    loyalty: 1,
                    name: '特里斯坦-汤普森',
                    numsChampion: 1,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 18005000,
                    skillAverage: 78,
                    skillBlock: 69,
                    skillPass: 63,
                    skillPhysique: 85,
                    skillRebound: 87,
                    skillShotExterior: 58,
                    skillShotFree: 70,
                    skillShotInterior: 77,
                    skillSteal: 64,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '152': {
                    age: 28,
                    draft: 201009,
                    experience: 0,
                    id: 152,
                    loyalty: 3,
                    name: '戈登-海沃德',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 32700000,
                    skillAverage: 77,
                    skillBlock: 65,
                    skillPass: 70,
                    skillPhysique: 83,
                    skillRebound: 74,
                    skillShotExterior: 69,
                    skillShotFree: 70,
                    skillShotInterior: 75,
                    skillSteal: 71,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 3,
                    yearsLeague: 8,
                },
                '153': {
                    age: 21,
                    draft: 201710,
                    experience: 0,
                    id: 153,
                    loyalty: 4,
                    name: '扎克-科林斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 4426667,
                    skillAverage: 75,
                    skillBlock: 76,
                    skillPass: 62,
                    skillPhysique: 80,
                    skillRebound: 72,
                    skillShotExterior: 64,
                    skillShotFree: 71,
                    skillShotInterior: 75,
                    skillSteal: 63,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '154': {
                    age: 30,
                    draft: 0,
                    experience: 0,
                    id: 154,
                    loyalty: 3,
                    name: '林书豪',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 13770000,
                    skillAverage: 74,
                    skillBlock: 62,
                    skillPass: 74,
                    skillPhysique: 78,
                    skillRebound: 65,
                    skillShotExterior: 65,
                    skillShotFree: 71,
                    skillShotInterior: 70,
                    skillSteal: 72,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '155': {
                    age: 31,
                    draft: 0,
                    experience: 0,
                    id: 155,
                    loyalty: 2,
                    name: '伊斯梅尔-史密斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 6000000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 76,
                    skillPhysique: 83,
                    skillRebound: 65,
                    skillShotExterior: 68,
                    skillShotFree: 62,
                    skillShotInterior: 78,
                    skillSteal: 73,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '156': {
                    age: 30,
                    draft: 200955,
                    experience: 0,
                    id: 156,
                    loyalty: 1,
                    name: '帕特里克-米尔斯',
                    numsChampion: 1,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 12430000,
                    skillAverage: 74,
                    skillBlock: 63,
                    skillPass: 72,
                    skillPhysique: 83,
                    skillRebound: 68,
                    skillShotExterior: 71,
                    skillShotFree: 64,
                    skillShotInterior: 69,
                    skillSteal: 71,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 3,
                    yearsLeague: 9,
                },
                '157': {
                    age: 30,
                    draft: 200825,
                    experience: 0,
                    id: 157,
                    loyalty: 1,
                    name: '尼古拉斯-巴通姆',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 25566667,
                    skillAverage: 79,
                    skillBlock: 69,
                    skillPass: 72,
                    skillPhysique: 87,
                    skillRebound: 75,
                    skillShotExterior: 72,
                    skillShotFree: 68,
                    skillShotInterior: 72,
                    skillSteal: 72,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 3,
                    yearsLeague: 10,
                },
                '158': {
                    age: 31,
                    draft: 200921,
                    experience: 0,
                    id: 158,
                    loyalty: 2,
                    name: '达伦-科里森',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 10000000,
                    skillAverage: 78,
                    skillBlock: 63,
                    skillPass: 77,
                    skillPhysique: 84,
                    skillRebound: 65,
                    skillShotExterior: 69,
                    skillShotFree: 69,
                    skillShotInterior: 76,
                    skillSteal: 78,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '159': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 159,
                    loyalty: 1,
                    name: '兰斯顿-加洛韦',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 7165000,
                    skillAverage: 73,
                    skillBlock: 63,
                    skillPass: 69,
                    skillPhysique: 81,
                    skillRebound: 67,
                    skillShotExterior: 72,
                    skillShotFree: 65,
                    skillShotInterior: 70,
                    skillSteal: 68,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '160': {
                    age: 26,
                    draft: 201309,
                    experience: 0,
                    id: 160,
                    loyalty: 2,
                    name: '特雷-伯克',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 1800000,
                    skillAverage: 73,
                    skillBlock: 61,
                    skillPass: 76,
                    skillPhysique: 79,
                    skillRebound: 65,
                    skillShotExterior: 65,
                    skillShotFree: 64,
                    skillShotInterior: 74,
                    skillSteal: 69,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '161': {
                    age: 35,
                    draft: 0,
                    experience: 0,
                    id: 161,
                    loyalty: 4,
                    name: '何塞-巴里亚',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 3710000,
                    skillAverage: 76,
                    skillBlock: 61,
                    skillPass: 82,
                    skillPhysique: 79,
                    skillRebound: 66,
                    skillShotExterior: 68,
                    skillShotFree: 67,
                    skillShotInterior: 75,
                    skillSteal: 71,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 12,
                },
                '162': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 162,
                    loyalty: 3,
                    name: '奎因-库克',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 6,
                    salary: 1540000,
                    skillAverage: 71,
                    skillBlock: 61,
                    skillPass: 71,
                    skillPhysique: 77,
                    skillRebound: 65,
                    skillShotExterior: 68,
                    skillShotFree: 63,
                    skillShotInterior: 70,
                    skillSteal: 68,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '163': {
                    age: 31,
                    draft: 200712,
                    experience: 0,
                    id: 163,
                    loyalty: 3,
                    name: '赛迪斯-杨',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 13760000,
                    skillAverage: 77,
                    skillBlock: 68,
                    skillPass: 63,
                    skillPhysique: 84,
                    skillRebound: 75,
                    skillShotExterior: 68,
                    skillShotFree: 70,
                    skillShotInterior: 75,
                    skillSteal: 73,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 1,
                    yearsLeague: 11,
                },
                '164': {
                    age: 30,
                    draft: 201002,
                    experience: 0,
                    id: 164,
                    loyalty: 2,
                    name: '埃文-特纳',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 1,
                    potential: 7,
                    salary: 18240000,
                    skillAverage: 77,
                    skillBlock: 67,
                    skillPass: 74,
                    skillPhysique: 83,
                    skillRebound: 73,
                    skillShotExterior: 62,
                    skillShotFree: 67,
                    skillShotInterior: 78,
                    skillSteal: 69,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 2,
                    yearsLeague: 8,
                },
                '165': {
                    age: 22,
                    draft: 201723,
                    experience: 0,
                    id: 165,
                    loyalty: 4,
                    name: 'OG-阿奴诺比',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2700000,
                    skillAverage: 73,
                    skillBlock: 66,
                    skillPass: 63,
                    skillPhysique: 81,
                    skillRebound: 69,
                    skillShotExterior: 69,
                    skillShotFree: 65,
                    skillShotInterior: 70,
                    skillSteal: 70,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '166': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 166,
                    loyalty: 1,
                    name: '弗雷德-范弗里特',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 8825000,
                    skillAverage: 76,
                    skillBlock: 62,
                    skillPass: 79,
                    skillPhysique: 81,
                    skillRebound: 66,
                    skillShotExterior: 69,
                    skillShotFree: 65,
                    skillShotInterior: 71,
                    skillSteal: 72,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '167': {
                    age: 31,
                    draft: 200928,
                    experience: 0,
                    id: 167,
                    loyalty: 1,
                    name: '韦恩-艾灵顿',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 6270000,
                    skillAverage: 73,
                    skillBlock: 62,
                    skillPass: 67,
                    skillPhysique: 80,
                    skillRebound: 67,
                    skillShotExterior: 76,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 73,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '168': {
                    age: 23,
                    draft: 201510,
                    experience: 0,
                    id: 168,
                    loyalty: 4,
                    name: '贾斯蒂斯-温斯洛',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 7,
                    salary: 10612500,
                    skillAverage: 78,
                    skillBlock: 67,
                    skillPass: 73,
                    skillPhysique: 85,
                    skillRebound: 73,
                    skillShotExterior: 65,
                    skillShotFree: 70,
                    skillShotInterior: 74,
                    skillSteal: 72,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 4,
                    yearsLeague: 3,
                },
                '169': {
                    age: 28,
                    draft: 201334,
                    experience: 0,
                    id: 169,
                    loyalty: 4,
                    name: '以赛亚-坎南',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 1510000,
                    skillAverage: 75,
                    skillBlock: 61,
                    skillPass: 75,
                    skillPhysique: 81,
                    skillRebound: 67,
                    skillShotExterior: 69,
                    skillShotFree: 65,
                    skillShotInterior: 69,
                    skillSteal: 73,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '170': {
                    age: 24,
                    draft: 201523,
                    experience: 0,
                    id: 170,
                    loyalty: 2,
                    name: '朗戴-霍利斯-杰弗森',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 2470000,
                    skillAverage: 76,
                    skillBlock: 70,
                    skillPass: 66,
                    skillPhysique: 81,
                    skillRebound: 74,
                    skillShotExterior: 60,
                    skillShotFree: 72,
                    skillShotInterior: 78,
                    skillSteal: 69,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '171': {
                    age: 19,
                    draft: 201809,
                    experience: 0,
                    id: 171,
                    loyalty: 4,
                    name: '凯文-诺克斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 4640000,
                    skillAverage: 72,
                    skillBlock: 66,
                    skillPass: 62,
                    skillPhysique: 78,
                    skillRebound: 67,
                    skillShotExterior: 68,
                    skillShotFree: 70,
                    skillShotInterior: 71,
                    skillSteal: 66,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '172': {
                    age: 26,
                    draft: 201304,
                    experience: 0,
                    id: 172,
                    loyalty: 5,
                    name: '科迪-泽勒',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 14473333,
                    skillAverage: 76,
                    skillBlock: 72,
                    skillPass: 64,
                    skillPhysique: 81,
                    skillRebound: 75,
                    skillShotExterior: 65,
                    skillShotFree: 70,
                    skillShotInterior: 75,
                    skillSteal: 65,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '173': {
                    age: 32,
                    draft: 200946,
                    experience: 0,
                    id: 173,
                    loyalty: 4,
                    name: '丹尼-格林',
                    numsChampion: 1,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 8,
                    salary: 10000000,
                    skillAverage: 75,
                    skillBlock: 70,
                    skillPass: 67,
                    skillPhysique: 84,
                    skillRebound: 70,
                    skillShotExterior: 74,
                    skillShotFree: 63,
                    skillShotInterior: 66,
                    skillSteal: 75,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '174': {
                    age: 24,
                    draft: 201505,
                    experience: 0,
                    id: 174,
                    loyalty: 3,
                    name: '马里奥-赫佐尼亚',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 7,
                    salary: 6500000,
                    skillAverage: 72,
                    skillBlock: 64,
                    skillPass: 67,
                    skillPhysique: 79,
                    skillRebound: 70,
                    skillShotExterior: 66,
                    skillShotFree: 66,
                    skillShotInterior: 73,
                    skillSteal: 69,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '175': {
                    age: 28,
                    draft: 201008,
                    experience: 0,
                    id: 175,
                    loyalty: 2,
                    name: '艾尔-法鲁克-阿米奴',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 6960000,
                    skillAverage: 76,
                    skillBlock: 69,
                    skillPass: 62,
                    skillPhysique: 85,
                    skillRebound: 80,
                    skillShotExterior: 68,
                    skillShotFree: 68,
                    skillShotInterior: 68,
                    skillSteal: 70,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '176': {
                    age: 28,
                    draft: 201313,
                    experience: 0,
                    id: 176,
                    loyalty: 3,
                    name: '凯利-奥利尼克',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 12003333,
                    skillAverage: 73,
                    skillBlock: 68,
                    skillPass: 66,
                    skillPhysique: 79,
                    skillRebound: 71,
                    skillShotExterior: 68,
                    skillShotFree: 72,
                    skillShotInterior: 67,
                    skillSteal: 64,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '177': {
                    age: 28,
                    draft: 201445,
                    experience: 0,
                    id: 177,
                    loyalty: 2,
                    name: '德怀特-鲍威尔',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 9945000,
                    skillAverage: 73,
                    skillBlock: 70,
                    skillPass: 62,
                    skillPhysique: 77,
                    skillRebound: 71,
                    skillShotExterior: 69,
                    skillShotFree: 73,
                    skillShotInterior: 70,
                    skillSteal: 67,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '178': {
                    age: 25,
                    draft: 201605,
                    experience: 0,
                    id: 178,
                    loyalty: 4,
                    name: '克里斯-邓恩',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 9,
                    salary: 4785000,
                    skillAverage: 76,
                    skillBlock: 61,
                    skillPass: 86,
                    skillPhysique: 84,
                    skillRebound: 69,
                    skillShotExterior: 68,
                    skillShotFree: 61,
                    skillShotInterior: 76,
                    skillSteal: 65,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '179': {
                    age: 28,
                    draft: 201112,
                    experience: 0,
                    id: 179,
                    loyalty: 5,
                    name: '亚历克-伯克斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 11540000,
                    skillAverage: 70,
                    skillBlock: 65,
                    skillPass: 67,
                    skillPhysique: 76,
                    skillRebound: 65,
                    skillShotExterior: 65,
                    skillShotFree: 70,
                    skillShotInterior: 69,
                    skillSteal: 66,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '180': {
                    age: 25,
                    draft: 201516,
                    experience: 0,
                    id: 180,
                    loyalty: 5,
                    name: '特里-罗齐尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 3050000,
                    skillAverage: 74,
                    skillBlock: 65,
                    skillPass: 71,
                    skillPhysique: 81,
                    skillRebound: 70,
                    skillShotExterior: 68,
                    skillShotFree: 65,
                    skillShotInterior: 73,
                    skillSteal: 71,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '181': {
                    age: 26,
                    draft: 201412,
                    experience: 0,
                    id: 181,
                    loyalty: 2,
                    name: '达里奥-萨里奇',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 9,
                    salary: 3005000,
                    skillAverage: 74,
                    skillBlock: 63,
                    skillPass: 64,
                    skillPhysique: 80,
                    skillRebound: 69,
                    skillShotExterior: 64,
                    skillShotFree: 69,
                    skillShotInterior: 70,
                    skillSteal: 81,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '182': {
                    age: 21,
                    draft: 201701,
                    experience: 0,
                    id: 182,
                    loyalty: 5,
                    name: '马克尔-富尔茨',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 10126667,
                    skillAverage: 74,
                    skillBlock: 65,
                    skillPass: 73,
                    skillPhysique: 82,
                    skillRebound: 69,
                    skillShotExterior: 60,
                    skillShotFree: 67,
                    skillShotInterior: 75,
                    skillSteal: 74,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '183': {
                    age: 29,
                    draft: 201117,
                    experience: 0,
                    id: 183,
                    loyalty: 4,
                    name: '伊曼-香珀特',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 11010000,
                    skillAverage: 76,
                    skillBlock: 65,
                    skillPass: 69,
                    skillPhysique: 82,
                    skillRebound: 68,
                    skillShotExterior: 77,
                    skillShotFree: 65,
                    skillShotInterior: 70,
                    skillSteal: 75,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '184': {
                    age: 21,
                    draft: 201702,
                    experience: 0,
                    id: 184,
                    loyalty: 3,
                    name: '朗佐-鲍尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 5,
                    potential: 9,
                    salary: 9060000,
                    skillAverage: 77,
                    skillBlock: 62,
                    skillPass: 79,
                    skillPhysique: 83,
                    skillRebound: 71,
                    skillShotExterior: 70,
                    skillShotFree: 63,
                    skillShotInterior: 68,
                    skillSteal: 77,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '185': {
                    age: 23,
                    draft: 201751,
                    experience: 0,
                    id: 185,
                    loyalty: 1,
                    name: '蒙特-莫里斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 1533333,
                    skillAverage: 75,
                    skillBlock: 63,
                    skillPass: 75,
                    skillPhysique: 81,
                    skillRebound: 69,
                    skillShotExterior: 64,
                    skillShotFree: 69,
                    skillShotInterior: 74,
                    skillSteal: 72,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 3,
                    yearsLeague: 2,
                },
                '186': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 186,
                    loyalty: 2,
                    name: '多里安-芬尼-史密斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1540000,
                    skillAverage: 73,
                    skillBlock: 69,
                    skillPass: 63,
                    skillPhysique: 82,
                    skillRebound: 71,
                    skillShotExterior: 67,
                    skillShotFree: 67,
                    skillShotInterior: 67,
                    skillSteal: 70,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '187': {
                    age: 28,
                    draft: 201040,
                    experience: 0,
                    id: 187,
                    loyalty: 5,
                    name: '兰斯-史蒂芬森',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 4450000,
                    skillAverage: 72,
                    skillBlock: 62,
                    skillPass: 71,
                    skillPhysique: 77,
                    skillRebound: 68,
                    skillShotExterior: 66,
                    skillShotFree: 63,
                    skillShotInterior: 70,
                    skillSteal: 74,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '188': {
                    age: 25,
                    draft: 201202,
                    experience: 0,
                    id: 188,
                    loyalty: 5,
                    name: '迈克尔-吉尔克里斯特',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 13000000,
                    skillAverage: 75,
                    skillBlock: 76,
                    skillPass: 65,
                    skillPhysique: 80,
                    skillRebound: 75,
                    skillShotExterior: 65,
                    skillShotFree: 70,
                    skillShotInterior: 73,
                    skillSteal: 63,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '189': {
                    age: 20,
                    draft: 201820,
                    experience: 0,
                    id: 189,
                    loyalty: 4,
                    name: 'JoshOkogie',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 5,
                    salary: 2857500,
                    skillAverage: 73,
                    skillBlock: 66,
                    skillPass: 67,
                    skillPhysique: 82,
                    skillRebound: 70,
                    skillShotExterior: 66,
                    skillShotFree: 67,
                    skillShotInterior: 71,
                    skillSteal: 74,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '190': {
                    age: 33,
                    draft: 200621,
                    experience: 0,
                    id: 190,
                    loyalty: 2,
                    name: '拉简-朗多',
                    numsChampion: 1,
                    positionFirst: 1,
                    positionSecond: 5,
                    potential: 7,
                    salary: 9000000,
                    skillAverage: 80,
                    skillBlock: 61,
                    skillPass: 85,
                    skillPhysique: 83,
                    skillRebound: 70,
                    skillShotExterior: 75,
                    skillShotFree: 63,
                    skillShotInterior: 75,
                    skillSteal: 76,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 1,
                    yearsLeague: 12,
                },
                '191': {
                    age: 32,
                    draft: 200927,
                    experience: 0,
                    id: 191,
                    loyalty: 4,
                    name: '德马雷-卡罗尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 15400000,
                    skillAverage: 73,
                    skillBlock: 66,
                    skillPass: 64,
                    skillPhysique: 79,
                    skillRebound: 72,
                    skillShotExterior: 67,
                    skillShotFree: 75,
                    skillShotInterior: 70,
                    skillSteal: 61,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '192': {
                    age: 23,
                    draft: 201508,
                    experience: 0,
                    id: 192,
                    loyalty: 2,
                    name: '斯坦利-约翰逊',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 3940000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 66,
                    skillPhysique: 82,
                    skillRebound: 72,
                    skillShotExterior: 70,
                    skillShotFree: 65,
                    skillShotInterior: 72,
                    skillSteal: 71,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '193': {
                    age: 29,
                    draft: 201350,
                    experience: 0,
                    id: 193,
                    loyalty: 4,
                    name: '詹姆斯-恩尼斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 1735000,
                    skillAverage: 73,
                    skillBlock: 67,
                    skillPass: 63,
                    skillPhysique: 81,
                    skillRebound: 68,
                    skillShotExterior: 69,
                    skillShotFree: 67,
                    skillShotInterior: 67,
                    skillSteal: 70,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '194': {
                    age: 34,
                    draft: 200635,
                    experience: 0,
                    id: 194,
                    loyalty: 1,
                    name: 'PJ-塔克',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 8096667,
                    skillAverage: 76,
                    skillBlock: 68,
                    skillPass: 65,
                    skillPhysique: 88,
                    skillRebound: 74,
                    skillShotExterior: 72,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 74,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 3,
                    yearsLeague: 12,
                },
                '195': {
                    age: 28,
                    draft: 201424,
                    experience: 0,
                    id: 195,
                    loyalty: 2,
                    name: '沙巴兹-内皮尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 1895000,
                    skillAverage: 72,
                    skillBlock: 62,
                    skillPass: 71,
                    skillPhysique: 76,
                    skillRebound: 63,
                    skillShotExterior: 66,
                    skillShotFree: 68,
                    skillShotInterior: 71,
                    skillSteal: 72,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '196': {
                    age: 29,
                    draft: 0,
                    experience: 0,
                    id: 196,
                    loyalty: 1,
                    name: '德维恩-戴德蒙',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 7200000,
                    skillAverage: 76,
                    skillBlock: 81,
                    skillPass: 58,
                    skillPhysique: 80,
                    skillRebound: 77,
                    skillShotExterior: 62,
                    skillShotFree: 69,
                    skillShotInterior: 71,
                    skillSteal: 59,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '197': {
                    age: 32,
                    draft: 200536,
                    experience: 0,
                    id: 197,
                    loyalty: 1,
                    name: '艾森-伊利亚索瓦',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 7000000,
                    skillAverage: 73,
                    skillBlock: 66,
                    skillPass: 63,
                    skillPhysique: 81,
                    skillRebound: 77,
                    skillShotExterior: 65,
                    skillShotFree: 68,
                    skillShotInterior: 69,
                    skillSteal: 65,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 3,
                    yearsLeague: 12,
                },
                '198': {
                    age: 24,
                    draft: 201514,
                    experience: 0,
                    id: 198,
                    loyalty: 2,
                    name: '卡梅隆-佩恩',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 3260000,
                    skillAverage: 73,
                    skillBlock: 63,
                    skillPass: 75,
                    skillPhysique: 80,
                    skillRebound: 65,
                    skillShotExterior: 65,
                    skillShotFree: 65,
                    skillShotInterior: 70,
                    skillSteal: 73,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '199': {
                    age: 24,
                    draft: 201729,
                    experience: 0,
                    id: 199,
                    loyalty: 3,
                    name: '德里克-怀特',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 6,
                    salary: 2380000,
                    skillAverage: 74,
                    skillBlock: 61,
                    skillPass: 77,
                    skillPhysique: 81,
                    skillRebound: 65,
                    skillShotExterior: 63,
                    skillShotFree: 68,
                    skillShotInterior: 71,
                    skillSteal: 73,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '200': {
                    age: 25,
                    draft: 201621,
                    experience: 0,
                    id: 200,
                    loyalty: 4,
                    name: '德安德烈-本布里',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2115000,
                    skillAverage: 76,
                    skillBlock: 70,
                    skillPass: 67,
                    skillPhysique: 82,
                    skillRebound: 72,
                    skillShotExterior: 64,
                    skillShotFree: 69,
                    skillShotInterior: 70,
                    skillSteal: 74,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '201': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 201,
                    loyalty: 2,
                    name: '沙奎尔-哈里森',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 50000,
                    skillAverage: 74,
                    skillBlock: 61,
                    skillPass: 70,
                    skillPhysique: 77,
                    skillRebound: 68,
                    skillShotExterior: 62,
                    skillShotFree: 67,
                    skillShotInterior: 70,
                    skillSteal: 85,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '202': {
                    age: 30,
                    draft: 0,
                    experience: 0,
                    id: 202,
                    loyalty: 5,
                    name: '博班-马扬诺维奇',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 7000000,
                    skillAverage: 74,
                    skillBlock: 75,
                    skillPass: 59,
                    skillPhysique: 75,
                    skillRebound: 76,
                    skillShotExterior: 58,
                    skillShotFree: 74,
                    skillShotInterior: 75,
                    skillSteal: 60,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '203': {
                    age: 22,
                    draft: 201615,
                    experience: 0,
                    id: 203,
                    loyalty: 5,
                    name: '胡安-埃尔南戈麦斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 2745000,
                    skillAverage: 72,
                    skillBlock: 68,
                    skillPass: 61,
                    skillPhysique: 80,
                    skillRebound: 73,
                    skillShotExterior: 67,
                    skillShotFree: 67,
                    skillShotInterior: 66,
                    skillSteal: 64,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '204': {
                    age: 28,
                    draft: 201344,
                    experience: 0,
                    id: 204,
                    loyalty: 3,
                    name: '马克-穆斯卡拉',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 5000000,
                    skillAverage: 72,
                    skillBlock: 68,
                    skillPass: 63,
                    skillPhysique: 79,
                    skillRebound: 73,
                    skillShotExterior: 69,
                    skillShotFree: 70,
                    skillShotInterior: 65,
                    skillSteal: 60,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '205': {
                    age: 30,
                    draft: 201125,
                    experience: 0,
                    id: 205,
                    loyalty: 3,
                    name: '马尚-布鲁克斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 5,
                    salary: 1660000,
                    skillAverage: 71,
                    skillBlock: 64,
                    skillPass: 66,
                    skillPhysique: 75,
                    skillRebound: 66,
                    skillShotExterior: 69,
                    skillShotFree: 70,
                    skillShotInterior: 70,
                    skillSteal: 66,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '206': {
                    age: 26,
                    draft: 201541,
                    experience: 0,
                    id: 206,
                    loyalty: 1,
                    name: '帕特-康诺顿',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 7,
                    salary: 1680000,
                    skillAverage: 71,
                    skillBlock: 69,
                    skillPass: 68,
                    skillPhysique: 77,
                    skillRebound: 71,
                    skillShotExterior: 66,
                    skillShotFree: 65,
                    skillShotInterior: 67,
                    skillSteal: 66,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 2,
                    yearsLeague: 3,
                },
                '207': {
                    age: 21,
                    draft: 201812,
                    experience: 0,
                    id: 207,
                    loyalty: 1,
                    name: '迈尔斯-布里奇斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 4080000,
                    skillAverage: 72,
                    skillBlock: 68,
                    skillPass: 64,
                    skillPhysique: 79,
                    skillRebound: 71,
                    skillShotExterior: 64,
                    skillShotFree: 65,
                    skillShotInterior: 69,
                    skillSteal: 66,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '208': {
                    age: 33,
                    draft: 200502,
                    experience: 0,
                    id: 208,
                    loyalty: 5,
                    name: '马文-威廉姆斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 14550000,
                    skillAverage: 74,
                    skillBlock: 74,
                    skillPass: 62,
                    skillPhysique: 81,
                    skillRebound: 73,
                    skillShotExterior: 69,
                    skillShotFree: 66,
                    skillShotInterior: 68,
                    skillSteal: 67,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 2,
                    yearsLeague: 13,
                },
                '209': {
                    age: 23,
                    draft: 201405,
                    experience: 0,
                    id: 209,
                    loyalty: 5,
                    name: '丹特-埃萨姆',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 9600000,
                    skillAverage: 70,
                    skillBlock: 64,
                    skillPass: 69,
                    skillPhysique: 76,
                    skillRebound: 65,
                    skillShotExterior: 63,
                    skillShotFree: 70,
                    skillShotInterior: 69,
                    skillSteal: 65,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 3,
                    yearsLeague: 2,
                },
                '210': {
                    age: 21,
                    draft: 0,
                    experience: 0,
                    id: 210,
                    loyalty: 1,
                    name: 'MoBamba',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 6027500,
                    skillAverage: 73,
                    skillBlock: 76,
                    skillPass: 60,
                    skillPhysique: 77,
                    skillRebound: 75,
                    skillShotExterior: 61,
                    skillShotFree: 67,
                    skillShotInterior: 71,
                    skillSteal: 58,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '211': {
                    age: 25,
                    draft: 201535,
                    experience: 0,
                    id: 211,
                    loyalty: 2,
                    name: '吉列尔莫-埃尔南戈麦斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1620000,
                    skillAverage: 72,
                    skillBlock: 71,
                    skillPass: 59,
                    skillPhysique: 76,
                    skillRebound: 75,
                    skillShotExterior: 61,
                    skillShotFree: 72,
                    skillShotInterior: 68,
                    skillSteal: 62,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '212': {
                    age: 29,
                    draft: 0,
                    experience: 0,
                    id: 212,
                    loyalty: 4,
                    name: '杰迈克尔-格林',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 7,
                    salary: 7870000,
                    skillAverage: 75,
                    skillBlock: 64,
                    skillPass: 65,
                    skillPhysique: 80,
                    skillRebound: 76,
                    skillShotExterior: 61,
                    skillShotFree: 70,
                    skillShotInterior: 75,
                    skillSteal: 76,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '213': {
                    age: 29,
                    draft: 0,
                    experience: 0,
                    id: 213,
                    loyalty: 2,
                    name: '乔纳森-西蒙斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 1,
                    potential: 7,
                    salary: 5850000,
                    skillAverage: 73,
                    skillBlock: 69,
                    skillPass: 68,
                    skillPhysique: 80,
                    skillRebound: 68,
                    skillShotExterior: 64,
                    skillShotFree: 70,
                    skillShotInterior: 70,
                    skillSteal: 65,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 2,
                    yearsLeague: 3,
                },
                '214': {
                    age: 23,
                    draft: 201409,
                    experience: 0,
                    id: 214,
                    loyalty: 5,
                    name: '诺阿-冯莱',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 1620000,
                    skillAverage: 75,
                    skillBlock: 72,
                    skillPass: 64,
                    skillPhysique: 81,
                    skillRebound: 80,
                    skillShotExterior: 60,
                    skillShotFree: 72,
                    skillShotInterior: 69,
                    skillSteal: 65,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '215': {
                    age: 26,
                    draft: 201527,
                    experience: 0,
                    id: 215,
                    loyalty: 1,
                    name: '拉里-南斯Jr.',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 9414000,
                    skillAverage: 76,
                    skillBlock: 71,
                    skillPass: 69,
                    skillPhysique: 82,
                    skillRebound: 76,
                    skillShotExterior: 59,
                    skillShotFree: 69,
                    skillShotInterior: 72,
                    skillSteal: 74,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 5,
                    yearsLeague: 5,
                },
                '216': {
                    age: 22,
                    draft: 201826,
                    experience: 0,
                    id: 216,
                    loyalty: 2,
                    name: '兰德里-沙梅特',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 4,
                    salary: 2390000,
                    skillAverage: 71,
                    skillBlock: 63,
                    skillPass: 68,
                    skillPhysique: 78,
                    skillRebound: 63,
                    skillShotExterior: 70,
                    skillShotFree: 64,
                    skillShotInterior: 65,
                    skillSteal: 71,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '217': {
                    age: 23,
                    draft: 201507,
                    experience: 0,
                    id: 217,
                    loyalty: 3,
                    name: '伊曼纽尔-穆迪埃',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 4290000,
                    skillAverage: 73,
                    skillBlock: 66,
                    skillPass: 72,
                    skillPhysique: 79,
                    skillRebound: 67,
                    skillShotExterior: 62,
                    skillShotFree: 65,
                    skillShotInterior: 70,
                    skillSteal: 75,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '218': {
                    age: 26,
                    draft: 201210,
                    experience: 0,
                    id: 218,
                    loyalty: 1,
                    name: '奥斯汀-里弗斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 12650000,
                    skillAverage: 72,
                    skillBlock: 65,
                    skillPass: 71,
                    skillPhysique: 80,
                    skillRebound: 65,
                    skillShotExterior: 66,
                    skillShotFree: 65,
                    skillShotInterior: 67,
                    skillSteal: 71,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '219': {
                    age: 25,
                    draft: 201408,
                    experience: 0,
                    id: 219,
                    loyalty: 2,
                    name: '尼克-施陶斯卡斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1620000,
                    skillAverage: 70,
                    skillBlock: 63,
                    skillPass: 69,
                    skillPhysique: 77,
                    skillRebound: 67,
                    skillShotExterior: 67,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 67,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '220': {
                    age: 42,
                    draft: 199805,
                    experience: 0,
                    id: 220,
                    loyalty: 4,
                    name: '文斯-卡特',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 0,
                    potential: 10,
                    salary: 2390000,
                    skillAverage: 71,
                    skillBlock: 67,
                    skillPass: 64,
                    skillPhysique: 77,
                    skillRebound: 67,
                    skillShotExterior: 68,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 67,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 1,
                    yearsLeague: 20,
                },
                '221': {
                    age: 24,
                    draft: 0,
                    experience: 0,
                    id: 221,
                    loyalty: 4,
                    name: '瑞安-阿西迪亚科诺',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 6,
                    salary: 1350000,
                    skillAverage: 74,
                    skillBlock: 62,
                    skillPass: 78,
                    skillPhysique: 82,
                    skillRebound: 66,
                    skillShotExterior: 67,
                    skillShotFree: 63,
                    skillShotInterior: 65,
                    skillSteal: 73,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '222': {
                    age: 23,
                    draft: 0,
                    experience: 0,
                    id: 222,
                    loyalty: 1,
                    name: '特洛伊-威廉姆斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 120000,
                    skillAverage: 70,
                    skillBlock: 66,
                    skillPass: 63,
                    skillPhysique: 77,
                    skillRebound: 68,
                    skillShotExterior: 64,
                    skillShotFree: 66,
                    skillShotInterior: 69,
                    skillSteal: 64,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 5,
                    yearsLeague: 2,
                },
                '223': {
                    age: 33,
                    draft: 200418,
                    experience: 0,
                    id: 223,
                    loyalty: 1,
                    name: 'J.R.史密斯',
                    numsChampion: 1,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 15200000,
                    skillAverage: 72,
                    skillBlock: 65,
                    skillPass: 69,
                    skillPhysique: 79,
                    skillRebound: 66,
                    skillShotExterior: 67,
                    skillShotFree: 65,
                    skillShotInterior: 68,
                    skillSteal: 74,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 2,
                    yearsLeague: 14,
                },
                '224': {
                    age: 22,
                    draft: 201704,
                    experience: 0,
                    id: 224,
                    loyalty: 1,
                    name: '约什-杰克逊',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 7,
                    salary: 7343333,
                    skillAverage: 70,
                    skillBlock: 68,
                    skillPass: 68,
                    skillPhysique: 77,
                    skillRebound: 66,
                    skillShotExterior: 63,
                    skillShotFree: 65,
                    skillShotInterior: 70,
                    skillSteal: 67,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '225': {
                    age: 22,
                    draft: 201810,
                    experience: 0,
                    id: 225,
                    loyalty: 1,
                    name: '米卡尔-布里奇斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 7,
                    salary: 4407500,
                    skillAverage: 71,
                    skillBlock: 66,
                    skillPass: 64,
                    skillPhysique: 78,
                    skillRebound: 66,
                    skillShotExterior: 65,
                    skillShotFree: 67,
                    skillShotInterior: 67,
                    skillSteal: 72,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '226': {
                    age: 31,
                    draft: 200942,
                    experience: 0,
                    id: 226,
                    loyalty: 3,
                    name: '帕特里克-贝弗利',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 5030000,
                    skillAverage: 77,
                    skillBlock: 64,
                    skillPass: 78,
                    skillPhysique: 83,
                    skillRebound: 70,
                    skillShotExterior: 71,
                    skillShotFree: 64,
                    skillShotInterior: 70,
                    skillSteal: 72,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '227': {
                    age: 28,
                    draft: 201019,
                    experience: 0,
                    id: 227,
                    loyalty: 1,
                    name: '艾弗里-布拉德利',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 8,
                    salary: 12480000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 68,
                    skillPhysique: 82,
                    skillRebound: 66,
                    skillShotExterior: 79,
                    skillShotFree: 62,
                    skillShotInterior: 75,
                    skillSteal: 70,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 2,
                    yearsLeague: 8,
                },
                '228': {
                    age: 21,
                    draft: 201830,
                    experience: 0,
                    id: 228,
                    loyalty: 5,
                    name: '奥马里-斯佩尔曼',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 4,
                    salary: 2275000,
                    skillAverage: 73,
                    skillBlock: 70,
                    skillPass: 63,
                    skillPhysique: 80,
                    skillRebound: 75,
                    skillShotExterior: 65,
                    skillShotFree: 67,
                    skillShotInterior: 68,
                    skillSteal: 65,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '229': {
                    age: 20,
                    draft: 201708,
                    experience: 0,
                    id: 229,
                    loyalty: 2,
                    name: '弗兰克-尼利基纳',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 5066667,
                    skillAverage: 74,
                    skillBlock: 67,
                    skillPass: 73,
                    skillPhysique: 82,
                    skillRebound: 66,
                    skillShotExterior: 67,
                    skillShotFree: 64,
                    skillShotInterior: 69,
                    skillSteal: 74,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '230': {
                    age: 21,
                    draft: 201618,
                    experience: 0,
                    id: 230,
                    loyalty: 3,
                    name: '亨利-埃伦森',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 2360000,
                    skillAverage: 67,
                    skillBlock: 64,
                    skillPass: 59,
                    skillPhysique: 71,
                    skillRebound: 70,
                    skillShotExterior: 63,
                    skillShotFree: 70,
                    skillShotInterior: 67,
                    skillSteal: 59,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '231': {
                    age: 22,
                    draft: 201714,
                    experience: 0,
                    id: 231,
                    loyalty: 4,
                    name: '埃德里斯-阿德巴约',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 3843333,
                    skillAverage: 72,
                    skillBlock: 70,
                    skillPass: 62,
                    skillPhysique: 78,
                    skillRebound: 75,
                    skillShotExterior: 58,
                    skillShotFree: 71,
                    skillShotInterior: 70,
                    skillSteal: 64,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '232': {
                    age: 32,
                    draft: 200939,
                    experience: 0,
                    id: 232,
                    loyalty: 4,
                    name: '约纳斯-杰雷布科',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 2170000,
                    skillAverage: 71,
                    skillBlock: 66,
                    skillPass: 64,
                    skillPhysique: 77,
                    skillRebound: 73,
                    skillShotExterior: 65,
                    skillShotFree: 68,
                    skillShotInterior: 66,
                    skillSteal: 63,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '233': {
                    age: 26,
                    draft: 201308,
                    experience: 0,
                    id: 233,
                    loyalty: 2,
                    name: '肯塔维奥斯-卡德维尔-波普',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 12000000,
                    skillAverage: 69,
                    skillBlock: 63,
                    skillPass: 65,
                    skillPhysique: 77,
                    skillRebound: 66,
                    skillShotExterior: 66,
                    skillShotFree: 66,
                    skillShotInterior: 67,
                    skillSteal: 69,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '234': {
                    age: 29,
                    draft: 201235,
                    experience: 0,
                    id: 234,
                    loyalty: 1,
                    name: '德雷蒙德-格林',
                    numsChampion: 3,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 10,
                    salary: 18005000,
                    skillAverage: 79,
                    skillBlock: 73,
                    skillPass: 79,
                    skillPhysique: 88,
                    skillRebound: 80,
                    skillShotExterior: 63,
                    skillShotFree: 69,
                    skillShotInterior: 69,
                    skillSteal: 75,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '235': {
                    age: 23,
                    draft: 201745,
                    experience: 0,
                    id: 235,
                    loyalty: 1,
                    name: '狄龙-布鲁克斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 1,
                    potential: 7,
                    salary: 1500000,
                    skillAverage: 71,
                    skillBlock: 67,
                    skillPass: 64,
                    skillPhysique: 78,
                    skillRebound: 67,
                    skillShotExterior: 62,
                    skillShotFree: 68,
                    skillShotInterior: 69,
                    skillSteal: 68,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '236': {
                    age: 39,
                    draft: 200103,
                    experience: 0,
                    id: 236,
                    loyalty: 1,
                    name: '保罗-加索尔',
                    numsChampion: 2,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 16400000,
                    skillAverage: 74,
                    skillBlock: 75,
                    skillPass: 67,
                    skillPhysique: 78,
                    skillRebound: 77,
                    skillShotExterior: 60,
                    skillShotFree: 70,
                    skillShotInterior: 69,
                    skillSteal: 58,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 2,
                    yearsLeague: 17,
                },
                '237': {
                    age: 22,
                    draft: 201706,
                    experience: 0,
                    id: 237,
                    loyalty: 3,
                    name: '乔纳森-艾萨克',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 6046667,
                    skillAverage: 73,
                    skillBlock: 73,
                    skillPass: 62,
                    skillPhysique: 80,
                    skillRebound: 74,
                    skillShotExterior: 63,
                    skillShotFree: 67,
                    skillShotInterior: 69,
                    skillSteal: 68,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '238': {
                    age: 24,
                    draft: 0,
                    experience: 0,
                    id: 238,
                    loyalty: 1,
                    name: '韦恩-塞尔登',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 1540000,
                    skillAverage: 68,
                    skillBlock: 63,
                    skillPass: 66,
                    skillPhysique: 75,
                    skillRebound: 64,
                    skillShotExterior: 64,
                    skillShotFree: 65,
                    skillShotInterior: 67,
                    skillSteal: 68,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '239': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 239,
                    loyalty: 3,
                    name: '马克西-克勒贝尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1380000,
                    skillAverage: 73,
                    skillBlock: 77,
                    skillPass: 63,
                    skillPhysique: 79,
                    skillRebound: 71,
                    skillShotExterior: 66,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 65,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '240': {
                    age: 27,
                    draft: 201129,
                    experience: 0,
                    id: 240,
                    loyalty: 5,
                    name: '科里-约瑟夫',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 7950000,
                    skillAverage: 74,
                    skillBlock: 63,
                    skillPass: 74,
                    skillPhysique: 82,
                    skillRebound: 67,
                    skillShotExterior: 65,
                    skillShotFree: 62,
                    skillShotInterior: 68,
                    skillSteal: 76,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '241': {
                    age: 33,
                    draft: 200518,
                    experience: 0,
                    id: 241,
                    loyalty: 4,
                    name: '杰拉德-格林',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 2390000,
                    skillAverage: 70,
                    skillBlock: 64,
                    skillPass: 63,
                    skillPhysique: 76,
                    skillRebound: 68,
                    skillShotExterior: 70,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 64,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 1,
                    yearsLeague: 13,
                },
                '242': {
                    age: 25,
                    draft: 201332,
                    experience: 0,
                    id: 242,
                    loyalty: 3,
                    name: '阿莱克斯-阿布林斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 6,
                    salary: 5460000,
                    skillAverage: 70,
                    skillBlock: 65,
                    skillPass: 65,
                    skillPhysique: 79,
                    skillRebound: 65,
                    skillShotExterior: 70,
                    skillShotFree: 64,
                    skillShotInterior: 64,
                    skillSteal: 71,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '243': {
                    age: 25,
                    draft: 201734,
                    experience: 0,
                    id: 243,
                    loyalty: 2,
                    name: '弗兰克-梅森',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 1500000,
                    skillAverage: 72,
                    skillBlock: 64,
                    skillPass: 76,
                    skillPhysique: 76,
                    skillRebound: 64,
                    skillShotExterior: 62,
                    skillShotFree: 66,
                    skillShotInterior: 68,
                    skillSteal: 71,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '244': {
                    age: 29,
                    draft: 201322,
                    experience: 0,
                    id: 244,
                    loyalty: 1,
                    name: '梅森-普拉姆利',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 13480000,
                    skillAverage: 72,
                    skillBlock: 70,
                    skillPass: 62,
                    skillPhysique: 78,
                    skillRebound: 74,
                    skillShotExterior: 58,
                    skillShotFree: 71,
                    skillShotInterior: 70,
                    skillSteal: 66,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 2,
                    yearsLeague: 5,
                },
                '245': {
                    age: 22,
                    draft: 201619,
                    experience: 0,
                    id: 245,
                    loyalty: 3,
                    name: '马里克-比斯利',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 2250000,
                    skillAverage: 68,
                    skillBlock: 63,
                    skillPass: 66,
                    skillPhysique: 76,
                    skillRebound: 66,
                    skillShotExterior: 65,
                    skillShotFree: 63,
                    skillShotInterior: 68,
                    skillSteal: 66,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '246': {
                    age: 27,
                    draft: 201331,
                    experience: 0,
                    id: 246,
                    loyalty: 1,
                    name: '阿伦-克拉布',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 18500000,
                    skillAverage: 71,
                    skillBlock: 66,
                    skillPass: 66,
                    skillPhysique: 80,
                    skillRebound: 68,
                    skillShotExterior: 70,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 68,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 2,
                    yearsLeague: 5,
                },
                '247': {
                    age: 35,
                    draft: 200505,
                    experience: 0,
                    id: 247,
                    loyalty: 3,
                    name: '雷蒙德-费尔顿',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 70,
                    skillBlock: 65,
                    skillPass: 71,
                    skillPhysique: 75,
                    skillRebound: 64,
                    skillShotExterior: 64,
                    skillShotFree: 64,
                    skillShotInterior: 69,
                    skillSteal: 71,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 1,
                    yearsLeague: 13,
                },
                '248': {
                    age: 22,
                    draft: 201817,
                    experience: 0,
                    id: 248,
                    loyalty: 5,
                    name: '丹特-迪文森佐',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 3277500,
                    skillAverage: 69,
                    skillBlock: 63,
                    skillPass: 68,
                    skillPhysique: 77,
                    skillRebound: 68,
                    skillShotExterior: 66,
                    skillShotFree: 64,
                    skillShotInterior: 66,
                    skillSteal: 66,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '249': {
                    age: 25,
                    draft: 201440,
                    experience: 0,
                    id: 249,
                    loyalty: 2,
                    name: '格伦-罗宾逊三世',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 4115000,
                    skillAverage: 69,
                    skillBlock: 66,
                    skillPass: 62,
                    skillPhysique: 76,
                    skillRebound: 66,
                    skillShotExterior: 63,
                    skillShotFree: 68,
                    skillShotInterior: 67,
                    skillSteal: 64,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '250': {
                    age: 25,
                    draft: 201518,
                    experience: 0,
                    id: 250,
                    loyalty: 5,
                    name: '萨姆-德克尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2760000,
                    skillAverage: 71,
                    skillBlock: 63,
                    skillPass: 64,
                    skillPhysique: 78,
                    skillRebound: 70,
                    skillShotExterior: 61,
                    skillShotFree: 66,
                    skillShotInterior: 68,
                    skillSteal: 73,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '251': {
                    age: 22,
                    draft: 201530,
                    experience: 0,
                    id: 251,
                    loyalty: 3,
                    name: '凯文-卢尼',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 1570000,
                    skillAverage: 72,
                    skillBlock: 73,
                    skillPass: 63,
                    skillPhysique: 78,
                    skillRebound: 74,
                    skillShotExterior: 57,
                    skillShotFree: 69,
                    skillShotInterior: 69,
                    skillSteal: 62,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '252': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 252,
                    loyalty: 5,
                    name: '阿方索-麦金尼',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1470000,
                    skillAverage: 70,
                    skillBlock: 65,
                    skillPass: 63,
                    skillPhysique: 76,
                    skillRebound: 71,
                    skillShotExterior: 63,
                    skillShotFree: 65,
                    skillShotInterior: 67,
                    skillSteal: 64,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '253': {
                    age: 24,
                    draft: 201715,
                    experience: 0,
                    id: 253,
                    loyalty: 1,
                    name: '贾斯汀-杰克逊',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 3706667,
                    skillAverage: 71,
                    skillBlock: 64,
                    skillPass: 66,
                    skillPhysique: 79,
                    skillRebound: 69,
                    skillShotExterior: 65,
                    skillShotFree: 65,
                    skillShotInterior: 67,
                    skillSteal: 67,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '254': {
                    age: 21,
                    draft: 201840,
                    experience: 0,
                    id: 254,
                    loyalty: 2,
                    name: '罗季翁斯-库鲁茨',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1740000,
                    skillAverage: 68,
                    skillBlock: 63,
                    skillPass: 62,
                    skillPhysique: 72,
                    skillRebound: 69,
                    skillShotExterior: 63,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 63,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '255': {
                    age: 30,
                    draft: 201014,
                    experience: 0,
                    id: 255,
                    loyalty: 2,
                    name: '帕特里克-帕特森',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 5580000,
                    skillAverage: 69,
                    skillBlock: 67,
                    skillPass: 60,
                    skillPhysique: 76,
                    skillRebound: 70,
                    skillShotExterior: 66,
                    skillShotFree: 67,
                    skillShotInterior: 65,
                    skillSteal: 62,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 2,
                    yearsLeague: 8,
                },
                '256': {
                    age: 27,
                    draft: 201320,
                    experience: 0,
                    id: 256,
                    loyalty: 1,
                    name: '托尼-斯内尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 7,
                    salary: 11393333,
                    skillAverage: 68,
                    skillBlock: 65,
                    skillPass: 66,
                    skillPhysique: 76,
                    skillRebound: 66,
                    skillShotExterior: 65,
                    skillShotFree: 64,
                    skillShotInterior: 65,
                    skillSteal: 67,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '257': {
                    age: 21,
                    draft: 201845,
                    experience: 0,
                    id: 257,
                    loyalty: 4,
                    name: '哈米杜-迪亚洛',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 1306667,
                    skillAverage: 69,
                    skillBlock: 63,
                    skillPass: 66,
                    skillPhysique: 75,
                    skillRebound: 66,
                    skillShotExterior: 59,
                    skillShotFree: 65,
                    skillShotInterior: 69,
                    skillSteal: 74,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 3,
                    yearsLeague: 0,
                },
                '258': {
                    age: 25,
                    draft: 201142,
                    experience: 0,
                    id: 258,
                    loyalty: 2,
                    name: '戴维斯-贝尔坦斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 2,
                    potential: 7,
                    salary: 7000000,
                    skillAverage: 69,
                    skillBlock: 68,
                    skillPass: 62,
                    skillPhysique: 75,
                    skillRebound: 68,
                    skillShotExterior: 67,
                    skillShotFree: 66,
                    skillShotInterior: 64,
                    skillSteal: 61,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '259': {
                    age: 22,
                    draft: 201831,
                    experience: 0,
                    id: 259,
                    loyalty: 1,
                    name: '埃利-奥科博',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 1530000,
                    skillAverage: 69,
                    skillBlock: 63,
                    skillPass: 70,
                    skillPhysique: 75,
                    skillRebound: 65,
                    skillShotExterior: 63,
                    skillShotFree: 66,
                    skillShotInterior: 67,
                    skillSteal: 66,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 4,
                    yearsLeague: 1,
                },
                '260': {
                    age: 32,
                    draft: 201004,
                    experience: 0,
                    id: 260,
                    loyalty: 2,
                    name: '韦斯利-约翰逊',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 6130000,
                    skillAverage: 71,
                    skillBlock: 67,
                    skillPass: 64,
                    skillPhysique: 79,
                    skillRebound: 69,
                    skillShotExterior: 64,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 69,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '261': {
                    age: 26,
                    draft: 0,
                    experience: 0,
                    id: 261,
                    loyalty: 3,
                    name: '约吉-费雷尔',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 3075000,
                    skillAverage: 69,
                    skillBlock: 62,
                    skillPass: 67,
                    skillPhysique: 75,
                    skillRebound: 64,
                    skillShotExterior: 62,
                    skillShotFree: 64,
                    skillShotInterior: 67,
                    skillSteal: 71,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '262': {
                    age: 32,
                    draft: 0,
                    experience: 0,
                    id: 262,
                    loyalty: 1,
                    name: '阿隆-贝恩斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 5320000,
                    skillAverage: 70,
                    skillBlock: 69,
                    skillPass: 60,
                    skillPhysique: 75,
                    skillRebound: 73,
                    skillShotExterior: 63,
                    skillShotFree: 69,
                    skillShotInterior: 66,
                    skillSteal: 59,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '263': {
                    age: 30,
                    draft: 201013,
                    experience: 0,
                    id: 263,
                    loyalty: 2,
                    name: '艾德-戴维斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 4450000,
                    skillAverage: 72,
                    skillBlock: 67,
                    skillPass: 61,
                    skillPhysique: 78,
                    skillRebound: 81,
                    skillShotExterior: 57,
                    skillShotFree: 69,
                    skillShotInterior: 69,
                    skillSteal: 64,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '264': {
                    age: 30,
                    draft: 201226,
                    experience: 0,
                    id: 264,
                    loyalty: 2,
                    name: '迈尔斯-普拉姆利',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 0,
                    potential: 6,
                    salary: 12500000,
                    skillAverage: 69,
                    skillBlock: 68,
                    skillPass: 60,
                    skillPhysique: 74,
                    skillRebound: 71,
                    skillShotExterior: 57,
                    skillShotFree: 70,
                    skillShotInterior: 68,
                    skillSteal: 61,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '265': {
                    age: 29,
                    draft: 201321,
                    experience: 0,
                    id: 265,
                    loyalty: 4,
                    name: '戈尔吉-吉昂',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 16230000,
                    skillAverage: 70,
                    skillBlock: 68,
                    skillPass: 59,
                    skillPhysique: 75,
                    skillRebound: 74,
                    skillShotExterior: 59,
                    skillShotFree: 70,
                    skillShotInterior: 68,
                    skillSteal: 62,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 3,
                    yearsLeague: 5,
                },
                '266': {
                    age: 32,
                    draft: 200723,
                    experience: 0,
                    id: 266,
                    loyalty: 5,
                    name: '威尔森-钱德勒',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 12800000,
                    skillAverage: 70,
                    skillBlock: 65,
                    skillPass: 64,
                    skillPhysique: 77,
                    skillRebound: 71,
                    skillShotExterior: 63,
                    skillShotFree: 64,
                    skillShotInterior: 66,
                    skillSteal: 67,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 11,
                },
                '267': {
                    age: 25,
                    draft: 201430,
                    experience: 0,
                    id: 267,
                    loyalty: 3,
                    name: '凯尔-安德森',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 9290000,
                    skillAverage: 75,
                    skillBlock: 67,
                    skillPass: 69,
                    skillPhysique: 84,
                    skillRebound: 77,
                    skillShotExterior: 58,
                    skillShotFree: 67,
                    skillShotInterior: 70,
                    skillSteal: 73,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 4,
                    yearsLeague: 4,
                },
                '268': {
                    age: 24,
                    draft: 201733,
                    experience: 0,
                    id: 268,
                    loyalty: 4,
                    name: '韦斯利-艾旺杜',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1500000,
                    skillAverage: 68,
                    skillBlock: 64,
                    skillPass: 65,
                    skillPhysique: 77,
                    skillRebound: 67,
                    skillShotExterior: 60,
                    skillShotFree: 67,
                    skillShotInterior: 68,
                    skillSteal: 67,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '269': {
                    age: 30,
                    draft: 201138,
                    experience: 0,
                    id: 269,
                    loyalty: 1,
                    name: '钱德勒-帕森斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 24605000,
                    skillAverage: 69,
                    skillBlock: 66,
                    skillPass: 63,
                    skillPhysique: 75,
                    skillRebound: 66,
                    skillShotExterior: 66,
                    skillShotFree: 63,
                    skillShotInterior: 66,
                    skillSteal: 64,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '270': {
                    age: 23,
                    draft: 201712,
                    experience: 0,
                    id: 270,
                    loyalty: 1,
                    name: '卢克-肯纳德',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 4126667,
                    skillAverage: 67,
                    skillBlock: 65,
                    skillPass: 66,
                    skillPhysique: 75,
                    skillRebound: 65,
                    skillShotExterior: 59,
                    skillShotFree: 62,
                    skillShotInterior: 68,
                    skillSteal: 66,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '271': {
                    age: 27,
                    draft: 201520,
                    experience: 0,
                    id: 271,
                    loyalty: 1,
                    name: '德隆-莱特',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 2540000,
                    skillAverage: 69,
                    skillBlock: 63,
                    skillPass: 68,
                    skillPhysique: 75,
                    skillRebound: 65,
                    skillShotExterior: 62,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 70,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '272': {
                    age: 21,
                    draft: 201806,
                    experience: 0,
                    id: 272,
                    loyalty: 5,
                    name: '穆罕默德-班巴',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 6027500,
                    skillAverage: 75,
                    skillBlock: 85,
                    skillPass: 60,
                    skillPhysique: 80,
                    skillRebound: 76,
                    skillShotExterior: 62,
                    skillShotFree: 67,
                    skillShotInterior: 67,
                    skillSteal: 60,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '273': {
                    age: 23,
                    draft: 201630,
                    experience: 0,
                    id: 273,
                    loyalty: 5,
                    name: '达米安-琼斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 1925000,
                    skillAverage: 71,
                    skillBlock: 74,
                    skillPass: 61,
                    skillPhysique: 77,
                    skillRebound: 71,
                    skillShotExterior: 57,
                    skillShotFree: 70,
                    skillShotInterior: 68,
                    skillSteal: 63,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '274': {
                    age: 31,
                    draft: 200923,
                    experience: 0,
                    id: 274,
                    loyalty: 4,
                    name: '欧米-卡斯比',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 2180000,
                    skillAverage: 68,
                    skillBlock: 64,
                    skillPass: 63,
                    skillPhysique: 74,
                    skillRebound: 69,
                    skillShotExterior: 60,
                    skillShotFree: 69,
                    skillShotInterior: 66,
                    skillSteal: 65,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '275': {
                    age: 24,
                    draft: 201647,
                    experience: 0,
                    id: 275,
                    loyalty: 4,
                    name: '杰克-莱曼',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1540000,
                    skillAverage: 69,
                    skillBlock: 67,
                    skillPass: 62,
                    skillPhysique: 75,
                    skillRebound: 68,
                    skillShotExterior: 62,
                    skillShotFree: 63,
                    skillShotInterior: 66,
                    skillSteal: 67,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '276': {
                    age: 25,
                    draft: 201406,
                    experience: 0,
                    id: 276,
                    loyalty: 5,
                    name: '马库斯-斯玛特',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 13000000,
                    skillAverage: 75,
                    skillBlock: 67,
                    skillPass: 77,
                    skillPhysique: 81,
                    skillRebound: 66,
                    skillShotExterior: 65,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 78,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 4,
                    yearsLeague: 4,
                },
                '277': {
                    age: 21,
                    draft: 0,
                    experience: 0,
                    id: 277,
                    loyalty: 1,
                    name: '小德里克-琼斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 1580000,
                    skillAverage: 69,
                    skillBlock: 68,
                    skillPass: 63,
                    skillPhysique: 75,
                    skillRebound: 69,
                    skillShotExterior: 60,
                    skillShotFree: 67,
                    skillShotInterior: 68,
                    skillSteal: 64,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '278': {
                    age: 34,
                    draft: 0,
                    experience: 0,
                    id: 278,
                    loyalty: 2,
                    name: '安东尼-托利弗',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 5750000,
                    skillAverage: 70,
                    skillBlock: 70,
                    skillPass: 61,
                    skillPhysique: 78,
                    skillRebound: 70,
                    skillShotExterior: 67,
                    skillShotFree: 66,
                    skillShotInterior: 63,
                    skillSteal: 63,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '279': {
                    age: 28,
                    draft: 201214,
                    experience: 0,
                    id: 279,
                    loyalty: 2,
                    name: '约翰-汉森',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 10530000,
                    skillAverage: 71,
                    skillBlock: 72,
                    skillPass: 62,
                    skillPhysique: 76,
                    skillRebound: 74,
                    skillShotExterior: 63,
                    skillShotFree: 66,
                    skillShotInterior: 66,
                    skillSteal: 64,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '280': {
                    age: 33,
                    draft: 200722,
                    experience: 0,
                    id: 280,
                    loyalty: 5,
                    name: '贾莱德-杜德利',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 9530000,
                    skillAverage: 72,
                    skillBlock: 66,
                    skillPass: 67,
                    skillPhysique: 81,
                    skillRebound: 70,
                    skillShotExterior: 66,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 68,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 1,
                    yearsLeague: 11,
                },
                '281': {
                    age: 26,
                    draft: 201519,
                    experience: 0,
                    id: 281,
                    loyalty: 5,
                    name: '杰里安-格兰特',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 2640000,
                    skillAverage: 73,
                    skillBlock: 62,
                    skillPass: 76,
                    skillPhysique: 79,
                    skillRebound: 65,
                    skillShotExterior: 63,
                    skillShotFree: 63,
                    skillShotInterior: 66,
                    skillSteal: 78,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '282': {
                    age: 38,
                    draft: 200351,
                    experience: 0,
                    id: 282,
                    loyalty: 1,
                    name: '凯尔-科沃尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 8,
                    salary: 7530000,
                    skillAverage: 68,
                    skillBlock: 62,
                    skillPass: 67,
                    skillPhysique: 75,
                    skillRebound: 65,
                    skillShotExterior: 65,
                    skillShotFree: 64,
                    skillShotInterior: 64,
                    skillSteal: 65,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 2,
                    yearsLeague: 15,
                },
                '283': {
                    age: 22,
                    draft: 201610,
                    experience: 0,
                    id: 283,
                    loyalty: 5,
                    name: '索恩-马克',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 3185000,
                    skillAverage: 69,
                    skillBlock: 72,
                    skillPass: 61,
                    skillPhysique: 74,
                    skillRebound: 70,
                    skillShotExterior: 63,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 61,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '284': {
                    age: 24,
                    draft: 0,
                    experience: 0,
                    id: 284,
                    loyalty: 4,
                    name: '亚历克斯-珀伊斯瑞斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 200000,
                    skillAverage: 70,
                    skillBlock: 66,
                    skillPass: 64,
                    skillPhysique: 75,
                    skillRebound: 71,
                    skillShotExterior: 60,
                    skillShotFree: 67,
                    skillShotInterior: 67,
                    skillSteal: 64,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '285': {
                    age: 25,
                    draft: 201306,
                    experience: 0,
                    id: 285,
                    loyalty: 3,
                    name: '诺伦斯-诺尔',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 1875000,
                    skillAverage: 74,
                    skillBlock: 79,
                    skillPass: 59,
                    skillPhysique: 77,
                    skillRebound: 76,
                    skillShotExterior: 57,
                    skillShotFree: 69,
                    skillShotInterior: 68,
                    skillSteal: 67,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 2,
                    yearsLeague: 4,
                },
                '286': {
                    age: 27,
                    draft: 201411,
                    experience: 0,
                    id: 286,
                    loyalty: 2,
                    name: '道格-迈克德莫特',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 7330000,
                    skillAverage: 68,
                    skillBlock: 63,
                    skillPass: 63,
                    skillPhysique: 74,
                    skillRebound: 65,
                    skillShotExterior: 64,
                    skillShotFree: 65,
                    skillShotInterior: 64,
                    skillSteal: 65,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 3,
                    yearsLeague: 4,
                },
                '287': {
                    age: 26,
                    draft: 0,
                    experience: 0,
                    id: 287,
                    loyalty: 3,
                    name: '大卫-恩瓦巴',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 1510000,
                    skillAverage: 68,
                    skillBlock: 67,
                    skillPass: 65,
                    skillPhysique: 74,
                    skillRebound: 66,
                    skillShotExterior: 59,
                    skillShotFree: 68,
                    skillShotInterior: 66,
                    skillSteal: 68,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '288': {
                    age: 21,
                    draft: 201836,
                    experience: 0,
                    id: 288,
                    loyalty: 1,
                    name: '米切尔-罗宾逊',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1627500,
                    skillAverage: 74,
                    skillBlock: 84,
                    skillPass: 58,
                    skillPhysique: 79,
                    skillRebound: 73,
                    skillShotExterior: 57,
                    skillShotFree: 69,
                    skillShotInterior: 68,
                    skillSteal: 65,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '289': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 289,
                    loyalty: 1,
                    name: '伊恩-克拉克',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 6,
                    salary: 1760000,
                    skillAverage: 68,
                    skillBlock: 62,
                    skillPass: 68,
                    skillPhysique: 75,
                    skillRebound: 64,
                    skillShotExterior: 63,
                    skillShotFree: 62,
                    skillShotInterior: 66,
                    skillSteal: 67,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '290': {
                    age: 22,
                    draft: 201740,
                    experience: 0,
                    id: 290,
                    loyalty: 3,
                    name: '德维恩-培根',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1500000,
                    skillAverage: 66,
                    skillBlock: 62,
                    skillPass: 65,
                    skillPhysique: 71,
                    skillRebound: 64,
                    skillShotExterior: 61,
                    skillShotFree: 66,
                    skillShotInterior: 64,
                    skillSteal: 66,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '291': {
                    age: 20,
                    draft: 201819,
                    experience: 0,
                    id: 291,
                    loyalty: 5,
                    name: '凯文-许尔特',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 2975000,
                    skillAverage: 70,
                    skillBlock: 64,
                    skillPass: 68,
                    skillPhysique: 77,
                    skillRebound: 69,
                    skillShotExterior: 64,
                    skillShotFree: 64,
                    skillShotInterior: 65,
                    skillSteal: 69,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '292': {
                    age: 23,
                    draft: 201821,
                    experience: 0,
                    id: 292,
                    loyalty: 3,
                    name: '格雷森-艾伦',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 2775000,
                    skillAverage: 66,
                    skillBlock: 62,
                    skillPass: 64,
                    skillPhysique: 72,
                    skillRebound: 62,
                    skillShotExterior: 64,
                    skillShotFree: 66,
                    skillShotInterior: 64,
                    skillSteal: 63,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '293': {
                    age: 27,
                    draft: 201211,
                    experience: 0,
                    id: 293,
                    loyalty: 1,
                    name: '梅耶斯-伦纳德',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 10945000,
                    skillAverage: 68,
                    skillBlock: 65,
                    skillPass: 61,
                    skillPhysique: 73,
                    skillRebound: 72,
                    skillShotExterior: 62,
                    skillShotFree: 68,
                    skillShotInterior: 64,
                    skillSteal: 62,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '294': {
                    age: 32,
                    draft: 200837,
                    experience: 0,
                    id: 294,
                    loyalty: 5,
                    name: '卢克-理查德-巴莫特',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 4320000,
                    skillAverage: 68,
                    skillBlock: 66,
                    skillPass: 63,
                    skillPhysique: 75,
                    skillRebound: 67,
                    skillShotExterior: 61,
                    skillShotFree: 66,
                    skillShotInterior: 66,
                    skillSteal: 64,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '295': {
                    age: 26,
                    draft: 201546,
                    experience: 0,
                    id: 295,
                    loyalty: 4,
                    name: '诺曼-鲍威尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 10495000,
                    skillAverage: 68,
                    skillBlock: 63,
                    skillPass: 66,
                    skillPhysique: 75,
                    skillRebound: 66,
                    skillShotExterior: 62,
                    skillShotFree: 64,
                    skillShotInterior: 65,
                    skillSteal: 68,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 4,
                    yearsLeague: 3,
                },
                '296': {
                    age: 29,
                    draft: 201246,
                    experience: 0,
                    id: 296,
                    loyalty: 5,
                    name: '达柳斯-米勒',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2210000,
                    skillAverage: 69,
                    skillBlock: 64,
                    skillPass: 65,
                    skillPhysique: 76,
                    skillRebound: 65,
                    skillShotExterior: 66,
                    skillShotFree: 63,
                    skillShotInterior: 63,
                    skillSteal: 66,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '297': {
                    age: 23,
                    draft: 201822,
                    experience: 0,
                    id: 297,
                    loyalty: 1,
                    name: '钱德勒-哈奇森',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 5,
                    salary: 2695000,
                    skillAverage: 70,
                    skillBlock: 65,
                    skillPass: 63,
                    skillPhysique: 77,
                    skillRebound: 71,
                    skillShotExterior: 59,
                    skillShotFree: 66,
                    skillShotInterior: 67,
                    skillSteal: 66,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '298': {
                    age: 35,
                    draft: 200557,
                    experience: 0,
                    id: 298,
                    loyalty: 2,
                    name: '马尔钦-戈塔特',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 13570000,
                    skillAverage: 72,
                    skillBlock: 70,
                    skillPass: 62,
                    skillPhysique: 77,
                    skillRebound: 76,
                    skillShotExterior: 65,
                    skillShotFree: 70,
                    skillShotInterior: 67,
                    skillSteal: 58,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 1,
                    yearsLeague: 11,
                },
                '299': {
                    age: 33,
                    draft: 200404,
                    experience: 0,
                    id: 299,
                    loyalty: 4,
                    name: '肖恩-利文斯顿',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 7,
                    salary: 8000000,
                    skillAverage: 68,
                    skillBlock: 61,
                    skillPass: 69,
                    skillPhysique: 75,
                    skillRebound: 66,
                    skillShotExterior: 57,
                    skillShotFree: 64,
                    skillShotInterior: 68,
                    skillSteal: 71,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 2,
                    yearsLeague: 14,
                },
                '300': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 300,
                    loyalty: 2,
                    name: '塞斯-库里',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 2800000,
                    skillAverage: 67,
                    skillBlock: 62,
                    skillPass: 68,
                    skillPhysique: 75,
                    skillRebound: 64,
                    skillShotExterior: 63,
                    skillShotFree: 62,
                    skillShotInterior: 64,
                    skillSteal: 66,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '301': {
                    age: 32,
                    draft: 200534,
                    experience: 0,
                    id: 301,
                    loyalty: 5,
                    name: 'C.J.Miles',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 8530000,
                    skillAverage: 68,
                    skillBlock: 67,
                    skillPass: 65,
                    skillPhysique: 75,
                    skillRebound: 66,
                    skillShotExterior: 65,
                    skillShotFree: 65,
                    skillShotInterior: 64,
                    skillSteal: 67,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 11,
                },
                '302': {
                    age: 23,
                    draft: 201524,
                    experience: 0,
                    id: 302,
                    loyalty: 3,
                    name: '泰尔斯-琼斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 2440000,
                    skillAverage: 72,
                    skillBlock: 62,
                    skillPass: 74,
                    skillPhysique: 78,
                    skillRebound: 64,
                    skillShotExterior: 63,
                    skillShotFree: 62,
                    skillShotInterior: 67,
                    skillSteal: 76,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '303': {
                    age: 20,
                    draft: 201626,
                    experience: 0,
                    id: 303,
                    loyalty: 1,
                    name: '富尔坎-科尔克马兹',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1740000,
                    skillAverage: 67,
                    skillBlock: 62,
                    skillPass: 64,
                    skillPhysique: 72,
                    skillRebound: 66,
                    skillShotExterior: 63,
                    skillShotFree: 64,
                    skillShotInterior: 64,
                    skillSteal: 69,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '304': {
                    age: 39,
                    draft: 200008,
                    experience: 0,
                    id: 304,
                    loyalty: 2,
                    name: '贾马尔-克劳福德',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 2300000,
                    skillAverage: 67,
                    skillBlock: 63,
                    skillPass: 67,
                    skillPhysique: 72,
                    skillRebound: 64,
                    skillShotExterior: 62,
                    skillShotFree: 66,
                    skillShotInterior: 64,
                    skillSteal: 65,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 1,
                    yearsLeague: 18,
                },
                '305': {
                    age: 22,
                    draft: 201633,
                    experience: 0,
                    id: 305,
                    loyalty: 1,
                    name: '谢赫-迪亚洛',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 6,
                    salary: 1540000,
                    skillAverage: 69,
                    skillBlock: 69,
                    skillPass: 61,
                    skillPhysique: 73,
                    skillRebound: 73,
                    skillShotExterior: 57,
                    skillShotFree: 69,
                    skillShotInterior: 67,
                    skillSteal: 62,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '306': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 306,
                    loyalty: 5,
                    name: '克里斯蒂亚诺-费利西奥',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 0,
                    potential: 6,
                    salary: 8053333,
                    skillAverage: 69,
                    skillBlock: 67,
                    skillPass: 59,
                    skillPhysique: 76,
                    skillRebound: 74,
                    skillShotExterior: 57,
                    skillShotFree: 69,
                    skillShotInterior: 67,
                    skillSteal: 60,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 3,
                    yearsLeague: 3,
                },
                '307': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 307,
                    loyalty: 2,
                    name: '丹尼尔-泰斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 1380000,
                    skillAverage: 67,
                    skillBlock: 67,
                    skillPass: 61,
                    skillPhysique: 73,
                    skillRebound: 70,
                    skillShotExterior: 59,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 60,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '308': {
                    age: 21,
                    draft: 0,
                    experience: 0,
                    id: 308,
                    loyalty: 5,
                    name: '弗兰克-杰克逊',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 1500000,
                    skillAverage: 66,
                    skillBlock: 62,
                    skillPass: 65,
                    skillPhysique: 72,
                    skillRebound: 63,
                    skillShotExterior: 62,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 66,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 2,
                    yearsLeague: 0,
                },
                '309': {
                    age: 23,
                    draft: 201833,
                    experience: 0,
                    id: 309,
                    loyalty: 4,
                    name: '贾伦-布伦森',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 1527500,
                    skillAverage: 68,
                    skillBlock: 61,
                    skillPass: 69,
                    skillPhysique: 74,
                    skillRebound: 64,
                    skillShotExterior: 61,
                    skillShotFree: 62,
                    skillShotInterior: 66,
                    skillSteal: 69,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 4,
                    yearsLeague: 2,
                },
                '310': {
                    age: 27,
                    draft: 201311,
                    experience: 0,
                    id: 310,
                    loyalty: 3,
                    name: '迈克尔-卡特-威廉姆斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 7,
                    salary: 1760000,
                    skillAverage: 70,
                    skillBlock: 66,
                    skillPass: 71,
                    skillPhysique: 74,
                    skillRebound: 64,
                    skillShotExterior: 60,
                    skillShotFree: 67,
                    skillShotInterior: 66,
                    skillSteal: 74,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '311': {
                    age: 31,
                    draft: 201243,
                    experience: 0,
                    id: 311,
                    loyalty: 2,
                    name: '迈克-斯科特',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 7,
                    salary: 4320000,
                    skillAverage: 68,
                    skillBlock: 65,
                    skillPass: 62,
                    skillPhysique: 74,
                    skillRebound: 70,
                    skillShotExterior: 63,
                    skillShotFree: 64,
                    skillShotInterior: 64,
                    skillSteal: 63,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '312': {
                    age: 31,
                    draft: 200821,
                    experience: 0,
                    id: 312,
                    loyalty: 4,
                    name: '莱恩-安德森',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 8,
                    salary: 18010000,
                    skillAverage: 69,
                    skillBlock: 65,
                    skillPass: 63,
                    skillPhysique: 78,
                    skillRebound: 71,
                    skillShotExterior: 63,
                    skillShotFree: 67,
                    skillShotInterior: 65,
                    skillSteal: 62,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 2,
                    yearsLeague: 10,
                },
                '313': {
                    age: 35,
                    draft: 200409,
                    experience: 0,
                    id: 313,
                    loyalty: 2,
                    name: '安德烈-伊格达拉',
                    numsChampion: 3,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 7,
                    salary: 16595000,
                    skillAverage: 71,
                    skillBlock: 68,
                    skillPass: 72,
                    skillPhysique: 79,
                    skillRebound: 68,
                    skillShotExterior: 61,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 69,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 2,
                    yearsLeague: 14,
                },
                '314': {
                    age: 32,
                    draft: 200556,
                    experience: 0,
                    id: 314,
                    loyalty: 5,
                    name: '阿米尔-约翰逊',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 68,
                    skillBlock: 67,
                    skillPass: 63,
                    skillPhysique: 72,
                    skillRebound: 70,
                    skillShotExterior: 57,
                    skillShotFree: 67,
                    skillShotInterior: 66,
                    skillSteal: 61,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 13,
                },
                '315': {
                    age: 21,
                    draft: 0,
                    experience: 0,
                    id: 315,
                    loyalty: 1,
                    name: '哈里-吉尔斯三世',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 200000,
                    skillAverage: 68,
                    skillBlock: 65,
                    skillPass: 63,
                    skillPhysique: 73,
                    skillRebound: 69,
                    skillShotExterior: 57,
                    skillShotFree: 65,
                    skillShotInterior: 69,
                    skillSteal: 66,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 1,
                    yearsLeague: 0,
                },
                '316': {
                    age: 20,
                    draft: 201721,
                    experience: 0,
                    id: 316,
                    loyalty: 4,
                    name: '特伦斯-弗格森',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 2846667,
                    skillAverage: 68,
                    skillBlock: 64,
                    skillPass: 65,
                    skillPhysique: 79,
                    skillRebound: 66,
                    skillShotExterior: 64,
                    skillShotFree: 63,
                    skillShotInterior: 64,
                    skillSteal: 69,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '317': {
                    age: 32,
                    draft: 200528,
                    experience: 0,
                    id: 317,
                    loyalty: 5,
                    name: '伊安-马辛米',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 15695000,
                    skillAverage: 70,
                    skillBlock: 70,
                    skillPass: 59,
                    skillPhysique: 76,
                    skillRebound: 72,
                    skillShotExterior: 57,
                    skillShotFree: 74,
                    skillShotInterior: 65,
                    skillSteal: 63,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 2,
                    yearsLeague: 11,
                },
                '318': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 318,
                    loyalty: 5,
                    name: 'T.J.麦康诺',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 1600000,
                    skillAverage: 69,
                    skillBlock: 64,
                    skillPass: 73,
                    skillPhysique: 75,
                    skillRebound: 64,
                    skillShotExterior: 57,
                    skillShotFree: 63,
                    skillShotInterior: 67,
                    skillSteal: 70,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '319': {
                    age: 26,
                    draft: 0,
                    experience: 0,
                    id: 319,
                    loyalty: 5,
                    name: '罗伊斯-奥尼尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 1500000,
                    skillAverage: 68,
                    skillBlock: 63,
                    skillPass: 64,
                    skillPhysique: 74,
                    skillRebound: 67,
                    skillShotExterior: 59,
                    skillShotFree: 65,
                    skillShotInterior: 66,
                    skillSteal: 65,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '320': {
                    age: 23,
                    draft: 201503,
                    experience: 0,
                    id: 320,
                    loyalty: 3,
                    name: '贾希尔-奥卡福',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 1635000,
                    skillAverage: 66,
                    skillBlock: 65,
                    skillPass: 57,
                    skillPhysique: 71,
                    skillRebound: 70,
                    skillShotExterior: 56,
                    skillShotFree: 68,
                    skillShotInterior: 67,
                    skillSteal: 57,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 2,
                    yearsLeague: 3,
                },
                '321': {
                    age: 36,
                    draft: 200405,
                    experience: 0,
                    id: 321,
                    loyalty: 1,
                    name: '德文-哈里斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 69,
                    skillBlock: 64,
                    skillPass: 70,
                    skillPhysique: 74,
                    skillRebound: 64,
                    skillShotExterior: 60,
                    skillShotFree: 62,
                    skillShotInterior: 66,
                    skillSteal: 75,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 14,
                },
                '322': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 322,
                    loyalty: 5,
                    name: '加里-克拉克',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 5,
                    salary: 200000,
                    skillAverage: 70,
                    skillBlock: 72,
                    skillPass: 61,
                    skillPhysique: 76,
                    skillRebound: 71,
                    skillShotExterior: 66,
                    skillShotFree: 65,
                    skillShotInterior: 62,
                    skillSteal: 64,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '323': {
                    age: 32,
                    draft: 200933,
                    experience: 0,
                    id: 323,
                    loyalty: 3,
                    name: '丹特-康宁汉姆',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 2500000,
                    skillAverage: 71,
                    skillBlock: 70,
                    skillPass: 62,
                    skillPhysique: 79,
                    skillRebound: 72,
                    skillShotExterior: 60,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 67,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 1,
                    yearsLeague: 9,
                },
                '324': {
                    age: 30,
                    draft: 200823,
                    experience: 0,
                    id: 324,
                    loyalty: 2,
                    name: '科斯塔-库佛斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 8740000,
                    skillAverage: 71,
                    skillBlock: 69,
                    skillPass: 60,
                    skillPhysique: 76,
                    skillRebound: 76,
                    skillShotExterior: 56,
                    skillShotFree: 65,
                    skillShotInterior: 68,
                    skillSteal: 67,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '325': {
                    age: 35,
                    draft: 200342,
                    experience: 0,
                    id: 325,
                    loyalty: 5,
                    name: '扎扎-帕楚里亚',
                    numsChampion: 2,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 69,
                    skillBlock: 67,
                    skillPass: 61,
                    skillPhysique: 75,
                    skillRebound: 73,
                    skillShotExterior: 56,
                    skillShotFree: 71,
                    skillShotInterior: 66,
                    skillSteal: 65,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 1,
                    yearsLeague: 15,
                },
                '326': {
                    age: 29,
                    draft: 201007,
                    experience: 0,
                    id: 326,
                    loyalty: 5,
                    name: '格雷格-门罗',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2170000,
                    skillAverage: 66,
                    skillBlock: 65,
                    skillPass: 57,
                    skillPhysique: 70,
                    skillRebound: 71,
                    skillShotExterior: 57,
                    skillShotFree: 66,
                    skillShotInterior: 67,
                    skillSteal: 58,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '327': {
                    age: 31,
                    draft: 0,
                    experience: 0,
                    id: 327,
                    loyalty: 3,
                    name: '兰斯-托马斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 7350000,
                    skillAverage: 68,
                    skillBlock: 67,
                    skillPass: 61,
                    skillPhysique: 75,
                    skillRebound: 68,
                    skillShotExterior: 60,
                    skillShotFree: 67,
                    skillShotInterior: 64,
                    skillSteal: 65,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '328': {
                    age: 33,
                    draft: 200720,
                    experience: 0,
                    id: 328,
                    loyalty: 2,
                    name: '杰森-史密斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 5450000,
                    skillAverage: 68,
                    skillBlock: 69,
                    skillPass: 64,
                    skillPhysique: 73,
                    skillRebound: 70,
                    skillShotExterior: 58,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 62,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 11,
                },
                '329': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 329,
                    loyalty: 4,
                    name: '托瑞-克雷格',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2050000,
                    skillAverage: 69,
                    skillBlock: 67,
                    skillPass: 63,
                    skillPhysique: 75,
                    skillRebound: 69,
                    skillShotExterior: 61,
                    skillShotFree: 64,
                    skillShotInterior: 64,
                    skillSteal: 66,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '330': {
                    age: 26,
                    draft: 201215,
                    experience: 0,
                    id: 330,
                    loyalty: 1,
                    name: '莫里斯-哈克利斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 11175000,
                    skillAverage: 71,
                    skillBlock: 75,
                    skillPass: 64,
                    skillPhysique: 77,
                    skillRebound: 73,
                    skillShotExterior: 61,
                    skillShotFree: 64,
                    skillShotInterior: 64,
                    skillSteal: 65,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 2,
                    yearsLeague: 6,
                },
                '331': {
                    age: 27,
                    draft: 201232,
                    experience: 0,
                    id: 331,
                    loyalty: 5,
                    name: '托马斯-萨托兰斯基',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 7,
                    salary: 3130000,
                    skillAverage: 68,
                    skillBlock: 62,
                    skillPass: 71,
                    skillPhysique: 73,
                    skillRebound: 64,
                    skillShotExterior: 58,
                    skillShotFree: 64,
                    skillShotInterior: 64,
                    skillSteal: 69,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '332': {
                    age: 36,
                    draft: 200508,
                    experience: 0,
                    id: 332,
                    loyalty: 5,
                    name: '钱宁-弗莱',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 66,
                    skillBlock: 64,
                    skillPass: 60,
                    skillPhysique: 72,
                    skillRebound: 69,
                    skillShotExterior: 61,
                    skillShotFree: 64,
                    skillShotInterior: 63,
                    skillSteal: 62,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 1,
                    yearsLeague: 13,
                },
                '333': {
                    age: 23,
                    draft: 201741,
                    experience: 0,
                    id: 333,
                    loyalty: 3,
                    name: '泰勒-多尔西',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1380000,
                    skillAverage: 66,
                    skillBlock: 62,
                    skillPass: 65,
                    skillPhysique: 72,
                    skillRebound: 65,
                    skillShotExterior: 60,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 66,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '334': {
                    age: 29,
                    draft: 201249,
                    experience: 0,
                    id: 334,
                    loyalty: 2,
                    name: '凯尔-奥奎因',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 4450000,
                    skillAverage: 67,
                    skillBlock: 70,
                    skillPass: 60,
                    skillPhysique: 70,
                    skillRebound: 70,
                    skillShotExterior: 57,
                    skillShotFree: 67,
                    skillShotInterior: 65,
                    skillSteal: 58,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 1,
                    yearsLeague: 6,
                },
                '335': {
                    age: 29,
                    draft: 201122,
                    experience: 0,
                    id: 335,
                    loyalty: 4,
                    name: '肯尼思-法里德',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 13760000,
                    skillAverage: 65,
                    skillBlock: 63,
                    skillPass: 61,
                    skillPhysique: 69,
                    skillRebound: 68,
                    skillShotExterior: 56,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 63,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 1,
                    yearsLeague: 7,
                },
                '336': {
                    age: 21,
                    draft: 201623,
                    experience: 0,
                    id: 336,
                    loyalty: 3,
                    name: '安特-日日奇',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2700000,
                    skillAverage: 66,
                    skillBlock: 66,
                    skillPass: 58,
                    skillPhysique: 71,
                    skillRebound: 71,
                    skillShotExterior: 56,
                    skillShotFree: 69,
                    skillShotInterior: 65,
                    skillSteal: 58,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '337': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 337,
                    loyalty: 5,
                    name: '特洛伊-丹尼尔斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 3260000,
                    skillAverage: 67,
                    skillBlock: 62,
                    skillPass: 66,
                    skillPhysique: 72,
                    skillRebound: 64,
                    skillShotExterior: 63,
                    skillShotFree: 63,
                    skillShotInterior: 63,
                    skillSteal: 73,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '338': {
                    age: 25,
                    draft: 201650,
                    experience: 0,
                    id: 338,
                    loyalty: 1,
                    name: '乔治-尼昂',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 1646667,
                    skillAverage: 65,
                    skillBlock: 65,
                    skillPass: 60,
                    skillPhysique: 70,
                    skillRebound: 67,
                    skillShotExterior: 61,
                    skillShotFree: 65,
                    skillShotInterior: 62,
                    skillSteal: 61,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 3,
                    yearsLeague: 2,
                },
                '339': {
                    age: 36,
                    draft: 200102,
                    experience: 0,
                    id: 339,
                    loyalty: 3,
                    name: '泰森-钱德勒',
                    numsChampion: 1,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 74,
                    skillBlock: 75,
                    skillPass: 59,
                    skillPhysique: 81,
                    skillRebound: 81,
                    skillShotExterior: 56,
                    skillShotFree: 69,
                    skillShotInterior: 65,
                    skillSteal: 65,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 1,
                    yearsLeague: 17,
                },
                '340': {
                    age: 21,
                    draft: 201726,
                    experience: 0,
                    id: 340,
                    loyalty: 2,
                    name: '凯莱布-斯瓦尼根',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 2480000,
                    skillAverage: 67,
                    skillBlock: 64,
                    skillPass: 60,
                    skillPhysique: 73,
                    skillRebound: 74,
                    skillShotExterior: 57,
                    skillShotFree: 66,
                    skillShotInterior: 66,
                    skillSteal: 62,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '341': {
                    age: 32,
                    draft: 0,
                    experience: 0,
                    id: 341,
                    loyalty: 1,
                    name: '米洛斯-特奥多西奇',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 6300000,
                    skillAverage: 68,
                    skillBlock: 62,
                    skillPass: 72,
                    skillPhysique: 72,
                    skillRebound: 64,
                    skillShotExterior: 65,
                    skillShotFree: 62,
                    skillShotInterior: 62,
                    skillSteal: 66,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '342': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 342,
                    loyalty: 4,
                    name: '詹姆斯-纳纳利',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1470000,
                    skillAverage: 65,
                    skillBlock: 63,
                    skillPass: 63,
                    skillPhysique: 70,
                    skillRebound: 64,
                    skillShotExterior: 60,
                    skillShotFree: 65,
                    skillShotInterior: 63,
                    skillSteal: 63,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '343': {
                    age: 25,
                    draft: 201525,
                    experience: 0,
                    id: 343,
                    loyalty: 5,
                    name: '贾雷尔-马丁',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 7,
                    salary: 2420000,
                    skillAverage: 68,
                    skillBlock: 67,
                    skillPass: 62,
                    skillPhysique: 74,
                    skillRebound: 69,
                    skillShotExterior: 59,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 61,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '344': {
                    age: 25,
                    draft: 201537,
                    experience: 0,
                    id: 344,
                    loyalty: 2,
                    name: '理查恩-福尔摩斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 1600000,
                    skillAverage: 68,
                    skillBlock: 69,
                    skillPass: 60,
                    skillPhysique: 73,
                    skillRebound: 71,
                    skillShotExterior: 56,
                    skillShotFree: 65,
                    skillShotInterior: 65,
                    skillSteal: 63,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '345': {
                    age: 19,
                    draft: 201815,
                    experience: 0,
                    id: 345,
                    loyalty: 4,
                    name: '特洛伊-布朗',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 7,
                    salary: 3627500,
                    skillAverage: 65,
                    skillBlock: 63,
                    skillPass: 62,
                    skillPhysique: 69,
                    skillRebound: 66,
                    skillShotExterior: 58,
                    skillShotFree: 65,
                    skillShotInterior: 64,
                    skillSteal: 64,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '346': {
                    age: 25,
                    draft: 201660,
                    experience: 0,
                    id: 346,
                    loyalty: 5,
                    name: '蒂龙-华莱士',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 8,
                    salary: 1470000,
                    skillAverage: 63,
                    skillBlock: 62,
                    skillPass: 64,
                    skillPhysique: 69,
                    skillRebound: 63,
                    skillShotExterior: 56,
                    skillShotFree: 65,
                    skillShotInterior: 64,
                    skillSteal: 64,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '347': {
                    age: 21,
                    draft: 201632,
                    experience: 0,
                    id: 347,
                    loyalty: 5,
                    name: '伊维察-祖巴茨',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1540000,
                    skillAverage: 67,
                    skillBlock: 67,
                    skillPass: 58,
                    skillPhysique: 71,
                    skillRebound: 73,
                    skillShotExterior: 56,
                    skillShotFree: 67,
                    skillShotInterior: 65,
                    skillSteal: 59,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '348': {
                    age: 30,
                    draft: 201140,
                    experience: 0,
                    id: 348,
                    loyalty: 3,
                    name: '乔恩-洛伊尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 9755000,
                    skillAverage: 66,
                    skillBlock: 63,
                    skillPass: 62,
                    skillPhysique: 71,
                    skillRebound: 69,
                    skillShotExterior: 57,
                    skillShotFree: 65,
                    skillShotInterior: 64,
                    skillSteal: 65,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '349': {
                    age: 28,
                    draft: 201323,
                    experience: 0,
                    id: 349,
                    loyalty: 1,
                    name: '所罗门-希尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 12755000,
                    skillAverage: 70,
                    skillBlock: 68,
                    skillPass: 66,
                    skillPhysique: 77,
                    skillRebound: 67,
                    skillShotExterior: 60,
                    skillShotFree: 64,
                    skillShotInterior: 63,
                    skillSteal: 69,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '350': {
                    age: 31,
                    draft: 200815,
                    experience: 0,
                    id: 350,
                    loyalty: 5,
                    name: '罗宾-洛佩斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 14360000,
                    skillAverage: 69,
                    skillBlock: 75,
                    skillPass: 61,
                    skillPhysique: 75,
                    skillRebound: 69,
                    skillShotExterior: 56,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 58,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '351': {
                    age: 22,
                    draft: 201735,
                    experience: 0,
                    id: 351,
                    loyalty: 3,
                    name: '伊凡-拉布',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1500000,
                    skillAverage: 66,
                    skillBlock: 64,
                    skillPass: 63,
                    skillPhysique: 70,
                    skillRebound: 68,
                    skillShotExterior: 56,
                    skillShotFree: 65,
                    skillShotInterior: 64,
                    skillSteal: 62,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '352': {
                    age: 23,
                    draft: 201609,
                    experience: 0,
                    id: 352,
                    loyalty: 1,
                    name: '雅各布-珀尔特尔',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 3350000,
                    skillAverage: 68,
                    skillBlock: 69,
                    skillPass: 59,
                    skillPhysique: 73,
                    skillRebound: 73,
                    skillShotExterior: 56,
                    skillShotFree: 69,
                    skillShotInterior: 64,
                    skillSteal: 59,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '353': {
                    age: 23,
                    draft: 201628,
                    experience: 0,
                    id: 353,
                    loyalty: 3,
                    name: '斯卡尔-拉比西埃',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 1940000,
                    skillAverage: 64,
                    skillBlock: 64,
                    skillPass: 60,
                    skillPhysique: 69,
                    skillRebound: 67,
                    skillShotExterior: 58,
                    skillShotFree: 66,
                    skillShotInterior: 62,
                    skillSteal: 61,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '354': {
                    age: 33,
                    draft: 200407,
                    experience: 0,
                    id: 354,
                    loyalty: 5,
                    name: '洛尔-邓',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2390000,
                    skillAverage: 68,
                    skillBlock: 68,
                    skillPass: 61,
                    skillPhysique: 72,
                    skillRebound: 73,
                    skillShotExterior: 60,
                    skillShotFree: 66,
                    skillShotInterior: 65,
                    skillSteal: 61,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '355': {
                    age: 24,
                    draft: 201738,
                    experience: 0,
                    id: 355,
                    loyalty: 4,
                    name: '乔丹-贝尔',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 8,
                    salary: 1380000,
                    skillAverage: 69,
                    skillBlock: 74,
                    skillPass: 62,
                    skillPhysique: 74,
                    skillRebound: 69,
                    skillShotExterior: 56,
                    skillShotFree: 66,
                    skillShotInterior: 64,
                    skillSteal: 64,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '356': {
                    age: 26,
                    draft: 201307,
                    experience: 0,
                    id: 356,
                    loyalty: 2,
                    name: '本-麦克莱默',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 5460000,
                    skillAverage: 63,
                    skillBlock: 62,
                    skillPass: 64,
                    skillPhysique: 68,
                    skillRebound: 62,
                    skillShotExterior: 61,
                    skillShotFree: 63,
                    skillShotInterior: 61,
                    skillSteal: 63,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '357': {
                    age: 23,
                    draft: 201737,
                    experience: 0,
                    id: 357,
                    loyalty: 3,
                    name: '谢米-奥杰莱',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 1583333,
                    skillAverage: 64,
                    skillBlock: 65,
                    skillPass: 59,
                    skillPhysique: 70,
                    skillRebound: 66,
                    skillShotExterior: 58,
                    skillShotFree: 65,
                    skillShotInterior: 62,
                    skillSteal: 61,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '358': {
                    age: 30,
                    draft: 201026,
                    experience: 0,
                    id: 358,
                    loyalty: 2,
                    name: '昆西-庞德塞特',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 5,
                    salary: 1890000,
                    skillAverage: 65,
                    skillBlock: 62,
                    skillPass: 65,
                    skillPhysique: 70,
                    skillRebound: 64,
                    skillShotExterior: 57,
                    skillShotFree: 65,
                    skillShotInterior: 62,
                    skillSteal: 68,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '359': {
                    age: 26,
                    draft: 201107,
                    experience: 0,
                    id: 359,
                    loyalty: 3,
                    name: '俾斯麦-比永博',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 17000000,
                    skillAverage: 68,
                    skillBlock: 78,
                    skillPass: 58,
                    skillPhysique: 72,
                    skillRebound: 70,
                    skillShotExterior: 56,
                    skillShotFree: 67,
                    skillShotInterior: 63,
                    skillSteal: 57,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 2,
                    yearsLeague: 7,
                },
                '360': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 360,
                    loyalty: 4,
                    name: '蒂姆-弗雷泽',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 1570000,
                    skillAverage: 67,
                    skillBlock: 62,
                    skillPass: 72,
                    skillPhysique: 73,
                    skillRebound: 64,
                    skillShotExterior: 59,
                    skillShotFree: 62,
                    skillShotInterior: 63,
                    skillSteal: 68,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 4,
                },
                '361': {
                    age: 24,
                    draft: 201746,
                    experience: 0,
                    id: 361,
                    loyalty: 5,
                    name: '斯特林-布朗',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 1500000,
                    skillAverage: 64,
                    skillBlock: 63,
                    skillPass: 64,
                    skillPhysique: 69,
                    skillRebound: 65,
                    skillShotExterior: 57,
                    skillShotFree: 65,
                    skillShotInterior: 63,
                    skillSteal: 63,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '362': {
                    age: 37,
                    draft: 0,
                    experience: 0,
                    id: 362,
                    loyalty: 2,
                    name: '何塞-卡尔德隆',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 67,
                    skillBlock: 63,
                    skillPass: 69,
                    skillPhysique: 72,
                    skillRebound: 63,
                    skillShotExterior: 59,
                    skillShotFree: 62,
                    skillShotInterior: 62,
                    skillSteal: 70,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 1,
                    yearsLeague: 13,
                },
                '363': {
                    age: 22,
                    draft: 201643,
                    experience: 0,
                    id: 363,
                    loyalty: 2,
                    name: '周琦',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 6,
                    salary: 1583333,
                    skillAverage: 74,
                    skillBlock: 79,
                    skillPass: 59,
                    skillPhysique: 66,
                    skillRebound: 79,
                    skillShotExterior: 69,
                    skillShotFree: 69,
                    skillShotInterior: 74,
                    skillSteal: 60,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 0,
                    yearsLeague: 1,
                },
                '364': {
                    age: 20,
                    draft: 201829,
                    experience: 0,
                    id: 364,
                    loyalty: 5,
                    name: '扎南-穆萨',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 4,
                    salary: 2290000,
                    skillAverage: 65,
                    skillBlock: 63,
                    skillPass: 62,
                    skillPhysique: 68,
                    skillRebound: 64,
                    skillShotExterior: 58,
                    skillShotFree: 64,
                    skillShotInterior: 63,
                    skillSteal: 65,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '365': {
                    age: 27,
                    draft: 201352,
                    experience: 0,
                    id: 365,
                    loyalty: 2,
                    name: '洛伦佐-布朗',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 0,
                    potential: 6,
                    salary: 1620000,
                    skillAverage: 65,
                    skillBlock: 63,
                    skillPass: 68,
                    skillPhysique: 70,
                    skillRebound: 63,
                    skillShotExterior: 58,
                    skillShotFree: 61,
                    skillShotInterior: 63,
                    skillSteal: 68,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 1,
                    yearsLeague: 5,
                },
                '366': {
                    age: 26,
                    draft: 0,
                    experience: 0,
                    id: 366,
                    loyalty: 4,
                    name: '肯-伯奇',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 1380000,
                    skillAverage: 65,
                    skillBlock: 64,
                    skillPass: 60,
                    skillPhysique: 70,
                    skillRebound: 68,
                    skillShotExterior: 56,
                    skillShotFree: 64,
                    skillShotInterior: 63,
                    skillSteal: 67,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '367': {
                    age: 33,
                    draft: 0,
                    experience: 0,
                    id: 367,
                    loyalty: 4,
                    name: '萨拉赫-梅杰里',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1570000,
                    skillAverage: 64,
                    skillBlock: 65,
                    skillPass: 57,
                    skillPhysique: 68,
                    skillRebound: 68,
                    skillShotExterior: 56,
                    skillShotFree: 67,
                    skillShotInterior: 63,
                    skillSteal: 57,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '368': {
                    age: 23,
                    draft: 0,
                    experience: 0,
                    id: 368,
                    loyalty: 2,
                    name: '克里斯蒂安-伍德',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1510000,
                    skillAverage: 64,
                    skillBlock: 63,
                    skillPass: 61,
                    skillPhysique: 68,
                    skillRebound: 65,
                    skillShotExterior: 58,
                    skillShotFree: 67,
                    skillShotInterior: 61,
                    skillSteal: 61,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '369': {
                    age: 26,
                    draft: 201509,
                    experience: 0,
                    id: 369,
                    loyalty: 3,
                    name: '弗兰克-卡明斯基',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 3630000,
                    skillAverage: 64,
                    skillBlock: 65,
                    skillPass: 59,
                    skillPhysique: 69,
                    skillRebound: 68,
                    skillShotExterior: 58,
                    skillShotFree: 66,
                    skillShotInterior: 62,
                    skillSteal: 57,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 7,
                    yearsContract: 1,
                    yearsLeague: 3,
                },
                '370': {
                    age: 22,
                    draft: 201724,
                    experience: 0,
                    id: 370,
                    loyalty: 5,
                    name: '泰勒-莱登',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1870000,
                    skillAverage: 63,
                    skillBlock: 63,
                    skillPass: 61,
                    skillPhysique: 67,
                    skillRebound: 64,
                    skillShotExterior: 58,
                    skillShotFree: 64,
                    skillShotInterior: 61,
                    skillSteal: 61,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '371': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 371,
                    loyalty: 3,
                    name: '马修-德拉维多瓦',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 9610000,
                    skillAverage: 65,
                    skillBlock: 62,
                    skillPass: 69,
                    skillPhysique: 69,
                    skillRebound: 64,
                    skillShotExterior: 59,
                    skillShotFree: 63,
                    skillShotInterior: 61,
                    skillSteal: 65,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 2,
                    yearsLeague: 5,
                },
                '372': {
                    age: 22,
                    draft: 201608,
                    experience: 0,
                    id: 372,
                    loyalty: 4,
                    name: '马基斯-克里斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 3210000,
                    skillAverage: 65,
                    skillBlock: 66,
                    skillPass: 62,
                    skillPhysique: 69,
                    skillRebound: 65,
                    skillShotExterior: 58,
                    skillShotFree: 63,
                    skillShotInterior: 63,
                    skillSteal: 61,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '373': {
                    age: 21,
                    draft: 201718,
                    experience: 0,
                    id: 373,
                    loyalty: 1,
                    name: 'TJ-利夫',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 3183333,
                    skillAverage: 64,
                    skillBlock: 65,
                    skillPass: 60,
                    skillPhysique: 70,
                    skillRebound: 67,
                    skillShotExterior: 57,
                    skillShotFree: 64,
                    skillShotInterior: 63,
                    skillSteal: 59,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '374': {
                    age: 32,
                    draft: 201006,
                    experience: 0,
                    id: 374,
                    loyalty: 3,
                    name: '艾派-尤度',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 3360000,
                    skillAverage: 65,
                    skillBlock: 71,
                    skillPass: 58,
                    skillPhysique: 69,
                    skillRebound: 67,
                    skillShotExterior: 55,
                    skillShotFree: 67,
                    skillShotInterior: 61,
                    skillSteal: 58,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 1,
                    yearsLeague: 8,
                },
                '375': {
                    age: 22,
                    draft: 201823,
                    experience: 0,
                    id: 375,
                    loyalty: 2,
                    name: '阿龙-霍勒迪',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 2620000,
                    skillAverage: 63,
                    skillBlock: 61,
                    skillPass: 66,
                    skillPhysique: 67,
                    skillRebound: 61,
                    skillShotExterior: 57,
                    skillShotFree: 61,
                    skillShotInterior: 61,
                    skillSteal: 65,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '376': {
                    age: 30,
                    draft: 200802,
                    experience: 0,
                    id: 376,
                    loyalty: 5,
                    name: '迈克尔-比斯利',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 7,
                    salary: 3500000,
                    skillAverage: 63,
                    skillBlock: 63,
                    skillPass: 61,
                    skillPhysique: 67,
                    skillRebound: 65,
                    skillShotExterior: 55,
                    skillShotFree: 65,
                    skillShotInterior: 62,
                    skillSteal: 61,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 23,
                    yearsContract: 1,
                    yearsLeague: 10,
                },
                '377': {
                    age: 24,
                    draft: 201658,
                    experience: 0,
                    id: 377,
                    loyalty: 2,
                    name: '阿卜杜勒-纳迪尔',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1583333,
                    skillAverage: 64,
                    skillBlock: 65,
                    skillPass: 61,
                    skillPhysique: 67,
                    skillRebound: 64,
                    skillShotExterior: 56,
                    skillShotFree: 63,
                    skillShotInterior: 62,
                    skillSteal: 64,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '378': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 378,
                    loyalty: 4,
                    name: '罗恩-贝克',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 4540000,
                    skillAverage: 64,
                    skillBlock: 62,
                    skillPass: 66,
                    skillPhysique: 71,
                    skillRebound: 64,
                    skillShotExterior: 57,
                    skillShotFree: 64,
                    skillShotInterior: 61,
                    skillSteal: 66,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '379': {
                    age: 38,
                    draft: 0,
                    experience: 0,
                    id: 379,
                    loyalty: 5,
                    name: '乌杜尼斯-哈斯勒姆',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 2390000,
                    skillAverage: 63,
                    skillBlock: 64,
                    skillPass: 59,
                    skillPhysique: 67,
                    skillRebound: 65,
                    skillShotExterior: 57,
                    skillShotFree: 64,
                    skillShotInterior: 62,
                    skillSteal: 59,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 1,
                    yearsLeague: 15,
                },
                '380': {
                    age: 22,
                    draft: 201616,
                    experience: 0,
                    id: 380,
                    loyalty: 4,
                    name: '盖尔雄-亚布塞莱',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 3523333,
                    skillAverage: 63,
                    skillBlock: 65,
                    skillPass: 60,
                    skillPhysique: 67,
                    skillRebound: 66,
                    skillShotExterior: 56,
                    skillShotFree: 65,
                    skillShotInterior: 61,
                    skillSteal: 59,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 3,
                    yearsLeague: 1,
                },
                '381': {
                    age: 23,
                    draft: 201622,
                    experience: 0,
                    id: 381,
                    loyalty: 2,
                    name: '马拉奇-理查德森',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1570000,
                    skillAverage: 62,
                    skillBlock: 62,
                    skillPass: 63,
                    skillPhysique: 68,
                    skillRebound: 63,
                    skillShotExterior: 58,
                    skillShotFree: 63,
                    skillShotInterior: 60,
                    skillSteal: 63,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '382': {
                    age: 21,
                    draft: 201604,
                    experience: 0,
                    id: 382,
                    loyalty: 5,
                    name: '德拉甘·本德尔',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 4660000,
                    skillAverage: 63,
                    skillBlock: 64,
                    skillPass: 59,
                    skillPhysique: 67,
                    skillRebound: 66,
                    skillShotExterior: 56,
                    skillShotFree: 64,
                    skillShotInterior: 62,
                    skillSteal: 59,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '383': {
                    age: 22,
                    draft: 201828,
                    experience: 0,
                    id: 383,
                    loyalty: 2,
                    name: '雅各布·埃文斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 2,
                    potential: 5,
                    salary: 2307500,
                    skillAverage: 64,
                    skillBlock: 63,
                    skillPass: 64,
                    skillPhysique: 69,
                    skillRebound: 65,
                    skillShotExterior: 56,
                    skillShotFree: 63,
                    skillShotInterior: 62,
                    skillSteal: 62,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 4,
                    yearsLeague: 0,
                },
                '384': {
                    age: 24,
                    draft: 201748,
                    experience: 0,
                    id: 384,
                    loyalty: 4,
                    name: '辛达里厄斯-桑韦尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1500000,
                    skillAverage: 64,
                    skillBlock: 65,
                    skillPass: 65,
                    skillPhysique: 71,
                    skillRebound: 67,
                    skillShotExterior: 56,
                    skillShotFree: 64,
                    skillShotInterior: 60,
                    skillSteal: 63,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 21,
                    yearsContract: 2,
                    yearsLeague: 1,
                },
                '385': {
                    age: 35,
                    draft: 200613,
                    experience: 0,
                    id: 385,
                    loyalty: 2,
                    name: '萨波-索夫洛萨',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 5250000,
                    skillAverage: 64,
                    skillBlock: 62,
                    skillPass: 65,
                    skillPhysique: 70,
                    skillRebound: 66,
                    skillShotExterior: 57,
                    skillShotFree: 64,
                    skillShotInterior: 60,
                    skillSteal: 66,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 1,
                    yearsLeague: 12,
                },
                '386': {
                    age: 21,
                    draft: 201747,
                    experience: 0,
                    id: 386,
                    loyalty: 4,
                    name: 'IkeAnigbogu',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1500000,
                    skillAverage: 65,
                    skillBlock: 75,
                    skillPass: 57,
                    skillPhysique: 68,
                    skillRebound: 67,
                    skillShotExterior: 55,
                    skillShotFree: 65,
                    skillShotInterior: 62,
                    skillSteal: 57,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 2,
                    yearsLeague: 0,
                },
                '387': {
                    age: 22,
                    draft: 201617,
                    experience: 0,
                    id: 387,
                    loyalty: 5,
                    name: '韦德-鲍德温',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 62,
                    skillBlock: 62,
                    skillPass: 65,
                    skillPhysique: 68,
                    skillRebound: 64,
                    skillShotExterior: 56,
                    skillShotFree: 62,
                    skillShotInterior: 61,
                    skillSteal: 63,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 1,
                    yearsLeague: 1,
                },
                '388': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 388,
                    loyalty: 1,
                    name: '特雷沃恩-格拉汉姆',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1580000,
                    skillAverage: 65,
                    skillBlock: 62,
                    skillPass: 65,
                    skillPhysique: 73,
                    skillRebound: 66,
                    skillShotExterior: 57,
                    skillShotFree: 62,
                    skillShotInterior: 61,
                    skillSteal: 68,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 2,
                    yearsLeague: 2,
                },
                '389': {
                    age: 24,
                    draft: 201624,
                    experience: 0,
                    id: 389,
                    loyalty: 1,
                    name: '蒂莫西-鲁瓦乌',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 7,
                    salary: 1540000,
                    skillAverage: 61,
                    skillBlock: 62,
                    skillPass: 63,
                    skillPhysique: 66,
                    skillRebound: 62,
                    skillShotExterior: 56,
                    skillShotFree: 62,
                    skillShotInterior: 60,
                    skillSteal: 63,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 1,
                    yearsLeague: 2,
                },
                '390': {
                    age: 21,
                    draft: 201719,
                    experience: 0,
                    id: 390,
                    loyalty: 5,
                    name: '约翰-科林斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 3043333,
                    skillAverage: 75,
                    skillBlock: 69,
                    skillPass: 60,
                    skillPhysique: 69,
                    skillRebound: 83,
                    skillShotExterior: 77,
                    skillShotFree: 65,
                    skillShotInterior: 73,
                    skillSteal: 75,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 3,
                    yearsLeague: 69,
                },
                '391': {
                    age: 25,
                    draft: 201521,
                    experience: 0,
                    id: 391,
                    loyalty: 1,
                    name: '贾斯汀-安德森',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 7,
                    salary: 2520000,
                    skillAverage: 66,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 76,
                    skillShotExterior: 67,
                    skillShotFree: 66,
                    skillShotInterior: 70,
                    skillSteal: 64,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 11,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '392': {
                    age: 32,
                    draft: 200836,
                    experience: 0,
                    id: 392,
                    loyalty: 2,
                    name: '欧米尔-阿西克',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 11635000,
                    skillAverage: 71,
                    skillBlock: 70,
                    skillPass: 60,
                    skillPhysique: 70,
                    skillRebound: 80,
                    skillShotExterior: 70,
                    skillShotFree: 55,
                    skillShotInterior: 70,
                    skillSteal: 65,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 2,
                    yearsLeague: 70,
                },
                '393': {
                    age: 22,
                    draft: 201707,
                    experience: 0,
                    id: 393,
                    loyalty: 3,
                    name: '劳里-马尔卡宁',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 8,
                    salary: 5523333,
                    skillAverage: 79,
                    skillBlock: 64,
                    skillPass: 60,
                    skillPhysique: 64,
                    skillRebound: 88,
                    skillShotExterior: 83,
                    skillShotFree: 75,
                    skillShotInterior: 86,
                    skillSteal: 72,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 3,
                    yearsLeague: 64,
                },
                '394': {
                    age: 25,
                    draft: 201614,
                    experience: 0,
                    id: 394,
                    loyalty: 2,
                    name: '丹泽尔-瓦伦蒂内',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 7,
                    salary: 2830000,
                    skillAverage: 73,
                    skillBlock: 60,
                    skillPass: 63,
                    skillPhysique: 60,
                    skillRebound: 83,
                    skillShotExterior: 76,
                    skillShotFree: 71,
                    skillShotInterior: 82,
                    skillSteal: 67,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 2,
                    yearsLeague: 60,
                },
                '395': {
                    age: 24,
                    draft: 0,
                    experience: 0,
                    id: 395,
                    loyalty: 5,
                    name: '安东尼斯-克利夫兰',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1380000,
                    skillAverage: 62,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 62,
                    skillShotFree: 56,
                    skillShotInterior: 60,
                    skillSteal: 60,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 13,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '396': {
                    age: 34,
                    draft: 200503,
                    experience: 0,
                    id: 396,
                    loyalty: 1,
                    name: '德隆-威廉姆斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 9,
                    salary: 5500000,
                    skillAverage: 77,
                    skillBlock: 74,
                    skillPass: 78,
                    skillPhysique: 74,
                    skillRebound: 71,
                    skillShotExterior: 67,
                    skillShotFree: 76,
                    skillShotInterior: 75,
                    skillSteal: 71,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 6,
                    yearsContract: 2,
                    yearsLeague: 74,
                },
                '397': {
                    age: 28,
                    draft: 201005,
                    experience: 0,
                    id: 397,
                    loyalty: 5,
                    name: '德马库斯-考辛斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 10,
                    salary: 5340000,
                    skillAverage: 83,
                    skillBlock: 78,
                    skillPass: 69,
                    skillPhysique: 78,
                    skillRebound: 82,
                    skillShotExterior: 88,
                    skillShotFree: 69,
                    skillShotInterior: 75,
                    skillSteal: 89,
                    stateEnergy: 80,
                    stateInjury: 120,
                    team: 15,
                    yearsContract: 1,
                    yearsLeague: 78,
                },
                '398': {
                    age: 32,
                    draft: 200812,
                    experience: 0,
                    id: 398,
                    loyalty: 4,
                    name: '杰森-汤普森',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 950000,
                    skillAverage: 77,
                    skillBlock: 75,
                    skillPass: 71,
                    skillPhysique: 75,
                    skillRebound: 69,
                    skillShotExterior: 69,
                    skillShotFree: 75,
                    skillShotInterior: 75,
                    skillSteal: 66,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 15,
                    yearsContract: 1,
                    yearsLeague: 75,
                },
                '399': {
                    age: 30,
                    draft: 201160,
                    experience: 0,
                    id: 399,
                    loyalty: 2,
                    name: '以赛亚-托马斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 8,
                    salary: 2030000,
                    skillAverage: 73,
                    skillBlock: 60,
                    skillPass: 70,
                    skillPhysique: 60,
                    skillRebound: 82,
                    skillShotExterior: 67,
                    skillShotFree: 69,
                    skillShotInterior: 88,
                    skillSteal: 68,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 16,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '400': {
                    age: 41,
                    draft: 199809,
                    experience: 0,
                    id: 400,
                    loyalty: 4,
                    name: '德克-诺维茨基',
                    numsChampion: 1,
                    positionFirst: 4,
                    positionSecond: 3,
                    potential: 11,
                    salary: 5000000,
                    skillAverage: 76,
                    skillBlock: 62,
                    skillPass: 60,
                    skillPhysique: 62,
                    skillRebound: 79,
                    skillShotExterior: 77,
                    skillShotFree: 75,
                    skillShotInterior: 85,
                    skillSteal: 72,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 62,
                },
                '401': {
                    age: 22,
                    draft: 201637,
                    experience: 0,
                    id: 401,
                    loyalty: 1,
                    name: '齐纳努-欧努阿库',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 75,
                    skillBlock: 72,
                    skillPass: 71,
                    skillPhysique: 72,
                    skillRebound: 72,
                    skillShotExterior: 70,
                    skillShotFree: 72,
                    skillShotInterior: 74,
                    skillSteal: 65,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 27,
                    yearsContract: 1,
                    yearsLeague: 72,
                },
                '402': {
                    age: 26,
                    draft: 201443,
                    experience: 0,
                    id: 402,
                    loyalty: 3,
                    name: '沃尔特-塔瓦雷斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1600000,
                    skillAverage: 71,
                    skillBlock: 66,
                    skillPass: 75,
                    skillPhysique: 66,
                    skillRebound: 67,
                    skillShotExterior: 67,
                    skillShotFree: 74,
                    skillShotInterior: 77,
                    skillSteal: 65,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 14,
                    yearsContract: 1,
                    yearsLeague: 66,
                },
                '403': {
                    age: 24,
                    draft: 201756,
                    experience: 0,
                    id: 403,
                    loyalty: 3,
                    name: '贾巴里-伯德',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1470000,
                    skillAverage: 62,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 62,
                    skillShotFree: 56,
                    skillShotInterior: 60,
                    skillSteal: 60,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 2,
                    yearsLeague: 60,
                },
                '404': {
                    age: 23,
                    draft: 201645,
                    experience: 0,
                    id: 404,
                    loyalty: 2,
                    name: '迪米特里厄斯-杰克逊',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 6,
                    salary: 90000,
                    skillAverage: 62,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 63,
                    skillShotFree: 56,
                    skillShotInterior: 60,
                    skillSteal: 60,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 6,
                    yearsLeague: 60,
                },
                '405': {
                    age: 27,
                    draft: 201228,
                    experience: 0,
                    id: 405,
                    loyalty: 2,
                    name: '佩里-琼斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 200000,
                    skillAverage: 77,
                    skillBlock: 74,
                    skillPass: 77,
                    skillPhysique: 74,
                    skillRebound: 69,
                    skillShotExterior: 71,
                    skillShotFree: 73,
                    skillShotInterior: 71,
                    skillSteal: 66,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 4,
                    yearsContract: 1,
                    yearsLeague: 74,
                },
                '406': {
                    age: 28,
                    draft: 0,
                    experience: 0,
                    id: 406,
                    loyalty: 5,
                    name: '麦克-詹姆斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 4320000,
                    skillAverage: 68,
                    skillBlock: 60,
                    skillPass: 64,
                    skillPhysique: 60,
                    skillRebound: 78,
                    skillShotExterior: 68,
                    skillShotFree: 64,
                    skillShotInterior: 76,
                    skillSteal: 65,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '407': {
                    age: 22,
                    draft: 201739,
                    experience: 0,
                    id: 407,
                    loyalty: 5,
                    name: '贾旺-埃文斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 1500000,
                    skillAverage: 65,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 77,
                    skillShotExterior: 67,
                    skillShotFree: 61,
                    skillShotInterior: 79,
                    skillSteal: 61,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 2,
                    yearsLeague: 60,
                },
                '408': {
                    age: 36,
                    draft: 200325,
                    experience: 0,
                    id: 408,
                    loyalty: 5,
                    name: '卡洛斯-德尔菲诺',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 650000,
                    skillAverage: 77,
                    skillBlock: 74,
                    skillPass: 77,
                    skillPhysique: 74,
                    skillRebound: 70,
                    skillShotExterior: 66,
                    skillShotFree: 75,
                    skillShotInterior: 74,
                    skillSteal: 72,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 1,
                    yearsLeague: 74,
                },
                '409': {
                    age: 31,
                    draft: 0,
                    experience: 0,
                    id: 409,
                    loyalty: 2,
                    name: '米罗斯拉夫-拉杜利察',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 300000,
                    skillAverage: 75,
                    skillBlock: 70,
                    skillPass: 78,
                    skillPhysique: 70,
                    skillRebound: 75,
                    skillShotExterior: 74,
                    skillShotFree: 75,
                    skillShotInterior: 72,
                    skillSteal: 68,
                    stateEnergy: 79,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 1,
                    yearsLeague: 70,
                },
                '410': {
                    age: 36,
                    draft: 200426,
                    experience: 0,
                    id: 410,
                    loyalty: 2,
                    name: '凯文-马丁',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 1360000,
                    skillAverage: 77,
                    skillBlock: 72,
                    skillPass: 76,
                    skillPhysique: 72,
                    skillRebound: 72,
                    skillShotExterior: 67,
                    skillShotFree: 80,
                    skillShotInterior: 73,
                    skillSteal: 70,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 1,
                    yearsLeague: 72,
                },
                '411': {
                    age: 26,
                    draft: 201314,
                    experience: 0,
                    id: 411,
                    loyalty: 1,
                    name: '沙巴兹-穆罕默德',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 6,
                    salary: 1240000,
                    skillAverage: 63,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 73,
                    skillShotExterior: 64,
                    skillShotFree: 58,
                    skillShotInterior: 71,
                    skillSteal: 60,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '412': {
                    age: 29,
                    draft: 201011,
                    experience: 0,
                    id: 412,
                    loyalty: 2,
                    name: '科尔-阿尔德里奇',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 690000,
                    skillAverage: 62,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 61,
                    skillShotFree: 55,
                    skillShotInterior: 60,
                    skillSteal: 60,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 25,
                    yearsContract: 3,
                    yearsLeague: 60,
                },
                '413': {
                    age: 36,
                    draft: 200207,
                    experience: 0,
                    id: 413,
                    loyalty: 2,
                    name: '内内-希拉里奥',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 3740000,
                    skillAverage: 72,
                    skillBlock: 70,
                    skillPass: 60,
                    skillPhysique: 70,
                    skillRebound: 78,
                    skillShotExterior: 78,
                    skillShotFree: 59,
                    skillShotInterior: 65,
                    skillSteal: 72,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 2,
                    yearsLeague: 70,
                },
                '414': {
                    age: 26,
                    draft: 0,
                    experience: 0,
                    id: 414,
                    loyalty: 3,
                    name: '肖恩-朗',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 81,
                    skillBlock: 74,
                    skillPass: 80,
                    skillPhysique: 74,
                    skillRebound: 69,
                    skillShotExterior: 73,
                    skillShotFree: 78,
                    skillShotInterior: 79,
                    skillSteal: 73,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 19,
                    yearsContract: 1,
                    yearsLeague: 74,
                },
                '415': {
                    age: 35,
                    draft: 200304,
                    experience: 0,
                    id: 415,
                    loyalty: 1,
                    name: '克里斯-波什',
                    numsChampion: 2,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 10,
                    salary: 26840000,
                    skillAverage: 71,
                    skillBlock: 66,
                    skillPass: 68,
                    skillPhysique: 66,
                    skillRebound: 65,
                    skillShotExterior: 65,
                    skillShotFree: 66,
                    skillShotInterior: 79,
                    skillSteal: 78,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 1,
                    yearsLeague: 66,
                },
                '416': {
                    age: 32,
                    draft: 200916,
                    experience: 0,
                    id: 416,
                    loyalty: 4,
                    name: '詹姆斯-约翰逊',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 15350000,
                    skillAverage: 74,
                    skillBlock: 64,
                    skillPass: 67,
                    skillPhysique: 64,
                    skillRebound: 84,
                    skillShotExterior: 74,
                    skillShotFree: 66,
                    skillShotInterior: 69,
                    skillSteal: 69,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 3,
                    yearsLeague: 64,
                },
                '417': {
                    age: 27,
                    draft: 201204,
                    experience: 0,
                    id: 417,
                    loyalty: 4,
                    name: '迪昂-维特斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 12100000,
                    skillAverage: 73,
                    skillBlock: 61,
                    skillPass: 67,
                    skillPhysique: 61,
                    skillRebound: 85,
                    skillShotExterior: 69,
                    skillShotFree: 70,
                    skillShotInterior: 74,
                    skillSteal: 70,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 3,
                    yearsLeague: 61,
                },
                '418': {
                    age: 26,
                    draft: 201646,
                    experience: 0,
                    id: 418,
                    loyalty: 1,
                    name: 'A.J.-哈蒙斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 74,
                    skillBlock: 67,
                    skillPass: 74,
                    skillPhysique: 67,
                    skillRebound: 74,
                    skillShotExterior: 68,
                    skillShotFree: 78,
                    skillShotInterior: 77,
                    skillSteal: 68,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 5,
                    yearsContract: 1,
                    yearsLeague: 67,
                },
                '419': {
                    age: 32,
                    draft: 200417,
                    experience: 0,
                    id: 419,
                    loyalty: 2,
                    name: '约什-史密斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 5,
                    salary: 5330000,
                    skillAverage: 72,
                    skillBlock: 70,
                    skillPass: 60,
                    skillPhysique: 70,
                    skillRebound: 80,
                    skillShotExterior: 70,
                    skillShotFree: 55,
                    skillShotInterior: 70,
                    skillSteal: 70,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 8,
                    yearsContract: 2,
                    yearsLeague: 70,
                },
                '420': {
                    age: 33,
                    draft: 200709,
                    experience: 0,
                    id: 420,
                    loyalty: 1,
                    name: '乔金-诺阿',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 7,
                    salary: 18915000,
                    skillAverage: 77,
                    skillBlock: 78,
                    skillPass: 60,
                    skillPhysique: 78,
                    skillRebound: 80,
                    skillShotExterior: 78,
                    skillShotFree: 55,
                    skillShotInterior: 74,
                    skillSteal: 75,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 2,
                    yearsLeague: 78,
                },
                '421': {
                    age: 33,
                    draft: 200822,
                    experience: 0,
                    id: 421,
                    loyalty: 3,
                    name: '考特尼-李',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 12505000,
                    skillAverage: 74,
                    skillBlock: 60,
                    skillPass: 63,
                    skillPhysique: 60,
                    skillRebound: 86,
                    skillShotExterior: 70,
                    skillShotFree: 72,
                    skillShotInterior: 85,
                    skillSteal: 71,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 2,
                    yearsLeague: 60,
                },
                '422': {
                    age: 23,
                    draft: 201504,
                    experience: 0,
                    id: 422,
                    loyalty: 1,
                    name: '克里斯塔普斯-波尔津吉斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 10,
                    salary: 5700000,
                    skillAverage: 86,
                    skillBlock: 80,
                    skillPass: 65,
                    skillPhysique: 80,
                    skillRebound: 84,
                    skillShotExterior: 81,
                    skillShotFree: 78,
                    skillShotInterior: 79,
                    skillSteal: 84,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 12,
                    yearsContract: 1,
                    yearsLeague: 80,
                },
                '423': {
                    age: 27,
                    draft: 201326,
                    experience: 0,
                    id: 423,
                    loyalty: 3,
                    name: '安德烈-罗伯森',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 0,
                    potential: 8,
                    salary: 10370000,
                    skillAverage: 68,
                    skillBlock: 67,
                    skillPass: 60,
                    skillPhysique: 67,
                    skillRebound: 83,
                    skillShotExterior: 72,
                    skillShotFree: 60,
                    skillShotInterior: 60,
                    skillSteal: 67,
                    stateEnergy: 87,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 2,
                    yearsLeague: 67,
                },
                '424': {
                    age: 30,
                    draft: 201233,
                    experience: 0,
                    id: 424,
                    loyalty: 3,
                    name: '凯尔-辛格勒',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 5165000,
                    skillAverage: 64,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 62,
                    skillShotFree: 63,
                    skillShotInterior: 60,
                    skillSteal: 60,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 2,
                    yearsLeague: 60,
                },
                '425': {
                    age: 26,
                    draft: 201455,
                    experience: 0,
                    id: 425,
                    loyalty: 3,
                    name: '萨马基-克里斯顿',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 77,
                    skillPhysique: 65,
                    skillRebound: 69,
                    skillShotExterior: 71,
                    skillShotFree: 76,
                    skillShotInterior: 75,
                    skillSteal: 69,
                    stateEnergy: 77,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 1,
                    yearsLeague: 65,
                },
                '426': {
                    age: 22,
                    draft: 201548,
                    experience: 0,
                    id: 426,
                    loyalty: 2,
                    name: '达卡里-约翰逊',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1380000,
                    skillAverage: 63,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 63,
                    skillShotFree: 55,
                    skillShotInterior: 60,
                    skillSteal: 64,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 28,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '427': {
                    age: 33,
                    draft: 0,
                    experience: 0,
                    id: 427,
                    loyalty: 3,
                    name: '季莫费-莫兹戈夫',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 16360000,
                    skillAverage: 67,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 77,
                    skillShotExterior: 68,
                    skillShotFree: 55,
                    skillShotInterior: 76,
                    skillSteal: 66,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 2,
                    yearsLeague: 60,
                },
                '428': {
                    age: 35,
                    draft: 0,
                    experience: 0,
                    id: 428,
                    loyalty: 3,
                    name: 'C.J.沃特森',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 330000,
                    skillAverage: 74,
                    skillBlock: 65,
                    skillPass: 73,
                    skillPhysique: 65,
                    skillRebound: 71,
                    skillShotExterior: 72,
                    skillShotFree: 76,
                    skillShotInterior: 79,
                    skillSteal: 66,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 9,
                    yearsContract: 2,
                    yearsLeague: 65,
                },
                '429': {
                    age: 34,
                    draft: 200415,
                    experience: 0,
                    id: 429,
                    loyalty: 3,
                    name: '艾尔-杰弗森',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 4000000,
                    skillAverage: 68,
                    skillBlock: 61,
                    skillPass: 60,
                    skillPhysique: 61,
                    skillRebound: 78,
                    skillShotExterior: 71,
                    skillShotFree: 55,
                    skillShotInterior: 77,
                    skillSteal: 69,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 1,
                    yearsLeague: 61,
                },
                '430': {
                    age: 33,
                    draft: 200540,
                    experience: 0,
                    id: 430,
                    loyalty: 5,
                    name: '蒙塔-艾利斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 2250000,
                    skillAverage: 75,
                    skillBlock: 68,
                    skillPass: 76,
                    skillPhysique: 68,
                    skillRebound: 69,
                    skillShotExterior: 70,
                    skillShotFree: 75,
                    skillShotInterior: 73,
                    skillSteal: 69,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 2,
                    yearsContract: 4,
                    yearsLeague: 68,
                },
                '431': {
                    age: 30,
                    draft: 200811,
                    experience: 0,
                    id: 431,
                    loyalty: 2,
                    name: '杰里-贝勒斯',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 7,
                    salary: 8580000,
                    skillAverage: 68,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 66,
                    skillShotFree: 69,
                    skillShotInterior: 80,
                    skillSteal: 64,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '432': {
                    age: 27,
                    draft: 201213,
                    experience: 0,
                    id: 432,
                    loyalty: 1,
                    name: '肯道尔-马绍尔',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 1860000,
                    skillAverage: 74,
                    skillBlock: 70,
                    skillPass: 71,
                    skillPhysique: 70,
                    skillRebound: 70,
                    skillShotExterior: 69,
                    skillShotFree: 77,
                    skillShotInterior: 73,
                    skillSteal: 68,
                    stateEnergy: 71,
                    stateInjury: 0,
                    team: 3,
                    yearsContract: 1,
                    yearsLeague: 70,
                },
                '433': {
                    age: 27,
                    draft: 201108,
                    experience: 0,
                    id: 433,
                    loyalty: 3,
                    name: '布兰登-奈特',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 5,
                    salary: 15135000,
                    skillAverage: 77,
                    skillBlock: 67,
                    skillPass: 76,
                    skillPhysique: 67,
                    skillRebound: 75,
                    skillShotExterior: 74,
                    skillShotFree: 77,
                    skillShotInterior: 71,
                    skillSteal: 71,
                    stateEnergy: 89,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 2,
                    yearsLeague: 67,
                },
                '434': {
                    age: 31,
                    draft: 200827,
                    experience: 0,
                    id: 434,
                    loyalty: 1,
                    name: '达雷尔-亚瑟',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 6,
                    salary: 7460000,
                    skillAverage: 64,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 74,
                    skillShotExterior: 63,
                    skillShotFree: 61,
                    skillShotInterior: 67,
                    skillSteal: 62,
                    stateEnergy: 70,
                    stateInjury: 0,
                    team: 29,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '435': {
                    age: 36,
                    draft: 200430,
                    experience: 0,
                    id: 435,
                    loyalty: 1,
                    name: '安德森-瓦莱乔',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 7,
                    salary: 1910000,
                    skillAverage: 79,
                    skillBlock: 75,
                    skillPass: 73,
                    skillPhysique: 75,
                    skillRebound: 74,
                    skillShotExterior: 73,
                    skillShotFree: 73,
                    skillShotInterior: 77,
                    skillSteal: 68,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: 18,
                    yearsContract: 3,
                    yearsLeague: 75,
                },
                '436': {
                    age: 31,
                    draft: 200820,
                    experience: 0,
                    id: 436,
                    loyalty: 4,
                    name: '阿莱克西-阿金萨',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 5290000,
                    skillAverage: 76,
                    skillBlock: 73,
                    skillPass: 73,
                    skillPhysique: 73,
                    skillRebound: 69,
                    skillShotExterior: 73,
                    skillShotFree: 77,
                    skillShotInterior: 77,
                    skillSteal: 69,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 73,
                },
                '437': {
                    age: 36,
                    draft: 200402,
                    experience: 0,
                    id: 437,
                    loyalty: 4,
                    name: '埃梅卡-奥卡福',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 8,
                    salary: 2450000,
                    skillAverage: 75,
                    skillBlock: 77,
                    skillPass: 60,
                    skillPhysique: 77,
                    skillRebound: 80,
                    skillShotExterior: 72,
                    skillShotFree: 55,
                    skillShotInterior: 75,
                    skillSteal: 63,
                    stateEnergy: 90,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 77,
                },
                '438': {
                    age: 30,
                    draft: 0,
                    experience: 0,
                    id: 438,
                    loyalty: 1,
                    name: '德安德鲁-利金斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 1800000,
                    skillAverage: 63,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 75,
                    skillShotExterior: 65,
                    skillShotFree: 62,
                    skillShotInterior: 60,
                    skillSteal: 60,
                    stateEnergy: 83,
                    stateInjury: 0,
                    team: 26,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '439': {
                    age: 31,
                    draft: 200941,
                    experience: 0,
                    id: 439,
                    loyalty: 2,
                    name: '约迪-米克斯',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 6,
                    salary: 3450000,
                    skillAverage: 68,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 76,
                    skillShotExterior: 65,
                    skillShotFree: 65,
                    skillShotInterior: 87,
                    skillSteal: 61,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '440': {
                    age: 25,
                    draft: 0,
                    experience: 0,
                    id: 440,
                    loyalty: 4,
                    name: '丹尼尔·奥谢富',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 78,
                    skillBlock: 74,
                    skillPass: 71,
                    skillPhysique: 74,
                    skillRebound: 74,
                    skillShotExterior: 75,
                    skillShotFree: 80,
                    skillShotInterior: 71,
                    skillSteal: 66,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 74,
                },
                '441': {
                    age: 32,
                    draft: 200506,
                    experience: 0,
                    id: 441,
                    loyalty: 2,
                    name: '马泰尔-韦伯斯特',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 3,
                    potential: 5,
                    salary: 830000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 76,
                    skillPhysique: 65,
                    skillRebound: 71,
                    skillShotExterior: 67,
                    skillShotFree: 71,
                    skillShotInterior: 79,
                    skillSteal: 74,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 10,
                    yearsContract: 1,
                    yearsLeague: 65,
                },
                '442': {
                    age: 22,
                    draft: 201717,
                    experience: 0,
                    id: 442,
                    loyalty: 1,
                    name: 'D.J.威尔森',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 3346667,
                    skillAverage: 65,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 62,
                    skillShotFree: 63,
                    skillShotInterior: 60,
                    skillSteal: 64,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 3,
                    yearsLeague: 60,
                },
                '443': {
                    age: 33,
                    draft: 0,
                    experience: 0,
                    id: 443,
                    loyalty: 1,
                    name: '米尔扎-泰利托维奇',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 6,
                    salary: 3500000,
                    skillAverage: 67,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 77,
                    skillShotExterior: 67,
                    skillShotFree: 74,
                    skillShotInterior: 60,
                    skillSteal: 64,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 3,
                    yearsLeague: 60,
                },
                '444': {
                    age: 29,
                    draft: 201217,
                    experience: 0,
                    id: 444,
                    loyalty: 5,
                    name: '泰勒-泽勒',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 1930000,
                    skillAverage: 67,
                    skillBlock: 61,
                    skillPass: 60,
                    skillPhysique: 61,
                    skillRebound: 80,
                    skillShotExterior: 71,
                    skillShotFree: 59,
                    skillShotInterior: 67,
                    skillSteal: 69,
                    stateEnergy: 74,
                    stateInjury: 0,
                    team: 0,
                    yearsContract: 1,
                    yearsLeague: 61,
                },
                '445': {
                    age: 30,
                    draft: 201015,
                    experience: 0,
                    id: 445,
                    loyalty: 2,
                    name: '拉里-桑德斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1870000,
                    skillAverage: 76,
                    skillBlock: 70,
                    skillPass: 76,
                    skillPhysique: 70,
                    skillRebound: 70,
                    skillShotExterior: 66,
                    skillShotFree: 71,
                    skillShotInterior: 76,
                    skillSteal: 71,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 4,
                    yearsLeague: 70,
                },
                '446': {
                    age: 26,
                    draft: 201436,
                    experience: 0,
                    id: 446,
                    loyalty: 2,
                    name: '约翰尼-奥布莱恩特三世',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 5,
                    potential: 6,
                    salary: 200000,
                    skillAverage: 70,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 76,
                    skillShotExterior: 67,
                    skillShotFree: 63,
                    skillShotInterior: 84,
                    skillSteal: 62,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '447': {
                    age: 29,
                    draft: 201245,
                    experience: 0,
                    id: 447,
                    loyalty: 2,
                    name: '贾斯汀-汉密尔顿',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 5,
                    salary: 1000000,
                    skillAverage: 73,
                    skillBlock: 69,
                    skillPass: 76,
                    skillPhysique: 69,
                    skillRebound: 69,
                    skillShotExterior: 69,
                    skillShotFree: 77,
                    skillShotInterior: 73,
                    skillSteal: 66,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: 1,
                    yearsContract: 2,
                    yearsLeague: 69,
                },
                '448': {
                    age: 38,
                    draft: 200119,
                    experience: 0,
                    id: 448,
                    loyalty: 5,
                    name: '扎克-兰多夫',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 9,
                    salary: 11690000,
                    skillAverage: 81,
                    skillBlock: 76,
                    skillPass: 62,
                    skillPhysique: 76,
                    skillRebound: 84,
                    skillShotExterior: 81,
                    skillShotFree: 69,
                    skillShotInterior: 79,
                    skillSteal: 76,
                    stateEnergy: 73,
                    stateInjury: 0,
                    team: 24,
                    yearsContract: 1,
                    yearsLeague: 76,
                },
                '449': {
                    age: 39,
                    draft: 200245,
                    experience: 0,
                    id: 449,
                    loyalty: 5,
                    name: '马特-巴恩斯',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 2130000,
                    skillAverage: 76,
                    skillBlock: 65,
                    skillPass: 76,
                    skillPhysique: 65,
                    skillRebound: 70,
                    skillShotExterior: 74,
                    skillShotFree: 80,
                    skillShotInterior: 73,
                    skillSteal: 67,
                    stateEnergy: 82,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 2,
                    yearsLeague: 65,
                },
                '450': {
                    age: 21,
                    draft: 201613,
                    experience: 0,
                    id: 450,
                    loyalty: 3,
                    name: '乔治斯-帕帕扬尼斯',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2000000,
                    skillAverage: 63,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 80,
                    skillShotExterior: 66,
                    skillShotFree: 55,
                    skillShotInterior: 60,
                    skillSteal: 60,
                    stateEnergy: 85,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 1,
                    yearsLeague: 60,
                },
                '451': {
                    age: 22,
                    draft: 201631,
                    experience: 0,
                    id: 451,
                    loyalty: 3,
                    name: '德扬泰-戴维斯',
                    numsChampion: 0,
                    positionFirst: 4,
                    positionSecond: 0,
                    potential: 7,
                    salary: 1540000,
                    skillAverage: 68,
                    skillBlock: 64,
                    skillPass: 60,
                    skillPhysique: 64,
                    skillRebound: 77,
                    skillShotExterior: 69,
                    skillShotFree: 57,
                    skillShotInterior: 69,
                    skillSteal: 70,
                    stateEnergy: 72,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 1,
                    yearsLeague: 64,
                },
                '452': {
                    age: 39,
                    draft: 200210,
                    experience: 0,
                    id: 452,
                    loyalty: 3,
                    name: '卡隆-巴特勒',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 8,
                    salary: 520000,
                    skillAverage: 75,
                    skillBlock: 65,
                    skillPass: 75,
                    skillPhysique: 65,
                    skillRebound: 71,
                    skillShotExterior: 71,
                    skillShotFree: 74,
                    skillShotInterior: 75,
                    skillSteal: 70,
                    stateEnergy: 88,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 1,
                    yearsLeague: 65,
                },
                '453': {
                    age: 20,
                    draft: 201728,
                    experience: 0,
                    id: 453,
                    loyalty: 3,
                    name: '托尼-布拉德利',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 6,
                    salary: 2393333,
                    skillAverage: 67,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 73,
                    skillShotExterior: 64,
                    skillShotFree: 55,
                    skillShotInterior: 83,
                    skillSteal: 60,
                    stateEnergy: 76,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 3,
                    yearsLeague: 60,
                },
                '454': {
                    age: 27,
                    draft: 201347,
                    experience: 0,
                    id: 454,
                    loyalty: 3,
                    name: '劳尔-内图',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 6,
                    salary: 2150000,
                    skillAverage: 67,
                    skillBlock: 60,
                    skillPass: 60,
                    skillPhysique: 60,
                    skillRebound: 74,
                    skillShotExterior: 65,
                    skillShotFree: 68,
                    skillShotInterior: 79,
                    skillSteal: 64,
                    stateEnergy: 80,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 2,
                    yearsLeague: 60,
                },
                '455': {
                    age: 27,
                    draft: 0,
                    experience: 0,
                    id: 455,
                    loyalty: 5,
                    name: '大卫-斯托克顿',
                    numsChampion: 0,
                    positionFirst: 1,
                    positionSecond: 2,
                    potential: 5,
                    salary: 1540000,
                    skillAverage: 78,
                    skillBlock: 75,
                    skillPass: 73,
                    skillPhysique: 75,
                    skillRebound: 68,
                    skillShotExterior: 72,
                    skillShotFree: 77,
                    skillShotInterior: 72,
                    skillSteal: 74,
                    stateEnergy: 86,
                    stateInjury: 0,
                    team: 22,
                    yearsContract: 1,
                    yearsLeague: 75,
                },
                '457': {
                    age: 22,
                    draft: 201629,
                    experience: 0,
                    id: 457,
                    loyalty: 4,
                    name: '德章泰-穆雷',
                    numsChampion: 0,
                    positionFirst: 2,
                    positionSecond: 1,
                    potential: 8,
                    salary: 1930000,
                    skillAverage: 69,
                    skillBlock: 61,
                    skillPass: 63,
                    skillPhysique: 61,
                    skillRebound: 79,
                    skillShotExterior: 75,
                    skillShotFree: 60,
                    skillShotInterior: 71,
                    skillSteal: 66,
                    stateEnergy: 84,
                    stateInjury: 0,
                    team: 20,
                    yearsContract: 2,
                    yearsLeague: 61,
                },
                '463': {
                    age: 40,
                    draft: 199901,
                    experience: 0,
                    id: 463,
                    loyalty: 5,
                    name: '埃尔顿-布兰德',
                    numsChampion: 0,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 10,
                    salary: 0,
                    skillAverage: 71,
                    skillBlock: 64,
                    skillPass: 69,
                    skillPhysique: 60,
                    skillRebound: 60,
                    skillShotExterior: 67,
                    skillShotFree: 84,
                    skillShotInterior: 72,
                    skillSteal: 66,
                    stateEnergy: 75,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 60,
                    yearsLeague: 20,
                },
                '466': {
                    age: 40,
                    draft: 199617,
                    experience: 0,
                    id: 466,
                    loyalty: 3,
                    name: '杰梅因-奥尼尔',
                    numsChampion: 0,
                    positionFirst: 5,
                    positionSecond: 4,
                    potential: 10,
                    salary: 0,
                    skillAverage: 68,
                    skillBlock: 68,
                    skillPass: 67,
                    skillPhysique: 60,
                    skillRebound: 60,
                    skillShotExterior: 66,
                    skillShotFree: 76,
                    skillShotInterior: 75,
                    skillSteal: 64,
                    stateEnergy: 81,
                    stateInjury: 0,
                    team: -1,
                    yearsContract: 60,
                    yearsLeague: 20,
                },
                '473': {
                    age: 39,
                    draft: 199832,
                    experience: 0,
                    id: 473,
                    loyalty: 4,
                    name: '拉沙德-刘易斯',
                    numsChampion: 1,
                    positionFirst: 3,
                    positionSecond: 4,
                    potential: 10,
                    salary: 605397,
                    skillAverage: 73,
                    skillBlock: 63,
                    skillPass: 77,
                    skillPhysique: 61,
                    skillRebound: 61,
                    skillShotExterior: 76,
                    skillShotFree: 82,
                    skillShotInterior: 72,
                    skillSteal: 64,
                    stateEnergy: 78,
                    stateInjury: 0,
                    team: 17,
                    yearsContract: 61,
                    yearsLeague: 19,
                },
            },
            offSeason: {
                round1: {
                    finished: false,
                    pairs: []
                },
                round2: {
                    finished: false,
                    pairs: []
                },
                semi: {
                    finished: false,
                    pairs: []
                },
                final: {
                    finished: false,
                    pairs: []
                }
            },
            followList: [],
            userTeam: '',
            userTeamId: '',
            currentSeason: 2018,
            currentDay: 1,
            showState: ShowState.News,
            nextPlayerId: 474,
            matchNum: 0,
        }
        this.prepareGameData(result);
        return result;
    };

    public static prepareGameData(gameData: any): any {
        const players = gameData.players;
        for(let i in players) {
            gameData.players[i].regMaxScore = 0;
            gameData.players[i].regMaxAssist = 0;
            gameData.players[i].regMaxSteal = 0;
            gameData.players[i].regMaxBlock = 0;
            gameData.players[i].regMaxRebound = 0;
            gameData.players[i].regMaxTurnover = 0;
            gameData.players[i].offMaxScore = 0;
            gameData.players[i].offMaxAssist = 0;
            gameData.players[i].offMaxSteal = 0;
            gameData.players[i].offMaxBlock = 0;
            gameData.players[i].offMaxRebound = 0;
            gameData.players[i].offMaxTurnover = 0;
            gameData.players[i].totalRegGameNum = 0;
            gameData.players[i].seasonRegGameNum = 0;
            gameData.players[i].totalOffGameNum = 0;
            gameData.players[i].seasonOffGameNum = 0;
            gameData.players[i].totalRegScore = 0;
            gameData.players[i].totalRegAssist = 0;
            gameData.players[i].totalRegSteal = 0;
            gameData.players[i].totalRegBlock = 0;
            gameData.players[i].totalRegRebound = 0;
            gameData.players[i].totalRegTurnover = 0;
            gameData.players[i].totalRegTime = 0;
            gameData.players[i].totalRegFoul = 0;
            gameData.players[i].seasonRegScore = 0;
            gameData.players[i].seasonRegAssist = 0;
            gameData.players[i].seasonRegSteal = 0;
            gameData.players[i].seasonRegBlock = 0;
            gameData.players[i].seasonRegRebound = 0;
            gameData.players[i].seasonRegTurnover = 0;
            gameData.players[i].totalOffScore = 0;
            gameData.players[i].totalOffAssist = 0;
            gameData.players[i].totalOffSteal = 0;
            gameData.players[i].totalOffBlock = 0;
            gameData.players[i].totalOffRebound = 0;
            gameData.players[i].totalOffTurnover = 0;
            gameData.players[i].totalOffTime = 0;
            gameData.players[i].totalOffFoul = 0;
            gameData.players[i].seasonOffScore = 0;
            gameData.players[i].seasonOffAssist = 0;
            gameData.players[i].seasonOffSteal = 0;
            gameData.players[i].seasonOffBlock = 0;
            gameData.players[i].seasonOffRebound = 0;
            gameData.players[i].seasonOffTurnover = 0;
            gameData.players[i].seasonRegTime = 0;
            gameData.players[i].seasonRegFoul = 0;
            gameData.players[i].seasonRegClose = 0;
            gameData.players[i].seasonRegCloseIn = 0;
            gameData.players[i].seasonRegMiddle = 0;
            gameData.players[i].seasonRegMiddleIn = 0;
            gameData.players[i].seasonRegThree = 0;
            gameData.players[i].seasonRegThreeIn = 0;
            gameData.players[i].seasonRegFree = 0;
            gameData.players[i].seasonRegFreeIn = 0;
            gameData.players[i].seasonOffClose = 0;
            gameData.players[i].seasonOffCloseIn = 0;
            gameData.players[i].seasonOffMiddle = 0;
            gameData.players[i].seasonOffMiddleIn = 0;
            gameData.players[i].seasonOffThree = 0;
            gameData.players[i].seasonOffThreeIn = 0;
            gameData.players[i].seasonOffFree = 0;
            gameData.players[i].seasonOffFreeIn = 0;
            gameData.players[i].seasonOffTime = 0;
            gameData.players[i].seasonOffFoul = 0;
            gameData.players[i].carryWinNum = 0;
            gameData.players[i].lastSkillAverage = gameData.players[i].skillAverage;
            gameData.players[i].skillAttack = SkillCalculator.getAverageForPosition(players[i].positionFirst, true, false, i, gameData);
            gameData.players[i].skillDefense = SkillCalculator.getAverageForPosition(players[i].positionFirst, false, true, i, gameData);
            let teamId = gameData.players[i].team;
            if(teamId !== undefined && teamId >= 0) {
                gameData.teams[teamId].players.push(i);
            }
        }
        for(let i = 0;i<30;i++) {
            gameData.teams[i].championNum = 0;
            gameData.teams[i].cores = [];
            gameData.teams[i].starterPG = -1;
            gameData.teams[i].starterSG = -1;
            gameData.teams[i].starterSF = -1;
            gameData.teams[i].starterPF = -1;
            gameData.teams[i].starterC = -1;
            gameData.teams[i].bench = [];
            gameData.teams[i].dnp = [];
            gameData.teams[i].currentWin = 0;
            gameData.teams[i].currentLost = 0;
            gameData.lockLineup = false;
        }
        this.resetOffSeasonData(gameData);
    }

    public static setCore(playerId: any, gameData: any) {
        playerId += '';
        gameData.lockLineup = true;
        const teamId = gameData.players[playerId].team;
        const team = gameData.teams[teamId];
        if(team.cores.length < 3) {
            gameData.teams[teamId].cores.push(playerId + '');
        }else {
            gameData.teams[teamId].cores.splice(2, 1, playerId + '');
        }
        if(team.dnp.includes(playerId + '')) {
            this.setPlayerRole(playerId, 'bench', gameData);
        }
        showPlayerInfo(playerId);
    }

    public static unsetCore(playerId: any, gameData: any) {
        playerId += '';
        gameData.lockLineup = true;
        const teamId = gameData.players[playerId].team;
        const team = gameData.teams[teamId];
        gameData.teams[teamId].cores.splice(team.cores.indexOf(playerId + ''), 1);
        showPlayerInfo(playerId);
    }

    private static removeRole(playerId: any, gameData: any) {
        playerId += '';
        const teamId = gameData.players[playerId].team;
        const team = gameData.teams[teamId];
        playerId += '';
        if(team.starterPG + '' == playerId + '') {
            console.log('hhhhhher')
            gameData.teams[teamId].starterPG = -1;
            console.log(gameData.teams[teamId].starterPG)
        }else if(team.starterSG == playerId) {
            gameData.teams[teamId].starterSG = -1;
        }else if(team.starterSF == playerId) {
            gameData.teams[teamId].starterSF = -1;
        }else if(team.starterPF == playerId) {
            gameData.teams[teamId].starterPF = -1;
        }else if(team.starterC == playerId) {
            gameData.teams[teamId].starterC = -1;
        }else if(team.dnp.includes(playerId + '')) {
            gameData.teams[teamId].dnp.splice(team.dnp.indexOf(playerId + ''), 1)
        }else if(team.bench.includes(playerId + '')) {
            gameData.teams[teamId].bench.splice(team.bench.indexOf(playerId + ''), 1)
        }
        console.log(team.dnp)
        console.log(team.bench)
    }

    public static setPlayerRole(playerId: any, role: any, gameData: any) {
        playerId += '';
        gameData.lockLineup = true;
        const teamId = gameData.players[playerId].team;
        this.removeRole(playerId, gameData);
        if(role == 'starterPG') {
            if(gameData.teams[teamId].starterPG != -1) {
                gameData.teams[teamId].bench.push(gameData.teams[teamId].starterPG + '');
            }
            gameData.teams[teamId].starterPG = playerId;
        }else if(role == 'starterSG') {
            if(gameData.teams[teamId].starterSG != -1) {
                gameData.teams[teamId].bench.push(gameData.teams[teamId].starterSG + '');
            }
            gameData.teams[teamId].starterSG = playerId;
        }else if(role == 'starterSF') {
            if(gameData.teams[teamId].starterSF != -1) {
                gameData.teams[teamId].bench.push(gameData.teams[teamId].starterSF + '');
            }
            gameData.teams[teamId].starterSF = playerId;
        }else if(role == 'starterPF') {
            if(gameData.teams[teamId].starterPF != -1) {
                gameData.teams[teamId].bench.push(gameData.teams[teamId].starterPF + '');
            }
            gameData.teams[teamId].starterPF = playerId;
        }else if(role == 'starterC') {
            if(gameData.teams[teamId].starterC != -1) {
                gameData.teams[teamId].bench.push(gameData.teams[teamId].starterC + '');
            }
            gameData.teams[teamId].starterC = playerId;
        }else if(role == 'dnp') {
            if(gameData.teams[teamId].cores.includes(playerId + '')) {
                this.unsetCore(playerId, gameData);
            }
            gameData.teams[teamId].dnp.push(playerId + '');
        }else if(role == 'bench') {
            gameData.teams[teamId].bench.push(playerId + '');
        }
        console.log(gameData.teams[teamId]);
    }

    private static playerGrow(id: any, gameData: any): any {
        let potential = gameData.players[id].potential;
        let ageSub = 30 - gameData.players[id].age;
        if(ageSub > 0) {
            let mul = potential * ageSub;
            let rand = RandomUtil.random(0, 1000);
            if(rand < mul) {
                let rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillBlock += 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillPass += 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillPhysique += 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillRebound += 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillShotExterior += 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillShotFree += 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillShotInterior += 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillSteal += 1;
                }
            }
        }else {
            ageSub = -ageSub;
            let mul = (20 - potential) * ageSub;
            let rand = RandomUtil.random(0, 1000);
            if(rand < mul) {
                let rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillBlock -= 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillPass -= 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillPhysique -= 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillRebound -= 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillShotExterior -= 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillShotFree -= 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillShotInterior -= 1;
                }
                rand = RandomUtil.random(0, 5);
                if(rand == 0) {
                    gameData.players[id].skillSteal -= 1;
                }
            }
        }
        const player = gameData.players[id];
        gameData.players[id].skillAverage = SkillCalculator.getAverageForPosition(player.positionFirst, true, true, id, gameData);
        gameData.players[id].skillAttack = SkillCalculator.getAverageForPosition(player.positionFirst, true, false, id, gameData);
        gameData.players[id].skillDefense = SkillCalculator.getAverageForPosition(player.positionFirst, false, true, id, gameData);
        // let value = Math.random() * 6;
        // if(value < 1) {
        //     gameData.players[id].ability -= 1;
        // } else if(value < 2) {
        //     gameData.players[id].ability += 1;
        // }
        // if(gameData.players[id].ability < 0) {
        //     gameData.players[id].ability = 0;
        // }
    }

    private static setRegularChampion(gameData: any): any {
        const rank = this.getTeamRank(gameData);
        const championId = rank[0].id;
        gameData.teams[championId].regularChampionNum += 1;
        return gameData.teams[championId].name;
    }

    private static setOffSeasonTeams(gameData: any): any {
        const rank = this.getTeamRank(gameData);
        gameData.offSeason.round1.pairs[0].up.team = rank[0].id;
        gameData.offSeason.round1.pairs[0].down.team = rank[15].id;
        gameData.offSeason.round1.pairs[1].up.team = rank[7].id;
        gameData.offSeason.round1.pairs[1].down.team = rank[8].id;
        gameData.offSeason.round1.pairs[2].up.team = rank[4].id;
        gameData.offSeason.round1.pairs[2].down.team = rank[11].id;
        gameData.offSeason.round1.pairs[3].up.team = rank[3].id;
        gameData.offSeason.round1.pairs[3].down.team = rank[12].id;
        gameData.offSeason.round1.pairs[4].up.team = rank[1].id;
        gameData.offSeason.round1.pairs[4].down.team = rank[14].id;
        gameData.offSeason.round1.pairs[5].up.team = rank[6].id;
        gameData.offSeason.round1.pairs[5].down.team = rank[9].id;
        gameData.offSeason.round1.pairs[6].up.team = rank[5].id;
        gameData.offSeason.round1.pairs[6].down.team = rank[10].id;
        gameData.offSeason.round1.pairs[7].up.team = rank[2].id;
        gameData.offSeason.round1.pairs[7].down.team = rank[13].id;
    }

    private static saveGameResult(gameResult: GameResult, gameData: any): any {
        gameData.matches.push(gameResult);
        return gameData.matchNum++;
    }

    private static teamWin(teamId: any, gameData: any) {
        if(gameData.teams[teamId].currentWin > 0) {
            gameData.teams[teamId].currentWin += 1;
        }else {
            gameData.teams[teamId].currentWin = 1;
            gameData.teams[teamId].currentLost = 0;
        }
    }

    private static teamLost(teamId: any, gameData: any) {
        if(gameData.teams[teamId].currentLost > 0) {
            gameData.teams[teamId].currentLost += 1;
        }else {
            gameData.teams[teamId].currentWin = 0;
            gameData.teams[teamId].currentLost = 1;
        }
    }

    public static nextDay(gameData: any): any {
        gameData.showState = ShowState.News;
        if(gameData.currentDay <= Game.regularEndDay) {
            let games = GameSchedule.gamesOfDay(gameData.currentDay);
            let dailyNews = [];
            let maxId: any = 0;
            let maxScore: any = 0;
            for(let i = 0; i < games.length; i ++) {
                let homeTeamId = games[i][0];
                let visitorId = games[i][1];
                let gameResult: GameResult = this.playGameAndGetResult(homeTeamId, visitorId, gameData);
                let matchId = this.saveGameResult(gameResult, gameData);
                let homeTeam = gameData.teams[homeTeamId];
                let visitor = gameData.teams[visitorId];
                const homeTeamName = homeTeam.name;
                const visitorName = visitor.name;
                gameData.teams[homeTeamId].gameNum += 1;
                gameData.teams[visitorId].gameNum += 1;
                let homeScore;
                let visitorScore;
                let homePScores :any;
                let visitorPScores: any;
                if(gameResult.winnerId == homeTeamId) {
                    gameData.teams[homeTeamId].winNum += 1;
                    this.teamWin(homeTeamId, gameData);
                    this.teamLost(visitorId, gameData);
                    homeScore = gameResult.winnerPoint;
                    visitorScore = gameResult.loserPoint;
                    homePScores = gameResult.winnerScores;
                    visitorPScores = gameResult.loserScores;
                }else {
                    gameData.teams[visitorId].winNum += 1;
                    this.teamLost(homeTeamId, gameData);
                    this.teamWin(visitorId, gameData);
                    homeScore = gameResult.loserPoint;
                    visitorScore = gameResult.winnerPoint;
                    visitorPScores = gameResult.winnerScores;
                    homePScores = gameResult.loserScores;
                }
                for(let s in homePScores) {
                    if(homePScores[s].score > maxScore) {
                        maxScore = homePScores[s].score;
                        maxId = s;
                    }
                }
                for(let s in visitorPScores) {
                    if(visitorPScores[s].score > maxScore) {
                        maxScore = visitorPScores[s].score;
                        maxId = s;
                    }
                }
                if(gameResult.winnerId == homeTeamId) {
                    let homeMvpNum = 0;
                    let homeMvpId = 0;
                    for(let i = 0; i < homeTeam.players.length; i++) {
                        let p = (<any>gameResult.winnerScores)[homeTeam.players[i]];
                        let total = p.score + p.rebound + p.assist + p.steal + p.block - p.turnover;
                        if(total > homeMvpNum) {
                            homeMvpNum = total;
                            homeMvpId = homeTeam.players[i];
                        }
                    }
                    gameData.players[homeMvpId].carryWinNum += 1;
                }else {
                    let visitorMvpNum = 0;
                    let visitorMvpId = 0;
                    for(let i = 0; i < visitor.players.length; i++) {
                        let p = (<any>gameResult.winnerScores)[visitor.players[i]];
                        let total = p.score + p.rebound + p.assist + p.steal + p.block - p.turnover;
                        if(total > visitorMvpNum) {
                            visitorMvpNum = total;
                            visitorMvpId = visitor.players[i];
                        }
                    }
                    gameData.players[visitorMvpId].carryWinNum += 1;
                }
                let insertText = ''
                if(gameResult.winnerId == gameData.userTeamId) {
                    insertText = 'style="color: green"';
                }else if((gameResult.homeTeamId == gameData.userTeamId || gameResult.visitorId == gameData.userTeamId) && gameResult.winnerId != gameData.userTeamId){
                    insertText = 'style="color: red"';
                }
                dailyNews.push(`<span ${insertText}>${homeTeamName}(主)${homeScore}:${visitorScore}(客)${visitorName}</span>
                            <span style='color: blue;cursor: pointer;' onclick='showMatch(${matchId})'>[查看]</span>`);
            }
            if(maxId != 0) {
                dailyNews.push(`今日数据: ${gameData.players[maxId].name}狂砍${maxScore}分！`);
            }
            if(dailyNews.length > 0) {
                gameData.news.push({
                    season: gameData.currentSeason,
                    day: gameData.currentDay,
                    content: dailyNews.join("<br />")
                })
            }
            gameData.currentDay += 1;
        } else if(gameData.currentDay === Game.regularEndDay + 1){
            let chamName = this.setRegularChampion(gameData);
            this.setOffSeasonTeams(gameData);
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: '常规赛冠军是' + chamName + '!, 请查看季后赛名单',
            });
            let mvpInfo = this.setRegularMvp(gameData);
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: mvpInfo,
            });
            gameData.currentDay += 1;
        }else if(gameData.currentDay < Game.regularEndDay + 57) {
            this.offSeasonDay(gameData.currentDay - Game.regularEndDay - 2, gameData);
            gameData.currentDay += 1;
        }else if(gameData.currentDay === Game.regularEndDay + 57) {
            this.manageRetire(gameData);
            gameData.currentDay += 1;
        }else if(gameData.currentDay === Game.regularEndDay + 58) {
            for(let i = 0; i < 30; i ++) {
                PlayerGenerator.getRandomPlayer(i, gameData);
            }
            gameData.currentDay += 1;
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: `你获得了一名新秀~快去队里查看吧~`,
            });
        }else if(gameData.currentDay === Game.regularEndDay + 59) {
            gameData.currentDay = 1;
            gameData.currentSeason += 1;
            for(let i = 0; i<30;i++) {
                gameData.teams[i].winNum = 0;
                gameData.teams[i].gameNum = 0;
                gameData.teams[i].currentWin = 0;
                gameData.teams[i].currentLost = 0;
            }
            gameData.news = [];
            gameData.matches = [];
            gameData.matchNum = 0;
            this.resetOffSeasonData(gameData);
            this.resetSeasonStats(gameData);
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: '第' + gameData.currentSeason + '赛季开始了',
            });    
        }
        for(let id in gameData.players) {
            this.playerGrow(id, gameData);
        }
    }

    private static setRegularMvp(gameData: any) {
        let rank = this.getTeamRank(gameData);
        let max = -1;
        let maxP;
        let theTeam;
        for(let i = 0; i < 6; i++) {
            const team = rank[i];
            const players = team.players;
            for(let j = 0; j < players.length; j++) {
                const player = gameData.players[players[j]];
                if(player.carryWinNum > max) {
                    max = player.carryWinNum;
                    maxP = player;
                    theTeam = i;
                }
            }
        }
        const avgScore = (maxP.seasonRegScore/maxP.seasonRegGameNum).toFixed(2);
        const avgRebound = (maxP.seasonRegRebound/maxP.seasonRegGameNum).toFixed(2);
        const avgAssist = (maxP.seasonRegAssist/maxP.seasonRegGameNum).toFixed(2);
        const avgSteal = (maxP.seasonRegSteal/maxP.seasonRegGameNum).toFixed(2);
        const avgBlock = (maxP.seasonRegBlock/maxP.seasonRegGameNum).toFixed(2);
        return `
        常规赛Mvp: ${maxP.name}!<br />
        球队排名: ${theTeam + 1}<br/ >
        数据：${avgScore}分${avgRebound}板${avgAssist}助${avgSteal}断${avgBlock}帽
        `
    }
    
    public static followPlayer(playerId: any, gameData: any) {
        gameData.followList.push(playerId);
        showPlayerInfo(playerId);
    }

    public static unfollowPlayer(playerId: any, gameData: any) {
        gameData.followList.splice(gameData.followList.indexOf(playerId), 1);
        showPlayerInfo(playerId);
    }

    private static manageRetire(gameData: any) {
        const players = gameData.players;
        const maybeList = [];
        const retireNewsList = [];
        for(let id in players) {
            if(players[id].team == -2) {
                continue;
            }
            if(players[id].skillAverage < 75 && players[id].age >= 36) {
                maybeList.push(id);
            }else if(players[id].skillAverage < 70 && players[id].age >= 30) {
                maybeList.push(id);
            }else if(players[id].skillAverage < 50 && players[id].team == -1) {
                maybeList.push(id);
            }
        }
        for(let i = 0; i < maybeList.length; i ++) {
            let id = maybeList[i];
            console.log(id);
            let rand = RandomUtil.random(0, 3);
            if(rand == 0) {
                const player = gameData.players[id];
                if(player.team != -1) {
                    const team = gameData.teams[player.team];
                    retireNewsList.push(`${team.name}的${player.name}退役，${player.age}岁`);
                    gameData.teams[player.team].players.splice(team.players.indexOf(id), 1);
                    this.removeRole(id, gameData);
                }else {
                    retireNewsList.push(`自由球员${player.name}退役，${player.age}岁`);
                }
                gameData.players[id].team = -2;
            }
        }
        gameData.news.push({
            season: gameData.currentSeason,
            day: gameData.currentDay,
            content: `本赛季退役的球员： ${retireNewsList.length}<br />${retireNewsList.join('<br />')}`,
        }); 
    }

    private static resetSeasonStats(gameData: any) {
        for(let id in gameData.players) {
            gameData.players[id].age += 1;
            gameData.players[id].seasonRegClose = 0;
            gameData.players[id].seasonRegCloseIn = 0;
            gameData.players[id].seasonRegMiddle = 0;
            gameData.players[id].seasonRegMiddleIn = 0;
            gameData.players[id].seasonRegThree = 0;
            gameData.players[id].seasonRegThreeIn = 0;
            gameData.players[id].seasonRegFree = 0;
            gameData.players[id].seasonRegFreeIn = 0;
            gameData.players[id].seasonRegScore = 0;
            gameData.players[id].seasonRegGameNum = 0;
            gameData.players[id].seasonRegRebound = 0;
            gameData.players[id].seasonRegSteal = 0;
            gameData.players[id].seasonRegAssist = 0;
            gameData.players[id].seasonRegTurnover = 0;
            gameData.players[id].seasonRegBlock = 0;
            gameData.players[id].seasonRegTime = 0;
            gameData.players[id].seasonRegFoul = 0;
            gameData.players[id].seasonOffClose = 0;
            gameData.players[id].seasonOffCloseIn = 0;
            gameData.players[id].seasonOffMiddle = 0;
            gameData.players[id].seasonOffMiddleIn = 0;
            gameData.players[id].seasonOffThree = 0;
            gameData.players[id].seasonOffThreeIn = 0;
            gameData.players[id].seasonOffFree = 0; 
            gameData.players[id].seasonOffFreeIn = 0;
            gameData.players[id].seasonOffScore = 0;
            gameData.players[id].seasonOffGameNum = 0;
            gameData.players[id].seasonOffRebound = 0;
            gameData.players[id].seasonOffSteal = 0;
            gameData.players[id].seasonOffAssist = 0;
            gameData.players[id].seasonOffTurnover = 0;
            gameData.players[id].seasonOffBlock = 0;
            gameData.players[id].seasonOffTime = 0;
            gameData.players[id].seasonOffFoul = 0;
            gameData.players[id].carryWinNum = 0;
            gameData.players[id].lastSkillAverage = gameData.players[id].skillAverage;
        }
    }

    private static resetOffSeasonData(gameData: any) {
        gameData.offSeason.round1.pairs = []
        gameData.offSeason.round2.pairs = []
        gameData.offSeason.semi.pairs = []
        gameData.offSeason.final.pairs = []
        for(let i = 0;i<8;i++) {
            let pair = {
                finished: false,
                gameNum: 0,
                up: {
                    team: -1,
                    win: 0,
                },
                down: {
                    team: -1,
                    win: 0,
                }
            };
            gameData.offSeason.round1.pairs.push(pair);
        }
        for(let i = 0;i<4;i++) {
            let pair = {
                finished: false,
                gameNum: 0,
                up: {
                    team: -1,
                    win: 0,
                },
                down: {
                    team: -1,
                    win: 0,
                }
            };
            gameData.offSeason.round2.pairs.push(pair);
        }
        for(let i = 0;i<2;i++) {
            let pair = {
                finished: false,
                gameNum: 0,
                up: {
                    team: -1,
                    win: 0,
                },
                down: {
                    team: -1,
                    win: 0,
                }
            };
            gameData.offSeason.semi.pairs.push(pair);
        }
        let pair = {
            finished: false,
            gameNum: 0,
            up: {
                team: -1,
                win: 0,
            },
            down: {
                team: -1,
                win: 0,
            }
        };
        gameData.offSeason.final.pairs.push(pair);
    }

    private static offSeasonDay(dayNum: number, gameData: any): void {
        let todayGames: any = Game.offSeasonGames[dayNum];
        let dailyNews = [];
        for(let i = 0;i<todayGames.length; i++) {
            let theGame = todayGames[i];
            let thePair = gameData.offSeason[theGame.round].pairs[theGame.pair];
            if(thePair.finished) {
                continue;
            }
            let homeTeamId: number;
            let visitorId: number;
            if(theGame.home === 'up') {
                homeTeamId = thePair.up.team;
                visitorId = thePair.down.team;
            }else {
                homeTeamId = thePair.down.team;
                visitorId = thePair.up.team;
            }
            let gameResult: GameResult = this.playGameAndGetResult(homeTeamId, visitorId, gameData);
            let matchId = this.saveGameResult(gameResult, gameData);
            let homeTeamName = gameData.teams[homeTeamId].name;
            let visitorName = gameData.teams[visitorId].name;
            let insertText = ''
            if(gameResult.winnerId == gameData.userTeamId) {
                insertText = 'style="color: green"';
            }else if((gameResult.homeTeamId == gameData.userTeamId || gameResult.visitorId == gameData.userTeamId) && gameResult.winnerId != gameData.userTeamId){
                insertText = 'style="color: red"';
            }
            if(homeTeamId == gameResult.winnerId) {
                this.teamWin(homeTeamId, gameData);
                this.teamLost(visitorId, gameData);
                if(homeTeamId == thePair.up.team) {
                    dailyNews.push(`<span ${insertText}>${homeTeamName}(主)${gameResult.winnerPoint}:${gameResult.loserPoint}(客)${visitorName}</span>
                    <span style='color: blue;cursor: pointer;' onclick='showMatch(${matchId})'>[查看]</span>`);
                }else {
                    dailyNews.push(`<span ${insertText}>${visitorName}(客)${gameResult.loserPoint}:${gameResult.winnerPoint}(主)${homeTeamName}</span>
                    <span style='color: blue;cursor: pointer;' onclick='showMatch(${matchId})'>[查看]</span>`);
                }
            }else {
                this.teamLost(homeTeamId, gameData);
                this.teamWin(visitorId, gameData);
                if(homeTeamId == thePair.up.team) {
                    dailyNews.push(`<span ${insertText}>${homeTeamName}(主)${gameResult.loserPoint}:${gameResult.winnerPoint}(客)${visitorName}</span>
                    <span style='color: blue;cursor: pointer;' onclick='showMatch(${matchId})'>[查看]</span>`);
                }else {
                    dailyNews.push(`<span ${insertText}>${visitorName}(客)${gameResult.winnerPoint}:${gameResult.loserPoint}(主)${homeTeamName}</span>
                    <span style='color: blue;cursor: pointer;' onclick='showMatch(${matchId})'>[查看]</span>`);
                }
            }
            if(thePair.up.team == gameResult.winnerId) {
                gameData.offSeason[theGame.round].pairs[theGame.pair].up.win += 1;
                if(gameData.offSeason[theGame.round].pairs[theGame.pair].up.win == 4) {
                    gameData.offSeason[theGame.round].pairs[theGame.pair].finished = true;
                    this.upgradeToNextRound(theGame.round, theGame.pair, 'up', gameData);
                }
            }else {
                gameData.offSeason[theGame.round].pairs[theGame.pair].down.win += 1;
                if(gameData.offSeason[theGame.round].pairs[theGame.pair].down.win == 4) {
                    gameData.offSeason[theGame.round].pairs[theGame.pair].finished = true;
                    this.upgradeToNextRound(theGame.round, theGame.pair, 'down', gameData);
                }
            }
        }
        if(dailyNews.length > 0) {
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: dailyNews.join("<br />"),
            });
        }
    }

    private static upgradeToNextRound(round: any, pair: any, side: any, gameData: any) {
        let nextPair = Math.floor(pair / 2);
        let testVal = pair - nextPair * 2;
        let nextSide = 'up';
        let teamId = gameData.offSeason[round].pairs[pair][side].team;
        if(testVal > 0) {
            nextSide = 'down';
        }
        if(round == 'round1') {
            gameData.offSeason['round2'].pairs[nextPair][nextSide].team = teamId;
        }else if(round == 'round2') {
            gameData.offSeason['semi'].pairs[nextPair][nextSide].team = teamId;
        }else if(round == 'semi') {
            gameData.offSeason['final'].pairs[nextPair][nextSide].team = teamId;
        }else if(round == 'final') {
            gameData.teams[teamId].championNum += 1;
            gameData.news.push({
                season: gameData.currentSeason,
                day: gameData.currentDay,
                content: `恭喜${gameData.teams[teamId].name}喜提总冠军！`,
            });
        }
    }

    private static playGameAndGetResult(homeTeamId: any, visitorId: any, gameData: any): GameResult {
        let htStat = this.calcTeamScores(homeTeamId, gameData);
        let viStat = this.calcTeamScores(visitorId, gameData);
        this.calcTeamStats(homeTeamId, gameData, htStat);
        this.calcTeamStats(visitorId, gameData, viStat);
        while(htStat.total == viStat.total) {
            let otHome = this.calcTeamScores(homeTeamId, gameData, 15);
            htStat.total += otHome.total;
            for(let i in otHome.pScores) {
                for(let j in otHome.pScores[i]) {
                    htStat.pScores[i][j] += otHome.pScores[i][j];
                }
            }
            let otVisitor = this.calcTeamScores(visitorId, gameData, 15);
            viStat.total += otVisitor.total;
            for(let i in otVisitor.pScores) {
                for(let j in otVisitor.pScores[i]) {
                    viStat.pScores[i][j] += otVisitor.pScores[i][j];
                }
            }
        }
        if(gameData.currentDay <= this.regularEndDay) {
            for(let id in htStat.pScores) {
                gameData.players[id].seasonRegClose += htStat.pScores[id].closeNum;
                gameData.players[id].seasonRegCloseIn += htStat.pScores[id].closeIn;
                gameData.players[id].seasonRegMiddle += htStat.pScores[id].middleNum;
                gameData.players[id].seasonRegMiddleIn += htStat.pScores[id].middleIn;
                gameData.players[id].seasonRegThree += htStat.pScores[id].outsideNum;
                gameData.players[id].seasonRegThreeIn += htStat.pScores[id].outsideIn;
                gameData.players[id].seasonRegFree += htStat.pScores[id].freeNum;
                gameData.players[id].seasonRegFreeIn += htStat.pScores[id].freeIn;
                gameData.players[id].seasonRegScore += htStat.pScores[id].score;
                gameData.players[id].totalRegScore += htStat.pScores[id].score;
                gameData.players[id].seasonRegGameNum += 1;
                gameData.players[id].totalRegGameNum += 1;
                if(htStat.pScores[id].score > gameData.players[id].regMaxScore) {
                    gameData.players[id].regMaxScore = htStat.pScores[id].score;
                }
            }
            for(let id in viStat.pScores) {
                gameData.players[id].seasonRegClose += viStat.pScores[id].closeNum;
                gameData.players[id].seasonRegCloseIn += viStat.pScores[id].closeIn;
                gameData.players[id].seasonRegMiddle += viStat.pScores[id].middleNum;
                gameData.players[id].seasonRegMiddleIn += viStat.pScores[id].middleIn;
                gameData.players[id].seasonRegThree += viStat.pScores[id].outsideNum;
                gameData.players[id].seasonRegThreeIn += viStat.pScores[id].outsideIn;
                gameData.players[id].seasonRegFree += viStat.pScores[id].freeNum;
                gameData.players[id].seasonRegFreeIn += viStat.pScores[id].freeIn;
                gameData.players[id].seasonRegScore += viStat.pScores[id].score;
                gameData.players[id].totalRegScore += viStat.pScores[id].score;
                gameData.players[id].seasonRegGameNum += 1;
                gameData.players[id].totalRegGameNum += 1;
                if(viStat.pScores[id].score > gameData.players[id].regMaxScore) {
                    gameData.players[id].regMaxScore = viStat.pScores[id].score;
                }
            }
        }else {
            for(let id in htStat.pScores) {
                gameData.players[id].seasonOffClose += htStat.pScores[id].closeNum;
                gameData.players[id].seasonOffCloseIn += htStat.pScores[id].closeIn;
                gameData.players[id].seasonOffMiddle += htStat.pScores[id].middleNum;
                gameData.players[id].seasonOffMiddleIn += htStat.pScores[id].middleIn;
                gameData.players[id].seasonOffThree += htStat.pScores[id].outsideNum;
                gameData.players[id].seasonOffThreeIn += htStat.pScores[id].outsideIn;
                gameData.players[id].seasonOffFree += htStat.pScores[id].freeNum;
                gameData.players[id].seasonOffFreeIn += htStat.pScores[id].freeIn;
                gameData.players[id].seasonOffScore += htStat.pScores[id].score;
                gameData.players[id].totalOffScore += htStat.pScores[id].score;
                gameData.players[id].seasonOffGameNum += 1;
                gameData.players[id].totalOffGameNum += 1;
                if(htStat.pScores[id].score > gameData.players[id].offMaxScore) {
                    gameData.players[id].offMaxScore = htStat.pScores[id].score;
                }
            }
            for(let id in viStat.pScores) {
                gameData.players[id].seasonOffClose += viStat.pScores[id].closeNum;
                gameData.players[id].seasonOffCloseIn += viStat.pScores[id].closeIn;
                gameData.players[id].seasonOffMiddle += viStat.pScores[id].middleNum;
                gameData.players[id].seasonOffMiddleIn += viStat.pScores[id].middleIn;
                gameData.players[id].seasonOffThree += viStat.pScores[id].outsideNum;
                gameData.players[id].seasonOffThreeIn += viStat.pScores[id].outsideIn;
                gameData.players[id].seasonOffFree += viStat.pScores[id].freeNum;
                gameData.players[id].seasonOffFreeIn += viStat.pScores[id].freeIn;
                gameData.players[id].seasonOffScore += viStat.pScores[id].score;
                gameData.players[id].totalOffScore += viStat.pScores[id].score;
                gameData.players[id].seasonOffGameNum += 1;
                gameData.players[id].totalOffGameNum += 1;
                if(viStat.pScores[id].score > gameData.players[id].offMaxScore) {
                    gameData.players[id].offMaxScore = viStat.pScores[id].score;
                }
            }
        }
        if(htStat.total > viStat.total) {
            return new GameResult(homeTeamId, homeTeamId, visitorId, htStat.total, viStat.total, htStat.pScores, viStat.pScores);
        }else {
            return new GameResult(visitorId, homeTeamId, visitorId, viStat.total, htStat.total, viStat.pScores, htStat.pScores);
        }
    }

    private static calcTeamStats(teamId: any, gameData: any, stat: any): any {
        const starter = TeamMatchUtil.getStarters(teamId, gameData);
        const bench = TeamMatchUtil.getBenchPlayers(teamId, gameData);
        if(starter.length != 5) {
            alert("球队首发阵容错误！请检查！");
        }
        //Steal, Block, Reboud, Assist, Turnover
        function stealModifier(place: number, skill: number): number {
            if(place == 0) {
                return 0.03 * skill + 0.02;
            }else if(place == 1) {
                return 0.02 * skill + 0.02;
            }else if(place == 2) {
                return 0.02 * skill + 0.02;
            }else if(place == 3) {
                return 0.01 * skill + 0.01;
            }else {
                return 0.01 * skill + 0.01;
            }
        }
        function blockModifier(place: number, skill: number) {
            if(place == 0) {
                return 0.01 * skill + 0.01;
            }else if(place == 1) {
                return 0.01 * skill + 0.01;
            }else if(place == 2) {
                return 0.02 * skill + 0.01;
            }else if(place == 3) {
                return 0.02 * skill + 0.015;
            }else {
                return 0.02 * skill + 0.02;
            }
        }
        function reboundModifier(place: number, skill: number) {
            if(place == 0) {
                return 0.01 * skill + 0.01;
            }else if(place == 1) {
                return 0.01 * skill + 0.02;
            }else if(place == 2) {
                return 0.015 * skill + 0.03;
            }else if(place == 3) {
                return 0.02 * skill + 0.03;
            }else {
                return 0.02 * skill + 0.03;
            }
        }
        function assistModifier(place: number, skill: number) {
            if(place == 0) {
                return 0.05 * skill + 0.3;
            }else if(place == 1) {
                return 0.04 * skill + 0.3;
            }else if(place == 2) {
                return 0.02 * skill + 0.3;
            }else if(place == 3) {
                return 0.02 * skill + 0.2;
            }else {
                return 0.02 * skill + 0.1;
            }
        }
        function turnoverModifier(place: number, skill: number) {
            if(place == 0) {
                return 0.02 * skill + 0.01;
            }else if(place == 1) {
                return 0.02 * skill + 0.01;
            }else if(place == 2) {
                return 0.02 * skill + 0.01;
            }else if(place == 3) {
                return 0.02 * skill + 0.01;
            }else {
                return 0.02 * skill + 0.01;
            }
        }
        for(let i = 0; i < 5; i ++) {
            const p = gameData.players[starter[i]];
            const ast = Math.round(assistModifier(i, p.skillPass) * RandomUtil.random(0, 4));
            const rbd = Math.round(reboundModifier(i, p.skillRebound) * RandomUtil.random(0, 11));
            const tov = Math.round(turnoverModifier(i, 200 - p.skillPass) * RandomUtil.random(0, 3));
            const stl = Math.round(stealModifier(i, p.skillSteal) * RandomUtil.random(0, 3));
            const blk = Math.round(blockModifier(i, p.skillBlock) * RandomUtil.random(0, 3));
            const time = Math.round(RandomUtil.random(30, 44));
            const foul = Math.round(RandomUtil.random(0, 6));
            stat.pScores[starter[i]].assist = ast;
            stat.pScores[starter[i]].rebound = rbd;
            stat.pScores[starter[i]].turnover = tov;
            stat.pScores[starter[i]].steal = stl;
            stat.pScores[starter[i]].block = blk;
            stat.pScores[starter[i]].time = time;
            stat.pScores[starter[i]].foul = foul;
            if(gameData.currentDay <= this.regularEndDay) {
                p.seasonRegAssist += ast;
                p.seasonRegRebound += rbd;
                p.seasonRegSteal += stl;
                p.seasonRegTurnover += tov;
                p.seasonRegBlock += blk;
                p.seasonRegTime += time;
                p.seasonRegFoul += foul;
                p.totalRegAssist += ast;
                p.totalRegRebound += rbd;
                p.totalRegSteal += stl;
                p.totalRegTurnover += tov;
                p.totalRegBlock += blk;
                p.totalRegTime += time;
                p.totalRegFoul += foul;
            }else {
                p.seasonOffAssist += ast;
                p.seasonOffRebound += rbd;
                p.seasonOffSteal += stl;
                p.seasonOffTurnover += tov;
                p.seasonOffBlock += blk;
                p.seasonOffTime += time;
                p.seasonOffFoul += foul;
                p.totalOffAssist += ast;
                p.totalOffRebound += rbd;
                p.totalOffSteal += stl;
                p.totalOffTurnover += tov;
                p.totalOffBlock += blk;
                p.totalOffTime += time;
                p.totalOffFoul += foul;
            }
        }
        for(let i = 0; i < bench.length; i ++) {
            const p = gameData.players[bench[i]];
            const ast = Math.ceil(assistModifier(p.positionFirst, p.skillPass) * RandomUtil.random(0, 5)*0.3);
            const rbd = Math.ceil(reboundModifier(p.positionFirst, p.skillRebound) * RandomUtil.random(0, 12)*0.3);
            const tov = Math.ceil(turnoverModifier(p.positionFirst, 200 - p.skillPass) * RandomUtil.random(0, 3)*0.3);
            const stl = Math.ceil(stealModifier(p.positionFirst, p.skillSteal) * RandomUtil.random(0, 3)*0.3);
            const blk = Math.ceil(blockModifier(p.positionFirst, p.skillBlock) * RandomUtil.random(0, 3)*0.3);
            const time = Math.round(RandomUtil.random(2, 14));
            const foul = Math.round(RandomUtil.random(0, 6));
            if(!(bench[i] in stat.pScores)) {
                 stat.pScores[bench[i]] = {};
            }
            stat.pScores[bench[i]].assist = ast;
            stat.pScores[bench[i]].rebound = rbd;
            stat.pScores[bench[i]].turnover = tov;
            stat.pScores[bench[i]].steal = stl;
            stat.pScores[bench[i]].block = blk;
            stat.pScores[bench[i]].time = time;
            stat.pScores[bench[i]].foul = foul;
            if(gameData.currentDay <= this.regularEndDay) {
                p.seasonRegAssist += ast;
                p.seasonRegRebound += rbd;
                p.seasonRegSteal += stl;
                p.seasonRegTurnover += tov;
                p.seasonRegBlock += blk;
                p.seasonRegTime += time;
                p.seasonRegFoul += foul;
                p.totalRegAssist += ast;
                p.totalRegRebound += rbd;
                p.totalRegSteal += stl;
                p.totalRegTurnover += tov;
                p.totalRegBlock += blk;
                p.totalRegTime += time;
                p.totalRegFoul += foul;
            }else {
                p.seasonOffAssist += ast;
                p.seasonOffRebound += rbd;
                p.seasonOffSteal += stl;
                p.seasonOffTurnover += tov;
                p.seasonOffBlock += blk;
                p.seasonOffTime += time;
                p.seasonOffFoul += foul;
                p.totalOffAssist += ast;
                p.totalOffRebound += rbd;
                p.totalOffSteal += stl;
                p.totalOffTurnover += tov;
                p.totalOffBlock += blk;
                p.totalOffTime += time;
                p.totalOffFoul += foul;
            }
        }
    }

    private static calcTeamScores(teamId: any, gameData: any, baseNum = 100): any {
        const playerAndNum: any = {};
        const players = gameData.teams[teamId].players;
        let core = TeamMatchUtil.getCorePlayers(teamId, gameData);
        let starter = TeamMatchUtil.getStarters(teamId, gameData);
        function average(players: any) {
            let total = 0;
            for(let i in players) {
                if(players[i] in gameData.players) {
                    total += gameData.players[players[i]].skillAverage;
                }
            }
            return total / players.length;
        }
        let starterAverage = average(starter);
        if(starterAverage < 80) {
            baseNum -= 10;
        }else if(starterAverage < 85) {
            baseNum -= 5;
        }else if(starterAverage > 90) {
            baseNum += 5;
        }
        let bench = TeamMatchUtil.getBenchPlayers(teamId, gameData);
        if(baseNum > 50) {
            if(core.length == 1) {
                let times = RandomUtil.random(12, 25);
                playerAndNum[core[0] + ''] = times;
                baseNum -= times;
            }else {
                for(let i = 0; i < core.length; i++) {
                    let times = RandomUtil.random(7, 16);
                    playerAndNum[core[i] + ''] = times;
                    baseNum -= times;
                }
            }
            for(let i = 0; i < 5; i ++) {
                let times = RandomUtil.random(0, 11);
                if(playerAndNum[starter[i] + ''] != undefined) {
                    playerAndNum[starter[i] + ''] += times;
                }else {
                    playerAndNum[starter[i] + ''] = times;
                }
                baseNum -= times;
            }
            for(let i = 0; i < bench.length; i ++) {
                let times = RandomUtil.random(0, 3);
                if(playerAndNum[bench[i] + ''] != undefined) {
                    playerAndNum[bench[i] + ''] += times;
                }else {
                    playerAndNum[bench[i] + ''] = times;
                }
                baseNum -= times;
                if(baseNum <= 0) {
                    break;
                }
            } 
        }
        while(baseNum > 0) {
            let times = RandomUtil.random(0, 5);
            let index = RandomUtil.random(0, players.length);
            if(playerAndNum[players[index]] != undefined) {
                playerAndNum[players[index]] += times;
            }else {
                playerAndNum[players[index]] = times;
            }
            baseNum -= times;
        }
        let totalScore: any = 0;
        let scores: any = {}
        for(let i in playerAndNum) {
            let pScore: any = this.calcScoreWithTimes(i, playerAndNum[i], gameData);
            totalScore += pScore.score;
            scores[i + ''] = pScore;
        }
        return {
            total: totalScore,
            pScores: scores,
        };
    }

    /**
     * Calc All Stats here
     * @param playerId the player id
     * @param num number of shoot total
     * @param gameData global game data
     */
    private static calcScoreWithTimes(playerId: any, num: any, gameData: any) {
        if(num == 0) {
            return {
                score: 0,
                closeNum: 0,
                closeIn: 0,
                middleNum: 0,
                middleIn: 0,
                outsideNum: 0,
                outsideIn: 0,
                freeNum: 0,
                freeIn: 0,
            };
        }
        const player = gameData.players[playerId];
        let interior = gameData.players[playerId].skillShotInterior;
        let exterior = gameData.players[playerId].skillShotExterior;
        let free = gameData.players[playerId].skillShotFree;
        let closeNum = 0;
        let middleNum = 0;
        let outsideNum = 0;
        let freeNum = Math.floor(num * RandomUtil.random(0, 7) / 10);
        if(gameData.players[playerId].positionFirst <= 2) {
            closeNum = Math.round(num * 0.3);
            let outsideRate = TeamMatchUtil.skillToThreeRate(exterior, player.positionFirst);
            outsideNum = Math.round(num * outsideRate);
            middleNum = num - closeNum - outsideNum;
        }else if(gameData.players[playerId].positionFirst == 3) {
            closeNum = Math.round(num * 0.5);
            middleNum = Math.round(num * 0.2);
            outsideNum = num - closeNum - middleNum;
        }else if(gameData.players[playerId].positionFirst == 4){
            closeNum = Math.round(num * 0.65);
            middleNum = Math.round(num * 0.3);
            outsideNum = num - closeNum - middleNum;
        }else {
            closeNum = Math.round(num * 0.8);
            middleNum = Math.round(num * 0.2);
            outsideNum = num - closeNum - middleNum;
        }
        let closeIn = Math.round(closeNum * TeamMatchUtil.skillToInside(interior, player.positionFirst));
        let middleIn = Math.round(middleNum * TeamMatchUtil.skillToMiddle(exterior, player.positionFirst));
        let outsideIn = Math.round(outsideNum * TeamMatchUtil.skillToOutside(exterior, player.positionFirst));
        let freeIn = Math.round(freeNum * TeamMatchUtil.skillToFree(free, player.positionFirst));
        let score = Math.floor((closeIn + middleIn) * 2 + outsideIn * 3 + freeIn);
        return {
            score: score,
            closeNum: closeNum,
            closeIn: closeIn,
            middleNum: middleNum,
            middleIn: middleIn,
            outsideNum: outsideNum,
            outsideIn: outsideIn,
            freeNum: freeNum,
            freeIn: freeIn,
        };
    }

    public static getTeamRank(gameData: any): any {
        const teams = gameData.teams;
        let result = [];
        for(let i = 0; i < 30; i++) {
            result.push(teams[i]);
            result[i].id = i;
        }
        result = result.sort((a: any, b: any) => {
            let aRate:number = 0;
            if(a.gameNum !== 0) {
                aRate = a.winNum / a.gameNum;
            }
            let bRate:number = 0;
            if(b.gameNum !== 0) {
                bRate = b.winNum / b.gameNum;
            }
            return bRate - aRate;
        });
        return result;
    }

    public static getPlayerAbility(playerId: any, gameData: any, optName: any): any {
        const player = gameData.players[playerId];
        if(optName in player) {
            return player[optName];
        }else if(optName == 'seasonRegAvgScore') {
            if(player.seasonRegGameNum > 0) {
                return (player.seasonRegScore / player.seasonRegGameNum).toFixed(1);
            }else {
                return 0;
            }
        }else if(optName == 'skillUp') {
            return player.skillAverage - player.lastSkillAverage;
        }else {
            return 0;
        }
    }

    public static getAbilityRank(gameData: any, optName: string): any {
        const players = gameData.players;
        let result = [];
        for(let i in players) {
            result.push(players[i + '']);
        }
        result = result.sort((a: any, b: any) => {
            if(optName in a) {
                return b[optName] - a[optName];
            }else if(optName == 'seasonRegAvgScore') {
                if(a.seasonRegGameNum == 0) {
                    return 1;
                }else if(b.seasonRegGameNum == 0) {
                    return -1;
                }
                return b.seasonRegScore / b.seasonRegGameNum - a.seasonRegScore / a.seasonRegGameNum;
            }else if(optName == 'skillUp') {
                return ( b.skillAverage - b.lastSkillAverage) - (a.skillAverage - a.lastSkillAverage);
            }else {
                return 0;
            }
        });
        return result;
    }

    public static getPlayerInfo(id: string, gameData: any): any {
        return gameData.players[id];
    }
}

enum ShowState {
    MyTeam,
    TeamRank,
    News,
    Statistics,
    AttrRank,
    OffSeason,
    StatsRank,
}

class GameSchedule {
    static games = [
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

    public static gamesOfDay(day: number): any {
        return GameSchedule.games[day - 1];
    }
}

class TimeUtil {
    public static getTimeString(): any {
        let datetime = new Date();
        return datetime.getFullYear() + '-'
            + (datetime.getMonth() + 1) + '-'
            + datetime.getDate() + 'T'
            + datetime.getHours() + '-'
            + datetime.getMinutes() + '-'
            + datetime.getSeconds();
    }
}

class FileUtil {
    public static createBlob(content: any):any {
        let blob;
        try {
            blob = new Blob([content], {
                type: "text/plain;charset=utf-8"
            });
        } catch(e) {
            (<any>window).BlobBuilder = (<any>window).BlobBuilder ||
                (<any>window).WebkitBlobBuilder ||
                (<any>window).MozBlobBuilder ||
                (<any>window).MSBlobBuilder;
            if(e.name == 'TypeError' && (<any>window).BlobBuilder) {
                let bb = new BlobBuilder();
                bb.append([content]);
                blob = bb.getBlob("text/plain;charset=utf-8");
            } else if(e.name == 'InvalidStateError') {
                blob = new Blob([content.buffer], {type: "text/plain;charset=utf-8"});
            }
        }
        return blob;
    }
}

class TemplateUtil {
    public static createPlayerLine(player: any): any {
        const lineTemplate = `
        <div class='gameLine' onclick='showPlayerInfo(${player.id})'>
            <span class='growSpan'>${player.name}</span><span>年龄&nbsp;${player.age}&nbsp;&nbsp;综合能力&nbsp;${player.skillAverage}</span>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(lineTemplate, 'text/html').querySelector('.gameLine');
        return newNode;
    }

    public static createTradePane(gameData: any):any {
        //0    1    2     3    4       5    6    7   8    9    10  11   12    13   14
        //雄鹿 猛龙 步行者 76人 凯尔特人 热火 篮网 黄蜂 活塞 魔术 奇才 老鹰 尼克斯 公牛 骑士
        //15   16   17  18     19   20  21   22   23  24   25    26   27    28   29
        //勇士 掘金 雷霆 开拓者 火箭 马刺 快船 爵士 湖人 国王 森林狼 鹈鹕 独行侠 灰熊 太阳
        const template = `
        <div class='tradePane'>
            <div class='tradeTeamTitle'>
                <select class='gameSelect' id='tradeSelect' onchange='TemplateUtil.showTradePlayers(gameState)'>
                    <option value='-1'>请选择球队</option>
                    <option value='0'>雄鹿</option>
                    <option value='1'>猛龙</option>
                    <option value='2'>步行者</option>
                    <option value='3'>76人</option>
                    <option value='4'>凯尔特人</option>
                    <option value='5'>热火</option>
                    <option value='6'>篮网</option>
                    <option value='7'>黄蜂</option>
                    <option value='8'>活塞</option>
                    <option value='9'>魔术</option>
                    <option value='10'>奇才</option>
                    <option value='11'>老鹰</option>
                    <option value='12'>尼克斯</option>
                    <option value='13'>公牛</option>
                    <option value='14'>骑士</option>
                    <option value='15'>勇士</option>
                    <option value='16'>掘金</option>
                    <option value='17'>雷霆</option>
                    <option value='18'>开拓者</option>
                    <option value='19'>火箭</option>
                    <option value='20'>马刺</option>
                    <option value='21'>快船</option>
                    <option value='22'>爵士</option>
                    <option value='23'>湖人</option>
                    <option value='24'>国王</option>
                    <option value='25'>森林狼</option>
                    <option value='26'>鹈鹕</option>
                    <option value='27'>独行侠</option>
                    <option value='28'>灰熊</option>
                    <option value='29'>太阳</option>
                </select>
            </div>
            <div class='tradePlayers' id='tradePlayers'>
            </div>
            <div class='controlLine'>
                <button onclick='TemplateUtil.searchTrade(gameState)'>发现合同报价</button>
                <button onclick='TemplateUtil.acceptTrade(gameState)'>接受交易</button>
            </div>
            <div class='tradePlayers' id='secondTradePlayers'>
            </div>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.tradePane');
        return newNode;
    }

    public static showTradePlayers(gameData: any) {
        (<HTMLSelectElement>document.getElementById('secondTradePlayers')).innerHTML = "";
        const select = <HTMLSelectElement>document.getElementById('tradeSelect');
        const pane = <HTMLElement>document.getElementById('tradePlayers');
        const teamValue = <string>select.value;
        if(teamValue == '-1') {
            pane.innerHTML = "";
            return;
        }
        const team = gameData.teams[teamValue];
        const players = team.players;
        pane.innerHTML = "";
        const line = <HTMLElement>TemplateUtil.createTradeLine(players, gameData);
        pane.appendChild(line);
    }

    public static acceptTrade(gameData: any) {
        let fColumn = document.getElementById('selectColumn');
        let sColumn = document.getElementById('secondSelectColumn');
        if(fColumn == null || sColumn == null) {
            alert("都没有球员跟你交易想什么呢……");
            return;
        }
        let fPlayers = [];
        let sPlayers = [];
        for(let i = 1; i < fColumn.children.length; i++) {
            const box = <HTMLInputElement>(<HTMLElement>fColumn.children[i]).children[0];
            if(box.checked) {
                fPlayers.push(box.value);
            }
        }
        for(let i = 1; i < sColumn.children.length; i++) {
            const box = <HTMLInputElement>(<HTMLElement>sColumn.children[i]).children[0];
            sPlayers.push(box.value);
        }
        let fId = gameData.players[fPlayers[0]].team;
        let fTeam = gameData.teams[fId];
        let sId = gameData.players[sPlayers[0]].team;
        let sTeam = gameData.teams[sId];
        function remove(array: string[], item: string) {
            let index = -1;
            for (var i = 0; i < array.length; i++) { 
                if (array[i] == item) {
                    index = i;
                    break;
                };
            }
            if (index > -1) { 
                array.splice(index, 1); 
            } 
        }
        console.log(JSON.stringify(fTeam));
        for (let i = 0; i < fPlayers.length; i++) {
            remove(fTeam.cores, fPlayers[i]);
            remove(fTeam.dnp, fPlayers[i]);
            remove(fTeam.players, fPlayers[i]);
            remove(fTeam.bench, fPlayers[i]);
            fTeam.starterPG="";
            fTeam.starterSG="";
            fTeam.starterSF="";
            fTeam.starterPF="";
            fTeam.starterC="";
            sTeam.players.push(fPlayers[i]);
            gameData.players[fPlayers[i]].team = sId;
        }
        console.log(JSON.stringify(fTeam));
        for (let i = 0; i < sPlayers.length; i++) {
            remove(sTeam.cores, sPlayers[i]);
            remove(sTeam.dnp, sPlayers[i]);
            remove(sTeam.players, sPlayers[i]);
            remove(sTeam.bench, sPlayers[i]);
            sTeam.starterPG="";
            sTeam.starterSG="";
            sTeam.starterSF="";
            sTeam.starterPF="";
            sTeam.starterC="";
            fTeam.players.push(sPlayers[i]);
            gameData.players[sPlayers[i]].team = fId;
        }
        (<HTMLSelectElement>document.getElementById('secondTradePlayers')).innerHTML = "";
        (<HTMLSelectElement>document.getElementById('tradePlayers')).innerHTML = "";
    }

    public static searchTrade(gameData: any) {
        const select = <HTMLSelectElement>document.getElementById('tradeSelect');
        const teamValue = <string>select.value;
        let pane = document.getElementById('selectColumn');
        if(pane == null) {
            alert("都没有球员跟你交易想什么呢……");
            return;
        }
        let num = 0;
        const firstTradeP = []
        for(let i = 1; i < pane.children.length; i++) {
            const box = <HTMLInputElement>(<HTMLElement>pane.children[i]).children[0];
            if(box.checked) {
                num += 1;
                firstTradeP.push(box.value);
            }
        }
        if(num == 0) {
            alert("都没选球员跟你交易想什么呢……")
            return;
        }else if(num > 3) {
            alert("最多只能选三个球员啦！")
            return;
        }
        if(pane.children.length - 1 - num < 10) {
            alert("交易完球队人数会少于10人，不可以哦");
            return;
        }
        let belowPlayers;
        if(gameData.userTeamId == teamValue) {
            let rand = <string>RandomUtil.random(0, 30);
            while(rand == gameData.userTeamId) {
                rand = <string>RandomUtil.random(0, 30);
            }
            belowPlayers = gameData.teams[rand].players;
        }else {
            belowPlayers = gameData.teams[gameData.userTeamId].players;
        }
        let totalSalary = 0;
        let totalSkill = 0;
        let totalAge = 0;
        let size = firstTradeP.length;
        for(let i = 0; i < size; i++) {
            let tempP = gameData.players[firstTradeP[i]];
            totalSalary += tempP.salary;
            totalSkill += tempP.skillAverage;
            totalAge += tempP.age;
        }
        let avgSkill = totalSkill / size;
        let avgAge = totalAge / size;
        let match = false;
        let secondTradeP: string[] = [];
        for(let o = 0; o < 50; o++) {
            let tempTradeP:string[] = [];
            let randPickNum = RandomUtil.random(1,4);
            for(let i = 0; i < randPickNum; i++) {
                let randP = RandomUtil.random(0, belowPlayers.length);
                let pId = <string>belowPlayers[randP];
                let inP = false;
                for (let i = 0; i < tempTradeP.length; i++) {
                    if(tempTradeP[i] == pId) {
                        inP = true;
                        break;
                    }
                }
                if(inP) {
                    continue;
                }
                tempTradeP.push(pId);
            }
            let tTotalSalary = 0;
            let tTotalSkill = 0;
            let tTotalAge = 0;
            let tSize = tempTradeP.length;
            for(let i = 0; i < tSize; i++) {
                let tempP = gameData.players[tempTradeP[i]];
                tTotalSalary += tempP.salary;
                tTotalSkill += tempP.skillAverage;
                tTotalAge += tempP.age;
            }
            let tAvgSkill = tTotalSkill / tSize;
            let tAvgAge = tTotalAge / tSize;
            console.log("dad" + totalSalary);
            console.log("dads" + tTotalSalary);
            console.log(Math.abs(totalSalary - tTotalSalary));
            if(Math.abs(totalSalary - tTotalSalary) <= 5000000) {
                if(Math.abs(avgAge - tAvgAge) <= 2) {
                    if(Math.abs(avgSkill - tAvgSkill) <= 4) {
                        match = true;
                    }
                }
            }
            if(match) {
                secondTradeP = tempTradeP;
                break;
            }
        }
        console.log(belowPlayers.length);
        console.log(secondTradeP.length);
        if(match && (belowPlayers.length - secondTradeP.length >= 10)) {
            const pane = <HTMLElement>document.getElementById('secondTradePlayers');
            pane.innerHTML = "";
            const line = <HTMLElement>TemplateUtil.createTradeLine(secondTradeP, gameData, false);
            pane.appendChild(line);
        }else {
            alert("似乎找不到什么好的交易呢…");
        }
    }

    public static createTradeLine(players: any, gameData: any, hasBox=true) {
        console.log(players);
        let names = ''
        let avgs = ''
        let salaries = ''
        let years = ''
        let boxes = ''
        for(let i = 0; i < players.length; i++) {
            const player = gameData.players[players[i]];
            names += `<span>${player.name}</span>`
            avgs += `<span>${player.skillAverage}</span>`
            salaries += `<span>${player.salary}</span>`
            years += `<span>${player.yearsContract}</span>`
            boxes += `<span><input type='checkbox' value='${players[i]}'></input></span>`
        }
        let template = `
        <div class='tradeLine'>
            <div class='tradeColumn' id='firstColumn'>
                <span>球员</span>
                ${names}
            </div>
            <div class='tradeColumn'>
                <span>能力</span>
                ${avgs}
            </div>
            <div class='tradeColumn'>
                <span>薪水</span>
                ${salaries}
            </div>
            <div class='tradeColumn'>
                <span>合同</span>
                ${years}
            </div>
        `;
        if(hasBox) {
            template += `
            <div class='tradeColumn' id='selectColumn'>
                <span>选择</span>
                ${boxes}
            </div>
        </div>
            `
        }else {
            template += `
            <div class='tradeColumn' id='secondSelectColumn' style="display: none !important">
                <span>选择</span>
                ${boxes}
            </div>
        </div>
            `
        }
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.tradeLine');
        return newNode;
    }

    public static createGameResultPane(matchId: any, gameData: any): any {
        let result: GameResult = gameData.matches[matchId];
        let winner = result.winnerId;
        let homeTeamId = result.homeTeamId;
        let visitorId = result.visitorId;
        let homeTeamName = gameData.teams[homeTeamId].name;
        let visitorName = gameData.teams[visitorId].name;
        let homeTeamScore = 0;
        let visitorScore = 0;
        let homeStats, visitorStats;
        if(winner == homeTeamId) {
            homeTeamScore = result.winnerPoint;
            visitorScore = result.loserPoint;
            homeStats = result.winnerScores;
            visitorStats = result.loserScores;
        }else {
            homeTeamScore = result.loserPoint;
            visitorScore = result.winnerPoint;
            homeStats = result.loserScores;
            visitorStats = result.winnerScores;
        }
        let homePlayers = ""
        let visitorPlayers = ""
        let homeRebounds = 0;
        let homeAssists = 0;
        let homeSteals = 0;
        let homeBlocks = 0;
        let homeTurnovers = 0;
        let homeMaxScore = 0;
        let homeMaxScoreP = 0;
        let homeMaxRebound = 0;
        let homeMaxReboundP = 0;
        let homeMaxAssist = 0;
        let homeMaxAssistP = 0;
        let homeMaxSteal = 0;
        let homeMaxStealP = 0;
        let homeMaxBlock = 0;
        let homeMaxBlockP = 0;
        let homeMaxTurnover = 0;
        let homeMaxTurnoverP = 0;
        let homeMvpNum = 0;
        let homeMvpP = 0;
        let visitorRebounds = 0;
        let visitorAssists = 0;
        let visitorSteals = 0;
        let visitorBlocks = 0;
        let visitorTurnovers = 0;
        let visitorMaxScore = 0;
        let visitorMaxScoreP = 0;
        let visitorMaxRebound = 0;
        let visitorMaxReboundP = 0;
        let visitorMaxAssist = 0;
        let visitorMaxAssistP = 0;
        let visitorMaxSteal = 0;
        let visitorMaxStealP = 0;
        let visitorMaxBlock = 0;
        let visitorMaxBlockP = 0;
        let visitorMaxTurnover = 0;
        let visitorMaxTurnoverP = 0;
        let visitorMvpNum = 0;
        let visitorMvpP = 0;
        for(let i in homeStats) {
            let p = (<any>homeStats)[i];
            let playername = gameData.players[i].name;
            homePlayers += `<tr>
                <td>${playername}</td>
                <td>${p.score}</td>
                <td>${p.rebound}</td>
                <td>${p.assist}</td>
                <td>${p.steal}</td>
                <td>${p.block}</td>
            </tr>`;
            homeRebounds += p.rebound;
            homeAssists += p.assist;
            homeSteals += p.steal;
            homeBlocks += p.block;
            homeTurnovers += p.turnover;
            if(p.score > homeMaxScore) {
                homeMaxScore = p.score;
                homeMaxScoreP = playername;
            }
            if(p.rebound > homeMaxRebound) {
                homeMaxRebound = p.rebound;
                homeMaxReboundP = playername;
            }
            if(p.assist > homeMaxAssist) {
                homeMaxAssist = p.assist;
                homeMaxAssistP = playername;
            }
            if(p.steal > homeMaxSteal) {
                homeMaxSteal = p.steal;
                homeMaxStealP = playername;
            }
            if(p.block > homeMaxBlock) {
                homeMaxBlock = p.block;
                homeMaxBlockP = playername;
            }
            let total = p.score + p.rebound + p.assist + p.steal + p.block - p.turnover;
            if(total > homeMvpNum) {
                homeMvpNum = total;
                homeMvpP = playername;
            }
        }
        homePlayers += `<tr>
            <td>总计</td>
            <td>${homeTeamScore}</td>
            <td>${homeRebounds}</td>
            <td>${homeAssists}</td>
            <td>${homeSteals}</td>
            <td>${homeBlocks}</td>
        </tr>`;
        for(let i in visitorStats) {
            let p = (<any>visitorStats)[i];
            let playername = gameData.players[i].name;
            visitorPlayers += `<tr>
                <td>${playername}</td>
                <td>${p.score}</td>
                <td>${p.rebound}</td>
                <td>${p.assist}</td>
                <td>${p.steal}</td>
                <td>${p.block}</td>
            </tr>`;
            visitorRebounds += p.rebound;
            visitorAssists += p.assist;
            visitorSteals += p.steal;
            visitorBlocks += p.block;
            visitorTurnovers += p.turnover;
            if(p.score > visitorMaxScore) {
                visitorMaxScore = p.score;
                visitorMaxScoreP = playername;
            }
            if(p.rebound > visitorMaxRebound) {
                visitorMaxRebound = p.rebound;
                visitorMaxReboundP = playername;
            }
            if(p.assist > visitorMaxAssist) {
                visitorMaxAssist = p.assist;
                visitorMaxAssistP = playername;
            }
            if(p.steal > visitorMaxSteal) {
                visitorMaxSteal = p.steal;
                visitorMaxStealP = playername;
            }
            if(p.block > visitorMaxBlock) {
                visitorMaxBlock = p.block;
                visitorMaxBlockP = playername;
            }
            let total = p.score + p.rebound + p.assist + p.steal + p.block - p.turnover;
            if(total > visitorMvpNum) {
                visitorMvpNum = total;
                visitorMvpP = playername;
            }
        }
        visitorPlayers += `<tr>
            <td>总计</td>
            <td>${visitorScore}</td>
            <td>${visitorRebounds}</td>
            <td>${visitorAssists}</td>
            <td>${visitorSteals}</td>
            <td>${visitorBlocks}</td>
        </tr>`;
        const template = `
        <div class='matchPane'>
            <span class='growSpan'>
                <table>
                    <tr>
                        <td>球队</td>
                        <td>(主)${homeTeamName}</td>
                        <td>${visitorName}(客)</td>
                    </tr>
                    <tr>
                        <td>比分</td>
                        <td>${homeTeamScore}</td>
                        <td>${visitorScore}</td>
                    </tr>
                    <tr>
                        <td>最佳球员</td>
                        <td>${homeMvpP}&nbsp;评分：${homeMvpNum}</td>
                        <td>${visitorMvpP}&nbsp;评分：${visitorMvpNum}</td>
                    </tr>
                    <tr>
                        <td>最高得分</td>
                        <td>${homeMaxScoreP}:&nbsp;${homeMaxScore}</td>
                        <td>${visitorMaxScoreP}:&nbsp;${visitorMaxScore}</td>
                    </tr>
                    <tr>
                        <td>最高篮板</td>
                        <td>${homeMaxReboundP}:&nbsp;${homeMaxRebound}</td>
                        <td>${visitorMaxReboundP}:&nbsp;${visitorMaxRebound}</td>
                    </tr>
                    <tr>
                        <td>最高助攻</td>
                        <td>${homeMaxAssistP}:&nbsp;${homeMaxAssist}</td>
                        <td>${visitorMaxAssistP}:&nbsp;${visitorMaxAssist}</td>
                    </tr>
                    <tr>
                        <td>最高抢断</td>
                        <td>${homeMaxStealP}:&nbsp;${homeMaxSteal}</td>
                        <td>${visitorMaxStealP}:&nbsp;${visitorMaxSteal}</td>
                    </tr>
                    <tr>
                        <td>最高盖帽</td>
                        <td>${homeMaxBlockP}:&nbsp;${homeMaxBlock}</td>
                        <td>${visitorMaxBlockP}:&nbsp;${visitorMaxBlock}</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td>${homeTeamName}球员</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>姓名</th>
                        <th>得分</th>
                        <th>篮板</th>
                        <th>助攻</th>
                        <th>抢断</th>
                        <th>盖帽</th>
                    </tr>
                    ${homePlayers}
                </table>
                <table>
                    <tr>
                        <td>${visitorName}球员</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <th>姓名</th>
                        <th>得分</th>
                        <th>篮板</th>
                        <th>助攻</th>
                        <th>抢断</th>
                        <th>盖帽</th>
                    </tr>
                    ${visitorPlayers}
                </table>
            </span>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.matchPane');
        return newNode;
    }

    public static createNewsLine(day: any, season: any, content: any): any {
        const template = `
        <div class='leftLine'>
            <span class='growSpan'>
                <span>第${season}赛季</span><span>第${day}天&nbsp;</span>
                <br />
                ${content}
            </span>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.leftLine');
        return newNode;
    }

    public static createWaitingPane(info: any): any {
        const template = `
        <div class='waitingPane'>
            <span>${info}</span>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.waitingPane');
        return newNode;
    }
    
    public static createLine(text: any): any {
        const lineTemplate = `
        <div class='gameLine'>
            <span>${text}</span>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(lineTemplate, 'text/html').querySelector('.gameLine');
        return newNode;
    }

    public static createTeamPane(teamId: any, gameData: any): any {
        if(!gameData.lockLineup) {
            TeamMatchUtil.getCorePlayers(teamId, gameData);
            TeamMatchUtil.getStarters(teamId, gameData);
        }
        TeamMatchUtil.getBenchPlayers(teamId, gameData);
        let teamName = gameData.teams[teamId].name;
        let title: string;
        if(teamId == gameData.userTeamId) {
            title = `我的球队-${teamName}`
        }else {
            title = `别人的球队-${teamName}`
        }
        const firstLine = `
        <div class='gameLine'>
            <span>${title}</span>
        </div>
        `;
        let regChampionNum = gameData.teams[teamId].regularChampionNum;
        let championNum = gameData.teams[teamId].championNum;
        const dataPane = `
        <div class='gameLine'>
            <span>常规赛冠军：&nbsp;${regChampionNum}&nbsp;总冠军：&nbsp;${championNum}</span>
        </div>
        `;
        let team = gameData.teams[teamId];
        let coreLine = `
        <div class='titleLine'>
            <span>核心球员</span>
        </div>
        `;
        for(let i = 0; i < team.cores.length; i++) {
            let player = Game.getPlayerInfo(team.cores[i], gameData);
            let line = `
            <div class='gameLine' onclick='showPlayerInfo(${player.id})'>
                <span class='growSpan'>${player.name}</span><span>年龄&nbsp;${player.age}&nbsp;&nbsp;综合能力&nbsp;${player.skillAverage}</span>
            </div>
            `;
            coreLine += line;
        }
        let starterLine = `
        <div class='titleLine'>
            <span>首发</span>
        </div>
        `
        if(team.starterPG && team.starterPG != -1) {
            starterLine += `
            <div class='gameLine' onclick='showPlayerInfo(${team.starterPG})'>
                <span class='growSpan'>PG:&nbsp;${gameData.players[team.starterPG].name}</span><span>年龄&nbsp;${gameData.players[team.starterPG].age}&nbsp;&nbsp;综合能力&nbsp;${gameData.players[team.starterPG].skillAverage}</span>
            </div>
            `
        }
        if(team.starterSG && team.starterSG != -1) {
            starterLine += `
            <div class='gameLine' onclick='showPlayerInfo(${team.starterSG})'>
                <span class='growSpan'>SG:&nbsp;${gameData.players[team.starterSG].name}</span><span>年龄&nbsp;${gameData.players[team.starterSG].age}&nbsp;&nbsp;综合能力&nbsp;${gameData.players[team.starterSG].skillAverage}</span>
            </div>
            `
        }
        if(team.starterSF && team.starterSF != -1) {
            starterLine += `
            <div class='gameLine' onclick='showPlayerInfo(${team.starterSF})'>
                <span class='growSpan'>SF:&nbsp;${gameData.players[team.starterSF].name}</span><span>年龄&nbsp;${gameData.players[team.starterSF].age}&nbsp;&nbsp;综合能力&nbsp;${gameData.players[team.starterSF].skillAverage}</span>
            </div>
            `
        }
        if(team.starterPF && team.starterPF != -1) {
            starterLine += `
            <div class='gameLine' onclick='showPlayerInfo(${team.starterPF})'>
                <span class='growSpan'>PF:&nbsp;${gameData.players[team.starterPF].name}</span><span>年龄&nbsp;${gameData.players[team.starterPF].age}&nbsp;&nbsp;综合能力&nbsp;${gameData.players[team.starterPF].skillAverage}</span>
            </div>
            `
        }
        if(team.starterC && team.starterC != -1) {
            starterLine += `
            <div class='gameLine' onclick='showPlayerInfo(${team.starterC})'>
                <span class='growSpan'>C:&nbsp;${gameData.players[team.starterC].name}</span><span>年龄&nbsp;${gameData.players[team.starterC].age}&nbsp;&nbsp;综合能力&nbsp;${gameData.players[team.starterC].skillAverage}</span>
            </div>
            `
        }
        let benchLine = `
        <div class='titleLine'>
            <span>替补</span>
        </div>
        `;
        for(let i = 0; i < team.bench.length; i++) {
            let player = Game.getPlayerInfo(team.bench[i], gameData);
            let line = `
            <div class='gameLine' onclick='showPlayerInfo(${player.id})'>
                <span class='growSpan'>${player.name}</span><span>年龄&nbsp;${player.age}&nbsp;&nbsp;综合能力&nbsp;${player.skillAverage}</span>
            </div>
            `;
            benchLine += line;
        }
        let dnpLine = `
        <div class='titleLine'>
            <span>不上场</span>
        </div>
        `;
        for(let i = 0; i < team.dnp.length; i++) {
            let player = Game.getPlayerInfo(team.dnp[i], gameData);
            let line = `
            <div class='gameLine' onclick='showPlayerInfo(${player.id})'>
                <span class='growSpan'>${player.name}</span><span>年龄&nbsp;${player.age}&nbsp;&nbsp;综合能力&nbsp;${player.skillAverage}</span>
            </div>
            `;
            dnpLine += line;
        }
        if(team.dnp.length == 0) {
            dnpLine += `
            <div class='gameLine'>
                <span class='growSpan'>没有不上场的球员</span>
            </div>
            `
        }
        const template = `
        <div class='teamPane'>
            ${firstLine}
            ${dataPane}
            ${coreLine}
            ${starterLine}
            ${benchLine}
            ${dnpLine}
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.teamPane');
        return newNode;
    }

    public static createSelectTeamPane(gameData: any): any {
        let teams = "";
        for(let i = 0; i < 30; i++) {
            const team = gameData.teams[i];
            teams += `
            <div class='gameLine' onclick='finishInit(${i})'>
                <span class='growSpan'>${team.name}</span>
            </div>
            `;
        }
        const template = `
        <div class='gamePane'>
            <div class='titleLine'>
                <span class='growSpan'>请选择球队</span>
            </div>
            ${teams}
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.gamePane');
        return newNode;
    }

    public static createTeamLine(rank: any, teamId: any, gameData: any): any {
        const teamName = gameData.teams[teamId].name;
        const win = gameData.teams[teamId].winNum;
        const lost = gameData.teams[teamId].gameNum - win;
        let insertText = ''
        if(teamId == gameData.userTeamId) {
            insertText = 'style="color: orange;"';
        }
        let tail = ''
        if(gameData.teams[teamId].currentWin > 0) {
            tail = `<span style="color: green">${gameData.teams[teamId].currentWin}连胜</span>`
        }else if(gameData.teams[teamId].currentLost > 0) {
            tail = `<span style="color: red">${gameData.teams[teamId].currentLost}连败</span>`
        }else {
            tail = `<span ${insertText}>未比赛</span>`
        }
        const lineTemplate = `
        <div class='gameLine' onclick='showTeamInfo(${teamId})'>
            <span class='rankSpan' ${insertText}>${rank}</span><span class='growSpan'  ${insertText}>${teamName}</span><span  ${insertText}>&nbsp;${win}&nbsp;胜&nbsp;${lost}&nbsp;负</span>&nbsp;${tail}
        </div>
        `;
        let newNode = new DOMParser().parseFromString(lineTemplate, 'text/html').querySelector('.gameLine');
        return newNode;
    }

    public static createPlayerPane(playerId: any, gameData: any): any {
        const player = gameData.players[playerId];
        let team = {name: '无'}
        if(player.team >= 0) {
            team = gameData.teams[player.team];
        }
        let position = DataUtil.positionToName(player.positionFirst);
        if(player.positionFirst != player.positionSecond) {
            position += '/' + DataUtil.positionToName(player.positionSecond);
        }
        const freeRate = player.seasonRegFreeIn / player.seasonRegFree;
        const doubleRate = (player.seasonRegCloseIn + player.seasonRegMiddleIn) / (player.seasonRegMiddle + player.seasonRegClose);
        const tripleRate = player.seasonRegThreeIn / player.seasonRegThree;
        const score = (player.seasonRegCloseIn + player.seasonRegMiddleIn) * 2 + player.seasonRegThreeIn * 3 + player.seasonRegFreeIn;
        const avgScore = (score / player.seasonRegGameNum).toFixed(2);
        const avgBlock = (player.seasonRegBlock / player.seasonRegGameNum).toFixed(2);
        const avgRebound = (player.seasonRegRebound / player.seasonRegGameNum).toFixed(2);
        const avgAssist = (player.seasonRegAssist / player.seasonRegGameNum).toFixed(2);
        const avgSteal = (player.seasonRegSteal / player.seasonRegGameNum).toFixed(2);
        const avgTurnover = (player.seasonRegTurnover / player.seasonRegGameNum).toFixed(2);
        const avgTime = (player.seasonRegTime / player.seasonRegGameNum).toFixed(2);
        const avgFoul = (player.seasonRegFoul / player.seasonRegGameNum).toFixed(2);
        let extra = '';
        if(player.team == gameData.userTeamId) {
            extra = `
            <select class='roleSelect' id='roleSelect' onchange='changeTeamRole(${playerId})'>
            `
            let allNot = true;
            if((<any>team).starterPG == playerId) {
                allNot = false;
                extra += `<option value='starterPG' selected='selected'>首发控卫</option>`;
            }else {
                extra += `<option value='starterPG'>首发控卫</option>`
            }
            if((<any>team).starterSG == playerId) {
                allNot = false;
                extra += `<option value='starterSG' selected='selected'>首发分卫</option>`;
            }else {
                extra += `<option value='starterSG'>首发分卫</option>`
            }
            if((<any>team).starterSF == playerId) {
                allNot = false;
                extra += `<option value='starterSF' selected='selected'>首发小前</option>`;
            }else {
                extra += `<option value='starterSF'>首发小前</option>`
            }
            if((<any>team).starterPF == playerId) {
                allNot = false;
                extra += `<option value='starterPF' selected='selected'>首发大前</option>`;
            }else {
                extra += `<option value='starterPF'>首发大前</option>`
            }
            if((<any>team).starterC == playerId) {
                allNot = false;
                extra += `<option value='starterC' selected='selected'>首发中锋</option>`;
            }else {
                extra += `<option value='starterC'>首发中锋</option>`
            }
            if((<any>team).dnp.includes(playerId + "")) {
                allNot = false;
                extra += `<option value='dnp' selected='selected'>不上场</option>`;
            }else {
                extra += `<option value='dnp'>不上场</option>`;
            }
            if(allNot) {
                extra += `<option value='bench' selected='selected'>替补</option>`;
            }else {
                extra += `<option value='bench'>替补</option>`;
            }
            extra += `
            </select>
            <button onclick='alert("此功能还在开发中")'>培养方向</button>
            `;
            if((<any>team).cores.includes(playerId + "")) {
                extra += `<button onclick='Game.unsetCore(${playerId}, gameState)'>取消核心</button>`;
            }else {
                extra += `<button onclick='Game.setCore(${playerId}, gameState)'>设为核心</button>`
            }
        }
        
        let follow = `
        <button onclick='Game.followPlayer(${playerId}, gameState)'>关注球员</button>
        `;
        if(gameData.followList.includes(playerId)) {
            follow = `
            <button onclick='Game.unfollowPlayer(${playerId}, gameState)'>取关球员</button>
            `
        }
        const teamplate = `
        <div class='playerPane'>
            <div class='playerTitle'>
                <div>基本信息</div>
            </div>
            <hr />
            <div class='playerContent'>
                <div>姓名: ${player.name}</div>
                <div>球队: ${team.name}</div>
                <div>年龄: ${player.age}</div>
                <div>位置: ${position}</div>
                <div>潜力: ${player.potential}</div>
                <div>球龄: ${player.yearsLeague}</div>
                <div>薪金: ${player.salary}</div>
                <div>合同年限: ${player.yearsContract}</div>
            </div>
            <div class='playerTitle'>
                <div>数据统计</div>
            </div>
            <hr />
            <div class='playerStats'>
                <div class='statsTitle'>罚球(${player.seasonRegFreeIn}/${player.seasonRegFree})</div>
                <div class='statsTitle'>2分(${player.seasonRegCloseIn+player.seasonRegMiddleIn}/${player.seasonRegClose+player.seasonRegMiddle})</div>
                <div class='statsTitle'>3分(${player.seasonRegThreeIn}/${player.seasonRegThree})</div>
                <div class='statsTitle'>得分(${score})</div>
                <div class='statsContent'>${DataUtil.rateToVal(freeRate)}</div>
                <div class='statsContent'>${DataUtil.rateToVal(doubleRate)}</div>
                <div class='statsContent'>${DataUtil.rateToVal(tripleRate)}</div>
                <div class='statsContent'>${avgScore}</div>
                <div class='statsTitle'>篮板</div>
                <div class='statsTitle'>盖帽</div>
                <div class='statsTitle'>抢断</div>
                <div class='statsTitle'>助攻</div>
                <div class='statsContent'>${avgRebound}</div>
                <div class='statsContent'>${avgBlock}</div>
                <div class='statsContent'>${avgSteal}</div>
                <div class='statsContent'>${avgAssist}</div>
                <div class='statsTitle'>场次</div>
                <div class='statsTitle'>时间</div>
                <div class='statsTitle'>犯规</div>
                <div class='statsTitle'>失误</div>
                <div class='statsContent'>${player.seasonRegGameNum}</div>
                <div class='statsContent'>${avgTime}</div>
                <div class='statsContent'>${avgFoul}</div>
                <div class='statsContent'>${avgTurnover}</div>
            </div>
            <div class='playerTitle'>
                <div>属性(${player.skillAverage})</div>
            </div>
            <hr />
            <div class='playerAttrs'>
                <div class='statsTitle' style='text-align: start;'>类型</div>
                <div class='statsTitle'>传球</div>
                <div class='statsTitle'>内线</div>
                <div class='statsTitle'>外线</div>
                <div class='statsTitle'>罚球</div>
                <div class='statsTitle'>综合</div>
                <div class='statsContent' style='text-align: start;'>进攻</div>
                <div class='statsContent'>${player.skillPass}</div>
                <div class='statsContent'>${player.skillShotInterior}</div>
                <div class='statsContent'>${player.skillShotExterior}</div>
                <div class='statsContent'>${player.skillShotFree}</div>
                <div class='statsContent'>${player.skillAttack}</div>
                <div class='statsTitle' style='text-align: start;'>类型</div>
                <div class='statsTitle'>体力</div>
                <div class='statsTitle'>盖帽</div>
                <div class='statsTitle'>篮板</div>
                <div class='statsTitle'>抢断</div>
                <div class='statsTitle'>综合</div>
                <div class='statsContent' style='text-align: start;'>防守</div>
                <div class='statsContent'>${player.skillPhysique}</div>
                <div class='statsContent'>${player.skillBlock}</div>
                <div class='statsContent'>${player.skillRebound}</div>
                <div class='statsContent'>${player.skillSteal}</div>
                <div class='statsContent'>${player.skillDefense}</div>
            </div>
            <div class='playerTitle'>
                <div>操作</div>
            </div>
            <hr />
            <div class='controls'>
                <button onclick='showTeamInfo(${player.team})'>前往球队</button>
                ${follow}
                ${extra}
            </div>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(teamplate, 'text/html').querySelector('.playerPane');
        return newNode;
    }

    public static createAttrLine(rank: any, attrName: any, playerId: any, playerName: any, value: any): any {
        const lineTemplate = `
        <div class='gameLine' onclick='showPlayerInfo(${playerId})'>
            <span class='rankSpan'>${rank}</span><span class='growSpan'>${playerName}</span><span>${attrName}&nbsp;${value}</span>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(lineTemplate, 'text/html').querySelector('.gameLine');
        return newNode;
    }

    public static createStatsSelect(values: number[]):any {
        const template = `
        <div class='selectLine'>
            <select class='gameSelect' id='statsSelect' onchange='changeStats()'>
                <option value='seasonRegScore'>赛季常规赛得分</option>
                <option value='seasonRegAvgScore'>赛季常规赛场均得分</option>
                <option value='seasonRegThreeIn'>赛季常规赛三分命中</option>
                <option value='seasonRegThree'>赛季常规赛三分出手</option>
                <option value='seasonRegFreeIn'>赛季常规赛罚球命中</option>
                <option value='seasonRegFree'>赛季常规赛罚球出手</option>
                <option value='seasonRegMiddleIn'>赛季常规赛中投命中</option>
                <option value='seasonRegMiddle'>赛季常规赛中投出手</option>
                <option value='seasonRegCloseIn'>赛季常规赛禁区命中</option>
                <option value='seasonRegClose'>赛季常规赛禁区出手</option>
                <option value='seasonOffScore'>赛季季后赛得分</option>
                <option value='seasonOffThreeIn'>赛季季后赛三分命中</option>
                <option value='seasonOffThree'>赛季季后赛三分出手</option>
                <option value='seasonOffFreeIn'>赛季季后赛罚球命中</option>
                <option value='seasonOffFree'>赛季季后赛罚球出手</option>
                <option value='seasonOffMiddleIn'>赛季季后赛中投命中</option>
                <option value='seasonOffMiddle'>赛季季后赛中投出手</option>
                <option value='seasonOffCloseIn'>赛季季后赛禁区命中</option>
                <option value='seasonOffClose'>赛季季后赛禁区出手</option>
                <option value='totalRegScore'>生涯常规赛总得分</option>
                <option value='totalOffScore'>生涯季后赛总得分</option>
                <option value='regMaxScore'>常规赛单场最高分</option>
                <option value='offMaxScore'>季后赛单场最高分</option>
            </select>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.selectLine');
        return newNode;
    }

    public static createSelect(values: number[]):any {
        const template = `
        <div class='selectLine'>
            <select class='gameSelect' id='attrSelect' onchange='changeAttr()'>
                <option value='skillAverage'>综合能力</option>
                <option value='skillUp'>赛季成长</option>
                <option value='skillAttack'>进攻能力</option>
                <option value='skillDefense'>防守能力</option>
                <option value='skillRebound'>篮板</option>
                <option value='skillShotInterior'>内线投篮</option>
                <option value='skillShotExterior'>外线投篮</option>
                <option value='numsChampion'>冠军数量</option>
                <option value='skillShotFree'>罚球能力</option>
                <option value='salary'>薪水</option>
                <option value='skillPhysique'>体力</option>
                <option value='skillPass'>传球能力</option>
                <option value='age'>年龄</option>
                <option value='yearsLeague'>球龄</option>
                <option value='skillSteal'>抢断能力</option>
                <option value='stateInjury'>伤停时长</option>
            </select>
        </div>
        `;
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('.selectLine');
        return newNode;
    }

    private static offIdToName(offRound: any, pair: any, side: any, gameData: any, right: any = false): any {
        let thePair = gameData.offSeason[offRound].pairs[pair];
        let teamId = thePair[side].team;
        let teamName = '';
        let teamStyle = '';
        let teamWin = thePair[side].win;
        if(teamId == -1) {
            teamName =  '未定'
        }else {
            teamName = gameData.teams[teamId].name;
        }
        let finished = thePair.finished;
        if(finished && teamWin == 4) {
            teamStyle = 'winDiv';
        }else if(finished) {
            teamStyle = 'lostDiv';
        }else if(teamId != -1){
            teamStyle = 'winDiv';
        }else {
            teamStyle = 'ordDiv';
        }
        let resultStr;
        if(right) {
            resultStr = `<div class='${teamStyle}'><span>${teamWin}</span><span class='nameRightSpan'>${teamName}</span></div>`;
        }else {
            resultStr = `<div class='${teamStyle}'><span class='nameSpan'>${teamName}</span><span>${teamWin}</span></div>`;
        }
        return resultStr;
    }

    public static createOffSeasonPane(gameData: any) {
        const template = `
        <div id='offSeasonPane'>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 0, 'up', gameData)}
                    ${this.offIdToName('round1', 0, 'down', gameData)}
                </div>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 1, 'up', gameData)}
                    ${this.offIdToName('round1', 1, 'down', gameData)}
                </div>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 2, 'up', gameData)}
                    ${this.offIdToName('round1', 2, 'down', gameData)}
                </div>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 3, 'up', gameData)}
                    ${this.offIdToName('round1', 3, 'down', gameData)}
                </div>
            </div>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                    ${this.offIdToName('round2', 0, 'up', gameData)}
                    ${this.offIdToName('round2', 0, 'down', gameData)}
                </div>
                <div class='batDiv'>
                    ${this.offIdToName('round2', 1, 'up', gameData)}
                    ${this.offIdToName('round2', 1, 'down', gameData)}
                </div>
            </div>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                    ${this.offIdToName('semi', 0, 'up', gameData)}
                    ${this.offIdToName('semi', 0, 'down', gameData)}
                </div>
            </div>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                    ${this.offIdToName('final', 0, 'up', gameData)}
                </div>
            </div>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                    ${this.offIdToName('final', 0, 'down', gameData, true)}
                </div>
            </div>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                    ${this.offIdToName('semi', 1, 'up', gameData, true)}
                    ${this.offIdToName('semi', 1, 'down', gameData, true)}
                </div>
            </div>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                        ${this.offIdToName('round2', 2, 'up', gameData, true)}
                        ${this.offIdToName('round2', 2, 'down', gameData, true)}
                    </div>
                    <div class='batDiv'>
                        ${this.offIdToName('round2', 3, 'up', gameData, true)}
                        ${this.offIdToName('round2', 3, 'down', gameData, true)}
                    </div>
                </div>
            <div class='offSeasonColumn'>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 4, 'up', gameData, true)}
                    ${this.offIdToName('round1', 4, 'down', gameData, true)}
                </div>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 5, 'up', gameData, true)}
                    ${this.offIdToName('round1', 5, 'down', gameData, true)}
                </div>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 6, 'up', gameData, true)}
                    ${this.offIdToName('round1', 6, 'down', gameData, true)}
                </div>
                <div class='batDiv'>
                    ${this.offIdToName('round1', 7, 'up', gameData, true)}
                    ${this.offIdToName('round1', 7, 'down', gameData, true)}
                </div>
            </div>
        </div>
        `
        let newNode = new DOMParser().parseFromString(template, 'text/html').querySelector('#offSeasonPane');
        return newNode;
    }
}

class GameResult {
    winnerId: number;
    homeTeamId: number;
    visitorId: number;
    winnerPoint: number;
    loserPoint: number;
    winnerScores: {};
    loserScores: {};

    constructor(winnerId: number, homeTeamId: number, visitorId: number, winnerPoint: number, loserPoint: number, winnerScores: any, loserScores: any) {
        this.winnerId = winnerId;
        this.homeTeamId = homeTeamId;
        this.visitorId = visitorId;
        this.winnerPoint = winnerPoint;
        this.loserPoint = loserPoint;
        this.winnerScores = winnerScores;
        this.loserScores = loserScores;
    };
}

class TeamMatchUtil {
    public static getCorePlayers(teamId: any, gameData: any): any {
        if(teamId == gameData.userTeamId && gameData.lockLineup) {
            return gameData.teams[teamId].cores;
        }
        const team = gameData.teams[teamId];
        let players = team.players;
        let sortPlayers = players.sort((a: any, b: any) => {
            return gameData.players[b].skillAverage - gameData.players[a].skillAverage;
        });
        let beyond90 = sortPlayers.filter((p: any) => gameData.players[p].skillAverage >= 90).slice(0, 3);
        if(beyond90.length > 1) {
            gameData.teams[teamId].cores = beyond90;
            return beyond90;
        }else {
            gameData.teams[teamId].cores = [players[0], players[1], players[2]];
            return [players[0], players[1], players[2]];
        }
    }

    public static getStarters(teamId: any, gameData: any): any {
        if(teamId == gameData.userTeamId && gameData.lockLineup) {
            return [
                gameData.teams[teamId].starterPG,
                gameData.teams[teamId].starterSG,
                gameData.teams[teamId].starterSF,
                gameData.teams[teamId].starterPF,
                gameData.teams[teamId].starterC,
            ];
        }
        const team = gameData.teams[teamId];
        const players = team.players;
        const starters: any = [-1, -1, -1, -1, -1];
        const lostPlace = [];
        const stillLost = [];
        for(let i = 0;i < 5; i++) {
            let currentPlace = players
                .filter((p: any) => gameData.players[p].positionFirst == i + 1)
                .sort((a: any, b: any) => gameData.players[b].skillAverage - gameData.players[a].skillAverage);
            if(currentPlace.length > 0) {
                starters[i] = currentPlace[0];
            }else {
                lostPlace.push(i);
            }
        }
        for(let j = 0; j < lostPlace.length; j ++) {
            let i = lostPlace[j];
            let currentPlace = players
                .filter((p: any) => !(starters.includes(p)))
                .filter((p: any) => gameData.players[p].positionSecond == i + 1)
                .sort((a: any, b: any) => gameData.players[b].skillAverage - gameData.players[a].skillAverage);
            if(currentPlace.length > 0) {
                starters[i] = currentPlace[0];
            }else {
                stillLost.push(i);
            }
        }
        for(let j = 0; j < stillLost.length; j ++) {
            let i = stillLost[j];
            let currentPlace = players
                .filter((p: any) => !(p in starters))
                .sort((a: any, b: any) => gameData.players[b].skillAverage - gameData.players[a].skillAverage);
            starters[i] = currentPlace[0];
            
        }
        gameData.teams[teamId].starterPG = starters[0];
        gameData.teams[teamId].starterSG = starters[1];
        gameData.teams[teamId].starterSF = starters[2];
        gameData.teams[teamId].starterPF = starters[3];
        gameData.teams[teamId].starterC = starters[4];
        return starters;
    }

    public static getBenchPlayers(teamId: any, gameData: any): any {
        const team = gameData.teams[teamId];
        const starters = this.getStarters(teamId, gameData);
        const players = team.players;
        const dnp = team.dnp;
        const bench = players.filter((p: any) => !(starters.includes(p) || dnp.includes(p)));
        gameData.teams[teamId].bench = bench;
        return bench;
    }

    public static skillToThreeRate(skill: any, position: any) {
        if(skill > 95) {
            return 0.5 * 2 * RandomUtil.randn_bm(0, 1, 1);
        }else if(skill > 90) {
            return 0.4 * 2 * RandomUtil.randn_bm(0, 1, 1);
        }else if(skill > 80){
            return 0.3 * 2 * RandomUtil.randn_bm(0, 1, 1);
        }else {
            return 0.2 * 2 * RandomUtil.randn_bm(0, 1, 1);
        }
    }

    public static skillToInside(skill: any, position: any) {
        //中锋大前75时50%
        //小前80时
        //后卫85时
        if(position >= 4) {
            return RandomUtil.randn_bm(0, 1, 1 + (85 - skill) / 100);
        }else if(position >= 3) {
            return RandomUtil.randn_bm(0, 1, 1 + (85 - skill) / 100);
        }else {
            return RandomUtil.randn_bm(0, 1, 1 + (85 - skill) / 100);
        }
        
    }

    public static skillToMiddle(skill: any, position: any) {
        //一律85
        return RandomUtil.randn_bm(0, 1, 1 + (80 - skill) / 100);
    }

    public static skillToOutside(skill: any, position: any) {
        //一律95
        return RandomUtil.randn_bm(0, 1, 1 + (95 - skill) / 100);
    }

    public static skillToFree(skill: any, position: any) {
        //一律65
        return RandomUtil.randn_bm(0, 1, 1 + (60 - skill) / 80);
    }
}

class RandomUtil {
    public static random(start: number, end: number): any {
        return Math.floor(Math.random() * (end - start)) + start;
    }

    public static randomrandom(start: number, end: number): any {
        let rand = 0;
        for(let i = 0; i < 6; i ++) {
            rand += Math.random();
        }
        rand /= 6;
        return rand * (end - start) + start;
    }

    public static justRandom(start: number, end: number): any {
        return Math.random() * (end - start) + start;
    }

    public static randn_bm(min: number, max: number, skew: number) {
        var u = 0, v = 0;
        while(u === 0) u = Math.random();
        while(v === 0) v = Math.random();
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    
        num = num / 10.0 + 0.5;
        if (num > 1 || num < 0) num = this.randn_bm(min, max, skew);
        num = Math.pow(num, skew);
        num *= max - min;
        num += min;
        return num;
    }
}

class SkillCalculator {
    public static getBaseOfPosition(position: any, skill: any): number {
        const positionSkill = [
            [10, 10, 11, 12, 14], //身体
            [3, 5, 10, 14, 15], //盖帽
            [14, 12, 11, 6, 5], //抢断
            [9, 9, 11, 13, 14], //篮板
            [17, 15, 11, 8, 6], //传球
            [6, 9, 11, 14, 16], //内线
            [14, 14, 11, 9, 6], //外线
            [12, 11, 10, 9, 8], //罚球
            [33, 33, 40, 44, 47], //进攻
            [49, 48, 41, 37, 34], //防守
            [81, 81, 81, 81, 81], //总能力
        ];
        return positionSkill[skill - 1][position - 1];
    }

    public static getAverageForPosition(position: number, attack: boolean, defence: boolean, playerId: any, gameData: any): number {
        let average = 0;
        const player = gameData.players[playerId];

        if(attack) {
            let pass = player.skillPass;
            let basePass = SkillCalculator.getBaseOfPosition(position, 5);
            let mulPass = pass * basePass;

            let shotInterior = player.skillShotInterior;
            let shotInteriorBase = SkillCalculator.getBaseOfPosition(position, 6);
            let mulShotInterior = shotInterior * shotInteriorBase;

            mulPass += mulShotInterior;

            let shotExterior = player.skillShotExterior;
            let shotExteriorBase = SkillCalculator.getBaseOfPosition(position, 7);
            let mulShotExterior = shotExterior * shotExteriorBase;

            mulPass += mulShotExterior;

            let shotFree = player.skillShotFree;
            let shotFreeBase = SkillCalculator.getBaseOfPosition(position, 8);
            let mulShotFree = shotFree * shotFreeBase;

            mulPass += mulShotFree;
            average += mulPass;
        }

        if(defence) {
            let physique = player.skillPhysique;
            let physiqueBase = SkillCalculator.getBaseOfPosition(position, 1);
            let mulPhysique = physique * physiqueBase;

            let block = player.skillBlock;
            let blockBase = SkillCalculator.getBaseOfPosition(position, 2);
            let mulBlock = block * blockBase;

            mulPhysique += mulBlock;

            let steal = player.skillSteal;
            let stealBase = SkillCalculator.getBaseOfPosition(position, 3);
            let mulSteal = steal * stealBase;

            mulPhysique += mulSteal;

            let rebound = player.skillRebound;
            let reboundBase = SkillCalculator.getBaseOfPosition(position, 4);
            let mulRebound = rebound * reboundBase;

            mulPhysique += mulRebound;
            average += mulPhysique;
        }

        if(attack && defence) {
            average /= SkillCalculator.getBaseOfPosition(position, 11);
        }else if(attack) {
            average /= SkillCalculator.getBaseOfPosition(position, 10);
        }else {
            average /= SkillCalculator.getBaseOfPosition(position, 9);
        }

        average = average / 0.75 - 25;

        if(average > 99.0) {
            return 99;
        }else if(average < 40.0) {
            return 40;
        }
        return Math.round(average);
    }
}

class PlayerGenerator {
    static usFirstNames = ['雅各布', '迈克尔', '伊桑', '约书亚', '亚历山大', '安东尼', '威廉', '克里斯托弗', '杰顿', '安德鲁', 
        '约瑟夫', '大卫', '诺阿', '艾顿', '詹姆斯', '莱恩', '罗根', '约翰', '内森', '伊莱贾', '克里斯', '加布里尔', '本杰明',
        '乔纳森', '泰勒', '塞缪尔', '尼古拉斯', '加文', '迪兰', '杰克逊', '布兰顿', '凯勒布', '梅森', '安吉尔', '艾萨克', '埃文',
        '杰克', '凯文', '乔斯', '以赛亚', '卢克', '兰登', '贾斯汀', '卢卡斯', '扎克里', '乔丹', '罗伯特', '艾伦', '布雷登', 
        '托马斯', '卡梅伦', '亨特', '奥斯汀', '艾德里安', '康纳', '欧文', '艾丹', '贾森', '朱利安', '怀亚特', '查尔斯', '路易斯', 
        '卡特', '胡安', '蔡斯', '蒂亚戈', '杰里米', '布罗迪', '泽维尔', '亚当', '卡洛斯', '利亚姆', '海顿', '杰西斯', '伊恩', 
        '特里斯坦', '布莱恩', '肖恩', '科尔', '亚力克斯', '埃里克', '卡森', '布莱克', '库珀', '多米尼克', '凯尔', '伊莱', '大卫',
        '布兰登', '丹尼尔', '丹尼尔斯', '斯蒂芬', '斯蒂夫', '肯特', '里基', '特伦斯', '维克多', '亚伯拉罕', '沃恩', '伯纳德'];
    static usLastNames = ['史密斯', '约翰逊', '威廉姆斯', '布朗', '琼斯', '米勒', '戴维斯', '加西亚', '罗德里格斯', '威尔逊', 
        '马丁', '马丁内兹', '安德森', '泰勒', '托马斯', '赫尔南德斯', '摩尔', '杰克逊', '汤普森', '怀特', '洛佩兹', '李', '冈萨雷斯',
        '哈里斯', '克拉克', '刘易斯', '罗宾逊', '沃克', '佩雷斯', '霍尔', '杨', '艾伦', '桑切斯', '赖特', '金', '斯科特', '格林',
        '贝克', '亚当斯', '纳尔逊', '希尔', '坎贝尔', '米切尔', '罗伯茨', '卡特', '菲利普斯', '埃文斯', '托雷斯', '特纳', '西蒙斯',
        '格兰迪', '格兰特', '皮克', '奥多姆', '张伯伦', '保罗', '欧文', '威尔基', '杜波伊斯', '福尔摩斯', '亚罗', '皮尔斯', '阿伦',
        '加内特', '邓肯', '帕克', '吉诺比利', '诺维茨基', '艾顿', '福克斯', '巴克利', '萨克斯顿', '詹姆斯', '克劳福德', '里弗斯',
        '特朗普', '希拉里奥', '格里斯科姆', '霍福德', '霍华德', '詹金斯', '詹宁斯', '拉奇', '费斯克', '加索尔', '布洛克', '多利弗',
        '波特', '福特汉姆', '莫里斯', '布朗', '坦普尔', '巴图姆', '理查德森', '梅尔斯', '奥巴马', '菲利希奥', '富兰克林', '威廉姆斯', 
        '威廉姆森', '克里斯', '布莱恩特', '马龙', '奥尼尔', '布鲁克斯', '布鲁克', '格里芬', '福尼尔', '卡罗尔', '本内特', '伍德', 
        '巴恩斯', '科尔曼', '佩里', '鲍威尔', '帕特森', '哈密尔顿', '华莱士', '欧文斯', '费舍尔', '克鲁兹', '马绍尔', '塔克', '肯尼迪',
        '戈登', '莱斯', '罗伯特森', '布莱克', '米尔斯', '罗斯', '邓恩', '斯宾塞', '马修斯', '雷', '哈特', '安德鲁斯', '瑞兹', '莱利',
        '奥古斯汀', '劳伦斯', '阿姆斯特朗', '伦纳德', '韦斯利', '维金斯', '唐斯', '斯通', '阿尔斯通', '奈特', '斯蒂文斯', '韦伯',
        '埃利斯', '蒙克', '韦斯特', '海耶斯', '科克斯', '墨菲', '贝尔', '库克', '斯图尔特', '克拉克', '爱迪生', '阿尔德里奇',
        '安', '阿尔索普', '安东尼', '亚瑟', '培根', '巴里', '贝拉米', '伯克利', '比顿', '布莱尔', '布雷', '布莱特', '布鲁诺', '卡门',
        '马克思', '夏洛特', '丘吉尔', '柯林斯', '坎南', '科波菲尔', '克罗夫特', '达尔文', '昆西', '迪克', '多利', '道尔', '杜邦',
        '爱德华', '埃里奥特', '艾玛', '尤根', '法拉第', '费尔顿', '菲尔丁', '弗朗西斯', '芬克', '乔治', '高尔德', '格雷', '格雷斯',
        '盖伊', '哈里', '海沃德', '霍尔特', '豪斯', '霍恩比', '雅各布', '简', '约翰', '乔丹', '约瑟夫', '基德', '兰姆', '罗',
        '林肯', '卢卡斯', '麦当劳', '麦基', '马克', '麦卡锡', '麦卡杜', '门罗', '摩根', '默里', '内尔', '南斯', '尼克松', '诺埃尔',
        '奥卡姆', '奥兰多', '潘西', '彼得', '波尔', '里德', '罗伊', '帕森斯', '索尔', '辛普森', '库里', '杜兰特', '沃尔', '斯诺',
        '斯诺登', '斯普林霍尔', '斯威夫特', '托尼', '塔特尔', '范', '文森特', '沃伦', '瓦特', '范弗里特', '韦德', '丁宁', '丁利',
        '丁格尔', '万斯', '丘比特', '丘纳德', '丹伯里', '丹佛', '丹多', '丹尼尔', '丹尼斯', '丹尼特', '丹特利', '丹德里奇', '丹麦',
        '丹顿', '乌兰', '乐福', '乔伊斯', '乔伊特', '乔利', '乔布斯', '乔布森', '乔恩', '伊利', '伊巴卡', '什里夫', '伊文斯', '伊扎德',
        '伊斯特', '伊斯特林', '伊斯特兰', '伊斯特布鲁克', '伊斯特伍德', '英格尔斯', '英格拉姆', '伍兹', '乌尔曼', '乌尔森', '伍德豪斯',
        '舒伯特', '舒特', '敦克尔', '伯克斯', '伯克特', '克兰普顿', '克兰', '克利夫兰', '克利夫特', '克拉克森', '克罗姆', '克罗波西',
        '克莱格', '克里斯特', '兰斯', '兰贝思', '兰顿', '内尔姆斯', '凯', '凯克', '凯伊', '凯特', '切斯特', '开罗', '利拉德', '麦克格雷迪',
        '麦克伦姆', '利特', '利物浦', '利特尔', '黎曼', '利米', '利维', '利维克', '加勒特', '加特林', '加罗', '卓别林', '博尔特',
        '博文', '博登', '卡尔迪', '卡文迪许', '卡斯特', '卡斯特里', '卡文', '卡普林', '卢斯', '卢比奥', '卢瑟福', '古丁', '古尔丁',
        '古德哈特', '史密斯威克', '史蒂文森', '史蒂芬森', '吉普', '吉普森', '哈勃', '哈勒尔', '哈勃特', '哈姆雷特', '哈尼', '哈巴特', 
        '哈弗利切克', '哈德森', '哈德利', '哈文', '哈蒙', '哈达威', '哥德尔', '唐克斯', '唐宁', '唐纳', '图克', '图姆', '圣伊斯', 
        '圣卢西亚', '圣约翰', '埃塞尔', '艾尔', '埃尔登', '埃尔森', '埃弗斯', '艾格尔', '基', '基尔', '基特尔斯', '塔伦', '塞尔', '多特',
        '多比', '多拉德', '奈史密斯', '奥克兰', '奥克利', '奥克斯', '奥卡福', '奥布莱恩', '奥拉朱旺', '奥斯曼', '奥兹', '威尔士',
        '威尔莫特', '威尔肯斯', '威斯布鲁克', '威灵', '威特', '威玛', '尼克斯', '尼克尔', '尼克尔斯', '山姆', '巴扎德', '巴斯', '巴特勒', 
        '德罗赞', '德莱', '德莱尼', '德比', '德克尔', '德雷克斯勒', '德鲁', '德鲁伊', '怀特赛德', '惠特尼', '戈麦斯', '戴尔', '拉塞尔',
        '拉斐尔', '拉普利', '拉斯金', '拉特', '拜纳姆', '拜罗姆', '莫尔斯', '文森特', '斯伯丁'];

    public static getRandomPlayer(teamId: any, gameData: any): any {
        let rand = RandomUtil.random(0, PlayerGenerator.usFirstNames.length);
        const firstName = PlayerGenerator.usFirstNames[rand];
        rand = RandomUtil.random(0, PlayerGenerator.usLastNames.length);
        const lastName= PlayerGenerator.usLastNames[rand];
        this.getRandomPlayerWithName(teamId, firstName + '-' + lastName, gameData);
    }

    public static getRandomPlayerWithName(teamId: any, name: any, gameData: any): any {
        let age = RandomUtil.random(18, 23);
        let id = gameData.nextPlayerId;
        let positionFirst = RandomUtil.random(1, 6);
        let positionSecond = RandomUtil.random(1, 6);
        let potential = RandomUtil.random(1, 11);
        gameData.nextPlayerId += 1;
        let skillBlock = RandomUtil.random(50, 95);
        let skillPass = RandomUtil.random(50, 95);
        let skillPhysique = RandomUtil.random(50, 95);
        let skillRebound = RandomUtil.random(50, 95);
        let skillShotExterior = RandomUtil.random(50, 95);
        let skillShotInterior = RandomUtil.random(50, 95);
        let skillShotFree = RandomUtil.random(50, 95);
        let skillSteal = RandomUtil.random(50, 95);
        const player =  {
            age: age,
            draft: 0,
            experience: 0,
            id: id,
            loyalty: 1,
            name: name,
            numsChampion: 0,
            positionFirst: positionFirst,
            positionSecond: positionSecond,
            potential: potential,
            salary: 900000,
            skillAverage: 91,
            skillBlock: skillBlock,
            skillPass: skillPass,
            skillPhysique: skillPhysique,
            skillRebound: skillRebound,
            skillShotExterior: skillShotExterior,
            skillShotFree: skillShotFree,
            skillShotInterior: skillShotInterior,
            skillSteal: skillSteal,
            stateEnergy: 100,
            stateInjury: 0,
            team: teamId,
            yearsContract: 3,
            yearsLeague: 0,
        }
        gameData.players[id + ''] = player;
        gameData.teams[teamId].players.push(id + '');
        gameData.players[id].skillAverage = SkillCalculator.getAverageForPosition(positionFirst, true, true, id, gameData);
        gameData.players[id].skillAttack = SkillCalculator.getAverageForPosition(positionFirst, true, false, id, gameData);
        gameData.players[id].skillDefense = SkillCalculator.getAverageForPosition(positionFirst, false, true, id, gameData);
        gameData.players[id].regMaxScore = 0;
        gameData.players[id].regMaxAssist = 0;
        gameData.players[id].regMaxSteal = 0;
        gameData.players[id].regMaxBlock = 0;
        gameData.players[id].regMaxRebound = 0;
        gameData.players[id].regMaxTurnover = 0;
        gameData.players[id].offMaxScore = 0;
        gameData.players[id].offMaxAssist = 0;
        gameData.players[id].offMaxSteal = 0;
        gameData.players[id].offMaxBlock = 0;
        gameData.players[id].offMaxRebound = 0;
        gameData.players[id].offMaxTurnover = 0;
        gameData.players[id].totalRegGameNum = 0;
        gameData.players[id].seasonRegGameNum = 0;
        gameData.players[id].totalOffGameNum = 0;
        gameData.players[id].seasonOffGameNum = 0;
        gameData.players[id].totalRegScore = 0;
        gameData.players[id].totalRegAssist = 0;
        gameData.players[id].totalRegSteal = 0;
        gameData.players[id].totalRegBlock = 0;
        gameData.players[id].totalRegRebound = 0;
        gameData.players[id].totalRegTurnover = 0;
        gameData.players[id].totalRegTime = 0;
        gameData.players[id].totalRegFoul = 0;
        gameData.players[id].seasonRegScore = 0;
        gameData.players[id].seasonRegAssist = 0;
        gameData.players[id].seasonRegSteal = 0;
        gameData.players[id].seasonRegBlock = 0;
        gameData.players[id].seasonRegRebound = 0;
        gameData.players[id].seasonRegTurnover = 0;
        gameData.players[id].seasonRegTime = 0;
        gameData.players[id].seasonRegFoul = 0;
        gameData.players[id].totalOffScore = 0;
        gameData.players[id].totalOffAssist = 0;
        gameData.players[id].totalOffSteal = 0;
        gameData.players[id].totalOffBlock = 0;
        gameData.players[id].totalOffRebound = 0;
        gameData.players[id].totalOffTurnover = 0;
        gameData.players[id].totalOffTime = 0;
        gameData.players[id].totalOffFoul = 0;
        gameData.players[id].seasonOffScore = 0;
        gameData.players[id].seasonOffAssist = 0;
        gameData.players[id].seasonOffSteal = 0;
        gameData.players[id].seasonOffBlock = 0;
        gameData.players[id].seasonOffRebound = 0;
        gameData.players[id].seasonOffTurnover = 0;
        gameData.players[id].seasonOffTime = 0;
        gameData.players[id].seasonOffFoul = 0;
        gameData.players[id].seasonRegClose = 0;
        gameData.players[id].seasonRegCloseIn = 0;
        gameData.players[id].seasonRegMiddle = 0;
        gameData.players[id].seasonRegMiddleIn = 0;
        gameData.players[id].seasonRegThree = 0;
        gameData.players[id].seasonRegThreeIn = 0;
        gameData.players[id].seasonRegFree = 0;
        gameData.players[id].seasonRegFreeIn = 0;
        gameData.players[id].seasonOffClose = 0;
        gameData.players[id].seasonOffCloseIn = 0;
        gameData.players[id].seasonOffMiddle = 0;
        gameData.players[id].seasonOffMiddleIn = 0;
        gameData.players[id].seasonOffThree = 0;
        gameData.players[id].seasonOffThreeIn = 0;
        gameData.players[id].seasonOffFree = 0;
        gameData.players[id].seasonOffFreeIn = 0;
        gameData.players[id].carryWinNum = 0;
        gameData.players[id].lastSkillAverage = gameData.players[id].skillAverage;
    }
}

class DataUtil {
    public static rateToVal(rate: any) {
        if(rate + '' == 'NaN') {
            return '--';
        }
        return (rate * 100).toFixed(2) + '%';
    }

    public static positionToName(position: any) {
        if(position == 1) {
            return 'PG';
        }else if(position == 2) {
            return 'SG';
        }else if(position == 3) {
            return 'SF';
        }else if(position == 4) {
            return 'PF';
        }else {
            return 'C';
        }
    }
}

class MatchSimulator {
    static sideMap: any = {
        e1: {
            name: 'changeHandler',
            description: '控球人改变为现在之外的一人'
        },
        e2: {
            name: 'changeTeam',
            description: '球权交给另一个球队'
        },
        e3: {
            name: 'randomHandler',
            description: '球队内任意一人拿到球',
        },
        e4: {
            name: 'oppRandomHandler',
            description: '对手任意一人拿到球',
        },
        e5: {
            name: 'rstRoundTime',
            description: '重置回合计时为24',
        },
        e6: {
            name: 'rstHalfTime',
            description: '重置回合计时为14',
        },
        e7: {
            name: 'threeIn',
            description: '球员三分出手命中各加一',
        },
        e8: {
            name: 'threeOut',
            description: '球员三分出手加一',
        },
        e9: {
            name: 'middleIn',
            description: '球员中距离出手命中各加一',
        },
        e10: {
            name: 'middleOut',
            description: '球员中距离出手加一',
        },
        e11: {
            name: 'insideIn',
            description: '球员禁区出手命中各加一',
        },
        e12: {
            name: 'insideOut',
            description: '球员禁区出手加一',
        },
    }
    static actionMap: any = {
        A: {
            description: 'O过半场',
            sideEffect: [],
            minTime: 2,
            maxTime: 5,
        },
        B: {
            description: 'O运至三分线外',
            sideEffect: [],
            minTime: 1,
            maxTime: 4,
        },
        C: {
            description: 'O运至中距离',
            sideEffect: [],
            minTime: 1,
            maxTime: 4,
        },
        D: {
            description: 'O运至禁区',
            sideEffect: [],
            minTime: 1,
            maxTime: 4,
        },
        E: {
            description: 'O传球至外线的N',
            sideEffect: ['e1'],
            minTime: 0,
            maxTime: 2,
        },
        F: {
            description: 'O传球至中距离的N',
            sideEffect: ['e1'],
            minTime: 0,
            maxTime: 2,
        },
        G: {
            description: 'O传球至禁区N',
            sideEffect: ['e1'],
            minTime: 0,
            maxTime: 2,
        },
        H: {
            description: 'O将球拿起',
            sideEffect: [],
            minTime: 0,
            maxTime: 1,
        },
        I: {
            description: 'O三分进',
            sideEffect: ['e7', 'e2', 'e4', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        J: {
            description: 'O三分不进，弹回场内',
            sideEffect: ['e8', 'e5'],
            minTime: 0,
            maxTime: 2,
        },
        K: {
            description: 'O发球给N',
            sideEffect: ['e1'],
            minTime: 0,
            maxTime: 0,
        },
        L: {
            description: 'O三分不进，出界',
            sideEffect: ['e8', 'e2', 'e4', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        M: {
            description: 'R在禁区拿到前场篮板',
            sideEffect: ['e3'],
            minTime: 0,
            maxTime: 2,
        },
        N: {
            description: 'R捡到前场篮板',
            sideEffect: ['e3'],
            minTime: 0,
            maxTime: 3,
        },
        O: {
            description: 'P拿到后场篮板',
            sideEffect: ['e2', 'e4'],
            minTime: 0,
            maxTime: 2,
        },
        P: {
            description: 'P抢断了O',
            sideEffect: ['e2', 'e4', 'e5'],
            minTime: 0,
            maxTime: 0,
        },
        Q: {
            description: 'O三分出手，被P盖帽',
            sideEffect: ['e8'],
            minTime: 0,
            maxTime: 1,
        },
        R: {
            description: 'O三分出手被P盖到界外',
            sideEffect: ['e8', 'e3'],
            minTime: 0,
            maxTime: 1,
        },
        S: {
            description: 'P投篮犯规，三罚',
            sideEffect: ['e5'],
            minTime: 0,
            maxTime: 0,
        },
        T: {
            description: 'P犯规，犯规次数未到',
            sideEffect: ['e3', 'e6'],
            minTime: 0,
            maxTime: 0,
        },
        U: {
            description: 'O最后一罚进',
            sideEffect: ['e2', 'e4'],
            minTime: 0,
            maxTime: 0,
        },
        V: {
            description: 'O最后一罚不进',
            sideEffect: [],
            minTime: 0,
            maxTime: 0,
        },
        W: {
            description: 'P犯规，犯规次数已到',
            sideEffect: ['e5'],
            minTime: 0,
            maxTime: 0,
        },
        X: {
            description: 'O中距离出手命中',
            sideEffect: ['e9', 'e2', 'e4', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        Y: {
            description: 'O中距离出手不中，球弹回场内',
            sideEffect: ['e10', 'e2', 'e4'],
            minTime: 0,
            maxTime: 1,
        },
        Z: {
            description: 'O中距离出手不中，球出界外',
            sideEffect: ['e10', 'e2', 'e4', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AA: {
            description: 'O中距离出手，被P盖到场内',
            sideEffect: ['e10'],
            minTime: 0,
            maxTime: 1,
        },
        AB: {
            description: 'O中距离出手，被P盖出界外',
            sideEffect: ['e10', 'e3', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AC: {
            description: 'O中距离出手不进，P打手犯规',
            sideEffect: ['e5'],
            minTime: 0,
            maxTime: 1,
        },
        AD: {
            description: 'O三分出手命中，P打手犯规',
            sideEffect: ['e7', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AE: {
            description: 'O中距离出手命中，P打手犯规',
            sideEffect: ['e9', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AF: {
            description: 'O禁区出手命中，P打手犯规',
            sideEffect: ['e11', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AG: {
            description: 'O禁区出手命中',
            sideEffect: ['e11', 'e2', 'e4', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AH: {
            description: 'O禁区出手不中，球弹回场内',
            sideEffect: ['e12', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AI: {
            description: 'O禁区出手不中，球出界外',
            sideEffect: ['e12', 'e2', 'e4', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AJ: {
            description: 'O禁区出手，被P盖到场内',
            sideEffect: ['e12'],
            minTime: 0,
            maxTime: 1,
        },
        AK: {
            description: 'O禁区出手，被P盖出界外',
            sideEffect: ['e12', 'e3', 'e5'],
            minTime: 0,
            maxTime: 1,
        },
        AL: {
            description: 'O禁区出手不进，P打手犯规',
            sideEffect: ['e5'],
            minTime: 0,
            maxTime: 1,
        },
    }
    static statesMap: any = {
        s1: {
            description: 'O在后场运球',
            actions: {
                A: {
                    target: 's2',
                    base: 180,
                },
                E: {
                    target: 's2',
                    base: 10,
                },
                F: {
                    target: 's3',
                    base: 8,
                },
                G: {
                    target: 's4',
                    base: 4,
                },
                I: {
                    target: 's8',
                    base: 1,
                },
                L: {
                    target: 's8',
                    base: 2,
                },
                R: {
                    target: 's8',
                    base: 1,
                },
                J: {
                    target: 's9',
                    base: 1,
                },
                Q: {
                    target: 's9',
                    base: 1,
                },
                S: {
                    target: 's11',
                    base: 1,
                },
            }
        },
        s2: {
            description: 'O在外线运球',
            actions: {
                B: {
                    target: 's2',
                    base: 40,
                },
                E: {
                    target: 's2',
                    base: 20,
                },
                C: {
                    target: 's3',
                    base: 40,
                },
                F: {
                    target: 's3',
                    base: 30,
                },
                G: {
                    target: 's4',
                    base: 5,
                },
                H: {
                    target: 's5',
                    base: 7,
                },
                I: {
                    target: 's8',
                    base: 3,
                },
                L: {
                    target: 's8',
                    base: 2,
                },
                R: {
                    target: 's8',
                    base: 1,
                },
                J: {
                    target: 's9',
                    base: 3,
                },
                Q: {
                    target: 's9',
                    base: 1,
                },
                S: {
                    target: 's11',
                    base: 1,
                },
                P: {
                    target: 's1',
                    base: 3,
                },
                AD: {
                    target: 's11',
                    base: 1,
                },
            }
        },
        s3: {
            description: 'O在中距离运球',
            actions: {
                B: {
                    target: 's2',
                    base: 1,
                },
                E: {
                    target: 's2',
                    base: 1,
                },
                C: {
                    target: 's3',
                    base: 1,
                },
                F: {
                    target: 's3',
                    base: 1,
                },
                D: {
                    target: 's4',
                    base: 1,
                },
                G: {
                    target: 's4',
                    base: 1,
                },
                H: {
                    target: 's6',
                    base: 1,
                },
                X: {
                    target: 's8',
                    base: 1,
                },
                Z: {
                    target: 's8',
                    base: 1,
                },
                AB: {
                    target: 's8',
                    base: 1,
                },
                Y: {
                    target: 's9',
                    base: 1,
                },
                AA: {
                    target: 's9',
                    base: 1,
                },
                AC: {
                    target: 's11',
                    base: 1,
                },
                P: {
                    target: 's1',
                    base: 1,
                },
                AE: {
                    target: 's11',
                    base: 1,
                }
            }
        },
        s4: {
            description: 'O在禁区运球',
            actions: {
                E: {
                    target: 's2',
                    base: 1,
                },
                C: {
                    target: 's3',
                    base: 1,
                },
                F: {
                    target: 's3',
                    base: 1,
                },
                D: {
                    target: 's4',
                    base: 1,
                },
                G: {
                    target: 's4',
                    base: 1,
                },
                H: {
                    target: 's7',
                    base: 1,
                },
                AG: {
                    target: 's8',
                    base: 1,
                },
                AI: {
                    target: 's8',
                    base: 1,
                },
                AK: {
                    target: 's8',
                    base: 1,
                },
                AH: {
                    target: 's9',
                    base: 1,
                },
                AJ: {
                    target: 's9',
                    base: 1,
                },
                AL: {
                    target: 's11',
                    base: 1,
                },
                P: {
                    target: 's1',
                    base: 1,
                },
                AF: {
                    target: 's11',
                    base: 1,
                }
            }
        },
        s5: {
            description: 'O在外线持球',
            actions: {
                E: {
                    target: 's2',
                    base: 1,
                },
                F: {
                    target: 's3',
                    base: 1,
                },
                G: {
                    target: 's4',
                    base: 1,
                },
                I: {
                    target: 's8',
                    base: 1,
                },
                L: {
                    target: 's8',
                    base: 1,
                },
                R: {
                    target: 's8',
                    base: 1,
                },
                J: {
                    target: 's9',
                },
                Q: {
                    target: 's9',
                    base: 1,
                },
                S: {
                    target: 's11',
                    base: 1,
                },
                P: {
                    target: 's1',
                    base: 1,
                },
                AD: {
                    target: 's11',
                    base: 1,
                },
            }
        },
        s6: {
            description: 'O在中距离持球',
            actions: {
                E: {
                    target: 's2',
                    base: 1,
                },
                F: {
                    target: 's3',
                    base: 1,
                },
                G: {
                    target: 's4',
                    base: 1,
                },
                X: {
                    target: 's8',
                    base: 1,
                },
                Z: {
                    target: 's8',
                    base: 1,
                },
                AB: {
                    target: 's8',
                    base: 1,
                },
                Y: {
                    target: 's9',
                    base: 1,
                },
                AA: {
                    target: 's9',
                    base: 1,
                },
                AC: {
                    target: 's11',
                    base: 1,
                },
                P: {
                    target: 's1',
                    base: 1,
                },
                AE: {
                    target: 's11',
                    base: 1,
                },
            }
        },
        s7: {
            description: 'O在禁区持球',
            actions: {
                E: {
                    target: 's2',
                    base: 1,
                },
                F: {
                    target: 's3',
                    base: 1,
                },
                G: {
                    target: 's4',
                    base: 1,
                },
                AG: {
                    target: 's8',
                    base: 1,
                },
                AI: {
                    target: 's8',
                    base: 1,
                },
                AK: {
                    target: 's8',
                    base: 1,
                },
                AH: {
                    target: 's9',
                    base: 1,
                },
                AJ: {
                    target: 's9',
                    base: 1,
                },
                AL: {
                    target: 's11',
                    base: 1,
                },
                P: {
                    target: 's1',
                    base: 1,
                },
                AF: {
                    target: 's11',
                    base: 1,
                },
            }
        },
        s8: {
            description: '准备发后场球',
            actions: {
                K: {
                    target: 's1',
                    base: 1,
                }
            }
        },
        s9: {
            description: '抢篮板',
            actions: {
                O: {
                    target: 's1',
                    base: 1,
                },
                N: {
                    target: 's3',
                    base: 1,
                },
                M: {
                    target: 's4',
                    base: 1,
                },
            }
        },
        s10: {
            description: 'O准备发前场球',
            actions: {
                U: {
                    target: 's8',
                    base: 1,
                },
            }
        },
        s11: {
            description: 'O在罚球',
            actions: {
                V: {
                    target: 's9',
                    base: 1,
                },
                U: {
                    target: 's8',
                    base: 1,
                }
            }
        },
    }
    gameData: any;

    constructor(gameData: any) {
        this.gameData = gameData;
    }

    public simulate(homeTeamId: any, visitorId: any) {
        const homeTeam = this.gameData.teams[homeTeamId];
        const visitor = this.gameData.teams[visitorId];
        // current
    }

    public simulateSection(seconds: number) {
        const match = {
            timeLeft: seconds,
            roundLeft: 24,
            state: 's1',
            handleTeam: 'home',
            handler: '',
            homeTeamName: '凯尔特人',
            visitorName: '湖人',
            homeMember: {
                pg: {
                    name: '凯尔特人控位',
                },
                sg: {
                    name: '凯尔特人分位',
                },
                sf: {
                    name: '凯尔特人小前',
                },
                pf: {
                    name: '凯尔特人大前',
                },
                c: {
                    name: '凯尔特人中锋',
                }
            },
            visitorMember: {
                pg: {
                    name: '湖人控卫',
                },
                sg: {
                    name: '湖人分卫',
                },
                sf: {
                    name: '湖人小前',
                },
                pf: {
                    name: '湖人大前',
                },
                c: {
                    name: '湖人中锋',
                }
            }
        }
        this.getHandler(match);
        while(match.timeLeft > 0) {
            this.describeState(match);
            this.updateState(match);
        }
    }

    public getPlayerExceptPlace(p: string, match: any, side: string) {
        let place = this.getPlaceExcept(p);
        if(side == 'home') {
            return match.homeMember[place];
        }else {
            return match.visitorMember[place];
        }
    }

    public getPlaceExcept(p: string) {
        const t = ['pg', 'sg', 'sf', 'pf', 'c'];
        let rand = RandomUtil.random(0, 5);
        while(t[rand] == p) {
            rand = RandomUtil.random(0, 5);
        }
        return t[rand];
    }

    public getHandler(match: any) {
        match.handleTeam = 'home',
        match.handler = 'pg';
    }

    public getTeamName(match: any) {
        if(match.handleTeam == 'home') {
            return match.homeTeamName;
        }
        return match.visitorName;
    }

    public getHandlerName(match: any) {
        if(match.handleTeam == 'home') {
            return match.homeMember[match.handler].name;
        }
        return match.visitorMember[match.handler].name;
    }

    public getPlaceName(place: any, match: any) {
        if(match.handleTeam == 'home') {
            return match.homeMember[place].name;
        }
        return match.visitorMember[place].name;
    }

    public getOppName(place: any, match: any) {
        if(match.handleTeam == 'visitor') {
            return match.homeMember[match.handler].name;
        }
        return match.visitorMember[match.handler].name;
    }

    public describeState(match: any) {
        let des = `${MatchSimulator.statesMap[match.state].description}`.replace('O', `${this.getTeamName(match)}的${this.getHandlerName(match)}`);
        console.log(des);
    }

    //需要重写一下，有一些是动作前的？有一些是动作后的？
    public describeActionAndDoSideEffect(name: any, match: any) {
        this.calcActionTime(name, match);
        let action = MatchSimulator.actionMap[name];
        const places = ['pg', 'sg', 'sf', 'pf', 'c'];
        let O = match.handler;
        let oName = this.getPlaceName(O, match);
        let N = places[RandomUtil.random(0, 4)];
        let nName = this.getPlaceName(N, match);
        let R = places[RandomUtil.random(0, 4)];
        let rName = this.getPlaceName(R, match);
        let P = places[RandomUtil.random(0, 4)];
        let pName = this.getOppName(P, match);
        if(action.sideEffect.length > 0) {
            for(let i = 0; i < action.sideEffect.length; i ++) {
                let effect = action.sideEffect[i];
                if(effect == 'e1') {
                    let currentHandler = match.handler;
                    match.handler = this.getPlaceExcept(currentHandler);
                    N = match.handler;
                    nName = this.getPlaceName(N, match);
                }else if(effect == 'e3') {
                    let rand = RandomUtil.random(0, 4);
                    match.handler = places[rand];
                    R = match.handler;
                    rName = this.getPlaceName(R, match);
                }else if(effect == 'e4') {
                    let rand = RandomUtil.random(0, 4);
                    match.handler = places[rand];
                    P = match.handler;
                    pName = this.getPlaceName(P, match);
                }else if(effect == 'e2') {
                    if(match.handleTeam == 'home') {
                        match.handleTeam = 'visitor';
                    }else {
                        match.handleTeam = 'home';
                    }
                }else if(effect == 'e5') {
                    match.roundLeft = 24;
                }else if(effect == 'e6') {
                    if(match.roundLeft < 14) {
                        match.roundLeft = 14;
                    }
                }
            }
        }
        console.log(action.description
            .replace('O', oName)
            .replace('N', nName)
            .replace('R', rName)
            .replace('P', pName));
    }

    private calcActionTime(action: any, match: any) {
        let minTime = MatchSimulator.actionMap[action].minTime;
        let maxTime = MatchSimulator.actionMap[action].maxTime;
        let time = RandomUtil.justRandom(minTime, maxTime);
        match.timeLeft -= time;
        match.roundLeft -= time;
        return time;
    }

    public updateState(match: any) {
        const currentState = match.state;
        const actions = MatchSimulator.statesMap[currentState].actions;
        const aAndN = [];
        for(let i in actions) {
            aAndN.push(i);
        }
        let rand = RandomUtil.random(0, aAndN.length);
        const actionName = aAndN[rand];
        this.describeActionAndDoSideEffect(actionName, match);
        match.state = actions[actionName].target;
        // console.log(`回合剩余时间${match.roundLeft.toFixed(2)}，本节剩余时间${match.timeLeft.toFixed(2)}`)
        // console.log(aAndN);
    }
    
}