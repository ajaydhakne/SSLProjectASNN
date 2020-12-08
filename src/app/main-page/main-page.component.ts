import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import * as ace from "ace-builds";
// import 'ace-builds/src-noconflict/ext-language_tools';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {

  constructor() { }

  @ViewChild("editor") private editor: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    // ace.require(‘ace/ext/language_tools’)
    ace.config.set("fontSize", "14px");
    ace.config.set(
      "basePath",
      "https://unpkg.com/ace-builds@1.4.12/src-noconflict"
    );
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("");
    aceEditor.setTheme("ace/theme/twilight");
    aceEditor.session.setMode("");
    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });
  }
  
//  var content =document.getElementById("content");
 

    
  
}
