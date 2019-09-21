---
layout: splash
permalink: /launch
title: "Launch"
header:
  overlay_color: "#5e616c"
  overlay_filter: "0.5"
  overlay_image: /assets/images/launch/banner.png
  actions:
    - label: "<i class='fas fa-download'></i> Releases"
      url: "https://github.com/origami-games/launch/releases"
excerpt: A space-themed survival data pack for Minecraft
---

### What is Launch?
Launch is a space-themed survival data pack for vanilla Minecraft filled with tonnes of features to easily combine with your world.

### Features
- **Custom Items**
    - *Redstonic Locator*
        - Floor crafted with 1 *Green Concrete*, 1 *Glass*, 1 *Quartz* and 1 *Redstone*
        - Detects *Redstone Ore* in a 5x5x5 cube around you when in the overworld at Y<20
    - Custom Tools
        - *Magnetite*
            - Crafted in *Synthesiser* in the same formation as other tools with *Magnetite Lumps*
            - Has magnetic properties - items nearby move towards you when held in the mainhand, offhand or on an *Armour Stand*
        - *Verdant*
            - Texture only; to be implemented
    - Custom Arrows
        - Crafted in *Synthesiser* with arrows in a doughnut shape with their respective materials in the centre...
            - *Explosive Arrow* - *Gunpowder*
            - *Ender Arrow* - *Ender Pearl*/*Ender Rod*
            - *Lightning Arrow* - *Lightning Rod*
        - ...except for the *Torch Arrow* - 1 *Torch* and 1 *Arrow*, shapeless
    - *Spirit Orb*
        - Drops from *Ore Spirits*
    - *Electrified Energy Bars*
        - Crafted in *Synthesiser* with an *Iron Bar* and a *Redstone Torch*, shapeless
        - No functionality apart from being a material in recipes
    - *Lightning Rod*
        - Crafted in *Synthesiser* with *Electrified Energy Bars* in a doughnut shape with *Blaze Powder* in the centre
        - When dropped summons a lightning strike after 3 clock ticks - does not work if stacked
    - *Ender Rod*
        - Crafted in Synthesiser with Lightning Rods in a doughnut shape with an *Ender Pearl* in the centre
        - When dropped acts like a *Lightning Rod*, but teleports entities in a 5-block radius to the rod before the strike
    - *Looking Glass*
        - Crafted in *Synthesiser* with *Gold Nuggets* in a doughnut shape with *Glass* in the centre
        - Zooms in the camera when in the offhand
    - *Dark Flesh*
        - Drops from *Endermen*
        - Acts like *Chorus Fruit*, but gives the effects of *Rotten Flesh*
    - *End Stone Fragments*
        - Drops from *End Stone*
        - No functionality (yet)
- **Custom Mobs**
    - *Fire Ant*
        - Spawn near lava in the Nether
    - *Slime Queen*
        - Spawns rarely in swamps
    - *Treemanoid*
        - Spawns rarely in snowy biomes
    - *Wolf Rider*
        - Spawns globally at night (between `daytime` ticks `12000..23000`)
    - *Sand Crawler*
        - Spawns in the desert at night (same rate as husks)
    - *Wood Sprite*
        - Spawns in wooded areas at night (same rate as skeletons)
    - *Ore Spirits*
        - Spawn when breaking ore blocks
        - Attack you through blocks
        - Drop their respective ore block and a *Spirit Orb*
- **Custom Blocks**
    - *Synthesiser*
        - Floor crafted with 1 *Redstonic Locator*, 1 *Piston*, 1 *Iron Block* and 1 *Crafting Table*
        - Essentially, Launch's custom crafter
    - *Light Bridge*
        - Crafted in *Synthesiser* with *Iron Blocks*, *Purpur Blocks*, *Sea Lanterns* and *Light Blue Stained Glass* in this formation:
            - `ILI`
            - `PGP`
            - `ILI`
        - Emits a bridge of light (can be walked on) when powered by redstone
        - Rotation can be changed by clicking the block
    - *Gravity Pad*
        - Crafted in *Synthesiser* with *Smooth Stone*, a *Dropper* and *Magnetite Lumps* in this formation:
            - `SDS`
            - `MMM`
            - `SSS`
        - Enabled/disables gravity on any entity that is above the *Gravity Pad* when powered by redstone
- **Gameplay Changes**
    - Made *Shulkers* drop 2 *Shulker Shells* always
    - Made *Silverfish* drop *Iron Nuggets*, and have a chance to drop *Iron Ingots* with *Looting*
    - Made *Stone Pickaxes* craftable with all types of stone
    - Made *Armour Stands* have arms by default
    - Added *Log/Wood* to *Stripped Log/Wood* in the *Stonecutter*
    - Universal Dyeing
        - Dyed items can be dyed again
    - Months and Seasons
        - Changes various game aspects in each season respectively; `randomTickSpeed`, `naturalRegeneration`, `doDaylightCycle` and difficulty
    - *Nether Quartz* now drops from *Nether Quartz Ore* at the same rate as *Redstone* from *Redstone Ore*
- **[World Generation](https://github.com/origami-games/launch/issues/3)**
    - Overworld
        - *Wolf Hideouts*
            - Spawns in snowy biomes with the *Wolf Rider* mob
        - *Desert Tombs*
            - Spawns rarely in deserts
            - A pyramid structure with loot and a *Husk* spawner
        - *Meteors*
            - Include *Magnetite Ore*, dropping *Magnetite Lumps*; can be silk-touched
    - The End
        - The *Exit Portal* is converted to *Obsidian* and has a *Purpur Pillar* under the *Dragon Egg*
        - *End Crystal* towers have a new crowning which regenerates at each fight
        - *Chorus Fruit* trees are randomly generated upon first generation
