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
package provider;

import us.aaronweiss.pkgnx.NXNode;

import java.awt.*;
import java.awt.image.BufferedImage;

public class MapleDataTool {
    public static String getString(NXNode data) {
        return ((String) data.get());
    }

    public static String getString(NXNode data, String def) {
        if (data == null || data.get() == null) {
            return def;
        } else {
            return ((String) data.get());
        }
    }

    public static String getString(String path, NXNode data) {
        return getString(data.getChild(path));
    }

    public static String getString(String path, NXNode data, String def) {
        return getString(data.getChild(path), def);
    }

    public static double getDouble(NXNode data) {
        return ((Double) data.get()).doubleValue();
    }

    public static float getFloat(NXNode data) {
        return ((Float) data.get()).floatValue();
    }

    public static int getInt(NXNode data) {
        if (data == null || data.get() == null) {
            return 0;// DEF?
        }
        return ((Integer) data.get()).intValue();
    }

    public static int getInt(String path, NXNode data) {
        return getInt(data.getChild(path));
    }

    public static int getIntConvert(NXNode data) {
        if (data.get() instanceof String) {
            return Integer.parseInt(getString(data));
        } else {
            return getInt(data);
        }
    }

    public static int getIntConvert(NXNode data, int def) {
        if (data == null) {
            return def;
        }
        if (data.get() instanceof String) {
            String dd = getString(data);
            if (dd.endsWith("%")) {
                dd = dd.substring(0, dd.length() - 1);
            }
            try {
                return Integer.parseInt(dd);
            } catch (NumberFormatException nfe) {
                return def;
            }
        } else {
            return getInt(data, def);
        }
    }

    public static int getIntConvert(String path, NXNode data) {
        NXNode d = data.getChild(path);
        if (d.get() instanceof String) {
            return Integer.parseInt(getString(d));
        } else {
            return getInt(d);
        }
    }

    public static int getInt(NXNode data, int def) {
        if (data == null || data.get() == null) {
            return def;
        } else if (data.get() instanceof String) {
            return Integer.parseInt(getString(data));
        } else {
            Object numData = data.get();
            if (numData instanceof Integer) {
                return (Integer) numData;
            } else {
                return (Short) numData;
            }
        }
    }

    public static int getInt(String path, NXNode data, int def) {
        return getInt(data.getChild(path), def);
    }

    public static int getIntConvert(String path, NXNode data, int def) {
        NXNode d = data.getChild(path);
        if (d == null) {
            return def;
        }
        if (d.get() instanceof String) {
            try {
                return Integer.parseInt(getString(d));
            } catch (NumberFormatException nfe) {
                nfe.printStackTrace();
                return def;
            }
        } else {
            return getInt(d, def);
        }
    }

    public static BufferedImage getImage(NXNode data) {
        return ((MapleCanvas) data.get()).getImage();
    }

    public static Point getPoint(NXNode data) {
        return ((Point) data.get());
    }

    public static Point getPoint(String path, NXNode data) {
        return getPoint(data.getChild(path));
    }

    public static Point getPoint(String path, NXNode data, Point def) {
        final NXNode pointData = data.getChild(path);
        if (pointData == null) {
            return def;
        }
        return getPoint(pointData);
    }

    public static String getFullDataPath(MapleData data) {
        String path = "";
        MapleDataEntity myData = data;
        while (myData != null) {
            path = myData.getName() + "/" + path;
            myData = myData.getParent();
        }
        return path.substring(0, path.length() - 1);
    }
}
