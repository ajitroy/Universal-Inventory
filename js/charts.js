/**
 * Created with PyCharm.
 * User: aroy
 * Date: 8/30/13
 * Time: 7:12 PM
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    $('#itemgrid').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Current Inventory Status'
        },
        xAxis: {
            categories: ['eBay.in', 'Amazon.in', 'Flipkart']
        },
        yAxis: {
            title: {
                text: 'Inventory status'
            }
        },
        series: [{
            name: 'LED Torch',
            data: [1, 0, 4]
        }, {
            name: 'Sony Headphone 101',
            data: [5, 2, 3]
        }]
    });

    $('#channelgrid').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly sales by channel'
        },
        xAxis: {
            categories: [
                'This Month',
                'Last Month'
            ]
        },

        yAxis: {
            min: 0,
            title: {
                text: 'Total Sales (Units)'
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                         '<td style="padding:0"><b>{point.y:.1f} units</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },

        series: [{
            name: 'eBay',
            data: [120,200]

        }, {
            name: 'Amazon',
            data: [90,160]

        }, {
            name: 'Flipkart',
            data: [190,60]

        }, {
            name: 'Jabong',
            data: [50,95]

        }]



    });

    $('#market_insight_div').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: ''
            },
            tooltip: {
        	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                type: 'pie',
                name: 'channel',
                data: [
                    ['eBay',   15],
                    ['Amazon',       8],
                    {
                        name: 'Flipkart',
                        y: 42,
                        sliced: true,
                        selected: true
                    },
                    ['Infibeam',    15],
                    ['Others',   20]
                ]
            }]
    });

    $('#close_charts').click(function (){
       $('#slider').hide();
    });


    $('[data-toggle="modal"]').click(function(e) {
	    e.preventDefault();
	    var url = $(this).attr('href');
	    if (url.indexOf('#') == 0) {
		    $(url).modal('open');
	    } else {
		    $.get(url, function(data) {
                $('<div class="modal hide fade">' + data + '</div>').modal();
            }).success(function() {
                   //
                    $('input:text:visible:first').focus();
                });
	    }
    });

});
