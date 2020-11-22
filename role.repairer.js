var repairer = {

    getRepairTargets: function(creep) {
        return creep.room.find(FIND_STRUCTURES, {
            filter: (object) => {
                return (
                    (object.structureType == STRUCTURE_WALL && object.hits < (object.hitsMax / 6000))
                    || 
                    (object.structureType != STRUCTURE_WALL && object.hits < (object.hitsMax / 2))
                )
            }
        });
    }
};

module.exports = repairer;