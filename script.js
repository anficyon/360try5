TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
       "yaw": 7.28,
       "backwardYaw": -171.41,
       "distance": 1
      }
     ],
     "cardboardMenu": {
      "fontColor": "#FFFFFF",
      "fontFamily": "Arial",
      "selectedBackgroundColor": "#202020",
      "rollOverOpacity": 0.8,
      "label": "Media",
      "backgroundColor": "#404040",
      "id": "Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
      "rollOverBackgroundColor": "#000000",
      "opacity": 0.4,
      "class": "Menu",
      "children": [
       {
        "class": "MenuItem",
        "label": "1 -XIX",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       },
       {
        "class": "MenuItem",
        "label": "2-XIX",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       },
       {
        "class": "MenuItem",
        "label": "3-XIX",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       },
       {
        "class": "MenuItem",
        "label": "4-XIX",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       },
       {
        "class": "MenuItem",
        "label": "5-XIX",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       },
       {
        "class": "MenuItem",
        "label": "1-1902",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       },
       {
        "class": "MenuItem",
        "label": "2-1902",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       },
       {
        "class": "MenuItem",
        "label": "3-1902",
        "click": "this.mainPlayList.set('selectedIndex', 7)"
       },
       {
        "class": "MenuItem",
        "label": "4-1902",
        "click": "this.mainPlayList.set('selectedIndex', 8)"
       },
       {
        "class": "MenuItem",
        "label": "5-1902",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       },
       {
        "class": "MenuItem",
        "label": "6-1902",
        "click": "this.mainPlayList.set('selectedIndex', 10)"
       },
       {
        "class": "MenuItem",
        "label": "7-1902",
        "click": "this.mainPlayList.set('selectedIndex', 11)"
       },
       {
        "class": "MenuItem",
        "label": "8-1902",
        "click": "this.mainPlayList.set('selectedIndex', 12)"
       },
       {
        "class": "MenuItem",
        "label": "9-1902",
        "click": "this.mainPlayList.set('selectedIndex', 13)"
       },
       {
        "class": "MenuItem",
        "label": "10-1902",
        "click": "this.mainPlayList.set('selectedIndex', 14)"
       },
       {
        "class": "MenuItem",
        "label": "1-1909",
        "click": "this.mainPlayList.set('selectedIndex', 15)"
       },
       {
        "class": "MenuItem",
        "label": "2-1909",
        "click": "this.mainPlayList.set('selectedIndex', 16)"
       },
       {
        "class": "MenuItem",
        "label": "3-1909",
        "click": "this.mainPlayList.set('selectedIndex', 17)"
       },
       {
        "class": "MenuItem",
        "label": "4-1909",
        "click": "this.mainPlayList.set('selectedIndex', 18)"
       },
       {
        "class": "MenuItem",
        "label": "5-1909",
        "click": "this.mainPlayList.set('selectedIndex', 19)"
       }
      ],
      "selectedFontColor": "#FFFFFF",
      "rollOverFontColor": "#FFFFFF"
     },
     "partial": false,
     "id": "panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
     "pitch": 0,
     "hfov": 360,
     "label": "2-XIX",
     "thumbnailUrl": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_t.jpg",
     "hfovMax": 120,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_8584253D_90FB_E020_41B2_F81B8DAD4ED4",
         "maps": [
          {
           "hfov": 5.51,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 7.28,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 2.86
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9, this.camera_9BA5BFC8_9179_4E13_41DD_A94081D6E7AC); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "hfov": 5.51,
           "yaw": 7.28,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 2.86
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_84553870_90FA_E020_41D2_38967BDBE286",
         "maps": [
          {
           "hfov": 5.52,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -170.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -7.06
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "items": [
          {
           "hfov": 5.52,
           "yaw": -170.55,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -7.06
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17.jpeg"
         }
        ]
       }
      }
     ],
     "mapLocations": [
      {
       "x": 251.05,
       "y": 534.26,
       "class": "PanoramaMapLocation",
       "angle": 161.73,
       "map": {
        "initialZoomFactor": 1,
        "fieldOfViewOverlayInsideOpacity": 0.4,
        "fieldOfViewOverlayOutsideColor": "#FF0000",
        "maximumZoomFactor": 1.2,
        "width": 443,
        "id": "map_9EAEC64D_90AA_6062_41DB_03640F689429",
        "minimumZoomFactor": 0.5,
        "height": 1058,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1058,
           "class": "ImageResourceLevel",
           "width": 443,
           "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429.png"
          },
          {
           "height": 529,
           "class": "ImageResourceLevel",
           "grayscale": true,
           "width": 221,
           "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_lq.png"
          }
         ]
        },
        "fieldOfViewOverlayRadiusScale": 0.08,
        "label": "Siglo XIX",
        "overlays": [
         {
          "id": "overlay_81EC3ED9_90EE_2060_41DD_753AA6615E7A",
          "map": {
           "offsetY": 0,
           "x": 307.03,
           "width": 39.98,
           "y": 922.67,
           "height": 39,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 19,
              "class": "ImageResourceLevel",
              "width": 19,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_0_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 39,
           "x": 306.76,
           "y": 922.52,
           "width": 39.98,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_0.png"
             }
            ]
           }
          },
          "rollOverDisplay": false,
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 0)"
           }
          ],
          "useHandCursor": true
         },
         {
          "id": "overlay_8294D3C8_90EA_6061_41DC_84493A4623C9",
          "map": {
           "offsetY": 0,
           "x": 231.74,
           "width": 39,
           "y": 515.09,
           "height": 39,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 19,
              "class": "ImageResourceLevel",
              "width": 19,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_1_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 39,
           "x": 231.55,
           "y": 514.76,
           "width": 39,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_1.png"
             }
            ]
           }
          },
          "rollOverDisplay": false,
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 1)"
           }
          ],
          "useHandCursor": true
         },
         {
          "id": "overlay_82CEDF78_90EB_E021_41D0_A229264C5B59",
          "map": {
           "offsetY": 0,
           "x": 169,
           "width": 39,
           "y": 201.98,
           "height": 39,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 19,
              "class": "ImageResourceLevel",
              "width": 19,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_2_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 39,
           "x": 168.72,
           "y": 201.75,
           "width": 39,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_2.png"
             }
            ]
           }
          },
          "rollOverDisplay": false,
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 2)"
           }
          ],
          "useHandCursor": true
         },
         {
          "id": "overlay_81E2A279_90EA_2020_41AB_4FA15D4F3C92",
          "map": {
           "offsetY": 0,
           "x": 95.17,
           "width": 39,
           "y": 55.85,
           "height": 39,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 19,
              "class": "ImageResourceLevel",
              "width": 19,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_3_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 39,
           "x": 94.91,
           "y": 55.55,
           "width": 39,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_3.png"
             }
            ]
           }
          },
          "rollOverDisplay": false,
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 3)"
           }
          ],
          "useHandCursor": true
         },
         {
          "id": "overlay_82858E69_90EA_2020_4152_7E18A07C9D03",
          "map": {
           "offsetY": 0,
           "x": 52.05,
           "width": 39,
           "y": 0,
           "height": 39,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 19,
              "class": "ImageResourceLevel",
              "width": 19,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_4_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "image": {
           "height": 39,
           "x": 51.87,
           "y": 0,
           "width": 39,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 39,
              "class": "ImageResourceLevel",
              "width": 39,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_4.png"
             }
            ]
           }
          },
          "rollOverDisplay": false,
          "areas": [
           {
            "class": "HotspotMapOverlayArea",
            "mapColor": "#FF0000",
            "click": "this.mainPlayList.set('selectedIndex', 4)"
           }
          ],
          "useHandCursor": true
         }
        ],
        "thumbnailUrl": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_t.png",
        "scaleMode": "fit_inside",
        "fieldOfViewOverlayOutsideOpacity": 0.2,
        "class": "Map",
        "fieldOfViewOverlayInsideColor": "#00FFFF"
       }
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -171.41,
    "backwardYaw": 7.28,
    "distance": 1
   }
  ],
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
  "pitch": 0,
  "hfov": 360,
  "label": "1 -XIX",
  "thumbnailUrl": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_85F6A209_90FA_23E0_41E1_684231201E01",
      "maps": [
       {
        "hfov": 4.86,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -171.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.6
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17, this.camera_9B861006_9179_521F_41D6_10432094A391); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "hfov": 4.86,
        "yaw": -171.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 81,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -4.6
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9.jpeg"
      }
     ]
    }
   }
  ],
  "mapLocations": [
   {
    "x": 326.75,
    "y": 942.02,
    "class": "PanoramaMapLocation",
    "angle": 126.02,
    "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "buttonCardboardView": "this.IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4",
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "toolTipFontFamily": "Arial",
   "minWidth": 1,
   "paddingRight": 0,
   "toolTipPaddingLeft": 6,
   "transitionMode": "fade_out_fade_in",
   "toolTipPaddingRight": 6,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "toolTipShadowColor": "#333333",
   "shadow": false,
   "playbackBarHeadBorderRadius": 0,
   "progressBorderColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarLeft": 0,
   "paddingBottom": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 0,
   "playbackBarBorderSize": 0,
   "progressBorderSize": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "paddingTop": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBorderRadius": 0,
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadHeight": 15,
   "progressBarBorderRadius": 0,
   "progressOpacity": 1,
   "toolTipShadowOpacity": 1,
   "progressBarBorderSize": 0,
   "class": "ViewerArea",
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarProgressBorderColor": "#000000",
   "minHeight": 1,
   "width": "89.796%",
   "playbackBarHeadShadowBlurRadius": 3,
   "borderSize": 0,
   "toolTipPaddingBottom": 4,
   "progressBarOpacity": 1,
   "progressLeft": 0,
   "playbackBarHeight": 10,
   "paddingLeft": 0,
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBackgroundColorRatios": [
    0
   ],
   "borderRadius": 0,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBarBorderColor": "#000000",
   "toolTipOpacity": 1,
   "playbackBarBottom": 0,
   "height": "88.947%",
   "progressBottom": 2,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipShadowSpread": 0,
   "playbackBarProgressOpacity": 1,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontSize": 12,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadow": true,
   "toolTipShadowBlurRadius": 3,
   "progressHeight": 10,
   "toolTipShadowVerticalLength": 0,
   "playbackBarProgressBorderSize": 0,
   "bottom": "0%",
   "toolTipBorderSize": 1,
   "id": "MapViewer",
   "playbackBarHeadWidth": 6,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarBackgroundOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipBorderRadius": 3,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarOpacity": 1,
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarRight": 0,
   "toolTipFontColor": "#606060",
   "toolTipPaddingTop": 4,
   "toolTipTextShadowOpacity": 0,
   "toolTipFontWeight": "normal",
   "progressBarBackgroundColorRatios": [
    0
   ],
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarHeadOpacity": 1,
   "progressBackgroundOpacity": 1,
   "right": "4.76%"
  },
  "movementMode": "constrained"
 },
 {
  "id": "panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
 {
  "id": "panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
          "yaw": -3.69,
          "backwardYaw": 163.65,
          "distance": 1
         }
        ],
        "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
        "partial": false,
        "id": "panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
        "pitch": 0,
        "hfov": 360,
        "label": "5-XIX",
        "thumbnailUrl": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_t.jpg",
        "hfovMax": 120,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "enabledInCardboard": true,
            "id": "overlay_8557F3EE_90EB_E021_41CF_493986FDA0F4",
            "maps": [
             {
              "hfov": 5.48,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -3.69,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "class": "ImageResourceLevel",
                 "width": 46,
                 "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.1
             }
            ],
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896, this.camera_9B9E1FD8_9179_4E32_41DA_C73B2B8F9F7B); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "items": [
             {
              "hfov": 5.48,
              "yaw": -3.69,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 79,
                 "class": "ImageResourceLevel",
                 "width": 92,
                 "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -7.1
             }
            ]
           }
          ],
          "thumbnailUrl": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3000,
             "class": "ImageResourceLevel",
             "width": 6000,
             "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD.jpeg"
            }
           ]
          }
         }
        ],
        "mapLocations": [
         {
          "x": 71.37,
          "y": 19.5,
          "class": "PanoramaMapLocation",
          "angle": 153.43,
          "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 163.65,
       "backwardYaw": -3.69,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
       "yaw": 4.42,
       "backwardYaw": 176.52,
       "distance": 1
      }
     ],
     "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
     "partial": false,
     "id": "panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
     "pitch": 0,
     "hfov": 360,
     "label": "4-XIX",
     "thumbnailUrl": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_t.jpg",
     "hfovMax": 120,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "enabledInCardboard": true,
         "id": "overlay_8512D6B4_90F5_E021_41C3_A4DD61D21517",
         "maps": [
          {
           "hfov": 5.49,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 4.42,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -5.58
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6, this.camera_9BA8DFB8_9179_4E73_41CD_6F67BFFDCFC4); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "hfov": 5.49,
           "yaw": 4.42,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -5.58
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "id": "overlay_86B783D6_90EA_2060_41C8_7AF662F3E5F8",
         "maps": [
          {
           "hfov": 6.11,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 163.65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 58,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.55
          }
         ],
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD, this.camera_9BB56F99_9179_4E35_41E1_C3B65E529A41); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "items": [
          {
           "hfov": 6.11,
           "yaw": 163.65,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 116,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -28.55
          }
         ]
        }
       ],
       "thumbnailUrl": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896.jpeg"
         }
        ]
       }
      }
     ],
     "mapLocations": [
      {
       "x": 114.41,
       "y": 75.05,
       "class": "PanoramaMapLocation",
       "angle": 152.35,
       "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 176.52,
    "backwardYaw": 4.42,
    "distance": 1
   }
  ],
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
  "pitch": 0,
  "hfov": 360,
  "label": "3-XIX",
  "thumbnailUrl": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "enabledInCardboard": true,
      "id": "overlay_85F0FC9B_90F6_60E7_41BC_5A099E427816",
      "maps": [
       {
        "hfov": 5.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 7.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 46,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.71
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "hfov": 5.5,
        "yaw": 7.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 92,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -4.71
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "id": "overlay_850C4CA1_90F7_E020_41D4_1106D65E970A",
      "maps": [
       {
        "hfov": 6.74,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 176.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 57,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.61
       }
      ],
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896, this.camera_9B8BDFE7_9179_4E1D_41DF_C7B92C35EE07); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "items": [
       {
        "hfov": 6.74,
        "yaw": 176.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 116,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -14.61
       }
      ]
     }
    ],
    "thumbnailUrl": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6.jpeg"
      }
     ]
    }
   }
  ],
  "mapLocations": [
   {
    "x": 188.22,
    "y": 221.25,
    "class": "PanoramaMapLocation",
    "angle": 168.69,
    "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
 {
  "id": "panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
 {
  "id": "panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
  "pitch": 0,
  "hfov": 360,
  "label": "1-1902",
  "thumbnailUrl": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
  "pitch": 0,
  "hfov": 360,
  "label": "2-1902",
  "thumbnailUrl": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
  "pitch": 0,
  "hfov": 360,
  "label": "3-1902",
  "thumbnailUrl": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
  "pitch": 0,
  "hfov": 360,
  "label": "4-1902",
  "thumbnailUrl": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
  "pitch": 0,
  "hfov": 360,
  "label": "5-1902",
  "thumbnailUrl": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
  "pitch": 0,
  "hfov": 360,
  "label": "6-1902",
  "thumbnailUrl": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
  "pitch": 0,
  "hfov": 360,
  "label": "7-1902",
  "thumbnailUrl": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
  "pitch": 0,
  "hfov": 360,
  "label": "8-1902",
  "thumbnailUrl": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
  "pitch": 0,
  "hfov": 360,
  "label": "9-1902",
  "thumbnailUrl": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918",
  "pitch": 0,
  "hfov": 360,
  "label": "10-1902",
  "thumbnailUrl": "media/panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
  "pitch": 0,
  "hfov": 360,
  "label": "1-1909",
  "thumbnailUrl": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
  "pitch": 0,
  "hfov": 360,
  "label": "2-1909",
  "thumbnailUrl": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
  "pitch": 0,
  "hfov": 360,
  "label": "3-1909",
  "thumbnailUrl": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
  "pitch": 0,
  "hfov": 360,
  "label": "4-1909",
  "thumbnailUrl": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
  "partial": false,
  "id": "panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
  "pitch": 0,
  "hfov": 360,
  "label": "5-1909",
  "thumbnailUrl": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_t.jpg",
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8.jpeg"
      }
     ]
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "id": "panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_9B8E3F7A_9179_4EF7_41D7_9B3F040D2D27",
    "media": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9B8E3F7A_9179_4EF7_41D7_9B3F040D2D27, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_9B81AF7A_9179_4EF7_4176_0C013EBB970A",
    "media": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9B81AF7A_9179_4EF7_4176_0C013EBB970A, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_9BC16F7A_9179_4EF7_41AF_C4C56B494BB5",
    "media": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9BC16F7A_9179_4EF7_41AF_C4C56B494BB5, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_9BC13F7A_9179_4EF7_41C7_9ED2ACB383A2",
    "media": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9BC13F7A_9179_4EF7_41C7_9ED2ACB383A2, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_9BC0FF7A_9179_4EF7_41D8_BBE626FD66B9",
    "media": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_9BC0FF7A_9179_4EF7_41D8_BBE626FD66B9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
    "camera": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera"
   }
  ]
 },
 "this.map_9EAEC64D_90AA_6062_41DB_03640F689429",
 {
  "fieldOfViewOverlayRadiusScale": 0.3,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 1104,
     "class": "ImageResourceLevel",
     "width": 425,
     "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83.png"
    },
    {
     "height": 552,
     "class": "ImageResourceLevel",
     "grayscale": true,
     "width": 212,
     "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_lq.png"
    }
   ]
  },
  "scaleMode": "fit_inside",
  "initialZoomFactor": 1,
  "label": "1902",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "maximumZoomFactor": 1.2,
  "thumbnailUrl": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_t.png",
  "id": "map_9F8D8EC4_90AA_6061_41D7_7A408258BB83",
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "height": 1104,
  "class": "Map",
  "width": 425,
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "fieldOfViewOverlayRadiusScale": 0.3,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 1081,
     "class": "ImageResourceLevel",
     "width": 430,
     "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D.png"
    },
    {
     "height": 540,
     "class": "ImageResourceLevel",
     "grayscale": true,
     "width": 215,
     "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_lq.png"
    }
   ]
  },
  "scaleMode": "fit_inside",
  "initialZoomFactor": 1,
  "label": "1909",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "maximumZoomFactor": 1.2,
  "thumbnailUrl": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_t.png",
  "id": "map_9EB350F4_90AA_6020_41DC_A205F828306D",
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "height": 1081,
  "class": "Map",
  "width": 430,
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "fieldOfViewOverlayRadiusScale": 0.3,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 1392,
     "class": "ImageResourceLevel",
     "width": 532,
     "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE.png"
    },
    {
     "height": 696,
     "class": "ImageResourceLevel",
     "grayscale": true,
     "width": 266,
     "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_lq.png"
    }
   ]
  },
  "scaleMode": "fit_inside",
  "initialZoomFactor": 1,
  "label": "1930",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "maximumZoomFactor": 1.2,
  "thumbnailUrl": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_t.png",
  "id": "map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE",
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "height": 1392,
  "class": "Map",
  "width": 532,
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "fieldOfViewOverlayRadiusScale": 0.3,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 1401,
     "class": "ImageResourceLevel",
     "width": 539,
     "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7.png"
    },
    {
     "height": 700,
     "class": "ImageResourceLevel",
     "grayscale": true,
     "width": 269,
     "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_lq.png"
    }
   ]
  },
  "scaleMode": "fit_inside",
  "initialZoomFactor": 1,
  "label": "2018",
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "maximumZoomFactor": 1.2,
  "thumbnailUrl": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_t.png",
  "id": "map_9EB11478_90AA_6021_41E1_833B5B7EE0C7",
  "minimumZoomFactor": 0.5,
  "fieldOfViewOverlayOutsideOpacity": 0,
  "height": 1401,
  "class": "Map",
  "width": 539,
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "class": "PlayList",
  "id": "DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EB350F4_90AA_6020_41DC_A205F828306D",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EB11478_90AA_6021_41E1_833B5B7EE0C7",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 0, 1)",
    "camera": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 1, 2)",
    "camera": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 2, 3)",
    "camera": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 3, 4)",
    "camera": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 4, 5)",
    "camera": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 5, 6)",
    "camera": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 6, 7)",
    "camera": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 7, 8)",
    "camera": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 8, 9)",
    "camera": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 9, 10)",
    "camera": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 10, 11)",
    "camera": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 11, 12)",
    "camera": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 12, 13)",
    "camera": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 13, 14)",
    "camera": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 14, 15)",
    "camera": "this.panorama_84EA22D5_8DD6_CEAE_41BC_93CB26161918_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 15, 16)",
    "camera": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 16, 17)",
    "camera": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 17, 18)",
    "camera": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 18, 19)",
    "camera": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist, 19, 0)",
    "camera": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera"
   }
  ]
 },
 "this.Menu_9BBA6F89_9179_4E15_41DC_061CE5A3AFBB",
 {
  "id": "camera_9BB56F99_9179_4E35_41E1_C3B65E529A41",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.31,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9BA8DFB8_9179_4E73_41CD_6F67BFFDCFC4",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.48,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9BA5BFC8_9179_4E13_41DD_A94081D6E7AC",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.59,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9B9E1FD8_9179_4E32_41DA_C73B2B8F9F7B",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.35,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9B8BDFE7_9179_4E1D_41DF_C7B92C35EE07",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_9B861006_9179_521F_41D6_10432094A391",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "minWidth": 100,
  "toolTipFontWeight": "normal",
  "paddingRight": 0,
  "toolTipPaddingLeft": 6,
  "transitionMode": "blending",
  "toolTipPaddingRight": 6,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "toolTipShadowColor": "#333333",
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "progressBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarLeft": 0,
  "paddingBottom": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "progressBorderSize": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadShadowVerticalLength": 0,
  "class": "ViewerArea",
  "progressBarBorderRadius": 0,
  "progressOpacity": 1,
  "toolTipShadowOpacity": 1,
  "progressBarBorderSize": 0,
  "playbackBarHeadHeight": 15,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "minHeight": 50,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "borderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarOpacity": 1,
  "progressLeft": 0,
  "playbackBarHeight": 10,
  "paddingLeft": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBackgroundColorRatios": [
   0
  ],
  "borderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarBorderColor": "#000000",
  "toolTipOpacity": 1,
  "playbackBarBottom": 5,
  "height": "100%",
  "progressBottom": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontSize": 12,
  "top": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderSize": 0,
  "progressHeight": 10,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "id": "MainViewer",
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarRight": 0,
  "toolTipFontColor": "#606060",
  "toolTipPaddingTop": 4,
  "progressBackgroundOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowOpacity": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarHeadOpacity": 1,
  "left": 0
 },
 {
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "verticalAlign": "top",
  "paddingRight": 0,
  "backgroundOpacity": 0.16,
  "minHeight": 1,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "children": [
   {
    "verticalAlign": "top",
    "minWidth": 1,
    "paddingRight": 0,
    "backgroundOpacity": 1,
    "minHeight": 1,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "backgroundColorDirection": "vertical",
    "borderSize": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "width": "71.563%",
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "borderRadius": 0,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "shadow": false,
    "children": [
     {
      "class": "WebFrame",
      "minWidth": 1,
      "paddingRight": 0,
      "scrollEnabled": true,
      "backgroundOpacity": 1,
      "minHeight": 1,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "backgroundColorDirection": "vertical",
      "borderSize": 0,
      "height": "100%",
      "url": "https://sketchfab.com/models/a2b1588756994e33bc46eb32d6caaf73/embed",
      "paddingLeft": 0,
      "borderRadius": 0,
      "width": "99.873%",
      "shadow": false,
      "top": "0%",
      "paddingBottom": 0,
      "id": "WebFrame_9BA66844_906A_2061_41C2_C0313C07A6F2",
      "insetBorder": false,
      "paddingTop": 0,
      "backgroundColorRatios": [
       0
      ],
      "left": "0%"
     }
    ],
    "height": "77.632%",
    "gap": 10,
    "scrollBarColor": "#000000",
    "paddingBottom": 0,
    "bottom": "11.02%",
    "id": "Container_9D38DE1F_906A_E3E0_41DC_6DF5B4C0F3B0",
    "layout": "absolute",
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "overflow": "scroll",
    "backgroundColorRatios": [
     0,
     1
    ],
    "right": "13.95%",
    "class": "Container"
   }
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "borderRadius": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "shadow": false,
  "height": "100%",
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_9D9B077E_9076_2021_41CC_D28EC763E3D2",
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "overflow": "scroll",
  "backgroundColorRatios": [
   0,
   1
  ],
  "left": "0%"
 },
 {
  "verticalAlign": "top",
  "minWidth": 1,
  "paddingRight": 0,
  "backgroundOpacity": 0.3,
  "minHeight": 1,
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "backgroundColorDirection": "vertical",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "width": "13.859%",
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "borderRadius": 0,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "shadow": false,
  "children": [
   {
    "class": "DropDown",
    "height": "9.132%",
    "minWidth": 150,
    "paddingRight": 5,
    "backgroundOpacity": 0.84,
    "minHeight": 20,
    "backgroundColor": [
     "#333333",
     "#000000"
    ],
    "backgroundColorDirection": "vertical",
    "popUpFontColor": "#000000",
    "borderSize": 0,
    "arrowBeforeLabel": false,
    "fontSize": 14,
    "popUpBackgroundOpacity": 0.84,
    "fontFamily": "Arial",
    "paddingLeft": 5,
    "popUpShadowBlurRadius": 6,
    "textDecoration": "none",
    "borderRadius": 4,
    "selectedPopUpBackgroundColor": "#333333",
    "popUpShadowOpacity": 0,
    "gap": 0,
    "fontColor": "#FFFFFF",
    "fontStyle": "normal",
    "shadow": false,
    "playList": "this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist",
    "fontWeight": "normal",
    "top": "0.87%",
    "popUpShadow": false,
    "popUpShadowColor": "#000000",
    "popUpShadowSpread": 1,
    "paddingBottom": 0,
    "width": "100%",
    "id": "DropDown_9EC8557E_9056_2021_41D3_6B0025F01655",
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "popUpBackgroundColor": "#999999",
    "paddingTop": 0,
    "selectedPopUpFontColor": "#FFFFFF",
    "arrowColor": "#FFFFFF",
    "backgroundColorRatios": [
     0,
     1
    ],
    "popUpBorderRadius": 0,
    "left": "0%"
   },
   "this.MapViewer"
  ],
  "height": "61.02%",
  "top": "1.97%",
  "scrollBarColor": "#000000",
  "paddingBottom": 0,
  "layout": "absolute",
  "id": "Container_9EE52C46_906A_2061_41AD_F1522FBDFB45",
  "gap": 10,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "overflow": "scroll",
  "backgroundColorRatios": [
   0,
   1
  ],
  "right": "1.36%",
  "class": "Container"
 },
 {
  "class": "IconButton",
  "minWidth": 1,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "mode": "push",
  "minHeight": 1,
  "width": 38,
  "transparencyActive": false,
  "height": 26,
  "maxHeight": 26,
  "borderSize": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "shadow": false,
  "cursor": "hand",
  "paddingBottom": 0,
  "bottom": "28.95%",
  "id": "IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4",
  "paddingTop": 0,
  "iconURL": "skin/IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4.png",
  "maxWidth": 38,
  "right": "1%"
 },
 {
  "verticalAlign": "top",
  "scrollBarOpacity": 0.5,
  "minWidth": 20,
  "paddingRight": 8,
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "backgroundOpacity": 0,
  "minHeight": 20,
  "selectedItemLabelFontColor": "#FFCC00",
  "playList": "this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist",
  "rollOverItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "height": 135.05,
  "itemThumbnailShadowBlurRadius": 8,
  "width": "74.275%",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "gap": 10,
  "itemLabelPosition": "bottom",
  "itemThumbnailBorderRadius": 28,
  "itemVerticalAlign": "middle",
  "itemLabelFontWeight": "normal",
  "scrollBarMargin": 2,
  "paddingLeft": 12,
  "itemPaddingRight": 3,
  "itemThumbnailShadow": true,
  "borderRadius": 5,
  "itemLabelGap": 9,
  "horizontalAlign": "left",
  "itemThumbnailShadowSpread": 1,
  "selectedItemLabelFontWeight": "bold",
  "itemBorderRadius": 0,
  "shadow": false,
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontStyle": "normal",
  "itemPaddingBottom": 3,
  "itemBackgroundOpacity": 0,
  "scrollBarColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "rollOverItemLabelFontWeight": "normal",
  "itemThumbnailWidth": 64,
  "layout": "horizontal",
  "itemLabelFontSize": 14,
  "itemLabelHorizontalAlign": "center",
  "paddingBottom": 4,
  "bottom": "0%",
  "itemHorizontalAlign": "center",
  "id": "ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F",
  "itemThumbnailOpacity": 1,
  "scrollBarVisible": "rollOver",
  "itemThumbnailHeight": 66,
  "itemThumbnailShadowOpacity": 0.54,
  "itemBackgroundColor": [],
  "itemPaddingLeft": 3,
  "paddingTop": 5,
  "itemMode": "normal",
  "itemLabelFontColor": "#FFFFFF",
  "left": "3.96%",
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelTextDecoration": "none",
  "class": "ThumbnailList",
  "itemBackgroundColorRatios": [],
  "itemOpacity": 1
 },
 {
  "class": "IconButton",
  "minWidth": 1,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "backgroundOpacity": 0,
  "mode": "toggle",
  "minHeight": 1,
  "width": 47,
  "transparencyActive": true,
  "toolTipPaddingLeft": 6,
  "height": 35,
  "maxHeight": 128,
  "toolTipPaddingRight": 6,
  "toolTipPaddingBottom": 4,
  "toolTip": "Fullscreen",
  "borderSize": 0,
  "paddingLeft": 0,
  "borderRadius": 0,
  "horizontalAlign": "center",
  "toolTipOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipShadowColor": "#333333",
  "shadow": false,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "cursor": "hand",
  "toolTipShadowBlurRadius": 3,
  "toolTipFontSize": 12,
  "toolTipShadowVerticalLength": 0,
  "paddingBottom": 0,
  "bottom": "8.55%",
  "toolTipBorderSize": 1,
  "id": "IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E",
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderRadius": 3,
  "paddingTop": 0,
  "iconURL": "skin/IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E.png",
  "toolTipFontColor": "#606060",
  "toolTipPaddingTop": 4,
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowOpacity": 0,
  "toolTipFontFamily": "Arial",
  "toolTipFontWeight": "normal",
  "maxWidth": 128,
  "right": "1%",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1
 }
], 
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "minWidth": 20,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "buttonToggleFullscreen": "this.IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E",
 "minHeight": 20,
 "scripts": {
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "registerKey": function(key, value){  window[key] = value; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; }
 },
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "shadow": false,
 "height": "100%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "paddingBottom": 0,
 "layout": "absolute",
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "overflow": "visible",
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist,this.ThumbnailList_860C4806_907A_2FE1_41A7_0DA8A52B965F_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E].forEach(function(component) { component.set('visible', false); }) }",
 "backgroundPreloadEnabled": true,
 "class": "Player"
})