import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PredictionServiceService } from '../path/prediction-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
/*
  CT_folder: string | null = null;
  PET_folder: string | null = null;
 // plotUrl!: string;
 // input_dir = '../dummyData/A200';
 // imageURL!: string;

//  constructor(private http: HttpClient) { }
  constructor() { }
  
  ngOnInit() {
    //const inputDir = '../dummyData/A200';
    // Set the URL of the API endpoint that returns the plot data
    //this.plotUrl = `/api/plot?input_dir=${this.input_dir}`;
  }
  
  
  //we take CT and PET folder input here and 
  onFileSelected(event: any, folderType: string) {
    const files = event.target.files;
    const fileArr = Array.prototype.slice.call(files);
  
    // Check if all files in folder are DICOM format
    const invalidFiles = fileArr.filter(file => !file.name.endsWith('.dcm'));
    if (invalidFiles.length > 0) {
      alert(`Invalid files in ${folderType} folder. Only DICOM files are allowed.`);
      return;
    }

    // Store folder path based on folder type
    if (folderType === 'CT') {
    this.CT_folder = files[0].webkitRelativePath.split(files[0].name)[0];
    } else if (folderType === 'PET') {
      this.PET_folder = files[0].webkitRelativePath.split(files[0].name)[0];
    }

  }
  
  //to prediction
  onUpload() {
    // Check if both folders are selected
    if (!this.CT_folder || !this.PET_folder) {
      alert('Please select both CT and PET folders.');
      return;
    }
  
    console.log("onUpload() ok");

    if (this.CT_folder.length > 0 && this.PET_folder.length > 0) {
      const CTData = new FormData();
      const PETData = new FormData();
      for (let i = 0; i < this.CT_folder.length; i++) {
        CTData.append("file[]", this.CT_folder[i], this.CT_folder[i].name);
      }
      // Call your service method and pass formData as parameter
      this.myService.uploadFolder(formData).subscribe(result => {
        console.log(result);
      });
    }

    // Call prediction class with folder paths
    //this.predictionService.predict(this.CT_folder, this.PET_folder).subscribe(result => {
      // handle result here
    //}, error => {
    //  console.log(error);
    //});
  }
    */
  
  private ctFolder: File | null = null;
  private petFolder: File | null = null;

  constructor(private predictionService: PredictionServiceService) {

  }

  ngOnInit() { }
 
  onFolderSelected(event: any, folderType: 'CT' | 'PET') {
    const files: FileList | null = event?.target?.files;
    if (files?.length) {
      const allowedExtensions = ['dcm'];
      const selectedFiles = Array.from(files);
      const selectedFileNames = selectedFiles.map(file => file.name);
      const invalidFiles = selectedFileNames.filter(name => {
        const extension = name.split('.').pop();
        return extension && !allowedExtensions.includes(extension);
      });
  
      if (invalidFiles.length > 0) {
        console.log(`Invalid ${folderType} files: ${invalidFiles.join(', ')}`);
        return;
      }
  
      if (folderType === 'CT') {
        this.ctFolder = selectedFiles[0];
      } else if (folderType === 'PET') {
        this.petFolder = selectedFiles[0];
      }
    }
  }
   
  

  onUpload() {
    if (this.ctFolder && this.petFolder) {
    
      this.predictionService.predictionResults(this.ctFolder, this.petFolder)
        //.subscribe(result => {
        //console.log(result);
        //});
        ;
      console.log("ok");
    }
  }

}
