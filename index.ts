import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import  {StorageEngine, FileFilterCallback, diskStorage, DiskStorageOptions} from 'multer'

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

const storage: StorageEngine = diskStorage({})

app.post('/upload', (req: Request, res: Response) => {
    
});

app.listen(port, () => console.log(`Listening on ::${port}`));