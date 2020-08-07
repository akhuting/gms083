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
	NPC Name: 		Shanks
	Map(s): 		Maple Road : Southperry (60000)
	Description: 		Brings you to Victoria Island
*/
var status = 0;

function start() {
    cm.sendYesNo("坐这艘船，你就可以去一个更大的大陆了。#e150 金币#n，我会带你去#b金银岛#k。问题是，一旦你离开这里，你就再也回不来了。你怎么认为？你想去金银岛吗？");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1){
        if(mode == 0 && type != 1)
            status -= 2;
        else if(type == 1 || (mode == -1 && type != 1)){
            if(mode == 0)
                cm.sendOk("我想你还有事情要做吗？");
            cm.dispose();
            return;
        }
    }
    if (status == 1) {
        if (cm.haveItem(4031801))
            cm.sendNext("好吧，现在给我150金币。。。嘿，那是什么？那是卢卡斯长老的推荐信吗？嘿，你应该告诉我你有这个。 我香克斯，当我看到一个伟大的人时，请认清它的伟大，因为卢卡斯推荐了你，我知道你作为一个冒险家有着巨大的潜力。这次旅行我决不收你钱！");
        else
            cm.sendNext("厌倦了这个地方？在这里。。。先给我#e150 金币#n。。。");
    } else if (status == 2) {
        if (cm.haveItem(4031801))
            cm.sendNextPrev("既然你有推荐信，我就不收你这个费用了。好吧，系好安全带，因为我们现在要去金银岛，那里可能会有点混乱！！");
        else
        if (cm.getLevel() > 6) {
            if (cm.getMeso() < 150) {
                cm.sendOk("什么？你是说你想不带钱就想出发？想得美。。。");
                cm.dispose();
            } else
                cm.sendNext("哇哦！#e150#n金币，成交! 好吧，出去发金银岛！");
        } else {
            cm.sendOk("让我们看看。。。我觉得你不够强大。你至少要达到7级才能去维多利亚岛。");
            cm.dispose();
        }
    } else if (status == 3) {
        if (cm.haveItem(4031801)) {
            cm.gainItem(4031801, -1);
        } else {
            cm.gainMeso(-150);
        }
        cm.warp(104000000, 0);
        cm.dispose();
    }
}