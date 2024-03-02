import { Request, Response, Router } from 'express';
import { handleContractData } from './controllers';
import bodyParser from 'body-parser';

export const router = Router();

router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

router.get("/", (req: Request, res: Response) => {
    res.send("Router ready");
})

router.post("/post_data", handleContractData);
