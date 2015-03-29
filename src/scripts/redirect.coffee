# Description
#   A Hubot script to redirect message from direct message to channel
#
# Configuration:
#   None
#
# Commands:
#   hubot redirect <message> [#<channel>] - redirect <message> to #channel
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.respond /redirect (.+?)(\s+#.+)?\s*$/i, (res) ->
    # DM only
    return if res.envelope.user.name isnt res.envelope.room
    message = res.match[1]
    room = (res.match[2] ? '#general').trim()
    robot.messageRoom room, message
