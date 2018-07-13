function Ve_Bieu_do(Kieu, Data_cate, Data_seri) {
    Highcharts.setOptions({
        lang: {
            numericSymbols: [' Ngàn', ' Triệu', 'Tỷ'],
            numericSymbolMagnitude: 100000000000,
            decimalPoint: ',',
            thousandsSep: '.'
        },
        chart: {
            style: {
                fontFamily: 'tahoma',
                fontSize: 14
            }
        }
    });
    Highcharts.chart('Th_Bieu_do', {
        chart: {
            type: Kieu, // bar , column, line, pie
            plotBorderWidth: 1
        },
        legend: {
            /*
            align: 'right',
            verticalAlign: 'top',
            layout: 'vertical',
            x: 0,
            y: 100
            */
        },
        subtitle: {
            text: 'Dữ liệu thống kê doanh thu điện thoại'
        },
        title: {
            text: 'Phone Consumption',
            align: 'left',
            style: {
                color: 'red',
                fontWeight: 'bold',
                fontSize: '3rem'
            },
            x: 50
        },
        xAxis: {
            categories: Data_cate
        },
        yAxis: {
            title: {
                text: 'Quản lý',

                style: {
                    color: 'blue',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                }

            }
        },
        series: Data_seri,

        tooltip: {
            backgroundColor: '#FCFFC5',
            borderColor: 'black',
            borderRadius: 10,
            borderWidth: 3,
            formatter: function () {
                return 'The value for <b>' + this.x + '</b> is <b>' + this.y + '</b>, in series ' + this.series.name;
            },
            crosshairs: [true]
        }

    });

}