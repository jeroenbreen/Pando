// modules
import { Component, Input } from '@angular/core';

import { Folder } from './folder/folder';

@Component({
    selector: 'file-system',
    templateUrl: './file-system.component.html',
    styleUrls: ['./file-system.component.less']
})



export class FileSystemComponent {

    currentFolder: Folder;
    history: Folder[] = [];
    currentFrame: number = 0;

    // initial passing of root sets root as first currentFolder
    @Input() set root(root: Folder) {
        if (root) {
            console.log(root);
            this.selectFolder(root);
        }
    }

    selectFolder(folder) {
        if (this.history.length - 1 > this.currentFrame) {
            this.history = this.history.slice(0, this.currentFrame + 1)
        }
        this.history.push(folder);
        this.currentFrame = this.history.length - 1;
        this.currentFolder = folder;
    }

    back() {
        if (this.currentFrame > 0) {
            this.currentFrame--;
            this.currentFolder = this.history[this.currentFrame];
        }
    }

    forward() {
        if (this.currentFrame < (this.history.length - 1)) {
            this.currentFrame++;
            this.currentFolder = this.history[this.currentFrame];
        }
    }
}