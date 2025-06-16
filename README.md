
# phala_cloud_demo

This is a minimal **Confidential API** designed to demonstrate how to build and deploy secure apps using **Phala Cloud** and **Trusted Execution Environments (TEEs)**.

The API signs incoming messages using a secret key that is **securely managed and only accessible inside the TEE**.

## Features

- Sign messages using HMAC-SHA256
- Secret key never leaves the TEE
- Dockerized and ready for Phala Cloud deployment
- Quick to test locally



## Project Structure

```

phala\_cloud\_demo/
├── index.js              # Express API logic
├── package.json          # Node.js dependencies
├── Dockerfile            # Image definition
├── docker-compose.yml    # Deployment config for Phala Cloud
├── .dockerignore
└── .gitignore

````



##  Local Development

### 1. Install dependencies

```bash
npm install
````

### 2. Set environment variable

Create a `.env` file:

```env
SIGNING_SECRET=super-secret-value
```

> You can also export it directly in your terminal:
> `export SIGNING_SECRET=super-secret-value`

### 3. Run the API

```bash
node index.js
```

Test it:

```bash
curl -X POST http://localhost:3000/sign \
  -H "Content-Type: application/json" \
  -d '{"message":"hello"}'
```

---

## Docker Build

```bash
docker build -t your-dockerhub-username/phala_cloud_demo .
```

Run locally:

```bash
docker run -p 3000:3000 -e SIGNING_SECRET=super-secret-value your-dockerhub-username/phala_cloud_demo
```



## Deploy on Phala Cloud

1. Push your image:

```bash
docker push your-dockerhub-username/phala_cloud_demo
```

2. Go to [Phala Cloud](https://cloud.phala.network)
3. Paste your `docker-compose.yml`
4. Add the `SIGNING_SECRET` under **Encrypted Secrets**
5. Deploy 

---

## API Endpoint

Once deployed, test your endpoint:

```http
POST https://<your-app-id>-3000.dstack-prod2.phala.network/sign
{
  "message": "hello world"
}
```

---

## Learn More

* [Phala Cloud Explorer](https://cloud.phala.network/explorer)
*  Blog: *Zero to Confidential Computing: A Junior Developer’s Guide to Dstack & Phala Cloud* (coming soon)

---

##  License

MIT — free to use, learn, and fork!


