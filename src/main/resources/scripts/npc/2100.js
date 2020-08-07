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
	NPC Name: 		Sera
	Map(s): 		Maple Road : Entrance - Mushroom Town Training Camp (0), Maple Road: Upper level of the Training Camp (1), Maple Road : Entrance - Mushroom Town Training Camp (3)
	Description: 		First NPC
*/

var status = -1;

function start() {
    if (cm.c.getPlayer().getMapId() == 0 || cm.c.getPlayer().getMapId() == 3)
        cm.sendYesNo("欢迎来到冒险岛的世界。这个训练营的目的是帮助初学者。你想参加这个训练营吗？有些人没有参加训练计划就开始了他们的旅程。但我强烈建议你先参加训练计划。");
    else
        cm.sendNext("这是你的第一个训练计划开始的图像室。在这个房间里，你将对你选择的职业有一个预先的了解。");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if(mode == 0 && status == 0){
            cm.sendYesNo("你真的想马上开始你的旅程吗？");
            return;
        }else if(mode == 0 && status == 1 && type == 0){
            status -= 2;
            start();
            return;
        }else if(mode == 0 && status == 1 && type == 1)
            cm.sendNext("当你最终做出决定时，请再和我谈谈。");
        cm.dispose();
        return;
    }
    if (cm.c.getPlayer().getMapId() == 0 || cm.c.getPlayer().getMapId() == 3){
        if(status == 0){
            cm.sendNext("好吧，那我就让你进入训练营。请听从老师的指导。");
        }else if(status == 1 && type == 1){
            cm.sendNext("好像你想不参加训练就开始你的旅程。那我就让你去训练场。小心点~");
        }else if(status == 1){
            cm.warp(1, 0);
            cm.dispose();
        }else{
            cm.warp(40000, 0);
            cm.dispose();
        }
    }else
    if(status == 0)
        cm.sendPrev("一旦你足够努力地训练，你就有资格进行转职。你可以成为射手村的弓箭手，魔法密林的魔术师，勇士部落的勇士，废弃都市的飞侠。。。");
    else
        cm.dispose();
}