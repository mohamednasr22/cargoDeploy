(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{SnmA:function(t,e,a){"use strict";a.r(e),a.d(e,"GroupModule",function(){return W});var o=a("SVse"),n=a("iInd"),i=a("OaSA"),b=a("AXEG"),s=a("8Y7J"),c=a("iELJ"),r=a("ej43"),d=a("Tj54"),l=a("SqCe"),m=a("Dxy4"),p=a("jsAG");function u(t,e){1&t&&(s.Ub(0,"th",16),s.Mc(1," Name "),s.Tb())}function g(t,e){if(1&t&&(s.Ub(0,"td",17),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.Oc(" ",t.name," ")}}function h(t,e){1&t&&(s.Ub(0,"th",16),s.Mc(1," Update "),s.Tb())}const U=function(t){return["/admin/groups/",t]};function f(t,e){if(1&t&&(s.Ub(0,"td",17),s.Ub(1,"button",18),s.Ub(2,"mat-icon",1),s.Mc(3,"edit"),s.Tb(),s.Tb(),s.Tb()),2&t){const t=e.$implicit;s.Cb(1),s.oc("routerLink",s.sc(1,U,t.user_group_id))}}function T(t,e){1&t&&(s.Ub(0,"th",16),s.Mc(1," Delete "),s.Tb())}function M(t,e){if(1&t){const t=s.Vb();s.Ub(0,"td",17),s.Ub(1,"button",19),s.cc("click",function(){s.Ac(t);const a=e.$implicit;return s.gc(2).delete(a.user_group_id)}),s.Ub(2,"mat-icon",1),s.Mc(3,"delete"),s.Tb(),s.Tb(),s.Tb()}}function C(t,e){1&t&&s.Pb(0,"tr",20)}function v(t,e){1&t&&s.Pb(0,"tr",21)}function _(t,e){if(1&t&&(s.Ub(0,"div",7),s.Ub(1,"table",8),s.Sb(2,9),s.Kc(3,u,2,0,"th",10),s.Kc(4,g,2,1,"td",11),s.Rb(),s.Sb(5,12),s.Kc(6,h,2,0,"th",10),s.Kc(7,f,4,3,"td",11),s.Rb(),s.Sb(8,13),s.Kc(9,T,2,0,"th",10),s.Kc(10,M,4,0,"td",11),s.Rb(),s.Kc(11,C,1,0,"tr",14),s.Kc(12,v,1,0,"tr",15),s.Tb(),s.Tb()),2&t){const t=s.gc();s.Cb(1),s.oc("dataSource",t.dataSource),s.Cb(10),s.oc("matHeaderRowDef",t.displayedColumns),s.Cb(1),s.oc("matRowDefColumns",t.displayedColumns)}}function w(t,e){1&t&&s.Pb(0,"app-skeleton",22)}let O=(()=>{class t{constructor(t,e){this.dialog=t,this.auths=e,this.displayedColumns=["name","update","delete"],this.dataSource=new i.o,this.loaded=!1,this.auths.getGroups().subscribe(t=>{t&&t.data&&(this.dataSource.data=t.data),this.loaded=!0},t=>{this.loaded=!0})}ngOnInit(){}delete(t){this.dialog.open(b.a,{data:{title:"Are you sure?",id:t}}).afterClosed().subscribe(t=>{if(t){const e=new FormData;e.append("user_group_id",t),this.auths.deleteGroup(e).subscribe(e=>{this.dataSource.data=this.dataSource.data.filter(e=>e.user_group_id!=t)})}})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(c.b),s.Ob(r.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-groups"]],decls:14,vars:3,consts:[[1,"cs-page-header"],["mat-list-icon",""],[1,"cs-right"],["mat-flat-button","",3,"routerLink"],[1,"cs-box"],["class","mat-elevation-z8",4,"ngIf","ngIfElse"],["rowsPlaceHolder",""],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","update"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","aria-label","Edit",3,"routerLink"],["mat-icon-button","","aria-label","Edit",3,"click"],["mat-header-row",""],["mat-row",""],["type","rows"]],template:function(t,e){if(1&t&&(s.Ub(0,"div",0),s.Ub(1,"span"),s.Ub(2,"mat-icon",1),s.Mc(3,"view_quilt"),s.Tb(),s.Mc(4," Roles"),s.Tb(),s.Ub(5,"div",2),s.Ub(6,"a",3),s.Ub(7,"mat-icon",1),s.Mc(8,"add_circle_outline"),s.Tb(),s.Mc(9," Add New "),s.Tb(),s.Tb(),s.Tb(),s.Ub(10,"div",4),s.Kc(11,_,13,3,"div",5),s.Tb(),s.Kc(12,w,1,0,"ng-template",null,6,s.Lc)),2&t){const t=s.xc(13);s.Cb(6),s.oc("routerLink","/admin/groups/add"),s.Cb(5),s.oc("ngIf",e.loaded)("ngIfElse",t)}},directives:[d.a,l.b,m.a,n.h,o.l,i.n,i.c,i.i,i.b,i.k,i.m,i.h,i.a,m.b,n.f,i.j,i.l,p.a],styles:[".cs-box[_ngcontent-%COMP%]{display:inline-block;padding:20px;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);background:#fff}.cs-box[_ngcontent-%COMP%], table[_ngcontent-%COMP%]{width:100%}.mat-column-delete[_ngcontent-%COMP%], .mat-column-update[_ngcontent-%COMP%]{width:56px;text-align:center!important}.mat-column-delete[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#ea4141}.mat-column-update[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#2ba7ff}.filter-btn[_ngcontent-%COMP%]{display:inline-block;width:110px}.filter-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{padding:0 0 20px;margin-right:20px}mat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix{padding:13px 0}"]}),t})();var x=a("s7LF"),S=a("cp0P"),P=a("vkgz"),k=a("IheW"),y=a("zHaW"),N=a("5oI9"),A=a("PDjf"),I=a("Q2Ze"),D=a("e6WT"),F=a("o4Yh"),R=a("jMqV");function G(t,e){1&t&&(s.Ub(0,"span"),s.Ub(1,"mat-icon",4),s.Mc(2,"add"),s.Tb(),s.Mc(3," Create Roles"),s.Tb())}function K(t,e){1&t&&(s.Ub(0,"span"),s.Ub(1,"mat-icon",4),s.Mc(2,"edit"),s.Tb(),s.Mc(3," Edit Roles"),s.Tb())}function j(t,e){if(1&t&&(s.Ub(0,"mat-list-option",41),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.oc("value",t.id),s.Cb(1),s.Oc(" ",t.name," ")}}function L(t,e){if(1&t&&(s.Ub(0,"mat-list-option",41),s.Mc(1),s.Tb()),2&t){const t=e.$implicit;s.oc("value",t.id),s.Cb(1),s.Oc(" ",t.name," ")}}function V(t,e){1&t&&(s.Ub(0,"button",42),s.Ub(1,"span"),s.Mc(2,"Wait"),s.Tb(),s.Tb())}function E(t,e){1&t&&(s.Ub(0,"span"),s.Mc(1,"Submit"),s.Tb())}function q(t,e){1&t&&(s.Ub(0,"span"),s.Mc(1,"Update"),s.Tb())}function $(t,e){if(1&t){const t=s.Vb();s.Ub(0,"button",43),s.cc("click",function(){return s.Ac(t),s.gc().submitForm()}),s.Kc(1,E,2,0,"span",1),s.Kc(2,q,2,0,"span",1),s.Tb()}if(2&t){const t=s.gc();s.oc("disabled",!t.dataForm.valid),s.Cb(1),s.oc("ngIf",!t.editMode),s.Cb(1),s.oc("ngIf",t.editMode)}}let B=(()=>{class t{constructor(t,e,a,o,n,i,b,s){this.http=t,this._snackBar=e,this.mng=a,this.router=o,this.dialog=n,this.route=i,this.fb=b,this.auths=s,this.submitted=!1,this.shipment_statuses=[],this.container_statuses=[],this.editMode=!1}ngOnInit(){this.resetForm(),this.sub=this.route.params.subscribe(t=>{this.groupId=+t.id,isNaN(this.groupId)?(this.editMode=!1,this.groupId=null,this.resetForm()):(this.editMode=!0,this.getGroup(this.groupId))}),Object(S.a)([this.mng.getShipmentStatuses().pipe(Object(P.a)(t=>{t.data&&(this.shipment_statuses=t.data)})),this.mng.getContainerStatuses().pipe(Object(P.a)(t=>{t.data&&(this.container_statuses=t.data)}))]).subscribe(()=>console.log("ready"))}resetForm(){this.dataForm=this.fb.group({name:["",x.v.required],permission:this.fb.group({shipment:this.fb.group({showall:[""],canassign:[""],view_shipper:[""],add:[""],view:[""],update:[""],delete:[""],control_history_gallery:[""],key:[""],title:[""],show_user_column:[""],disable_after_pending:[""],statuses:this.fb.control([])}),container:this.fb.group({showall:[""],add:[""],view:[""],update:[""],delete:[""],view_shared_container:[""],show_user_column:[""],statuses:this.fb.control([])}),accounting:this.fb.group({showall:[""],view:[""],add:[""],update:[""],delete:[""],show_user_column:[""]}),quotes:this.fb.group({view:[""],update:[""]}),localtransportation:this.fb.group({view:[""],update:[""]}),general:this.fb.group({showreceiver:[""],showshipper:[""],settings:[""],users:[""],signatures:[""]})})})}getGroup(t){const e=new FormData;e.append("user_group_id",t),this.auths.getGroup(e).subscribe(t=>{if(t&&t.data){const e=t.data;let a=e.permission;a=a.replace(/&quot;/g,'"'),this.dataForm.patchValue({name:e.name,permission:JSON.parse(a)})}})}submitForm(){this.submitted=!0;let t=new FormData,e=this.dataForm.value;this.groupId&&t.append("user_group_id",this.groupId.toString()),t.append("name",e.name),t.append("permission",JSON.stringify(e.permission)),this.auths.saveGroup(t).subscribe(t=>{this.submitted=!1,this.openSnackBar("Data submited successfully",""),this.router.navigate(["/admin/groups/list"])},t=>{this.submitted=!1,this.openSnackBar("Something wrong happen!",""),this.router.navigate(["/admin/groups/list"])})}buildFormData(t,e,a){!e||"object"!=typeof e||e instanceof Date||e instanceof File?t.append(a,null==e?"":e):Object.keys(e).forEach(o=>{this.buildFormData(t,e[o],a?`${a}[${o}]`:o)})}jsonToFormData(t,e){this.buildFormData(t,e,"")}openSnackBar(t,e){this._snackBar.open(t,e,{duration:2e3})}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(k.b),s.Ob(y.a),s.Ob(N.a),s.Ob(n.e),s.Ob(c.b),s.Ob(n.a),s.Ob(x.f),s.Ob(r.a))},t.\u0275cmp=s.Ib({type:t,selectors:[["app-creategroup"]],decls:179,vars:8,consts:[[1,"cs-page-header"],[4,"ngIf"],[1,"cs-right"],["mat-flat-button","",3,"routerLink"],["mat-list-icon",""],[1,"cs-box",3,"formGroup"],[1,"col"],[1,"cs-card"],["type","text","matInput","","formControlName","name"],["formGroupName","permission"],["expanded","true","formGroupName","shipment"],[1,"check_item"],["formControlName","showall"],["formControlName","canassign"],["formControlName","view_shipper"],["formControlName","control_history_gallery"],["formControlName","add"],["formControlName","view"],["formControlName","update"],["formControlName","delete"],["formControlName","key"],["formControlName","title"],["formControlName","disable_after_pending"],["formControlName","show_user_column"],[1,"check_list"],["formControlName","statuses"],[3,"value",4,"ngFor","ngForOf"],["formGroupName","container"],["formControlName","view_shared_container"],["formGroupName","accounting"],["formGroupName","quotes"],["formGroupName","localtransportation"],["formGroupName","general"],["formControlName","showshipper"],["formControlName","showreceiver"],["formControlName","settings"],["formControlName","users"],["formControlName","signatures"],[1,"form-add"],["mat-raised-button","","color","warn","disabled","",4,"ngIf"],["mat-raised-button","","color","warn",3,"disabled","click",4,"ngIf"],[3,"value"],["mat-raised-button","","color","warn","disabled",""],["mat-raised-button","","color","warn",3,"disabled","click"]],template:function(t,e){1&t&&(s.Ub(0,"div",0),s.Kc(1,G,4,0,"span",1),s.Kc(2,K,4,0,"span",1),s.Ub(3,"div",2),s.Ub(4,"a",3),s.Ub(5,"mat-icon",4),s.Mc(6,"keyboard_arrow_left"),s.Tb(),s.Mc(7," Back "),s.Tb(),s.Tb(),s.Tb(),s.Ub(8,"form",5),s.Ub(9,"div",6),s.Ub(10,"mat-card",7),s.Ub(11,"mat-card-header"),s.Ub(12,"mat-card-title"),s.Mc(13,"Role Information"),s.Tb(),s.Tb(),s.Ub(14,"mat-card-content"),s.Ub(15,"mat-form-field"),s.Ub(16,"mat-label"),s.Mc(17,"Role Name"),s.Tb(),s.Pb(18,"input",8),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(19,"div",6),s.Ub(20,"mat-card",7),s.Ub(21,"mat-card-header"),s.Ub(22,"mat-card-title"),s.Mc(23,"Roles Managment"),s.Tb(),s.Tb(),s.Ub(24,"mat-card-content"),s.Ub(25,"mat-accordion",9),s.Ub(26,"mat-expansion-panel",10),s.Ub(27,"mat-expansion-panel-header"),s.Ub(28,"mat-panel-title"),s.Ub(29,"b"),s.Mc(30,"Shipments Role"),s.Tb(),s.Tb(),s.Tb(),s.Ub(31,"div"),s.Ub(32,"div",11),s.Ub(33,"mat-slide-toggle",12),s.Mc(34,"Show Other Shipments(As Admin)"),s.Tb(),s.Tb(),s.Ub(35,"div",11),s.Ub(36,"mat-slide-toggle",13),s.Mc(37,"Can Assign To Users"),s.Tb(),s.Tb(),s.Ub(38,"div",11),s.Ub(39,"mat-slide-toggle",14),s.Mc(40,"View Shipper At List"),s.Tb(),s.Tb(),s.Ub(41,"div",11),s.Ub(42,"mat-slide-toggle",15),s.Mc(43,"Control History Gallery"),s.Tb(),s.Tb(),s.Ub(44,"div",11),s.Ub(45,"mat-slide-toggle",16),s.Mc(46,"Add Shipment"),s.Tb(),s.Tb(),s.Ub(47,"div",11),s.Ub(48,"mat-slide-toggle",17),s.Mc(49,"View Shipment"),s.Tb(),s.Tb(),s.Ub(50,"div",11),s.Ub(51,"mat-slide-toggle",18),s.Mc(52,"Update Shipment"),s.Tb(),s.Tb(),s.Ub(53,"div",11),s.Ub(54,"mat-slide-toggle",19),s.Mc(55,"Delete Shipment"),s.Tb(),s.Tb(),s.Ub(56,"div",11),s.Ub(57,"mat-slide-toggle",20),s.Mc(58,"Edit Key"),s.Tb(),s.Tb(),s.Ub(59,"div",11),s.Ub(60,"mat-slide-toggle",21),s.Mc(61,"Edit Title"),s.Tb(),s.Tb(),s.Ub(62,"div",11),s.Ub(63,"mat-slide-toggle",22),s.Mc(64,"Disable Edit After Accept"),s.Tb(),s.Tb(),s.Ub(65,"div",11),s.Ub(66,"mat-slide-toggle",23),s.Mc(67,"Show user column in history table"),s.Tb(),s.Tb(),s.Ub(68,"div",24),s.Ub(69,"h2"),s.Mc(70,"Allowed Shipment Statuses"),s.Tb(),s.Ub(71,"div"),s.Ub(72,"mat-selection-list",25),s.Kc(73,j,2,2,"mat-list-option",26),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(74,"mat-expansion-panel",27),s.Ub(75,"mat-expansion-panel-header"),s.Ub(76,"mat-panel-title"),s.Ub(77,"b"),s.Mc(78,"Containers Roles"),s.Tb(),s.Tb(),s.Tb(),s.Ub(79,"div"),s.Ub(80,"div",11),s.Ub(81,"mat-slide-toggle",12),s.Mc(82,"Show Other Containers(As Admin)"),s.Tb(),s.Tb(),s.Ub(83,"div",11),s.Ub(84,"mat-slide-toggle",16),s.Mc(85,"Add Container"),s.Tb(),s.Tb(),s.Ub(86,"div",11),s.Ub(87,"mat-slide-toggle",17),s.Mc(88,"View Container"),s.Tb(),s.Tb(),s.Ub(89,"div",11),s.Ub(90,"mat-slide-toggle",18),s.Mc(91,"Update Container"),s.Tb(),s.Tb(),s.Ub(92,"div",11),s.Ub(93,"mat-slide-toggle",19),s.Mc(94,"Delete Container"),s.Tb(),s.Tb(),s.Ub(95,"div",11),s.Ub(96,"mat-slide-toggle",28),s.Mc(97,"View Shared Container"),s.Tb(),s.Tb(),s.Ub(98,"div",11),s.Ub(99,"mat-slide-toggle",23),s.Mc(100,"Show user column in history table"),s.Tb(),s.Tb(),s.Ub(101,"div",24),s.Ub(102,"h2"),s.Mc(103,"Allowed Container Statuses"),s.Tb(),s.Ub(104,"div"),s.Ub(105,"mat-selection-list",25),s.Kc(106,L,2,2,"mat-list-option",26),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(107,"mat-expansion-panel",29),s.Ub(108,"mat-expansion-panel-header"),s.Ub(109,"mat-panel-title"),s.Ub(110,"b"),s.Mc(111,"Accounting Roles"),s.Tb(),s.Tb(),s.Tb(),s.Ub(112,"div"),s.Ub(113,"div",11),s.Ub(114,"mat-slide-toggle",12),s.Mc(115,"Show Other Accounting(As Admin)"),s.Tb(),s.Tb(),s.Ub(116,"div",11),s.Ub(117,"mat-slide-toggle",17),s.Mc(118,"View Section"),s.Tb(),s.Tb(),s.Ub(119,"div",11),s.Ub(120,"mat-slide-toggle",16),s.Mc(121,"Add Record"),s.Tb(),s.Tb(),s.Ub(122,"div",11),s.Ub(123,"mat-slide-toggle",18),s.Mc(124,"Update Record"),s.Tb(),s.Tb(),s.Ub(125,"div",11),s.Ub(126,"mat-slide-toggle",19),s.Mc(127,"Delete Record"),s.Tb(),s.Tb(),s.Ub(128,"div",11),s.Ub(129,"mat-slide-toggle",23),s.Mc(130,"Show user column in history table"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(131,"mat-expansion-panel",30),s.Ub(132,"mat-expansion-panel-header"),s.Ub(133,"mat-panel-title"),s.Ub(134,"b"),s.Mc(135,"Quotes Roles"),s.Tb(),s.Tb(),s.Tb(),s.Ub(136,"div"),s.Ub(137,"div",11),s.Ub(138,"mat-slide-toggle",17),s.Mc(139,"View Quotes"),s.Tb(),s.Tb(),s.Ub(140,"div",11),s.Ub(141,"mat-slide-toggle",18),s.Mc(142,"Update Quotes"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(143,"mat-expansion-panel",31),s.Ub(144,"mat-expansion-panel-header"),s.Ub(145,"mat-panel-title"),s.Ub(146,"b"),s.Mc(147,"Local Transportations Roles"),s.Tb(),s.Tb(),s.Tb(),s.Ub(148,"div"),s.Ub(149,"div",11),s.Ub(150,"mat-slide-toggle",17),s.Mc(151,"View local transportation"),s.Tb(),s.Tb(),s.Ub(152,"div",11),s.Ub(153,"mat-slide-toggle",18),s.Mc(154,"Update local transportation"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(155,"mat-expansion-panel",32),s.Ub(156,"mat-expansion-panel-header"),s.Ub(157,"mat-panel-title"),s.Ub(158,"b"),s.Mc(159,"General"),s.Tb(),s.Tb(),s.Tb(),s.Ub(160,"div"),s.Ub(161,"div",11),s.Ub(162,"mat-slide-toggle",33),s.Mc(163,"Show Shippers(As Admin)"),s.Tb(),s.Tb(),s.Ub(164,"div",11),s.Ub(165,"mat-slide-toggle",34),s.Mc(166,"Show Receivers(As Admin)"),s.Tb(),s.Tb(),s.Ub(167,"div",11),s.Ub(168,"mat-slide-toggle",35),s.Mc(169,"Manage Settings"),s.Tb(),s.Tb(),s.Ub(170,"div",11),s.Ub(171,"mat-slide-toggle",36),s.Mc(172,"Manage Users"),s.Tb(),s.Tb(),s.Ub(173,"div",11),s.Ub(174,"mat-slide-toggle",37),s.Mc(175,"View Signatures"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(176,"div",38),s.Kc(177,V,3,0,"button",39),s.Kc(178,$,3,3,"button",40),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Cb(1),s.oc("ngIf",!e.editMode),s.Cb(1),s.oc("ngIf",e.editMode),s.Cb(2),s.oc("routerLink","/admin/groups/list"),s.Cb(4),s.oc("formGroup",e.dataForm),s.Cb(65),s.oc("ngForOf",e.shipment_statuses),s.Cb(33),s.oc("ngForOf",e.container_statuses),s.Cb(71),s.oc("ngIf",e.submitted),s.Cb(1),s.oc("ngIf",!e.submitted))},directives:[o.l,m.a,n.h,d.a,l.b,x.w,x.r,x.j,A.a,A.c,A.e,A.b,I.b,I.e,D.b,x.d,x.q,x.i,F.a,x.k,F.c,F.d,F.e,R.a,l.f,o.k,l.e,m.b],styles:["mat-card[_ngcontent-%COMP%]     .mat-card-header-text{margin:0}mat-form-field[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix{padding:10px 0}.long_lbl[_ngcontent-%COMP%]     .mat-form-field-infix{padding:15px 0}mat-selection-list[_ngcontent-%COMP%]{max-width:260px}.form-add[_ngcontent-%COMP%]{display:inline-block;margin-top:20px}.form-add[_ngcontent-%COMP%], .form-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.check_item[_ngcontent-%COMP%]{padding:10px 0}.check_list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.check_list[_ngcontent-%COMP%]{padding:20px 0 0;border-top:1px solid #ececec;margin:10px 0}.check_list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{padding:20px 0}.check_list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{padding-right:30px}"]}),t})();const H=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:O},{path:":id",component:B},{path:"add",component:B}];let J=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[n.i.forChild(H)],n.i]}),t})();var z=a("jAig"),Q=a("p8Kd");let W=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[o.c,J,z.a,Q.a,x.l,x.u]]}),t})()}}]);