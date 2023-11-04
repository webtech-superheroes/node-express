# Basic HTTP implementation

Demonstrates basic HTTP implementation using expressjs framework

## Install

Clone the repo and install dependecies

```
npm install
```

## Testing

```
npm test
```

## Building and running the app

First build from typescript to javascript

```
npm run build
```

The compiled sources will be generated in the dist directory. Now you can execute the app by issuing the following command.
```
node dist/index.js
```

## Starting the app in dev mode

```
npm run start:dev
```

## Endpoints

Retrieve a list of messages

**Request**
```
GET /messages
```

```bash
curl http://localhost:3000/messages
```

**Response**

Status code: 200 OK

Response body:
```json
{"messages":[]}
```

Post a new message

**Request**

```
POST /messages
```

Payload

```
Content-Type: application/json

{"message":"Hello, World!"}
```

```bash
curl -X POST http://localhost:3000/messages -H "Content-Type: application/json" -d '{"message":"Hello, World!"}'

```

**Response**

Status code: 201 Accepted

Response body:
```json
{"message":"Message received"}
```

## Docker

Building image

```
docker build -t messages-app-express .
```

Run container

```
docker run -p 3000:3000 messages-app-express
```

## Load test

```
k6 run loadtest.js
```

Result - docker
```
     ✓ status was 201

     checks.........................: 100.00% ✓ 56800      ✗ 0
     data_received..................: 15 MB   128 kB/s
     data_sent......................: 9.5 MB  79 kB/s
     http_req_blocked...............: avg=31.6µs   min=0s       med=0s       max=20.26ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=4.71µs   min=0s       med=0s       max=7.56ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=9.03ms   min=504.1µs  med=6.91ms   max=104.36ms p(90)=19.09ms  p(95)=22.47ms
       { expected_response:true }...: avg=9.03ms   min=504.1µs  med=6.91ms   max=104.36ms p(90)=19.09ms  p(95)=22.47ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 56800
     http_req_receiving.............: avg=33.97µs  min=0s       med=0s       max=2.71ms   p(90)=0s       p(95)=517.9µs
     http_req_sending...............: avg=15.15µs  min=0s       med=0s       max=7.87ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=8.99ms   min=503.6µs  med=6.88ms   max=104.36ms p(90)=19.04ms  p(95)=22.39ms
     http_reqs......................: 56800   472.715055/s
     iteration_duration.............: avg=211.49ms min=200.51ms med=211.44ms max=325.29ms p(90)=220.05ms p(95)=223.9ms
     iterations.....................: 56800   472.715055/s
     vus............................: 100     min=100      max=100
```

Results - nodemon develop

```
✓ status was 201

     checks.........................: 100.00% ✓ 57948      ✗ 0
     data_received..................: 16 MB   130 kB/s
     data_sent......................: 9.7 MB  81 kB/s
     http_req_blocked...............: avg=23.8µs   min=0s    med=0s       max=15.57ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=772ns    min=0s    med=0s       max=2.51ms   p(90)=0s       p(95)=0s
     http_req_duration..............: avg=5.2ms    min=0s    med=3.19ms   max=82.52ms  p(90)=12.46ms  p(95)=15.94ms
       { expected_response:true }...: avg=5.2ms    min=0s    med=3.19ms   max=82.52ms  p(90)=12.46ms  p(95)=15.94ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 57948
     http_req_receiving.............: avg=26.99µs  min=0s    med=0s       max=5.15ms   p(90)=0s       p(95)=131.3µs
     http_req_sending...............: avg=9.23µs   min=0s    med=0s       max=8.82ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=5.17ms   min=0s    med=3.16ms   max=82.52ms  p(90)=12.38ms  p(95)=15.87ms
     http_reqs......................: 57948   482.276302/s
     iteration_duration.............: avg=207.25ms min=200ms med=204.32ms max=297.73ms p(90)=216.45ms p(95)=218.06ms
     iterations.....................: 57948   482.276302/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```

Results - local build

```
✓ status was 201

     checks.........................: 100.00% ✓ 58002      ✗ 0
     data_received..................: 16 MB   130 kB/s
     data_sent......................: 9.7 MB  81 kB/s
     http_req_blocked...............: avg=25.64µs  min=0s    med=0s       max=15.67ms  p(90)=0s       p(95)=0s
     http_req_connecting............: avg=709ns    min=0s    med=0s       max=2ms      p(90)=0s       p(95)=0s
     http_req_duration..............: avg=4.79ms   min=0s    med=2.88ms   max=76.93ms  p(90)=11.59ms  p(95)=14.85ms
       { expected_response:true }...: avg=4.79ms   min=0s    med=2.88ms   max=76.93ms  p(90)=11.59ms  p(95)=14.85ms
     http_req_failed................: 0.00%   ✓ 0          ✗ 58002
     http_req_receiving.............: avg=28.82µs  min=0s    med=0s       max=3.04ms   p(90)=0s       p(95)=144.49µs
     http_req_sending...............: avg=12.65µs  min=0s    med=0s       max=3.88ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s    med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=4.75ms   min=0s    med=2.84ms   max=76.93ms  p(90)=11.53ms  p(95)=14.79ms
     http_reqs......................: 58002   482.556205/s
     iteration_duration.............: avg=207.07ms min=200ms med=204.09ms max=295.42ms p(90)=216.29ms p(95)=217.86ms
     iterations.....................: 58002   482.556205/s
     vus............................: 100     min=100      max=100
     vus_max........................: 100     min=100      max=100
```
