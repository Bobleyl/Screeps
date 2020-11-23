var ROOM_ID = 'W12S13';

var buildBase = {

    // Add extension pods around tower
    createExtensions: function(flag) {
        var extensions = [];
        
        extensions.push(new RoomPosition(flag.x + 1, flag.y, ROOM_ID));
        extensions.push(new RoomPosition(flag.x - 1, flag.y, ROOM_ID));
        extensions.push(new RoomPosition(flag.x, flag.y + 1, ROOM_ID));
        extensions.push(new RoomPosition(flag.x, flag.y - 1, ROOM_ID));
        
        for(var i = 0; i < extensions.length; i++){
            extensions[i].createConstructionSite(STRUCTURE_EXTENSION);
        }
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
        var roads = [];
        
        roads.push(new RoomPosition(flag.x + 1, flag.y + 1, ROOM_ID));
        roads.push(new RoomPosition(flag.x - 1, flag.y - 1, ROOM_ID));
        roads.push(new RoomPosition(flag.x - 1, flag.y + 1, ROOM_ID));
        roads.push(new RoomPosition(flag.x + 1, flag.y - 1, ROOM_ID));
        roads.push(new RoomPosition(flag.x + 2, flag.y, ROOM_ID));
        roads.push(new RoomPosition(flag.x - 2, flag.y, ROOM_ID));
        roads.push(new RoomPosition(flag.x, flag.y + 2, ROOM_ID));
        roads.push(new RoomPosition(flag.x, flag.y - 2, ROOM_ID));
        
        for(var i = 0; i < roads.length; i++){
            roads[i].createConstructionSite(STRUCTURE_ROAD);
        }

        buildBase.connectFlagToSpawn(roads[6]);
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
