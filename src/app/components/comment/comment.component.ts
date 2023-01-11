import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  styleUrls: ['./comment.component.scss'],
  templateUrl: './comment.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {
  readonly commentForm: FormGroup =
    new FormGroup({
      comment: new FormControl('', Validators.required)
    });

  onCommentFormSubmitted(commentForm: FormGroup): void {
    console.log(commentForm.value);
  }
}
