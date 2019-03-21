"use strict";
var Helper = /** @class */ (function () {
    function Helper() {
    }
    //创建新球员时需要调用这个
    Helper.initPlayerBasicData = function (gameData, id) {
        this.calcSkills(gameData, id);
        this.resetSeasonData(gameData, id);
        this.initTotalData(gameData, id);
        this.initMaxData(gameData, id);
    };
    //计算skill分数 并且还重置了lastSkillAverage 调用时间可能有限
    Helper.calcSkills = function (gameData, id) {
        var positionFirst = gameData.players[id].positionFirst;
        gameData.players[id].skillAverage = SkillCalculator.getAverageForPosition(positionFirst, true, true, id, gameData);
        gameData.players[id].skillAttack = SkillCalculator.getAverageForPosition(positionFirst, true, false, id, gameData);
        gameData.players[id].skillDefense = SkillCalculator.getAverageForPosition(positionFirst, false, true, id, gameData);
        gameData.players[id].lastSkillAverage = gameData.players[id].skillAverage;
    };
    //初始化生涯数据
    Helper.initTotalData = function (gameData, id) {
        gameData.players[id].totalRegGameNum = 0;
        gameData.players[id].totalOffGameNum = 0;
        gameData.players[id].totalRegScore = 0;
        gameData.players[id].totalRegAssist = 0;
        gameData.players[id].totalRegSteal = 0;
        gameData.players[id].totalRegBlock = 0;
        gameData.players[id].totalRegRebound = 0;
        gameData.players[id].totalRegTurnover = 0;
        gameData.players[id].totalRegTime = 0;
        gameData.players[id].totalRegFoul = 0;
        gameData.players[id].totalOffScore = 0;
        gameData.players[id].totalOffAssist = 0;
        gameData.players[id].totalOffSteal = 0;
        gameData.players[id].totalOffBlock = 0;
        gameData.players[id].totalOffRebound = 0;
        gameData.players[id].totalOffTurnover = 0;
        gameData.players[id].totalOffTime = 0;
        gameData.players[id].totalOffFoul = 0;
    };
    //生涯最高数据
    Helper.initMaxData = function (gameData, id) {
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
    };
    //每个赛季需要清零的数据可以加在这里
    Helper.resetSeasonData = function (gameData, id) {
        gameData.players[id].seasonRegGameNum = 0;
        gameData.players[id].seasonOffGameNum = 0;
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
        gameData.players[id].seasonRegScore = 0;
        gameData.players[id].seasonRegAssist = 0;
        gameData.players[id].seasonRegSteal = 0;
        gameData.players[id].seasonRegBlock = 0;
        gameData.players[id].seasonRegRebound = 0;
        gameData.players[id].seasonRegTurnover = 0;
        gameData.players[id].seasonRegTime = 0;
        gameData.players[id].seasonRegFoul = 0;
        gameData.players[id].carryWinNum = 0;
    };
    return Helper;
}());
