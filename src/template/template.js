/**
 * Template for new plugins.
 * Base on:
 *
 */
const room = HBInit();

/*
Specification of plugin
room.pluginSpec = {
    name: `<name_of_plugin>`,
    author: `<author>`,
    version: `1.0.0`,

    dependencies: [
       //all dependent plugins
    ],
};
 */

room.pluginSpec = {
    name: `template`,
    author: `Thioby`,
    version: `1.0.0`,

    dependencies: [
        `sav/core`,
        `sav/chat`,
        `tut/reactions`
    ],
};

// event on game start
room.onGameStart = () => {

};

// event on kick player
room.onPlayerBallKick = (player) => {
};

/**
 * Event called once for every game tick (happens 60 times per second).
 *
 * This is useful if you want to monitor the player and ball positions without
 * missing any ticks.
 *
 */

room.onGameTick = () => {

};



room.onCommand_stats_help = () => {
    room.sendChat('distr: Distribution of ball on pitch, divided into three areas.' +
        'poss: Possession by teams. poss_players: Possession by players.');
};

room.onCommand_stats_distr = () => {
    room.sendAnnouncement(room.outputDistribution());
};

room.onCommand_stats_poss = () => {
    room.sendAnnouncement(room.outputPossessionPerTeam());
};

room.onCommand_stats_poss_players = () => {
    room.sendAnnouncement(room.outputPossessionPerPlayer());
};

room.onCommand_stats_passes_players = () => {
    room.sendAnnouncement(room.outputPassesPerPlayer());
};

room.outputDistribution = () => {
    let distrPerc = calculatePercentage(distributionBall);
    return ('Distribution: ' + distrPerc[1] + ' % | ' + distrPerc[0] + '% | ' + distrPerc[2] + '%');
};
