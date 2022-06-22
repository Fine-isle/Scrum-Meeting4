/**
 * 小程序配置文件
 */

var host = "http://gov.jointem.com/zyb/api"  //API请求接口
var host_sh = "http://m.jointem.com"  //API请求接口
var host_iamge = "http://gov.jointem.com"     //图片拼接前

var config = {

    // 下面的地址配合云端 Server 工作
    host,

    loginUrl: `${host_iamge}/zyb/public/user/system/login`, /** 登录接口 login */
    logout: `${host_iamge}/zyb/public/user/system/logout`,  /** 退出登录 logout */
    AppinitData: `${host}/init3_1/public/getAppInitData`, /** 首页接口数据 - 轮播 */
    GET_HOT_NEWS: `${host}/hotNews/public/getHotNews?accessToken=`,/** 获取新闻动态 */
    
    newsTagUrl: `${host}/newstag/public/getnewstag`, /** 获取政务资讯顶部标签 */

    // 测试的请求地址
    requestUrl: `${host}/testRequest`,

    //生活
    RecommendDoorListUrl: `${host_sh}/front/public/advert/getAdvertRecommendDoorList`, /** 获取便民首页优选推荐店铺列表 */
};

module.exports = config
