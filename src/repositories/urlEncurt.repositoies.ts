import { EntityRepository, Repository } from "typeorm";
import UrlsEncurt from "../entities/UrlsEncurt.entities";

@EntityRepository(UrlsEncurt)
class UrlEncurt extends Repository<UrlsEncurt>{ }

export { UrlEncurt };