(function () {
    
    var rowsArray = $.map($('tr', 'tbody'), function (row) {
        return row;
    })
    
    var pelicansRoster = rowsArray.map(function (r) {
        
        var row = $(r);
        
        return {
            name: $("span.playerName a", row).text(),
            number: $('.playerNumber', row).text(),
            position: $('.playerPosition', row).text(),
            goals: $('.gp', row).text(),
            fieldGoals: $('.fgm', row).text(),
            fieldGoalPercentage: $('.fg_pct', row).text(),
            threePointerPercentage: $('.fg3_pct', row).text(),
            freeThrowPercentage: $('.ft_pct', row).text(),
            offensiveRebounds: $('.oreb', row).text(),
            defensiveRebounds: $('.dreb', row).text(),
            totalRebounds: $('.reb', row).text(),
            totalPoints: $('.pts', row).text(),
        }
    });
    
    var jsonRoster = JSON.stringify(pelicansRoster);
    
    console.log(jsonRoster);
}).call()