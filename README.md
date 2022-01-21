# Travel Directory API (TravDir)

REST API that contain list of all tourist destination located in Indonesia. Built with [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/).

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
        "count": 3,
        "destinations": [
            {
                "_id": "61ea950cbe09b6314bec15b6",
                "name": "Jembatan Ampera",
                "slug": "jembatan-ampera",
                "detail_url": "http://localhost:3000/api/destination/jembatan-ampera",
                "description": "Jembatan Ampera adalah jembatan yang dibangun atas penderitaan rakyat Palembang.",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jembatan_Ampera_%28Palembang%29.jpg/1200px-Jembatan_Ampera_%28Palembang%29.jpg",
                "location": {
                    "_id": "61eae50123047db5ad51f01a",
                    "address": "Jl. Ampera No. 1, Palembang, Sumatera Selatan 30111",
                    "city": "Palembang",
                    "province": "Sumatera Selatan"
                }
            },
            {
                "_id": "61ea959a25f46776ef298e5c",
                "name": "Benteng Kuto Besak",
                "slug": "benteng-kuto-besak",
                "detail_url": "http://localhost:3000/api/destination/benteng-kuto-besak",
                "description": "Benteng Kuto Besak terletak di bagian tenggara dari Sungai Musi. Bentuk benteng adalah persegi panjang. Ukurannya adalah 288,75 meter × 183,75 meter.",
                "image": "https://www.travdir.com/wp-content/uploads/2018/10/benteng-kuto-besak-1.jpg",
                "location": {
                    "_id": "61ea959a25f46776ef298e5d",
                    "address": "Jl. Kuto Besak, Kec. Kuto Besak, Palembang, Sumatera Selatan 30111",
                    "city": "Palembang",
                    "province": "Sumatera Selatan"
                }
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
            "_id": "61eaec55766780ade878158c",
            "name": "Punti Kayu",
            "slug": "punti-kayu",
            "description": "Taman Wisata Alam Punti Kayu Palembang adalah sebuah hutan wisata dan rekreasi keluarga. Kawasan hutan penghasil oksigen segar ini berada di tengah Kota Palembang. Di sini, wisatawan dapat menikmati indahnya panorama alami.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PuntiKayu.jpg/1200px-PuntiKayu.jpg",
            "location": {
                "_id": "61eaec55766780ade878158d",
                "address": "Jalan Kolonel H Burlian Km. 6,5, Sukarami, Sumatera Selatan 30151",
                "city": "Palembang",
                "province": "Sumatera Selatan"
            },
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
            "_id": "61eaec55766780ade878158c",
            "name": "Punti Kayu",
            "slug": "punti-kayu",
            "description": "Taman Wisata Alam Punti Kayu Palembang adalah sebuah hutan wisata dan rekreasi keluarga. Kawasan hutan penghasil oksigen segar ini berada di tengah Kota Palembang. Di sini, wisatawan dapat menikmati indahnya panorama alami.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PuntiKayu.jpg/1200px-PuntiKayu.jpg",
            "location": {
                "_id": "61eaecb2766780ade8781591",
                "address": "Jalan Kolonel H Burlian Km. 6,5, Sukarami, Sumatera Selatan 30151",
                "city": "Palembang",
                "province": "Sumatera Selatan"
            }
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
            "_id": "61eaec55766780ade878158c",
            "name": "Punti Kayu",
            "slug": "punti-kayu",
            "description": "Taman Wisata Alam Punti Kayu Palembang adalah sebuah hutan wisata dan rekreasi keluarga. Kawasan hutan penghasil oksigen segar ini berada di tengah Kota Palembang. Di sini, wisatawan dapat menikmati indahnya panorama alami.",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/PuntiKayu.jpg/1200px-PuntiKayu.jpg",
            "location": {
                "_id": "61eaecb2766780ade8781591",
                "address": "Jalan Kolonel H Burlian Km. 6,5, Sukarami, Palembang, Sumatera Selatan 30151",
                "city": "Palembang",
                "province": "Sumatera Selatan"
            },
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
