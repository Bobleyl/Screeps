
var spawn = {
    starterSpawn: function() {
        var minNumberHarvesters = 3;
        var maxUpgraders = 12;
        var currentNumberHarvesters = _(Memory.creeps).filter( { role: 'harvester' } ).size();
        var currentNumberUpgraders = _(Memory.creeps).filter( { role: 'upgrader' } ).size();
        console.log("Current Harvestors: " + currentNumberHarvesters);
        console.log("Current Upgraders: " + currentNumberUpgraders);
        
        if (currentNumberHarvesters < minNumberHarvesters) {
            var creepName = "Harvester" + Math.floor(Math.random() * 100000);
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], creepName, { memory: { role: 'harvester' } });
        } else {
            if (currentNumberUpgraders < maxUpgraders) {
                var creepName = "Upgrader" + Math.floor(Math.random() * 100000);
                Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE,MOVE], creepName, { memory: { role: 'upgrader' } });
            }
        }
	},
	
	getMinerSourceId: function(type) {
	    var allSources = Game.rooms['W12S13'].find(FIND_SOURCES);
        for (var i = 0; i < allSources.length; i++) {
            var source = allSources[i];
            var assignedCreeps = _.filter(Game.creeps, i => {
                return i.memory.role == type && i.memory.sourceId === source.id;
            });
            if (assignedCreeps.length < 1) {
                return source.id;
            }
        }
        return allSources[0];
	},
	
	level2Spawn: function() {
	    var upgraderTransporterSource = '5bbcac3f9099fc012e635295';
	    
        var energySourcesCount = Game.rooms['W12S13'].find(FIND_SOURCES).length;
        
        var currentNumberMiners = _(Memory.creeps).filter( { role: 'miner' } ).size();
        var currentNumberBigMiners = _(Memory.creeps).filter( { role: 'bigMiner' } ).size();
        var currentNumberTransporters = _(Memory.creeps).filter( { role: 'transporter' } ).size();
        var currentNumberUpgraders = _(Memory.creeps).filter( { role: 'upgraderTransporter' } ).size();
        var currentNumberBuilders = _(Memory.creeps).filter( { role: 'builderTransporter' } ).size();
        var currentNumberUpgraderTransporters = _(Memory.creeps).filter( { role: 'upgraderTransporter' } ).size();
        var currentNumberBuilderTransporters = _(Memory.creeps).filter( { role: 'builderTransporter' } ).size();
        var currentNumberTowerGuys = _(Memory.creeps).filter( { role: 'towerGuy' } ).size();
        
        if (currentNumberMiners != energySourcesCount) {
            var creepName = "Miner" + Math.floor(Math.random() * 10000);
            var sourceId = spawn.getMinerSourceId('miner');
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,MOVE], creepName, { memory: { role: 'miner', sourceId: sourceId } });
        } else if (currentNumberTransporters < 4) {
            var creepName = "Transporter" + Math.floor(Math.random() * 10000);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], creepName, { memory: { role: 'transporter' } });
        } else if (currentNumberUpgraderTransporters < 5) {
            var creepName = "UpgraderTransporter" + Math.floor(Math.random() * 10000);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE,WORK], creepName, { memory: { role: 'upgraderTransporter', sourceId: upgraderTransporterSource } });
        } else if (currentNumberBuilderTransporters < 6) {
            var creepName = "BuilderTransporter" + Math.floor(Math.random() * 10000);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE,WORK], creepName, { memory: { role: 'builderTransporter' } });
        } else if (currentNumberBigMiners != energySourcesCount) {
            var creepName = "BigMiner" + Math.floor(Math.random() * 10000);
            var sourceId = spawn.getMinerSourceId('bigMiner');
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,WORK,MOVE], creepName, { memory: { role: 'bigMiner', sourceId: sourceId } });
        } else if(currentNumberTowerGuys < 3){
            var creepName = "TowerGuy" + Math.floor(Math.random() * 10000);
            Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,WORK,WORK], creepName, { memory: { role: 'towerGuy' } });
        } else {
            console.log("Maxed Creeps");
        }
        
        // } else if (currentNumberUpgraders < 11) {
        //     var creepName = "UpgraderTransporter" + Math.floor(Math.random() * 10000);
        //     Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], creepName, { memory: { role: 'upgraderTransporter' } });
        // } else if (currentNumberBuilders < 5) {
        //     var creepName = "BuilderTransporter" + Math.floor(Math.random() * 10000);
        //     Game.spawns['Spawn1'].spawnCreep([CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], creepName, { memory: { role: 'builderTransporter' } });
        // } else {
            
        // }
	}
};

module.exports = spawn;