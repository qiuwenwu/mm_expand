/**
 * 基础类
 */
class Base {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 * @param {Object} options 附加选项
	 */
	constructor(config, options) {
		/**
		 * 配置参数
		 * @type {Object}
		 */
		this.config = config || {};

		/**
		 * 附加选项
		 * @type {Object}
		 */
		this.options = options || {};
	}
}

/**
 * 设置配置参数
 * @param {Object} config 主要配置
 * @param {Object} options 其他配置
 * @return {Object} 返回执行结果
 */
Base.prototype.set_config = function(config, options = {}) {
	if (config) {
		$.push(this.config, config, true);
	}
	if (options) {
		this.options = Object.assign(this.options, options);
	}
	return this.config;
};

/**
 * 执行事件
 * @param {String} name 名称
 * @param {Object} paramA 参数1
 * @param {Object} paramB 参数2
 * @param {Object} paramC 参数3
 * @return {Object} 返回执行结果
 */
Base.prototype.event = async function(name, paramA, paramB, paramC) {
	if (this[name]) {
		return await this[name](paramA, paramB, paramC);
	} else {
		return undefined;
	}
};

/**
 * 事件驱动
 * @param {String} name 名称
 * @param {Object} paramA 参数1
 * @param {Object} paramB 参数2
 * @param {Object} paramC 参数3
 * @return {Object} 返回执行结果
 */
Base.prototype.do = async function(name, paramA, paramB, paramC) {
	var res = await this.event(name + '_before', paramA, paramB, paramC);
	if (!res) {
		res = await this.event(name + '_main', paramA, paramB, paramC);
	}
	var ret = await this.event(name + '_after', paramA, paramB, res);
	return ret || res;
};


/**
 * 初始化
 * @param {Object} paramA 参数1
 * @param {Object} paramB 参数2
 * @return {Object} 返回执行结果
 */
Base.prototype.init = async function(paramA, paramB) {
	return await this.do('init', paramA, paramB);
};

/**
 * 执行
 * @param {Object} paramA 参数1
 * @param {Object} paramB 参数2
 * @return {Object} 返回执行结果
 */
Base.prototype.run = async function(paramA, paramB) {
	return await this.do('run', paramA, paramB);
};

/**
 * 执行指令(主要)
 * @param {String} method 方法
 * @param {Object} paramA 参数1
 * @param {Object} paramB 参数2
 * @return {Object} 返回执行结果
 */
Base.prototype.cmd_main = async function(method, paramA, paramB) {
	var mds = method.split('.');
	var obj = this;
	var str = '';
	for (var i = 0; i < mds.length; i++) {
		var name = mds[i];
		str += '["' + name + '"]';
		if (obj[name]) {
			obj = obj[name];
			var type = typeof(obj);
			if (type === 'function') {
				var func_str = 'this' + str + '(paramA, paramB);';
				obj = await eval(func_str);
				break;
			} else if (Array.isArray(obj) && paramA) {
				var oj = obj[paramA];
				if (paramB) {
					obj = oj[paramB];
				} else {
					obj = oj;
				}
			} else if (type !== 'object') {
				break;
			}
		} else {
			obj = undefined;
		}
	}
	return obj;
};


/**
 * 执行指令
 * @param {String} method 方法
 * @param {Object} paramA 参数1
 * @param {Object} paramB 参数2
 * @return {Object} 返回执行结果
 */
Base.prototype.cmd = async function(method, paramA, paramB) {
	return await this.do('cmd', method, paramA, paramB);
};

/**
 * 帮助(主要)
 * @param {Object} param 参数
 * @return {Object} 返回查询结果
 */
Base.prototype.help_main = async function(param) {
	var ret = '';
	if (param) {
		if (this.helper) {
			var hp = '';
			if (param) {
				hp = this.helper[param];
			} else {
				hp = this.helper;
			}
			if (Array.isArray(hp)) {
				for (var i = 0; i < hp.length; i++) {
					ret += "[" + i + "] " + typeof(hp[i]) + "\r\n";
				}
			} else if (typeof(hp) === 'object') {
				for (var k in hp) {
					ret += "." + k + " " + typeof(hp[k]) + "\r\n";
				}
			} else {
				ret = hp;
			}
		} else {
			var obj = this;
			var mds = param.split('.');
			for (var i = 0; i < mds.length; i++) {
				var name = mds[i];
				if (obj[name]) {
					obj = obj[name];
					var type = typeof(obj);
					if (type === 'function') {
						ret = obj.toString();
						break;
					} else if (Array.isArray(obj)) {
						ret = JSON.stringify(obj);
					} else if (type !== 'object') {
						ret = obj;
						break;
					} else {
						ret = obj;
					}
				} else {
					ret = obj;
					break;
				}
			}
			if (typeof(ret) === 'object') {
				var hp = ret;
				ret = "";
				if (hp) {
					for (var k in hp) {
						if (Array.isArray(hp[k])) {
							ret += "." + k + " array\r\n";
						} else {
							ret += "." + k + " " + typeof(hp[k]) + "\r\n";
						}
					}
				}
			}
		}
	} else {
		ret = "";
		var hp = this;
		for (var k in hp) {
			if (Array.isArray(hp[k])) {
				ret += "." + k + " array\r\n";
			} else {
				ret += "." + k + " " + typeof(hp[k]) + "\r\n";
			}
		}
	}

	return ret;
};

/**
 * 查看帮助
 * @param {Object} param 查询参数
 * @return {Object} 返回查询结果
 */
Base.prototype.help = async function(param) {
	return await this.do('help', param);
};



/**
 * 设置指令(主要)
 * @param {String} method 指令方法
 * @param {Object} obj 指令对象，可以是函数、字符串、数组、对像
 * @return {Object} 返回设置的指令对像
 */
Base.prototype.set_cmd_main = async function(method, obj) {
	var arr = method.split('.');
	var val = this;
	for (var i = 0; i < arr.length; i++) {
		var key = arr[i];
		var v = val[key];
		if (v === undefined) {
			val[key] = obj;
			break;
		} else if (typeof(v) == "string") {
			val[key] = obj;
			break;
		} else if (typeof(v) == "object") {
			val = v;
		}
	}
	return val;
};

/**
 * 设置指令
 * @param {String} method 指令方法
 * @param {Object} obj 指令对象，可以是函数、字符串、数组、对像
 * @return {Object} 返回设置的指令对像
 */
Base.prototype.set_cmd = async function(method, obj) {
	return await this.do('set_cmd', method, obj);
};

/**
 * 创建新类
 * @param {Object} cs_old 原生类
 * @return {Object} 返回心类
 */
Base.prototype.create_class = function(cs_old) {
	var cs = new Base();
	$.push(cs, cs_old, true);
	for (var k in cs_old) {
		if (!k.endWith('_main') && !k.endWith('_before') && !k.endWith('_after') && typeof(cs_old[k]) == "function") {
			var func_str = cs_old[k].toString();
			if (func_str.indexOf('async ') === 0) {
				cs[k + "_main"] = cs_old[k];
				var pm = func_str.between('(', ')');
				eval("this." + k + " = async function(" + pm + "){ return await this.do('" + k + "', " + pm + "); }");
			}
		}
	}
	return cs;
};

module.exports = Base;
