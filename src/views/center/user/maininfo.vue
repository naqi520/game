<template>
	<div>
		<div class="ubi-title animated  fadeInDown">
			<h2 style="color: black;">快捷查看</h2>
		</div>
		<div class="maininfo">
			<div class="maintext text-center animated  fadeInDown"></div>
			<div class="container animated  fadeInLeft">
				<el-tabs v-model="activeName">
					<el-tab-pane label="育碧游戏" name="first">
						<el-table :data="datalist" style="width: 100%" height="400" border>
							<el-table-column prop="released_desc" label="日期" sortable>
							</el-table-column>
							<el-table-column prop="gametitle" label="游戏姓名" sortable>
							</el-table-column>
							<el-table-column prop="dedicated_page_url" label="官网">
								<template slot-scope="scope">
									<a :href="scope.row.dedicated_page_url" target="_blank">官网</a>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="游戏资讯" name="second">
						<el-table :data="newlist" style="width: 100%" height="400" border>
							<el-table-column prop="updatedAt" label="日期" sortable>
							</el-table-column>
							<el-table-column prop="subject" label="信息" sortable>
							</el-table-column>
							<el-table-column prop="id" label="查看">
								<template slot-scope="scope">
									<a href="#javascript" @click="news(scope.row.id)">查看详情</a>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="最近更新" name="third" >
						<el-table :data="noticlist" style="width: 100%" height="400" border>
							<el-table-column prop="send_date" label="日期" sortable>
							</el-table-column>
							<el-table-column prop="title" label="信息" sortable>
							</el-table-column>
							<el-table-column prop="article_id,iid" label="查看">
								<template slot-scope="scope">
									<a href="#" @click="details(scope.row.article_id,scope.row.iid)">查看详情</a>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
				</el-tabs>

			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				activeName: 'first',
				datalist: [{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/ridersrepublic",
						"gamepage_name": "riders",
						"gametitle": "极限国度",
						"id": 119,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Playstation4 Pro\", \"Xbox one X\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2021-02-25T00:00:00+08:00",
						"released_desc": "2021年2月25日",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/ridersrepublic.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/farcry6",
						"gamepage_name": "farcry6",
						"gametitle": "孤岛惊魂6",
						"id": 118,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Xbox 360\", \"Playstation4 Pro\", \"Xbox one X\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2021-02-18T00:00:00+08:00",
						"released_desc": "2021-02-18",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/farcry6.jpg"
					},
					{
						"dedicated_page_url": "https://www.ubisoft.com.cn/jdc",
						"gamepage_name": "jdc",
						"gametitle": "舞力全开",
						"id": 122,
						"platform": "[\"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2021-01-30T00:00:00+08:00",
						"released_desc": "即将发布",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/jdc.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/poprm",
						"gamepage_name": "pop",
						"gametitle": "波斯王子:时之砂",
						"id": 120,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Nintendo Switch\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2021-01-21T00:00:00+08:00",
						"released_desc": "2021年1月21日",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/poprm.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/acv",
						"gamepage_name": "acv",
						"gametitle": "刺客信条：英灵殿",
						"id": 115,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Playstation4 Pro\", \"Xbox one X\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2020-12-30T00:00:00+08:00",
						"released_desc": "2020年底",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acv.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/fenyxrising",
						"gamepage_name": "ifr",
						"gametitle": "渡神纪 芬尼斯崛起",
						"id": 110,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Nintendo Switch\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2020-12-03T00:00:00+08:00",
						"released_desc": "2020年12月3日",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/fenyxrising.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/watchdogs_legion",
						"gamepage_name": "wdl",
						"gametitle": "看门狗:军团",
						"id": 106,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2020-10-29T00:00:00+08:00",
						"released_desc": "2020-10-29",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/wdl.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/tmt",
						"gamepage_name": "tmt",
						"gametitle": "赛道狂飙",
						"id": 6,
						"platform": "[\"PC\"]",
						"platform_ico": "[\"pc\"]",
						"released_at": "2020-07-02T00:00:00+08:00",
						"released_desc": "2020年7月2日",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/tmc.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/roller_champions",
						"gamepage_name": "roller",
						"gametitle": "冠军冲刺",
						"id": 107,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2020-03-01T00:00:00+08:00",
						"released_desc": "即将发布",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/roller.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/acrc",
						"gamepage_name": "acrc",
						"gametitle": "刺客信条：叛逆者合集",
						"id": 113,
						"platform": "[\"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2019-12-06T00:00:00+08:00",
						"released_desc": "2019-12-6",
						"thumbnail": "https://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acrc.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/grbp",
						"gamepage_name": "grbp",
						"gametitle": "幽灵行动：断点",
						"id": 104,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Playstation4 Pro\", \"Xbox one X\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2019-10-04T00:00:00+08:00",
						"released_desc": "2019年10月4日",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/grb.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/rabbids",
						"gamepage_name": "rabbids",
						"gametitle": "疯狂兔子:奇遇派对",
						"id": 111,
						"platform": "[\"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2019-07-31T00:00:00+08:00",
						"released_desc": "即将发布",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/rabbids.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/fcb",
						"gamepage_name": "fcb",
						"gametitle": "孤岛惊魂：新曙光",
						"id": 100,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Playstation4 Pro\", \"Xbox one X\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2019-02-15T00:00:00+08:00",
						"released_desc": "2019-2-15",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/fcb.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/trialsrising",
						"gamepage_name": "trialsrising",
						"gametitle": "特技摩托：崛起",
						"id": 93,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Nintendo Switch\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2019-02-01T00:00:00+08:00",
						"released_desc": "2019-2",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/trialsrising.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/hgn",
						"gamepage_name": "hgn",
						"gametitle": "孩之宝游戏之夜",
						"id": 99,
						"platform": "[\"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2018-10-31T00:00:00+08:00",
						"released_desc": "2018-10-31",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/hgn.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/spty",
						"gamepage_name": "spty",
						"gametitle": "运动派对",
						"id": 98,
						"platform": "[\"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2018-10-30T00:00:00+08:00",
						"released_desc": "2018-10-30",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/SPTY.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/jd2019",
						"gamepage_name": "jd2019",
						"gametitle": "舞力全开2019",
						"id": 94,
						"platform": "[\"Playstation4\", \"Xbox One\", \"Wii U\", \"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2018-10-26T00:00:00+08:00",
						"released_desc": "2018-10-26",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/jd2019.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/stlk",
						"gamepage_name": "stlk",
						"gametitle": "星链:阿特拉斯之战",
						"id": 97,
						"platform": "[\"Playstation4\", \"Xbox One\", \"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2018-10-16T00:00:00+08:00",
						"released_desc": "2018-10-16",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/STLK.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/acod",
						"gamepage_name": "acod",
						"gametitle": "刺客信条：奥德赛",
						"id": 95,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2018-10-05T00:00:00+08:00",
						"released_desc": "2018-10-5",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acod.jpg"
					},
					{
						"dedicated_page_url": "http://www.ubisoft.com.cn/farcry5",
						"gamepage_name": "farcry5",
						"gametitle": "孤岛惊魂5",
						"id": 79,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2018-03-27T00:00:00+08:00",
						"released_desc": "2018-03-27",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/farcry5.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/aco",
						"gamepage_name": "aco",
						"gametitle": "刺客信条：起源",
						"id": 81,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2017-10-01T00:00:00+08:00",
						"released_desc": "2017-10",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/aco.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/sab",
						"gamepage_name": "sab",
						"gametitle": "碧海黑帆",
						"id": 84,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2017-10-01T00:00:00+08:00",
						"released_desc": "2019年",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/sab.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/rkb",
						"gamepage_name": "rkb",
						"gametitle": "马力欧+疯狂兔子：王国之战",
						"id": 82,
						"platform": "[\"Nintendo Switch\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2017-08-29T00:00:00+08:00",
						"released_desc": "2017-8-29",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/rkb.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/grw",
						"gamepage_name": "grw",
						"gametitle": "幽灵行动：荒野",
						"id": 39,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2017-03-07T00:00:00+08:00",
						"released_desc": "2017-03-07",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/grw.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/steep",
						"gamepage_name": "steep",
						"gametitle": "极限巅峰",
						"id": 66,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2016-12-01T00:00:00+08:00",
						"released_desc": "2016-12",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/steep.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/wd2",
						"gamepage_name": "wd2",
						"gametitle": "看门狗2",
						"id": 64,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2016-11-29T00:00:00+08:00",
						"released_desc": "2016-11-29",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/wd2.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/uno",
						"gamepage_name": "uno",
						"gametitle": "Uno",
						"id": 73,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2016-08-09T00:00:00+08:00",
						"released_desc": "2016-8-9",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/uno.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/growup",
						"gamepage_name": "growup",
						"gametitle": "Grow Up!",
						"id": 71,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2016-08-01T00:00:00+08:00",
						"released_desc": "2016-08",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/growup.png"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/tbd",
						"gamepage_name": "tbd",
						"gametitle": "特技摩托：血龙试炼",
						"id": 67,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2016-06-15T00:00:00+08:00",
						"released_desc": "2016-06-15",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/tbd.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/sp2",
						"gamepage_name": "sp2",
						"gametitle": "南方公园：破碎完整",
						"id": 68,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2016-03-01T00:00:00+08:00",
						"released_desc": "2017-Q1",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/sp2.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/fcp",
						"gamepage_name": "fcp",
						"gametitle": "孤岛惊魂：野蛮纪源",
						"id": 15,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2016-02-23T00:00:00+08:00",
						"released_desc": "2016-2-23",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/fcp.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/acs",
						"gamepage_name": "acs",
						"gametitle": "刺客信条：枭雄",
						"id": 3,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2015-11-25T16:55:00+08:00",
						"released_desc": "2015-11-25 ",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acs.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/brawlhalla",
						"gamepage_name": "brawlhalla",
						"gametitle": "英灵乱战",
						"id": 103,
						"platform": "[\"PC\", \"Playstation4\", \"Nintendo Switch\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2015-11-03T00:00:00+08:00",
						"released_desc": " 2015年11月3日",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/brawlhalla.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/acc",
						"gamepage_name": "acc",
						"gametitle": "刺客信条：编年史",
						"id": 8,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2015-04-22T00:00:00+08:00",
						"released_desc": "2015-4-22",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acc.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/mmh3",
						"gamepage_name": "mmh3",
						"gametitle": "魔法门之英雄无敌3：高清版",
						"id": 37,
						"platform": "[\"PC\", \"Android\", \"iPad\", \"iPhone\"]",
						"platform_ico": "[\"pc\", \"phone\"]",
						"released_at": "2015-01-29T00:00:00+08:00",
						"released_desc": "2015-1-29",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/mmh3.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/crew",
						"gamepage_name": "crew",
						"gametitle": "飙酷车神",
						"id": 19,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Xbox 360\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2014-12-02T00:00:00+08:00",
						"released_desc": "2014-12-2",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/crew.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/farcry4",
						"gamepage_name": "farcry4",
						"gametitle": "孤岛惊魂4",
						"id": 40,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Xbox 360\", \"Playstation3\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2014-11-18T00:00:00+08:00",
						"released_desc": "2014-11-18",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/farcry4.png"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/acu",
						"gamepage_name": "acu",
						"gametitle": "刺客信条：大革命",
						"id": 9,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2014-11-13T00:00:00+08:00",
						"released_desc": "2014-11-13",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acu.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/shapeup",
						"gamepage_name": "shapeup",
						"gametitle": "型可塑",
						"id": 21,
						"platform": "[\"Xbox One\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2014-11-13T00:00:00+08:00",
						"released_desc": "2014-11-13",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/shapeup.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/acrogue",
						"gamepage_name": "acrogue",
						"gametitle": "刺客信条：叛变",
						"id": 10,
						"platform": "[\"Playstation4\", \"Xbox 360\", \"PC\"]",
						"platform_ico": "[\"cons\", \"pc\"]",
						"released_at": "2014-11-11T00:00:00+08:00",
						"released_desc": "2014-11-11",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acrogue.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/jd2015",
						"gamepage_name": "jd2015",
						"gametitle": "舞力全开2015",
						"id": 24,
						"platform": "[\"Playstation4\", \"Xbox One\", \"Xbox 360\", \"Playstation3\", \"Wii U\", \"Wii\"]",
						"platform_ico": "[\"cons\"]",
						"released_at": "2014-10-23T00:00:00+08:00",
						"released_desc": "2014-10-23",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/jd2015.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/vh",
						"gamepage_name": "vh",
						"gametitle": "勇敢的心：伟大战争",
						"id": 20,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Xbox 360\", \"Playstation3\", \"iPad\", \"iPhone\", \"Nintendo Switch\"]",
						"platform_ico": "[\"pc\", \"cons\", \"phone\"]",
						"released_at": "2014-06-25T00:00:00+08:00",
						"released_desc": "2014-6-25",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/vh.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/watchdogs",
						"gamepage_name": "watchdogs",
						"gametitle": " 看门狗",
						"id": 18,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Xbox 360\", \"Playstation3\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2014-05-27T00:00:00+08:00",
						"released_desc": "2014-5-27",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/watchdogs.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/col",
						"gamepage_name": "col",
						"gametitle": "光之子",
						"id": 16,
						"platform": "[\"PC\", \"Xbox One\", \"Xbox 360\", \"Playstation3\", \"Playstation Vita\", \"Wii U\"]",
						"platform_ico": "[\"pc\", \"psp\", \"cons\"]",
						"released_at": "2014-04-30T00:00:00+08:00",
						"released_desc": "2014-4-30",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/col.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/trfu",
						"gamepage_name": "trfu",
						"gametitle": "特技摩托：聚变",
						"id": 17,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox One\", \"Xbox 360\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2014-04-16T00:00:00+08:00",
						"released_desc": "2014-4-16",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/trfu.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/acbf",
						"gamepage_name": "acbf",
						"gametitle": "刺客信条4：黑旗",
						"id": 32,
						"platform": "[\"PC\", \"Playstation4\", \"Xbox 360\", \"Playstation3\", \"Wii U\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2013-10-29T00:00:00+08:00",
						"released_desc": "2013-10-29",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acbf.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/raymanl",
						"gamepage_name": "raymanl",
						"gametitle": "雷曼：传奇",
						"id": 26,
						"platform": "[\"Playstation4\", \"Xbox One\", \"Xbox 360\", \"Playstation3\", \"Playstation Vita\", \"Wii U\", \"Wii\"]",
						"platform_ico": "[\"pc\", \"psp\", \"cons\"]",
						"released_at": "2013-09-12T00:00:00+08:00",
						"released_desc": "2013-9-12",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/raymanl.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/scbl",
						"gamepage_name": "scbl",
						"gametitle": "细胞分裂：黑名单",
						"id": 28,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\", \"Wii U\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2013-08-22T00:00:00+08:00",
						"released_desc": "2013-8-22",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/scbl.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/fc3bd",
						"gamepage_name": "fc3bd",
						"gametitle": "孤岛惊魂3：血龙",
						"id": 23,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2013-05-01T00:00:00+08:00",
						"released_desc": "2013-5-1",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/fc3bd.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/farcry3",
						"gamepage_name": "farcry3",
						"gametitle": "孤岛惊魂3",
						"id": 22,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2012-11-29T00:00:00+08:00",
						"released_desc": "2012-11-29",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/farcry3.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/ac3",
						"gamepage_name": "ac3",
						"gametitle": "刺客信条3",
						"id": 33,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\", \"Wii U\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2012-10-30T00:00:00+08:00",
						"released_desc": "2012-10-30",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/ac3.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/acr",
						"gamepage_name": "acr",
						"gametitle": "刺客信条：启示录",
						"id": 11,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2011-11-15T00:00:00+08:00",
						"released_desc": "2011-11-15",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acr.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/acb",
						"gamepage_name": "acb",
						"gametitle": "刺客信条：兄弟会",
						"id": 12,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\", \"Mac\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2010-11-16T00:00:00+08:00",
						"released_desc": "2010-11-16",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/acb.jpg"
					},
					{
						"dedicated_page_url": "http://zh-cn.ubisoft.com/games/hawx2",
						"gamepage_name": "hawx2",
						"gametitle": "鹰击长空2",
						"id": 29,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\", \"Wii\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2010-09-02T00:00:00+08:00",
						"released_desc": "2010-9-2",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/hawx2.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/poptfs",
						"gamepage_name": "poptfs",
						"gametitle": "波斯王子：遗忘之砂",
						"id": 31,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\", \"Wii\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2010-05-20T00:00:00+08:00",
						"released_desc": "2010-5-20",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/poptfs.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/ac2",
						"gamepage_name": "ac2",
						"gametitle": "刺客信条2",
						"id": 13,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\", \"Mac\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2009-11-01T00:00:00+08:00",
						"released_desc": "2009-11-1",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/ac2.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/pop0",
						"gamepage_name": "pop0",
						"gametitle": "波斯王子",
						"id": 30,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2008-12-04T00:00:00+08:00",
						"released_desc": "2008-12-4",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/pop0.jpg"
					},
					{
						"dedicated_page_url": "https://zh-cn.ubisoft.com/games/ac1",
						"gamepage_name": "ac1",
						"gametitle": "刺客信条",
						"id": 34,
						"platform": "[\"PC\", \"Xbox 360\", \"Playstation3\", \"Mac\"]",
						"platform_ico": "[\"pc\", \"cons\"]",
						"released_at": "2007-11-13T00:00:00+08:00",
						"released_desc": "2007-11-13",
						"thumbnail": "http://cdn.hommk.com/pcgame/ubi2015/img/game/thumbnail/ac1.jpg"
					}
				],
				noticlist: [],
				newlist: [{
						"id": 16,
						"category": "news",
						"subject": "育碧《舞力全开》12月底登陆腾讯引进Nintendo Switch™ 预售已开启 ",
						"preview": "新游戏《舞力全开》即将于12月底独家登陆腾讯引进Nintendo Switch™。在育碧巴黎工作室推出舞力全开（JustDance）品牌第一部作品的十年后， 育碧上海团队携手国内合作伙伴，将该品牌引进中国，并特意为中国玩家打造了一部本地新作。《舞力全开》新游戏预售现已启动。",
						"link": "https://cdn.hommk.com/pcgame/ubi2015/img/news/20201209/01.jpg",
						"state": "publish",
						"createdAt": "2020-12-09 19:20:34",
						"updatedAt": "2020-12-10 19:59:59",
						"publishedAt": "2020-12-09 19:19:43"
					},
					{
						"id": 15,
						"category": "news",
						"subject": "全新第六批“6号”典藏手办现已开始预售！",
						"preview": "是时候为您的团队招募全新干员了！育碧公布了其全新的第六批《彩虹六号：围攻》Q版手办，现已正式于育碧天猫官方商城ubisoft旗舰店（https://ubisoft.tmall.com/）开启预售，单个售价为148元。",
						"link": "https://source.ubisoft.com.cn/upload/images/pages/pic_1605249730754.jpg",
						"state": "publish",

						"createdAt": "2020-11-13 14:43:39",
						"updatedAt": "2020-11-13 14:43:39",
						"publishedAt": "2020-11-13 14:38:48"
					},
					{
						"id": 14,
						"category": "news",
						"subject": "育碧与锐步正式官宣合作计划 多款联名产品11月7日上市",
						"preview": "育碧与锐步宣布了双方的合作计划，将备受期待的《刺客信条：英灵殿》，《刺客信条》系列的下一部作品带到街头，而喜爱它的粉丝们终于有机会展现自己的维京态度和故事。本次合作以胶囊系列为中心，将推出多款灵感来源于维京人故事的运动鞋、服装和配饰。",
						"link": "https://cdn.hommk.com/pcgame/ubi2015/img/news/20201023/03.jpg",
						"state": "publish",

						"createdAt": "2020-10-23 11:12:13",
						"updatedAt": "2020-10-23 11:12:13",
						"publishedAt": "2020-10-23 11:11:31"
					},
					{
						"id": 13,
						"category": "news",
						"subject": "《疯狂兔子：编程学院》携中文版本登陆移动平台 免费提供趣味编程知识 ",
						"preview": "育碧宣布《疯狂兔子：编程学院》（Rabbids Coding）登陆移动端，并在原有英文、法文和德文的语言基础上再添简体中文版本。",
						"link": "https://www.ubisoft.com.cn/upload/images/pages/pic_1602212276758.jpg",
						"state": "publish",
						"createdAt": "2020-10-09 11:00:28",
						"updatedAt": "2020-10-15 17:51:56",
						"publishedAt": "2020-10-09 11:00:03"
					},
					{
						"id": 12,
						"category": "news",
						"subject": "育碧中国AI和数据实验室自研AI工具ZooBuilder将亮相2020电脑动画研讨会",
						"preview": "育碧宣布，育碧中国AI和数据实验室正在研发中的ZooBuilder工具将作为演讲展示话题之一，在电脑图像和动画的高端年度学术会议2020电脑动画研讨会（SCA 2020）上亮相。",
						"link": "https://zh-cn.ubisoft.com/upload/attachments/uploads/000/006/368/original_1601015492.jpg?1601015492",
						"state": "publish",
						"createdAt": "2020-09-25 14:35:57",
						"updatedAt": "2020-09-25 16:49:21",
						"publishedAt": "2020-09-25 14:35:20"
					},
					{
						"id": 11,
						"category": "news",
						"subject": "UBISOFT×IGS国庆来袭！来成都IGS博览会，一睹育碧风采！",
						"preview": "育碧新游，顶级3A……国庆成都IGS等你来探秘！",
						"link": "https://zh-cn.ubisoft.com/upload/attachments/uploads/000/006/365/original_1600999713.jpg?1600999713",
						"state": "publish",
						"createdAt": "2020-09-25 10:15:41",
						"updatedAt": "2020-09-25 10:15:41",
						"publishedAt": "2020-09-25 10:04:58"
					},
					{
						"id": 7,
						"category": "news",
						"subject": "育碧作品《极限巅峰》成为首届 中国数字冰雪运动会指定赛事游戏",
						"preview": "育碧中国宣布与中国冰雪大会组委会达成战略合作关系，以滑雪为主题的经典育碧游戏《极限巅峰》将成为首届中国数字冰雪运动会指定赛事游戏。",
						"link": "https://cdn.hommk.com/pcgame/ubi2015/img/news/2020922/cover.jpg",
						"state": "publish",
						"createdAt": "2020-09-22 10:31:51",
						"updatedAt": "2020-09-22 10:31:51",
						"publishedAt": "2020-09-22 10:31:10"
					},
					{
						"id": 9,
						"category": "news",
						"subject": "育碧宣布研发《刺客信条》和《细胞分裂》VR游戏 Oculus为独家合作平台",
						"preview": "育碧正在研发两款基于《刺客信条》和《细胞分裂》IP的VR新游戏，Oculus为独家合作平台。",
						"link": "https://zh-cn.ubisoft.com/upload/attachments/uploads/000/006/362/original_1600318951.jpg?1600318951",
						"state": "publish",
						"createdAt": "2020-09-22 16:55:43",
						"updatedAt": "2020-09-22 16:55:43",
						"publishedAt": "2020-09-17 16:55:09"
					},
					{
						"id": 8,
						"category": "news",
						"subject": "王子归来！ 《波斯王子：时之砂》重制版正式公布",
						"preview": "再度踏上王子之旅，感受重新定义动作冒险游戏的经典故事。在线上发布会Ubisoft Forward上，育碧宣布《波斯王子：时之砂》重制版将作为公司首款完全重新制作的游戏回归。",
						"link": "https://cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/392/original_1599788924.jpg?1599788924",
						"state": "publish",
						"createdAt": "2020-09-22 16:53:44",
						"updatedAt": "2020-09-22 16:53:52",
						"publishedAt": "2020-09-11 16:52:27"
					},
					{
						"id": 10,
						"category": "news",
						"subject": "育碧宣布推出新VR游戏《孤岛惊魂：陷入疯狂》",
						"preview": "育碧宣布与Zero Latency VR场馆合作，推出新VR游戏《孤岛惊魂：陷入疯狂》。游戏可供至多八名玩家同时游玩，他们将重访《孤岛惊魂3》中的洛克岛，从大反派瓦阿斯手下逃出生天，探索岛屿并携手为生存而战。",
						"link": "//cdn.hommk.com/pcgame/ubi2015/img/news/2020922/8.jpg",
						"state": "publish",
						"createdAt": "2020-09-22 17:10:37",
						"updatedAt": "2020-09-22 17:10:37",
						"publishedAt": "2020-09-10 17:09:42"
					},
					{
					"id": 5,
					"category": "news",
					"subject": " “育碧英雄”系列迷你手办第二弹11月1日发售",
					"preview": "育碧公布了其全新系列迷你手办 “育碧英雄”第二弹，其灵感源自于育碧游戏世界中的知名英雄角色。继《彩虹六号》系列手办的成功，“育碧英雄”第二弹迷你手办将于11月1日在天猫商城ubisoft旗舰店正式发售，单个售价为119元。",
					"link": "//cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/369/original_1598864509.jpg",
					"state": "publish",
					"createdAt": "2020-08-31 17:06:06",
					"updatedAt": "2020-08-31 17:06:06",
					"publishedAt": "2020-08-31 17:05:09"
					},
					{
					"id": 4,
					"category": "news",
					"subject": "《波斯王子：时之刃》VR密室逃脱游戏面见中国玩家",
					"preview": "波斯王子别样回归，打造多人合作探险，《波斯王子：时之刃》成为育碧第三部VR密室逃脱游戏，目前在全球多地与玩家见面。",
					"link": "http://cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/343/original_1597107597.jpg?1597107597",
					"state": "publish",
					"createdAt": "2020-08-31 14:17:30",
					"updatedAt": "2020-08-31 14:59:59",
					"publishedAt": "2020-08-11 14:16:38"
					},
					{
					"id": 1,
					"category": "news",
					"subject": " 《疯狂兔子：奇遇派对》试玩版现已正式登陆国行Switch平台",
					"preview": "在国内数码互动娱乐领域具有影响力的盛会——ChinaJoy 2020上，育碧宣布全新的冒险派对游戏《疯狂兔子：奇遇派对》试玩版现已登陆国行任天堂Switch平台",
					"link": "http://cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/332/original_1596168744.jpg?1596168744",
					"state": "publish",
					"createdAt": "2020-08-26 16:02:28",
					"updatedAt": "2020-08-26 16:02:28",
					"publishedAt": "2020-07-31 12:10:00"
					},
					{
					"id": 6,
					"category": "news",
					"subject": "首部中国原创漫画《刺客信条：王朝》8月26日正式上线",
					"preview": "育碧首部中国原创漫画《刺客信条：王朝》将于8月26在新漫画和腾讯动漫平台首发上线，该漫画由国内专业漫画平台“新漫画”制作，中国知名漫画家许先哲领衔创作。",
					"link": "http://cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/329/original_1596083057.jpg",
					"state": "publish",
					
					"createdAt": "2020-08-31 17:08:41",
					"updatedAt": "2020-08-31 17:08:41",
					"publishedAt": "2020-07-30 17:07:43"
					},
					{
					"id": 2,
					"category": "news",
					"subject": "“BDF 2020 X 舞力全开线上挑战”正式开启",
					"preview": "育碧宣布“BDF X 舞力全开线上挑战”活动现已正式开幕！同时，《舞力全开》试玩版也已同步登陆国行Switch平台，助力玩家参与活动。",
					"link": "http://cdn.hommk.com/pcgame/upload/attachments/uploads/000/006/318/original_1594952065.jpg?1594952065",
					"state": "publish",
					"createdAt": "2020-08-26 16:04:44",
					"updatedAt": "2020-08-26 16:04:44",
					"publishedAt": "2020-07-17 10:12:00"
					}
				]
			}
		},
		mounted() {
		axios({
			url: '/forum/lua/wegame_feeds_article/get_version_article_list?p=%7B%22offset%22%3A0%2C%22count%22%3A10%2C%22client_type%22%3A1%2C%22uid%22%3A0%7D',
		}).then(res => {
			console.log(res.data.data.article_list)
			this.noticlist = res.data.data.article_list
		})
		},
		methods: {
			details(id, iid) {
				console.log(id, iid)
				this.$router.push(`/detail_1/${id}/${iid}`)
			},
			news(id){
				this.$router.push(`/detail/${id}`)
			}
		}

	}
</script>

<style>
	.maintext{
		font-size: 20px;
		margin-top: 15px;
	}
	.maininfo {
		overflow: auto;
		margin-bottom: 15px;
		margin-top: 15px;
		height: 500px;
		box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
	}
</style>
