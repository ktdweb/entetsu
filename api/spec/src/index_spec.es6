import frisby from 'frisby'

const HOST   = 'http://localhost:8080/api/'
const MODEL = ''

/* index '/' */
frisby.create(
    "正常系 '/'でContent-Typeでhtmlを返すか"
  )
  .get(HOST + MODEL)
  .expectStatus(200)
  .expectHeader(
    'Content-Type',
    'text/html;charset=utf-8'
  )
  .toss();
