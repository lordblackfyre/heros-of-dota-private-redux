"use strict";

// All options JSON (todo: EXPORT IT)
var allOptions = {
    // Presets, to make selection FAST
    presets: {
        default: true,
        fields: [
            {
                name: 'lodOptionGamemode',
                des: 'lodOptionsPresetGamemode',
                about: 'lodOptionAboutPresetGamemode',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionBalancedAllPick',
                        value: 1
                    },
                    {
                        text: 'lodOptionBalancedSingleDraft',
                        value: 2
                    },
                    {
                        text: 'lodOptionBalancedMirrorDraft',
                        value: 3
                    },
                    {
                        text: 'lodOptionBalancedAllRandom',
                        value: 4
                    },
                    {
                        text: 'lodOptionBalancedCustom',
                        value: -1
                    }
                ]
            },
            {
                preset: true,
                name: 'lodOptionBanning',
                des: 'lodOptionsPresetBanning',
                about: 'lodOptionAboutPresetBanning',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionBalancedBan',
                        value: 1
                    },
                    {
                        text: 'lodOptionManualBan',
                        value: 2
                    }
                ]
            },
            {
                preset: true,
                name: 'lodOptionSlots',
                des: 'lodOptionsPresetSlots',
                about: 'lodOptionAboutPresetSlots',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionBalancedSlots4',
                        value: 4
                    },
                    {
                        text: 'lodOptionBalancedSlots5',
                        value: 5
                    },
                    {
                        text: 'lodOptionBalancedSlots6',
                        value: 6
                    }
                ]
            },
            {
                preset: true,
                name: 'lodOptionUlts',
                des: 'lodOptionsPresetUlts',
                about: 'lodOptionAboutPresetUlts',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionBalancedUlts1',
                        value: 1
                    },
                    {
                        text: 'lodOptionBalancedUlts2',
                        value: 2
                    },
                    {
                        text: 'lodOptionBalancedUlts3',
                        value: 3
                    },
                    {
                        text: 'lodOptionBalancedUlts4',
                        value: 4
                    },
                    {
                        text: 'lodOptionBalancedUlts5',
                        value: 5
                    },
                    {
                        text: 'lodOptionBalancedUlts6',
                        value: 6
                    },
                    {
                        text: 'lodOptionBalancedUlts0',
                        value: 0
                    },
                ]
            }
        ]
    },

    // The common stuff people play with
    common_selection: {
        custom: true,
        fields: [
            {
                name: 'lodOptionCommonGamemode',
                des: 'lodOptionDesCommonGamemode',
                about: 'lodOptionAboutCommonGamemode',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionAllPick',
                        value: 1
                    },
                    {
                        text: 'lodOptionSingleDraft',
                        value: 2
                    },
                    {
                        text: 'lodOptionMirrorDraft',
                        value: 3
                    },
                    {
                        text: 'lodOptionAllRandom',
                        value: 4
                    }
                ]
            },
            {
                name: 'lodOptionCommonMaxSlots',
                des: 'lodOptionDesCommonMaxSlots',
                about: 'lodOptionAboutCommonMaxSlots',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionCommonSlots4',
                        value: 4
                    },
                    {
                        text: 'lodOptionCommonSlots5',
                        value: 5
                    },
                    {
                        text: 'lodOptionCommonSlots6',
                        value: 6
                    }
                ]
            },
            {
                name: 'lodOptionCommonMaxSkills',
                des: 'lodOptionDesCommonMaxSkills',
                about: 'lodOptionAboutCommonMaxSkills',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionCommonSkills0',
                        value: 0
                    },
                    {
                        text: 'lodOptionCommonSkills1',
                        value: 1
                    },
                    {
                        text: 'lodOptionCommonSkills2',
                        value: 2
                    },
                    {
                        text: 'lodOptionCommonSkills3',
                        value: 3
                    },
                    {
                        text: 'lodOptionCommonSkills4',
                        value: 4
                    },
                    {
                        text: 'lodOptionCommonSkills5',
                        value: 5
                    },
                    {
                        text: 'lodOptionCommonSkills6',
                        value: 6
                    }
                ]
            },
            {
                name: 'lodOptionCommonMaxUlts',
                des: 'lodOptionDesCommonMaxUlts',
                about: 'lodOptionAboutCommonMaxUlts',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionCommonUlts0',
                        value: 0
                    },
                    {
                        text: 'lodOptionCommonUlts1',
                        value: 1
                    },
                    {
                        text: 'lodOptionCommonUlts2',
                        value: 2
                    },
                    {
                        text: 'lodOptionCommonUlts3',
                        value: 3
                    },
                    {
                        text: 'lodOptionCommonUlts4',
                        value: 4
                    },
                    {
                        text: 'lodOptionCommonUlts5',
                        value: 5
                    },
                    {
                        text: 'lodOptionCommonUlts6',
                        value: 6
                    }
                ]
            },
        ]
    },

    // Changing what stuff is banned
    banning: {
        custom: true,
        fields: [
            {
                name: 'lodOptionBanningMaxBans',
                des: 'lodOptionDesBanningMaxBans',
                about: 'lodOptionAboutBanningMaxBans',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionBanningMaxBans0',
                        value: 0
                    },
                    {
                        text: 'lodOptionBanningMaxBans1',
                        value: 1
                    },
                    {
                        text: 'lodOptionBanningMaxBans2',
                        value: 2
                    },
                    {
                        text: 'lodOptionBanningMaxBans3',
                        value: 3
                    },
                    {
                        text: 'lodOptionBanningMaxBans5',
                        value: 5
                    },
                    {
                        text: 'lodOptionBanningMaxBans10',
                        value: 10
                    },
                    {
                        text: 'lodOptionBanningMaxBans25',
                        value: 25
                    }
                ]
            },
            {
                name: 'lodOptionBanningMaxHeroBans',
                des: 'lodOptionDesBanningMaxHeroBans',
                about: 'lodOptionAboutBanningMaxBans',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionBanningMaxHeroBans0',
                        value: 0
                    },
                    {
                        text: 'lodOptionBanningMaxBans1',
                        value: 1
                    },
                    {
                        text: 'lodOptionBanningMaxBans2',
                        value: 2
                    },
                    {
                        text: 'lodOptionBanningMaxBans3',
                        value: 3
                    }
                ]
            },
            {
                name: 'lodOptionBanningBlockTrollCombos',
                des: 'lodOptionDesBanningBlockTrollCombos',
                about: 'lodOptionAboutBanningBlockTrollCombos',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionBanningUseBanList',
                des: 'lodOptionDesBanningUseBanList',
                about: 'lodOptionAboutBanningUseBanList',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionBanningBanInvis',
                des: 'lodOptionDesBanningBanInvis',
                about: 'lodOptionAboutBanningBanInvis',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
        ]
    },

    // Changing the speed of the match
    game_speed: {
        custom: true,
        fields: [
            {
                name: 'lodOptionGameSpeedStartingLevel',
                des: 'lodOptionDesGameSpeedStartingLevel',
                about: 'lodOptionAboutGameSpeedStartingLevel',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionLevel1',
                        value: 1
                    },
                    {
                        text: 'lodOptionLevel6',
                        value: 6
                    },
                    {
                        text: 'lodOptionLevel11',
                        value: 11
                    },
                    {
                        text: 'lodOptionLevel16',
                        value: 16
                    },
                    {
                        text: 'lodOptionLevel25',
                        value: 25
                    },
                    {
                        text: 'lodOptionLevel50',
                        value: 50
                    },
                    {
                        text: 'lodOptionLevel75',
                        value: 75
                    },
                    {
                        text: 'lodOptionLevel100',
                        value: 100
                    }
                ]
            },
            {
                name: 'lodOptionGameSpeedMaxLevel',
                des: 'lodOptionDesGameSpeedMaxLevel',
                about: 'lodOptionAboutGameSpeedMaxLevel',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionLevel6',
                        value: 6
                    },
                    {
                        text: 'lodOptionLevel11',
                        value: 11
                    },
                    {
                        text: 'lodOptionLevel16',
                        value: 16
                    },
                    {
                        text: 'lodOptionLevel25',
                        value: 25
                    },
                    {
                        text: 'lodOptionLevel50',
                        value: 50
                    },
                    {
                        text: 'lodOptionLevel75',
                        value: 75
                    },
                    {
                        text: 'lodOptionLevel100',
                        value: 100
                    }
                ]
            },
            {
                name: 'lodOptionGameSpeedStartingGold',
                des: 'lodOptionDesGameSpeedStartingGold',
                about: 'lodOptionAboutGameSpeedStartingGold',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionGameSpeedStartingGold0',
                        value: 0
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold250',
                        value: 250
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold500',
                        value: 500
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold1000',
                        value: 1000
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold2500',
                        value: 2500
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold5000',
                        value: 5000
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold10000',
                        value: 10000
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold25000',
                        value: 25000
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold50000',
                        value: 50000
                    },
                    {
                        text: 'lodOptionGameSpeedStartingGold100000',
                        value: 100000
                    },
                ]
            },
            {
                name: 'lodOptionGameSpeedRespawnTime',
                des: 'lodOptionDesGameSpeedRespawnTime',
                about: 'lodOptionAboutGameSpeedRespawnTime',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionGameSpeedRespawnTimeDefault',
                        value: 0
                    },
                    {
                        text: 'lodOptionGameSpeedRespawnTimeHalf',
                        value: 0.5
                    },
                    {
                        text: 'lodOptionGameSpeedRespawnTimeTenth',
                        value: 0.1
                    },
                    {
                        text: 'lodOptionGameSpeedRespawnTimeSecond',
                        value: -1
                    },
                    {
                        text: 'lodOptionGameSpeedRespawnTime10Second',
                        value: -10
                    },
                    {
                        text: 'lodOptionGameSpeedRespawnTime20Second',
                        value: -20
                    },
                    {
                        text: 'lodOptionGameSpeedRespawnTime30Second',
                        value: -30
                    },
                    {
                        text: 'lodOptionGameSpeedRespawnTime60Second',
                        value: -60
                    }
                ]
            },
            {
                name: 'lodOptionGameSpeedTowersPerLane',
                des: 'lodOptionDesGameSpeedTowersPerLane',
                about: 'lodOptionAboutGameSpeedTowersPerLane',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionTower3',
                        value: 3
                    },
                    {
                        text: 'lodOptionTower4',
                        value: 4
                    },
                    {
                        text: 'lodOptionTower5',
                        value: 5
                    },
                    {
                        text: 'lodOptionTower6',
                        value: 6
                    },
                    {
                        text: 'lodOptionTower7',
                        value: 7
                    },
                    {
                        text: 'lodOptionTower8',
                        value: 8
                    },
                    {
                        text: 'lodOptionTower9',
                        value: 9
                    },
                    {
                        text: 'lodOptionTower10',
                        value: 10
                    }
                ]
            },
            {
                name: 'lodOptionGameSpeedUpgradedUlts',
                des: 'lodOptionDesGameSpeedUpgradedUlts',
                about: 'lodOptionAboutGameSpeedUpgradedUlts',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionCrazyEasymode',
                des: 'lodOptionDesCrazyEasymode',
                about: 'lodOptionAboutCrazyEasymode',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
        ]
    },

    // Advanced stuff, for pros
    advanced_selection: {
        custom: true,
        fields: [
            {
                name: 'lodOptionAdvancedHeroAbilities',
                des: 'lodOptionDesAdvancedHeroAbilities',
                about: 'lodOptionAboutAdvancedHeroAbilities',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionAdvancedNeutralAbilities',
                des: 'lodOptionDesAdvancedNeutralAbilities',
                about: 'lodOptionAboutAdvancedNeutralAbilities',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionAdvancedNeutralWraithNight',
                des: 'lodOptionDesAdvancedWraithNight',
                about: 'lodOptionAboutAdvancedWraithNight',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionAdvancedOPAbilities',
                des: 'lodOptionDesAdvancedOPAbilities',
                about: 'lodOptionAboutAdvancedOPAbilities',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionNo',
                        value: 0
                    },
                    {
                        text: 'lodOptionYes',
                        value: 1
                    }

                ]
            },
            {
                name: 'lodOptionAdvancedHidePicks',
                des: 'lodOptionDesAdvancedHidePicks',
                about: 'lodOptionAboutAdvancedHidePicks',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionAdvancedUniqueSkills',
                des: 'lodOptionDesAdvancedUniqueSkills',
                about: 'lodOptionAboutAdvancedUniqueSkills',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionAdvancedUniqueHeroes',
                des: 'lodOptionDesAdvancedUniqueHeroes',
                about: 'lodOptionAboutAdvancedUniqueHeroes',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionAdvancedSelectPrimaryAttr',
                des: 'lodOptionDesAdvancedSelectPrimaryAttr',
                about: 'lodOptionAboutAdvancedSelectPrimaryAttr',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
        ]
    },

    // Buffing of heroes, towers, etc
    /*buffs: {
        custom: true,
        fields: [

        ]
    },*/

    // Stuff that is just crazy
    crazyness: {
        custom: true,
        fields: [
            {
                name: 'lodOptionCrazyNoCamping',
                des: 'lodOptionDesCrazyNoCamping',
                about: 'lodOptionAboutCrazyNoCamping',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionCrazyUniversalShop',
                des: 'lodOptionDesCrazyUniversalShop',
                about: 'lodOptionAboutCrazyUniversalShop',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionCrazyAllVision',
                des: 'lodOptionDesCrazyAllVision',
                about: 'lodOptionAboutCrazyAllVision',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionCrazyMulticast',
                des: 'lodOptionDesCrazyMulticast',
                about: 'lodOptionAboutCrazyMulticast',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
            {
                name: 'lodOptionCrazyWTF',
                des: 'lodOptionDesCrazyWTF',
                about: 'lodOptionAboutCrazyWTF',
                sort: 'dropdown',
                values: [
                    {
                        text: 'lodOptionYes',
                        value: 1
                    },
                    {
                        text: 'lodOptionNo',
                        value: 0
                    }
                ]
            },
        ]
    }
}

// Phases
var PHASE_LOADING = 1;          // Waiting for players, etc
var PHASE_OPTION_SELECTION = 2; // Selection options
var PHASE_BANNING = 3;          // Banning stuff
var PHASE_SELECTION = 4;        // Selecting heroes
var PHASE_DRAFTING = 5;         // Place holder for drafting mode
var PHASE_REVIEW = 6;           // Review Phase
var PHASE_INGAME = 7;           // Game has started

// Hero data
var heroData = {};

// Ability Data
var flagData = {}
var flagDataInverse = {}

// Used to make data transfer smoother
var dataHooks = {};

// Used to hook when players are clicking around
var onLoadTabHook = {};

// Used to store selected heroes and skills
var selectedHeroes = {};
var selectedAttr = {};
var selectedSkills = {};

// The current phase we are in
var currentPhase = PHASE_LOADING;
var selectedPhase = PHASE_OPTION_SELECTION;
var endOfTimer = -1;
var allowCustomSettings = false;

// Current hero & Skill
var currentSelectedHero = '';
var currentSelectedSkill = '';
var currentSelectedAbCon = null;

// List of all player team panels
var allPlayerPanels = [];

// List of option links
var allOptionLinks = {};

// Prevent double option sending
var lastOptionValues = {};

// Map of optionName -> callback for value change
var optionFieldMap = {};

// Map of optionName -> Value
var optionValueList = {};

// Hooks an events and fires for all the keys
function hookAndFire(tableName, callback) {
    // Listen for phase changing information
    CustomNetTables.SubscribeNetTableListener(tableName, callback);

    // Grab the data
    var data = CustomNetTables.GetAllTableValues(tableName);
    for(var i=0; i<data.length; ++i) {
        var info = data[i];
        callback(tableName, info.key, info.value);
    }
}

// Focuses on nothing
function focusNothing() {
    $('#mainSelectionRoot').SetFocus();
}

// Hooks a change event
function addInputChangedEvent(panel, callback) {
    var shouldListen = false;
    var checkRate = 0.25;
    var currentString = panel.text;

    var inputChangedLoop = function() {
        // Check for a change
        if(currentString != panel.text) {
            // Update current string
            currentString = panel.text;

            // Run the callback
            callback(panel, currentString);
        }

        if(shouldListen) {
            $.Schedule(checkRate, inputChangedLoop);
        }
    }

    panel.SetPanelEvent('onfocus', function() {
        // Enable listening, and monitor the field
        shouldListen = true;
        inputChangedLoop();
    });

    panel.SetPanelEvent('onblur', function() {
        // No longer listen
        shouldListen = false;
    });
}

// Hooks a tab change
function hookTabChange(tabName, callback) {
    onLoadTabHook[tabName] = callback;
}

// Makes skill info appear when you hover the panel that is parsed in
function hookSkillInfo(panel) {
    // Show
    panel.SetPanelEvent('onmouseover', function() {
        var ability = panel.GetAttributeString('abilityname', 'unknown');
        $.DispatchEvent('DOTAShowAbilityTooltip', panel, ability);
    });

    // Hide
    panel.SetPanelEvent('onmouseout', function() {
        $.DispatchEvent('DOTAHideAbilityTooltip', panel);
    });
}

// Hero data has changed
function OnHeroDataChanged(table_name, key, data) {
    heroData[key] = data;

    // Do the schedule
    if(dataHooks.OnHeroDataChanged == null) dataHooks.OnHeroDataChanged = 0;
    var myHookNumber = ++dataHooks.OnHeroDataChanged;
    $.Schedule(1, function() {
        if(dataHooks.OnHeroDataChanged == myHookNumber) {
            buildHeroList();
        }
    });
}

// Flag data has changed
function OnFlagDataChanged(table_name, key, data) {
    flagDataInverse[key] = data;

    // Do the schedule
    if(dataHooks.OnFlagDataChanged == null) dataHooks.OnFlagDataChanged = 0;
    var myHookNumber = ++dataHooks.OnFlagDataChanged;
    $.Schedule(1, function() {
        if(dataHooks.OnFlagDataChanged == myHookNumber) {
            buildFlagList();
        }
    });
}

// Selected heroes has changed
function OnSelectedHeroesChanged(table_name, key, data) {
    // Grab data
    var playerID = data.playerID;
    var heroName = data.heroName;

    // Store the change
    selectedHeroes[playerID] = heroName;

    // Was it an update on our local player?
    if(playerID == Players.GetLocalPlayer()) {
        // Update our hero icon and text
        $('#pickingPhaseSelectedHeroImage').heroname = heroName;
        $('#pickingPhaseSelectedHeroText').text = $.Localize(heroName);
    }
}

// Selected primary attribute changes
function OnSelectedAttrChanged(table_name, key, data) {
    // Grab data
    var playerID = data.playerID;
    var newAttr = data.newAttr;

    // Store the change
    selectedAttr[playerID] = newAttr;

    // Was it an update on our local player?
    if(playerID == Players.GetLocalPlayer()) {
        // Update which attribute is selected
        $('#pickingPhaseSelectHeroStr').SetHasClass('selectedAttribute', newAttr == 'str');
        $('#pickingPhaseSelectHeroAgi').SetHasClass('selectedAttribute', newAttr == 'agi');
        $('#pickingPhaseSelectHeroInt').SetHasClass('selectedAttribute', newAttr == 'int');
    }
}

// Selected abilities has changed
function OnSelectedSkillsChanged(table_name, key, data) {
    var playerID = data.playerID;

    // Store the change
    selectedSkills[playerID] = data.skills;

    if(playerID == Players.GetLocalPlayer()) {
        for(var key in selectedSkills[playerID]) {
            var ab = $('#lodYourAbility' + key);
            var abName = selectedSkills[playerID][key];

            if(ab != null) {
                ab.abilityname = abName;
                ab.SetAttributeString('abilityname', abName);
            }
        }
    }
}

// Sets up the hero builder tab
function setupBuilderTabs() {
    var mainPanel = $('#pickingPhaseTabs');
    $.Each(mainPanel.Children(), function(panelTab) {
        if(panelTab.BHasClass('pickingPhaseTab')) {
            $.Each(panelTab.Children(), function(tabElement) {
                var tabLink = tabElement.GetAttributeString('link', '-1');

                if(tabLink != '-1') {
                    tabElement.SetPanelEvent('onactivate', function() {
                        showBuilderTab(tabLink);

                        // No skills selected anymore
                        setSelectedDropAbility();

                        // Focus to nothing
                        focusNothing();
                    });
                }
            });
        }
    });

    var mainContentPanel = $('#pickingPhaseTabsContent');
    $.Each(mainContentPanel.Children(), function(panelTab) {
        if(panelTab.BHasClass('pickingPhaseTabContent')) {
            panelTab.visible = false;
        }
    });

    // Show the main tab only
    showBuilderTab('pickingPhaseMainTab');

    // Default to no selected preview hero
    setSelectedHelperHero();

    // Hook abilitys that should show info
    for(var i=1;i<=6; ++i) {
        hookSkillInfo($('#lodYourAbility' + i));
    }

    for(var i=1;i<=16; ++i) {
        hookSkillInfo($('#buildingHelperHeroPreviewSkill' + i));
    }

    // Loop over all the panels we need to hook
    /*for(var i=0; i<toHook.length; ++i) {
        var panel = $('#' + toHook[i]);

        $.Each(panel.Children(), function(obj) {
            $.Msg(obj);
        })
    }*/
}

// Builds the hero list
function buildHeroList() {
    $.Msg('building hero list...');

    var strHeroes = [];
    var agiHeroes = [];
    var intHeroes = [];

    for(var heroName in heroData) {
        var info = heroData[heroName];

        switch(info.AttributePrimary) {
            case 'DOTA_ATTRIBUTE_STRENGTH':
                strHeroes.push(heroName);
            break;

            case 'DOTA_ATTRIBUTE_AGILITY':
                agiHeroes.push(heroName);
            break;

            case 'DOTA_ATTRIBUTE_INTELLECT':
                intHeroes.push(heroName);
            break;
        }
    }

    function doInsertHeroes(container, heroList) {
        // Cleanup container
        container.RemoveAndDeleteChildren();

        // Sort the hero list
        heroList.sort();

        // Insert it
        for(var i=0; i<heroList.length; ++i) {
            (function() {
                var heroName = heroList[i];

                // Create the panel
                var newPanel = $.CreatePanel('DOTAHeroImage', container, 'heroSelector_' + heroName);
                newPanel.heroname = heroName;
                newPanel.heroimagestyle = 'portrait';

                newPanel.SetPanelEvent('onactivate', function() {
                    // Set the selected helper hero
                    setSelectedHelperHero(heroName);
                });
            })();
        }

    }

    // Insert heroes
    doInsertHeroes($('#strHeroContainer'), strHeroes);
    doInsertHeroes($('#agiHeroContainer'), agiHeroes);
    doInsertHeroes($('#intHeroContainer'), intHeroes);
}

// Build the flags list
function buildFlagList() {
    $.Msg('Building flag list...');

    flagData = {};

    for(var abilityName in flagDataInverse) {
        var flags = flagDataInverse[abilityName];

        for(var flag in flags) {
            if(flagData[flag] == null) flagData[flag] = {};

            flagData[flag][abilityName] = flags[flag];
        }
    }
}

function setSelectedHelperHero(heroName) {
    var previewCon = $('#buildingHelperHeroPreview');

    // Validate hero name
    if(heroName == null || !heroData[heroName]) {
        previewCon.visible = false;
        return;
    }

    // Show the preview
    previewCon.visible = true;

    // Grab the info
    var info = heroData[heroName];

    // Update the hero
    $('#buildingHelperHeroPreviewHero').heroname = heroName;

    // Set this as the selected one
    currentSelectedHero = heroName;

    for(var i=1; i<=16; ++i) {
        var abName = info['Ability' + i];
        var abCon = $('#buildingHelperHeroPreviewSkill' + i);

        // Ensure it is a valid ability, and we have flag data about it
        if(abName != null && abName != '' && flagDataInverse[abName]) {
            abCon.visible = true;
            abCon.abilityname = abName;
            abCon.SetAttributeString('abilityname', abName);
        } else {
            abCon.visible = false;
        }
    }

    // No abilities selected anymore
    setSelectedDropAbility();
}

// They try to set a new hero
function onNewHeroSelected() {
    // Push data to the server
    chooseHero(currentSelectedHero);
}

// They tried to set a new primary attribute
function setPrimaryAttr(newAttr) {
    choosePrimaryAttr(newAttr);
}

// Highlights slots for dropping
function highlightDropSlots() {
    // If no skill is selected, highlight nothing
    if(currentSelectedSkill == '') {
        for(var i=1; i<=6; ++i) {
            var ab = $('#lodYourAbility' + i);
            ab.SetHasClass('lodSelectedDrop', false);
        }
        return;
    }

    // Decide which slots can be dropped into
    for(var i=1; i<=6; ++i) {
        var ab = $('#lodYourAbility' + i);
        ab.SetHasClass('lodSelectedDrop', true);
    }
}

// Sets the currently selected ability for dropping
function setSelectedDropAbility(abName, abcon) {
    abName = abName || '';

    // Remove the highlight from the old ability icon
    if(currentSelectedAbCon != null) {
        currentSelectedAbCon.SetHasClass('lodSelected', false);
        currentSelectedAbCon = null;
    }

    if(currentSelectedSkill == abName || abName == '') {
        // Nothing selected
        currentSelectedSkill = '';
    } else {
        // Do a selection
        currentSelectedSkill = abName;
        currentSelectedAbCon = abcon;

        // Highlight ability
        if(abcon != null) {
            abcon.SetHasClass('lodSelected', true);
        }
    }

    // Highlight which slots we can drop it into
    highlightDropSlots();
}

// They clicked on a skill
function onHeroAbilityClicked(heroAbilityID) {
    // Focus nothing
    focusNothing();

    var abcon = $('#buildingHelperHeroPreviewSkill' + heroAbilityID);
    var ab = abcon.abilityname;

    // Push the event
    setSelectedDropAbility(ab, abcon);
}

// They clicked on one of their ability icons
function onYourAbilityIconPressed(slot) {
    // Focus nothing
    focusNothing();

    // Check what action should be performed
    if(currentSelectedSkill != '') {
        // They are trying to select a new skill
        chooseNewAbility(slot, currentSelectedSkill);

        // Done
        return;
    }

    // TODO: allow swapping of skills

}

function showBuilderTab(tabName) {
    // Hide all panels
    var mainPanel = $('#pickingPhaseTabs');
    $.Each(mainPanel.Children(), function(panelTab) {
        panelTab.visible = false;
    });

    var mainContentPanel = $('#pickingPhaseTabsContent');
    $.Each(mainContentPanel.Children(), function(panelTab) {
        panelTab.visible = false;
    });

    // Show our tab
    var ourTab = $('#' + tabName);
    if(ourTab != null) ourTab.visible = true;

    var ourTabContent = $('#' + tabName + 'Content');
    if(ourTabContent != null) ourTabContent.visible = true;

    // Process hooks
    if(onLoadTabHook[tabName]) {
        onLoadTabHook[tabName](tabName);
    }
}

// When the skill tab is shown
var firstSkillTabCall = true;
function OnSkillTabShown(tabName) {
    if(firstSkillTabCall) {
        // Empty the skills tab
        var con = $('#pickingPhaseSkillTabContent');
        con.RemoveAndDeleteChildren();

        // Used to provide unique handles
        var unqiueCounter = 0;

        // A store for all abilities
        var abilityStore = {};

        // TODO: Clear filters


        // Filter processor
        var searchText = '';
        var searchCategory = '';

        var calculateFilters = function() {
            // Loop over all abilties
            for(var abilityName in abilityStore) {
                var ab = abilityStore[abilityName];
                var shouldShow = true;

                if(shouldShow && searchCategory.length > 0) {
                    if(!flagDataInverse[abilityName][searchCategory]) {
                        shouldShow = false;
                    }
                }

                if(shouldShow && searchText.length > 0) {
                    if(abilityName.indexOf(searchText) == -1) {
                        shouldShow = false;
                    }
                }

                ab.visible = shouldShow;
            }
        }

        // Hook searchbox

        addInputChangedEvent($('#lodSkillSearchInput'), function(panel, newValue) {
            // Store the new text
            searchText = newValue.toLowerCase();

            // Update list of abs
            calculateFilters();
        });

        // Add input categories
        var dropdownCategories = $('#lodSkillCategoryHolder');
        dropdownCategories.RemoveAllOptions();
        dropdownCategories.SetPanelEvent('oninputsubmit', function() {
            // Update the category
            searchCategory = dropdownCategories.GetSelected().GetAttributeString('category', '');

            // Update the visible abilties
            calculateFilters();
        });

        // Add header
        var categoryHeader = $.CreatePanel('Label', dropdownCategories, 'skillTabCategory' + (++unqiueCounter));
        categoryHeader.text = $.Localize('lod_cat_none');
        dropdownCategories.AddOption(categoryHeader);
        dropdownCategories.SetSelected('skillTabCategory' + unqiueCounter);

        // Add categories
        for(var category in flagData) {
            if(category == 'category') continue;

            var dropdownLabel = $.CreatePanel('Label', dropdownCategories, 'skillTabCategory' + (++unqiueCounter));
            dropdownLabel.text = $.Localize('lod_cat_' + category);
            dropdownLabel.SetAttributeString('category', category);
            dropdownCategories.AddOption(dropdownLabel);
        }


        // Start to add skills

        for(var abName in flagDataInverse) {
            // Create a new scope
            (function(abName) {
                // Create the image
                var abcon = $.CreatePanel('DOTAAbilityImage', con, 'skillTabSkill' + (++unqiueCounter));
                hookSkillInfo(abcon);
                abcon.abilityname = abName;
                abcon.SetAttributeString('abilityname', abName);
                abcon.SetHasClass('lodMiniAbility', true);

                //abcon.SetHasClass('disallowedSkill', true);

                abcon.SetPanelEvent('onactivate', function() {
                    setSelectedDropAbility(abName, abcon);
                });

                // Store a reference to it
                abilityStore[abName] = abcon;
            })(abName);
        }
    }

    // No longewr the first call
    firstSkillTabCall = false;
}

// Are we the host?
function isHost() {
    var playerInfo = Game.GetLocalPlayerInfo();
    if (!playerInfo) return false;
    return playerInfo.player_has_host_privileges;
}

// Sets an option to a value
function setOption(optionName, optionValue) {
    // Ensure we are the host
    if(!isHost()) return;

    // Don't send an update twice!
    if(lastOptionValues[optionName] && lastOptionValues[optionName] == optionValue) return;

    // Tell the server we changed a setting
    GameEvents.SendCustomGameEventToServer('lodOptionSet', {
        k: optionName,
        v: optionValue
    });
}

// Updates our selected hero
function chooseHero(heroName) {
    GameEvents.SendCustomGameEventToServer('lodChooseHero', {
        heroName:heroName
    });
}

// Updates our selected primary attribute
function choosePrimaryAttr(newAttr) {
    GameEvents.SendCustomGameEventToServer('lodChooseAttr', {
        newAttr:newAttr
    });
}

// Updates our selected abilities
function chooseNewAbility(slot, abilityName) {
    var theSkill = abilityName;

    // No skills are selected anymore
    setSelectedDropAbility();

    // Push it to the server to validate
    GameEvents.SendCustomGameEventToServer('lodChooseAbility', {
        slot: slot,
        abilityName: abilityName
    });
}

// Adds a player to the list of unassigned players
function addUnassignedPlayer(playerID) {
    // Grab the panel to insert into
    var unassignedPlayersContainerNode = $('#unassignedPlayersContainer');
    if (unassignedPlayersContainerNode == null) return;

    // Create the new panel
    var newPlayerPanel = $.CreatePanel('Panel', unassignedPlayersContainerNode, 'unassignedPlayer');
    newPlayerPanel.SetAttributeInt('playerID', playerID);
    newPlayerPanel.BLoadLayout('file://{resources}/layout/custom_game/unasignedPlayer.xml', false, false);

    // Add this panel to the list of panels we've generated
    allPlayerPanels.push(newPlayerPanel);
}

// Adds a player to a team
function addPlayerToTeam(playerID, panel) {
    // Validate the panel
    if(panel == null) return;

    // Create the new panel
    var newPlayerPanel = $.CreatePanel('Panel', panel, 'teamPlayer');
    newPlayerPanel.SetAttributeInt('playerID', playerID);
    newPlayerPanel.BLoadLayout('file://{resources}/layout/custom_game/teamPlayer.xml', false, false);

    // Add this panel to the list of panels we've generated
    allPlayerPanels.push(newPlayerPanel);
}

// Build the options categories
function buildOptionsCategories() {
    // Grab the main container for option categories
    var catContainer = $('#optionCategories');
    var optionContainer = $('#optionList');

    // Delete any children
    catContainer.RemoveAndDeleteChildren();
    optionContainer.RemoveAndDeleteChildren();

    // Reset option links
    allOptionLinks = {};

    // Loop over all the option labels
    for(var optionLabelText in allOptions) {
        // Create a new scope
        (function(optionLabelText, optionData) {
            // The button
            var optionCategory = $.CreatePanel('Button', catContainer, 'option_button_' + optionLabelText);
            optionCategory.SetAttributeString('cat', optionLabelText);
            //optionCategory.AddClass('PlayButton');
            //optionCategory.AddClass('RadioBox');
            //optionCategory.AddClass('HeroGridNavigationButtonBox');
            //optionCategory.AddClass('NavigationButtonGlow');
            optionCategory.AddClass('OptionButton');

            var innerPanel = $.CreatePanel('Panel', optionCategory, 'option_button_' + optionLabelText + '_fancy');
            innerPanel.AddClass('OptionButtonFancy');

            var innerPanelTwo = $.CreatePanel('Panel', optionCategory, 'option_button_' + optionLabelText + '_glow');
            innerPanelTwo.AddClass('OptionButtonGlow');

            // Check if this requires custom settings
            if(optionData.custom) {
                optionCategory.AddClass('optionButtonCustomRequired');
            }

            // Button text
            var optionLabel = $.CreatePanel('Label', optionCategory, 'option_button_' + optionLabelText + '_label');
            optionLabel.text = $.Localize(optionLabelText + '_lod');
            optionLabel.AddClass('OptionButtonLabel');

            // The panel
            var optionPanel = $.CreatePanel('Panel', optionContainer, 'option_panel_' + optionLabelText);
            optionPanel.AddClass('OptionPanel');

            if(optionData.custom) {
                optionPanel.AddClass('optionButtonCustomRequired');
            }

            // Build the fields
            var fieldData = optionData.fields;

            for(var i=0; i<fieldData.length; ++i) {
                // Create new script scope
                (function() {
                    // Grab info about this field
                    var info = fieldData[i];
                    var fieldName = info.name;
                    var sort = info.sort;
                    var values = info.values;

                    // Create the info
                    var mainSlot = $.CreatePanel('Panel', optionPanel, 'option_panel_main_' + fieldName);
                    mainSlot.AddClass('optionSlotPanel');
                    var infoLabel = $.CreatePanel('Label', mainSlot, 'option_panel_main_' + fieldName);
                    infoLabel.text = $.Localize(info.des);
                    infoLabel.AddClass('optionSlotPanelLabel');

                    // Is this a preset?
                    if(info.preset) {
                        mainSlot.AddClass('optionSlotPanelNoCustom');
                    }

                    var floatRightContiner = $.CreatePanel('Panel', mainSlot, 'option_panel_field_' + fieldName + '_container');
                    floatRightContiner.AddClass('optionsSlotPanelContainer');

                    // Create stores for the newly created items
                    var hostPanel;
                    var slavePanel = $.CreatePanel('Label', floatRightContiner, 'option_panel_field_' + fieldName + '_slave');
                    slavePanel.AddClass('optionsSlotPanelSlave');
                    slavePanel.AddClass('optionSlotPanelLabel');
                    slavePanel.text = 'Unknown';

                    switch(sort) {
                        case 'dropdown':
                            // Create the drop down
                            hostPanel = $.CreatePanel('DropDown', floatRightContiner, 'option_panel_field_' + fieldName);
                            hostPanel.AddClass('optionsSlotPanelHost');
                            hostPanel.AccessDropDownMenu().RemoveAndDeleteChildren();

                            // Maps values to panels
                            var valueToPanel = {};

                            for(var j=0; j<values.length; ++j) {
                                var valueInfo = values[j];
                                var fieldText = valueInfo.text;
                                var fieldValue = valueInfo.value;

                                var subPanel = $.CreatePanel('Label', hostPanel.AccessDropDownMenu(), 'option_panel_field_' + fieldName + '_' + fieldText);
                                subPanel.text = $.Localize(fieldText);
                                //subPanel.SetAttributeString('fieldText', fieldText);
                                subPanel.SetAttributeInt('fieldValue', fieldValue);
                                hostPanel.AddOption(subPanel);

                                // Store the map
                                valueToPanel[fieldValue] = 'option_panel_field_' + fieldName + '_' + fieldText;

                                if(j == values.length-1) {
                                    hostPanel.SetSelected(valueToPanel[fieldValue]);
                                }
                            }

                            // Mapping function
                            optionFieldMap[fieldName] = function(newValue) {
                                for(var i=0; i<values.length; ++i) {
                                    var valueInfo = values[i];
                                    var fieldText = valueInfo.text;
                                    var fieldValue = valueInfo.value;

                                    if(fieldValue == newValue) {
                                        var thePanel = valueToPanel[fieldValue];
                                        if(thePanel) {
                                            // Select that panel
                                            hostPanel.SetSelected(thePanel);

                                            // Update text
                                            slavePanel.text = $.Localize(fieldText);
                                            break;
                                        }
                                    }
                                }
                            }

                            // When the data changes
                            hostPanel.SetPanelEvent('oninputsubmit', function() {
                                // Grab the selected one
                                var selected = hostPanel.GetSelected();
                                //var fieldText = selected.GetAttributeString('fieldText', -1);
                                var fieldValue = selected.GetAttributeInt('fieldValue', -1);

                                // Sets an option
                                setOption(fieldName, fieldValue);

                                $.Msg('Pushing option ' + fieldName + ' = ' + fieldValue);
                            });
                        break;
                    }


                })();
            }

            // Fix stuff
            $.CreatePanel('Label', optionPanel, 'option_panel_fixer_' + optionLabelText);

            // Store the reference
            allOptionLinks[optionLabelText] = {
                panel: optionPanel,
                button: optionCategory
            }

            // The function to run when it is activated
            function whenActivated() {
                // Disactivate all other ones
                for(var key in allOptionLinks) {
                    var data = allOptionLinks[key];

                    data.panel.SetHasClass('activeMenu', false);
                    data.button.SetHasClass('activeMenu', false);
                }

                // Activate our one
                optionPanel.SetHasClass('activeMenu', true);
                optionCategory.SetHasClass('activeMenu', true);

                // If we are the host, tell the server which menu we are looking at
                if(isHost()) {
                    GameEvents.SendCustomGameEventToServer('lodOptionsMenu', {v: optionLabelText});
                }
            }

            // When the button is clicked
            optionCategory.SetPanelEvent('onactivate', whenActivated);

            // Check if it is default
            if(optionData.default) {
                whenActivated();
            }
        })(optionLabelText, allOptions[optionLabelText]);
    }
}

// Player presses auto assign
function onAutoAssignPressed() {
    // Auto assign teams
    Game.AutoAssignPlayersToTeams();

    // Lock teams
    Game.SetTeamSelectionLocked(true);
}

// Player presses shuffle
function onShufflePressed() {
    // Shuffle teams
    Game.ShufflePlayerTeamAssignments();
}

// Player presses lock teams
function onLockPressed() {
    // Don't allow a forced start if there are unassigned players
    if (Game.GetUnassignedPlayerIDs().length > 0)
        return;

    // Lock the team selection so that no more team changes can be made
    Game.SetTeamSelectionLocked(true);
}

// Player presses unlock teams
function onUnlockPressed() {
    // Unlock Teams
    Game.SetTeamSelectionLocked(false);
}

// Lock options pressed
function onLockOptionsPressed() {
    // Ensure teams are locked
    if(!Game.GetTeamSelectionLocked()) return;

    // Lock options
    GameEvents.SendCustomGameEventToServer('lodOptionsLocked', {});
}

// Player tries to join radiant
function onJoinRadiantPressed() {
    // Attempt to join radiant
    Game.PlayerJoinTeam(DOTATeam_t.DOTA_TEAM_GOODGUYS);
}

// Player tries to join dire
function onJoinDirePressed() {
    // Attempt to join dire
    Game.PlayerJoinTeam(DOTATeam_t.DOTA_TEAM_BADGUYS);
}

// Player tries to join unassigned
function onJoinUnassignedPressed() {
    // Attempt to join unassigned
    Game.PlayerJoinTeam(DOTATeam_t.DOTA_TEAM_NOTEAM);
}

//--------------------------------------------------------------------------------------------------
// Update the unassigned players list and all of the team panels whenever a change is made to the
// player team assignments
//--------------------------------------------------------------------------------------------------
function OnTeamPlayerListChanged() {
    // Kill all of the old panels
    for(var i=0; i<allPlayerPanels.length; ++i) {
        // Grab the panel
        var panel = allPlayerPanels[i];

        // Kill the panel
        panel.DeleteAsync(0);
    }
    allPlayerPanels = [];

    // Move all existing player panels back to the unassigned player list
    /*for ( var i = 0; i < g_PlayerPanels.length; ++i )
    {
        var playerPanel = g_PlayerPanels[ i ];
        playerPanel.SetParent( unassignedPlayersContainerNode );
    }*/

    // Create a panel for each of the unassigned players
    var unassignedPlayers = Game.GetUnassignedPlayerIDs();
    for(var i=0; i<unassignedPlayers.length; ++i) {
        // Add this player to the unassigned list
        addUnassignedPlayer(unassignedPlayers[i]);
    }

    // Add radiant players
    var radiantPlayers = Game.GetPlayerIDsOnTeam(DOTATeam_t.DOTA_TEAM_GOODGUYS);
    for(var i=0; i<radiantPlayers.length; ++i) {
        // Add this player to the unassigned list
        addPlayerToTeam(radiantPlayers[i], $('#theRadiantContainer'));
    }

    // Add radiant players
    var direPlayers = Game.GetPlayerIDsOnTeam(DOTATeam_t.DOTA_TEAM_BADGUYS);
    for(var i=0; i<direPlayers.length; ++i) {
        // Add this player to the unassigned list
        addPlayerToTeam(direPlayers[i], $('#theDireContainer'));
    }

    // Update all of the team panels moving the player panels for the
    // players assigned to each team to the corresponding team panel.
    /*for ( var i = 0; i < g_TeamPanels.length; ++i )
    {
        UpdateTeamPanel( g_TeamPanels[ i ] )
    }*/

    // Set the class on the panel to indicate if there are any unassigned players
    $('#mainSelectionRoot').SetHasClass('unassigned_players', unassignedPlayers.length != 0 );
    $('#mainSelectionRoot').SetHasClass('no_unassigned_players', unassignedPlayers.length == 0 );

    // Set host privledges
    var playerInfo = Game.GetLocalPlayerInfo();
    if (!playerInfo) return;

    $('#mainSelectionRoot').SetHasClass('player_has_host_privileges', playerInfo.player_has_host_privileges);
}

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
function OnPlayerSelectedTeam( nPlayerId, nTeamId, bSuccess ) {
    var playerInfo = Game.GetLocalPlayerInfo();
    if (!playerInfo) return;

    // Check to see if the event is for the local player
    if (playerInfo.player_id === nPlayerId) {
        // Play a sound to indicate success or failure
        if (bSuccess) {
            Game.EmitSound('ui_team_select_pick_team');
        } else {
            Game.EmitSound('ui_team_select_pick_team_failed');
        }
    }
}

// A phase was changed
function OnPhaseChanged(table_name, key, data) {
    switch(key) {
        case 'phase':
            // Update the current phase
            currentPhase = data.v;

            // Update phase classes
            var masterRoot = $('#mainSelectionRoot');
            masterRoot.SetHasClass('phase_loading', currentPhase == PHASE_LOADING);
            masterRoot.SetHasClass('phase_option_selection', currentPhase == PHASE_OPTION_SELECTION);
            masterRoot.SetHasClass('phase_banning', currentPhase == PHASE_BANNING);
            masterRoot.SetHasClass('phase_selection', currentPhase == PHASE_SELECTION);
            masterRoot.SetHasClass('phase_drafting', currentPhase == PHASE_DRAFTING);
            masterRoot.SetHasClass('phase_review', currentPhase == PHASE_REVIEW);
            masterRoot.SetHasClass('phase_ingame', currentPhase == PHASE_INGAME);

            // Progrss to the new phase
            SetSelectedPhase(currentPhase, true);
        break;

        case 'endOfTimer':
            // Store the end time
            endOfTimer = data.v;
        break;

        case 'activeTab':
            var newActiveTab = data.v;

            for(var key in allOptionLinks) {
                // Grab reference
                var info = allOptionLinks[key];
                var optionButton = info.button;

                // Set active one
                optionButton.SetHasClass('activeHostMenu', key == newActiveTab);
            }
        break;
    }
}

// An option just changed
function OnOptionChanged(table_name, key, data) {
    // Store new value
    optionValueList[key] = data.v;

    // Check if there is a mapping function available
    if(optionFieldMap[key]) {
        // Yep, run it!
        optionFieldMap[key](data.v);
    }

    // Check for the custom stuff
    if(key == 'lodOptionGamemode') {
        // Check if we are allowing custom settings
        allowCustomSettings = data.v == -1;
        $('#mainSelectionRoot').SetHasClass('allow_custom_settings', allowCustomSettings);
        $('#mainSelectionRoot').SetHasClass('disallow_custom_settings', !allowCustomSettings);
    }

    // Check if it's the number of slots allowed
    if(key == 'lodOptionCommonMaxSkills' || key == 'lodOptionCommonMaxSlots' || key == 'lodOptionCommonMaxUlts') {
        onMaxSlotsChanged();
    }
}

// The max number of slots / ults / regular abs has changed!
function onMaxSlotsChanged() {
    var maxSlots = optionValueList['lodOptionCommonMaxSlots'];
    var maxSkills = optionValueList['lodOptionCommonMaxSkills'];
    var maxUlts = optionValueList['lodOptionCommonMaxUlts'];

    // Ensure all variables are defined
    if(maxSlots == null || maxSkills == null || maxUlts == null) return;

    for(var i=1; i<=6; ++i) {
        var con = $('#lodYourAbility' + i);

        if(i <= maxSlots) {
            con.visible = true;
        } else {
            con.visible = false;
        }
    }
}

// Changes which phase the player currently has selected
function SetSelectedPhase(newPhase, noSound) {
    if(newPhase > currentPhase) {
        Game.EmitSound('ui_team_select_pick_team_failed');
        //return;   UNCOMMENT ME AFTER DONE DEBUGGING BIIIIIIITTTTTTTTTHHHHHHH
    }

    // Emit the click noise
    if(!noSound) Game.EmitSound('ui_team_select_pick_team');

    // Set the phase
    selectedPhase = newPhase;

    // Update CSS
    var masterRoot = $('#mainSelectionRoot');
    masterRoot.SetHasClass('phase_option_selection_selected', selectedPhase == PHASE_OPTION_SELECTION);
    masterRoot.SetHasClass('phase_banning_selected', selectedPhase == PHASE_BANNING);
    masterRoot.SetHasClass('phase_selection_selected', selectedPhase == PHASE_SELECTION);
    masterRoot.SetHasClass('phase_drafting_selected', selectedPhase == PHASE_DRAFTING);
    masterRoot.SetHasClass('phase_review_selected', selectedPhase == PHASE_REVIEW);
}

//--------------------------------------------------------------------------------------------------
// Update the state for the transition timer periodically
//--------------------------------------------------------------------------------------------------
function UpdateTimer() {
    /*var gameTime = Game.GetGameTime();
    var transitionTime = Game.GetStateTransitionTime();

    CheckForHostPrivileges();

    var mapInfo = Game.GetMapInfo();
    $( "#MapInfo" ).SetDialogVariable( "map_name", mapInfo.map_display_name );

    if ( transitionTime >= 0 )
    {
        $( "#StartGameCountdownTimer" ).SetDialogVariableInt( "countdown_timer_seconds", Math.max( 0, Math.floor( transitionTime - gameTime ) ) );
        $( "#StartGameCountdownTimer" ).SetHasClass( "countdown_active", true );
        $( "#StartGameCountdownTimer" ).SetHasClass( "countdown_inactive", false );
    }
    else
    {
        $( "#StartGameCountdownTimer" ).SetHasClass( "countdown_active", false );
        $( "#StartGameCountdownTimer" ).SetHasClass( "countdown_inactive", true );
    }

    var autoLaunch = Game.GetAutoLaunchEnabled();
    $( "#StartGameCountdownTimer" ).SetHasClass( "auto_start", autoLaunch );
    $( "#StartGameCountdownTimer" ).SetHasClass( "forced_start", ( autoLaunch == false ) );*/

    // Allow the ui to update its state based on team selection being locked or unlocked
    $('#mainSelectionRoot').SetHasClass('teams_locked', Game.GetTeamSelectionLocked());
    $('#mainSelectionRoot').SetHasClass('teams_unlocked', Game.GetTeamSelectionLocked() == false);

    // Phase specific stuff
    switch(currentPhase) {
        case PHASE_BANNING:
            // Workout how long is left
            var currentTime = Game.Time();
            var timeLeft = Math.ceil(endOfTimer - currentTime);

            var timeLeftLabel = $('#lodBanningTimeRemaining');
            timeLeftLabel.text = '(' + timeLeft + ')'
        break;

        case PHASE_SELECTION:
            // Workout how long is left
            var currentTime = Game.Time();
            var timeLeft = Math.ceil(endOfTimer - currentTime);

            var timeLeftLabel = $('#lodSelectionTimeRemaining');
            timeLeftLabel.text = '(' + timeLeft + ')'
        break;

        case PHASE_REVIEW:
            // Workout how long is left
            var currentTime = Game.Time();
            var timeLeft = Math.ceil(endOfTimer - currentTime);

            var timeLeftLabel = $('#lodReviewTimeRemaining');
            timeLeftLabel.text = '(' + timeLeft + ')'
        break;
    }

    $.Schedule(0.1, UpdateTimer);
}

//--------------------------------------------------------------------------------------------------
// Entry point called when the team select panel is created
//--------------------------------------------------------------------------------------------------
(function() {
    //$( "#mainTeamContainer" ).SetAcceptsFocus( true ); // Prevents the chat window from taking focus by default

    /*var teamsListRootNode = $( "#TeamsListRoot" );

    // Construct the panels for each team
    for ( var teamId of Game.GetAllTeamIDs() )
    {
        var teamNode = $.CreatePanel( "Panel", teamsListRootNode, "" );
        teamNode.AddClass( "team_" + teamId ); // team_1, etc.
        teamNode.SetAttributeInt( "team_id", teamId );
        teamNode.BLoadLayout( "file://{resources}/layout/custom_game/team_select_team.xml", false, false );

        // Add the team panel to the global list so we can get to it easily later to update it
        g_TeamPanels.push( teamNode );
    }*/

    // Automatically assign players to teams.
    Game.AutoAssignPlayersToTeams();

    // Do an initial update of the player team assignment
    OnTeamPlayerListChanged();

    // Start updating the timer, this function will schedule itself to be called periodically
    UpdateTimer();

    // Build the options categories
    buildOptionsCategories();

    // Register a listener for the event which is brodcast when the team assignment of a player is actually assigned
    $.RegisterForUnhandledEvent( "DOTAGame_TeamPlayerListChanged", OnTeamPlayerListChanged );

    // Register a listener for the event which is broadcast whenever a player attempts to pick a team
    $.RegisterForUnhandledEvent( "DOTAGame_PlayerSelectedCustomTeam", OnPlayerSelectedTeam );

    // Hook stuff
    hookAndFire('phase_pregame', OnPhaseChanged);
    hookAndFire('options', OnOptionChanged);
    hookAndFire('heroes', OnHeroDataChanged);
    hookAndFire('flags', OnFlagDataChanged);
    hookAndFire('selected_heroes', OnSelectedHeroesChanged);
    hookAndFire('selected_attr', OnSelectedAttrChanged);
    hookAndFire('selected_skills', OnSelectedSkillsChanged);

    // Hook tab changes
    hookTabChange('pickingPhaseSkillTab', OnSkillTabShown);

    // Setup the tabs
    setupBuilderTabs();

    // Make input boxes nicer to use
    $('#mainSelectionRoot').SetPanelEvent('onactivate', focusNothing);
})();
