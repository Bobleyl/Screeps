var buildBase = {

    // Add extension pods around tower
    createExtensions: function(flag) {
        const position1 = new RoomPosition(flag.x + 1, flag.y, ROOM_ID);
        const position2 = new RoomPosition(flag.x - 1, flag.y, ROOM_ID);
        const position3 = new RoomPosition(flag.x, flag.y + 1, ROOM_ID);
        const position4 = new RoomPosition(flag.x, flag.y - 1, ROOM_ID);
        position1.createConstructionSite(STRUCTURE_EXTENSION);
        position2.createConstructionSite(STRUCTURE_EXTENSION);
        position3.createConstructionSite(STRUCTURE_EXTENSION);
        position4.createConstructionSite(STRUCTURE_EXTENSION);
    },

    // Add containers around tower
    createContainers: function(flag) {

        var containers = [];
        var extensions = [];

        containers.push(new RoomPosition(flag.x + 1, flag.y, ROOM_ID));
        containers.push(new RoomPosition(flag.x - 1, flag.y, ROOM_ID));
        containers.push(new RoomPosition(flag.x, flag.y + 1, ROOM_ID));
        containers.push(new RoomPosition(flag.x, flag.y - 1, ROOM_ID));
        extensions.push(new RoomPosition(flag.x + 2, flag.y + 2, ROOM_ID));
        extensions.push(new RoomPosition(flag.x + 2, flag.y - 2, ROOM_ID));
        extensions.push(new RoomPosition(flag.x - 2, flag.y + 2, ROOM_ID));
        extensions.push(new RoomPosition(flag.x - 2, flag.y - 2, ROOM_ID));

        extensions.push(new RoomPosition(flag.x + 2, flag.y + 1, ROOM_ID));
        extensions.push(new RoomPosition(flag.x + 2, flag.y - 1, ROOM_ID));
        extensions.push(new RoomPosition(flag.x - 2, flag.y + 1, ROOM_ID));
        extensions.push(new RoomPosition(flag.x - 2, flag.y - 1, ROOM_ID));
        extensions.push(new RoomPosition(flag.x + 1, flag.y + 2, ROOM_ID));
        extensions.push(new RoomPosition(flag.x + 1, flag.y - 2, ROOM_ID));
        extensions.push(new RoomPosition(flag.x - 1, flag.y + 2, ROOM_ID));
        extensions.push(new RoomPosition(flag.x - 1, flag.y - 2, ROOM_ID));

        for(var i = 0; i < containers.length; i++){
            containers[i].createConstructionSite(STRUCTURE_CONTAINER);
        }
        for(var i = 0; i < extensions.length; i++){
            extensions[i].createConstructionSite(STRUCTURE_EXTENSION);
        }
    },

    // Connect base to spawn
    connectFlagToSpawn: function(topPoint) {
        var spawn = Game.spawns['Spawn1'].pos;
        const path = Game.rooms[ROOM_ID].findPath(topPoint, spawn);
        for (var i = 0; i < path.length; i++) {
	        const position = new RoomPosition(path[i].x, path[i].y, ROOM_ID);
            position.createConstructionSite(STRUCTURE_ROAD);
        }
    },

    // Create Road network around flag
    createRoads: function(flag) {
        const position1 = new RoomPosition(flag.x + 1, flag.y + 1, ROOM_ID);
        const position2 = new RoomPosition(flag.x - 1, flag.y - 1, ROOM_ID);
        const position3 = new RoomPosition(flag.x - 1, flag.y + 1, ROOM_ID);
        const position4 = new RoomPosition(flag.x + 1, flag.y - 1, ROOM_ID);
        const position5 = new RoomPosition(flag.x + 2, flag.y, ROOM_ID);
        const position6 = new RoomPosition(flag.x - 2, flag.y, ROOM_ID);
        const position7 = new RoomPosition(flag.x, flag.y + 2, ROOM_ID);
        const position8 = new RoomPosition(flag.x, flag.y - 2, ROOM_ID);
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
	},

	buildMediumBase: function() {
	    const flag = Game.flags.Flag1.pos;
        flag.createConstructionSite(STRUCTURE_TOWER);

        buildBase.createContainers(flag);
	    buildBase.createRoads(flag);
	}
};

module.exports = buildBase;
