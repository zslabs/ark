import fetch from 'node-fetch'
import yargs from 'yargs'

const main = async () => {
  const url = process.env.SLACK_WEBHOOK_URL

  if (!url) {
    throw new Error('Missing Slack Webhook URL')
  }

  const argv = yargs(process.argv.slice(2))
    .options({
      p: { type: 'string' },
      v: { type: 'string' },
      c: { type: 'string' },
    })
    .parseSync()

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      package_name: argv.p,
      version: argv.v,
      changelog: argv.c,
    }),
  })
}

main()
