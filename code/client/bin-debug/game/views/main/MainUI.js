var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/main/MainSkin.exml";
        return _this;
    }
    MainUI.prototype.onShow = function () {
        _super.prototype.onShow.call(this);
        SoundUtils.getInstance().playSound('25', 0);
    };
    MainUI.prototype.addListener = function () {
        _super.prototype.addListener.call(this);
        this.m_pRankModleBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRankBtn, this);
    };
    MainUI.prototype.removeListener = function () {
        _super.prototype.removeListener.call(this);
        this.m_pRankModleBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRankBtn, this);
    };
    MainUI.prototype.onAdaptive = function () {
        UIManager.updataPoint(this.m_pBgImg, 667, 375);
        UIManager.rightTopAdaptive(this.m_pRightTow, 866, 45);
        UIManager.rightBelowAdaptive(this.m_pRightLowGroup, 1067, 704);
        UIManager.leftBelowAdaptive(this.m_pRankGroup, 59, 543);
        UIManager.updataPoint(this.m_pModleBtnGroup, 1017, 378);
    };
    MainUI.prototype.release = function () {
    };
    MainUI.prototype.onClickRankBtn = function () {
        core.EventCenter.getInstance().sendEvent(new core.ModuleEventData(core.EventID.MODULE_HIDE, ModuleEnum.MAINUI));
        GameModeManager.getInstance().enterGame(GameTypeEnum.EXERCISE);
    };
    MainUI.prototype.onButtonClick = function (event) {
        switch (event.currentTarget) {
        }
    };
    return MainUI;
}(core.EUIComponent));
__reflect(MainUI.prototype, "MainUI");
//# sourceMappingURL=MainUI.js.map