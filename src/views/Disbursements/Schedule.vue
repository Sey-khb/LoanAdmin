<template>
    <div class="table-responsive">
    <table class="table table-hover" aria-hidden="true">
        <thead>
            <tr class="text-nowrap bg-light">
                <th scope="">No}</th>
                <th scope="">Payment Date</th>
                <th scope="">Balance</th>
                <th scope="">Principal</th>
                <th scope="">Interest</th>
                <th scope="">Penalty</th>
                <th scope="">Fee</th>
                <th scope="">Total</th>
                <th scope="">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
            </tr>
        </tbody>
        <!-- <tfoot class="thead-light">
            <tr class="text-nowrap">
                <th scope=""></th>
                <th scope=""></th>
                <th scope=""></th>
                <th scope="">@{{formatCurrency(totalPrinciple, getCurrency())}}</th>
                <th scope="">@{{formatCurrency(totalInterest, getCurrency())}}</th>
                <th scope="">@{{formatCurrency(totalPenalty, getCurrency())}}</th>
                <th scope="">@{{formatCurrency(totalFee, getCurrency())}}</th>
                {{-- <th scope="">@{{formatCurrency(totalExtra, getCurrency())}}</th> --}}
                <th scope="">@{{formatCurrency(grandTotal, getCurrency())}}</th>
                <th scope=""></th>
            </tr>
        </tfoot> -->
    </table>
</div>
</template>