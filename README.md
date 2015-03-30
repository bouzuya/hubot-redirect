# hubot-redirect

A Hubot script to redirect message from direct message to channel

**Slack only**

## Installation

    $ npm install https://github.com/bouzuya/hubot-redirect/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-redirect/archive/{VERSION}.tar.gz

## Example

    # in DM
    bouzuya> hubot redirect message!!! #general

    # in #general
      hubot> message!!!

## Configuration

See [`src/scripts/redirect.coffee`](src/scripts/redirect.coffee).

## Development

See `npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-redirect
[travis-badge]: https://travis-ci.org/bouzuya/hubot-redirect.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-redirect
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-redirect.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-redirect
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-redirect.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
