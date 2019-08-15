---
layout: archive
title: "Launch"
excerpt: "View Launch's changelog"
permalink: /changelogs/launch
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

#### [Installation Guide](https://origami-games.github.io/installation-guide#launch)

### [v0.0.2](https://github.com/origami-games/launch/tree/v0.0.2)
#### [**Download Data**](https://github.com/origami-games/launch/releases/download/v0.0.2/launch-data-v0.0.2-bundled-crdb.zip) | [**Download Resources**](https://github.com/origami-games/launch/releases/download/v0.0.2/launch-resources-v0.0.2.zip)
- Fixed [`#1` Custom blocks spawn higher than they should if placed on a non-full block](https://github.com/origami-games/launch/issues/1)
- Fixed [`#2` Custom arrows don't work if they're the last of their stack](https://github.com/origami-games/launch/issues/2)
- Fixed Torch Arrows on east/west faces spawning Torches on the inverse face
- Added Verdant tools (texture only, to be implemented)
- Added Magnetite tools
  - Crafted in Synthesiser in the same formation as other tools with Magnetite Lumps
  - Has magnetic properties - items nearby move towards you when held in the mainhand, offhand or on an armour stand
- Added Gravity Pad
  - Crafted with Smooth Stone, Magnetite Lumps and a Dropper
    - `SDS`
    - `MMM`
    - `SSS`
  - When powered with redstone, a Gravity Pad toggles the gravity of entities in the block above it every 0.5 seconds
- Added a load of custom item models/textures (Clock's `CustomModelData` 11-20)
- Added Log/Wood to Stripped Log/Wood in the Stonecutter
- Added Looking Glass
  - Crafted in Synthesiser with Gold Nuggets in a doughnut shape with Glass in the centre
  - Zooms in the camera when in the offhand
- Changed Torch Arrow recipe
  - Now shapeless requiring 1 Arrow and 1 Torch
- Added Titanium Plating (no recipe yet)
- Retextured the Redstonic Locator
- Added a few advancements
  - Beep Boop. Boop Beep. - Craft a Redstonic Locator with Quartz, Glass, Green Concrete and Redstone
  - Primeval Synthesis - Craft a Synthesiser with a redstonic locator, crafting table, iron block and piston
- [Added world generation](https://github.com/origami-games/launch/issues/3)
  - Overworld
    - Added Wolf Hideouts
      - Spawn in snowy biomes
      - Includes the Wolf Rider mob
    - Added Desert Tombs
      - Spawn rarely in deserts
      - A pyramid structure with loot and a husk spawner
    - Added Meteors
      - Include Magnetite Ore, dropping Magnetite Lumps; can be silk-touched
    - Added Bee Hives
      - Currently a placeholder - will be replaced with a flatter hive along with hives for other mobs
  - The End
    - The Exit Portal is converted to obsidian and has a Purpur Pillar under the dragon egg
    - End Crystal Towers have a new crowning which regens at each fight, marked with an AEC at the start of the initial fight
    - Chorus trees are generated upon first generation
- Added a custom mob spawning system fully
  - Added Bee
    - Spawn in Bee Hives
  - Added Fire Ant
    - Spawn near lava in the Nether
  - Added Slime Queen
    - Spawns rarely in swamps
  - Added Treemanoid
    - Spawns rarely in snowy biomes
  - Added Wolf Rider
    - Spawns globally at night (between `daytime` ticks `12000..23000`)
  - Added Sand Crawler
    - Spawns in the desert at night (same rate as husks)
  - Added Wood Sprite
    - Spawns in wooded areas at night (same rate as skeletons)
- Added months and seasons
  - Changes various game aspects in each season respectively
- Nether Quartz now drops from Nether Quartz Ore at the same rate as Redstone from Redstone Ore
- Updated custom block model methods
- Converted all custom items without functionality to Clocks
- Converted custom item drop types in loot tables from `item` to `loot_table`, now referring to custom items in `launch/loot_tables/items`
- Custom crafting recipes now refer to custom item loot tables
- Removed item give commands in functions (`origami-games:launch/item/<item_id>/give`) - use `loot give` now
- Made custom blocks Armour Stands (as Spawn Eggs can be placed in Spawners)
- Fixed Silverfish loot table
- Fixed Redstonic Locator (formerly Atom Assembler) model
- Fixed links in build checks

-----

### [v0.0.1](https://github.com/origami-games/launch/tree/v0.0.1)
#### [**Download Data**](https://github.com/origami-games/launch/releases/download/v0.0.1/launch-data-v0.0.1-bundled-crdb.zip) | [**Download Resources**](https://github.com/origami-games/launch/releases/download/v0.0.1/launch-resources-v0.0.1.zip)
- Added End Stone Fragments
  - Drops from End Stone
  - No functionality yet
- Added Dark Flesh
  - Drop from Endermen
  - Acts like Chorus Fruit, but gives effects of Rotten Flesh
- Made Shulkers drop 2 Shulker Shells always
- Made Silverfish drop Iron Nuggets, and have a chance to drop Iron Ingots with Looting
- Made Stone Pickaxes craftable with all types of stone
- Added universal dyeing
- Added Redstonic Locator
  - Floor crafted with 1 Green Concrete, 1 Glass, 1 Quartz and 1 Redstone
  - Detects Redstone in a 5x5x5 cube around you when in the overworld at Y<20
- Added Synthesiser
  - Floor crafted with 1 Redstonic Locator, 1 Piston, 1 Redstone Block, 1 Iron Block and 1 Crafting Table
  - Launch's custom crafter
- Added Light Bridge
  - Crafted in Synthesiser with Iron Blocks, Purpur Blocks, Sea Lanterns and Light Blue Stained Glass
    - `ILI`
    - `PGP`
    - `ILI`
  - Emits a bridge of light (can be walked on) when powered by Redstone
  - Rotation can be changed by clicking the block
- Added armour stand arms
- Added custom arrows
  - Crafted in Synthesiser with arrows in a doughnut shape with their respective materials in the centre:
  - Explosive Arrow - Gunpowder
  - Ender Arrow - Ender Pearl/Ender Rod
  - Lightning Arrow - Lightning Rod
  - Torch Arrow - Torch
- Added Electrified Energy Bars
  - Crafted in Synthesiser with an Iron Bar and a Redstone Torch, shapeless
  - No functionality apart from being a material in recipes
- Added Lightning Rod
  - Crafted in Synthesiser with Electrified Energy Bars in a doughnut shape with Blaze Powder in the centre
  - When dropped summons a lightning strike after 3 clock ticks - does not work if stacked
- Added Ender Rod
  - Crafted in Synthesiser with Lightning Rods in a doughnut shape with an Ender Pearl in the centre
  - When dropped acts like a Lightning Rod, but teleports entities in a 5-block radius to the rod before the strike
- Added an incomplete custom mob spawning system
