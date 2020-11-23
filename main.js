var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleMiner = require('role.miner');
var roleTransporter = require('role.transporter');
var spawnCreeps = require('spawn');
var buildRoad = require('build.road');
var buildBase = require('build.base');
var towerActions = require('tower');
var roleTowerGuy = require('role.towerGuy');

module.exports.loop = function () {
    
    //Clear Memory of Dead Creeps
    for(let name in Memory.creeps){ 
        if(Game.creeps[name] == undefined){
            delete Memory.creeps[name];
        }
    }
    
    //Tower Scripts
    var towers = Game.rooms['W12S13'].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
    for(var tower in towers) {
        towerActions.run(towers[tower].id);
    }

    //Set action type for Creeps
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        // Starter Roles
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.selfHarvestingBuilder(creep);
        }
        // Level 2 & 3 Roles
        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'bigMiner') {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }
        if(creep.memory.role == 'upgraderTransporter'){
            roleUpgrader.runTransporter(creep);
        }
        if(creep.memory.role == 'builderTransporter'){
            roleBuilder.builderHarvester(creep);
        }
        if(creep.memory.role == 'towerGuy'){
            roleTowerGuy.run(creep);
        }
    }
    
    spawnCreeps.level2Spawn();
}

//Building Scripts
    //buildBase.buildMediumBase();
    //buildBase.buildSmallBase();
    //buildRoad.buildRoad(buildRoad.getPathForSpawn());
    //var sourceId = '5bbcac3f9099fc012e635295';
    //buildRoad.buildRoad(buildRoad.getPathForConnecting(sourceId));
    //buildRoad.buildRoad(buildRoad.getPathForController(sourceId));
    