import { Component, effect, inject, signal } from '@angular/core';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomerInformations } from '../../customer-informations';
import { Router, RouterLink } from '@angular/router';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FirebaseStorageService } from '../services/firebase-storage.service';

@Component({
  selector: 'app-data-input-page',
  imports: [ImageCropperComponent, MatLabel, MatFormField, ReactiveFormsModule],
  templateUrl: './data-input-page.component.html',
  standalone: true,
  styleUrl: './data-input-page.component.css',
})
export class DataInputPageComponent {
  imageChangedEvent: Event | null = null;
  photoAccueilChangedEvent: Event | null = null;
  croppedImage: SafeUrl = '';
  firebaseStorage = inject(FirebaseStorageService);
  photoPortraitBlob: Blob = new Blob();
  photoAccueilBlob: Blob = new Blob();
  uploadedPhotoPortrait = signal('');
  uploadedPhotoAccueil = signal('');
  photoPortraitIsLoaded = signal(false);
  photoAccueilIsLoaded = signal(false);

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {
    effect(() => {
      if (
        this.uploadedPhotoPortrait().length !== 0 &&
        this.uploadedPhotoAccueil().length !== 0
      ) {
        this.form.controls.photoPortrait.setValue(this.uploadedPhotoPortrait());
        this.form.controls.photoAccueil.setValue(this.uploadedPhotoAccueil());
        this.router.navigate(['/mysite'], { state: this.form.value });
      }
    });
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
    this.photoPortraitIsLoaded.set(true);
  }

  photoAccueilChangeEvent(event: Event): void {
    this.photoAccueilChangedEvent = event;
    this.photoAccueilIsLoaded.set(true);
  }

  photoPortraitCropped(event: ImageCroppedEvent) {
    if (event.objectUrl != null) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
        event.objectUrl,
      );
    }
    // event.blob can be used to upload the cropped image
    if (event.blob) {
      this.photoPortraitBlob = event.blob;
    }
  }

  photoAccueilCropped(event: any) {
    if (event.objectUrl != null) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
        event.objectUrl,
      );
    }
    // event.blob can be used to upload the cropped image
    if (event.blob) {
      this.photoAccueilBlob = event.blob;
    }
  }

  uploadImages() {
    this.firebaseStorage
      .uploadFile(this.photoPortraitBlob)
      .subscribe((value) => {
        this.uploadedPhotoPortrait.set(value);
      });
    this.firebaseStorage
      .uploadFile(this.photoAccueilBlob)
      .subscribe((value) => {
        this.uploadedPhotoAccueil.set(value);
      });
  }

  customerInformations = signal(
    new CustomerInformations(
      'Toto',
      'Titi',
      'https://media.istockphoto.com/id/1495088043/fr/vectoriel/ic%C3%B4ne-de-profil-utilisateur-avatar-ou-ic%C3%B4ne-de-personne-photo-de-profil-symbole-portrait.jpg?s=612x612&w=is&k=20&c=vsJ0B45HvtKX3Zu3DSXRkk86pWcOGO3eCGxNzXWEzfA=',
      'https://studio144.fr/wp-content/uploads/2021/12/trouver-un-plateau-de-tournage-a-paris.jpg',
      '',
      '',
      '',
    ),
  );
  readonly form = new FormGroup({
    prenom: new FormControl(this.customerInformations().prenom),
    nom: new FormControl(this.customerInformations().nom),
    photoPortrait: new FormControl(this.customerInformations().photoPortrait),
    photoAccueil: new FormControl(this.customerInformations().photoAccueil),
    facebookLink: new FormControl(this.customerInformations().facebookLink),
    xLink: new FormControl(this.customerInformations().xLink),
    linkedinLink: new FormControl(this.customerInformations().linkedinLink),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
