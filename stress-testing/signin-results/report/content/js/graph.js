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
        data: {"result": {"minY": 267.0, "minX": 0.0, "maxY": 13693.0, "series": [{"data": [[0.0, 267.0], [0.1, 267.0], [0.2, 267.0], [0.3, 267.0], [0.4, 267.0], [0.5, 267.0], [0.6, 267.0], [0.7, 267.0], [0.8, 267.0], [0.9, 267.0], [1.0, 270.0], [1.1, 270.0], [1.2, 270.0], [1.3, 270.0], [1.4, 270.0], [1.5, 491.0], [1.6, 491.0], [1.7, 491.0], [1.8, 491.0], [1.9, 491.0], [2.0, 492.0], [2.1, 492.0], [2.2, 492.0], [2.3, 492.0], [2.4, 492.0], [2.5, 496.0], [2.6, 496.0], [2.7, 496.0], [2.8, 496.0], [2.9, 496.0], [3.0, 716.0], [3.1, 716.0], [3.2, 716.0], [3.3, 716.0], [3.4, 716.0], [3.5, 724.0], [3.6, 724.0], [3.7, 724.0], [3.8, 724.0], [3.9, 724.0], [4.0, 726.0], [4.1, 726.0], [4.2, 726.0], [4.3, 726.0], [4.4, 726.0], [4.5, 946.0], [4.6, 946.0], [4.7, 946.0], [4.8, 946.0], [4.9, 946.0], [5.0, 948.0], [5.1, 948.0], [5.2, 948.0], [5.3, 948.0], [5.4, 948.0], [5.5, 953.0], [5.6, 953.0], [5.7, 953.0], [5.8, 953.0], [5.9, 953.0], [6.0, 1165.0], [6.1, 1165.0], [6.2, 1165.0], [6.3, 1165.0], [6.4, 1165.0], [6.5, 1165.0], [6.6, 1165.0], [6.7, 1165.0], [6.8, 1165.0], [6.9, 1165.0], [7.0, 1167.0], [7.1, 1167.0], [7.2, 1167.0], [7.3, 1167.0], [7.4, 1167.0], [7.5, 1363.0], [7.6, 1363.0], [7.7, 1363.0], [7.8, 1363.0], [7.9, 1363.0], [8.0, 1377.0], [8.1, 1377.0], [8.2, 1377.0], [8.3, 1377.0], [8.4, 1377.0], [8.5, 1383.0], [8.6, 1383.0], [8.7, 1383.0], [8.8, 1383.0], [8.9, 1383.0], [9.0, 1571.0], [9.1, 1571.0], [9.2, 1571.0], [9.3, 1571.0], [9.4, 1571.0], [9.5, 1591.0], [9.6, 1591.0], [9.7, 1591.0], [9.8, 1591.0], [9.9, 1591.0], [10.0, 1593.0], [10.1, 1593.0], [10.2, 1593.0], [10.3, 1593.0], [10.4, 1593.0], [10.5, 1804.0], [10.6, 1804.0], [10.7, 1804.0], [10.8, 1804.0], [10.9, 1804.0], [11.0, 1811.0], [11.1, 1811.0], [11.2, 1811.0], [11.3, 1811.0], [11.4, 1811.0], [11.5, 1813.0], [11.6, 1813.0], [11.7, 1813.0], [11.8, 1813.0], [11.9, 1813.0], [12.0, 2001.0], [12.1, 2001.0], [12.2, 2001.0], [12.3, 2001.0], [12.4, 2001.0], [12.5, 2017.0], [12.6, 2017.0], [12.7, 2017.0], [12.8, 2017.0], [12.9, 2017.0], [13.0, 2029.0], [13.1, 2029.0], [13.2, 2029.0], [13.3, 2029.0], [13.4, 2029.0], [13.5, 2201.0], [13.6, 2201.0], [13.7, 2201.0], [13.8, 2201.0], [13.9, 2201.0], [14.0, 2202.0], [14.1, 2202.0], [14.2, 2202.0], [14.3, 2202.0], [14.4, 2202.0], [14.5, 2203.0], [14.6, 2203.0], [14.7, 2203.0], [14.8, 2203.0], [14.9, 2203.0], [15.0, 2401.0], [15.1, 2401.0], [15.2, 2401.0], [15.3, 2401.0], [15.4, 2401.0], [15.5, 2403.0], [15.6, 2403.0], [15.7, 2403.0], [15.8, 2403.0], [15.9, 2403.0], [16.0, 2408.0], [16.1, 2408.0], [16.2, 2408.0], [16.3, 2408.0], [16.4, 2408.0], [16.5, 2597.0], [16.6, 2597.0], [16.7, 2597.0], [16.8, 2597.0], [16.9, 2597.0], [17.0, 2602.0], [17.1, 2602.0], [17.2, 2602.0], [17.3, 2602.0], [17.4, 2602.0], [17.5, 2606.0], [17.6, 2606.0], [17.7, 2606.0], [17.8, 2606.0], [17.9, 2606.0], [18.0, 2796.0], [18.1, 2796.0], [18.2, 2796.0], [18.3, 2796.0], [18.4, 2796.0], [18.5, 2797.0], [18.6, 2797.0], [18.7, 2797.0], [18.8, 2797.0], [18.9, 2797.0], [19.0, 2806.0], [19.1, 2806.0], [19.2, 2806.0], [19.3, 2806.0], [19.4, 2806.0], [19.5, 2988.0], [19.6, 2988.0], [19.7, 2988.0], [19.8, 2988.0], [19.9, 2988.0], [20.0, 2991.0], [20.1, 2991.0], [20.2, 2991.0], [20.3, 2991.0], [20.4, 2991.0], [20.5, 2999.0], [20.6, 2999.0], [20.7, 2999.0], [20.8, 2999.0], [20.9, 2999.0], [21.0, 3193.0], [21.1, 3193.0], [21.2, 3193.0], [21.3, 3193.0], [21.4, 3193.0], [21.5, 3195.0], [21.6, 3195.0], [21.7, 3195.0], [21.8, 3195.0], [21.9, 3195.0], [22.0, 3205.0], [22.1, 3205.0], [22.2, 3205.0], [22.3, 3205.0], [22.4, 3205.0], [22.5, 3389.0], [22.6, 3389.0], [22.7, 3389.0], [22.8, 3389.0], [22.9, 3389.0], [23.0, 3392.0], [23.1, 3392.0], [23.2, 3392.0], [23.3, 3392.0], [23.4, 3392.0], [23.5, 3400.0], [23.6, 3400.0], [23.7, 3400.0], [23.8, 3400.0], [23.9, 3400.0], [24.0, 3595.0], [24.1, 3595.0], [24.2, 3595.0], [24.3, 3595.0], [24.4, 3595.0], [24.5, 3596.0], [24.6, 3596.0], [24.7, 3596.0], [24.8, 3596.0], [24.9, 3596.0], [25.0, 3600.0], [25.1, 3600.0], [25.2, 3600.0], [25.3, 3600.0], [25.4, 3600.0], [25.5, 3795.0], [25.6, 3795.0], [25.7, 3795.0], [25.8, 3795.0], [25.9, 3795.0], [26.0, 3798.0], [26.1, 3798.0], [26.2, 3798.0], [26.3, 3798.0], [26.4, 3798.0], [26.5, 3801.0], [26.6, 3801.0], [26.7, 3801.0], [26.8, 3801.0], [26.9, 3801.0], [27.0, 3991.0], [27.1, 3991.0], [27.2, 3991.0], [27.3, 3991.0], [27.4, 3991.0], [27.5, 3995.0], [27.6, 3995.0], [27.7, 3995.0], [27.8, 3995.0], [27.9, 3995.0], [28.0, 4002.0], [28.1, 4002.0], [28.2, 4002.0], [28.3, 4002.0], [28.4, 4002.0], [28.5, 4196.0], [28.6, 4196.0], [28.7, 4196.0], [28.8, 4196.0], [28.9, 4196.0], [29.0, 4198.0], [29.1, 4198.0], [29.2, 4198.0], [29.3, 4198.0], [29.4, 4198.0], [29.5, 4211.0], [29.6, 4211.0], [29.7, 4211.0], [29.8, 4211.0], [29.9, 4211.0], [30.0, 4391.0], [30.1, 4391.0], [30.2, 4391.0], [30.3, 4391.0], [30.4, 4391.0], [30.5, 4406.0], [30.6, 4406.0], [30.7, 4406.0], [30.8, 4406.0], [30.9, 4406.0], [31.0, 4418.0], [31.1, 4418.0], [31.2, 4418.0], [31.3, 4418.0], [31.4, 4418.0], [31.5, 4588.0], [31.6, 4588.0], [31.7, 4588.0], [31.8, 4588.0], [31.9, 4588.0], [32.0, 4606.0], [32.1, 4606.0], [32.2, 4606.0], [32.3, 4606.0], [32.4, 4606.0], [32.5, 4625.0], [32.6, 4625.0], [32.7, 4625.0], [32.8, 4625.0], [32.9, 4625.0], [33.0, 4799.0], [33.1, 4799.0], [33.2, 4799.0], [33.3, 4799.0], [33.4, 4799.0], [33.5, 4816.0], [33.6, 4816.0], [33.7, 4816.0], [33.8, 4816.0], [33.9, 4816.0], [34.0, 4837.0], [34.1, 4837.0], [34.2, 4837.0], [34.3, 4837.0], [34.4, 4837.0], [34.5, 5011.0], [34.6, 5011.0], [34.7, 5011.0], [34.8, 5011.0], [34.9, 5011.0], [35.0, 5015.0], [35.1, 5015.0], [35.2, 5015.0], [35.3, 5015.0], [35.4, 5015.0], [35.5, 5041.0], [35.6, 5041.0], [35.7, 5041.0], [35.8, 5041.0], [35.9, 5041.0], [36.0, 5209.0], [36.1, 5209.0], [36.2, 5209.0], [36.3, 5209.0], [36.4, 5209.0], [36.5, 5210.0], [36.6, 5210.0], [36.7, 5210.0], [36.8, 5210.0], [36.9, 5210.0], [37.0, 5244.0], [37.1, 5244.0], [37.2, 5244.0], [37.3, 5244.0], [37.4, 5244.0], [37.5, 5414.0], [37.6, 5414.0], [37.7, 5414.0], [37.8, 5414.0], [37.9, 5414.0], [38.0, 5418.0], [38.1, 5418.0], [38.2, 5418.0], [38.3, 5418.0], [38.4, 5418.0], [38.5, 5443.0], [38.6, 5443.0], [38.7, 5443.0], [38.8, 5443.0], [38.9, 5443.0], [39.0, 5624.0], [39.1, 5624.0], [39.2, 5624.0], [39.3, 5624.0], [39.4, 5624.0], [39.5, 5625.0], [39.6, 5625.0], [39.7, 5625.0], [39.8, 5625.0], [39.9, 5625.0], [40.0, 5638.0], [40.1, 5638.0], [40.2, 5638.0], [40.3, 5638.0], [40.4, 5638.0], [40.5, 5829.0], [40.6, 5829.0], [40.7, 5829.0], [40.8, 5829.0], [40.9, 5829.0], [41.0, 5837.0], [41.1, 5837.0], [41.2, 5837.0], [41.3, 5837.0], [41.4, 5837.0], [41.5, 5844.0], [41.6, 5844.0], [41.7, 5844.0], [41.8, 5844.0], [41.9, 5844.0], [42.0, 6031.0], [42.1, 6031.0], [42.2, 6031.0], [42.3, 6031.0], [42.4, 6031.0], [42.5, 6033.0], [42.6, 6033.0], [42.7, 6033.0], [42.8, 6033.0], [42.9, 6033.0], [43.0, 6046.0], [43.1, 6046.0], [43.2, 6046.0], [43.3, 6046.0], [43.4, 6046.0], [43.5, 6230.0], [43.6, 6230.0], [43.7, 6230.0], [43.8, 6230.0], [43.9, 6230.0], [44.0, 6237.0], [44.1, 6237.0], [44.2, 6237.0], [44.3, 6237.0], [44.4, 6237.0], [44.5, 6251.0], [44.6, 6251.0], [44.7, 6251.0], [44.8, 6251.0], [44.9, 6251.0], [45.0, 6430.0], [45.1, 6430.0], [45.2, 6430.0], [45.3, 6430.0], [45.4, 6430.0], [45.5, 6434.0], [45.6, 6434.0], [45.7, 6434.0], [45.8, 6434.0], [45.9, 6434.0], [46.0, 6446.0], [46.1, 6446.0], [46.2, 6446.0], [46.3, 6446.0], [46.4, 6446.0], [46.5, 6634.0], [46.6, 6634.0], [46.7, 6634.0], [46.8, 6634.0], [46.9, 6634.0], [47.0, 6646.0], [47.1, 6646.0], [47.2, 6646.0], [47.3, 6646.0], [47.4, 6646.0], [47.5, 6660.0], [47.6, 6660.0], [47.7, 6660.0], [47.8, 6660.0], [47.9, 6660.0], [48.0, 6841.0], [48.1, 6841.0], [48.2, 6841.0], [48.3, 6841.0], [48.4, 6841.0], [48.5, 6854.0], [48.6, 6854.0], [48.7, 6854.0], [48.8, 6854.0], [48.9, 6854.0], [49.0, 6854.0], [49.1, 6854.0], [49.2, 6854.0], [49.3, 6854.0], [49.4, 6854.0], [49.5, 7042.0], [49.6, 7042.0], [49.7, 7042.0], [49.8, 7042.0], [49.9, 7042.0], [50.0, 7058.0], [50.1, 7058.0], [50.2, 7058.0], [50.3, 7058.0], [50.4, 7058.0], [50.5, 7063.0], [50.6, 7063.0], [50.7, 7063.0], [50.8, 7063.0], [50.9, 7063.0], [51.0, 7245.0], [51.1, 7245.0], [51.2, 7245.0], [51.3, 7245.0], [51.4, 7245.0], [51.5, 7269.0], [51.6, 7269.0], [51.7, 7269.0], [51.8, 7269.0], [51.9, 7269.0], [52.0, 7270.0], [52.1, 7270.0], [52.2, 7270.0], [52.3, 7270.0], [52.4, 7270.0], [52.5, 7457.0], [52.6, 7457.0], [52.7, 7457.0], [52.8, 7457.0], [52.9, 7457.0], [53.0, 7466.0], [53.1, 7466.0], [53.2, 7466.0], [53.3, 7466.0], [53.4, 7466.0], [53.5, 7478.0], [53.6, 7478.0], [53.7, 7478.0], [53.8, 7478.0], [53.9, 7478.0], [54.0, 7669.0], [54.1, 7669.0], [54.2, 7669.0], [54.3, 7669.0], [54.4, 7669.0], [54.5, 7672.0], [54.6, 7672.0], [54.7, 7672.0], [54.8, 7672.0], [54.9, 7672.0], [55.0, 7674.0], [55.1, 7674.0], [55.2, 7674.0], [55.3, 7674.0], [55.4, 7674.0], [55.5, 7870.0], [55.6, 7870.0], [55.7, 7870.0], [55.8, 7870.0], [55.9, 7870.0], [56.0, 7875.0], [56.1, 7875.0], [56.2, 7875.0], [56.3, 7875.0], [56.4, 7875.0], [56.5, 7878.0], [56.6, 7878.0], [56.7, 7878.0], [56.8, 7878.0], [56.9, 7878.0], [57.0, 8070.0], [57.1, 8070.0], [57.2, 8070.0], [57.3, 8070.0], [57.4, 8070.0], [57.5, 8071.0], [57.6, 8071.0], [57.7, 8071.0], [57.8, 8071.0], [57.9, 8071.0], [58.0, 8074.0], [58.1, 8074.0], [58.2, 8074.0], [58.3, 8074.0], [58.4, 8074.0], [58.5, 8267.0], [58.6, 8267.0], [58.7, 8267.0], [58.8, 8267.0], [58.9, 8267.0], [59.0, 8281.0], [59.1, 8281.0], [59.2, 8281.0], [59.3, 8281.0], [59.4, 8281.0], [59.5, 8281.0], [59.6, 8281.0], [59.7, 8281.0], [59.8, 8281.0], [59.9, 8281.0], [60.0, 8467.0], [60.1, 8467.0], [60.2, 8467.0], [60.3, 8467.0], [60.4, 8467.0], [60.5, 8482.0], [60.6, 8482.0], [60.7, 8482.0], [60.8, 8482.0], [60.9, 8482.0], [61.0, 8485.0], [61.1, 8485.0], [61.2, 8485.0], [61.3, 8485.0], [61.4, 8485.0], [61.5, 8677.0], [61.6, 8677.0], [61.7, 8677.0], [61.8, 8677.0], [61.9, 8677.0], [62.0, 8679.0], [62.1, 8679.0], [62.2, 8679.0], [62.3, 8679.0], [62.4, 8679.0], [62.5, 8688.0], [62.6, 8688.0], [62.7, 8688.0], [62.8, 8688.0], [62.9, 8688.0], [63.0, 8868.0], [63.1, 8868.0], [63.2, 8868.0], [63.3, 8868.0], [63.4, 8868.0], [63.5, 8884.0], [63.6, 8884.0], [63.7, 8884.0], [63.8, 8884.0], [63.9, 8884.0], [64.0, 8893.0], [64.1, 8893.0], [64.2, 8893.0], [64.3, 8893.0], [64.4, 8893.0], [64.5, 9074.0], [64.6, 9074.0], [64.7, 9074.0], [64.8, 9074.0], [64.9, 9074.0], [65.0, 9086.0], [65.1, 9086.0], [65.2, 9086.0], [65.3, 9086.0], [65.4, 9086.0], [65.5, 9088.0], [65.6, 9088.0], [65.7, 9088.0], [65.8, 9088.0], [65.9, 9088.0], [66.0, 9275.0], [66.1, 9275.0], [66.2, 9275.0], [66.3, 9275.0], [66.4, 9275.0], [66.5, 9282.0], [66.6, 9282.0], [66.7, 9282.0], [66.8, 9282.0], [66.9, 9282.0], [67.0, 9283.0], [67.1, 9283.0], [67.2, 9283.0], [67.3, 9283.0], [67.4, 9283.0], [67.5, 9477.0], [67.6, 9477.0], [67.7, 9477.0], [67.8, 9477.0], [67.9, 9477.0], [68.0, 9484.0], [68.1, 9484.0], [68.2, 9484.0], [68.3, 9484.0], [68.4, 9484.0], [68.5, 9485.0], [68.6, 9485.0], [68.7, 9485.0], [68.8, 9485.0], [68.9, 9485.0], [69.0, 9675.0], [69.1, 9675.0], [69.2, 9675.0], [69.3, 9675.0], [69.4, 9675.0], [69.5, 9682.0], [69.6, 9682.0], [69.7, 9682.0], [69.8, 9682.0], [69.9, 9682.0], [70.0, 9688.0], [70.1, 9688.0], [70.2, 9688.0], [70.3, 9688.0], [70.4, 9688.0], [70.5, 9868.0], [70.6, 9868.0], [70.7, 9868.0], [70.8, 9868.0], [70.9, 9868.0], [71.0, 9874.0], [71.1, 9874.0], [71.2, 9874.0], [71.3, 9874.0], [71.4, 9874.0], [71.5, 9884.0], [71.6, 9884.0], [71.7, 9884.0], [71.8, 9884.0], [71.9, 9884.0], [72.0, 10072.0], [72.1, 10072.0], [72.2, 10072.0], [72.3, 10072.0], [72.4, 10072.0], [72.5, 10076.0], [72.6, 10076.0], [72.7, 10076.0], [72.8, 10076.0], [72.9, 10076.0], [73.0, 10083.0], [73.1, 10083.0], [73.2, 10083.0], [73.3, 10083.0], [73.4, 10083.0], [73.5, 10276.0], [73.6, 10276.0], [73.7, 10276.0], [73.8, 10276.0], [73.9, 10276.0], [74.0, 10285.0], [74.1, 10285.0], [74.2, 10285.0], [74.3, 10285.0], [74.4, 10285.0], [74.5, 10290.0], [74.6, 10290.0], [74.7, 10290.0], [74.8, 10290.0], [74.9, 10290.0], [75.0, 10485.0], [75.1, 10485.0], [75.2, 10485.0], [75.3, 10485.0], [75.4, 10485.0], [75.5, 10485.0], [75.6, 10485.0], [75.7, 10485.0], [75.8, 10485.0], [75.9, 10485.0], [76.0, 10491.0], [76.1, 10491.0], [76.2, 10491.0], [76.3, 10491.0], [76.4, 10491.0], [76.5, 10681.0], [76.6, 10681.0], [76.7, 10681.0], [76.8, 10681.0], [76.9, 10681.0], [77.0, 10695.0], [77.1, 10695.0], [77.2, 10695.0], [77.3, 10695.0], [77.4, 10695.0], [77.5, 10695.0], [77.6, 10695.0], [77.7, 10695.0], [77.8, 10695.0], [77.9, 10695.0], [78.0, 10888.0], [78.1, 10888.0], [78.2, 10888.0], [78.3, 10888.0], [78.4, 10888.0], [78.5, 10892.0], [78.6, 10892.0], [78.7, 10892.0], [78.8, 10892.0], [78.9, 10892.0], [79.0, 10896.0], [79.1, 10896.0], [79.2, 10896.0], [79.3, 10896.0], [79.4, 10896.0], [79.5, 11082.0], [79.6, 11082.0], [79.7, 11082.0], [79.8, 11082.0], [79.9, 11082.0], [80.0, 11088.0], [80.1, 11088.0], [80.2, 11088.0], [80.3, 11088.0], [80.4, 11088.0], [80.5, 11091.0], [80.6, 11091.0], [80.7, 11091.0], [80.8, 11091.0], [80.9, 11091.0], [81.0, 11276.0], [81.1, 11276.0], [81.2, 11276.0], [81.3, 11276.0], [81.4, 11276.0], [81.5, 11282.0], [81.6, 11282.0], [81.7, 11282.0], [81.8, 11282.0], [81.9, 11282.0], [82.0, 11287.0], [82.1, 11287.0], [82.2, 11287.0], [82.3, 11287.0], [82.4, 11287.0], [82.5, 11473.0], [82.6, 11473.0], [82.7, 11473.0], [82.8, 11473.0], [82.9, 11473.0], [83.0, 11486.0], [83.1, 11486.0], [83.2, 11486.0], [83.3, 11486.0], [83.4, 11486.0], [83.5, 11487.0], [83.6, 11487.0], [83.7, 11487.0], [83.8, 11487.0], [83.9, 11487.0], [84.0, 11668.0], [84.1, 11668.0], [84.2, 11668.0], [84.3, 11668.0], [84.4, 11668.0], [84.5, 11687.0], [84.6, 11687.0], [84.7, 11687.0], [84.8, 11687.0], [84.9, 11687.0], [85.0, 11692.0], [85.1, 11692.0], [85.2, 11692.0], [85.3, 11692.0], [85.4, 11692.0], [85.5, 11876.0], [85.6, 11876.0], [85.7, 11876.0], [85.8, 11876.0], [85.9, 11876.0], [86.0, 11881.0], [86.1, 11881.0], [86.2, 11881.0], [86.3, 11881.0], [86.4, 11881.0], [86.5, 11903.0], [86.6, 11903.0], [86.7, 11903.0], [86.8, 11903.0], [86.9, 11903.0], [87.0, 12073.0], [87.1, 12073.0], [87.2, 12073.0], [87.3, 12073.0], [87.4, 12073.0], [87.5, 12090.0], [87.6, 12090.0], [87.7, 12090.0], [87.8, 12090.0], [87.9, 12090.0], [88.0, 12110.0], [88.1, 12110.0], [88.2, 12110.0], [88.3, 12110.0], [88.4, 12110.0], [88.5, 12270.0], [88.6, 12270.0], [88.7, 12270.0], [88.8, 12270.0], [88.9, 12270.0], [89.0, 12300.0], [89.1, 12300.0], [89.2, 12300.0], [89.3, 12300.0], [89.4, 12300.0], [89.5, 12320.0], [89.6, 12320.0], [89.7, 12320.0], [89.8, 12320.0], [89.9, 12320.0], [90.0, 12473.0], [90.1, 12473.0], [90.2, 12473.0], [90.3, 12473.0], [90.4, 12473.0], [90.5, 12507.0], [90.6, 12507.0], [90.7, 12507.0], [90.8, 12507.0], [90.9, 12507.0], [91.0, 12522.0], [91.1, 12522.0], [91.2, 12522.0], [91.3, 12522.0], [91.4, 12522.0], [91.5, 12678.0], [91.6, 12678.0], [91.7, 12678.0], [91.8, 12678.0], [91.9, 12678.0], [92.0, 12711.0], [92.1, 12711.0], [92.2, 12711.0], [92.3, 12711.0], [92.4, 12711.0], [92.5, 12717.0], [92.6, 12717.0], [92.7, 12717.0], [92.8, 12717.0], [92.9, 12717.0], [93.0, 12882.0], [93.1, 12882.0], [93.2, 12882.0], [93.3, 12882.0], [93.4, 12882.0], [93.5, 12910.0], [93.6, 12910.0], [93.7, 12910.0], [93.8, 12910.0], [93.9, 12910.0], [94.0, 12916.0], [94.1, 12916.0], [94.2, 12916.0], [94.3, 12916.0], [94.4, 12916.0], [94.5, 13078.0], [94.6, 13078.0], [94.7, 13078.0], [94.8, 13078.0], [94.9, 13078.0], [95.0, 13103.0], [95.1, 13103.0], [95.2, 13103.0], [95.3, 13103.0], [95.4, 13103.0], [95.5, 13117.0], [95.6, 13117.0], [95.7, 13117.0], [95.8, 13117.0], [95.9, 13117.0], [96.0, 13277.0], [96.1, 13277.0], [96.2, 13277.0], [96.3, 13277.0], [96.4, 13277.0], [96.5, 13306.0], [96.6, 13306.0], [96.7, 13306.0], [96.8, 13306.0], [96.9, 13306.0], [97.0, 13320.0], [97.1, 13320.0], [97.2, 13320.0], [97.3, 13320.0], [97.4, 13320.0], [97.5, 13478.0], [97.6, 13478.0], [97.7, 13478.0], [97.8, 13478.0], [97.9, 13478.0], [98.0, 13503.0], [98.1, 13503.0], [98.2, 13503.0], [98.3, 13503.0], [98.4, 13503.0], [98.5, 13517.0], [98.6, 13517.0], [98.7, 13517.0], [98.8, 13517.0], [98.9, 13517.0], [99.0, 13671.0], [99.1, 13671.0], [99.2, 13671.0], [99.3, 13671.0], [99.4, 13671.0], [99.5, 13693.0], [99.6, 13693.0], [99.7, 13693.0], [99.8, 13693.0], [99.9, 13693.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 3.0, "series": [{"data": [[700.0, 3.0], [900.0, 3.0], [1100.0, 3.0], [1300.0, 3.0], [1500.0, 3.0], [1800.0, 3.0], [2000.0, 3.0], [2200.0, 3.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 2.0], [2800.0, 1.0], [2900.0, 3.0], [3100.0, 2.0], [3200.0, 1.0], [3300.0, 2.0], [3400.0, 1.0], [3500.0, 2.0], [3600.0, 1.0], [3700.0, 2.0], [3800.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 2.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 2.0], [4500.0, 1.0], [4600.0, 2.0], [4700.0, 1.0], [4800.0, 2.0], [5000.0, 3.0], [5200.0, 3.0], [5400.0, 3.0], [5600.0, 3.0], [5800.0, 3.0], [6000.0, 3.0], [6200.0, 3.0], [6400.0, 3.0], [6600.0, 3.0], [6800.0, 3.0], [7000.0, 3.0], [7200.0, 3.0], [7400.0, 3.0], [7600.0, 3.0], [7800.0, 3.0], [8000.0, 3.0], [8200.0, 3.0], [8400.0, 3.0], [8600.0, 3.0], [8800.0, 3.0], [9000.0, 3.0], [9200.0, 3.0], [9400.0, 3.0], [9600.0, 3.0], [9800.0, 3.0], [10000.0, 3.0], [10200.0, 3.0], [10400.0, 3.0], [10600.0, 3.0], [10800.0, 3.0], [11000.0, 3.0], [11200.0, 3.0], [11400.0, 3.0], [11600.0, 3.0], [11800.0, 2.0], [11900.0, 1.0], [12000.0, 2.0], [12100.0, 1.0], [12200.0, 1.0], [12300.0, 2.0], [12400.0, 1.0], [12500.0, 2.0], [12600.0, 1.0], [12700.0, 2.0], [12800.0, 1.0], [12900.0, 2.0], [13000.0, 1.0], [13100.0, 2.0], [13200.0, 1.0], [13300.0, 2.0], [13400.0, 1.0], [13500.0, 2.0], [13600.0, 2.0], [200.0, 3.0], [400.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 182.0, "series": [{"data": [[0.0, 6.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 12.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 182.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 97.17499999999994, "minX": 1.72726224E12, "maxY": 97.17499999999994, "series": [{"data": [[1.72726224E12, 97.17499999999994]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726224E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 716.0, "minX": 1.0, "maxY": 13693.0, "series": [{"data": [[2.0, 13671.0], [3.0, 13517.0], [4.0, 13503.0], [5.0, 13478.0], [6.0, 13320.0], [7.0, 13306.0], [8.0, 13277.0], [9.0, 13117.0], [10.0, 13103.0], [11.0, 13078.0], [12.0, 12916.0], [13.0, 12910.0], [14.0, 12882.0], [15.0, 12717.0], [16.0, 12711.0], [17.0, 12678.0], [18.0, 12522.0], [19.0, 12507.0], [20.0, 12473.0], [21.0, 12320.0], [22.0, 12300.0], [23.0, 12270.0], [24.0, 12110.0], [25.0, 12090.0], [26.0, 12073.0], [27.0, 11903.0], [28.0, 11881.0], [29.0, 11876.0], [30.0, 11692.0], [31.0, 11687.0], [33.0, 11487.0], [32.0, 11668.0], [35.0, 11473.0], [34.0, 11486.0], [37.0, 11282.0], [36.0, 11287.0], [39.0, 11091.0], [38.0, 11276.0], [41.0, 11082.0], [40.0, 11088.0], [43.0, 10892.0], [42.0, 10896.0], [45.0, 10695.0], [44.0, 10888.0], [47.0, 10681.0], [46.0, 10695.0], [48.0, 10485.0], [51.0, 10285.0], [50.0, 10488.0], [53.0, 10276.0], [52.0, 10290.0], [55.0, 10072.0], [54.0, 10083.0], [57.0, 9884.0], [56.0, 10076.0], [59.0, 9868.0], [58.0, 9874.0], [61.0, 9682.0], [60.0, 9688.0], [63.0, 9485.0], [62.0, 9675.0], [67.0, 9283.0], [66.0, 9282.0], [65.0, 9477.0], [64.0, 9484.0], [71.0, 9074.0], [70.0, 9088.0], [69.0, 9086.0], [68.0, 9275.0], [75.0, 8688.0], [74.0, 8868.0], [73.0, 8884.0], [72.0, 8893.0], [77.0, 3070.3333333333335], [78.0, 4377.5], [79.0, 8482.0], [76.0, 8679.0], [83.0, 8267.0], [82.0, 8281.0], [81.0, 8281.0], [80.0, 8467.0], [87.0, 7878.0], [86.0, 8070.0], [85.0, 8071.0], [84.0, 8074.0], [91.0, 7674.0], [90.0, 7672.0], [89.0, 7872.5], [95.0, 7457.0], [94.0, 7466.0], [93.0, 7478.0], [92.0, 7669.0], [99.0, 7058.0], [98.0, 7245.0], [97.0, 7270.0], [96.0, 7269.0], [103.0, 6854.0], [102.0, 6854.0], [101.0, 7042.0], [100.0, 7063.0], [107.0, 6634.0], [106.0, 6646.0], [105.0, 6660.0], [104.0, 6841.0], [111.0, 6251.0], [110.0, 6430.0], [109.0, 6434.0], [108.0, 6446.0], [115.0, 6031.0], [114.0, 6046.0], [113.0, 6230.0], [112.0, 6237.0], [119.0, 5829.0], [118.0, 5837.0], [117.0, 5844.0], [116.0, 6033.0], [121.0, 3058.0], [120.0, 2208.666666666667], [123.0, 5443.0], [122.0, 5624.0], [127.0, 5210.0], [126.0, 5244.0], [125.0, 5414.0], [124.0, 5418.0], [135.0, 4625.0], [134.0, 4799.0], [133.0, 4816.0], [132.0, 4837.0], [131.0, 5011.0], [130.0, 5015.0], [129.0, 5041.0], [128.0, 5209.0], [143.0, 4196.0], [142.0, 4198.0], [141.0, 4211.0], [140.0, 4391.0], [139.0, 4406.0], [138.0, 4418.0], [137.0, 4588.0], [136.0, 4606.0], [150.0, 3596.0], [149.0, 3796.5], [147.0, 3801.0], [146.0, 3991.0], [145.0, 3995.0], [144.0, 4002.0], [159.0, 2999.0], [158.0, 3193.0], [157.0, 3195.0], [156.0, 3205.0], [155.0, 3392.0], [154.0, 3389.0], [153.0, 3400.0], [152.0, 3597.5], [167.0, 1662.25], [166.0, 716.0], [165.0, 2606.0], [164.0, 2796.0], [163.0, 2797.0], [162.0, 2806.0], [161.0, 2991.0], [160.0, 2988.0], [175.0, 2029.0], [174.0, 2001.0], [173.0, 2201.0], [172.0, 2202.0], [171.0, 2203.0], [170.0, 2401.0], [169.0, 2403.0], [168.0, 2408.0], [183.0, 1383.0], [182.0, 1591.0], [181.0, 1571.0], [180.0, 1593.0], [179.0, 1804.0], [178.0, 1813.0], [177.0, 1811.0], [176.0, 2017.0], [191.0, 946.0], [190.0, 948.0], [189.0, 953.0], [188.0, 1165.0], [186.0, 1167.0], [185.0, 1377.0], [184.0, 1363.0], [1.0, 13693.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[97.17499999999994, 7008.309999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 191.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 789.9333333333333, "minX": 1.72726224E12, "maxY": 2048.133333333333, "series": [{"data": [[1.72726224E12, 2048.133333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72726224E12, 789.9333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726224E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 7008.309999999998, "minX": 1.72726224E12, "maxY": 7008.309999999998, "series": [{"data": [[1.72726224E12, 7008.309999999998]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726224E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 7008.185000000001, "minX": 1.72726224E12, "maxY": 7008.185000000001, "series": [{"data": [[1.72726224E12, 7008.185000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726224E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.92, "minX": 1.72726224E12, "maxY": 3.92, "series": [{"data": [[1.72726224E12, 3.92]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726224E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 267.0, "minX": 1.72726224E12, "maxY": 13693.0, "series": [{"data": [[1.72726224E12, 13693.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72726224E12, 12457.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72726224E12, 13669.460000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72726224E12, 13101.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72726224E12, 267.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72726224E12, 7050.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726224E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 380.5, "minX": 6.0, "maxY": 10478.0, "series": [{"data": [[6.0, 380.5], [12.0, 7259.5], [13.0, 6841.0], [14.0, 10478.0], [15.0, 5837.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 380.0, "minX": 6.0, "maxY": 10477.5, "series": [{"data": [[6.0, 380.0], [12.0, 7259.0], [13.0, 6841.0], [14.0, 10477.5], [15.0, 5836.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726224E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726224E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726224E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726224E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726224E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72726224E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726224E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726224E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726224E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72726224E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72726224E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72726224E12, "title": "Total Transactions Per Second"}},
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

