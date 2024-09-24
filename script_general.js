(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"class":"Player","minHeight":0,"start":"this.init()","gap":10,"minWidth":0,"id":"rootPlayer","propagateClick":false,"data":{"textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false},"defaultLocale":"es","locales":{"es":"locale/es.txt"},"displayTooltipInTouchScreens":true,"name":"Player396","history":{}},"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","layout":"absolute","scrollBarMargin":2,"hash": "6311ab21291afad7ff853ccf8cb38d9de9c791f00a2cc14caf39083e672a0215", "definitions": [{"initialPosition":{"pitch":-3.19,"class":"PanoramaCameraPosition","yaw":-171.74},"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_28D916E4_24FE_B532_41BF_FA4866662EBF_camera"},{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation"},{"toolTipFontFamily":"Arial","toolTipPaddingRight":6,"class":"ViewerArea","toolTipPaddingTop":4,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","minHeight":50,"minWidth":100,"playbackBarHeadShadow":true,"subtitlesFontColor":"#FFFFFF","propagateClick":false,"data":{"name":"Main Viewer"},"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadBorderColor":"#000000","firstTransitionDuration":0,"subtitlesFontFamily":"Arial","playbackBarBorderSize":0,"playbackBarBottom":5,"playbackBarBackgroundOpacity":1,"toolTipBackgroundColor":"#F6F6F6","toolTipPaddingLeft":6,"progressBackgroundColor":["#000000"],"progressBottom":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressHeight":2,"progressBorderSize":0,"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","subtitlesTextShadowHorizontalLength":1,"playbackBarHeight":10,"toolTipShadowColor":"#333138","vrPointerColor":"#FFFFFF","progressBarBorderRadius":2,"vrPointerSelectionColor":"#FF6600","progressBarBorderSize":0,"playbackBarHeadWidth":6,"toolTipTextShadowColor":"#000000","playbackBarProgressBorderSize":0,"toolTipBorderColor":"#767676","playbackBarBackgroundColorDirection":"vertical","progressBackgroundColorRatios":[0],"subtitlesTop":0,"playbackBarProgressBorderRadius":0,"subtitlesBackgroundColor":"#000000","progressBorderRadius":2,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"id":"MainViewer","vrPointerSelectionTime":2000,"progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","progressLeft":"33%","progressRight":"33%","toolTipFontSize":"1.11vmin","subtitlesBottom":50,"subtitlesTextShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesGap":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","subtitlesTextShadowVerticalLength":1,"playbackBarLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"subtitlesTextShadowOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderSize":0,"playbackBarBorderRadius":0,"progressBorderColor":"#000000","height":"100%","subtitlesBackgroundOpacity":0.2},{"items":[{"camera":"this.panorama_28D916E4_24FE_B532_41BF_FA4866662EBF_camera","class":"PanoramaPlayListItem","media":"this.panorama_28D916E4_24FE_B532_41BF_FA4866662EBF","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0_camera","class":"PanoramaPlayListItem","media":"this.panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList","id":"mainPlayList"},{"label":trans('panorama_28D916E4_24FE_B532_41BF_FA4866662EBF.label'),"frames":[{"thumbnailUrl":"media/panorama_28D916E4_24FE_B532_41BF_FA4866662EBF_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"url":"media/panorama_28D916E4_24FE_B532_41BF_FA4866662EBF_0/{face}/0/{row}_{column}.jpg","rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","height":2048},{"width":6144,"url":"media/panorama_28D916E4_24FE_B532_41BF_FA4866662EBF_0/{face}/1/{row}_{column}.jpg","rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","height":1024},{"width":3072,"url":"media/panorama_28D916E4_24FE_B532_41BF_FA4866662EBF_0/{face}/2/{row}_{column}.jpg","rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512}]}}],"hfovMax":130,"class":"Panorama","id":"panorama_28D916E4_24FE_B532_41BF_FA4866662EBF","data":{"label":"lobby1"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_36685691_24F9_5512_41B2_5D55E3575F63"},"yaw":63.88,"distance":3.06,"select":"this.overlay_36685691_24F9_5512_41B2_5D55E3575F63.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0","backwardYaw":104.71}],"hfov":360,"vfov":180,"hfovMin":"135%","overlays":["this.overlay_36685691_24F9_5512_41B2_5D55E3575F63"],"thumbnailUrl":"media/panorama_28D916E4_24FE_B532_41BF_FA4866662EBF_t.jpg"},{"label":trans('panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0.label'),"frames":[{"thumbnailUrl":"media/panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0_t.jpg","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"width":12288,"url":"media/panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0_0/{face}/0/{row}_{column}.jpg","rowCount":4,"colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","height":2048},{"width":6144,"url":"media/panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0_0/{face}/1/{row}_{column}.jpg","rowCount":2,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","height":1024},{"width":3072,"url":"media/panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0_0/{face}/2/{row}_{column}.jpg","rowCount":1,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"height":512}]}}],"hfovMax":130,"class":"Panorama","id":"panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0","data":{"label":"lobby2"},"adjacentPanoramas":[{"data":{"overlayID":"overlay_3535473E_24FA_D30E_4194_AC4F84FF46C9"},"yaw":104.71,"distance":4.66,"select":"this.overlay_3535473E_24FA_D30E_4194_AC4F84FF46C9.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_28D916E4_24FE_B532_41BF_FA4866662EBF","backwardYaw":63.88}],"hfov":360,"vfov":180,"hfovMin":"135%","overlays":["this.overlay_3535473E_24FA_D30E_4194_AC4F84FF46C9"],"thumbnailUrl":"media/panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0_t.jpg"},{"initialPosition":{"pitch":-3.19,"class":"PanoramaCameraPosition","yaw":-78.06},"enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_28F6298D_24FE_DFF2_4191_CCE5E493FCC0_camera"},{"data":{"label":"Arrow 03c","hasPanoramaAction":true},"enabledInCardboard":true,"items":[{"pitch":-29.03,"scaleMode":"fit_inside","yaw":63.88,"distance":100,"image":"this.AnimatedImageResource_3124C667_24EA_D53E_41B4_33A59A5767F5","hfov":33.15,"vfov":17.53,"data":{"label":"Arrow 03c"},"class":"HotspotPanoramaOverlayImage","roll":-24.46}],"maps":[],"id":"overlay_36685691_24F9_5512_41B2_5D55E3575F63","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_3655A6B1_24F9_5512_4178_DF99DD5041CD"],"useHandCursor":true},{"data":{"label":"Arrow 03c","hasPanoramaAction":true},"enabledInCardboard":true,"items":[{"pitch":-20.05,"yaw":104.71,"distance":100,"image":"this.AnimatedImageResource_3124B667_24EA_D53E_41AD_11BBEFDA95F6","hfov":36.91,"vfov":28.16,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Arrow 03c"}}],"maps":[],"id":"overlay_3535473E_24FA_D30E_4194_AC4F84FF46C9","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_352CE74E_24FA_D30E_41AF_647E43AF12D0"],"useHandCursor":true},{"frameCount":30,"levels":[{"width":925,"url":"media/res_352A187A_24E7_5D16_41AF_31B8BAE9379F_0.png","class":"ImageResourceLevel","height":420}],"frameDuration":41,"finalFrame":"first","rowCount":6,"class":"AnimatedImageResource","colCount":5,"id":"AnimatedImageResource_3124C667_24EA_D53E_41B4_33A59A5767F5"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_3655A6B1_24F9_5512_4178_DF99DD5041CD","mapColor":"any"},{"frameCount":30,"levels":[{"width":925,"url":"media/res_352A187A_24E7_5D16_41AF_31B8BAE9379F_0.png","class":"ImageResourceLevel","height":420}],"frameDuration":41,"finalFrame":"first","rowCount":6,"class":"AnimatedImageResource","colCount":5,"id":"AnimatedImageResource_3124B667_24EA_D53E_41AD_11BBEFDA95F6"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_352CE74E_24FA_D30E_41AF_647E43AF12D0","mapColor":"any"}],"backgroundColorRatios":[0],"scripts":{"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"openLink":TDV.Tour.Script.openLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"playAudioList":TDV.Tour.Script.playAudioList,"clone":TDV.Tour.Script.clone,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPixels":TDV.Tour.Script.getPixels,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getComponentByName":TDV.Tour.Script.getComponentByName,"setValue":TDV.Tour.Script.setValue,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"init":TDV.Tour.Script.init,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"initQuiz":TDV.Tour.Script.initQuiz,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"startMeasurement":TDV.Tour.Script.startMeasurement,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"showWindow":TDV.Tour.Script.showWindow,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"registerKey":TDV.Tour.Script.registerKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"cloneBindings":TDV.Tour.Script.cloneBindings,"historyGoBack":TDV.Tour.Script.historyGoBack,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizStart":TDV.Tour.Script.quizStart,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"toggleVR":TDV.Tour.Script.toggleVR,"shareSocial":TDV.Tour.Script.shareSocial,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizFinish":TDV.Tour.Script.quizFinish,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"resumePlayers":TDV.Tour.Script.resumePlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"disableVR":TDV.Tour.Script.disableVR,"mixObject":TDV.Tour.Script.mixObject,"enableVR":TDV.Tour.Script.enableVR,"textToSpeech":TDV.Tour.Script.textToSpeech,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlays":TDV.Tour.Script.getOverlays,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getKey":TDV.Tour.Script.getKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"translate":TDV.Tour.Script.translate,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"createTween":TDV.Tour.Script.createTween,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setLocale":TDV.Tour.Script.setLocale,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeJS":TDV.Tour.Script.executeJS,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList},"defaultMenu":["fullscreen","mute","rotation"],"width":"100%","watermark":false,"height":"100%","children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.15.js.map
})();
//Generated with v2024.0.15, Tue Sep 24 2024