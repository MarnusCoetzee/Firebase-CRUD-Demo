import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../../../environments/environment';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
@NgModule({
  declarations: [],
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'demo-crud'),
    AngularFirestoreModule.enablePersistence(),
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
  ],
  exports: [
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
  ],
  providers: [UserTrackingService],
})
export class FirebaseModule {}
