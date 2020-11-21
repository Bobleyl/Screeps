var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleMiner = require('role.miner');
var roleTransporter = require('role.transporter');
var spawnCreeps = require('spawn');
var buildRoad = require('build.road');
var buildBase = require('build.base');

module.exports.loop = function () {
    
    //Clear Memory of Dead Creeps
    for(let name in Memory.creeps){ 
        if(Game.creeps[name] == undefined){
            delete Memory.creeps[name];
        }
    }
    
    //buildBase.buildSmallBase();
    //buildRoad.buildRoadToEnergy();

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
        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }
        if(creep.memory.role == 'upgraderTransporter'){
            roleUpgrader.runTransporter(creep);
        }
        if(creep.memory.role == 'builderTransporter'){
            roleBuilder.builderHarvester(creep);
        }
    }
    
    spawnCreeps.level2Spawn();
    
    //Automate spawning of new Creeps
    // var minNumberHarvesters = 8;
    // var maxUpgraders = 12;
    // var currentNumberHarvesters = _(Memory.creeps).filter( { role: 'harvester' } ).size();
    // var currentNumberUpgraders = _(Memory.creeps).filter( { role: 'upgrader' } ).size();
    // var currentNumberBuilders = _(Memory.creeps).filter( { role: 'builder' } ).size();
    // console.log("Current Harvestors: " + currentNumberHarvesters);
    // console.log("Current Upgraders: " + currentNumberUpgraders);
    // console.log("Current Builders: " + currentNumberBuilders);
    
    // if (currentNumberHarvesters < minNumberHarvesters) {
    //     var creepName = "Harvester" + Math.floor(Math.random() * 100000);
    //     Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], creepName, { memory: { role: 'harvester' } });
    // } else {
    //     if (currentNumberUpgraders < maxUpgraders) {
    //         var creepName = "Upgrader" + Math.floor(Math.random() * 100000);
    //         Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], creepName, { memory: { role: 'upgrader' } });
    //     } else {
    //         if (currentNumberBuilders < 6) {
    //             var creepName = "Builder" + Math.floor(Math.random() * 100000);
    //             Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], creepName, { memory: { role: 'builder' } });
    //         }
    //     }
    // }
}

/*
Useful Commands:
*/