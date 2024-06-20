import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import sweet from "sweetalert2"
import { StorageServiceService } from "@app/core/services/storage/storage.service.service";
import { NgClass } from "@angular/common";


interface FileUpload {
  file: any;
}

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './storage.component.html',
})
export default class StorageComponent {

  private _storageService: StorageServiceService = inject(StorageServiceService)

  protected formControl;

  previewUrls: string[] = [];


  files: FileList[] = []


  constructor() {
    this.formControl = new FormGroup<FileUpload>({
      file: new FormControl(null, [
        Validators.required
      ])
    })

  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input || !input.files) return;

    const files = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      this.previewUrls.push(url);
    }
  }

  async onSubmit(event: any) {
    event.preventDefault()
    const files = event.target.profile.files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const res = await this._storageService.uploadFile(file, 'images')
      res.task.on('state_changed', (snapshot) => {
        console.log(snapshot);

      },
        async(error) => {
          await sweet.fire({
            icon: "error",
            title: "Error uploaded",
            text: "File uploaded Error",
            showConfirmButton: true,
            background: '#1a202c',
            position: 'top-end',
            timer: 1500
          })
        },
        async () => {
          await sweet.fire({
            icon: "success",
            title: "File uploaded",
            text: "File uploaded successfully",
            showConfirmButton: false,
            background: '#1a202c',
            position: 'top-end',
            timer: 1500
          })
        })
    }
    this.previewUrls = []
    this.formControl.reset()
  }
}
