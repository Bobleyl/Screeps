var buildRoad = {

    getPathForController: function(sourceId) {
        var source = _.filter(Game.rooms['W12S13'].find(FIND_SOURCES), i => i.id === sourceId);
        var controller = Game.rooms['W12S13'].controller.pos;
        const path = Game.rooms['W12S13'].findPath(source[0].pos, controller);
        return path;
	},
	
	getPathForSpawn: function() {
        var sources = Game.rooms['W12S13'].find(FIND_SOURCES);
        var spawn = Game.spawns['Spawn1'].pos;
        const path = Game.rooms['W12S13'].findPath(sources[0].pos, spawn);
        return path;
	},
	
	buildRoadToController: function(sourceId) {
	    var path = buildRoad.getPathForController(sourceId);
	    for (var i = 0; i < path.length; i++) {
	        const position = new RoomPosition(path[i].x, path[i].y, 'W12S13');
            position.createConstructionSite(STRUCTURE_ROAD);
        }
	},
	
	buildRoadToEnergy: function() {
	    var path = buildRoad.getPathForSpawn();
	    for (var i = 0; i < path.length; i++) {
	        const position = new RoomPosition(path[i].x, path[i].y, 'W12S13');
            position.createConstructionSite(STRUCTURE_ROAD);
        }
	}
};

module.exports = buildRoad;