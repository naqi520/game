<template>
	<div>
		<br><br>
	<el-table
	  :data="nowdatalist"
	  border
	  style="width: 100%">
		<el-table-column
		  prop="thumbnail"
		  label="图片"
		  
		  >
		  <template slot-scope="scope">
		  	<img :src="scope.row.thumbnail" alt="" class="" style="width: 100%;">
		  </template>
		</el-table-column>
	  <el-table-column
	    prop="released_desc"
	    label="日期"
	    >
	  </el-table-column>
	  <el-table-column
	    prop="gametitle"
	    label="姓名"
	    >
	  </el-table-column>
	  <el-table-column
	    prop="dedicated_page_url"
	    label="官网"
	    >
		<template slot-scope="scope">
			<a :href="scope.row.dedicated_page_url" target="_blank">官网</a>
		</template>
	  </el-table-column>
	</el-table>
	<el-pagination
	  background
	  layout="prev, pager, next"
	   :page-size="pageSize"
	   :current-page.sync="currentPage"
	  :total="datalist.length" class="page">
	</el-pagination>
	</div>
</template>

<script>
	export default{
		data() {
			return {
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
			currentPage:1,
			pageSize:4
			}
		},
		computed:{
			nowdatalist(){
				return this.datalist.slice((this.currentPage -1)*this.pageSize ,this.currentPage*this.pageSize) || [];
			}
		},
	}
</script>

<style>
</style>
