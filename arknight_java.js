function click1(){
	let click1=document.getElementById('click1')
	click1.play()
}
function click2(){
	let click2=document.getElementById('click2')
	click2.play()
}
function click3(){
	let click3=document.getElementById('click3')
	click3.play()
}
// 斯卡蒂语言播放
let flag=false
	let voice = [
			"/jljmcHTML/music/语音/arknight/问候.wav",
	        "/jljmcHTML/music/语音/arknight/交谈1.wav",
	        "/jljmcHTML/music/语音/arknight/交谈2.wav",
	        "/jljmcHTML/music/语音/arknight/交谈3.wav",
			"/jljmcHTML/music/语音/arknight/信赖提升后交谈1.wav",
			"/jljmcHTML/music/语音/arknight/信赖提升后交谈2.wav",
			"/jljmcHTML/music/语音/arknight/信赖提升后交谈3.wav",
	    ];
		let txt = [
				"注意安全，博士。",
		        "看过我的履历了？我的过去可是很糟糕的。嗯，让我待在身边，不仅你会被卷入麻烦，我也会很难办的。",
		        "我的头发很长，很好看？啊，嗯，谢谢......要不要摸摸看？我的头发还是挺柔软的。这方面，我还算是有些自信的哦。",
		        "我没看错吧？那个人，现在叫幽灵鲨是吗，怎么穿成了修女的样子？失忆了？这可麻烦了......博士，你得帮帮她，可不能让她忘记自己真正的职责。",
				"好，又度过了轻松的一天！没有会卷走队友的巨大触须，也没有蹲在角落里满手是血的疯狂敌人......光是上上战场什么的，对，已经很轻松了！",
				"根据传说，我的族裔已经和那些灾祸战斗了无数年。说不定，我们也帮你们这些城市人把灾祸挡在了陆地之外......所以说，是不是该请我喝一杯，好好谢谢我？",
				"当你历经漫长黑暗、终于浮出海面——睁开眼睛的刹那，灿烂星空滴落眼眶、无垠波浪拂过面颊，眼泪和家的味道，都是咸的。相比下，罗德岛的浴缸真是又窄又浅......我一定得带你去试试才行。",
		    ];
function chufayuying() {
	let skd=document.getElementById('skd')
	let skdvoice = document.getElementById('skdvoice')
	let tell=document.getElementById('tell')
    let random = Math.floor(Math.random()*voice.length)
    let randomvoice = voice[random]
	if(flag===false){
		tell.innerHTML=txt[0]
		skdvoice.src=voice[0]
		voice.shift();
		txt.shift();
		flag=true
	}else{
		tell.innerHTML=txt[random]
		skdvoice.src=randomvoice
	}
    skdvoice.play()
	console.log(voice)
}
skd.addEventListener('click', chufayuying)
// 背景音乐播放关闭
let a=0
// let bgvideo=document.getElementById('bgvideo')
function bgclose(){
	let bgm=document.getElementById('bgm')
	bgm.volume=0.3;
	if(a===0){
		bgm.play()
		a++
	}else if(a===1){
		bgm.pause()
		a--
	}
}

bgvideo.addEventListener('click', bgclose)
// 好友
function sg(){
	alert('该功能正在开发中🛠,可用的为左上角的‘⚠’，‘📫’,好友')
}
let tc=document.getElementById('tc')
			let hytxt=[
				'这个人很懒什么都没有写',
				'这个人在这里没有好友QAQ'
			]
			function grmp(){
				tc.innerHTML=hytxt[0]
			}
			function hlyb(){
				tc.innerHTML=hytxt[1]
			}
// let hylbtb=document.getElementById('hylbtb')
function gqlx(name){
	return document.getElementById(name)
}
function lx(llx){
	gqlx(llx).style=`
	left: 0%;
	top: 0%;
	`
}
function gq(ggq){
	gqlx(ggq).style=`
	left: -100%;
	top: -100%;
	`
}
// 公告邮件
let ggrz={
	"4月19":`2025<br>
		3.15：<br>
		今天开始开发个人博客<br>
		打了一下午的代码<br>
		蒂蒂终于能说话了<br>
		3.16：<br>
		修改网页<br>
		3.21：<br>
		修改了外部文件夹布局<br>
		简化代码<br>
		修改了底层代码把大部分的px改成%<br>
		增添斯卡蒂语言<br>
		该死的浏览器我怎么试都没法让他在加载时就开始播放音频，只好退而求其次让在第一次点击时发出固定语音<br>
		明天加入计时器及闲置情况下的语音<br>
		3.22：<br>
		看了GBC和玩了杀戮尖塔（这和开发有关系吗）<br>
		突然发现我的电脑是1440*900的<br>
		但是现在大部分人的电脑是1920*1080的<br>
		没发适配<br>
		尝试做flex布局<br>
		希望有用<br>
		3.27:<br>
		周四流鼻血<br>
		直接回家休息了<br>
		啥也干不了<br>
		最开摆<br>
		4.19:<br>
		孩子们我打赢复活了<br>
		终于恢复了<br>
		完善界面<br>
		增加更多的音效<br>
		新添好友公告邮箱`,
		"4月26":`
		4.26:<br>
		又改了网页的布局<br>
		现在基本上没有几个px了
		`
}
let gzts=['4月26','4月19']
let wz=document.getElementById('wz')
let rzsj=document.querySelectorAll('#gonggao .bottom ul li')
for(let i=0;i<gzts.length;i++){
	rzsj[i].addEventListener('click',function(){
		wz.innerHTML=ggrz[gzts[i]]
	})
}