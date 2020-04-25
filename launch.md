---
layout: default

title: 'Launch'
permalink: /launch
description: 'Origami Games is game development company that primarily makes Minecraft-related content, founded by Daniel Orr and Ian McFarlane in early 2019 to house their projects'
---

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="/assets/launch/moduleList.js"></script>
<link rel="stylesheet" href="/assets/launch/stylesheet.css" />

<!--  -->

# {{ page.title }}
<hr class='nobottom-separator'>

<div id='searchContainer'>
    <!-- <select class='textSpace' id='versionSelect' onchange="loadVersion()">
        <option value="1.16">Minecraft Java 1.16</option>
    </select> -->
    <select class='textSpace' id='setSelect' onchange="newSearch()">
        <option value="">Loading...</option>
    </select>
    <input type='text' class='textSpace' id='stringSearch' onkeyup='newSearch()' placeholder=' Search...' />
    <input type='button' onclick = 'listMode()' id='listModeButton' value = '▤'/>
</div>

<div id="resultContainer">
    <a class="noselect" href="/launch/modules/synthesisers">
        <div class="tokenContainerOuter">
            <div class="tokenContainer" style="">
                <div class="tokenLagBox"></div>
                <div class="tokenCircle">
                    <img style="width: 150px; height: 150px;" class="noselect" src="synthesiserslol" alt="Synthesisers" onload="$(this).parent().parent().fadeIn();">
                </div>
            </div>
            <div class="tokenTitle">Synthesisers</div>
        </div>
    </a>

    <a class="noselect" href="/launch/modules/gravity-pads">
        <div class="tokenContainerOuter">
            <div class="tokenContainer" style="">
                <div class="tokenLagBox"></div>
                <div class="tokenCircle">
                    <img style="width: 150px; height: 150px;" class="noselect" src="gravity-padslol" alt="Gravity Pads" onload="$(this).parent().parent().fadeIn();">
                </div>
            </div>
            <div class="tokenTitle">Gravity Pads</div>
        </div>
    </a>
</div>
