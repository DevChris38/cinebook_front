import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { from, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageService {
  // Your web app's Firebase configuration
  firebaseConfig = {
    apiKey: 'AIzaSyDxAmRoOtWYKQH0pZvUzZroLnNtk3IxX7U',
    authDomain: 'cinebook-c8baa.firebaseapp.com',
    projectId: 'cinebook-c8baa',
    storageBucket: 'cinebook-c8baa.appspot.com',
    messagingSenderId: '958953128252',
    appId: '1:958953128252:web:7b08c8710fdf5bb2241e39',
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);

  // Initialize Cloud Storage and get a reference to the service
  storage = getStorage(this.app);

  // Create a storage reference from our storage service
  storageRef = ref(this.storage);

  // Create a child reference
  imagesRef = ref(this.storage, 'images');

  // imagesRef now points to 'images'

  uploadFile(image: Blob): Observable<string> {
    const uuidImage = uuidv4();
    const uploadRef = ref(this.imagesRef, uuidImage);

    if (image === null || image === undefined) {
      throw new Error("Pas d'image uploadée");
    }
    return from(uploadBytes(uploadRef, image)).pipe(
      switchMap((snapshot) => {
        console.log('Uploaded a blob file', snapshot);
        return from(getDownloadURL(uploadRef));
      }),
    );
  }
}
