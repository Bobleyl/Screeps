var ROOM_ID = 'W12S13';

var buildRoad = {

    getPathForController: function(sourceId) {
        var source = _.filter(Game.rooms[ROOM_ID].find(FIND_SOURCES), i => i.id === sourceId);
        var controller = Game.rooms[ROOM_ID].controller.pos;
        const path = Game.rooms[ROOM_ID].findPath(source[0].pos, controller);
        return path;
	},

	getPathForSpawn: function() {
        var sources = Game.rooms[ROOM_ID].find(FIND_SOURCES);
        var spawn = Game.spawns['Spawn1'].pos;
        const path = Game.rooms[ROOM_ID].findPath(sources[0].pos, spawn);
        return path;
	},

	getPathForConnecting: function(sourceId) {
        var source = _.filter(Game.rooms[ROOM_ID].find(FIND_SOURCES), i => i.id === sourceId);
        var spawn = Game.spawns['Spawn1'].pos;
        const path = Game.rooms[ROOM_ID].findPath(source[0].pos, spawn);
        return path;
	},

	buildRoad: function(path) {
	    for (var i = 0; i < path.length; i++) {
	        const position = new RoomPosition(path[i].x, path[i].y, ROOM_ID);
            position.createConstructionSite(STRUCTURE_ROAD);
        }
	}
};

module.exports = buildRoad;
