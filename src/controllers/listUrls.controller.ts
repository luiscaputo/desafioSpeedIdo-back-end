import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { UrlEncurt } from "../repositories/urlEncurt.repositoies"

class ListUrlsController {
    async hanle(
        request: Request,
        response: Response
    ) {
        const urlEncurtRepositorie = getCustomRepository(
            UrlEncurt
        );

        try {
            const getAllUrl = await urlEncurtRepositorie.find({
                order: {
                    url: 'ASC'
                }
            });
            if (getAllUrl.length > 0) {
                return response.status(200)
                    .json({
                        sucess: true,
                        data: getAllUrl
                    });
            }
            else
                return response.status(400)
                    .json({
                        success: false,
                        message: 'No momento não tens Urls cadastradas'
                    })
        } catch (e) {
            return response.status(401)
                .json({
                    success: false,
                    message: e.message
                })
        }
    }
}

export { ListUrlsController }