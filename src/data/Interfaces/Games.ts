import { BaseDataModel, BaseReviewModel } from "./BaseModels";

export interface Game extends BaseDataModel {
    reviews: GameReview[];
}

export interface GameReview extends BaseReviewModel {}
