import { t } from "ttag";

import {
  getDefaultSize,
  getMinSize,
} from "metabase/visualizations/shared/utils/sizes";

import LineAreaBarChart from "../components/LineAreaBarChart.jsx";
import { boxplotRenderer } from "../lib/LineAreaBarRenderer";
import { GRAPH_GOAL_SETTINGS } from "../lib/settings/goal";
import {
  GRAPH_DATA_SETTINGS,
  GRAPH_BOX_SETTINGS,
  GRAPH_TREND_SETTINGS,
  GRAPH_COLORS_SETTINGS,
  GRAPH_AXIS_SETTINGS,
} from "../lib/settings/graph";

export default class BoxPlot extends LineAreaBarChart {
  static uiName = `Boxplot`;
  static identifier = "boxplot";
  static iconName = "boxplot";
  static noun = t`box plot`;

  static minSize = getMinSize("scatter");
  static defaultSize = getDefaultSize("scatter");

  static renderer = boxplotRenderer;

  static settings = {
    ...GRAPH_BOX_SETTINGS,
    ...GRAPH_GOAL_SETTINGS,
    ...GRAPH_TREND_SETTINGS,
    ...GRAPH_COLORS_SETTINGS,
    ...GRAPH_AXIS_SETTINGS,
    ...GRAPH_DATA_SETTINGS,
  };
}
