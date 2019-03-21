class Helper {

    //创建新球员时需要调用这个
    public static initPlayerBasicData(gameData: any, id: any) {
        this.calcSkills(gameData, id);
        this.resetSeasonData(gameData, id);
        this.initTotalData(gameData, id);
        this.initMaxData(gameData, id);
    }

    //计算skill分数 并且还重置了lastSkillAverage 调用时间可能有限
    public static calcSkills(gameData: any, id: any) {
        let positionFirst = gameData.players[id].positionFirst;
        gameData.players[id].skillAverage = SkillCalculator.getAverageForPosition(positionFirst, true, true, id, gameData);
        gameData.players[id].skillAttack = SkillCalculator.getAverageForPosition(positionFirst, true, false, id, gameData);
        gameData.players[id].skillDefense = SkillCalculator.getAverageForPosition(positionFirst, false, true, id, gameData);
        gameData.players[id].lastSkillAverage = gameData.players[id].skillAverage;
    }

    //初始化生涯数据 荣誉数据
    public static initTotalData(gameData: any, id: any) {
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
        gameData.players[id].numsChampion = gameData.players[id].numsChampion || 0;
        gameData.players[id].numsMvp = 0;
        gameData.players[id].numsFMvp = 0;
        gameData.players[id].numsScoreTop = 0;
        gameData.players[id].numsReboundTop = 0;
        gameData.players[id].numsAssistTop = 0;
        gameData.players[id].numsStealTop = 0;
        gameData.players[id].numsBlockTop = 0;
    }

    //生涯最高数据
    public static initMaxData(gameData: any, id: any) {
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
    }

    //每个赛季需要清零的数据可以加在这里
    public static resetSeasonData(gameData: any, id: any) {
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
    }

    public static getAwards(gameData: any, id: any) {
        let result = "";
        const player = gameData.players[id];
        if(player.numsChampion > 0) {
            result += `,${player.numsChampion}x总冠军`;
        }
        if(player.numsMvp > 0) {
            result += `,${player.numsMvp}xMVP`;
        }
        if(player.numsFMvp > 0) {
            result += `,${player.numsFMvp}xFMMP`;
        }
        if(player.numsScoreTop > 0) {
            result += `,${player.numsScoreTop}x得分王`;
        }
        if(player.numsReboundTop > 0) {
            result += `,${player.numsReboundTop}x篮板王`;
        }
        if(player.numsAssistTop > 0) {
            result += `,${player.numsAssistTop}x助攻王`;
        }
        if(player.numsStealTop > 0) {
            result += `,${player.numsStealTop}x抢断王`;
        }
        if(player.numsBlockTop > 0) {
            result += `,${player.numsBlockTop}x盖帽王`;
        }
        if(result == "") {
            result = "还没有获得什么荣誉呢！";
        }else {
            result = result.slice(1);
        }
        return result;
    }
}

class UIHelper {

    public static createAlert(message: string, id: string|null) {
        let rootElement = document.body;
        const container = document.createElement("div");
        const transparentPane = document.createElement("div");
        transparentPane.style.cssText = Style.transparentStyle;
        if(id) {
            rootElement = document.getElementById(id) || document.body;
        }
        rootElement.style.position = "relative";
        container.style.cssText = Style.coverLayer;
        const removeLayer = function() {
            rootElement.removeChild(container);
        }
        container.addEventListener('click', removeLayer);
        const innerPane = document.createElement("div");
        innerPane.addEventListener('click', function(event: Event) {
            event.stopPropagation();
        });
        innerPane.style.cssText = Style.innerPaneStyle;
        const pText = document.createElement("p");
        pText.textContent = message;
        const confirm = document.createElement("button");
        confirm.textContent = "确定";
        confirm.addEventListener('click', removeLayer);
        confirm.style.cssText = Style.basicButton;
        innerPane.appendChild(pText);
        innerPane.appendChild(confirm);
        container.appendChild(transparentPane);
        container.appendChild(innerPane);
        rootElement.appendChild(container);
    }
}

class Style {

    public static titleGreen = "#9BC595";
    public static borderRed = "#AE4E26";
    public static lightBlue = "#79E8D0";
    public static lightGreen = "#A2CEB3";
    public static paneYellow = "#FDFFD0";

    public static coverLayer = `
    z-index: 999;
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    `;

    public static innerPaneStyle = `
    width: 50%;
    height: 50%;
    background: ${Style.paneYellow};
    z-index: 9999;
    text-align: center;
    border: 1px solid ${Style.borderRed};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
    `;

    public static transparentStyle = `
    background: #233333;
    opacity: 0.1;
    position: absolute;
    width: 100%;
    height: 100%;
    `;

    public static basicButton = `
    background: ${Style.titleGreen};
    border: 1px solid ${Style.borderRed};
    `;
}