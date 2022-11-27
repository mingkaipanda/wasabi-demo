<template>
        <div class="content">
        <div class="contentWrap p-20">
            <ul class="breadcrumb">
                <li>
                    <a href="" class="point-light ml-10" accesskey="C" id="content-start">:::</a>
                </li>
                <li>
                    <span class="breadcrumb">
                        &nbsp;目前位置&nbsp;>&nbsp;
                        <span class="text-primary">外幣存款利率</span>
                    </span>
                </li>
            </ul>
            <h2>外幣存款利率</h2>
            <div class="oneTable">
                <div>
                    <span></span>
                </div>
                <ul class="oneTableWrap">
                    <li>
                        <div class="space-between">
                            <div class="data">
                                <img src="@/assets/img/clock.svg" alt="" class="dataPic">
                                <span class="dataTitle">
                                    資料日期：
                                    <span id="dataTitle-date">{{ new Date()}}</span>
                                </span>
                                <span class="updatePrice" @click="getForeignDepositRates()">更新報價</span>
                            </div>
                            <div class="unit">單位： 年息%</div>
                        </div>
                        <table class="rwdTable">
                            <thead>
                                <tr width="100%">
                                    <th scope="rowgroup" rowspan="2" width="20%" align="center">幣別</th>
                                    <th scope="rowgroup" rowspan="2" width="20%" align="center">活期</th>
                                    <th scope="colgroup" colspan="10" width="60%" align="center">定期存款</th>
                                </tr>
                                <tr>
                                    <th scope="col" align="right">一週</th>
                                    <th scope="col" align="right">二週</th>
                                    <th scope="col" align="right">三週</th>
                                    <th scope="col" align="right">一月</th>
                                    <th scope="col" align="right">三月</th>
                                    <th scope="col" align="right">六月</th>
                                    <th scope="col" align="right">九月</th>
                                    <th scope="col" align="right">一年</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(foreignDepositRate, index) in foreignDepositRates"
                                    :key="index"
                                >
                                    <td scope="row" data-th="幣別" class="title">{{ foreignDepositRate.currency != null ? foreignDepositRate.currency : "-" }}</td>
                                    <td data-th="活期">{{ foreignDepositRate.currentDeposit != null ? foreignDepositRate.currentDeposit : "-" }}</td>
                                    <td data-th="一週">{{ foreignDepositRate.timedDeposit.oneWeek != null ? foreignDepositRate.timedDeposit.oneWeek : "-" }}</td>
                                    <td data-th="二週">{{ foreignDepositRate.timedDeposit.twoWeeks != null ? foreignDepositRate.timedDeposit.twoWeeks : "-" }}</td>
                                    <td data-th="三週">{{ foreignDepositRate.timedDeposit.threeWeeks != null ? foreignDepositRate.timedDeposit.threeWeeks : "-" }}</td>
                                    <td data-th="一月">{{ foreignDepositRate.timedDeposit.oneMonth != null ? foreignDepositRate.timedDeposit.oneMonth : "-" }}</td>
                                    <td data-th="三月">{{ foreignDepositRate.timedDeposit.threeMonths != null ? foreignDepositRate.timedDeposit.threeMonths : "-" }}</td>
                                    <td data-th="六月">{{ foreignDepositRate.timedDeposit.sixMonths != null ? foreignDepositRate.timedDeposit.sixMonths : "-" }}</td>
                                    <td data-th="九月">{{ foreignDepositRate.timedDeposit.nineMonths != null ? foreignDepositRate.timedDeposit.nineMonths : "-" }}</td>
                                    <td data-th="一年">{{ foreignDepositRate.timedDeposit.oneYear != null ? foreignDepositRate.timedDeposit.oneYear : "-" }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<!-- <style scoped src="@/assets/css/rate/base.css"></style> -->
<style scoped lang="scss">
@import "@/assets/scss/rate/accessibility.scss";
</style>

<script>
export default {
    name: 'ForexDespositeRate',
    data(){
        return {
            foreignDepositRates: null
        }
    },
    methods: {
        getForeignDepositRates: function() {
            fetch("https://mocki.io/v1/94ea7d89-5f37-470f-ac29-7f1fd82c9cc8")
                .then(response => (this.foreignDepositRates = response.json()))
                .then(data => (this.foreignDepositRates = data.foreignDepositRates))
        }
    },
    mounted: function(){
        this.getForeignDepositRates();
    }
}

</script>