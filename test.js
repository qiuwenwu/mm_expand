require('./index.js');


var now = new Date();
var str = now;
console.log("时间", str);
console.log("时间", str.toString());
console.log("当前", new Date(str.toString()).toStr("yyyy-MM-dd hh:mm:ss"));

var time = now.toStr('yyyy-MM-dd hh:mm:ss');
console.log("当前", time);
console.log("时间", time.toTime().toStr("yyyy-MM-dd hh:mm:ss"));
console.log("当前", new Date(time).toStr("yyyy-MM-dd hh:mm:ss"));

var time = now.toStr("yyyy-MM-ddThh:mm");
console.log("当前", time);
console.log("时间", time.toTime().toStr("yyyy-MM-dd hh:mm:ss"));


var time = now.toStr("yyyy-MM-ddThh:mm:ss.000Z");
console.log("当前", time);
console.log("时间", time.toTime().addSeconds(28800).toStr("yyyy-MM-dd hh:mm:ss"));

var json = {
	now
};
var jtime = JSON.stringify(json);
console.log("时间", jtime);
console.log("时间", (jtime.toJson()).now.toTime().toStr("yyyy-MM-dd hh:mm:ss"));

// console.log($.rootPath);
// console.log("./fast/log".fullname(__dirname));
// console.log("./fast/log".fullname());
// console.log("./fast/log/".fullname());
// console.log("fast/log".fullname(__dirname));
// console.log("fast/log".fullname());
// console.log("fast/log/".fullname());
// console.log("../fast/log".fullname(__dirname));
// console.log("../fast/log".fullname());
// console.log("/fast/log".fullname(__dirname));
// console.log("/fast/log".fullname());
// console.log("/fast/log/".fullname());
// console.log("/fast/log.lgo".fullname());
// console.log("/fast/log.lgo\\".fullname());
// console.log("E:\\github\\mm_modules\\mm_expand\\fast\\log\\".fullname(__dirname));
// console.log("E:\\github\\mm_modules\\mm_expand\\fast\\log\\".fullname());
// console.log("E:\\github\\mm_modules\\mm_expand\\fast\\log".fullname());

// console.log("/fast/log.lgo\\log".fullname());
// var arr1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// var arr1 = [{
// 	id: 1
// }, {
// 	id: 2
// }, {
// 	id: 3
// }, '4', '5', '6', '7', '8', '9', '10', '11', '12'];
// console.log('拆分', arr1.to2D(2));
// console.log('拆分', arr1.to2D(3));
// console.log('拆分', arr1.to2D(4));
// console.log('拆分', arr1.to2D(5));
// console.log('拆分', arr1.to2D(6));
// console.log('拆分', arr1.to2D(7));
// console.log('拆分', arr1.to2D(8));

// console.log('合并', arr1.to2D(7).to1D());
// console.log('合并', arr1.to2D(8).to1D());

// 测试复制目录
// "./demo/test3".delDir();
// $.dir.del("./demo/test4");
// "./demo/test".copyDir("./demo/test3"); // 方法1
// $.dir.copy("./demo/test", "./demo/test4"); // 方法2

// // 测试复制文件
// "./demo/test5/".addDir();
// "./demo/test/local.json".copyFile("./demo/test5/local.json"); // 方法1
// $.file.copy("./demo/test/local.json", "./demo/test5/local2.json"); // 方法2
// "./demo/test5/local.json".delFile();
// $.file.del("./demo/test5/local2.json");

// var timeStr = "1970-01-01 00:00:00";

// var time = timeStr.toTime();
// console.log(time);

// var time2 = timeStr.addDays(367);
// console.log(time2);

// var time3 = timeStr.addSeconds(60);
// console.log(time3.toStr("yyyy-MM-dd hh:mm:ss"));

// var time4 = timeStr.addSeconds(60, "yyyy-MM-dd hh:mm:ss");
// console.log(time4);

// "./中文/的".addDir(__dirname);
// "./中文/test.json".saveJson({ name: "123" });
// "./中文/test.json".delFile();
// "./中文".delDir(__dirname);

// var num = 5;
// 随机一个1-5数值
// console.log(num.rand(1));
// console.log(num.rand(1));
// console.log(num.rand(1));
// console.log(num.rand(1));
// console.log(num.rand(1));
// console.log(num.rand(1));
// console.log(num.rand(1));

// 随机一个上下浮动10的数值
// console.log(num.range(10));
// console.log(num.range(10));
// console.log(num.range(10));
// console.log(num.range(10));
// console.log(num.range(10));
// console.log(num.range(10));
// console.log(num.range(10));

// /**
//  * 测试重载模块
//  */
// var Base = $.reload('./base.js');
// console.log(new Base());

// /**
//  * 测试语言包
//  */
// async function test_lang(){
// 	$.lang.set('test', {
// 		name: "{0}，hello world!"
// 	})
// 	console.log($.lang.get('name'));
// 	console.log($.lang.get('test.name', "mm"));
// }
// test_lang();


/**
 * 测试动态添加指令
 */
// async function test_cmd(){
// 	$.set_cmd('config.name', '你好');
// 	console.log(await $.cmd('config.name'));

// 	$.set_cmd('test', {});
// 	$.set_cmd('test.func', async function(param){
// 		return 'hi, ' + param;
// 	});
// 	console.log(await $.cmd('test.func', 'hello world!'));
// }
// test_cmd();

// /**
//  * 动态创造新类
//  */
// async function test_class(){
// 	var cs = $.create_class({
// 		set_config: function(config){
// 			break;
// 		},
// 		test: async function(ab){
// 			return "你好, " + ab;
// 		}
// 	});

// 	console.log(cs);
// 	console.log(await cs.test('hello world!'));
// }
// test_class();

/**
 * 测试运行代码
 */
// async function test_run_code(){
// 	var cm = {
// 		set_config: function(config){
// 			break;
// 		},
// 		test: async function(ab){
// 			return "你好, " + ab;
// 		}
// 	};
// 	var em = {
// 		test: function(bb){
// 			return bb;
// 		}
// 	}
// 	var code = "body = await cm.test('123') + em.test('456');";
// 	var ret = await $.run_code(code, cm, em);
// 	console.log(ret);
// }
// test_run_code();



/**
 * 测试运行代码脚本
 */
// async function test_run_srcipt(){
// 	var cm = {
// 		set_config: function(config){
// 			break;
// 		},
// 		test: async function(ab){
// 			return "你好, " + ab;
// 		}
// 	};
// 	var em = {
// 		test: function(bb){
// 			return bb;
// 		}
// 	}
// 	var code = "";
// 	var ret = await $.run_srcipt("./script.js", cm, em);
// 	console.log(ret);
// }
// test_run_srcipt();

// var arr = [{name: "test", age: 15 },{name: "bbs", age: 33 }];
// console.log(arr.getVal('age', { name: 'test' }));

// console.log("../".fullname(__dirname));
// console.log("./".fullname(__dirname));
// console.log("/".fullname());

// var drive = {
// 	name: "test",
// 	config: {
// 		onOff: false,
// 		sort: 10,
// 		param: {
// 			add: {
// 				desc: "这是添加",
// 				query: ["name"]
// 			},
// 			del: {
// 				desc: "这是删除",
// 				query: ["name"]
// 			},
// 			set: {
// 				desc: "这是修改",
// 				query: ["name"]
// 			}
// 		},
// 		list: [{
// 				name: "张三",
// 				age: 18
// 			},
// 			{
// 				name: "李四",
// 				age: 24
// 			},
// 			{
// 				name: "王五",
// 				age: 35
// 			}
// 		]
// 	}
// };

// "./test/dd/local.json".addDir();
// "./tests/dd/local".addDir();
// console.log("./test/dd/local.json".saveJson(drive));
// console.log($.toJson("./test/dd/local.json".loadJson()));

// console.log($.dir.getAll('./'));
// // function test_get() {
// // var query = {
// // 	config: {
// // 		param: {
// // 			add: true
// // 		}
// // 	}
// // };
// // var ret = $.get(drive, query);

// // var query2 = ["config", "param", "add"];
// // var ret = $.get(drive, query2);

// // var query2_2 = ["config", "param", {"add": true, "set": true }];
// // var ret = $.get(drive, query2_2);

// // var query2_3 = {
// // 	config: {
// // 		param: ["add", "desc"]
// // 	}
// // };
// // var ret = $.get(drive, query2_3);

// // var query3 = {
// // 	"config": ["param", {"add": true} ]
// // };
// // var ret = $.get(drive, query3);

// // var query4 = {
// // 	config: [{
// // 			param: {
// // 				set: ""
// // 			}
// // 		},
// // 		{
// // 			param: {
// // 				add: "",
// // 				set: ""
// // 			}
// // 		}
// // 	]
// // };
// // var ret = $.get(drive, query4);

// // var query5 = {
// // 	config: "param"
// // };
// // var ret = $.get(drive, query5);
// // 	console.log(JSON.stringify(ret, true));
// // }
// // test_get();

// // function test_add() {
// // var value1 = {
// // 	config: {
// // 		param: {
// // 			get: {
// // 				desc: "这是添加",
// // 				query: ["id", "name"]
// // 			}
// // 		}
// // 	}
// // };
// // $.add(drive, null, value1);

// // var value2 = {
// //	test: "这是添加1111",
// // 	desc: "这是添加哦",
// // };
// // $.add(drive, ["config", "param", "add"], value2);
// // console.log(JSON.stringify(drive, true));

// // 	var value2 = {
// // 		add: {
// // 			test: "add"
// // 		},
// // 		set: {
// // 			test: "set"
// // 		}
// // 	};
// // 	var ret = $.add(drive, ["config", "param", {
// // 		add: true,
// // 		set: true
// // 	}], value2);

// // 	console.log(JSON.stringify(drive, true));
// // }

// // test_add();


// // function test_add() {
// // var value1 = {
// // 	config: {
// // 		param: {
// // 			set: {
// // 				desc: "这是添加111",
// // 				query: ["id", "name"],
// // 				test: ""
// // 			}
// // 		}
// // 	}
// // };
// // $.set(drive, null, value1);

// // var value2 = {
// // 	test: "这是修改1111",
// // 	desc: "这是修改哦333",
// // };
// // $.set(drive, ["config", "param", "set"], value2);
// // console.log(JSON.stringify(drive, true));

// // var value2 = {
// // 	add: {
// // 		test: "add",
// // 		desc: "test"
// // 	},
// // 	set: {
// // 		test: "set",
// // 		desc: "test"
// // 	}
// // };
// // var ret = $.set(drive, ["config", "param", {
// // 	add: true,
// // 	set: true
// // }], value2);

// // 	console.log(JSON.stringify(drive, true));
// // }


// // test_add();


// // function test_del() {
// // 	// $.del(drive, null, null);

// // 	// $.del(drive, ["config", "param", "set"], null);

// // 	// $.del(drive, ["config", "param", "set"], ["desc", "query"]);
// // 	// var ret = $.del(drive, ["config", "param", {
// // 	// 	add: true,
// // 	// 	set: true
// // 	// }], null);

// // 	// $.del(drive, ["config", "param"], { add: "query", set: "desc" });
// // 	// $.del(drive, ["config", "param"], { add: {"desc": true }, set: "desc" });
// // 	// $.del(drive, "config" , { config: "sort"});
// // 	$.del(drive, { config: "param" }, { config: { param: "add" } });
// // 	console.log(JSON.stringify(drive, true));

// // 	var arr = ["123","test"];
// // 	var arr2 = ["1234","test"];
// // 	console.log(arr.add(arr2));
// // }

// // test_del();

// function testTpl(){
// 	var arr = [1, 2, 3];
// 	var list = Object.assign([], arr).reverse();
// 	let template = `
// <ul>
// 	<% for(let i = 0; i < arr.length; i++) { %>
// 	<li><%= arr[i] %></li>
// 	<% } %>
// </ul>
// <ul><% for(let i = 0; i < list.length; i++) { %><% if(list[i] > 1) { %><li><%= list[i] %></li><% } %><% } %></ul>
// 	`;
// 	var ret = template.tpl({ arr, list });
// 	console.log(ret);
// }
// testTpl();


// var list = [
// 	{
// 		id: 1,
// 		name: "张三",
// 		age: 23,
// 		sex: 1
// 	},
// 	{
// 		id: 2,
// 		name: "李四",
// 		age: 20,
// 		sex: 0
// 	}, {
// 		id: 3,
// 		name: "王五",
// 		age: 23,
// 		sex: 1
// 	},
// 	{
// 		id: 4,
// 		name: "十五",
// 		age: 23,
// 		sex: 0
// 	}
// ];

// var list2 = [
// 	{
// 		id: 2,
// 		name: "李四",
// 		age: 18,
// 		sex: 0
// 	}, {
// 		id: 3,
// 		name: "王老五",
// 		age: 23,
// 		sex: 1
// 	}
// ];

// list.setList(list2, 'id');
// console.log(list);


// var test = "?a=123&b=test&c=nihao";
// console.log(test.toQuery());

// console.log('./'.getFile());
// console.log('./'.getDir('node*'));