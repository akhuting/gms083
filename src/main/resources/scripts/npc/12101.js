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
	NPC Name: 		Rain
	Map(s): 		Maple Road : Amherst (1010000)
	Description: 		Talks about Amherst
*/
var status = -1;

function start() {
    cm.sendNext("这是一个叫#b彩虹村#k的小镇，位于彩虹岛的东北部。你知道彩虹岛是给初学者的，对吧？我很高兴这里只有弱小的怪物。");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1){
        if(mode == 0 && status == 2){
            status -= 2;
            start();
        }else if(mode == 0)
            status-= 2;
        else
            cm.dispose();
    }else{
        if (status == 1)
            cm.sendNextPrev("如果你想变得更强，那就去有港口的地方。坐上这艘巨轮，前往被称为#b金银岛#k的地方。与这个小岛相比，它的规模是无与伦比的。");
        else if (status == 2)
            cm.sendPrev("在金银岛，你可以选择你的职业。它叫#bPerion#k吗。。。？我听说有一个荒凉的小镇，战士们住在那里。高地…那会是什么样的地方？");
        else if (status == 3)
            cm.dispose();
    }
}