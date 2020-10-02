const Base = require('./base.js');

/**
 * 语言类
 */
class Lang extends Base {
	/**
	 * 构造函数
	 * @param {Object} config 配置参数
	 */
	constructor(config) {
		super({
			zh: {},
			en: {}
		});
		// 当前选择语言
		this.now = "zh";
		
		/**
		 * 语言配置
		 */
		this.set_config(config);
	}
}

/**
 * 获取语言
 * @param {String} 键
 * @param {Object} 参数
 * @return {String} 返回语言值
 */
Lang.prototype.get = function(key, ...param) {
	var lang = this.config[this.now];
	var arr = key.split('.');
	var value = lang;
	for (var i = 0; i < arr.length; i++) {
		value = value[arr[i]];
		if (value === undefined) {
			console.error("language pack error: " + key + " undefined");
			break;
		} else if (typeof(value) == "string") {
			break;
		}
	}

	if (typeof(value) == "string") {
		for (var i = 0; i < param.length; i++) {
			var reg = new RegExp("\\{" + i + "\\}", 'ig');
			value = value.replace(reg, param[i]);
		}
	}
	return value;
};

/**
 * 设置语言值
 * @param {String} 键
 * @param {Object} 参数
 * @return {String} 返回语言值
 */
Lang.prototype.set = function(key, value) {
	var lang = this.config[this.now];
	var arr = key.split('.');
	var val = lang;
	for (var i = 0; i < arr.length; i++) {
		var key = arr[i];
		var v = val[key];
		if (v === undefined) {
			val[key] = value;
			break;
		} else if (typeof(v) == "string") {
			val[key] = value;
			break;
		} else if (typeof(v) == "object") {
			val = v;
		}
	}
	return val;
};

module.exports = Lang;
