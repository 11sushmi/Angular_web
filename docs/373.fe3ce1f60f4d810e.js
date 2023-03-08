"use strict";(self.webpackChunkA_web=self.webpackChunkA_web||[]).push([[373],{8373:(j,m,l)=>{l.r(m),l.d(m,{ViewsModule:()=>S});var d=l(9808),a=l(2382),c=l(459),e=l(1223),f=l(2112),b=l(520);let _=(()=>{class t{constructor(o){this.http=o,this.url="https://jsonplaceholder.typicode.com/posts"}getPosts(){return this.http.get(this.url)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(b.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Z=(()=>{class t{constructor(o,n){this.counterService=o,this.postService=n,this.postService.getPosts().subscribe(r=>console.log(r))}onIncrement(){this.counterService.count++}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(f.Q),e.Y36(_))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-counter"]],decls:5,vars:1,consts:[[1,"container-fluid","p-5","bg-success-subtle"],["type","button",1,"btn","btn-success","fw-bold",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return n.onIncrement()}),e._uU(4,"Increment"),e.qZA()()),2&o&&(e.xp6(2),e.hij(" Counter Value : ",n.counterService.count,""))},styles:[""]}),t})();class p{constructor(){this.code=0,this.name=""}}function v(t,i){if(1&t&&(e.TgZ(0,"li",9),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.xp6(1),e.hij(" ",o,"")}}let C=(()=>{class t{constructor(){this.arr=[]}ngOnInit(){console.log("ngOnInit : Child Mounted"),this.arr.push("ngOnInit : Child Mounted"),this.clearInterval=setInterval(()=>{let o=new Date;this.arr.push(o.toLocaleString()),console.log(new Date)},1e3)}ngOnDestroy(){console.log("ngOnDestroy : Child Unmounted"),this.arr.push("ngOnDestroy : Child Unmounted"),clearInterval(this.clearInterval)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-ng-on-init-on-destroy"]],decls:11,vars:1,consts:[[1,"container-fluid","p-5"],[1,"card"],[1,"card-header","text-center","text-white","bg-dark","fw-bold","fs-3","p-3"],[1,"card-body","p-3","bg-light"],[1,"row","g-3","p-3","justify-content-md-center"],[1,"text-center","col-md-4"],[1,"list-group"],[1,"list-group-item","list-group-item-dark","fw-bold","fs-3"],["class","list-group-item list-group-item-info",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-info"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Timer Component "),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"ul",6)(8,"li",7),e._uU(9,"Timer Log"),e.qZA(),e.YNc(10,v,2,1,"li",8),e.qZA()()()()()()),2&o&&(e.xp6(10),e.Q6J("ngForOf",n.arr))},directives:[d.sg],styles:[""]}),t})();function T(t,i){if(1&t&&(e.TgZ(0,"li",10),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.xp6(1),e.hij(" ",o," ")}}let g=(()=>{class t{constructor(){this.lifecycle=[],this.order=1,alert("Hey I'm constructor()"),console.log("%cI am from constructor()!! and my order::::"+this.order,"color: cyan"),this.order++,this.lifecycle.push("I am from constructor()!!")}ngOnChanges(){alert("Hey I'm ngOnChanges()"),console.log("%cI am from ngOnChanges()!! and my order::::"+this.order,"color: cyan"),this.order++,this.lifecycle.push("I am from ngOnChanges()!!")}ngOnInit(){alert("Hey I'm ngOnInit()"),console.log("%cI am from ngOnInit() and my order::::"+this.order,"color: cyan"),this.order++,this.lifecycle.push("I am from ngOnInit()!!")}ngDoCheck(){alert("Hey I'm ngDoCheck()"),console.log("%cI am from ngDoCheck() and my order::::"+this.order,"color: cyan"),this.order++,this.lifecycle.push("I am from ngDoCheck()!!")}ngAfterContentInit(){alert("Hey I'm ngAfterContentInit()"),console.log("%cI am from ngAfterContentInit() and my order::::"+this.order,"color: cyan"),this.order++,this.lifecycle.push("I am from ngAfterContentInit()!!")}ngAfterContentChecked(){alert("Hey I'm ngAfterContentChecked()"),console.log("%cI am from ngAfterContentChecked() and my order::::"+this.order,"color: cyan"),this.order++,this.lifecycle.push("I am from ngAfterContentChecked()!!")}ngAfterViewInit(){this.lifecycle.push("I am from ngAfterViewInit()!!"),alert("Hey I'm ngAfterViewInit()"),console.log("%cI am from ngAfterViewInit() and my order::::"+this.order,"color: cyan"),this.order++}ngAfterViewChecked(){this.lifecycle.push("I am from ngAfterViewChecked()!!"),alert("Hey I'm ngAfterViewChecked()"),console.log("%cI am from ngAfterViewChecked() and my order::::"+this.order,"color: cyan"),this.order++}ngOnDestroy(){this.lifecycle.push("I am from ngOnDestroy()!!"),alert("Hey I'm ngOnDestroy()"),console.log("%cI am from ngOnDestroy() and my order::::"+this.order,"color: cyan"),this.order++}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-nghooks"]],inputs:{title:"title"},features:[e.TTD],decls:12,vars:2,consts:[[1,"container-fluid","p-5"],[1,"card"],[1,"card-header","text-center","text-white","bg-dark","fw-bold","fs-3","p-3"],[1,"card-body","p-3","bg-light"],[1,"row"],[1,"row","g-3","p-3","justify-content-md-center"],[1,"text-center","col-md-4"],[1,"list-group"],[1,"list-group-item","list-group-item-dark","fw-bold","fs-3"],["class","list-group-item list-group-item-info",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-info"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3),e._UZ(5,"div",4),e.TgZ(6,"div",5)(7,"div",6)(8,"ul",7)(9,"li",8),e._uU(10,"Stages"),e.qZA(),e.YNc(11,T,2,1,"li",9),e.qZA()()()()()()),2&o&&(e.xp6(3),e.hij(" ",n.title," "),e.xp6(8),e.Q6J("ngForOf",n.lifecycle))},directives:[d.sg],styles:[""]}),t})();function y(t,i){if(1&t&&(e.TgZ(0,"li",11),e._uU(1),e.qZA()),2&t){const o=i.$implicit;e.xp6(1),e.hij(" ",o,"")}}let h=(()=>{class t{constructor(){this.changelog=[],this.firstname=new a.NI("",[a.kI.required,a.kI.minLength(3)])}ngOnChanges(o){console.log("ngOnChanges"),console.log(o);for(const n in o){const r=o[n],s=JSON.stringify(r.currentValue),u=JSON.stringify(r.previousValue),V=`${n}: changed from ${null==u?void 0:u.toUpperCase()} to ${null==s?void 0:s.toUpperCase()} `;this.changelog.push(V)}}ngDoCheck(){console.log("ngDoCheck"),console.log(this.customer)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-lifecyclehooks"]],inputs:{message:"message",customer:"customer"},features:[e.TTD],decls:18,vars:3,consts:[[1,"container-fluid","p-5"],[1,"card"],[1,"card-header","text-center","bg-success-subtle","fw-bold","fs-3","p-3"],[1,"card-body","p-3","bg-light"],[1,"row","g-3","p-3"],[1,"fw-bold","fs-3"],[1,"col-md-4"],["for","input4FirstName",1,"form-label"],["type","text","id","input4FirstName",1,"form-control",3,"value"],[1,"list-group","list-group-numbered"],["class","list-group-item list-group-item-info",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-info"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Child Component "),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"h2",5),e._uU(7,"ngOnChange"),e.qZA(),e.TgZ(8,"div",6)(9,"label",7),e._uU(10,"Message "),e.qZA(),e._UZ(11,"input",8),e.qZA(),e.TgZ(12,"div",6)(13,"label",7),e._uU(14,"Name "),e.qZA(),e._UZ(15,"input",8),e.qZA(),e.TgZ(16,"ul",9),e.YNc(17,y,2,1,"li",10),e.qZA()()()()()),2&o&&(e.xp6(11),e.s9C("value",n.message),e.xp6(4),e.s9C("value",n.customer.name),e.xp6(2),e.Q6J("ngForOf",n.changelog))},directives:[d.sg],styles:[""]}),t})();function k(t,i){if(1&t){const o=e.EpF();e.TgZ(0,"div",18)(1,"div",1)(2,"div",19),e._uU(3," Parent Component "),e.qZA(),e.TgZ(4,"div",20)(5,"div",21)(6,"div",22)(7,"label",23),e._uU(8,"Message "),e.qZA(),e.TgZ(9,"input",24),e.NdJ("ngModelChange",function(r){return e.CHM(o),e.oxw().message=r}),e.qZA()(),e.TgZ(10,"div",22)(11,"label",23),e._uU(12,"Code "),e.qZA(),e.TgZ(13,"input",24),e.NdJ("ngModelChange",function(r){return e.CHM(o),e.oxw().code=r}),e.qZA()(),e.TgZ(14,"div",22)(15,"label",23),e._uU(16,"Name "),e.qZA(),e.TgZ(17,"input",24),e.NdJ("ngModelChange",function(r){return e.CHM(o),e.oxw().name=r}),e.qZA()()()(),e.TgZ(18,"div",25)(19,"button",11),e.NdJ("click",function(){return e.CHM(o),e.oxw().updateCustomer()}),e._uU(20,"Update "),e.qZA()()()()}if(2&t){const o=e.oxw();e.xp6(9),e.Q6J("ngModel",o.message),e.xp6(4),e.Q6J("ngModel",o.code),e.xp6(4),e.Q6J("ngModel",o.name)}}function A(t,i){1&t&&e._UZ(0,"app-ng-on-init-on-destroy")}function U(t,i){if(1&t&&e._UZ(0,"app-nghooks",26),2&t){const o=e.oxw();e.Q6J("title",o.titlename)}}function w(t,i){if(1&t&&e._UZ(0,"app-lifecyclehooks",27),2&t){const o=e.oxw();e.Q6J("message",o.message)("customer",o.customer)}}let q=(()=>{class t{constructor(o){this.router=o,this.data=0,this.titlename="Lifecycle of Component",this.message="",this.customer=new p,this.name="",this.code=0,this.isChildMount=!1,this.isTimerMount=!1,this.showNgOnChangeDemo=!1}updateCustomer(){this.customer=new p,this.customer.name=this.name,this.customer.code=this.code}lifeCycleStages(){this.isTimerMount=!1,this.showNgOnChangeDemo=!1,this.isChildMount=!this.isChildMount}onTimerClick(){this.isChildMount=!1,this.showNgOnChangeDemo=!1,this.isTimerMount=!this.isTimerMount}onDemoClick(){this.isChildMount=!1,this.isTimerMount=!1,this.showNgOnChangeDemo=!this.showNgOnChangeDemo}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-hooks"]],decls:36,vars:4,consts:[[1,"container-fluid","p-3"],[1,"card"],[1,"card-header","text-center","text-white","fw-bold","fs-3","p-3",2,"background-color","rgb(122, 54, 40)"],[1,"card-body",2,"background-color","aliceblue"],[1,"row","justify-content-around","g-3","p-3"],[1,"card","bg-info-subtle",2,"width","18rem"],[1,"card-body"],[1,"card-title","fw-bold","fs-6"],[1,"card-text"],[1,"btn","btn-info",3,"click"],[1,"card","bg-success-subtle",2,"width","18rem"],[1,"btn","btn-success",3,"click"],[1,"card","bg-danger-subtle",2,"width","18rem"],[1,"btn","btn-danger",3,"click"],["class","container-fluid p-5",4,"ngIf"],[4,"ngIf"],[3,"title",4,"ngIf"],[3,"message","customer",4,"ngIf"],[1,"container-fluid","p-5"],[1,"card-header","text-center","bg-success-subtle","fw-bold","fs-3"],[1,"card-body","bg-light"],[1,"row"],[1,"col-md-4"],["for","input4FirstName",1,"form-label"],["type","text","id","input4FirstName",1,"form-control",3,"ngModel","ngModelChange"],[1,"card-footer","d-grid","gap-2","d-md-flex","justify-content-md-end","bg-success-subtle","p-3"],[3,"title"],[3,"message","customer"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," LifeCycle Hooks "),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h5",7),e._uU(9,"Lifecycle of Component"),e.qZA(),e.TgZ(10,"p",8),e._uU(11,"A demo on Lifecycle hooks in a component"),e.qZA(),e.TgZ(12,"button",9),e.NdJ("click",function(){return n.lifeCycleStages()}),e._uU(13,"Mount/UnMount Component"),e.qZA()()(),e.TgZ(14,"div",10)(15,"div",6)(16,"h5",7),e._uU(17,"ngOnInit & ngOnDestroy Hooks"),e.qZA(),e.TgZ(18,"p",8),e._uU(19,"Example of ngOnInit & ngOnDestroy Hooks using Timer Component"),e.qZA(),e.TgZ(20,"button",11),e.NdJ("click",function(){return n.onTimerClick()}),e._uU(21,"Toggle Timer Component"),e.qZA()()(),e.TgZ(22,"div",12)(23,"div",6)(24,"h5",7),e._uU(25,"ngOnChanges & ngDoCheck Hooks"),e.qZA(),e.TgZ(26,"p",8),e._uU(27,"Example of ngOnChanges & ngDoCheck Hooks"),e.qZA(),e.TgZ(28,"button",13),e.NdJ("click",function(){return n.onDemoClick()}),e._uU(29,"ngOnChanges"),e.qZA()()()()()()(),e._UZ(30,"br")(31,"br"),e.YNc(32,k,21,3,"div",14),e.YNc(33,A,1,0,"app-ng-on-init-on-destroy",15),e.YNc(34,U,1,1,"app-nghooks",16),e.YNc(35,w,1,2,"app-lifecyclehooks",17)),2&o&&(e.xp6(32),e.Q6J("ngIf",n.showNgOnChangeDemo),e.xp6(1),e.Q6J("ngIf",n.isTimerMount),e.xp6(1),e.Q6J("ngIf",n.isChildMount),e.xp6(1),e.Q6J("ngIf",n.showNgOnChangeDemo))},directives:[d.O5,a.Fj,a.JJ,a.On,C,g,h],styles:[""]}),t})(),D=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-htmlbasics"]],decls:102,vars:0,consts:[[1,"container"],[1,"needs-validation"],[1,"mb-3"],["for","validationTextarea",1,"form-label"],["id","validationTextarea","placeholder","Required example textarea","required","",1,"form-control"],[1,"invalid-feedback"],[1,"form-check","mb-3"],["type","checkbox","id","validationFormCheck1","required","",1,"form-check-input"],["for","validationFormCheck1",1,"form-check-label"],[1,"form-check"],["type","radio","id","validationFormCheck2","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck2",1,"form-check-label"],["type","radio","id","validationFormCheck3","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck3",1,"form-check-label"],["required","","aria-label","select example",1,"form-select"],["value",""],["value","1"],["value","2"],["value","3"],["type","file","aria-label","file example","required","",1,"form-control"],["type","number","required","",1,"form-control"],["type","date","required","",1,"form-control"],["for","customRange1",1,"form-label"],["type","range","id","customRange1",1,"form-range"],[1,"input-group","mb-3"],["id","basic-addon1",1,"input-group-text"],["type","input","placeholder","Username","aria-label","Username","aria-describedby","basic-addon1","required","",1,"form-control"],[1,"list-group"],["href","#","aria-current","true",1,"list-group-item","list-group-item-action","active"],["href","#",1,"list-group-item","list-group-item-action"],[1,"list-group-item","list-group-item-action","disabled"],[1,"card",2,"width","18rem"],["src","https://angular.io/assets/images/logos/angular/angular.svg","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","https://angular.io",1,"btn","btn-primary"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal",1,"btn","btn-primary"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"],["type","submit",1,"btn","btn-primary"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"form",1),e._UZ(2,"br")(3,"br"),e.TgZ(4,"div",2)(5,"label",3),e._uU(6,"Textarea"),e.qZA(),e._UZ(7,"textarea",4),e.TgZ(8,"div",5),e._uU(9," Please enter a message in the textarea. "),e.qZA()(),e.TgZ(10,"div",6),e._UZ(11,"input",7),e.TgZ(12,"label",8),e._uU(13,"Check this checkbox"),e.qZA(),e.TgZ(14,"div",5),e._uU(15,"Example invalid feedback text"),e.qZA()(),e.TgZ(16,"div",9),e._UZ(17,"input",10),e.TgZ(18,"label",11),e._uU(19,"Toggle this radio"),e.qZA()(),e.TgZ(20,"div",6),e._UZ(21,"input",12),e.TgZ(22,"label",13),e._uU(23,"Or toggle this other radio"),e.qZA(),e.TgZ(24,"div",5),e._uU(25,"More example invalid feedback text"),e.qZA()(),e.TgZ(26,"div",2)(27,"select",14)(28,"option",15),e._uU(29,"Open this select menu"),e.qZA(),e.TgZ(30,"option",16),e._uU(31,"One"),e.qZA(),e.TgZ(32,"option",17),e._uU(33,"Two"),e.qZA(),e.TgZ(34,"option",18),e._uU(35,"Three"),e.qZA()(),e.TgZ(36,"div",5),e._uU(37,"Example invalid select feedback"),e.qZA()(),e.TgZ(38,"div",2),e._UZ(39,"input",19),e.TgZ(40,"div",5),e._uU(41,"Example invalid form file feedback"),e.qZA()(),e.TgZ(42,"div",2),e._UZ(43,"input",20),e.TgZ(44,"div",5),e._uU(45,"type your inputs"),e.qZA()(),e.TgZ(46,"div",2),e._UZ(47,"input",21),e.TgZ(48,"div",5),e._uU(49,"select your date"),e.qZA()(),e.TgZ(50,"div",2)(51,"label",22),e._uU(52,"Example range"),e.qZA(),e._UZ(53,"input",23),e.qZA(),e.TgZ(54,"div",24)(55,"span",25),e._uU(56,"Username"),e.qZA(),e._UZ(57,"input",26),e.TgZ(58,"div",5),e._uU(59,"type your inputs"),e.qZA()(),e.TgZ(60,"div",2)(61,"div",27)(62,"a",28),e._uU(63," The current link item "),e.qZA(),e.TgZ(64,"a",29),e._uU(65,"A second link item"),e.qZA(),e.TgZ(66,"a",29),e._uU(67,"A third link item"),e.qZA(),e.TgZ(68,"a",29),e._uU(69,"A fourth link item"),e.qZA(),e.TgZ(70,"a",30),e._uU(71,"A disabled link item"),e.qZA()()(),e.TgZ(72,"div",2)(73,"div",31),e._UZ(74,"img",32),e.TgZ(75,"div",33)(76,"h5",34),e._uU(77,"Card title"),e.qZA(),e.TgZ(78,"p",35),e._uU(79,"Some quick example text to build on the card title and make up the bulk of the card's content."),e.qZA(),e.TgZ(80,"a",36),e._uU(81,"Go somewhere"),e.qZA()()()(),e.TgZ(82,"button",37),e._uU(83," Launch demo modal "),e.qZA(),e.TgZ(84,"div",2)(85,"div",38)(86,"div",39)(87,"div",40)(88,"div",41)(89,"h1",42),e._uU(90,"Modal title"),e.qZA(),e._UZ(91,"button",43),e.qZA(),e.TgZ(92,"div",44),e._uU(93," Hello There from modal popup "),e.qZA(),e.TgZ(94,"div",45)(95,"button",46),e._uU(96,"Close"),e.qZA(),e.TgZ(97,"button",47),e._uU(98,"Save changes"),e.qZA()()()()()(),e.TgZ(99,"div",2)(100,"button",48),e._uU(101,"Submit form"),e.qZA()()()())},directives:[a._Y,a.JL,a.F,a.YN,a.Kr],styles:[""]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-inputchild"]],inputs:{parentData:"parentData"},decls:6,vars:1,consts:[[1,"card-body"],[1,"card-title","fw-bold","fs-6"],[1,"card-text"],["type","text",1,"form-control",3,"ngModel","ngModelChange"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"h5",1),e._uU(2,"I'm a Child Component"),e.qZA(),e.TgZ(3,"p",2),e._uU(4,"I received the below data from my Parent :)"),e.qZA(),e.TgZ(5,"input",3),e.NdJ("ngModelChange",function(s){return n.parentData=s}),e.qZA()()),2&o&&(e.xp6(5),e.Q6J("ngModel",n.parentData))},directives:[a.Fj,a.JJ,a.On],styles:[""]}),t})();function I(t,i){if(1&t&&(e.TgZ(0,"div",13),e._UZ(1,"app-inputchild",14),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("parentData",o.message)}}let O=(()=>{class t{constructor(){this.message="",this.isChildVisible=!1}sendDataToChild(){if(""===this.message)return alert("Please type few words");this.isChildVisible=!this.isChildVisible}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-input"]],decls:19,vars:2,consts:[[1,"container-fluid","p-3"],[1,"card"],[1,"card-header","text-center","text-white","fw-bold","fs-3","p-3",2,"background-color","rgb(22, 69, 59)"],[1,"card-body",2,"background-color","rgba(205, 255, 247, 0.273)"],[1,"row","justify-content-around","g-3","p-3"],[1,"card","bg-light-subtle",2,"width","18rem"],[1,"card-body"],[1,"card-title","fw-bold","fs-6"],[1,"card-text"],[1,"input-group","mb-3"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-success",3,"click"],["class","card bg-danger-subtle","style","width: 18rem;",4,"ngIf"],[1,"card","bg-danger-subtle",2,"width","18rem"],[3,"parentData"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Parent to Child Communication via @Input "),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h5",7),e._uU(9,"I'm a Parent Component"),e.qZA(),e.TgZ(10,"p",8),e._uU(11,"Type a text and click on Send Data to share data from Parent to Child Component"),e.qZA(),e.TgZ(12,"div",9)(13,"input",10),e.NdJ("ngModelChange",function(s){return n.message=s}),e.qZA(),e.TgZ(14,"button",11),e.NdJ("click",function(){return n.sendDataToChild()}),e._uU(15,"Send Data"),e.qZA()()()(),e.YNc(16,I,2,1,"div",12),e.qZA()()()(),e._UZ(17,"br")(18,"br")),2&o&&(e.xp6(13),e.Q6J("ngModel",n.message),e.xp6(3),e.Q6J("ngIf",n.isChildVisible))},directives:[a.Fj,a.JJ,a.On,d.O5,x],styles:[""]}),t})();var M=l(8306);let N=(()=>{class t{constructor(o){this.router=o;const n=new M.y(s=>{console.log("Start of Observable"),s.next("Observable data 1"),s.next("Observable data 2"),s.next("Observable data 3"),setTimeout(()=>s.next("Observable data 4"),1e3),s.next("Observable data 5")});console.log("Start"),n.subscribe(s=>{console.log("First Subscription :",s)}),console.log("First Subscription ends"),n.subscribe(s=>{console.log("Second Subscription:",s)}),console.log("Second Subscription ends");const r=this.normalFunction();console.log("Normal Function Data:"+r)}ngOnInit(){}normalFunction(){return console.log("Return ouput: 1"),1}onInputDemo(){this.router.navigateByUrl("views/demo/input")}onOutputDemo(){this.router.navigateByUrl("views/demo/edituser/")}onViewChildDemo(){this.router.navigateByUrl("views/user/edituser/")}onServiceDemo(){this.router.navigateByUrl("views/user/edituser/")}onLifeCycleDemo(){this.router.navigateByUrl("views/demo/lifecyclehooks")}onDirectiveDemo(){this.router.navigateByUrl("views/user/edituser/")}onPipesDemo(){this.router.navigateByUrl("views/user/edituser/")}onHTMLDemo(){this.router.navigateByUrl("views/demo/html")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:104,vars:0,consts:[[1,"container-fluid","p-3"],[1,"card"],[1,"card-header","text-center","text-white","fw-bold","fs-3","p-3",2,"background-color","rgb(102, 47, 144)"],[1,"card-body",2,"background-color","antiquewhite"],[1,"row","justify-content-around","g-3","p-3"],[1,"card","bg-primary-subtle",2,"width","18rem"],[1,"card-body"],[1,"card-title","fw-bold","fs-6"],[1,"card-text"],[1,"btn","btn-primary",3,"click"],[1,"card","bg-secondary-subtle",2,"width","18rem"],[1,"btn","btn-secondary",3,"click"],[1,"card","bg-success-subtle",2,"width","18rem"],[1,"btn","btn-success",3,"click"],[1,"card","bg-danger-subtle",2,"width","18rem"],[1,"btn","btn-danger",3,"click"],[1,"card","bg-warning-subtle",2,"width","18rem"],[1,"btn","btn-warning",3,"click"],[1,"card","bg-info-subtle",2,"width","18rem"],[1,"btn","btn-info",3,"click"],[1,"card","bg-light-subtle",2,"width","18rem"],[1,"btn","btn-dark",3,"click"],[1,"card","bg-dark-subtle",2,"width","18rem"],[1,"btn","btn-outline-dark",3,"click"],[1,"card","bg-body-secondary",2,"width","18rem"],[1,"card","bg-black",2,"width","18rem"],[1,"card-title","text-white","fw-bold","fs-6"],[1,"card-text","text-white"],[1,"btn","btn-light",3,"click"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Angular Topics "),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h5",7),e._uU(9,"@Input"),e.qZA(),e.TgZ(10,"p",8),e._uU(11,"Parent to Child Communication"),e.qZA(),e.TgZ(12,"button",9),e.NdJ("click",function(){return n.onInputDemo()}),e._uU(13,"Demo"),e.qZA()()(),e.TgZ(14,"div",10)(15,"div",6)(16,"h5",7),e._uU(17,"@Output"),e.qZA(),e.TgZ(18,"p",8),e._uU(19,"Child to Parent Communication"),e.qZA(),e.TgZ(20,"button",11),e.NdJ("click",function(){return n.onOutputDemo()}),e._uU(21,"Demo"),e.qZA()()(),e.TgZ(22,"div",12)(23,"div",6)(24,"h5",7),e._uU(25,"@ViewChild"),e.qZA(),e.TgZ(26,"p",8),e._uU(27,"Child to Parent Communication"),e.qZA(),e.TgZ(28,"button",13),e.NdJ("click",function(){return n.onViewChildDemo()}),e._uU(29,"Demo"),e.qZA()()(),e.TgZ(30,"div",14)(31,"div",6)(32,"h5",7),e._uU(33,"Services"),e.qZA(),e.TgZ(34,"p",8),e._uU(35,"Data Sharing between unrelated Components"),e.qZA(),e.TgZ(36,"button",15),e.NdJ("click",function(){return n.onServiceDemo()}),e._uU(37,"Demo"),e.qZA()()(),e.TgZ(38,"div",16)(39,"div",6)(40,"h5",7),e._uU(41,"LifeCycle Hooks"),e.qZA(),e.TgZ(42,"p",8),e._uU(43,"Angular LifeCycle stages"),e.qZA(),e.TgZ(44,"button",17),e.NdJ("click",function(){return n.onLifeCycleDemo()}),e._uU(45,"Demo"),e.qZA()()(),e.TgZ(46,"div",18)(47,"div",6)(48,"h5",7),e._uU(49,"Directives"),e.qZA(),e.TgZ(50,"p",8),e._uU(51,"Structural/Attribute/Custom Directives"),e.qZA(),e.TgZ(52,"button",19),e.NdJ("click",function(){return n.onDirectiveDemo()}),e._uU(53,"Demo"),e.qZA()()(),e.TgZ(54,"div",20)(55,"div",6)(56,"h5",7),e._uU(57,"Pipes"),e.qZA(),e.TgZ(58,"p",8),e._uU(59,"Pure vs Impure Pipes & Default/Custom Pipes"),e.qZA(),e.TgZ(60,"button",21),e.NdJ("click",function(){return n.onPipesDemo()}),e._uU(61,"Demo"),e.qZA()()(),e.TgZ(62,"div",22)(63,"div",6)(64,"h5",7),e._uU(65,"Pipes"),e.qZA(),e.TgZ(66,"p",8),e._uU(67,"Pure vs Impure Pipes & Default/Custom Pipes"),e.qZA(),e.TgZ(68,"button",23),e.NdJ("click",function(){return n.onInputDemo()}),e._uU(69,"Demo"),e.qZA()()(),e.TgZ(70,"div",24)(71,"div",6)(72,"h5",7),e._uU(73,"Pipes"),e.qZA(),e.TgZ(74,"p",8),e._uU(75,"Pure vs Impure Pipes & Default/Custom Pipes"),e.qZA(),e.TgZ(76,"button",11),e.NdJ("click",function(){return n.onInputDemo()}),e._uU(77,"Demo"),e.qZA()()(),e.TgZ(78,"div",25)(79,"div",6)(80,"h5",26),e._uU(81,"Pipes"),e.qZA(),e.TgZ(82,"p",27),e._uU(83,"Pure vs Impure Pipes & Default/Custom Pipes"),e.qZA(),e.TgZ(84,"button",28),e.NdJ("click",function(){return n.onInputDemo()}),e._uU(85,"Demo"),e.qZA()()(),e.TgZ(86,"div",25)(87,"div",6)(88,"h5",26),e._uU(89,"Pipes"),e.qZA(),e.TgZ(90,"p",27),e._uU(91,"Pure vs Impure Pipes & Default/Custom Pipes"),e.qZA(),e.TgZ(92,"button",28),e.NdJ("click",function(){return n.onInputDemo()}),e._uU(93,"Demo"),e.qZA()()(),e.TgZ(94,"div",25)(95,"div",6)(96,"h5",26),e._uU(97,"HTML Basic Tags"),e.qZA(),e.TgZ(98,"p",27),e._uU(99,"Overview on Basic HTML controls"),e.qZA(),e.TgZ(100,"button",28),e.NdJ("click",function(){return n.onHTMLDemo()}),e._uU(101,"Demo"),e.qZA()()()()()()(),e._UZ(102,"br")(103,"br"))},styles:[""]}),t})();function F(t,i){1&t&&(e.TgZ(0,"li",5)(1,"a",11),e._uU(2,"Demo"),e.qZA()())}let J=(()=>{class t{constructor(o){this.router=o}ngOnInit(){}onClickCreateUser(){this.router.navigateByUrl("views/user/createuser/test")}logout(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],decls:19,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark","sticky-sm-top"],[1,"container"],[1,"navbar-brand","fw-bold","fs-3"],["id","navbarResponsive",1,"collapse","navbar-collapse"],[1,"nav","nav-pills","nav-fill"],[1,"nav-item"],["routerLinkActive","active","routerLink","./dashboard",1,"nav-link","text-white","fw-bold","fs-6"],["routerLinkActive","active","routerLink","./user/userlist",1,"nav-link","text-white","fw-bold","fs-6"],["routerLinkActive","active","routerLink","./user/createuser",1,"nav-link","text-white","fw-bold","fs-6"],["class","nav-item",4,"ngIf"],["routerLinkActive","active","routerLink","../login",1,"nav-link","text-white","fw-bold","fs-6"],["routerLinkActive","active","routerLink","./demo",1,"nav-link","text-white","fw-bold","fs-6"]],template:function(o,n){1&o&&(e.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),e._uU(3,"Angular Project"),e.qZA(),e.TgZ(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),e._uU(8,"Home "),e.qZA()(),e.TgZ(9,"li",5)(10,"a",7),e._uU(11,"User List"),e.qZA()(),e.TgZ(12,"li",5)(13,"a",8),e._uU(14,"Add User"),e.qZA()(),e.YNc(15,F,3,0,"li",9),e.TgZ(16,"li",5)(17,"a",10),e._uU(18,"LogOut"),e.qZA()()()()()()),2&o&&(e.xp6(15),e.Q6J("ngIf",n.router.url.includes("/demo")))},directives:[c.yS,c.Od,d.O5],styles:[".fixed-header[_ngcontent-%COMP%], .fixed-footer[_ngcontent-%COMP%]{width:100%;background-color:#000;color:#fff;text-align:center;padding:15px;position:fixed;left:0}.fixed-header[_ngcontent-%COMP%]{top:0}"]}),t})(),H=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],decls:4,vars:0,consts:[[1,"fixed-bottom","bg-dark","p-2"],[1,"text-center","text-white"]],template:function(o,n){1&o&&(e._UZ(0,"br"),e.TgZ(1,"footer",0)(2,"div",1),e._uU(3," \xa9 2023 Copyright Angular "),e.qZA()())},styles:[".fixed-header[_ngcontent-%COMP%], .fixed-footer[_ngcontent-%COMP%]{width:100%;background-color:#000;color:#fff;text-align:center;padding:15px;position:fixed;left:0}.fixed-footer[_ngcontent-%COMP%]{bottom:0}"]}),t})();const P=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-views"]],decls:3,vars:0,template:function(o,n){1&o&&e._UZ(0,"app-header")(1,"router-outlet")(2,"app-footer")},directives:[J,c.lC,H],styles:[""]}),t})(),children:[{path:"dashboard",component:N},{path:"demo/input",component:O},{path:"demo/service",component:Z},{path:"demo/lifecyclehooks",component:q},{path:"demo/nghooks",component:g},{path:"demo/ngOnChanges",component:h},{path:"demo/html",component:D},{path:"",redirectTo:"/views/dashboard",pathMatch:"full"},{path:"user",loadChildren:()=>l.e(375).then(l.bind(l,375)).then(t=>t.UserModule)}]}];let L=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(P)],c.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,L,a.u5,a.UX]]}),t})()}}]);