import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

//Others Modules
import { ButtonModule } from "primeng/button";
import { CKEditorModule } from "ckeditor4-angular";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { SkeletonModule } from "primeng/skeleton";

//Own Components
import { ActivitiesListComponent } from "./pages/activities/activities-list/activities-list.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CategoriesFormComponent } from "./pages/categories/categories-form/categories-form.component";
import { CategoryListComponent } from "./pages/categories/category-list/category-list.component";
import { ControlComponent } from "./pages/backoffice-list/control/control.component";
import { HomeFormComponent } from "./pages/home/home-form/home-form.component";
import { MembersComponent } from "./pages/members/members.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { OrganizationComponent } from "./pages/organization/organization-view/organization.component";
import { OrganizationFormComponent } from "./pages/organization/organization-form/organization-form.component";
import { SlidesFormComponent } from "./pages/slides/slides-form/slides-form.component";
import { SlidesListComponent } from "./pages/slides/slides-list/slides-list.component";
import { TableComponent } from "./components/table/table.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { UserFormComponent } from "./pages/users/user-form/user-form.component";
import { UsersListComponent } from "./pages/users/users-list/users-list.component";
import { BackofficeComponent } from "./backoffice.component";
import { SkeletonComponent } from "./components/skeleton/skeleton.component";
import { MembersListComponent } from "./pages/members/members-list/members-list.component";

import { SharedModule } from "../shared/shared.module";
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { BackofficeListComponent } from "./pages/backoffice-list/backoffice-list.component";
import { HeaderComponent } from "./components/header/header.component";
import { NewsListComponent } from './pages/news/news-list/news-list.component';

@NgModule({
  declarations: [
    BackofficeListComponent,
    BackofficeComponent,
    ActivitiesListComponent,
    ActivityFormComponent,
    CategoriesFormComponent,
    CategoryListComponent,
    ControlComponent,
    HomeFormComponent,
    MembersComponent,
    NewsFormComponent,
    OrganizationComponent,
    OrganizationFormComponent,
    SlidesFormComponent,
    SlidesListComponent,
    TableComponent,
    TestimonialFormComponent,
    UserFormComponent,
    UsersListComponent,
    SkeletonComponent,
    SideBarComponent,
    HeaderComponent,
    MembersListComponent,
    NewsListComponent,
  ],
  imports: [
    ButtonModule,
    CKEditorModule,
    CommonModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    FileUploadModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    RouterModule,
    RxReactiveFormsModule,
    SharedModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    SkeletonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class BackOfficeModule {}
