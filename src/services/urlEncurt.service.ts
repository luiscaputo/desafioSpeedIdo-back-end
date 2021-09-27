import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { UrlEncurt } from "../repositories/urlEncurt.repositoies";

export default interface IUrl {
    url: string,
    urlEncurterd: string
}
class UrlsEncurt {
    async execute(url: string) {
        const urlEncurt = getCustomRepository(
            UrlEncurt
        );
        if (url === "") {
            return 'Precisa Passar uma URL'
        }
        const alreadyExistUrl = await urlEncurt.findOne(
            url
        );

        if (alreadyExistUrl) {
            return 'Essa Url Já foi encurtada uma vez, deseja consultar?';
        }

        const
            codeUrlEncurted = await hash(url, 5),
            urlEncurterd = codeUrlEncurted[0] + codeUrlEncurted[1] + codeUrlEncurted[2] + '.com';
        const guardUrl = urlEncurt.create({
            url,
            codeUrl: codeUrlEncurted,
            encurtedUrl: urlEncurterd
        });
        await urlEncurt.save(
            guardUrl
        );
        return guardUrl;
    }
}

export { UrlsEncurt }