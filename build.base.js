var buildBase = {
    
    // Add extension pods around tower
    createExtensions: function(flag) {
        const position1 = new RoomPosition(flag.x + 1, flag.y, 'W12S13');
        const position2 = new RoomPosition(flag.x - 1, flag.y, 'W12S13');
        const position3 = new RoomPosition(flag.x, flag.y + 1, 'W12S13');
        const position4 = new RoomPosition(flag.x, flag.y - 1, 'W12S13');
        position1.createConstructionSite(STRUCTURE_EXTENSION);
        position2.createConstructionSite(STRUCTURE_EXTENSION);
        position3.createConstructionSite(STRUCTURE_EXTENSION);
        position4.createConstructionSite(STRUCTURE_EXTENSION);
    },
    
    // Connect base to spawn
    connectFlagToSpawn: function(topPoint) {
        var spawn = Game.spawns['Spawn1'].pos;
        const path = Game.rooms['W12S13'].findPath(topPoint, spawn);
        for (var i = 0; i < path.length; i++) {
	        const position = new RoomPosition(path[i].x, path[i].y, 'W12S13');
            position.createConstructionSite(STRUCTURE_ROAD);
        }
    },
    
    // Create Road network around flag
    createRoads: function(flag) {
        const position1 = new RoomPosition(flag.x + 1, flag.y + 1, 'W12S13');
        const position2 = new RoomPosition(flag.x - 1, flag.y - 1, 'W12S13');
        const position3 = new RoomPosition(flag.x - 1, flag.y + 1, 'W12S13');
        const position4 = new RoomPosition(flag.x + 1, flag.y - 1, 'W12S13');
        const position5 = new RoomPosition(flag.x + 2, flag.y, 'W12S13');
        const position6 = new RoomPosition(flag.x - 2, flag.y, 'W12S13');
        const position7 = new RoomPosition(flag.x, flag.y + 2, 'W12S13');
        const position8 = new RoomPosition(flag.x, flag.y - 2, 'W12S13');
        position1.createConstructionSite(STRUCTURE_ROAD);
        position2.createConstructionSite(STRUCTURE_ROAD);
        position3.createConstructionSite(STRUCTURE_ROAD);
        position4.createConstructionSite(STRUCTURE_ROAD);
        position5.createConstructionSite(STRUCTURE_ROAD);
        position6.createConstructionSite(STRUCTURE_ROAD);
        position7.createConstructionSite(STRUCTURE_ROAD);
        position8.createConstructionSite(STRUCTURE_ROAD);
        
        buildBase.connectFlagToSpawn(position7);
    },

    buildSmallBase: function() {
        // Find Flag & create tower
        const flag = Game.flags.Flag1.pos;
        flag.createConstructionSite(STRUCTURE_TOWER);
        
        // Call outside methods
        buildBase.createExtensions(flag);
        buildBase.createRoads(flag);
	}
};

module.exports = buildBase;