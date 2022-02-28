(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{440:function(a,e,t){"use strict";t.r(e);var r=t(54),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"自定义模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义模板"}},[a._v("#")]),a._v(" 自定义模板")]),a._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[a._v("luban使用"),t("a",{attrs:{href:"https://github.com/scriban/scriban",target:"_blank",rel:"noopener noreferrer"}},[a._v("scriban"),t("OutboundLink")],1),a._v(" 模板引擎来生成代码，也使用这个模板来生成自定义的文本型数据文件。")]),a._v(" "),t("p",[a._v("模板文件在 Luban.Servers/Templates目录下。")]),a._v(" "),t("h2",{attrs:{id:"自定义模板搜索路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义模板搜索路径"}},[a._v("#")]),a._v(" 自定义模板搜索路径")]),a._v(" "),t("p",[a._v('尽管可以直接修改Luban.Server/Templates目录下的模板文件，但每次更新Luban.Server会覆盖自己的实现，不是很方便。\nLuban.Server支持模板搜索路径， Luban.Server命令行参数" -t， --template_search_path path" 用于指定优先搜索路径。')]),a._v(" "),t("h2",{attrs:{id:"模块缓存机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块缓存机制"}},[a._v("#")]),a._v(" 模块缓存机制")]),a._v(" "),t("p",[a._v('为了优化性能，Luban.Server在运行时加载模板文件后，会保留模板缓存。在调试模板时，缓存机制导致不会重新加载模板文件，需要频繁重启，不太方便。可以通过参数\n"--disable_cache" 禁用缓存。')]),a._v(" "),t("h2",{attrs:{id:"代码模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码模板"}},[a._v("#")]),a._v(" 代码模板")]),a._v(" "),t("p",[a._v("自定义代码模板示例暂时请参见 "),t("a",{attrs:{href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/CustomTemplates",target:"_blank",rel:"noopener noreferrer"}},[a._v("CustomTemplates"),t("OutboundLink")],1),a._v("。\n生成脚本示例参见 "),t("a",{attrs:{href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/GenerateDatas",target:"_blank",rel:"noopener noreferrer"}},[a._v("脚本目录"),t("OutboundLink")],1),a._v(" 下的 gen_template_xxxx.bat 文件。")]),a._v(" "),t("h3",{attrs:{id:"模板环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模板环境变量"}},[a._v("#")]),a._v(" 模板环境变量")]),a._v(" "),t("p",[a._v("每个模板的默认提供的环境变量是不同的，代码和数据模板的环境变量不同，数据模板也分为convert模板（源数据格式到源数据格式的转换）和 data模板（源数据格式到导出格式的转换）。")]),a._v(" "),t("h4",{attrs:{id:"代码模板环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码模板环境变量"}},[a._v("#")]),a._v(" 代码模板环境变量")]),a._v(" "),t("ul",[t("li",[a._v("x  类型定义。 对于enum是DefEnum，对于bean是DefBean，对于table是DefTable")]),a._v(" "),t("li",[a._v("assembly 当前定义集合。注意不是c#的dll assembly，而是当前你在配置中定义的所有类型信息的集合")])]),a._v(" "),t("h4",{attrs:{id:"convert-数据模板环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#convert-数据模板环境变量"}},[a._v("#")]),a._v(" convert 数据模板环境变量")]),a._v(" "),t("ul",[t("li",[a._v("table 所在的DefTable的类型定义。")]),a._v(" "),t("li",[a._v("data 当前记录的对应的DType数据")]),a._v(" "),t("li",[a._v("assembly 当前定义集合。")])]),a._v(" "),t("h4",{attrs:{id:"data-数据模板环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-数据模板环境变量"}},[a._v("#")]),a._v(" data 数据模板环境变量")]),a._v(" "),t("ul",[t("li",[a._v("table 所在的DefTable的类型定义。")]),a._v(" "),t("li",[a._v("datas 当前表的所有导出数据DType列表，即 List,DType 类型。")]),a._v(" "),t("li",[a._v("assembly 当前定义集合。")])]),a._v(" "),t("h2",{attrs:{id:"数据模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据模板"}},[a._v("#")]),a._v(" 数据模板")]),a._v(" "),t("p",[a._v("当生成参数 --gen_types中包含 data_template时，为自定义数据模板模式，需要配合 --template_name <template_name> 来指定模板名(注意，模板名不要包含.tpl后缀)，在"),[a._v("/config/data 目录下，寻找 <template_name>.tpl 文件。")]],2),a._v(" "),t("p",[a._v('例如 "--gen_types data_template --template_name lua" 则会从搜索路径查找 config/data/lua.tpl 文件。')]),a._v(" "),t("p",[a._v("示例模板文件在 "),t("a",{attrs:{href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/CustomTemplates",target:"_blank",rel:"noopener noreferrer"}},[a._v("CustomTemplates"),t("OutboundLink")],1),a._v("/data 下。")]),a._v(" "),t("h2",{attrs:{id:"自定义数据模板文件输出的数据文件的后缀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义数据模板文件输出的数据文件的后缀"}},[a._v("#")]),a._v(" 自定义数据模板文件输出的数据文件的后缀")]),a._v(" "),t("p",[a._v("luban会智能从 template_name 参数中猜测文件类型，默认给一个输出文件名。如果猜测失败，又没有指定 --data_file_extension 选项，则会报错。\n像 lua2, lua,lua_test,my_lua_template 都会猜测为lua类型。")])])}),[],!1,null,null,null);e.default=s.exports}}]);