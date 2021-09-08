/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});
		
		qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

     });
  

	//callbacks -- inserted here --
	//open apps -- inserted here --



	var app1 = qlik.openApp('Industry Compass.qvf', config);

	app1.bookmark.apply('cc47e722-8aa6-49bb-9905-34fbb06c36ed');
	//app21.bookmark.apply('pPvpTN');
	
	//create cubes and lists -- inserted here --

	if (app1) {
			//get objects -- inserted here --
	
	app1.getObject('QV-pg1-kpi3-r3-2','61e42fd1-8bf3-43f8-8cba-4844f3996c95');
	app1.getObject('QV-pg1-kpi3-r2-2','61e42fd1-8bf3-43f8-8cba-4844f3996c95');
	app1.getObject('QV-pg1-kpi3-r1-2','61e42fd1-8bf3-43f8-8cba-4844f3996c95');
	app1.getObject('QV-pg2-cp-4','zUjDt');
	app1.getObject('QV-pg2-cp-3','npUXqm');
	app1.getObject('QV-pg2-cp-2','zLvDCYX');
	app1.getObject('QV-pg2-cp-1','tdeTTK');
	app1.getObject('QV-refresh-2','LEtj');
	app1.getObject('QV-clear-2','RuQmRAM');
	app1.getObject('QV-L55-1-sub','WFBdh');
	app1.getObject('QV-30aa-1-sub','zweAtFv');
	app1.getObject('QV-L55-1','amDQ');
	app1.getObject('QV-30aa-1','XGuwQp');
	app1.getObject('QV-pg1-kpi2-r3-3','tNngqMR');
	app1.getObject('QV-pg1-kpi2-r2-3','erUp');
	app1.getObject('QV-pg1-kpi2-r1-3','kwjYfN');
	app1.getObject('QV-pg1-kpi1-r3-3','NThGkt');
	app1.getObject('QV-pg1-kpi1-r2-3','ZcHJsf');
	app1.getObject('QV-pg1-kpi1-r1-3','gVXwBJ');
	
	
	
	app1.getObject('QV-pg1-kpi3-r3-1','GmXNxEM');
	app1.getObject('QV-pg1-kpi3-r2-1','cQpPn');
	app1.getObject('QV-pg1-kpi3-r1-1','DxUW');
	app1.getObject('QV-pg1-kpi2-r3-2','sww');
	app1.getObject('QV-pg1-kpi2-r2-2','sww');
	app1.getObject('QV-pg1-kpi2-r1-2','sww');
	app1.getObject('QV-pg1-kpi2-r3-1','LVjjCbL');
	app1.getObject('QV-pg1-kpi2-r2-1','HqEUP');
	app1.getObject('QV-pg1-kpi2-r1-1','wJdZxL');
	app1.getObject('QV-pg1-kpi1-r3-2','sww');
	app1.getObject('QV-pg1-kpi1-r2-2','sww');
	
	app1.getObject('QV-pg1-kpi1-r1-2','sww');
	app1.getObject('QV-pg1-kpi1-r3-1','hsNcmg');
	app1.getObject('QV-pg1-kpi1-r2-1','wvKpN');
	app1.getObject('QV-pg1-kpi1-r1-1','rrjgmY');
	app1.getObject('QV-refresh-1','LEtj');
	
	app1.getObject('QV-2-4a','dTVasav');
	app1.getObject('QV-L25','WFBdh');
	app1.getObject('QV-30','aCbwrvR');
	app1.getObject('QV-29','jpNAbg');
	app1.getObject('QV-28','DpFLjv');
	app1.getObject('QV-27','uKjbbm');	
	app1.getObject('QV-L51','kaXhUy');
	app1.getObject('QV-L54','CdCfpj');
	app1.getObject('QV-L53','SFfZj');
	app1.getObject('QV-L52','ArFr');
	app1.getObject('QV-pg2-5','jnmu');
	app1.getObject('QV-pg2-main4-2','BJAFc');
	app1.getObject('QV-pg2-main4-1','ZqFwmT');
	app1.getObject('QV-adv-1','Bzfnr');
	app1.getObject('QV-pg2-main3-1','cGpfppB');
	app1.getObject('QV-pg2-main3-5','XCxL');
	app1.getObject('QV-pg2-main4-3','KshNJ');
	app1.getObject('QV-pg2-main4-4','JjKpk');
	app1.getObject('QV-pg2-main3-6','ECPJKpL');
	app1.getObject('QV-pg2-main3-2','vzfBx');
	app1.getObject('QV-pg2-main2-4','mzRBmU');
	app1.getObject('QV-pg2-2','jZsJLgF');	
	app1.getObject('QV-pg2-6','cbzgKj');
	app1.getObject('QV-pg2-main2-6','hrjWUs');
	app1.getObject('QV-pg2-main4-6','JPLBkt');
	app1.getObject('QV-pg2-main3-4','LGGtvD');
	app1.getObject('QV-pg2-main2-2','pjVXJMw');
	app1.getObject('QV-pg2-4','QwwaAD');
	app1.getObject('QV-pg2-main4-5','rJmpn');	
	app1.getObject('QV-pg2-main3-3','TffATp');
	app1.getObject('QV-pg2-main2-5','JayxRjU');
	app1.getObject('QV-pg2-main2-1','vjTvR');
	app1.getObject('QV-pg2-3','NjDMWB');
	app1.getObject('QV-pg2-main2-3','THHDdW');	
	app1.getObject('QV-d-2','atZPfL');
	app1.getObject('QV-d-1','zNNSCx');
	app1.getObject('QV-pg2-1','ZvZpnw');
	app1.getObject('qv-imp-3','DnqMA');
	app1.getObject('qv-imp-4','rZNxM');
	app1.getObject('qv-imp-2','zbMwB');
	app1.getObject('qv-imp-1','KGxvpQ');
	
	
	
	
	app1.getObject('QV-adv-8','uxcxGa');
	app1.getObject('QV-adv-2','uxcxGa');
	app1.getObject('QV-adv-7','zJvNH');	
	app1.getObject('QV-30aa','qjymjU');	
	app1.getObject('QV-L55','EGAjS');
	app1.getObject('QV-L24','CdCfpj');
	app1.getObject('QV-L23','aejDSJe');
	app1.getObject('QV-L22','SFfZj');
	app1.getObject('QV-L21','ArFr');
	app1.getObject('QV-d-5','NxpLbQ');
	app1.getObject('QV-d-4','JLxJjs');
	app1.getObject('QV-d-3','sJTqDmc');	
	app1.getObject('QV-2-8','gEbQT');
	app1.getObject('QV-dream-5-9','nbjQr');
	app1.getObject('QV-dream-5-7','zZUMDRw');	
	app1.getObject('QV-dream-5-5','FmAAwkr');
	app1.getObject('QV-dream-5-8','XmtF');
	app1.getObject('QV-dream-5-6','bjXuUF');
	app1.getObject('QV-dream-5-4-1','bPSRryE');
	app1.getObject('QV-2-5-9','mCxvG');
	app1.getObject('QV-2-5-7','EzDnpm');
	app1.getObject('QV-2-5-5','JuddQU');
	app1.getObject('QV-2-5-4','ZKWpV');
	app1.getObject('QV-2-5-2','serUMxS');
	app1.getObject('QV-2-5a','XhmqK');
	app1.getObject('QV-2-5-8','PBHUXmr');
	app1.getObject('QV-2-5-6','aEskYvs');
	app1.getObject('QV-2-5-4-1','DnXfCyg');
	app1.getObject('QV-2-5-3','FZpjsmp');
	app1.getObject('QV-2-5-1','JsLZLGx');
	app1.getObject('QV-2-5','GkmFw');
	app1.getObject('QV-2-4','PPZCkuV');
	app1.getObject('QV-2-3','jJpbmn');
	app1.getObject('QV-2-2','bJzrZs');
	app1.getObject('QV-2-1','EPtmpPL');
	
	$(".btn-round").click(function() {
			qlik.resize();
		});
		$("a").click(function() {
			qlik.resize();
		});
		$(document).on('change',function(){
			qlik.resize();
	   });
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
		$(".criteria").change(function() {
			qlik.resize();
		});
	
app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
