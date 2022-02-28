(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{411:function(t,a,e){"use strict";e.r(a);var s=e(54),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),e("h2",{attrs:{id:"我运行-luban-examples-项目projects目录下的示例项目中的生成脚本-为什么提示我-connect-fail-失败了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我运行-luban-examples-项目projects目录下的示例项目中的生成脚本-为什么提示我-connect-fail-失败了"}},[t._v("#")]),t._v(" 我运行 luban_examples 项目Projects目录下的示例项目中的生成脚本，为什么提示我 connect fail，失败了？")]),t._v(" "),e("p",[t._v("示例项目的生成脚本使用了luban.client，默认使用云生成，它需要连接到远程的luban.server才能完成生成。有两个办法可以解决")]),t._v(" "),e("ul",[e("li",[t._v("运行 luban_examples 项目目录下的 run_luban_server.bat 或者 run_luban_server.sh 。然后再运行生成脚本")]),t._v(" "),e("li",[t._v("将脚本里的 Luban.Client/Luban.Client 换成 Luban.LubanServer/Luban.LubanServer。 因为Luban.ClientServer同时包含了Client和Server\n，可以独立完成生成。")])]),t._v(" "),e("div",{staticClass:"language-bat line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("@@将脚本里\nset GEN_CLIENT=%WORKSPACE%\\Tools\\Luban.Client\\Luban.Client.exe\n@@换成\nset GEN_CLIENT=%WORKSPACE%\\Tools\\Luban.ClientServer\\Luban.ClientServer.exe\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("详细参见 "),e("a",{attrs:{href:"command_tools"}},[t._v("luban命令行工具")])]),t._v(" "),e("h2",{attrs:{id:"如何指定主键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何指定主键"}},[t._v("#")]),t._v(" 如何指定主键")]),t._v(" "),e("p",[t._v("table的index字段指定主键列表。 详细请参见 "),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/wiki/%E9%85%8D%E7%BD%AE%E5%AE%9A%E4%B9%89%E7%9B%B8%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki-配置相关定义"),e("OutboundLink")],1),t._v(" 中关于table的mode和index的相关文档。")]),t._v(" "),e("p",[t._v("map及list表支持主键概念，未指定mode和index的情况下，自动为mode=map模式，并记录bean的第一个字段作为主键。")]),t._v(" "),e("p",[t._v("假设 TbTest表的记录为Test类型，你想用Test的my_index字段作为key，则：")]),t._v(" "),e("ul",[e("li",[t._v("如果在xml里定义表，则在table的index属性中指定主键字段名，如下：")])]),t._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("TbTest"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("index")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my_index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("如果在 table.xlsx里定义表，则在index列指定主键名，如下")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("##var")]),t._v(" "),e("th",[t._v("full_name")]),t._v(" "),e("th",[t._v("value_type")]),t._v(" "),e("th",[t._v("define_from_excel")]),t._v(" "),e("th",[t._v("input")]),t._v(" "),e("th",[t._v("index")]),t._v(" "),e("th",[t._v("...")])])]),t._v(" "),e("tbody",[e("tr",[e("td"),t._v(" "),e("td",[t._v("TbTest")]),t._v(" "),e("td",[t._v("Test")]),t._v(" "),e("td",[t._v("true")]),t._v(" "),e("td",[t._v("equip.xlsx")]),t._v(" "),e("td",[t._v("my_index")]),t._v(" "),e("td")])])]),t._v(" "),e("h2",{attrs:{id:"支持多主键吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持多主键吗"}},[t._v("#")]),t._v(" 支持多主键吗？")]),t._v(" "),e("p",[t._v("支持。 table mode=list时，支持联合多主键模式和独立多主键模式。详细文档参见 "),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/wiki/%E9%85%8D%E7%BD%AE%E5%AE%9A%E4%B9%89%E7%9B%B8%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki-配置相关定义"),e("OutboundLink")],1),t._v(" 中关于table的mode的相关文档。")]),t._v(" "),e("h2",{attrs:{id:"支持按client和server导出不同表及不同字段吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持按client和server导出不同表及不同字段吗"}},[t._v("#")]),t._v(" 支持按client和server导出不同表及不同字段吗？")]),t._v(" "),e("p",[t._v("支持。"),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/wiki/%E9%85%8D%E7%BD%AE%E5%AE%9A%E4%B9%89%E7%9B%B8%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki-配置相关定义"),e("OutboundLink")],1),t._v("\n中关于 分级定义及分组导出相关文档。")]),t._v(" "),e("h2",{attrs:{id:"支持哪些源数据文件类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持哪些源数据文件类型"}},[t._v("#")]),t._v(" 支持哪些源数据文件类型")]),t._v(" "),e("ul",[e("li",[t._v("excel族。 csv、xls、xlm、xlsx、xlsm 等等。 csv支持各种编码，luban会智能猜测它的编码，无论你用gbk还是utf-8或者其他编码，都能正确处理。")]),t._v(" "),e("li",[t._v("json")]),t._v(" "),e("li",[t._v("xml")]),t._v(" "),e("li",[t._v("lua")]),t._v(" "),e("li",[t._v("yaml")])]),t._v(" "),e("h2",{attrs:{id:"配置表的数据可以来源于多个文件吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置表的数据可以来源于多个文件吗"}},[t._v("#")]),t._v(" 配置表的数据可以来源于多个文件吗？")]),t._v(" "),e("p",[t._v("可以。 参见 "),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/wiki/%E9%85%8D%E7%BD%AE%E5%AE%9A%E4%B9%89%E7%9B%B8%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki-配置相关定义"),e("OutboundLink")],1),t._v("\n中关于 table.input的文档。")]),t._v(" "),e("h2",{attrs:{id:"可以将多个表放到同一个excel文件吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以将多个表放到同一个excel文件吗"}},[t._v("#")]),t._v(" 可以将多个表放到同一个excel文件吗？")]),t._v(" "),e("p",[t._v("可以。 参见 "),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/wiki/%E9%85%8D%E7%BD%AE%E5%AE%9A%E4%B9%89%E7%9B%B8%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki-配置相关定义"),e("OutboundLink")],1),t._v("\n中关于 table.input的文档。")]),t._v(" "),e("h2",{attrs:{id:"当数据文件为xlsx文件时-luban会读入第一个sheet还是所有sheet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#当数据文件为xlsx文件时-luban会读入第一个sheet还是所有sheet"}},[t._v("#")]),t._v(" 当数据文件为xlsx文件时，luban会读入第一个sheet还是所有sheet？")]),t._v(" "),e("p",[t._v("读入所有sheet，但是会忽略那些A1单元格内容不是##开头的sheet。")]),t._v(" "),e("h2",{attrs:{id:"策划想在xlsx中有一个非数据的sheet-该怎么做呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#策划想在xlsx中有一个非数据的sheet-该怎么做呢"}},[t._v("#")]),t._v(" 策划想在xlsx中有一个非数据的sheet，该怎么做呢")]),t._v(" "),e("p",[t._v("只要该sheet的A1单元格不以##开头即可。")]),t._v(" "),e("h2",{attrs:{id:"想注释掉某一列-该如何做"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#想注释掉某一列-该如何做"}},[t._v("#")]),t._v(" 想注释掉某一列，该如何做")]),t._v(" "),e("p",[t._v("将列名取空，或者 #xxxx, __xxxx 这样的名称。")]),t._v(" "),e("h2",{attrs:{id:"想注释掉某一行记录-该如何做"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#想注释掉某一行记录-该如何做"}},[t._v("#")]),t._v(" 想注释掉某一行记录，该如何做")]),t._v(" "),e("p",[t._v("将该行第一个单元格填以##即可。")]),t._v(" "),e("h2",{attrs:{id:"有些配置只想开发期内部测试用-正式发布时不导出-该如何做"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有些配置只想开发期内部测试用-正式发布时不导出-该如何做"}},[t._v("#")]),t._v(" 有些配置只想开发期内部测试用，正式发布时不导出，该如何做？")]),t._v(" "),e("p",[t._v("luban支持数据tag的概念。 excel第一列为tag。")]),t._v(" "),e("ul",[e("li",[t._v("当tag为##时忽略这个行")]),t._v(" "),e("li",[t._v("当tag为xxx时，如果Luban.Client 命令行中使用 --export_exclude_tags xxx，则不会导出该记录")])]),t._v(" "),e("h2",{attrs:{id:"我想每个json保存一个记录-文件太多-在input中指定很麻烦-怎么解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#我想每个json保存一个记录-文件太多-在input中指定很麻烦-怎么解决"}},[t._v("#")]),t._v(" 我想每个json保存一个记录，文件太多，在input中指定很麻烦，怎么解决？")]),t._v(" "),e("p",[t._v("使用 目录数据源。 把所有json文件放到一个目录下（可以是目录树），将input设为该目录。luban会自动遍历整个目录树，将每个文件当作\n一个记录读入。 详细参见"),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/blob/main/docs/data_json.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("json"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"一个json文件可以包含多个记录吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个json文件可以包含多个记录吗"}},[t._v("#")]),t._v(" 一个json文件可以包含多个记录吗？")]),t._v(" "),e("p",[t._v("可以。但必须在数据源中以 *@xxx.json形式指定。详细参见"),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/blob/main/docs/data_json.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("json"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"记录可以来自json文件的某个深层次字段吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录可以来自json文件的某个深层次字段吗"}},[t._v("#")]),t._v(" 记录可以来自json文件的某个深层次字段吗？")]),t._v(" "),e("p",[t._v("可以。分两种情况：")]),t._v(" "),e("ul",[e("li",[t._v("从字段中读入一个记录，则以 a.b.c@xx.json的形式指定")]),t._v(" "),e("li",[t._v("从字段中读入记录列表，则以 *a.b.c@xx.json的形式指定")])]),t._v(" "),e("p",[t._v("详细参见"),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/blob/main/docs/data_json.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("json"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"可以像xlsx那样-将多个表的数据都放到一个json文件中吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以像xlsx那样-将多个表的数据都放到一个json文件中吗"}},[t._v("#")]),t._v(" 可以像xlsx那样，将多个表的数据都放到一个json文件中吗？")]),t._v(" "),e("p",[t._v("可以。 与excel数据源类似，只要每个表用 field@xx.json或者 *field@xx.json的形式指定即可。\n详细参见"),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban/blob/main/docs/data_json.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("json"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"支持异步加载配置表吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持异步加载配置表吗"}},[t._v("#")]),t._v(" 支持异步加载配置表吗？")]),t._v(" "),e("p",[t._v("不直接支持。但你可以通过自定义模板方式实现异步加载。")]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"template"}},[t._v("代码与数据模板")]),t._v("，以及相应异步加载示例项目 "),e("a",{attrs:{href:"https://github.com/focus-creative-games/luban_examples/tree/main/Projects/Csharp_CustomTemplate_AsyncLoad",target:"_blank",rel:"noopener noreferrer"}},[t._v("csharp_async_load"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"支持自定义代码或者数据生成吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持自定义代码或者数据生成吗"}},[t._v("#")]),t._v(" 支持自定义代码或者数据生成吗")]),t._v(" "),e("p",[t._v("支持。 参见 "),e("a",{attrs:{href:"template"}},[t._v("数据与代码模板")])]),t._v(" "),e("h2",{attrs:{id:"如何导出protobuf的定义及数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何导出protobuf的定义及数据"}},[t._v("#")]),t._v(" 如何导出protobuf的定义及数据")]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"generate_code_data"}},[t._v("代码与数据生成")])]),t._v(" "),e("h2",{attrs:{id:"如何导出msgpack的数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何导出msgpack的数据"}},[t._v("#")]),t._v(" 如何导出msgpack的数据")]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"generate_code_data"}},[t._v("代码与数据生成")])]),t._v(" "),e("h2",{attrs:{id:"如何导出flatbuffers的定义及数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何导出flatbuffers的定义及数据"}},[t._v("#")]),t._v(" 如何导出flatbuffers的定义及数据")]),t._v(" "),e("p",[t._v("参见 "),e("a",{attrs:{href:"generate_code_data"}},[t._v("代码与数据生成")])]),t._v(" "),e("h2",{attrs:{id:"生成后-本地目录会产生一个-cache-meta-这个文件的用途是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成后-本地目录会产生一个-cache-meta-这个文件的用途是什么"}},[t._v("#")]),t._v(" 生成后，本地目录会产生一个 .cache.meta，这个文件的用途是什么？")]),t._v(" "),e("p",[t._v(".cache.meta 里包含了与Luban.Server交互过程中涉及到的所有文件的 (路径， md5码， 长度，修改时间戳)信息。用于优化生成性能。")]),t._v(" "),e("p",[t._v("由于Luban.Client与Luban.Server的工作模型为云生成模型，Luban.Client向服务器发起生成请求后，服务器并不直接读取生成需要的配置文件，而是先获得\n这些文件的元信息（路径,md5）,如果内存缓存中有相同md5的文件，则直接读取，不再向客户端读取文件数据，这样极大提升了增量生成的性能。")]),t._v(" "),e("p",[t._v("服务器生成完成后，也会向客户端发送生成文件元数据列表，包含（路径、md5）这些元数据信息。如果本地不存在这些文件，则下载下载，如果已经存在，则检查\n是否有变化，此时Luban.Client并不会直接读取本地文件并且计算md5,而是先查询.cache.meta里是否有对应的文件md5信息，如果本地文件的长度和修改时间戳\n与.cache.meta里的相同，则认为.cache.meta里包含了正确的md5值，然后拿这个值到服务器生成的结果的md5对比，只有不相同，才会重新下载。")]),t._v(" "),e("h2",{attrs:{id:"可以引用现有的枚举和结构吗-比如生成的代码中想使用unityengine-audiotype和unityengine-color"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可以引用现有的枚举和结构吗-比如生成的代码中想使用unityengine-audiotype和unityengine-color"}},[t._v("#")]),t._v(" 可以引用现有的枚举和结构吗？比如生成的代码中想使用UnityEngine.AudioType和UnityEngine.Color")]),t._v(" "),e("p",[t._v("可以，支持external类型的枚举和结构，但目前只支持c#语言。 详细文档参见 "),e("a",{attrs:{href:"define"}},[t._v("配置定义介绍")]),t._v(" 中的external类型相关文档。")])])}),[],!1,null,null,null);a.default=r.exports}}]);