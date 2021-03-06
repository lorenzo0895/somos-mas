import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Slide, SlideResponse } from "../../models/slide.interface";
import { BaseService } from "src/app/services/base.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SlideService extends BaseService<any> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL_SLIDES);
  }

  public getSingleSlide(id: number): Observable<SlideResponse> {
    return this.getById(id);
  }

  public createSlides(slide: Slide): Observable<SlideResponse> {
    return this.post(slide);
  }

  public upDateSlides(id: number, slide: Slide): Observable<SlideResponse> {
    return this.putById(id, slide);
  }

  public getAllSildes(skip?: number, limit?: number): Observable<Slide[]> {
    return this.getAll();
  }

  public deleteSlide(id: number): Observable<any> {
    return this.deleteById(id);
  }

  public getListOfSlides(key: string = ''): Observable<Slide[]> {
    return this.getAll(key);
  }

  public updateOrderOfSlide(slide: any) {
    return this.putById(slide.id, slide);
  }
}
