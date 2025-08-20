import * as httpResponse from "../utils/http-helper";
import * as repository from "../repositories/club-repository";

export const getClubService = async ()=>{
    const data = await repository.findAllClubs();
    const response = httpResponse.ok(data);
    return response;
};