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

	var app1 = qlik.openApp('6b190b4e-9fd5-41dc-b9a5-fde54debac69', config);

	app1.bookmark.apply('cc47e722-8aa6-49bb-9905-34fbb06c36ed');
	//app21.bookmark.apply('pPvpTN');
	
	
	$("[data-qcmd]").on("click", function () {
		var $element = $(this);
		switch ($element.data("qcmd")) {
			case "pg1":
				setTimeout(function(){ qlik.resize(); }, 1000);
				page1();
				break;
			case "pg2":
				setTimeout(function(){ qlik.resize(); }, 1000);
				page2();
				break;
		}
	});
	
	page1();
	var models = [];
	function page2() {
		cleanup();
	//create cubes and lists -- inserted here --
			//get objects -- inserted here --
	app1.getObject('QV-30aa-1','YRyJMzE').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L55-1-sub','BPMsGP').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L55-1','ecMEjjH').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L55','eMBFBR').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L54','XLJcBw').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L53','hevsbM').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L52','zFmBQm').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L51','MKmyTQ').then(model => {
			models.push(model);
		});

	app1.getObject('QV-pg2-cp-4','zUjDt').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-cp-3','npUXqm').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-cp-2','zLvDCYX').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-cp-1','tdeTTK').then(model => {
			models.push(model);
		});
	app1.getObject('QV-refresh-2','LEtj').then(model => {
			models.push(model);
		});
	app1.getObject('QV-clear-2','RuQmRAM').then(model => {
			models.push(model);
		});

	app1.getObject('QV-30aa','qjymjU').then(model => {
			models.push(model);
		});
	
	app1.getObject('QV-adv-7','zJvNH').then(model => {
			models.push(model);
		});
	app1.getObject('QV-30aa-1-sub','zweAtFv').then(model => {
			models.push(model);
		});
	app1.getObject('QV-30','aCbwrvR').then(model => {
			models.push(model);
		});
	app1.getObject('QV-29','jpNAbg').then(model => {
			models.push(model);
		});
	app1.getObject('QV-28','DpFLjv').then(model => {
			models.push(model);
		});
	app1.getObject('QV-27','uKjbbm').then(model => {
			models.push(model);
		});	
	
	app1.getObject('QV-pg2-5','jnmu').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main4-2','BJAFc').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main4-1','ZqFwmT').then(model => {
			models.push(model);
		});
	app1.getObject('QV-adv-1','Bzfnr').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main3-1','cGpfppB').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main3-5','XCxL').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main4-3','KshNJ').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main4-4','JjKpk').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main3-6','ECPJKpL').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main3-2','vzfBx').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main2-4','mzRBmU').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-2','jZsJLgF').then(model => {
			models.push(model);
		});	
	app1.getObject('QV-pg2-6','cbzgKj').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main2-6','hrjWUs').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main4-6','JPLBkt').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main3-4','LGGtvD').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main2-2','pjVXJMw').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-4','QwwaAD').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main4-5','rJmpn').then(model => {
			models.push(model);
		});	
	app1.getObject('QV-pg2-main3-3','TffATp').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main2-5','JayxRjU').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main2-1','vjTvR').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-3','NjDMWB').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg2-main2-3','THHDdW').then(model => {
			models.push(model);
		});	
	app1.getObject('QV-pg2-1','ZvZpnw').then(model => {
			models.push(model);
		});
	app1.getObject('qv-imp-3','DnqMA').then(model => {
			models.push(model);
		});
	app1.getObject('qv-imp-4','rZNxM').then(model => {
			models.push(model);
		});
	app1.getObject('qv-imp-2','zbMwB').then(model => {
			models.push(model);
		});
	app1.getObject('qv-imp-1','KGxvpQ').then(model => {
			models.push(model);
		});
	
	app1.getObject('QV-adv-2','uxcxGa').then(model => {
			models.push(model);
		});
	app1.getObject('QV-adv-8','uxcxGa').then(model => {
			models.push(model);
		});
	}

	function page1() {
		cleanup();
		
	app1.getObject('QV-L24','XLJcBw').then(model => {
			models.push(model);
			});
	app1.getObject('QV-L23','aJEBzrD').then(model => {
			models.push(model);
			});
	app1.getObject('QV-L22','hevsbM').then(model => {
			models.push(model);
			});
	app1.getObject('QV-L21','zFmBQm').then(model => {
			models.push(model);	
			});
		
	app1.getObject('QV-pg1-kpi3-r3-2','61e42fd1-8bf3-43f8-8cba-4844f3996c95').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi3-r2-2','61e42fd1-8bf3-43f8-8cba-4844f3996c95').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi3-r1-2','61e42fd1-8bf3-43f8-8cba-4844f3996c95').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r3-3','tNngqMR').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r2-3','erUp').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r1-3','kwjYfN').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r3-3','NThGkt').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r2-3','ZcHJsf').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r1-3','gVXwBJ').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi3-r3-1','GmXNxEM').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi3-r2-1','cQpPn').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi3-r1-1','DxUW').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r3-2','sww').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r2-2','sww').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r1-2','sww').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r3-1','LVjjCbL').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r2-1','HqEUP').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi2-r1-1','wJdZxL').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r3-2','sww').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r2-2','sww').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r1-2','sww').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r3-1','hsNcmg').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r2-1','wvKpN').then(model => {
			models.push(model);
		});
	app1.getObject('QV-pg1-kpi1-r1-1','rrjgmY').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-4a-1','RuQmRAM').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-4a','dTVasav').then(model => {
			models.push(model);
		});
	app1.getObject('QV-L25','WFBdh').then(model => {
			models.push(model);
		});
	app1.getObject('QV-d-2','atZPfL').then(model => {
			models.push(model);
		});
	app1.getObject('QV-d-1','zNNSCx').then(model => {
			models.push(model);
		});
	app1.getObject('QV-refresh-1','LEtj').then(model => {
			models.push(model);
		});
	
	app1.getObject('QV-d-5','NxpLbQ').then(model => {
			models.push(model);
		});
	app1.getObject('QV-d-4','JLxJjs').then(model => {
			models.push(model);
		});
	app1.getObject('QV-d-3','sJTqDmc').then(model => {
			models.push(model);
		});	
	app1.getObject('QV-2-8','gEbQT').then(model => {
			models.push(model);
		});
	app1.getObject('QV-dream-5-9','nbjQr').then(model => {
			models.push(model);
		});
	app1.getObject('QV-dream-5-7','zZUMDRw').then(model => {
			models.push(model);
		});	
	app1.getObject('QV-dream-5-5','FmAAwkr').then(model => {
			models.push(model);
		});
	app1.getObject('QV-dream-5-8','XmtF').then(model => {
			models.push(model);
		});
	app1.getObject('QV-dream-5-6','bjXuUF').then(model => {
			models.push(model);
		});
	app1.getObject('QV-dream-5-4-1','bPSRryE').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-9','mCxvG').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-7','EzDnpm').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-5','JuddQU').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-4','ZKWpV').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-2','serUMxS').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5a','XhmqK').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-8','PBHUXmr').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-6','aEskYvs').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-4-1','DnXfCyg').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-3','FZpjsmp').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5-1','JsLZLGx').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-5','GkmFw').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-4','PPZCkuV').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-3','jJpbmn').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-2','bJzrZs').then(model => {
			models.push(model);
		});
	app1.getObject('QV-2-1','EPtmpPL').then(model => {
			models.push(model);
		});
	}
	
	function cleanup() {
		$.each(models, function (i, e) {
			e.close();
		});
		models = [];
	}
	
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
	
	if (app1) {
app1.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
