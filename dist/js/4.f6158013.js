(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{118:function(t,e,a){"use strict";a.r(e);var r=a(49),n=a(22);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);var s=a(0),i=Object(s.a)(n.default,r.a,r.b,!1,null,null,null);e.default=i.exports},19:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t&&t.__esModule?t:{default:t}}(a(1)),n=a(2);e.default={data:function(){return{}},methods:(0,r.default)({},(0,n.mapActions)(["getTaskHistory"]),{handleSizeChange:function(t){this.getTaskHistory({limit:t})},handleCurrentChange:function(t){this.getTaskHistory({currentPage:t})}}),computed:(0,r.default)({},(0,n.mapState)(["pagination"]))}},20:function(t,e,a){"use strict";a.r(e);var r=a(19),n=a.n(r);for(var l in r)"default"!==l&&function(t){a.d(e,t,function(){return r[t]})}(l);e.default=n.a},21:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(a(1)),n=i(a(9)),l=i(a(95)),s=a(2);function i(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{taskSearchRuleForm:{people:"",taskType:"",startEndDate:[]}}},components:{vPageTitle:n.default,vPagination:l.default},computed:(0,r.default)({},(0,s.mapState)(["taskTypeList","usersList","taskHistoryTable"])),created:function(){this.getUserList(),this.getTaskHistory({people:"",taskType:"",startEndDate:[]})},methods:(0,r.default)({},(0,s.mapActions)(["getTaskHistory","getUserList"]),{searchHistory:function(){this.getTaskHistory(this.taskSearchRuleForm)}})}},22:function(t,e,a){"use strict";a.r(e);var r=a(21),n=a.n(r);for(var l in r)"default"!==l&&function(t){a.d(e,t,function(){return r[t]})}(l);e.default=n.a},40:function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-breadcrumb",{staticClass:"bread",attrs:{separator:"/"}},[e("el-breadcrumb-item",{attrs:{to:{name:"dataInput"}}},[this._v(this._s(this.vtitle))])],1)],1)},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},44:function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"b_pagination"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[e("el-pagination",{attrs:{"current-page":this.pagination.currentPage,"page-sizes":this.pagination.pageSizes,"page-size":this.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:this.pagination.total},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)],1)],1)},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},49:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-pageTitle",{attrs:{vtitle:"历史任务"}}),t._v(" "),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:"",model:t.taskSearchRuleForm}},[a("el-form-item",{attrs:{label:"人员"}},[a("el-select",{staticClass:"fixWid",attrs:{placeholder:"请选择"},model:{value:t.taskSearchRuleForm.people,callback:function(e){t.$set(t.taskSearchRuleForm,"people",e)},expression:"taskSearchRuleForm.people"}},t._l(t.usersList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"任务类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.taskSearchRuleForm.taskType,callback:function(e){t.$set(t.taskSearchRuleForm,"taskType",e)},expression:"taskSearchRuleForm.taskType"}},t._l(t.taskTypeList,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"起止时间"}},[a("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.taskSearchRuleForm.startEndDate,callback:function(e){t.$set(t.taskSearchRuleForm,"startEndDate",e)},expression:"taskSearchRuleForm.startEndDate"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.searchHistory}},[t._v("查询")])],1)],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{xs:24,sm:24,md:24,lg:24}},[a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("任务列表")])]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.taskHistoryTable,stripe:""}},[a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"taskDate",label:"任务日期",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"taskTypeName",label:"任务类型",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"taskName",label:"任务名称",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalTask",label:"任务总量",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"finished",label:"已完成量",align:"right"}}),t._v(" "),a("el-table-column",{attrs:{prop:"planFinish",label:"计划完成时间",align:"right"}})],1)],1)],1)],1),t._v(" "),a("v-pagination")],1)},n=[];a.d(e,"a",function(){return r}),a.d(e,"b",function(){return n})},7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["vtitle"]}},8:function(t,e,a){"use strict";a.r(e);var r=a(7),n=a.n(r);for(var l in r)"default"!==l&&function(t){a.d(e,t,function(){return r[t]})}(l);e.default=n.a},9:function(t,e,a){"use strict";a.r(e);var r=a(40),n=a(8);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);var s=a(0),i=Object(s.a)(n.default,r.a,r.b,!1,null,null,null);e.default=i.exports},95:function(t,e,a){"use strict";a.r(e);var r=a(44),n=a(20);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);var s=a(0),i=Object(s.a)(n.default,r.a,r.b,!1,null,null,null);e.default=i.exports}}]);