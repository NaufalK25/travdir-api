# Travel Directory API (TravDir)

REST API that contain list of all tourist destination located in Indonesia. Built with [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/).

### How To Run In Development

1. Clone the repository

    ```
    git clone https://github.com/NaufalK25/travdir-api.git
    ```

2. Install all dependencies including dev dependencies

    ```
    npm i
    // or
    npm install
    ```

3. Run application

    ```
    npm start
    // or
    npx run start
    // or
    npx tsc && npx ts-node app.ts
    ```

Status: `Under Development`

### Documentation

| Parameter         | Description                                 |
| ----------------- | ------------------------------------------- |
| `destinationSlug` | slug for destination to get detail about it |

Base URL: `-`

### Endpoints

**GET** `/api/destinations`

#### Output

```json
{
    {
    "success": true,
    "status": 200,
    "message": "OK",
    "results": {
        "count": 4,
        "destinations": [
            {
                "_id": "61ea950cbe09b6314bec15b6",
                "name": "Jembatan Ampera",
                "slug": "jembatan-ampera",
                "description": "Jembatan Ampera adalah jembatan yang dibangun atas penderitaan rakyat Palembang.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jembatan_Ampera_%28Palembang%29.jpg/1200px-Jembatan_Ampera_%28Palembang%29.jpg",
                "buildYear": 1962,
                "location": {
                    "_id": "61ed249940c46892c19847de",
                    "coordinates": {
                        "_id": "61ed249940c46892c19847df",
                        "latitude": -2.9917,
                        "longitude": 104.7635
                    },
                    "address": "Jl. Ampera No. 1, Palembang, Sumatera Selatan 30111",
                    "city": "Palembang",
                    "province": "Sumatera Selatan",
                    "postalCode": "30111"
                },
                "types": [
                    "bersejarah"
                ],
            },
            {
                "_id": "61eba8ec99c2187c5f6987f2",
                "name": "Punti Kayu",
                "slug": "punti-kayu",
                "description": "Taman Wisata Alam Punti Kayu Palembang adalah sebuah hutan wisata dan rekreasi keluarga. Kawasan hutan penghasil oksigen segar ini berada di tengah Kota Palembang. Di sini, wisatawan dapat menikmati indahnya panorama alami.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PuntiKayu.jpg/1200px-PuntiKayu.jpg",
                "buildYear": 1937,
                "location": {
                    "_id": "61eba8f699c2187c5f6987fb",
                    "coordinates": {
                        "_id": "61ed26ae40c46892c19847fc",
                        "latitude": -2.9437208,
                        "longitude": 104.7260844
                    },
                    "address": "Jalan Kolonel H Burlian Km. 6,5, Sukarami, Palembang, Sumatera Selatan 30511",
                    "city": "Palembang",
                    "province": "Sumatera Selatan",
                    "postalCode": "30511"
                },
                "types": [
                    "alam"
                ]
            },
            ...
        ]
    }
}
}
```

**POST** `/api/destinations`

#### Output

```json
{
    "success": true,
    "status": 201,
    "message": "Created",
    "results": {
        "destination": {
            "_id": "61eba8ec99c2187c5f6987f2",
            "name": "Punti Kayu",
            "slug": "punti-kayu",
            "description": "Taman Wisata Alam Punti Kayu Palembang adalah sebuah hutan wisata dan rekreasi keluarga. Kawasan hutan penghasil oksigen segar ini berada di tengah Kota Palembang. Di sini, wisatawan dapat menikmati indahnya panorama alami.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PuntiKayu.jpg/1200px-PuntiKayu.jpg",
            "buildYear": 1937,
            "location": {
                "_id": "61eba8f699c2187c5f6987fb",
                "coordinates": {
                    "_id": "61ed26ae40c46892c19847fc",
                    "latitude": -2.9437208,
                    "longitude": 104.7260844
                },
                "address": "Jalan Kolonel H Burlian Km. 6,5, Sukarami, Palembang, Sumatera Selatan 30511",
                "city": "Palembang",
                "province": "Sumatera Selatan",
                "postalCode": "30511"
            },
            "types": ["alam"],
            "createdAt": "2022-01-21T17:24:37.141Z",
            "updatedAt": "2022-01-21T17:24:37.141Z"
        }
    }
}
```

**GET** `/api/destination/:destinationSlug`

#### Output

```json
{
    "success": true,
    "status": 200,
    "message": "OK",
    "results": {
        "destination": {
            "_id": "61eba8ec99c2187c5f6987f2",
            "name": "Punti Kayu",
            "slug": "punti-kayu",
            "description": "Taman Wisata Alam Punti Kayu Palembang adalah sebuah hutan wisata dan rekreasi keluarga. Kawasan hutan penghasil oksigen segar ini berada di tengah Kota Palembang. Di sini, wisatawan dapat menikmati indahnya panorama alami.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PuntiKayu.jpg/1200px-PuntiKayu.jpg",
            "buildYear": 1937,
            "location": {
                "_id": "61eba8f699c2187c5f6987fb",
                "coordinates": {
                    "_id": "61ed26ae40c46892c19847fc",
                    "latitude": -2.9437208,
                    "longitude": 104.7260844
                },
                "address": "Jalan Kolonel H Burlian Km. 6,5, Sukarami, Palembang, Sumatera Selatan 30511",
                "city": "Palembang",
                "province": "Sumatera Selatan",
                "postalCode": "30511"
            },
            "types": ["alam"]
        }
    }
}
```

**PUT** `/api/destination/:destinationSlug`

#### Output

```json
{
    "success": true,
    "status": 200,
    "message": "Destination successfully updated!",
    "results": {
        "destination": {
            "_id": "61eba8ec99c2187c5f6987f2",
            "name": "Punti Kayu",
            "slug": "punti-kayu",
            "description": "Taman Wisata Alam Punti Kayu Palembang adalah sebuah hutan wisata dan rekreasi keluarga. Kawasan hutan penghasil oksigen segar ini berada di tengah Kota Palembang. Di sini, wisatawan dapat menikmati indahnya panorama alami.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PuntiKayu.jpg/1200px-PuntiKayu.jpg",
            "buildYear": 1937,
            "location": {
                "_id": "61eba8f699c2187c5f6987fb",
                "coordinates": {
                    "_id": "61ed26ae40c46892c19847fc",
                    "latitude": -2.9437208,
                    "longitude": 104.7260844
                },
                "address": "Jalan Kolonel H Burlian Km. 6,5, Sukarami, Palembang, Sumatera Selatan",
                "city": "Palembang",
                "province": "Sumatera Selatan",
                "postalCode": "30511"
            },
            "types": ["alam"],
            "updatedAt": "2022-01-21T17:26:10.134Z"
        }
    }
}
```

**DELETE** `/api/destination/:destinationSlug`

#### Output

```json
{
    "success": true,
    "status": 200,
    "message": "Destination successfully deleted!"
}
```

### Credits

_Copyright © 2022 Muhammad Naufal Kateni_
