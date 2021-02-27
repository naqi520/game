<template>
	<div>
		<navbar></navbar>
		<bannerbar>
			<div class="swiper-slide" v-for="data in bannerlist" :style="{background: 'url('+data.thumbnail+')  center'}">
				<div class="swiper-slide-content"><span class="banner-year">{{data.gameTitle}}</span>
					<h4 class="banner-title">{{data.pageName}}</h4>
					<p class="banner-text">{{data.platform}}</p>
					<h4 class="banner-text "> <a :href="data.dedicatedPageUrl" target="_blank">了解更多</a></h4>
				</div>
			</div>
		</bannerbar>
		<About></About>

		<Games>
		</Games>
		<div class="gengxin">
			<div class="ubi-title">
				<h2 style="color: black;">最近更新</h2>
			</div>
			<el-divider></el-divider>
			<swiper>
				<div class="swiper-slide" v-for="data in Activitylist" :key='data.article_id'>
					<div class="gamelist " id="gamelist">
						<div class="game_text" style="background: transparent;">
							<div class="thumbnail" @click="ActivityR(data.article_id,data.iid)" style="margin: 10px;">
								<div class="thumb-pic">
									<img :src="data.cover" alt="">
								</div>
								<div class="caption">
									<p style="font-size: 16px;">更新时间：{{data.send_date}}</p>
									<h3>{{data.title}}</h3>
									<p style="font-size: 16px;">{{data.abstract}}</p>

								</div>
								<div class="latestNews__shadow"></div>
							</div>
						</div>
					</div>
				</div>

			</swiper>
			<!-- <el-divider></el-divider> -->
			<el-divider></el-divider>
			<button class="ubimore" @click="ChangR()" style="margin-top: 20px;">更多更新</button>

		</div>
		<Ranking></Ranking>
		<Activity></Activity>
		<footerbar></footerbar>
	</div>

</template>

<script>
	import swiper from '@/views/film/Swiper.vue'
	import bannerbar from '@/views/film/Bannerbar.vue'
	import Activity from '@/views/film/Activity.vue'
	import About from '@/views/film/About.vue'
	import Games from '@/views/film/Games.vue'
	import Ranking from '@/views/film/Ranking.vue'
	import navbar from '@/components/Navbar.vue'
	import footerbar from '@/components/footerbar.vue'
	import about from "@/views/About/about.vue"
	export default {
		data() {
			return {
				list: ["https://www.ubisoft.com.cn"],
				datalist: [{
						"id": 13,
						"gameTitle": "舞力全开",
						"thumbnail": "/upload/images/games/jdc_thumb.jpg",
						"pageName": "jdc",
						"platform": "Nintendo Switch",
						"platformIcon": "Switch",
						"category": "适合儿童,即将发布,系列",
						"genre": "休闲,家庭,体感,音乐",
						"sequence": null,
						"state": "publish",
						"updatedAt": "2020-12-04 13:49:51",
						"releasedAt": "2021-01-30 00:00:00",
						"publishedAt": "2020-12-04 13:48:14",
						"device": "主机游戏",
						"releasedDesc": "即将发布",
						"englishName": "just dance",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://www.ubisoft.com.cn/jdc"
					},
					{
						"id": 12,
						"gameTitle": "疯狂兔子：编程学院",
						"thumbnail": "/upload/images/games/rbc_thumb.jpg",
						"pageName": "rbc",
						"platform": "Android,PC,iPad,iPhone",
						"platformIcon": "PC,IOS,Android",
						"category": "免费,适合儿童",
						"genre": "休闲,家庭,益智",
						"sequence": null,
						"state": "publish",
						"updatedAt": "2020-10-15 18:06:40",
						"releasedAt": "2020-10-08 08:00:00",
						"publishedAt": "2020-10-08 11:12:42",
						"device": "PC游戏,移动游戏",
						"releasedDesc": "2020-10-08",
						"englishName": "rabbids coding",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://www.ubisoft.com.cn/games/rbc"
					},
					{
						"id": 11,
						"gameTitle": "魔法门之英雄无敌：王朝",
						"thumbnail": "/upload/images/games/mmhd_thumb.jpg",
						"pageName": "mmhd",
						"platform": "Android,iPhone",
						"platformIcon": "IOS,Android",
						"category": "免费,可下载",
						"genre": "冒险,策略",
						"sequence": 50,
						"state": "publish",
						"updatedAt": "2020-08-28 15:26:31",
						"releasedAt": "2019-10-15 08:00:00",
						"publishedAt": "2020-08-28 15:24:43",
						"device": "移动游戏",
						"releasedDesc": "2019-10-15",
						"englishName": "heroes of might & magic: dynasty",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/mmhd"
					},
					{
						"id": 7,
						"gameTitle": "特技摩托：崛起",
						"thumbnail": "/upload/images/games/trialsrising_thumb.jpg",
						"pageName": "trialsrising",
						"platform": "PC,Playstation4,Xbox One,Nintendo Switch",
						"platformIcon": "PC,XBOXONE,PS4,Switch",
						"category": "",
						"genre": "运动",
						"sequence": 50,
						"state": "publish",
						"updatedAt": "2020-08-26 16:01:12",
						"releasedAt": "2019-02-01 00:00:00",
						"publishedAt": "2018-06-27 14:03:00",
						"device": "主机游戏,PC游戏",
						"releasedDesc": "2019-02-01",
						"englishName": "trials rising",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/trialsrising"
					},
					{
						"id": 10,
						"gameTitle": "魔法门之英雄无敌：战争纪元",
						"thumbnail": "/upload/images/games/eoc_thumb.jpg",
						"pageName": "eoc",
						"platform": "Android,iPhone",
						"platformIcon": "IOS,Android",
						"category": "免费,可下载",
						"genre": "角色扮演,策略",
						"sequence": 45,
						"state": "publish",
						"updatedAt": "2020-08-28 15:26:42",
						"releasedAt": "2017-06-20 08:00:00",
						"publishedAt": "2020-08-28 15:21:06",
						"device": "移动游戏",
						"releasedDesc": "2017-06-20",
						"englishName": "heroes of might & magic:Era of Chaos",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/eoc"
					},
					{
						"id": 9,
						"gameTitle": "饥饿鲨：世界",
						"thumbnail": "/upload/images/games/hsw_thumb.jpg",
						"pageName": "hsw",
						"platform": "Android,iPad,iPhone,windows phone",
						"platformIcon": "IOS,Android",
						"category": "免费,可下载",
						"genre": "冒险,休闲",
						"sequence": 34,
						"state": "publish",
						"updatedAt": "2020-08-28 15:19:34",
						"releasedAt": "2016-05-05 00:00:00",
						"publishedAt": "2020-08-28 15:17:42",
						"device": "移动游戏",
						"releasedDesc": "2016-5-5",
						"englishName": "hungry shark world",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/hsw"
					},
					{
						"id": 6,
						"gameTitle": "英雄无敌7",
						"thumbnail": "/upload/images/games/mmh7_thumb.jpg",
						"pageName": "mmh7",
						"platform": "PC",
						"platformIcon": "PC",
						"category": "系列",
						"genre": "策略",
						"sequence": 54,
						"state": "publish",
						"updatedAt": "2020-08-26 15:58:58",
						"releasedAt": "2015-09-29 00:00:00",
						"publishedAt": "2015-11-30 19:58:00",
						"device": "PC游戏",
						"releasedDesc": "2015-09-29",
						"englishName": "might and magic heroes 7",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/mmh7"
					},
					{
						"id": 4,
						"gameTitle": "光之子",
						"thumbnail": "/upload/images/games/col_thumb.jpg",
						"pageName": "col",
						"platform": "PC,Xbox One,Xbox 360,Playstation3,Playstation Vita,Wii U",
						"platformIcon": "PC,XBOXONE",
						"category": "适合儿童",
						"genre": "休闲",
						"sequence": 52,
						"state": "publish",
						"updatedAt": "2020-08-26 15:49:50",
						"releasedAt": "2014-04-30 00:00:00",
						"publishedAt": "2015-11-30 21:04:00",
						"device": "主机游戏,PC游戏",
						"releasedDesc": "2014-04-30",
						"englishName": "child of light",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/col"
					},
					{
						"id": 3,
						"gameTitle": "特技摩托：聚变",
						"thumbnail": "/upload/images/games/trfu_thumb.jpg",
						"pageName": "trfu",
						"platform": "PC,Playstation4,Xbox One,Xbox 360",
						"platformIcon": "PC,XBOXONE,PS4",
						"category": "",
						"genre": "竞速",
						"sequence": 51,
						"state": "publish",
						"updatedAt": "2020-08-26 15:46:44",
						"releasedAt": "2014-04-16 00:00:00",
						"publishedAt": "2015-12-01 10:59:00",
						"device": "主机游戏,PC游戏",
						"releasedDesc": "2014-04-16",
						"englishName": "trials fusion",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/trfu"
					},
					{
						"id": 1,
						"gameTitle": "魔法门10：传承",
						"thumbnail": "/upload/images/games/mmx_thumb.jpg",
						"pageName": "mmx",
						"platform": "PC",
						"platformIcon": "PC",
						"category": "",
						"genre": "策略",
						"sequence": 50,
						"state": "publish",
						"updatedAt": "2020-08-26 15:37:10",
						"releasedAt": "2014-01-23 00:00:00",
						"publishedAt": "2015-12-06 11:46:00",
						"device": "PC游戏",
						"releasedDesc": "2014-1-23",
						"englishName": "might and magic x legacy",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/mmx"
					},
					{
						"id": 2,
						"gameTitle": "雷曼：传奇",
						"thumbnail": "/upload/images/games/raymanl_thumb.jpg",
						"pageName": "raymanl",
						"platform": "Playstation4,Xbox One,Xbox 360,Playstation3,Playstation Vita,Wii U,Wii",
						"platformIcon": "PC,XBOXONE,PS4",
						"category": "适合儿童,系列",
						"genre": "休闲,家庭",
						"sequence": 50,
						"state": "publish",
						"updatedAt": "2020-08-26 15:44:21",
						"releasedAt": "2013-09-12 00:00:00",
						"publishedAt": "2015-12-06 12:15:00",
						"device": "主机游戏,PC游戏",
						"releasedDesc": "2013-09-12",
						"englishName": "rayman legends",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/raymanl"
					},
					{
						"id": 8,
						"gameTitle": "饥饿鲨：进化",
						"thumbnail": "/upload/images/games/hse_thumb.jpg",
						"pageName": "hse",
						"platform": "Android,iPad,iPhone,windows phone",
						"platformIcon": "IOS,Android",
						"category": "免费",
						"genre": "休闲",
						"sequence": 55,
						"state": "publish",
						"updatedAt": "2020-08-28 15:15:09",
						"releasedAt": "2012-10-01 00:00:00",
						"publishedAt": "2020-08-28 15:04:51",
						"device": "移动游戏",
						"releasedDesc": "2012-10-1",
						"englishName": "hungry shark evolution",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/hse"
					},
					{
						"id": 5,
						"gameTitle": "英雄无敌6",
						"thumbnail": "/upload/images/games/mmh6_thumb.jpg",
						"pageName": "mmh6",
						"platform": "PC",
						"platformIcon": "PC",
						"category": "系列",
						"genre": "策略",
						"sequence": 1,
						"state": "publish",
						"updatedAt": "2020-08-28 15:16:32",
						"releasedAt": "2011-10-13 00:00:00",
						"publishedAt": "2015-12-07 19:43:00",
						"device": "PC游戏",
						"releasedDesc": "2011-10-13",
						"englishName": "might and magic heroes 6",
						"ubiStoreUrl": "",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/mmh6"
					}
				],
				bannerlist: [{
						"id": 13,
						"gameTitle": "舞力全开",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/JDC_pc.jpg",
						"pageName": "我就这么“跳”！",
						"platform": "中国专属内容，Switch国行版独享 12月10日预购开启",
						"dedicatedPageUrl": "https://www.ubisoft.com.cn/jdc"
					},
					{
						"id": 12,
						"gameTitle": "渡神记芬尼斯崛起",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/ORP_pc.jpg",
						"pageName": "探索金光岛，中配伴你行",
						"platform": "现已正式发售",
						"dedicatedPageUrl": "https://www.ubisoft.com.cn/jdc"
					},
					{
						"id": 11,
						"gameTitle": "刺客信条：英灵殿",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/acv_pc.jpg",
						"pageName": "踏上荣耀之路，成为维京传奇",
						"platform": "2020年11月10日正式发售",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/acv"
					},
					{
						"id": 7,
						"gameTitle": "超猎都市",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/HYP_S2_pc.jpg",
						"pageName": "第二赛季：余波未平 现已开启",
						"platform": "新武器，新技能，新模式 等待你的参与",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/hyperscape/season2"
					},
					{
						"id": 10,
						"gameTitle": "极限国度",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/mad_pc.jpg",
						"pageName": "感受户外运动的乐趣与魅力 ",
						"platform": "2021年2月25日推出",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/ridersrepublic"
					},
					{
						"id": 9,
						"gameTitle": "孤岛惊魂6",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/farcry6_pc.jpg",
						"pageName": "游击作战 点燃星火",
						"platform": "现已开启预购",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/games/hsw"
					},
					{
						"id": 6,
						"gameTitle": "波斯王子：时之砂重制版",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/pop_pc.jpg",
						"pageName": "王子归来!",
						"platform": "享受重新定义动作冒险游戏的经典之作",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/poprm"
					},
					{
						"id": 4,
						"gameTitle": "幽灵行动：断点",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/grb_ep3_pc.jpg",
						"pageName": "第三章：《红色爱国者》现已上线",
						"platform": "了解更多新冒险、新职业以及PVP内容 ",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/news2/grbp_show/2351"
					},
					{
						"id": 3,
						"gameTitle": "看门狗：军团",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/u2019/banner/wd3_pc.jpg",
						"pageName": "看门狗：军团",
						"platform": "夺回你的未来",
						"platformIcon": "欢迎加入反抗军",
						"dedicatedPageUrl": "https://zh-cn.ubisoft.com/news2/grbp_show/2351"
					}
				],
				Activitylist: [{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2001128-r.5990c/1608189442537_imagecropper_6bb296bd-1fea-4f4f-b86c-6d9eb68b0bc5/512",
						"version_game_id": 2001128,
						"article_id": "5048e20b71f0497ba1ae3a60f681638e",
						"send_date": "2020-12-18 22:37:00",
						"title": "冬幕节来啦 欢乐福利多多多",
						"abstract": "神佑之城开启一年一度的冬幕节啦，随着叮当铃乐团一起来倾听音乐会，邀上三五好友完成冬日仙境跳跳乐，齐心协力挑战玩具大**，以及充满趣味的雪球大乱斗吧！ ​​​​",
						"iid": "e7c6465a4bb847eba73bcebb95ba2037",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2001068-r.7e243/1608270112914_imagecropper_90c1846a-1213-4fb8-86e4-879ef2edc526/512",
						"version_game_id": 2001068,
						"article_id": "50ccd319f5014d30a9892d68206279b6",
						"send_date": "2020-12-18 13:43:18",
						"title": "壁纸引擎V1.4版本更新日志",
						"abstract": "全新功能支持、更多细节优化和实用的设计师攻略站，尽在壁纸引擎V1.4全新版本，快来体验！",
						"iid": "8bf1db7e780c4477b32a2e96c2225e06",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2001470-r.0427c/1608262863539_imagecropper_dc9793f8-81b2-4e45-b5d1-f434b647d15a/512",
						"version_game_id": 2001470,
						"article_id": "9d65bfc0372d4d2a9e236e439240c799",
						"send_date": "2020-12-18 12:34:53",
						"title": "岁末钜惠惊喜多多 充值返壕礼",
						"abstract": "愉快的周末即将到来！岁末临近，活动期间充值金币就有额外壕礼返还，本期福利再升级，精品皮肤强力战车等你...",
						"iid": "f8524fc6e23b49a49eceeddf335f350d",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.33-r.41cae/1608219359224_imagecropper_b0a8f62d-2eb7-4b00-bd43-77f1e84efc06/512",
						"version_game_id": 33,
						"article_id": "0ebdd6fbcd514e569c52325783549395",
						"send_date": "2020-12-17 23:46:34",
						"title": "《开始啦，我们的青春！》版本更新公告",
						"abstract": "此次更新内容：\n\n1、 上线“开始啦，我们的青春！”系列皮肤\n\n2、 上线“2021新年限定”系列饰品",
						"iid": "7869a3e1a3014e6fa6e8c3205d4e27e8",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2000806-r.f6868/1608199130339_imagecropper_ce6ce283-3d6c-40e6-8d78-43daa314bd3d/512",
						"article_id": "ce01ef71a3b844a5bb7bcd48e0e8b934",
						"send_date": "2020-12-17 18:00:11",
						"title": "【公告】铁甲雄兵12月18日9:00停机维护公告",
						"comm_num": 13,
						"abstract": "为保证游戏运行的稳定性，提升整体服务质量和体验，《铁甲雄兵》将于12月18日09:00~11:00进...",
						"iid": "ca0b65377a414cb788e41b2e02aa44c4",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2000918-r.85c9f/1608157854975_imagecropper_b7b63904-6bf2-4dc4-9435-1c3b65b6b99c/512",
						"article_id": "7c88a4ba2b654d8094a97d0971421f0a",
						"send_date": "2020-12-17 06:33:01",
						"title": "《古剑奇谭网络版》12月17日更新维护公告下",
						"abstract": "新开服务器【长锋无影】★通宝商城上新★冬至节庆活动开启★充消大回馈抽奖活动开启★累计充消享好礼★第四季节令卡登场★新版本累签有礼",
						"iid": "dc8dd7ba70b341ab92a34d850b0de00b",
						"expose_num": 3929
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.36-r.37185/1608113250236_imagecropper_9af97a61-5482-4fe5-885c-5c5707a100dc/512",
						"article_id": "28cfc3505fde4aa282cdf036e39b84e1",
						"send_date": "2020-12-16 18:12:41",
						"title": "疾风之刃12月17日版本更新公告",
						"abstract": "亲爱的疾风勇士：\n\n为了保障各位勇士更顺畅的游戏体验，进一步加强游戏的稳定性，我们将于12月17日（...",
						"iid": "44375c4f25f64d3ab77685eb32134dff",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2000152-r.61260/1608101421920_imagecropper_46df4c75-316a-44c8-929d-9e3080c74603/512",
						"article_id": "138541daf7d841ce96d811a17101aded",
						"send_date": "2020-12-16 15:00:57",
						"title": "《迷你地铁》新地图发布：“风城”芝加哥",
						"abstract": "年底送惊喜，Mini Metro再次推出一张全新地图！您可以在美国密歇根湖畔的“风城”芝加哥上留下自己的印记。",
						"iid": "d56e51649cdd4593ade46ef87061642c",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2000576-r.0cca1/1608087154704_imagecropper_9cbc2fac-645d-459e-b17d-e5db4258df3c/512",
						"article_id": "498c426ddfa64d2d8dc4ce52676371c5",
						"send_date": "2020-12-16 10:58:31",
						"title": "无需再等待 星际战甲今日正式全服更新上线",
						"abstract": "告别一言难尽的等待，甩开曾经对未来的怀疑与迷茫，《星际战甲》国服今日浴火重生。12月16日注定是一个...",
						"iid": "254ed0a1aa5a499b85d67b909feb67e0",
					},
					{
						"cover": "https://tgphpic-70080.picnjc.qpic.cn/g.2000196-r.6cda2/1608049819715_imagecropper_02f4042d-8ac2-46ca-84ef-a9430ca16a18/512",
						"article_id": "3920d84ad404439790d9732b108cf72c",
						"send_date": "2020-12-16 00:31:24",
						"title": "V15.10更新公告",
						"abstract": "V15.10来啦~",
						"iid": "8219dc804a9d405cb3f7d622123fcc2f",
					},
				]
			}
		},
		components: {
			swiper,
			bannerbar,
			Activity,
			About,
			Games,
			navbar,
			Ranking,
			footerbar,
			about
		},
		methods: {
			ActivityR(id, iid) {
				console.log(id, iid)
				this.$router.push(`/detail_1/${id}/${iid}`)
			},
			ChangR() {
				this.$router.push("/notice")
			}
		}

	}
</script>

<style>
	.gengxin {
		width: 100%;
		min-height: 800px;
		background: white;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	}

	.game_text .thumbnail {
		height: 400px;
		overflow: hidden;
		border: none;
		transition: 1s;
		cursor: pointer;
	}

	.game_text .thumbnail:hover {
		box-shadow: 0 5px 25px 5px rgba(182, 182, 182, 0.2);
		transform: translateY(2px);
	}

	.game_text .thumb-pic {
		width: 100%;
		height: 200px;
	}

	.game_text .thumb-pic img {
		width: 100%;
		height: 100%;
		transition: 1s;
		overflow: hidden;
	}

	.game_text .thumb-pic img:hover {
		/* transform: scale(1.2); */
	}
</style>
