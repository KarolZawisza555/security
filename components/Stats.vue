<template>
    <div>
        <div class="chart">
            <VueApexCharts height="400px" type="radialBar" :options="data.chartOptions" :series="data.series" />
        </div>
        <data-tables :data="tableData" />
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useSportStore } from '~~/stores/sportStore';
import { useDietStore } from '~~/stores/dietStore';
import { useHabbitsStore } from '~~/stores/habbitsStore';
import { useWorkStore } from '~~/stores/workStore';
import VueApexCharts from "vue3-apexcharts";
import percentNumbers from "../helpers/percentNumbers"

const storeSport = useSportStore()
const storeDiet = useDietStore()
const storeHabbits = useHabbitsStore()
const storeWork = useWorkStore()
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
const showValues = computed(() => {
    return [
        { name: "sport", store: storeSport },
        { name: "diet", store: storeDiet },
        { name: "habbits", store: storeHabbits },
        { name: "work", store: storeWork },
    ]
})
const tableData = computed(() => {
    return [
        { process: "sport", points: storeSport.sumOfPoints, dayLimitPoints: storeSport.dayLimitPoints, percent: percentNumbers(storeSport.sumOfPoints, storeSport.dayLimitPoints), maxPoints: storeSport.maxPoints },
        { process: "diet", points: storeDiet.sumOfPoints, dayLimitPoints: storeDiet.maxPoints, percent: percentNumbers(storeDiet.sumOfPoints, storeDiet.maxPoints), maxPoints: storeDiet.maxPoints },
        { process: "habbits", points: storeHabbits.sumOfPoints, dayLimitPoints: storeHabbits.dayLimitPoints, percent: percentNumbers(storeHabbits.sumOfPoints, storeHabbits.dayLimitPoints), maxPoints: storeHabbits.maxPoints },
        { process: "work", points: storeWork.sumOfPoints, dayLimitPoints: storeWork.dayLimitPoints, percent: percentNumbers(storeWork.sumOfPoints, storeWork.dayLimitPoints), maxPoints: storeWork.maxPoints },

    ]
})
const data = computed(() => {
    return {

        series: [
            percentNumbers(storeSport.sumOfPoints, storeSport.dayLimitPoints),
            percentNumbers(storeDiet.sumOfPoints, storeDiet.maxPoints),
            percentNumbers(storeHabbits.sumOfPoints, storeHabbits.dayLimitPoints),
            percentNumbers(storeWork.sumOfPoints, storeWork.dayLimitPoints)
        ],
        chartOptions: {
            chart: {
                height: "100%",
                type: "radialBar",
            },
            plotOptions: {

                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 12,
                        size: "50%",
                        background: "transparent",
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: true,
                        },
                        value: {
                            show: true,
                            fontSize: '36px',
                            offsetY: 50,
                        },
                        total: {
                            show: true,
                            fontSize: '48px',
                            label: 'Total',
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return storeSport.sumOfPoints + storeDiet.sumOfPoints + storeHabbits.sumOfPoints + storeWork.sumOfPoints
                            }
                        },
                    },

                },
            },

            colors: ["#0D47A1", "#1B5E20", "#E65100", "#303234"],
            labels: ["Sport", "Diet", "Habbits", "Work"],
            legend: {
                show: true,
                floating: true,
                fontSize: "24px",
                position: "left",
                offsetX: 100,
                offsetY: 15,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 12,
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%";
                },
                itemMargin: {
                    vertical: 3,
                },
            },

            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        },
    }
})

</script>

<style>
.chart {
    min-height: 400px;
}
</style>