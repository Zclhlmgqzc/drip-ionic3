/**
 * Created by Jason.z on 2017/7/4.
 */

import { NgModule } from '@angular/core';
import { TopPage } from './top';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [TopPage],
    imports: [IonicPageModule.forChild(TopPage)],
})
export class TopPageModule { }