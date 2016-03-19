"use strict";angular.module("kordingApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngMaterial"]).config(["$routeProvider","$mdThemingProvider","$mdIconProvider",function(a,b,c){a.when("/scale",{templateUrl:"views/scale.html",controller:"ScaleCtrl",controllerAs:"scale"}).otherwise({redirectTo:"/scale"}),b.theme("default").primaryPalette("cyan").accentPalette("orange"),c.defaultIconSet("img/icons/sets/core-icons.svg",24)}]),angular.module("kordingApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("kordingApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("kordingApp").controller("ScaleCtrl",["vexScale","scaler","$scope",function(a,b,c){this.DEFAULT_OCTAVE="4",c.currentScale=b.getCurrentScale(),c.$watch("currentScale",function(a,b){a!==b&&(c.currentScale=a)}),this.genVexScale=function(b,c,d){for(var e={tonic:b,notes:[],scaleType:d,accSpec:{acc:null,num:0}},f=teoria.scale(b+c+this.DEFAULT_OCTAVE,d).notes(),g=0;g<f.length;g++){var h=f[g],i=f[g].accidental()?f[g].accidental():"";e.notes.push(h.name()+i+"/"+h.octave()),h.accidental()&&(e.accSpec.acc||(e.accSpec.acc=h.accidental()),e.accSpec.num++)}var j=e.notes[0],k=j.split("/")[0]+"/"+(parseInt(j.substr(-1))+1).toString();return e.notes.push(k),a(e)}}]),angular.module("kordingApp").factory("vexScale",function(){var a="q",b=function(b){for(var c=[],d=0;d<b.notes.length;d++){var e=b.notes[d];e=e.replace(/x/i,"##");var f=e.split("/")[0].slice(1),g=new Vex.Flow.StaveNote({keys:[e],duration:a});f&&g.addAccidental(0,new Vex.Flow.Accidental(f)),c.push(g)}return c};return function(a){var c=document.createElement("canvas");c.height=100,c.width=700;var d=c.width-50,e=new Vex.Flow.Renderer(c,Vex.Flow.Renderer.Backends.CANVAS),f=e.getContext();f.clearRect(0,0,c.width,c.height);var g=new Vex.Flow.Stave(10,0,d);g.setContext(f),g.addClef("treble"),g.setEndBarType(Vex.Flow.Barline.type.SINGLE);var h=b(a),i=new Vex.Flow.Voice({num_beats:a.notes.length,beat_value:4,resolution:Vex.Flow.RESOLUTION});i.addTickables(h);var j=new Vex.Flow.Formatter;return j.joinVoices([i]),j.format([i],d),j.formatToStave([i],g),g.draw(),i.draw(f,g),c.toDataURL()}}),angular.module("kordingApp").directive("korScale",function(){return{restrict:"E",link:function(a,b){var c=document.createElement("img");b[0].appendChild(c),a.$watch("currentScale",function(){c.src=a.scale.genVexScale(a.currentScale.tonic,a.currentScale.accidental.value,a.currentScale.scaleType)},!0)}}}),angular.module("kordingApp").controller("SidenavCtrl",["$mdSidenav",function(a){this.openLeftMenu=function(){a("left").toggle()},this.closeLeftMenu=function(){a("left").toggle()}}]),angular.module("kordingApp").factory("scaler",function(){function a(){return n}function b(){return k}function c(){return l}function d(){return m}function e(a){n.tonic=a}function f(){return n.tonic}function g(a){n.accidental=a}function h(){return n.accidental}function i(a){n.scaleType=a}function j(){return n.scaleType}var k=["C","D","E","F","G","A","B"],l=[{name:"natural",value:""},{name:"sharp",value:"#"},{name:"flat",value:"b"}],m=["aeolian","blues","chromatic","dorian","doubleharmonic","harmonicminor","ionian","locrian","lydian","majorpentatonic","melodicminor","minorpentatonic","mixolydian","phrygian","wholetone","harmonicchromatic","minor","major","flamenco"],n={tonic:"C",accidental:{name:"natural",value:""},scaleType:"major"};return{getCurrentScale:a,getTonics:b,getAccidentals:c,getScaleTypes:d,getTonic:f,setTonic:e,getAccidental:h,setAccidental:g,getScaleType:j,setScaleType:i}}),angular.module("kordingApp").controller("PickerdialogCtrl",["$scope","$mdDialog","scaler",function(a,b,c){a.hide=function(){b.hide()},a.cancel=function(){b.cancel()},a.answer=function(a){b.hide(a)},a.scaler=c}]),angular.module("kordingApp").controller("MaintoolbarCtrl",["$scope","$mdDialog","$mdSidenav",function(a,b,c){this.navLinks=[{label:"Home",href:"/#/"},{label:"Scale",href:"/#/scale"},{label:"kamps-duac.github.io",href:"http://kamps-duac.github.io"}],a.showTabDialog=function(a){b.show({parent:angular.element(document.body),targetEvent:a,templateUrl:"views/pickerdialog.html",controller:"PickerdialogCtrl",clickOutsideToClose:!0})},a.openLeftMenu=function(){c("left").toggle()},a.closeLeftMenu=function(){c("left").toggle()}}]),angular.module("kordingApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div layout="column" layout-align="space-between center"> <h1 class="md-display-3">Wanna Kord? </h1> <img class="logo" src="images/kording-logo.457caec0.png" alt="kording"> <p class="md-subhead">I bet I can find it for you.</p> </div>'),a.put("views/maintoolbar.html",'<div ng-controller="MaintoolbarCtrl as tool" ng-cloak> <md-content> <md-toolbar> <div class="md-toolbar-tools"> <md-button class="md-icon-button" aria-label="Menu" ng-click="openLeftMenu()" md-swipe-right="openLeftMenu()"> <i class="material-icons">menu</i> </md-button> <h2><span>Kording</span></h2> <span flex></span> <md-button class="md-icon-button" ng-click="showTabDialog($event)" aria-label="Scale Picker"> <i class="material-icons">music_note</i> </md-button> </div> </md-toolbar> </md-content> <div ng-include="\'views/sidenav.html\'"></div> </div>'),a.put("views/picker.html",'<div layout="row" layout-wrap layout-margin> <md-toolbar layout="row" layout-wrap layout-align="center center"> <md-button ng-repeat="tonic in scale.tonics" ng-class="{\'md-raised\' : scale.getTonic() == tonic}" ng-click="scale.setTonic(tonic)">{{tonic}}</md-button> </md-toolbar> <md-toolbar layout="row" layout-align="center center"> <md-button class="md-accent" flex="20" ng-repeat="accidental in scale.accidentals" ng-class="{\'md-raised\' : scale.getAccidental() == accidental }" ng-click="scale.setAccidental(accidental)">{{accidental.name}}</md-button> </md-toolbar> <md-toolbar layout="row" layout-wrap> <md-button ng-repeat="scaleType in scale.scaleTypes" ng-class="{\'md-raised\' : scale.getScaleType() -- scaleType}" ng-click="scale.setScaleType(scaleType)">{{scaleType}}</md-button> </md-toolbar> </div>'),a.put("views/pickerdialog.html",'<md-dialog aria-label="Scales" flex="80"> <form> <md-toolbar> <div class="md-toolbar-tools"> <h2>Scale Picker</h2> <span flex></span> <md-button class="md-icon-button" ng-click="cancel()"> <i class="material-icons">close</i> </md-button> </div> </md-toolbar> <md-dialog-content> <md-tabs md-dynamic-height md-border-bottom> <md-tab label="Tonic"> <md-content class="md-padding"> <md-toolbar layout="row" layout-wrap layout-align="center center"> <md-button ng-repeat="tonic in scaler.getTonics()" ng-class="{\'md-raised\' : scaler.getTonic() == tonic}" ng-click="scaler.setTonic(tonic)">{{tonic}}</md-button> </md-toolbar> <md-toolbar layout="row" layout-align="center center"> <md-button class="md-accent" flex="20" ng-repeat="accidental in scaler.getAccidentals()" ng-class="{\'md-raised\' : scaler.getAccidental().value == accidental.value}" ng-click="scaler.setAccidental(accidental)">{{accidental.name}}</md-button> </md-toolbar> </md-content> </md-tab> <md-tab label="Mode"> <md-content class="md-padding"> <md-toolbar layout="row" layout-wrap> <md-button ng-repeat="scaleType in scaler.getScaleTypes()" ng-class="{\'md-raised\' : scaler.getScaleType() == scaleType}" ng-click="scaler.setScaleType(scaleType)">{{scaleType}}</md-button> </md-toolbar> </md-content> </md-tab> </md-tabs> </md-dialog-content> </form> </md-dialog>'),a.put("views/scale.html",'<div layout="row" layout-align="center center"> <div layout="column"> <!-- <ng-include src="\'views/picker.html\'"></ng-include> --> <div layout="row" layout-align="center center"> <md-whiteframe class="md-whiteframe-12dp" layout-margin layout-align="center center"> <div class="page-container"> <div class="page"> <h1>{{currentScale.tonic}}{{currentScale.accidental.value}} {{currentScale.scaleType}}</h1> </div> <kor-scale layout-align="center center"></kor-scale> </div> </md-whiteframe> </div> </div> </div>'),a.put("views/sidenav.html",'<div> <div md-swipe-left="closeLeftMenu()"> <md-sidenav md-component-id="left" class="md-sidenav-left"> <md-toolbar class="md-primary" layout="row" layout-align="start center"> <img src="images/kording-logo.457caec0.png" class="logo" alt="kording" style="height: 40px; width: auto"> <span>Kording</span> </md-toolbar> <md-content> <md-list ng-click="closeLeftMenu()"> <div ng-repeat="navLink in tool.navLinks"> <md-list-item> <md-button ng-href="{{navLink.href}}" class="md-hue-2">{{navLink.label}}</md-button> </md-list-item> <md-divider ng-if="!$last"></md-divider> </div> </md-list> </md-content> </md-sidenav> </div> </div>')}]);