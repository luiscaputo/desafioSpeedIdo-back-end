import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UrlEncurt } from "../repositories/urlEncurt.repositoies";


export default class ListByIdController {
    async handle(
        id: string,
        request: Request,
        response: Response
    ) {
        try {
            const listUrlRepository = getCustomRepository(
                UrlEncurt
            );
            const id = request.params.id
            const existUrl = await listUrlRepository.findOne(
                id
            );
            if (!existUrl) {
                return 'Essa Url Não Existe'
            }
            else {
                const getById = listUrlRepository.findOne(id);
                return response.status(200)
                    .json({ success: true, data: getById });
            }
        } catch (e) {
            return response.status(400)
                .json({ success: false, data: e.message })
        }
    }
}