var APP_DATA = {
  "scenes": [
    {
      "id": "0-initial-view",
      "name": "Initial View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.782146656219936,
        "pitch": 0.32216190459066674,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7089783073457294,
          "pitch": 0.3924894059687425,
          "rotation": 0,
          "target": "1-picnic-table"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-picnic-table",
      "name": "Picnic Table",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 3.110282737879027,
        "pitch": 0.2805455932216354,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4301872040931514,
          "pitch": 0.3421407248467361,
          "rotation": 0,
          "target": "0-initial-view"
        },
        {
          "yaw": 2.9145756744329185,
          "pitch": 0.08087174071721392,
          "rotation": 0,
          "target": "2-basketball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-basketball-court",
      "name": "Basketball Court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09424944403774305,
          "pitch": 0.021864477725642928,
          "rotation": 0,
          "target": "3-street"
        },
        {
          "yaw": -1.996025715579334,
          "pitch": 0.03972034228450738,
          "rotation": 0,
          "target": "1-picnic-table"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-street",
      "name": "Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6585569188293405,
          "pitch": 0.10533046138352375,
          "rotation": 0,
          "target": "4-gazebo"
        },
        {
          "yaw": -2.267924333142414,
          "pitch": 0.0694851289128664,
          "rotation": 0,
          "target": "2-basketball-court"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gazebo",
      "name": "Gazebo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9813367225039045,
          "pitch": 0.2031675718278123,
          "rotation": 0,
          "target": "3-street"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.16307011854973474,
          "pitch": 0.05574749560827996,
          "title": "Water",
          "text": "This is a green fountain."
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
