var roleRepairer = require('role.repairer');

var tower = {

    run: function(towerId) {
        var tower = Game.getObjectById(towerId);
        if (tower) {
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (closestHostile) {
                tower.attack(closestHostile);
            } else {
                var woundedCreeps = _.filter(Game.creeps, (c) => c.hits < c.hitsMax);
                if (woundedCreeps.length > 0) {
                    tower.heal(woundedCreeps[0]);
                } else {
                    var closestDamagedStructure = tower.pos.findClosestByRange(roleRepairer.getRepairTargets(tower));
                    if (closestDamagedStructure) {
                        tower.repair(closestDamagedStructure);
                    } 
                }
            }
        }
	}
};

module.exports = tower;