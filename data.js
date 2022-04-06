var APP_DATA = {
  "scenes": [
    {
      "id": "0-engineering-auditorium",
      "name": "Engineering Auditorium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06076105992832126,
          "pitch": 0.0038169987392340232,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": 2.978576813291303,
          "pitch": 0.04116025846344229,
          "rotation": 3.9269908169872414,
          "target": "2-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.406323366734103,
          "pitch": 0.03442059151782928,
          "title": "The Statue",
          "text": "We're Here!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.127307634702726,
          "pitch": 0.025709526115390346,
          "rotation": 0,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.625734470300431,
          "pitch": 0.1789912392135662,
          "title": "Spinelli Coffee Company",
          "text": "Something smells good here!"
        }
      ]
    },
    {
      "id": "2-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3244851181441817,
          "pitch": -0.22423710762599924,
          "rotation": 0.7853981633974483,
          "target": "0-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.053078404315552774,
          "pitch": 0.3120009504744985,
          "title": "Faculty of Engineering",
          "text": "Welcome!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
