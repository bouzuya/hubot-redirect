// Description
//   A Hubot script to redirect message from direct message to channel
//
// Configuration:
//   None
//
// Commands:
//   hubot redirect <message> [#<channel>] - redirect <message> to #channel
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.respond(/redirect (.+?)(\s+#.+)?\s*$/i, function(res) {
    var message, ref, room;
    if (res.envelope.user.name !== res.envelope.room) {
      return;
    }
    message = res.match[1];
    room = ((ref = res.match[2]) != null ? ref : '#general').trim();
    return robot.messageRoom(room, message);
  });
};
