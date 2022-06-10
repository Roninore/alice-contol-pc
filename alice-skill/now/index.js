const { json } = require('micro')
const rp = require('request-promise')
const querystring = require('querystring')

module.exports = async (req, res) => {
  const { request, session, version } = await json(req)
  var options = {
    uri: '<secretUrl>/addNotification/859070725',
    json: true,
    headers: {
      text: encodeURI(request.original_utterance),
      date: Date.now(),
      'Content-Type': 'application/json',
    },
  }
  const msg = await rp(options)
  if (options.headers.text) 
  {
    res.end(
      JSON.stringify({
        version,
        session,
        response: {
          text: 'Хорошо!',
          end_session: true,
        },
      })
    )
  }
  else
  res.end(
    JSON.stringify({
      version,
      session,
      response: {
        text: 'Скажите, что и когда напомнить',
        end_session: false,
      },
    })
  )
}
