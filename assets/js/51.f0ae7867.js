(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{517:function(e,t,v){"use strict";v.r(t);var a=v(36),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"master分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#master分支"}},[e._v("#")]),e._v(" master分支")]),e._v(" "),v("ul",[v("li",[e._v("master分支存放的是随时可供在生产环境中部署的稳定版本代码")]),e._v(" "),v("li",[e._v("master分支保存官方发布版本历史，release tag标识不同的发布版本")]),e._v(" "),v("li",[e._v("一个项目只能有一个master分支")]),e._v(" "),v("li",[e._v("仅在发布新的可供部署的代码时才更新master分支上的代码")]),e._v(" "),v("li",[e._v("每次更新master，都需对master添加指定格式的tag，用于发布或回滚")]),e._v(" "),v("li",[e._v("master分支代码只能被release分支或hotfix分支合并")])]),e._v(" "),v("h2",{attrs:{id:"develop-分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#develop-分支"}},[e._v("#")]),e._v(" develop 分支")]),e._v(" "),v("ul",[v("li",[e._v("develop分支是保存当前最新开发成果的分支")]),e._v(" "),v("li",[e._v("一个项目只能有一个develop分支")]),e._v(" "),v("li",[e._v("develop分支衍生出各个feature分支")]),e._v(" "),v("li",[e._v("develop分支不能与master分支直接交互")])]),e._v(" "),v("h2",{attrs:{id:"feature-分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#feature-分支"}},[e._v("#")]),e._v(" feature 分支")]),e._v(" "),v("ul",[v("li",[e._v("命名规则：feature/*")]),e._v(" "),v("li",[e._v("develop分支的功能分支")]),e._v(" "),v("li",[e._v("feature分支使用develop分支作为它们的父类分支")]),e._v(" "),v("li",[e._v("以版本为单位从develop拉一个feature分支")]),e._v(" "),v("li",[e._v("一个feature分支可能由多个人员开发，多个人员可各自独立从中拉出自己的分支，但是需要每天将其他成员提交到该feature的代码合并到自己拉出的分支，保证冲突不会积累")]),e._v(" "),v("li",[e._v("当一个feature分支完成后，如果确定该分支为即将上线的版本时，合并回develop")]),e._v(" "),v("li",[e._v("当一个功能因为各种原因不开发了或者放弃了，这个分支直接废弃，不影响develop分支")]),e._v(" "),v("li",[e._v("feature分支只与develop分支交互，不能与master分支直接交互")])]),e._v(" "),v("h2",{attrs:{id:"release-分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#release-分支"}},[e._v("#")]),e._v(" release 分支")]),e._v(" "),v("ul",[v("li",[e._v("命名规则：release/{ver}，“{ver}”以本次发布的版本号为标识")]),e._v(" "),v("li",[e._v("release分支主要用来为发布新版的测试、修复做准备")]),e._v(" "),v("li",[e._v("当需要为发布新版做准备时，从develop衍生出一个release分支")]),e._v(" "),v("li",[e._v("release分支可以从develop分支上指定commit派生出")]),e._v(" "),v("li",[e._v("所有修复均在对应版本的release分支上进行")]),e._v(" "),v("li",[e._v("release分支测试通过后并确定要发布后，合并到master分支并且给master标记一个版本号")]),e._v(" "),v("li",[e._v("release分支一旦建立就将独立，不可再从其他分支pull代码")]),e._v(" "),v("li",[e._v("必须合并回develop分支和master分支")])]),e._v(" "),v("h2",{attrs:{id:"hotfix-分支"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hotfix-分支"}},[e._v("#")]),e._v(" hotfix 分支")]),e._v(" "),v("ul",[v("li",[e._v("命名规则：hotfix/*")]),e._v(" "),v("li",[e._v("hotfix分支用来快速给已发布产品修复bug或微调功能")]),e._v(" "),v("li",[e._v("只能从master分支指定tag版本衍生出来")]),e._v(" "),v("li",[e._v("一旦完成修复bug，必须合并回master分支和develop分支")]),e._v(" "),v("li",[e._v("master被合并后，应该被标记一个新的版本号")]),e._v(" "),v("li",[e._v("hotfix分支一旦建立就将独立，不可再从其他分支pull代码")])]),e._v(" "),v("p",[e._v("##tag 标记")]),e._v(" "),v("ul",[v("li",[e._v("命名规则：v1.1.0")]),e._v(" "),v("li",[e._v("tag标记，用来回滚。以及某个版本调试")])]),e._v(" "),v("h2",{attrs:{id:"上传git时出现-403"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#上传git时出现-403"}},[e._v("#")]),e._v(" 上传git时出现 403")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Q: git push appharbor master\nerror: The requested URL returned error: 403 while accessing https://gavekortet@appharbor.com/mitivo.git/info/refs?service=git-receive-pack\nfatal: HTTP request failed")])]),e._v(" "),v("li",[v("p",[e._v("A: 解决\nI have tried:\ngit config --global --unset core.askpass\nin order to unset the password\ngit config credential.helper 'cache --timeout=1'\nin order to avoid credentials cache..."),v("br"),e._v("\n忘记密码、清除缓存")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);