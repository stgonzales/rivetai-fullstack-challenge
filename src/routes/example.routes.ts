import { Router } from 'express';

const exampleRouter = Router();

exampleRouter.get('/', (request, response) => {
    return response.json({
        message: '✨🤘🏾 This is a example GET route.'
    })
})

export default exampleRouter;
