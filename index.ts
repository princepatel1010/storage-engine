import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import  multer, {StorageEngine, FileFilterCallback, diskStorage, DiskStorageOptions} from 'multer'
import {v1 as filenameGenerator} from 'uuid'

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

type DestinationCallback = (error: Error | null, destination: string) => void
type FilenameCallback = (error: Error | null, filename: string) => void

const storage: StorageEngine = diskStorage({
    destination: (
        req: Request,
        file: Express.Multer.File,
        cb: DestinationCallback
    ): void => {
        cb(null, '../files')
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: FilenameCallback
    ): void => {
        const filename = filenameGenerator()
        cb(null, filename)
    },
})

const fileHandler = multer({storage}).single('file')

app.post('/upload', fileHandler, (req: Request, res: Response) => {

    console.log(req.file)

    return res.status(200).json({
        message: 'File uploaded successfully'
    })
});

app.listen(port, () => console.log(`Listening on ::${port}`));