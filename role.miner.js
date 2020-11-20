var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var source = _.filter(creep.room.find(FIND_SOURCES), i => i.id === creep.memory.sourceId);
        if(creep.harvest(source[0]) == ERR_NOT_IN_RANGE) {
            console.log("HIT");
            creep.moveTo(source[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
	}
};

module.exports = roleMiner;