"use strict";(self.webpackChunkmaterial_angular_io=self.webpackChunkmaterial_angular_io||[]).push([[4847],{4847:(c,o,a)=>{a.r(o),a.d(o,{BreakpointObserverOverviewExample:()=>v});var r=a(1088),e=a(5879),l=a(2079),p=a(9352);let v=(()=>{class n{constructor(t){this.destroyed=new l.xQ,this.displayNameMap=new Map([[r.u3.XSmall,"XSmall"],[r.u3.Small,"Small"],[r.u3.Medium,"Medium"],[r.u3.Large,"Large"],[r.u3.XLarge,"XLarge"]]),t.observe([r.u3.XSmall,r.u3.Small,r.u3.Medium,r.u3.Large,r.u3.XLarge]).pipe((0,p.R)(this.destroyed)).subscribe(s=>{for(const u of Object.keys(s.breakpoints))s.breakpoints[u]&&(this.currentScreenSize=this.displayNameMap.get(u)??"Unknown")})}ngOnDestroy(){this.destroyed.next(),this.destroyed.complete()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(r.Yg))},n.\u0275cmp=e.Xpm({type:n,selectors:[["breakpoint-observer-overview-example"]],standalone:!0,features:[e.jDz],decls:6,vars:1,template:function(t,s){1&t&&(e.TgZ(0,"p"),e._uU(1," Resize your browser window to see the current screen size change.\n"),e.qZA(),e.TgZ(2,"p"),e._uU(3," The current screen size is "),e.TgZ(4,"strong"),e._uU(5),e.qZA()()),2&t&&(e.xp6(5),e.Oqu(s.currentScreenSize))}}),n})()}}]);