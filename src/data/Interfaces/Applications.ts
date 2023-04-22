import { BaseDataModel, BaseReviewModel } from "./BaseModels";

export interface Application extends BaseDataModel {
    reviews: ApplicationReview[];
}

export interface ApplicationReview extends BaseReviewModel {}
