import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorKeyup = new EventEmitter<any>();
  editor;

  contentHtml: any;
  contentJson: any;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: [
        'link', 'paste', 'table',
        'advlist', 'autolink', 'image',
        'lists', 'charmap', 'print',
        'preview',  'anchor', 'code',
        'colorpicker', 'insertdatetime', 'textcolor'
      ],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  jsonStringEscape() {
    this.contentJson = JSON.stringify(this.contentHtml);
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
