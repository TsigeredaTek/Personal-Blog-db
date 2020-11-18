import * as express from 'express';
import db from '../db';

const router: express.Router = express.Router();

router.get('/', async (req: express.Request, res: express.Response) => {
    try {
        let blogs = await db.Blogs.allBlogs();
        console.log(blogs)
        res.send(blogs);
    } catch(err) {
        console.error(err);
    }
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        const data = await db.Blogs.oneBlog(id);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        const data = await db.Blogs.oneBlog(id);
        res.send(data[0]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    
});

router.put("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        const newChirpContent = req.body.content;

        await db.Blogs.update(newChirpContent, id);
    
        res.status(200).send(`Updated blogs ${id}`)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.delete("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const id: number = Number(req.params.id);
        await db.Blogs.destroy(id);
        res.send(`blogs ${id} was deleted`);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router

























// import * as express from "express";
// import db from "../db";

// const router: express.Router = express.Router();

// // GET /api/chirps/1 or GET /api/chirps
// router.get("/", async (req: express.Request, res: express.Response,) => {
//     try {
//     const data = await db.Blogs.all();
//   res.json(data);
// } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
// }
//   });

//   router.get("/:id", async (req: express.Request, res: express.Response) => {
//     try {
//     const id: number = Number(req.params.id)
//     const data = await db.Blogs.(id);
//     console.log(data);
//     res.send(data);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
//     });

// // POST /api/chirps/
// router.post("/", async (req:express.Request, res: express.Response) => {
//   try {
//     const result = await db.Blogs.insert(blogs.content, newUser.insertId);
//   } catch (err) {
//       console.log(err);
//       res.status(500).send(err);
//      }
// });

// // PUT /api/chirps/1
// router.put("/:id", async (req: express.Request, res: express.Response) => {
//   const id = Number(req.params.id);
//   const Blogs = req.body;
//   try {
//     await db.blogs.update(id, blogs.content);
//     res.json({ msg: "edited", id });
//   } catch (error) {
//     next(error);

//   }
// });

// // DELETE /api/chirps/1
// router.delete("/:id", async (req, res, next) => {
//   const id = Number(req.params.id);
//   try {
//     await db.blogs.destroy(id);
//     res.json({ msg: "destroyed" });
//   } catch (error) {
//     next(error);

    

//   }
// });

// export default router;
