---
layout: archive
title: "Hulphbron Valley"
excerpt: "View Hulphbron Valley's changelog"
permalink: /changelogs/hulphbron-valley
categories:
  - Information
  - Documentation
  - News
  - Wiki
  - Changelogs
author_profile: false
classes: wide
sidebar:
  title: "Wiki"
  nav: wiki
---

-----

#### [Download current master branch](https://github.com/origami-games/hulphbron-valley/archive/master.zip) found at [origami-games/hulphbron-valley](https://github.com/origami-games/hulphbron-valley)  
#### [How to Install](https://origami-games.github.io/installation-guide#hulphbron-valley)

-----

### [HV v0.0.1](https://github.com/origami-games/hulphbron-valley/tree/v0.0.1)
##### [Download](https://github.com/origami-games/hulphbron-valley/releases/tag/v0.0.1)
#### Added
- Character
  - Has 100 HP
  - Can be set on fire
    - 1 second on fire = -5 HP
  - Automatically revives after death
    - Takes 5 seconds to revive
  - Has 20 food points
    - Food doesn't do anything yet
- Health GUI
  - 5 hearts
  - 1 heart = 20 HP
- Pickups
  - Heart pickup
    - +20 HP
    - `armor_stand` `{Tags:["resource_heart"],CustomName:'"\\uE0f1"',CustomNameVisible:1,Small:1,Invisible:1}`
- Sounds
  - `music/game1`
    - Song to be changed in the future
    - Plays occasionally (at the same rate as `minecraft:music.game`)
    - Channel = `music`
  - `character/death`
    - Runs on character death
    - Channel = `player`
- Join message
  - Included `Required Options`
    - **These options are compulsory and must be set whilst playing**
