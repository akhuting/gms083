/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* Author: Xterminator
	NPC Name: 		Robin
	Map(s): 		Maple Road : Snail Hunting Ground I (40000)
	Description: 		Beginner Helper
*/
var status;
var sel;

function start() {
    status = -1;
    sel = -1;
    cm.sendSimple("我可以告诉你些冒险者的技巧唷!!\r\n#L0##b要怎么移动？#l\r\n#L1#我要如何击退怪物？#l\r\n#L2#我要怎么捡起物品？#l\r\n#L3#当我死掉会发生什么事情？#l\r\n#L4#我何时能选择职业？#l\r\n#L5#告诉我有关这个岛屿！#l\r\n#L6#我要怎么做才能成为战士？#l\r\n#L7#我要怎么做才能成为弓箭手？#l\r\n#L8#我要怎么做才能成为魔法师？#l\r\n#L9#我要怎么做才能成为盗贼？#l\r\n#L10#怎么提升能力值？(S)#l\r\n#L11#我要怎么确认我捡起来的物品呢？#l\r\n#L12#我要怎么装备物品？#l\r\n#L13#我要怎么确认我身上已经装备的物品？#l\r\n#L14#什么是技能？(K)#l\r\n#L15#我要怎么前往维多利亚岛？#l\r\n#L16#枫币是什么？#l#k");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(mode == 0 && type != 4)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if (status == 0) {
        if(sel == -1)
            sel = selection;
        if (sel == 0)
            cm.sendNext("好，我来教你如何移动。 使用 #方向左键#k 就能在平台上移动了，按下 #bAlt#k 可以进行跳跃。 有些鞋子能提升你的速度以及跳跃力。");
        else if (sel == 1)
            cm.sendNext("好，击退怪物很简单，每个怪物有自己的血条，你可以使用武器将他们杀死。当然，如果怪物等级越高，你越难击退它们。");
        else if (sel == 2)
            cm.sendNext("接下来告诉你如何剪取物品，当你击退怪物时，会有机会掉落宝物以及枫币，当地上有物品时，按下#bZ#k 或是 数字键盘上的 #b0 来捡取物品。");
        else if (sel == 3)
            cm.sendNext("你好奇地找出当你死会发生什么吗？ 当你的HP归零时，你会变成幽灵。 而地上会出现一块墓碑，而你无法移动，但是你还是可以聊天。");
        else if (sel == 4)
            cm.sendNext("什么时候你可以选择你的职业？哈哈哈，别紧张，我的朋友啊～每个职业都有等级的限制。通常在8等和10等之间会进行。");
        else if (sel == 5)
            cm.sendNext("你想要知道这个岛屿吗？ 这里是枫之岛，这座岛屿浮在天空上。由于浮在天空上，强大的怪物们无法靠近。这里非常和平，非常适合新手。");
        else if (sel == 6)
            cm.sendNext("你想成为#b战士#k？ 摁...那我建议你到维多利亚港，寻找一个叫做#r勇士之村#k的战士村庄以及去找寻#bDances with Balrog#k。 他会教你如何成为一个战士。 喔对了，有件很重要的事，你必须达到等级10才能成为战士！");
        else if (sel == 7)
            cm.sendNext("你想成为#b弓箭手#k？ 你需要去维多利亚港。 寻找一个叫做#r射手村#k的弓箭手村庄和美丽的#bAthena Pierce#k谈谈如何成为一名弓箭手。哦，还有一件非常重要的事：你必须至少达到10级才能成为一名弓箭手！！");
        else if (sel == 8)
            cm.sendNext("你想成为#b魔法师#k？ 要做到这一点，你得去维多利亚港。 寻找一个叫做#r魔法密林#k的魔法师村庄, 你会在最上面的图书馆遇到魔法师的首领，#bGrendel the Really Old#k, 他会告诉你成为一名魔法师的一切。");
        else if (sel == 9)
            cm.sendNext("你想成为#b飞侠#k？ 你必须去维多利亚港。寻找一个叫#r废弃都市#k的飞侠村, 在城市的深处，你会找到一个飞侠的藏身之处。 在那里你会遇到#bDark Lord#k 他会教你成为一名飞侠的一切。哦，还有一件非常重要的事：你至少要达到10级才能成为飞侠！！");
        else if (sel == 10)
            cm.sendNext("你想知道如何提高你的角色的能力值？首先按#bS#k查看能力窗口。 每次升级，你将获得5个能力点，也就是AP。将这些AP分配给你选择的能力。就这么简单。");
        else if (sel == 11)
            cm.sendNext("你想知道怎么查看你捡到的东西，嗯？当你打败一个怪物时，它会掉落物品在地上，你可以按#bZ#k键来捡起这个道具。然后，该物品将存储在您的道具栏中，您只需按#bI#k键即可查看该道具。");
        else if (sel == 12)
            cm.sendNext("你想知道怎么装备物品，对吧？按#bI#k查看您的物品。将鼠标光标放在某个物品上面，然后双击该物品以将其装备到角色上。如果你发现自己无法佩戴该物品，很可能你的角色不符合等级和属性要求。您还可以打开装备栏（#bE#k）并将道具拖到其中，来装备该物品。要取下物品，请双击装备栏中的物品。");
        else if (sel == 13)
            cm.sendNext("You want to check on the equipped items, right? Press #bE#k to open the equipment inventory, where you'll see exactly what you are wearing right at the moment. To take off an item, double-click on the item. The item will then be sent to the item inventory.");
        else if (sel == 14)
            cm.sendNext("The special 'abilities' you get after acquiring a job are called skills. You'll acquire skills that are specifically for that job. You're not at that stage yet, so you don't have any skills yet, but just remember that to check on your skills, press #bK#k to open the skill book. It'll help you down the road.");
        else if (sel == 15)
            cm.sendNext("How do you get to Victoria Island? On the east of this island there's a harbor called Southperry. There, you'll find a ship that flies in the air. In front of the ship stands the captain. Ask him about it.");
        else if (sel == 16)
            cm.sendNext("It's the currency used in MapleStory. You may purchase items through mesos. To earn them, you may either defeat the monsters, sell items at the store, or complete quests...");
    } else if (status == 1) {
        if (sel == 0)
            cm.sendNextPrev("In order to attack the monsters, you'll need to be equipped with a weapon. When equipped, press #bCtrl#k to use the weapon. With the right timing, you'll be able to easily take down the monsters.");
        else if (sel == 1)
            cm.sendNextPrev("Once you make the job advancement, you'll acquire different kinds of skills, and you can assign them to HotKeys for easier access. If it's an attacking skill, you don't need to press Ctrl to attack, just press the button assigned as a HotKey.");
        else if (sel == 2)
            cm.sendNextPrev("Remember, though, that if your item inventory is full, you won't be able to acquire more. So if you have an item you don't need, sell it so you can make something out of it. The inventory may expand once you make the job advancement.");
        else if (sel == 3)
            cm.sendNextPrev("There isn't much to lose when you die if you are just a beginner. Once you have a job, however, it's a different story. You'll lose a portion of your EXP when you die, so make sure you avoid danger and death at all cost.");
        else if (sel == 4)
            cm.sendNextPrev("Level isn't the only thing that determines the advancement, though. You also need to boost up the levels of a particular ability based on the occupation. For example, to be a warrior, your STR has to be over 35, and so forth, you know what I'm saying? Make sure you boost up the abilities that has direct implications to your job.");
        else if (sel == 5)
            cm.sendNextPrev("But, if you want to be a powerful player, better not think about staying here for too long. You won't be able to get a job anyway. Underneath this island lies an enormous island called Victoria Island. That place is so much bigger than here, it's not even funny.");
        else if (sel == 8)
            cm.sendNextPrev("Oh by the way, unlike other jobs, to become a magician you only need to be at level 8. What comes with making the job advancement early also comes with the fact that it takes a lot to become a true powerful mage. Think long and carefully before choosing your path.");
        else if (sel == 10)
            cm.sendNextPrev("Place your mouse cursor on top of all abilities for a brief explanation. For example, STR for warriors, DEX for bowman, INT for magician, and LUK for thief. That itself isn't everything you need to know, so you'll need to think long and hard on how to emphasize your character's strengths through assigning the points.");
        else if (sel == 15)
            cm.sendNextPrev("Oh yeah! One last piece of information before I go. If you are not sure where you are, always press #bW#k. The world map will pop up with the locator showing where you stand. You won't have to worry about getting lost with that.");
        else
            start();
    }else
        start();
}