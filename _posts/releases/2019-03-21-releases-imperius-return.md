---
title: "Imperius' Return"
excerpt: "Download versions of Imperius' Return and source code"
permalink: /releases/imperius-return
categories:
  - Information
  - Documentation
  - News
  - Wiki
  - Wiki/Releases
  - Releases
author_profile: false
classes: wide
sidebar:
  title: "Wiki"
  nav: wiki
---

-----

#### [Download current master branch](https://github.com/origami-games/imperius-return/archive/master.zip) found at [origami-games/imperius-return](https://github.com/origami-games/imperius-return)  
#### [How to Install](https://origami-games.github.io/installation-guide#imperius-return)

-----

**Notice:** The Artefact development server is open 24/7! Join it at `artefact-development.serv.gs`
{: .notice--info}


### [Source v0.0.0.8-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.8-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.8-pre.zip)
#### Gameplay Changes
- Added lower shields
- Removed French support as it is hard to keep it up with frequent feature additions

#### Ability Changes
- Cooldowns are now per-ability
  - Coloured the boss bar display per-tier
  - Boss bar display to be changed as a result
- Added `Shield Bash`
  - The player can flick their camera quickly upwards to smack whatever entities are around them. This doesn’t deal much damage, but a tonne of knockback. Can only be activated if the player has a shield (any type) in their offhand.
- Added audiovisuals to Energy Sucker Punch
  - 'Charge-up' sound (plays when timer starts)
  - Activation particles

#### Entity Changes
- Reduced goblin health to `6` points (`3` hearts)
- Capped max xp orb entity count to `50`

#### Technical Changes
- Renamed all artefact root folders
  - In resource pack - `/artefact/` to `/origami-games/artefact/`
  - In data pack - `artefact-<category>:` to `origami-games:artefact/<category>/`
- Re-written stuns system [`#12`](https://github.com/origami-games/imperius-return/issues/12)
  - Now modular [(see issue)](https://github.com/origami-games/imperius-return/issues/12)

-----

### [Source v0.0.0.7-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.7-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.7-pre.zip)
#### Bug Fixes
- [[#10]](https://github.com/origami-games/imperius-return/issues/10) Goblin summon button in command menu references wrong function
- [[#11]](https://github.com/origami-games/imperius-return/issues/11) Shields don't have lore applied when health is normal (10 hearts)

#### Gameplay Changes
- Removed `CustomNameVisible` tags from entities (you now have to put your crosshair on an entity to see their name)
- Decreased magic shield rotation threshold to `50`

#### Texture Changes
- Added a few textures
  - Lapis Block (temporary)
  - Iron Block
  - Tall Grass
- Re-textured and renamed smooth stone to a custom block; reinforced stone
- Grass path blocks now have a main texture of gravel
  - Gravel texture itself *to be* changed

#### Spell Changes
- Improved submerge effect
  - The effect no longer replaces blocks - it only replaces air now
  - Replaced `minecraft:ice` to be `minecraft:light_blue_stained_glass` as the ice melted
  - Added removal effects (particles and a glass breaking sound)
  - Entity summoned is now an area effect cloud instead of an armour stand

#### Ability Changes
- Added abilities 🎉
- Added a way to gain energy
  - Enabled experience orbs again - every experience orb taken equates to 1 energy level
  - Some abilities regenerate energy
- Slot selection system to be
- Select an ability slot and right-click to use
- Added `Rage`
  - Sneak and flick your head up quickly, then attack a mob to gain strength, speed and regeneration for 4 seconds
- Added `Indomitable Stomp`
  - Launches you into the sky, only to be abruptly pulled back down to the floor with a thud, stunning nearby mobs
  - Icon texture to be changed
- Added `Energy Sucker Punch`
  - The next enemy hit will receive +8 damage and the player will receive 2x the damage dealt as energy, as long as the amount of damage dealt is no more than 50
- Added `Rush`
  - When used, the player gets 4 seconds of speed. If the player hits an enemy while they still have that effect, within those 4 seconds, the amplifier for the speed will increase by 1 tier and 1 extra second (caps at `Speed V`)

#### Entity Changes
- Goblins now make adult zombie damage sounds
- Improved goblins' aesthetics
- Removed star system

#### Technical Changes
- Performance improvements
- Added model `artefact:skin/skulls/template_skull_head`
- Specified what Artefact map this is in `pack.mcmeta`s
- You no longer activate your shield while sneaking and flying in creative/spectator mode
- Renamed `artefact-api:click_detection/[...]` to `artefact-api:action_detection/[...]`
- Reorganised the right-click detection system and its files (everything now roots from one file - `artefact-core:player/holding_item/carrot_on_a_stick`)
- Changed all `origami-games/Imperius-Return` to `origami-games/imperius-return`, for new link
- Dead slimes no longer load incorrectly at Y=`-512`, lag the game and spam the logs
- Added an NBT tag that identifies all shield types `artefact:{is_shield:1b}`
- Added resistance for when your scores are being reset so you don't die

-----

### [Source v0.0.0.6-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.6-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.6-pre.zip)
#### Spell Changes
- Added Inferno spell [`R`-`R`-`L` / `inferno`]
- Added Submerge spell [`R`-`L`-`R` / `submerge`]
- Added Blitz spell [`R`-`R`-`R` / `blitz`]

#### Entity Changes
- Added goblins

#### Gameplay Changes
- Added continuous sound to spell `tornado`
- Mana will now not regenerate during spell cooldowns

#### Technical Changes
- Added version number to resource pack description

### [Source v0.0.0.5-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.5-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.5-pre.zip)
#### Bug Fixes
- [[#9]](https://github.com/origami-games/imperius-return/issues/9) Function `artefact-api:entities/spawn/radius/butterfly` does not exist

#### Spell Changes
- Added Tornado spell [`R`-`L`-`L` / `tornado`]
- Magic shield now takes away -2 mana
- Removed `enchanted_hit` particle from spell `discharge`
- Mana now takes 1 second to regenerate instead of 2

#### Gameplay Changes
- The treasure bag use message now says `Opened [...] treasure bag` instead of `Consumed [...] treasure bag`
- Modified pixie hurt sound

#### Technical Changes
- Separated `discharge/sprint` spell test into their respective items
- Changed all text JSON strings to the new single quotation format
- Moved spaces next to the `L`/`R` display in the action bar from the language files to the raw function
- Added headings to the items section of the command menu
- Moved function `artefact-core:player/death` to `artefact-api:death`
- Moved the indicator to non-primary players who the primary player is from `artefact:core/player/tick` to function `artefact-core:tick`
- Added entity tag `artefact-type:sprite`
- Reorganised on-load score sets
- The slime for left-click now teleports to the player slightly quicker
- Reworked the mana regen timer threshold
- Removed unused 'flick' check
- Removed unused loot table `minecraft:blocks/shulker_box`

-----

### [Source v0.0.0.4-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.4-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.4-pre.zip)
#### Bug Fixes
- [[#8]](https://github.com/origami-games/imperius-return/issues/8) Removing magic shield from offhand while still activating does not reset timer

#### Gameplay Changes
- Shield type now displays in the attribute status icon (offhand slot)

#### Entity Changes
- Given butterflies a model
- Made pixie models 3d

#### Technical Changes
- Given shield boss bar its language string
- Added shields to the item give command menu
- If you are not holding an item with a spell, you will now go out of spell activation state
- Removed jump boost effect from spell `discharge`

-----

### [Source v0.0.0.3-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.3-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.3-pre.zip)
#### Bug Fixes
- [[#6]](https://github.com/origami-games/imperius-return/issues/6) Build check still runs feedback tellraw if a player hasn't ran the command
- [[#7]](https://github.com/origami-games/imperius-return/issues/7) Discharge spell's slow falling effect is inconsistent

#### Gameplay Changes
- Added magic shields' functionality `minecraft:shield{artefact:{item_type:["magic_shield"]}}`
  - While in offhand, look down, sneak and wait to activate
  - 5 second cooldown
- Made lapis lazuli ore block animated [[#5]](https://github.com/origami-games/imperius-return/issues/5)

#### Entity Changes
- Added butterflies
  - **Needs model, animation and texture**
  - Passive mob
- Added ambient and damage particles for pixies

### Item Changes
- Added treasure bags `/function artefact-api:items/give/treasure_bag/<basic|epic|legendary>`
  - Basic, epic, legendary and set
  - Placeholder bag texture currently (credit: Terraria purification powder)

### Technical Changes
- Changed command book to a chat menu `/function artefact-api:command_menu/open`
- Imported vanilla data pack tags
- Made server version check armour stand invisible
- Different spells can now have different mana amounts taken away

-----

### [Source v0.0.0.2-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.2-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.2-pre.zip)
#### Bug Fixes
- [[#1]](https://github.com/origami-games/imperius-return/issues/1) Glass panes show missing texture icon
- [[#4]](https://github.com/origami-games/imperius-return/issues/4) Mana gets set to `0` on death even in creative mode

#### Gameplay Changes
- Added a tutorial-like feature
  - When doing something for the first time, such as holding an item with a spell, you will get a tip in the chat
- Changed global death message

#### Technical Changes
- Added `Command Book` (`/function artefact-api:items/give/command_book`)

#### Entities Changes
- Added rats
- Dropped items display their names
- Changed the above-head levels system to a 1-3 stars rating

-----

### [Source v0.0.0.1-pre](https://github.com/origami-games/imperius-return/tree/src-v0.0.0.1-pre)
##### [Download](https://github.com/origami-games/imperius-return/archive/src-v0.0.0.1-pre.zip)
Here's a run-down of everything added so far:
#### Mechanics
Some vanilla mechanics have been altered for a full RPG experience!
- Health
  - Unaltered other than that you have 4 hearts by default
- Mana
  - Replaces the food bar
  - Regenerates 1/2 an orb every 2 seconds (40 ticks)
  - Used to activate spells
- Energy
  - Replaces the XP bar
  - Used for abilities (to come)
- Action Bar
  - Displays useful information
    - Health
    - Mana
    - Current L/R click status
    - Spell activation
    - Spell recharge
- Hot Bar
  - Slots 2, 3 and 4 will be used for abilities
  - Currently placeholder'd with granite, diorite and andesite
  - PS there's also sounds for when you switch slots ❤
- Offhand
  - Disabled - only shields can be equipped with the tag `artefact:{item_type:["shield"]}` or `artefact:{item_type:["magic_shield"]}`
- Block Effects
  - Standing in certain blocks will give you certain effects
    - *e.g. standing in a block with the tag `#artefact-type:slowing` will slow you down, such as `minecraft:tall_grass`*

#### Spells
Spells can be added to right-clickable items using the tag `artefact:{can_right_click:1b,can_left_click:1b,spells:["<SPELL_ID>"]}`
- Sprint [`R`-`R`-`R` / `sprint`]
  - Gives you speed 4 for 5 seconds
- Discharge [`R`-`L`-`R` / `discharge`]
  - Boosts you up into the sky
  - Slow fall back down

#### Mobs
- Zombies (Level: 1) `/function artefact-api:entities/spawn/zombie/level_1`
  - Behaves like normal zombies
  - Have leather caps and boots
- Pixies (Level: Undefined) `/function artefact-api:entities/spawn/pixie`
  - 4 attack damage (2 hearts)
  - 16 health (8 hearts)
  - Drops `Pixie Dust`

#### NPCs
NPCs are simply Minecraft players as entities
- *Andante* `/function artefact-api:npcs/spawn/andante`
- *razorsharp* `/function artefact-api:npcs/spawn/razorsharp`
- *ToffeeMax* `/function artefact-api:npcs/spawn/toffeemax`

#### Items
- Pixie Dust
  - Can be dropped to spawn more pixies
