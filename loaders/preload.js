const loaderUtils = require("loader-utils"),
    schemaUtils = require("schema-utils");

module.exports = function main(source) {
    this.cacheable();
    console.log("applying loader");

    //Мы можем получать джавовые типы и содзавать объекты этого типа
	var JavaString = Java.type("java.lang.String");
    var initial = new JavaString("Забанить тролля!");

	//Мы можем конвертить данные туда, сюда, и обратно
    var jsVariants = ["Забанить тролля!", "Забанить спамера!"];
    var javaVariants = Java.to(jsVariants, "java.lang.String[]");
    var variants = JSON.stringify(javaVariants);
    //Но интероп не всегда хорош, и тогда приходится городить костыли

    return `window.buttonCaption=\"${initial}\";`
            + `window.buttonVariants=${variants};`
            + `${source}`;
};