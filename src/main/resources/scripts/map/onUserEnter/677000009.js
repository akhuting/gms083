importPackage(Packages.server.life);

function start(ms) {
        var pos = new java.awt.Point(251, -841);
	var mobId = 9400613;
        var mobName = "Valefor";
        
	var player = ms.getPlayer();
	var map = player.getMap();

	if(map.getMonsterById(mobId) != null){
		return;   	       
	}

	map.spawnMonsterOnGroundBelow(MapleLifeFactory.getMonster(mobId), pos);
	player.message(mobName + " has appeared!");
}