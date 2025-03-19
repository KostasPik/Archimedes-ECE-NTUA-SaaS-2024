/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 257.0, "minX": 0.0, "maxY": 13674.0, "series": [{"data": [[0.0, 257.0], [0.1, 257.0], [0.2, 257.0], [0.3, 257.0], [0.4, 257.0], [0.5, 272.0], [0.6, 272.0], [0.7, 272.0], [0.8, 272.0], [0.9, 272.0], [1.0, 281.0], [1.1, 281.0], [1.2, 281.0], [1.3, 281.0], [1.4, 281.0], [1.5, 511.0], [1.6, 511.0], [1.7, 511.0], [1.8, 511.0], [1.9, 511.0], [2.0, 512.0], [2.1, 512.0], [2.2, 512.0], [2.3, 512.0], [2.4, 512.0], [2.5, 513.0], [2.6, 513.0], [2.7, 513.0], [2.8, 513.0], [2.9, 513.0], [3.0, 732.0], [3.1, 732.0], [3.2, 732.0], [3.3, 732.0], [3.4, 732.0], [3.5, 739.0], [3.6, 739.0], [3.7, 739.0], [3.8, 739.0], [3.9, 739.0], [4.0, 741.0], [4.1, 741.0], [4.2, 741.0], [4.3, 741.0], [4.4, 741.0], [4.5, 957.0], [4.6, 957.0], [4.7, 957.0], [4.8, 957.0], [4.9, 957.0], [5.0, 959.0], [5.1, 959.0], [5.2, 959.0], [5.3, 959.0], [5.4, 959.0], [5.5, 966.0], [5.6, 966.0], [5.7, 966.0], [5.8, 966.0], [5.9, 966.0], [6.0, 1168.0], [6.1, 1168.0], [6.2, 1168.0], [6.3, 1168.0], [6.4, 1168.0], [6.5, 1181.0], [6.6, 1181.0], [6.7, 1181.0], [6.8, 1181.0], [6.9, 1181.0], [7.0, 1189.0], [7.1, 1189.0], [7.2, 1189.0], [7.3, 1189.0], [7.4, 1189.0], [7.5, 1369.0], [7.6, 1369.0], [7.7, 1369.0], [7.8, 1369.0], [7.9, 1369.0], [8.0, 1379.0], [8.1, 1379.0], [8.2, 1379.0], [8.3, 1379.0], [8.4, 1379.0], [8.5, 1400.0], [8.6, 1400.0], [8.7, 1400.0], [8.8, 1400.0], [8.9, 1400.0], [9.0, 1591.0], [9.1, 1591.0], [9.2, 1591.0], [9.3, 1591.0], [9.4, 1591.0], [9.5, 1595.0], [9.6, 1595.0], [9.7, 1595.0], [9.8, 1595.0], [9.9, 1595.0], [10.0, 1619.0], [10.1, 1619.0], [10.2, 1619.0], [10.3, 1619.0], [10.4, 1619.0], [10.5, 1803.0], [10.6, 1803.0], [10.7, 1803.0], [10.8, 1803.0], [10.9, 1803.0], [11.0, 1827.0], [11.1, 1827.0], [11.2, 1827.0], [11.3, 1827.0], [11.4, 1827.0], [11.5, 1837.0], [11.6, 1837.0], [11.7, 1837.0], [11.8, 1837.0], [11.9, 1837.0], [12.0, 2014.0], [12.1, 2014.0], [12.2, 2014.0], [12.3, 2014.0], [12.4, 2014.0], [12.5, 2036.0], [12.6, 2036.0], [12.7, 2036.0], [12.8, 2036.0], [12.9, 2036.0], [13.0, 2047.0], [13.1, 2047.0], [13.2, 2047.0], [13.3, 2047.0], [13.4, 2047.0], [13.5, 2214.0], [13.6, 2214.0], [13.7, 2214.0], [13.8, 2214.0], [13.9, 2214.0], [14.0, 2221.0], [14.1, 2221.0], [14.2, 2221.0], [14.3, 2221.0], [14.4, 2221.0], [14.5, 2222.0], [14.6, 2222.0], [14.7, 2222.0], [14.8, 2222.0], [14.9, 2222.0], [15.0, 2394.0], [15.1, 2394.0], [15.2, 2394.0], [15.3, 2394.0], [15.4, 2394.0], [15.5, 2410.0], [15.6, 2410.0], [15.7, 2410.0], [15.8, 2410.0], [15.9, 2410.0], [16.0, 2424.0], [16.1, 2424.0], [16.2, 2424.0], [16.3, 2424.0], [16.4, 2424.0], [16.5, 2607.0], [16.6, 2607.0], [16.7, 2607.0], [16.8, 2607.0], [16.9, 2607.0], [17.0, 2622.0], [17.1, 2622.0], [17.2, 2622.0], [17.3, 2622.0], [17.4, 2622.0], [17.5, 2635.0], [17.6, 2635.0], [17.7, 2635.0], [17.8, 2635.0], [17.9, 2635.0], [18.0, 2807.0], [18.1, 2807.0], [18.2, 2807.0], [18.3, 2807.0], [18.4, 2807.0], [18.5, 2828.0], [18.6, 2828.0], [18.7, 2828.0], [18.8, 2828.0], [18.9, 2828.0], [19.0, 2842.0], [19.1, 2842.0], [19.2, 2842.0], [19.3, 2842.0], [19.4, 2842.0], [19.5, 3014.0], [19.6, 3014.0], [19.7, 3014.0], [19.8, 3014.0], [19.9, 3014.0], [20.0, 3033.0], [20.1, 3033.0], [20.2, 3033.0], [20.3, 3033.0], [20.4, 3033.0], [20.5, 3042.0], [20.6, 3042.0], [20.7, 3042.0], [20.8, 3042.0], [20.9, 3042.0], [21.0, 3210.0], [21.1, 3210.0], [21.2, 3210.0], [21.3, 3210.0], [21.4, 3210.0], [21.5, 3232.0], [21.6, 3232.0], [21.7, 3232.0], [21.8, 3232.0], [21.9, 3232.0], [22.0, 3238.0], [22.1, 3238.0], [22.2, 3238.0], [22.3, 3238.0], [22.4, 3238.0], [22.5, 3413.0], [22.6, 3413.0], [22.7, 3413.0], [22.8, 3413.0], [22.9, 3413.0], [23.0, 3434.0], [23.1, 3434.0], [23.2, 3434.0], [23.3, 3434.0], [23.4, 3434.0], [23.5, 3439.0], [23.6, 3439.0], [23.7, 3439.0], [23.8, 3439.0], [23.9, 3439.0], [24.0, 3610.0], [24.1, 3610.0], [24.2, 3610.0], [24.3, 3610.0], [24.4, 3610.0], [24.5, 3631.0], [24.6, 3631.0], [24.7, 3631.0], [24.8, 3631.0], [24.9, 3631.0], [25.0, 3636.0], [25.1, 3636.0], [25.2, 3636.0], [25.3, 3636.0], [25.4, 3636.0], [25.5, 3809.0], [25.6, 3809.0], [25.7, 3809.0], [25.8, 3809.0], [25.9, 3809.0], [26.0, 3827.0], [26.1, 3827.0], [26.2, 3827.0], [26.3, 3827.0], [26.4, 3827.0], [26.5, 3833.0], [26.6, 3833.0], [26.7, 3833.0], [26.8, 3833.0], [26.9, 3833.0], [27.0, 4013.0], [27.1, 4013.0], [27.2, 4013.0], [27.3, 4013.0], [27.4, 4013.0], [27.5, 4025.0], [27.6, 4025.0], [27.7, 4025.0], [27.8, 4025.0], [27.9, 4025.0], [28.0, 4030.0], [28.1, 4030.0], [28.2, 4030.0], [28.3, 4030.0], [28.4, 4030.0], [28.5, 4206.0], [28.6, 4206.0], [28.7, 4206.0], [28.8, 4206.0], [28.9, 4206.0], [29.0, 4224.0], [29.1, 4224.0], [29.2, 4224.0], [29.3, 4224.0], [29.4, 4224.0], [29.5, 4224.0], [29.6, 4224.0], [29.7, 4224.0], [29.8, 4224.0], [29.9, 4224.0], [30.0, 4416.0], [30.1, 4416.0], [30.2, 4416.0], [30.3, 4416.0], [30.4, 4416.0], [30.5, 4433.0], [30.6, 4433.0], [30.7, 4433.0], [30.8, 4433.0], [30.9, 4433.0], [31.0, 4439.0], [31.1, 4439.0], [31.2, 4439.0], [31.3, 4439.0], [31.4, 4439.0], [31.5, 4617.0], [31.6, 4617.0], [31.7, 4617.0], [31.8, 4617.0], [31.9, 4617.0], [32.0, 4631.0], [32.1, 4631.0], [32.2, 4631.0], [32.3, 4631.0], [32.4, 4631.0], [32.5, 4631.0], [32.6, 4631.0], [32.7, 4631.0], [32.8, 4631.0], [32.9, 4631.0], [33.0, 4806.0], [33.1, 4806.0], [33.2, 4806.0], [33.3, 4806.0], [33.4, 4806.0], [33.5, 4830.0], [33.6, 4830.0], [33.7, 4830.0], [33.8, 4830.0], [33.9, 4830.0], [34.0, 4833.0], [34.1, 4833.0], [34.2, 4833.0], [34.3, 4833.0], [34.4, 4833.0], [34.5, 5009.0], [34.6, 5009.0], [34.7, 5009.0], [34.8, 5009.0], [34.9, 5009.0], [35.0, 5031.0], [35.1, 5031.0], [35.2, 5031.0], [35.3, 5031.0], [35.4, 5031.0], [35.5, 5035.0], [35.6, 5035.0], [35.7, 5035.0], [35.8, 5035.0], [35.9, 5035.0], [36.0, 5221.0], [36.1, 5221.0], [36.2, 5221.0], [36.3, 5221.0], [36.4, 5221.0], [36.5, 5242.0], [36.6, 5242.0], [36.7, 5242.0], [36.8, 5242.0], [36.9, 5242.0], [37.0, 5243.0], [37.1, 5243.0], [37.2, 5243.0], [37.3, 5243.0], [37.4, 5243.0], [37.5, 5416.0], [37.6, 5416.0], [37.7, 5416.0], [37.8, 5416.0], [37.9, 5416.0], [38.0, 5436.0], [38.1, 5436.0], [38.2, 5436.0], [38.3, 5436.0], [38.4, 5436.0], [38.5, 5437.0], [38.6, 5437.0], [38.7, 5437.0], [38.8, 5437.0], [38.9, 5437.0], [39.0, 5621.0], [39.1, 5621.0], [39.2, 5621.0], [39.3, 5621.0], [39.4, 5621.0], [39.5, 5631.0], [39.6, 5631.0], [39.7, 5631.0], [39.8, 5631.0], [39.9, 5631.0], [40.0, 5634.0], [40.1, 5634.0], [40.2, 5634.0], [40.3, 5634.0], [40.4, 5634.0], [40.5, 5812.0], [40.6, 5812.0], [40.7, 5812.0], [40.8, 5812.0], [40.9, 5812.0], [41.0, 5830.0], [41.1, 5830.0], [41.2, 5830.0], [41.3, 5830.0], [41.4, 5830.0], [41.5, 5832.0], [41.6, 5832.0], [41.7, 5832.0], [41.8, 5832.0], [41.9, 5832.0], [42.0, 6012.0], [42.1, 6012.0], [42.2, 6012.0], [42.3, 6012.0], [42.4, 6012.0], [42.5, 6028.0], [42.6, 6028.0], [42.7, 6028.0], [42.8, 6028.0], [42.9, 6028.0], [43.0, 6034.0], [43.1, 6034.0], [43.2, 6034.0], [43.3, 6034.0], [43.4, 6034.0], [43.5, 6215.0], [43.6, 6215.0], [43.7, 6215.0], [43.8, 6215.0], [43.9, 6215.0], [44.0, 6231.0], [44.1, 6231.0], [44.2, 6231.0], [44.3, 6231.0], [44.4, 6231.0], [44.5, 6236.0], [44.6, 6236.0], [44.7, 6236.0], [44.8, 6236.0], [44.9, 6236.0], [45.0, 6416.0], [45.1, 6416.0], [45.2, 6416.0], [45.3, 6416.0], [45.4, 6416.0], [45.5, 6433.0], [45.6, 6433.0], [45.7, 6433.0], [45.8, 6433.0], [45.9, 6433.0], [46.0, 6441.0], [46.1, 6441.0], [46.2, 6441.0], [46.3, 6441.0], [46.4, 6441.0], [46.5, 6612.0], [46.6, 6612.0], [46.7, 6612.0], [46.8, 6612.0], [46.9, 6612.0], [47.0, 6622.0], [47.1, 6622.0], [47.2, 6622.0], [47.3, 6622.0], [47.4, 6622.0], [47.5, 6631.0], [47.6, 6631.0], [47.7, 6631.0], [47.8, 6631.0], [47.9, 6631.0], [48.0, 6812.0], [48.1, 6812.0], [48.2, 6812.0], [48.3, 6812.0], [48.4, 6812.0], [48.5, 6822.0], [48.6, 6822.0], [48.7, 6822.0], [48.8, 6822.0], [48.9, 6822.0], [49.0, 6829.0], [49.1, 6829.0], [49.2, 6829.0], [49.3, 6829.0], [49.4, 6829.0], [49.5, 7003.0], [49.6, 7003.0], [49.7, 7003.0], [49.8, 7003.0], [49.9, 7003.0], [50.0, 7016.0], [50.1, 7016.0], [50.2, 7016.0], [50.3, 7016.0], [50.4, 7016.0], [50.5, 7026.0], [50.6, 7026.0], [50.7, 7026.0], [50.8, 7026.0], [50.9, 7026.0], [51.0, 7204.0], [51.1, 7204.0], [51.2, 7204.0], [51.3, 7204.0], [51.4, 7204.0], [51.5, 7219.0], [51.6, 7219.0], [51.7, 7219.0], [51.8, 7219.0], [51.9, 7219.0], [52.0, 7226.0], [52.1, 7226.0], [52.2, 7226.0], [52.3, 7226.0], [52.4, 7226.0], [52.5, 7402.0], [52.6, 7402.0], [52.7, 7402.0], [52.8, 7402.0], [52.9, 7402.0], [53.0, 7419.0], [53.1, 7419.0], [53.2, 7419.0], [53.3, 7419.0], [53.4, 7419.0], [53.5, 7424.0], [53.6, 7424.0], [53.7, 7424.0], [53.8, 7424.0], [53.9, 7424.0], [54.0, 7599.0], [54.1, 7599.0], [54.2, 7599.0], [54.3, 7599.0], [54.4, 7599.0], [54.5, 7615.0], [54.6, 7615.0], [54.7, 7615.0], [54.8, 7615.0], [54.9, 7615.0], [55.0, 7624.0], [55.1, 7624.0], [55.2, 7624.0], [55.3, 7624.0], [55.4, 7624.0], [55.5, 7792.0], [55.6, 7792.0], [55.7, 7792.0], [55.8, 7792.0], [55.9, 7792.0], [56.0, 7813.0], [56.1, 7813.0], [56.2, 7813.0], [56.3, 7813.0], [56.4, 7813.0], [56.5, 7822.0], [56.6, 7822.0], [56.7, 7822.0], [56.8, 7822.0], [56.9, 7822.0], [57.0, 7988.0], [57.1, 7988.0], [57.2, 7988.0], [57.3, 7988.0], [57.4, 7988.0], [57.5, 8008.0], [57.6, 8008.0], [57.7, 8008.0], [57.8, 8008.0], [57.9, 8008.0], [58.0, 8020.0], [58.1, 8020.0], [58.2, 8020.0], [58.3, 8020.0], [58.4, 8020.0], [58.5, 8190.0], [58.6, 8190.0], [58.7, 8190.0], [58.8, 8190.0], [58.9, 8190.0], [59.0, 8204.0], [59.1, 8204.0], [59.2, 8204.0], [59.3, 8204.0], [59.4, 8204.0], [59.5, 8221.0], [59.6, 8221.0], [59.7, 8221.0], [59.8, 8221.0], [59.9, 8221.0], [60.0, 8395.0], [60.1, 8395.0], [60.2, 8395.0], [60.3, 8395.0], [60.4, 8395.0], [60.5, 8410.0], [60.6, 8410.0], [60.7, 8410.0], [60.8, 8410.0], [60.9, 8410.0], [61.0, 8429.0], [61.1, 8429.0], [61.2, 8429.0], [61.3, 8429.0], [61.4, 8429.0], [61.5, 8606.0], [61.6, 8606.0], [61.7, 8606.0], [61.8, 8606.0], [61.9, 8606.0], [62.0, 8611.0], [62.1, 8611.0], [62.2, 8611.0], [62.3, 8611.0], [62.4, 8611.0], [62.5, 8637.0], [62.6, 8637.0], [62.7, 8637.0], [62.8, 8637.0], [62.9, 8637.0], [63.0, 8806.0], [63.1, 8806.0], [63.2, 8806.0], [63.3, 8806.0], [63.4, 8806.0], [63.5, 8807.0], [63.6, 8807.0], [63.7, 8807.0], [63.8, 8807.0], [63.9, 8807.0], [64.0, 8835.0], [64.1, 8835.0], [64.2, 8835.0], [64.3, 8835.0], [64.4, 8835.0], [64.5, 9001.0], [64.6, 9001.0], [64.7, 9001.0], [64.8, 9001.0], [64.9, 9001.0], [65.0, 9006.0], [65.1, 9006.0], [65.2, 9006.0], [65.3, 9006.0], [65.4, 9006.0], [65.5, 9033.0], [65.6, 9033.0], [65.7, 9033.0], [65.8, 9033.0], [65.9, 9033.0], [66.0, 9200.0], [66.1, 9200.0], [66.2, 9200.0], [66.3, 9200.0], [66.4, 9200.0], [66.5, 9211.0], [66.6, 9211.0], [66.7, 9211.0], [66.8, 9211.0], [66.9, 9211.0], [67.0, 9239.0], [67.1, 9239.0], [67.2, 9239.0], [67.3, 9239.0], [67.4, 9239.0], [67.5, 9395.0], [67.6, 9395.0], [67.7, 9395.0], [67.8, 9395.0], [67.9, 9395.0], [68.0, 9411.0], [68.1, 9411.0], [68.2, 9411.0], [68.3, 9411.0], [68.4, 9411.0], [68.5, 9443.0], [68.6, 9443.0], [68.7, 9443.0], [68.8, 9443.0], [68.9, 9443.0], [69.0, 9593.0], [69.1, 9593.0], [69.2, 9593.0], [69.3, 9593.0], [69.4, 9593.0], [69.5, 9615.0], [69.6, 9615.0], [69.7, 9615.0], [69.8, 9615.0], [69.9, 9615.0], [70.0, 9643.0], [70.1, 9643.0], [70.2, 9643.0], [70.3, 9643.0], [70.4, 9643.0], [70.5, 9786.0], [70.6, 9786.0], [70.7, 9786.0], [70.8, 9786.0], [70.9, 9786.0], [71.0, 9814.0], [71.1, 9814.0], [71.2, 9814.0], [71.3, 9814.0], [71.4, 9814.0], [71.5, 9844.0], [71.6, 9844.0], [71.7, 9844.0], [71.8, 9844.0], [71.9, 9844.0], [72.0, 9986.0], [72.1, 9986.0], [72.2, 9986.0], [72.3, 9986.0], [72.4, 9986.0], [72.5, 10022.0], [72.6, 10022.0], [72.7, 10022.0], [72.8, 10022.0], [72.9, 10022.0], [73.0, 10048.0], [73.1, 10048.0], [73.2, 10048.0], [73.3, 10048.0], [73.4, 10048.0], [73.5, 10190.0], [73.6, 10190.0], [73.7, 10190.0], [73.8, 10190.0], [73.9, 10190.0], [74.0, 10224.0], [74.1, 10224.0], [74.2, 10224.0], [74.3, 10224.0], [74.4, 10224.0], [74.5, 10248.0], [74.6, 10248.0], [74.7, 10248.0], [74.8, 10248.0], [74.9, 10248.0], [75.0, 10398.0], [75.1, 10398.0], [75.2, 10398.0], [75.3, 10398.0], [75.4, 10398.0], [75.5, 10426.0], [75.6, 10426.0], [75.7, 10426.0], [75.8, 10426.0], [75.9, 10426.0], [76.0, 10454.0], [76.1, 10454.0], [76.2, 10454.0], [76.3, 10454.0], [76.4, 10454.0], [76.5, 10602.0], [76.6, 10602.0], [76.7, 10602.0], [76.8, 10602.0], [76.9, 10602.0], [77.0, 10632.0], [77.1, 10632.0], [77.2, 10632.0], [77.3, 10632.0], [77.4, 10632.0], [77.5, 10651.0], [77.6, 10651.0], [77.7, 10651.0], [77.8, 10651.0], [77.9, 10651.0], [78.0, 10812.0], [78.1, 10812.0], [78.2, 10812.0], [78.3, 10812.0], [78.4, 10812.0], [78.5, 10835.0], [78.6, 10835.0], [78.7, 10835.0], [78.8, 10835.0], [78.9, 10835.0], [79.0, 10862.0], [79.1, 10862.0], [79.2, 10862.0], [79.3, 10862.0], [79.4, 10862.0], [79.5, 11019.0], [79.6, 11019.0], [79.7, 11019.0], [79.8, 11019.0], [79.9, 11019.0], [80.0, 11041.0], [80.1, 11041.0], [80.2, 11041.0], [80.3, 11041.0], [80.4, 11041.0], [80.5, 11061.0], [80.6, 11061.0], [80.7, 11061.0], [80.8, 11061.0], [80.9, 11061.0], [81.0, 11225.0], [81.1, 11225.0], [81.2, 11225.0], [81.3, 11225.0], [81.4, 11225.0], [81.5, 11247.0], [81.6, 11247.0], [81.7, 11247.0], [81.8, 11247.0], [81.9, 11247.0], [82.0, 11260.0], [82.1, 11260.0], [82.2, 11260.0], [82.3, 11260.0], [82.4, 11260.0], [82.5, 11436.0], [82.6, 11436.0], [82.7, 11436.0], [82.8, 11436.0], [82.9, 11436.0], [83.0, 11456.0], [83.1, 11456.0], [83.2, 11456.0], [83.3, 11456.0], [83.4, 11456.0], [83.5, 11466.0], [83.6, 11466.0], [83.7, 11466.0], [83.8, 11466.0], [83.9, 11466.0], [84.0, 11633.0], [84.1, 11633.0], [84.2, 11633.0], [84.3, 11633.0], [84.4, 11633.0], [84.5, 11647.0], [84.6, 11647.0], [84.7, 11647.0], [84.8, 11647.0], [84.9, 11647.0], [85.0, 11661.0], [85.1, 11661.0], [85.2, 11661.0], [85.3, 11661.0], [85.4, 11661.0], [85.5, 11843.0], [85.6, 11843.0], [85.7, 11843.0], [85.8, 11843.0], [85.9, 11843.0], [86.0, 11860.0], [86.1, 11860.0], [86.2, 11860.0], [86.3, 11860.0], [86.4, 11860.0], [86.5, 11871.0], [86.6, 11871.0], [86.7, 11871.0], [86.8, 11871.0], [86.9, 11871.0], [87.0, 12051.0], [87.1, 12051.0], [87.2, 12051.0], [87.3, 12051.0], [87.4, 12051.0], [87.5, 12068.0], [87.6, 12068.0], [87.7, 12068.0], [87.8, 12068.0], [87.9, 12068.0], [88.0, 12073.0], [88.1, 12073.0], [88.2, 12073.0], [88.3, 12073.0], [88.4, 12073.0], [88.5, 12255.0], [88.6, 12255.0], [88.7, 12255.0], [88.8, 12255.0], [88.9, 12255.0], [89.0, 12266.0], [89.1, 12266.0], [89.2, 12266.0], [89.3, 12266.0], [89.4, 12266.0], [89.5, 12278.0], [89.6, 12278.0], [89.7, 12278.0], [89.8, 12278.0], [89.9, 12278.0], [90.0, 12448.0], [90.1, 12448.0], [90.2, 12448.0], [90.3, 12448.0], [90.4, 12448.0], [90.5, 12465.0], [90.6, 12465.0], [90.7, 12465.0], [90.8, 12465.0], [90.9, 12465.0], [91.0, 12474.0], [91.1, 12474.0], [91.2, 12474.0], [91.3, 12474.0], [91.4, 12474.0], [91.5, 12651.0], [91.6, 12651.0], [91.7, 12651.0], [91.8, 12651.0], [91.9, 12651.0], [92.0, 12675.0], [92.1, 12675.0], [92.2, 12675.0], [92.3, 12675.0], [92.4, 12675.0], [92.5, 12675.0], [92.6, 12675.0], [92.7, 12675.0], [92.8, 12675.0], [92.9, 12675.0], [93.0, 12847.0], [93.1, 12847.0], [93.2, 12847.0], [93.3, 12847.0], [93.4, 12847.0], [93.5, 12877.0], [93.6, 12877.0], [93.7, 12877.0], [93.8, 12877.0], [93.9, 12877.0], [94.0, 12882.0], [94.1, 12882.0], [94.2, 12882.0], [94.3, 12882.0], [94.4, 12882.0], [94.5, 13050.0], [94.6, 13050.0], [94.7, 13050.0], [94.8, 13050.0], [94.9, 13050.0], [95.0, 13079.0], [95.1, 13079.0], [95.2, 13079.0], [95.3, 13079.0], [95.4, 13079.0], [95.5, 13091.0], [95.6, 13091.0], [95.7, 13091.0], [95.8, 13091.0], [95.9, 13091.0], [96.0, 13258.0], [96.1, 13258.0], [96.2, 13258.0], [96.3, 13258.0], [96.4, 13258.0], [96.5, 13277.0], [96.6, 13277.0], [96.7, 13277.0], [96.8, 13277.0], [96.9, 13277.0], [97.0, 13295.0], [97.1, 13295.0], [97.2, 13295.0], [97.3, 13295.0], [97.4, 13295.0], [97.5, 13449.0], [97.6, 13449.0], [97.7, 13449.0], [97.8, 13449.0], [97.9, 13449.0], [98.0, 13484.0], [98.1, 13484.0], [98.2, 13484.0], [98.3, 13484.0], [98.4, 13484.0], [98.5, 13494.0], [98.6, 13494.0], [98.7, 13494.0], [98.8, 13494.0], [98.9, 13494.0], [99.0, 13648.0], [99.1, 13648.0], [99.2, 13648.0], [99.3, 13648.0], [99.4, 13648.0], [99.5, 13674.0], [99.6, 13674.0], [99.7, 13674.0], [99.8, 13674.0], [99.9, 13674.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 3.0, "series": [{"data": [[700.0, 3.0], [900.0, 3.0], [1100.0, 3.0], [1300.0, 2.0], [1400.0, 1.0], [1500.0, 2.0], [1600.0, 1.0], [1800.0, 3.0], [2000.0, 3.0], [2200.0, 3.0], [2300.0, 1.0], [2400.0, 2.0], [2600.0, 3.0], [2800.0, 3.0], [3000.0, 3.0], [3200.0, 3.0], [3400.0, 3.0], [3600.0, 3.0], [3800.0, 3.0], [4000.0, 3.0], [4200.0, 3.0], [4400.0, 3.0], [4600.0, 3.0], [4800.0, 3.0], [5000.0, 3.0], [5200.0, 3.0], [5400.0, 3.0], [5600.0, 3.0], [5800.0, 3.0], [6000.0, 3.0], [6200.0, 3.0], [6400.0, 3.0], [6600.0, 3.0], [6800.0, 3.0], [7000.0, 3.0], [7200.0, 3.0], [7400.0, 3.0], [7500.0, 1.0], [7600.0, 2.0], [7700.0, 1.0], [7800.0, 2.0], [7900.0, 1.0], [8000.0, 2.0], [8100.0, 1.0], [8200.0, 2.0], [8300.0, 1.0], [8400.0, 2.0], [8600.0, 3.0], [8800.0, 3.0], [9000.0, 3.0], [9200.0, 3.0], [9300.0, 1.0], [9400.0, 2.0], [9500.0, 1.0], [9600.0, 2.0], [9700.0, 1.0], [9800.0, 2.0], [9900.0, 1.0], [10000.0, 2.0], [10100.0, 1.0], [10200.0, 2.0], [10300.0, 1.0], [10400.0, 2.0], [10600.0, 3.0], [10800.0, 3.0], [11000.0, 3.0], [11200.0, 3.0], [11400.0, 3.0], [11600.0, 3.0], [11800.0, 3.0], [12000.0, 3.0], [12200.0, 3.0], [12400.0, 3.0], [12600.0, 3.0], [12800.0, 3.0], [13000.0, 3.0], [13200.0, 3.0], [13400.0, 3.0], [13600.0, 2.0], [200.0, 3.0], [500.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 182.0, "series": [{"data": [[0.0, 3.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 15.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 182.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 97.42499999999997, "minX": 1.72726212E12, "maxY": 97.42499999999997, "series": [{"data": [[1.72726212E12, 97.42499999999997]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726212E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 957.0, "minX": 1.0, "maxY": 13674.0, "series": [{"data": [[2.0, 13648.0], [3.0, 13494.0], [4.0, 13484.0], [5.0, 13449.0], [6.0, 13295.0], [7.0, 13277.0], [8.0, 13258.0], [9.0, 13091.0], [10.0, 13079.0], [11.0, 13050.0], [12.0, 12882.0], [13.0, 12877.0], [14.0, 12847.0], [15.0, 12675.0], [16.0, 12675.0], [17.0, 12651.0], [18.0, 12474.0], [19.0, 12465.0], [20.0, 12448.0], [21.0, 12278.0], [22.0, 12266.0], [23.0, 12255.0], [24.0, 12073.0], [25.0, 12068.0], [26.0, 12051.0], [27.0, 11871.0], [28.0, 11860.0], [29.0, 11843.0], [30.0, 11661.0], [31.0, 11647.0], [33.0, 11466.0], [32.0, 11633.0], [35.0, 11436.0], [34.0, 11456.0], [37.0, 11247.0], [36.0, 11260.0], [39.0, 11061.0], [38.0, 11225.0], [41.0, 11019.0], [40.0, 11041.0], [43.0, 10835.0], [42.0, 10862.0], [45.0, 10651.0], [44.0, 10812.0], [47.0, 10602.0], [46.0, 10632.0], [49.0, 10426.0], [48.0, 10454.0], [51.0, 10248.0], [50.0, 10398.0], [53.0, 10190.0], [52.0, 10224.0], [55.0, 10022.0], [54.0, 10048.0], [57.0, 9844.0], [56.0, 9986.0], [59.0, 9786.0], [58.0, 9814.0], [61.0, 9615.0], [60.0, 9643.0], [63.0, 9443.0], [62.0, 9593.0], [67.0, 9211.0], [66.0, 9239.0], [65.0, 9395.0], [64.0, 9411.0], [71.0, 9006.0], [70.0, 9001.0], [69.0, 9033.0], [68.0, 9200.0], [75.0, 8637.0], [74.0, 8806.0], [73.0, 8807.0], [72.0, 8835.0], [79.0, 8410.0], [78.0, 8429.0], [77.0, 8611.0], [76.0, 8606.0], [82.0, 2253.5], [83.0, 8190.0], [81.0, 8221.0], [80.0, 8395.0], [87.0, 7822.0], [86.0, 7988.0], [85.0, 8008.0], [84.0, 8020.0], [91.0, 7615.0], [90.0, 7624.0], [89.0, 7792.0], [88.0, 7813.0], [95.0, 7402.0], [94.0, 7419.0], [93.0, 7424.0], [92.0, 7599.0], [99.0, 7026.0], [98.0, 7204.0], [97.0, 7219.0], [96.0, 7226.0], [103.0, 6822.0], [102.0, 6829.0], [101.0, 7003.0], [100.0, 7016.0], [107.0, 6612.0], [106.0, 6622.0], [105.0, 6631.0], [104.0, 6812.0], [111.0, 6236.0], [110.0, 6416.0], [109.0, 6433.0], [108.0, 6441.0], [115.0, 6028.0], [114.0, 6034.0], [113.0, 6215.0], [112.0, 6231.0], [119.0, 5812.0], [118.0, 5830.0], [117.0, 5832.0], [116.0, 6012.0], [123.0, 5436.0], [122.0, 5621.0], [121.0, 5634.0], [120.0, 5631.0], [127.0, 2878.0], [126.0, 5242.0], [125.0, 5416.0], [124.0, 5437.0], [129.0, 2773.0], [128.0, 2866.5], [135.0, 4631.0], [134.0, 4806.0], [133.0, 4830.0], [132.0, 4833.0], [131.0, 5009.0], [130.0, 5031.0], [143.0, 4206.0], [142.0, 4224.0], [141.0, 4224.0], [140.0, 4416.0], [139.0, 4433.0], [138.0, 4439.0], [137.0, 4617.0], [136.0, 4631.0], [151.0, 3631.0], [150.0, 3636.0], [149.0, 3809.0], [148.0, 3827.0], [147.0, 3833.0], [146.0, 4013.0], [145.0, 4030.0], [144.0, 4025.0], [159.0, 3042.0], [158.0, 3210.0], [157.0, 3232.0], [156.0, 3238.0], [155.0, 3413.0], [154.0, 3434.0], [153.0, 3439.0], [152.0, 3610.0], [167.0, 2607.0], [166.0, 2622.0], [165.0, 2635.0], [164.0, 2807.0], [163.0, 2828.0], [162.0, 2842.0], [161.0, 3014.0], [160.0, 3033.0], [174.0, 1393.0], [173.0, 1477.0], [172.0, 1477.5], [175.0, 2036.0], [171.0, 2221.0], [170.0, 2394.0], [169.0, 2410.0], [168.0, 2424.0], [183.0, 1400.0], [182.0, 1591.0], [181.0, 1595.0], [180.0, 1619.0], [179.0, 1803.0], [178.0, 1827.0], [177.0, 1837.0], [176.0, 2014.0], [191.0, 957.0], [190.0, 959.0], [189.0, 966.0], [188.0, 1168.0], [187.0, 1181.0], [186.0, 1189.0], [185.0, 1379.0], [184.0, 1369.0], [1.0, 13674.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[97.42499999999997, 6988.944999999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 191.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 656.6666666666666, "minX": 1.72726212E12, "maxY": 993.25, "series": [{"data": [[1.72726212E12, 656.6666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72726212E12, 993.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726212E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 6988.944999999997, "minX": 1.72726212E12, "maxY": 6988.944999999997, "series": [{"data": [[1.72726212E12, 6988.944999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726212E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 6988.79, "minX": 1.72726212E12, "maxY": 6988.79, "series": [{"data": [[1.72726212E12, 6988.79]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726212E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4.070000000000003, "minX": 1.72726212E12, "maxY": 4.070000000000003, "series": [{"data": [[1.72726212E12, 4.070000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726212E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 257.0, "minX": 1.72726212E12, "maxY": 13674.0, "series": [{"data": [[1.72726212E12, 13674.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72726212E12, 12431.000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72726212E12, 13646.460000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72726212E12, 13077.55]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72726212E12, 257.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72726212E12, 7009.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726212E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 272.0, "minX": 2.0, "maxY": 13661.0, "series": [{"data": [[2.0, 13661.0], [3.0, 272.0], [12.0, 6516.0], [13.0, 6612.0], [14.0, 7421.5], [15.0, 7011.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 272.0, "minX": 2.0, "maxY": 13661.0, "series": [{"data": [[2.0, 13661.0], [3.0, 272.0], [12.0, 6516.0], [13.0, 6611.0], [14.0, 7421.5], [15.0, 7011.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726212E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726212E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726212E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726212E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726212E12, 3.3333333333333335]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726212E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726212E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726212E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726212E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726212E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726212E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726212E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

