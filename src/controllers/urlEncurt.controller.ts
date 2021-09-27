import { Request, Response } from "express";
import IUrl, { UrlsEncurt } from "../services/urlEncurt.service";

export default class UrlEncurtController {
    async handle(
        request: Request<IUrl>,
        response: Response
    ) {
        try {
            const urlsEncurtService = new UrlsEncurt();
            const url = request.body.url;

            const encurting = await urlsEncurtService.execute(
                url
            );

            if (encurting) {
                return response.status(200)
                    .json({
                        success: true,
                        data: encurting
                    })
            } else {
                return response.status(500)
                    .json({
                        success: false,
                        message: 'UPS! Aconteceu algum erro'
                    })
            }
        } catch (e) {
            return response.status(400)
                .json({
                    success: false,
                    message: e.message
                });
        }
    }
}