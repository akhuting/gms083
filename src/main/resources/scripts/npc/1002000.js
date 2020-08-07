var status = 0;
var imaps = [104000000, 102000000, 100000000, 101000000, 103000000, 120000000, 105040300];
var maps = [102000000, 100000000, 101000000, 103000000, 120000000];
var cost = [1000, 1000, 800, 1000, 800];
var townText = [["你所在的地方是明珠港！好吧，我会向你解释更多关于#b明珠港#k的事情。这是你乘坐金银号登陆金银岛的地方。那是明珠港。很多刚从彩虹岛来到这里的新手都是从这里开始他们的旅程的。", "这是一个安静的小镇，由于港口位于岛的西端，湖面宽阔。这里的大多数人都是或曾经是渔夫，所以他们看起来很吓人，但是如果你和他们搭讪，他们会对你很友好。", "城镇周围有一片美丽的大草原。那里的大多数怪物都很小很温和，非常适合新手。如果你还没有选择你的职业，这是一个提高你的水平的好地方。"],["好吧，我会向你解释更多关于#b勇士部落#k的事情。它位于金银岛的最北部，被落基山脉包围。在一种不友好的气氛中，只有强者才能生存。", "在高地周围，你会发现一棵非常瘦的树，一只野猪在附近奔跑，还有遍布全岛的猴子。还有一个很深的山谷，当你深入它，你会发现一条巨大的龙有能力匹配他的大小。最好小心点进去，不然就别进去了。", "如果你想成为一名#b战士#k，那就去找#r战士转职教官#k，勇士部落的首领。如果等级达到10级或更高，并且有不错的力量，他可能会让你成为一个战士。如果没有，最好继续训练直到你达到那个水平。"], ["好吧，我会向你解释更多关于#b魔法密林#k的事情。这是一个魔法师小镇，位于金银岛的东部，被高大神秘的树木覆盖。你也会在那里找到一些仙女。他们一般不喜欢人类，所以你最好站在他们好的一边，保持安静。", "在森林附近，你会发现绿水灵，蘑菇，猴子和僵尸猴子都在那里。往森林深处走，你会发现那些拿着飞天扫帚的女巫在空中翱翔。一句警告：除非你很强壮，否则我建议你不要靠近他们。", "如果你想成为一名#b魔法师#k，寻找#r汉斯#k，魔法密林的首席魔法师。如果你在8级或8级以上，并且智力相当不错，他可能会让你成为一名巫师。如果不是这样，你可能需要更多的打猎和训练来达到目的。"], ["Alright I'll explain to you more about #bHenesys#k. It's a bowman-town located at the southernmost part of the island, made on a flatland in the midst of a deep forest and prairies. The weather's just right, and everything is plentiful around that town, perfect for living. Go check it out.", "Around the prairie you'll find weak monsters such as snails, mushrooms, and pigs. According to what I hear, though, in the deepest part of the Pig Park, which is connected to the town somewhere, you'll find a humongous, powerful mushroom called Mushmom every now and then.", "If you want to be a #bBowman#k, you need to go see #rAthena Pierce#k at Henesys. With a level at or above 10 and a decent amount of DEX, she may make you be one afterall. If not, go train yourself, make yourself stronger, then try again."], ["Alright I'll explain to you more about #bKerning City#k. It's a thief-town located at the northwest part of Victoria Island, and there are buildings up there that have just this strange feeling around them. It's mostly covered in black clouds, but if you can go up to a really high place, you'll be able to see a very beautiful sunset there.", "From Kerning City, you can go into several dungeons. You can go to a swamp where alligators and snakes are abound, or hit the subway full of ghosts and bats. At the deepest part of the underground, you'll find Lace, who is just as big and dangerous as a dragon.", "If you want to be a #bThief#k, seek #rDark Lord#k, the heart of darkness of Kerning City. He may well make you a thief if you're at or above level 10 with a good amount of DEX. If not, go hunt and train yourself to reach there."], ["Here's a little information on #b#m120000000##k. It's a submarine that's currently parked in between Ellinia and Henesys in Victoria Island. That submarine serves as home to numerous pirates. You can have just as beautiful a view of the ocean there as you do here in Lith Harbor.", "#m120000000# is parked in between Henesys and Ellinia, so if you step out just a bit, you'll be able to enjoy the view of both towns. All the pirates you'll meet in town are very gregarious and friendly as well.", "If you are serious about becoming a #bPirate#k, then you better meet the captain of #m120000000#, #r#p1090000##k. If you are over Level 10 with 20 DEX, then she may let you become one. If you aren't up to that level, then you'll need to train harder to get there!"], ["Alright I'll explain to you more about #bSleepywood#k. It's a forest town located at the southeast side of Victoria Island. It's pretty much in between Henesys and the ant-tunnel dungeon. There's a hotel there, so you can rest up after a long day at the dungeon ... it's a quiet town in general.", "In front of the hotel there's an old buddhist monk by the name of #rChrishrama#k. Nobody knows a thing about that monk. Apparently he collects materials from the travelers and create something, but I am not too sure about the details. If you have any business going around that area, please check that out for me.", "From Sleepywood, head east and you'll find the ant tunnel connected to the deepest part of the Victoria Island. Lots of nasty, powerful monsters abound so if you walk in thinking it's a walk in the park, you'll be coming out as a corpse. You need to fully prepare yourself for a rough ride before going in.", "And this is what I hear ... apparently, at Sleepywood there's a secret entrance leading you to an unknown place. Apparently, once you move in deep, you'll find a stack of black rocks that actually move around. I want to see that for myself in the near future ..."]];
var selectedMap = -1;
var town = false;

function start() {
    cm.sendNext("Do you wanna head over to some other town? With a little money involved, I can make it happen. It's a tad expensive, but I run a special 90% discount for beginners.");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1){
        if((mode == 0 && !town) || mode == -1){
            if(type == 1 && mode != -1)
                cm.sendNext("There's a lot to see in this town, too. Let me know if you want to go somewhere else.");
            cm.dispose();
            return;
        }else {
            status -= 2;

            if(status < 1) {
                cm.dispose();
                return;
            }
        }

    }
    if (status == 1)
        cm.sendSimple("It's understandable that you may be confused about this place if this is your first time around. If you got any questions about this place, fire away.\r\n#L0##bWhat kind of towns are here in Victoria Island?#l\r\n#L1#Please take me somewhere else.#k#l");
    else if (status == 2){
        if (selection == 0){
            town = true;
            var text = "There are 7 big towns here in Victoria Island. Which of those do you want to know more of?#b";
            for(var i = 0; i < imaps.length; i++)
                text += "\r\n#L" + i + "##m" + imaps[i] + "##l";
            cm.sendSimple(text);
        }else if (selection == 1) {
            var selStr = cm.getJobId() == 0 ? "There's a special 90% discount for all beginners. Alright, where would you want to go?#b" : "Oh you aren't a beginner, huh? Then I'm afraid I may have to charge you full price. Where would you like to go?#b";
            for (var i = 0; i < maps.length; i++)
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cost[i] / (cm.getJobId() == 0 ? 10 : 1)) + " mesos)#l";
            cm.sendSimple(selStr);
        }
    } else if (town){
        if (selectedMap == -1)
            selectedMap = selection;
        if(status == 3)
            cm.sendNext(townText[selectedMap][status-3]);
        else
            townText[selectedMap][status-3] == undefined ? cm.dispose() : cm.sendNextPrev(townText[selectedMap][status-3]);
    }else if(status == 3){
        selectedMap = selection;
        cm.sendYesNo("I guess you don't need to be here. Do you really want to move to #b#m" + maps[selection] + "##k? Well it'll cost you #b" + (cost[selection] / (cm.getJobId() == 0 ? 10 : 1)) + " mesos#k. What do you think?");
    }else if (status == 4) {
        if (cm.getMeso() < (cost[selectedMap] / (cm.getJobId() == 0 ? 10 : 1)))
            cm.sendNext("You don't have enough mesos. With your abilities, you should have more than that!");
        else {
            cm.gainMeso(-(cost[selectedMap] / (cm.getJobId() == 0 ? 10 : 1)));
            cm.warp(maps[selectedMap]);
        }
        cm.dispose();
    }
}