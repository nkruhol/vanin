import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

const rows = [
  {
    email: "",
    articleName: "Статья 1",
    articleId: 1,
  },
  {
    email: "",
    articleName: "Статья 2",
    articleId: 2,
  },
]

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent {

  constructor(
    private fb: FormBuilder,
  ) { }

  isLoading;
  articleList;

  checkForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
  });

  documentForm = this.fb.group({
    articleId: [null],
  });

  checkEmail() {

    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.articleList = rows;
    }, 2000);

  }

  fileChanged(e) {
    console.log(e.target.files)
  }
}
