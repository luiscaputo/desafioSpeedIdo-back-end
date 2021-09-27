import { application, Router } from "express";
import { AuthenticateUserController } from "./controllers/authenticate.controller";
import { ListUrlsController } from "./controllers/listUrls.controller";
import UrlEncurtController from "./controllers/urlEncurt.controller";
import { UsersController } from "./controllers/users.controller";
import "./middleweres/auth";
import { AuthLogin } from "./middleweres/auth";
// import { AuthLogin } from "./middleweres/auth";

const router = Router();
//controllers
const usersController = new UsersController();
const authenticateUserController = new AuthenticateUserController();
const urlEncurtCOntroller = new UrlEncurtController();
const listUrlsController = new ListUrlsController();
const listByIdController = new ListUrlsController();

//Home 
router.get('/', (_, res) => {
  res.send({ message: 'Welcome to Player - 2 challenge' });
});
//users
router.post("/login", authenticateUserController.handle);
router.post('/users-create', usersController.handleCreate);
//url
router.post("/url/encurt", urlEncurtCOntroller.handle);
router.get("/url/encurt/all", AuthLogin, listUrlsController.hanle);
router.get("/url/encurt/byId/:id", AuthLogin, listUrlsController.hanle);


export { router }
